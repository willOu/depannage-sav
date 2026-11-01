/* Notices ajoutées par l'administrateur depuis l'appli.
   Le PDF (pages choisies, françaises par défaut) et le texte de ses pages sont déposés dans le stockage Supabase (dossier « notices », privé),
   la liste dans la table notices_ajoutees. Chaque téléphone ajoute ces notices à l'onglet « Notice PDF » des fiches et à la recherche ;
   le PDF est gardé hors ligne après la première ouverture (même cache que les autres notices). */
(function () {
  const K = "ntc-aj", CACHE = "sav-notices-2";
  const st = { get(k, d) { try { const v = localStorage.getItem(k); return v === null ? d : JSON.parse(v); } catch (e) { return d; } }, set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} } };
  const actif = () => !!(window.AUTH_ACTIF && window.AUTH && AUTH.email());
  const mo = ko => ko < 1024 ? Math.max(1, Math.round(ko)) + " Ko" : (ko / 1024).toFixed(1).replace(".", ",") + " Mo";
  const cle = p => location.origin + "/__notices-ajoutees/" + p;

  /* ---------- ajout des notices dans la liste des fiches ---------- */
  function fusion() {
    const N = window.NOTICES_PDF = window.NOTICES_PDF || {};
    Object.keys(N).forEach(id => { N[id] = N[id].filter(n => !n.sb); if (!N[id].length) delete N[id]; });
    st.get(K, []).slice().reverse().forEach(r => {
      (N[r.fiche_id] = N[r.fiche_id] || []).push({ f: "sb/" + r.chemin, t: r.titre, p: r.pages, pt: r.pages_original, ko: r.ko, m: 0, sb: r.chemin, tx: r.texte_chemin || "", aid: r.id });
    });
  }
  fusion();
  async function sync() {
    if (!actif() || navigator.onLine === false) return;
    if (!AUTH.pret()) { setTimeout(sync, 3000); return; }
    const r = await AUTH.api("/rest/v1/notices_ajoutees?select=id,genre,fiche_id,titre,chemin,texte_chemin,pages,pages_original,ko,cree_le&order=cree_le.desc&limit=500", {});
    if (r.ok && Array.isArray(r.j)) {
      const av = JSON.stringify(st.get(K, [])); st.set(K, r.j); fusion();
      if (av !== JSON.stringify(r.j) && window.noticeTexteReset) noticeTexteReset();
    }
  }
  addEventListener("auth-ok", () => setTimeout(sync, 2500));
  addEventListener("load", () => setTimeout(sync, 5000));
  addEventListener("online", () => setTimeout(sync, 3000));

  /* ---------- fichiers du stockage (avec cache hors ligne) ---------- */
  async function fichier(chemin, type) {
    let c = null; try { c = await caches.open(CACHE); const h = await c.match(cle(chemin)); if (h) return h; } catch (e) {}
    if (!actif()) throw new Error("reseau");
    const r = await AUTH.brut("/storage/v1/object/authenticated/notices/" + chemin, {}, 90000);
    if (!r) throw new Error("reseau");
    if (!r.ok) throw new Error("http");
    const b = await r.blob();
    const rep = new Response(b, { headers: { "Content-Type": type } });
    try { if (c) await c.put(cle(chemin), rep.clone()); } catch (e) {}
    return rep;
  }
  window.NAJOUT = {
    octets: async n => (await fichier(n.sb, "application/pdf")).arrayBuffer(),
    texte: async n => n.tx ? (await fichier(n.tx, "application/json")).json() : [],
    enCache: async n => { try { return !!(await (await caches.open(CACHE)).match(cle(n.sb))); } catch (e) { return false; } },
    async enregistrer(id, k, btn) {
      const n = (NOTICES_PDF[id] || [])[k]; if (!n) return;
      const lab = btn.textContent; btn.textContent = "Téléchargement…";
      try {
        const b = new Blob([await NAJOUT.octets(n)], { type: "application/pdf" }), u = URL.createObjectURL(b), a = document.createElement("a");
        a.href = u; a.download = (n.t || "notice").replace(/[^\wÀ-ÿ -]+/g, "").slice(0, 60) + ".pdf"; document.body.appendChild(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(u), 30000);
        btn.textContent = lab;
      } catch (e) { btn.textContent = "Pas de réseau"; setTimeout(() => btn.textContent = lab, 3000); }
    },
    sync
  };

  /* ---------- détection des pages en français ---------- */
  const SW = {
    fr: "les des du et pour est une dans avec sur aux pas être sont vous cette ces qui que par ou lors entre doit après avant portail leur votre peut",
    it: "il della per con che di gli sono non alla del delle dei una nella sul può essere deve questo quando dopo cancello anche come ed nel",
    en: "the and of to is for with be are this that on by it when must not can after before gate if from",
    de: "der die und das mit für nicht ist den dem ein eine werden wird auf bei sie zu oder nach vor tor",
    es: "el los las con para del que una por es se al como puede debe este cuando después antes puerta",
    pt: "os das não com para uma do da em ao pelo pela deve pode este quando depois antes portão são",
    nl: "de het en van een voor niet met is op te bij worden wordt deze naar na voor poort",
    pl: "nie się jest na do oraz przy aby lub jeśli może należy przed po bramy jak że od"
  };
  const LS = Object.fromEntries(Object.entries(SW).map(([k, v]) => [k, new Set(v.split(" "))]));
  function langue(t) {
    const w = (t.toLowerCase().match(/[a-zà-ÿ]+/g) || []), c = {};
    Object.keys(LS).forEach(k => c[k] = 0);
    w.forEach(x => Object.keys(LS).forEach(k => { if (LS[k].has(x)) c[k]++; }));
    const best = Object.keys(c).sort((a, b) => c[b] - c[a])[0];
    if (w.length < 60) return "fig";
    if (best === "fr" && c.fr >= 5) return "fr";
    return best;
  }

  /* ---------- administration ---------- */
  let lib = null;
  const chargePdfLib = () => lib || (lib = new Promise((ok, ko) => { if (window.PDFLib) return ok(window.PDFLib); const s = document.createElement("script"); s.src = "vendor/pdflib/pdf-lib.min.js"; s.onload = () => ok(window.PDFLib); s.onerror = () => { lib = null; ko(new Error("lib")); }; document.head.appendChild(s); }));
  const nomFiche = (g, id) => {
    if (g === "carte") { const b = (typeof BOARDS !== "undefined" ? BOARDS : []).find(x => x.c.id === id); return b ? `${b.m.nom} · ${b.c.nom}` : id; }
    const a = (window.ACCESSOIRES || []).find(x => x.id === id); return a ? `${a.marque} · ${a.nom}` : id;
  };
  let doc = null; /* PDF en cours : { pdf, octets, pages: [{ t, l }] } */

  window.viewNoticesAdmin = async function () {
    setHead("Ajouter une notice", true);
    if (!(window.SYNC && SYNC.estAdmin())) { app.innerHTML = `<p class="empty">Page réservée à l'administrateur.</p>`; return; }
    doc = null;
    const opts = `<option value="">Choisir la fiche…</option>` + MARQUES.map(m => `<optgroup label="${esc(m.nom)} · cartes">${m.cartes.map(c => `<option value="carte|${c.id}">${esc(c.nom)}</option>`).join("")}</optgroup>`).join("") +
      (() => { const g = {}; (window.ACCESSOIRES || []).forEach(a => (g[a.marque] = g[a.marque] || []).push(a)); return Object.keys(g).sort().map(m => `<optgroup label="${esc(m)} · accessoires">${g[m].map(a => `<option value="accessoire|${a.id}">${esc(a.nom)}</option>`).join("")}</optgroup>`).join(""); })();
    const ch = "display:block;width:100%;margin-top:6px;height:46px;padding:0 10px;border-radius:12px;border:1px solid var(--line);background:var(--card);color:var(--ink);font:inherit";
    app.innerHTML = `<p class="note">Déposez le PDF du fabricant : l'appli repère les pages en français (et les pages de schémas), vous ajustez la sélection, puis la notice est ajoutée à l'onglet « Notice PDF » de la fiche et à la recherche, pour toute l'équipe. Les pages scannées (sans texte) ne seront pas trouvées par la recherche.</p>
      <label style="display:block;margin:12px 0;font-weight:600">Fiche<select id="naf" style="${ch}">${opts}</select></label>
      <label style="display:block;margin:12px 0;font-weight:600">Titre affiché<input id="nat" maxlength="160" placeholder="ex. Notice CAME ZBX7N FA02214-FR (03/2025)" style="${ch}"></label>
      <label class="dbtn" style="display:block;text-align:center;cursor:pointer">📄 Choisir le PDF<input id="nap" type="file" accept="application/pdf" style="display:none"></label>
      <p class="note" id="nas"></p><div id="nag"></div>
      <h2>Notices déjà ajoutées</h2><div id="nal"><p class="note">Chargement…</p></div>`;
    $("#nap").onchange = e => { const f = e.target.files[0]; if (f) analyser(f); };
    liste();
  };
  async function liste() {
    const el = $("#nal"); if (!el) return;
    await sync();
    const L = st.get(K, []);
    el.innerHTML = L.length ? L.map(r => `<div class="sgl adm"><a href="${r.genre === "carte" ? "#/c/" : "#/a/"}${esc(r.fiche_id)}/pdf"><b>${esc(nomFiche(r.genre, r.fiche_id))}</b></a><small>${esc(r.titre)} · ${r.pages} p. · ${mo(r.ko)} · ${new Date(r.cree_le).toLocaleDateString("fr-FR")}</small><div class="sga"><button class="mini" data-id="${Number(r.id)}">Supprimer</button></div></div>`).join("") : `<p class="empty">Aucune notice ajoutée depuis l'appli.</p>`;
    el.querySelectorAll("button[data-id]").forEach(b => b.onclick = async () => {
      const r = L.find(x => x.id === Number(b.dataset.id)); if (!r || !confirm("Supprimer cette notice pour toute l'équipe ?")) return;
      b.disabled = true;
      const fs = [r.chemin].concat(r.texte_chemin ? [r.texte_chemin] : []);
      await AUTH.brut("/storage/v1/object/notices", { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ prefixes: fs }) });
      const d = await AUTH.api("/rest/v1/notices_ajoutees?id=eq." + r.id, { method: "DELETE", headers: { Prefer: "return=minimal" } });
      if (!d.ok) { b.disabled = false; alert(d.net ? "Pas de réseau." : "Suppression refusée."); return; }
      try { const c = await caches.open(CACHE); fs.forEach(x => c.delete(cle(x))); } catch (e) {}
      liste();
    });
  }
  async function analyser(f) {
    const s = m => { $("#nas").textContent = m; }, g = $("#nag");
    g.innerHTML = ""; doc = null;
    if (f.size > 50 * 1048576) { s("Fichier trop lourd (50 Mo maximum)."); return; }
    try {
      s("Lecture du PDF…");
      const octets = new Uint8Array(await f.arrayBuffer());
      const L = await window.chargePdfJs();
      const pdf = await L.getDocument({ data: octets.slice() }).promise;
      const pages = [];
      for (let i = 1; i <= pdf.numPages; i++) {
        const p = await pdf.getPage(i); const tc = await p.getTextContent();
        const t = tc.items.map(x => x.str).join(" ").replace(/\s+/g, " ").trim();
        pages.push({ t, l: langue(t) });
        if (i % 10 === 0) s(`Analyse des pages : ${i} / ${pdf.numPages}…`);
      }
      doc = { pdf, octets, pages, nom: f.name };
      /* présélection : pages en français, plus les pages de schémas (peu de texte) avant la première page d'une autre langue et à côté des pages en français */
      const premEtr = pages.findIndex(p => p.l !== "fr" && p.l !== "fig");
      const sel = pages.map((p, i) => p.l === "fr" || (p.l === "fig" && (premEtr < 0 || i < premEtr || (pages[i - 1] && pages[i - 1].l === "fr") || (pages[i + 1] && pages[i + 1].l === "fr"))));
      if (!sel.some(Boolean)) sel.fill(true); /* rien de reconnu (scan) : tout garder */
      const nfr = pages.filter(p => p.l === "fr").length;
      s(`${pdf.numPages} pages, ${nfr} en français détectées. Vérifiez les pages cochées (miniatures), puis ajoutez.`);
      const LAB = { fr: "FR", fig: "schéma", it: "IT", en: "EN", de: "DE", es: "ES", pt: "PT", nl: "NL", pl: "PL" };
      g.innerHTML = `<div class="sga" style="margin:6px 0"><button class="mini" id="nsa">Tout cocher</button><button class="mini" id="nsn">Rien</button><button class="mini" id="nsf">Français seulement</button></div>
        <div class="nagr">${pages.map((p, i) => `<label class="nap ${p.l === "fr" ? "fr" : ""}"><canvas data-i="${i}"></canvas><span><input type="checkbox" data-i="${i}"${sel[i] ? " checked" : ""}> p. ${i + 1} · ${LAB[p.l] || p.l.toUpperCase()}</span></label>`).join("")}</div>
        <p class="note" id="nac"></p><button class="dbtn" id="nago">Ajouter la notice à la fiche</button>`;
      const maj = () => { const n = g.querySelectorAll("input[type=checkbox]:checked").length; $("#nac").textContent = `${n} page${n > 1 ? "s" : ""} gardée${n > 1 ? "s" : ""} sur ${pages.length}.`; };
      g.querySelectorAll("input[type=checkbox]").forEach(c => c.onchange = maj); maj();
      $("#nsa").onclick = () => { g.querySelectorAll("input[type=checkbox]").forEach(c => c.checked = true); maj(); };
      $("#nsn").onclick = () => { g.querySelectorAll("input[type=checkbox]").forEach(c => c.checked = false); maj(); };
      $("#nsf").onclick = () => { g.querySelectorAll("input[type=checkbox]").forEach(c => c.checked = pages[+c.dataset.i].l === "fr"); maj(); };
      if (!$("#nat").value.trim()) $("#nat").value = f.name.replace(/\.pdf$/i, "").replace(/[_]+/g, " ").slice(0, 160);
      $("#nago").onclick = ajouter;
      /* miniatures (à l'écran seulement) */
      const io = new IntersectionObserver(es => es.forEach(async e => {
        if (!e.isIntersecting) return; io.unobserve(e.target);
        const i = +e.target.dataset.i, p = await pdf.getPage(i + 1), v1 = p.getViewport({ scale: 1 }), v = p.getViewport({ scale: 220 / v1.width });
        e.target.width = v.width; e.target.height = v.height; await p.render({ canvasContext: e.target.getContext("2d"), viewport: v }).promise;
      }), { rootMargin: "600px 0px" });
      g.querySelectorAll("canvas").forEach(c => io.observe(c));
    } catch (e) { s("Impossible de lire ce PDF (" + (e && e.message || "erreur") + ")."); }
  }
  async function ajouter() {
    const s = m => { $("#nas").textContent = m; $("#nac").textContent = m; };
    const fv = $("#naf").value, titre = $("#nat").value.trim(), b = $("#nago");
    if (!doc) return;
    if (!fv) { s("⚠ Choisissez la fiche."); $("#naf").focus(); return; }
    if (titre.length < 2) { s("⚠ Donnez un titre."); return; }
    const idx = [...document.querySelectorAll("#nag input[type=checkbox]:checked")].map(c => +c.dataset.i).sort((a, b) => a - b);
    if (!idx.length) { s("⚠ Cochez au moins une page."); return; }
    const [genre, fiche] = fv.split("|");
    b.disabled = true;
    try {
      s("Préparation du PDF…");
      const PL = await chargePdfLib();
      const src = await PL.PDFDocument.load(doc.octets, { ignoreEncryption: true }), out = await PL.PDFDocument.create();
      (await out.copyPages(src, idx)).forEach(p => out.addPage(p));
      out.setTitle(titre);
      const pdfBytes = await out.save({ useObjectStreams: true });
      const base = (fiche + "-" + Date.now().toString(36)).toLowerCase().replace(/[^a-z0-9-]+/g, "-").slice(0, 70);
      const chemin = base + ".pdf", tchemin = base + ".json";
      const textes = idx.map(i => doc.pages[i].t);
      s("Envoi du PDF…");
      let r = await AUTH.brut("/storage/v1/object/notices/" + chemin, { method: "POST", headers: { "Content-Type": "application/pdf", "x-upsert": "false" }, body: new Blob([pdfBytes], { type: "application/pdf" }) }, 180000);
      if (!r || !r.ok) throw new Error(r ? "envoi refusé (" + r.status + ")" : "pas de réseau");
      r = await AUTH.brut("/storage/v1/object/notices/" + tchemin, { method: "POST", headers: { "Content-Type": "application/json", "x-upsert": "false" }, body: JSON.stringify(textes) }, 60000);
      const avecTexte = !!(r && r.ok);
      s("Enregistrement…");
      const ins = await AUTH.api("/rest/v1/notices_ajoutees", { method: "POST", headers: { "Content-Type": "application/json", Prefer: "return=minimal" }, body: JSON.stringify({ genre, fiche_id: fiche, titre: titre.slice(0, 160), chemin, texte_chemin: avecTexte ? tchemin : null, pages: idx.length, pages_original: doc.pages.length, ko: Math.round(pdfBytes.length / 1024), ajoute_par: AUTH.email() }) });
      if (!ins.ok) { await AUTH.brut("/storage/v1/object/notices", { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ prefixes: [chemin, tchemin] }) }); throw new Error(ins.net ? "pas de réseau" : "enregistrement refusé"); }
      try { const c = await caches.open(CACHE); await c.put(cle(chemin), new Response(new Blob([pdfBytes]), { headers: { "Content-Type": "application/pdf" } })); } catch (e) {}
      await sync();
      $("#nag").innerHTML = `<p class="note">✓ Notice ajoutée (${idx.length} pages) : <a href="${genre === "carte" ? "#/c/" : "#/a/"}${esc(fiche)}/pdf">voir sur la fiche</a>. Elle apparaîtra chez les techniciens à leur prochaine connexion avec du réseau.</p>`;
      $("#nas").textContent = ""; doc = null; $("#nap").value = "";
      liste();
    } catch (e) { b.disabled = false; s("Échec : " + (e && e.message || "erreur") + "."); }
  }
})();
