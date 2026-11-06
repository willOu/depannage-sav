/* Photos réelles des cartes (onglet Bornier).
   Un technicien envoie une photo de la carte (réduite à 1600 px, JPEG) : elle part dans le stockage Supabase (dossier « photos-cartes », privé)
   et dans la table photos_cartes, « en attente ». L'administrateur la valide dans Administration → Photos des cartes (#/photos),
   et y place des repères : un point sur la photo = une borne de la fiche. Sur la fiche, toucher un repère ouvre la borne,
   toucher une borne fait clignoter son repère. Les photos publiées sont gardées sur le téléphone (hors ligne). */
(function () {
  const PUB = "ph-pub", MES = "ph-mes", NB = "ph-nb", CACHE = "sav-notices-2", BUCKET = "photos-cartes";
  const st = { get(k, d) { try { const v = localStorage.getItem(k); return v === null ? d : JSON.parse(v); } catch (e) { return d; } }, set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} } };
  const JS = { "Content-Type": "application/json" };
  const actif = () => !!(window.AUTH_ACTIF && window.AUTH && AUTH.email());
  const moi = () => ((window.AUTH && AUTH.email()) || "").toLowerCase();
  const admin = () => !!(window.SYNC && SYNC.estAdmin());
  const fdate = d => { try { return new Date(d).toLocaleDateString("fr-FR", { day: "numeric", month: "short", year: "numeric" }); } catch (e) { return ""; } };
  const cle = p => location.origin + "/__photos-cartes/" + p;
  const okChemin = p => /^[a-z0-9-]{1,100}\.jpg$/.test(p || "");
  const carte = id => { const b = (typeof BOARDS !== "undefined" ? BOARDS : []).find(x => x.c.id === id); return b ? b.c : null; };
  const nomCarte = id => { const b = (typeof BOARDS !== "undefined" ? BOARDS : []).find(x => x.c.id === id); return b ? `${b.m.nom} · ${b.c.nom}` : id; };
  const ETAT = { attente: "En attente de validation", publiee: "Publiée", refusee: "Non retenue" };
  /* repère → borne de la fiche : même groupe et même numéro, sinon même numéro */
  const borneDe = (c, r) => {
    if (!c || !r) return null;
    let k = null;
    c.bornier.groupes.forEach((g, gi) => g.bornes.forEach((b, i) => { if (b.n === r.n && (g.nom === r.g || !k)) k = { gi, i, b, g: g.nom }; }));
    return k;
  };
  /* repères valides seulement (coordonnées 0..1, borne existante) */
  const reperes = (c, l) => (Array.isArray(l) ? l : []).filter(r => r && typeof r.x === "number" && typeof r.y === "number" && r.x >= 0 && r.x <= 1 && r.y >= 0 && r.y <= 1 && borneDe(c, r));

  /* ---------- fichiers (avec cache hors ligne) ---------- */
  async function image(chemin) {
    if (!okChemin(chemin)) throw new Error("chemin");
    let c = null; try { c = await caches.open(CACHE); const h = await c.match(cle(chemin)); if (h) return h.blob(); } catch (e) {}
    if (!actif() || navigator.onLine === false) throw new Error("reseau");
    const r = await AUTH.brut("/storage/v1/object/authenticated/" + BUCKET + "/" + chemin, {}, 60000);
    if (!r) throw new Error("reseau");
    if (!r.ok) throw new Error("http");
    const b = await r.blob();
    try { if (c) await c.put(cle(chemin), new Response(b, { headers: { "Content-Type": "image/jpeg" } })); } catch (e) {}
    return b;
  }
  const urls = [];
  const libererUrls = () => { while (urls.length) try { URL.revokeObjectURL(urls.pop()); } catch (e) {} };
  async function poserImage(img, chemin, attente) {
    try { const u = URL.createObjectURL(await image(chemin)); urls.push(u); img.src = u; }
    catch (e) { const w = img.closest(".phw"); if (w) w.classList.add("vide"); if (attente) attente.textContent = e.message === "reseau" ? "Photo pas encore téléchargée sur ce téléphone : ouvrez cette fiche une fois avec du réseau." : "Photo indisponible."; }
  }

  /* ---------- synchronisation ---------- */
  let enCours = false, encore = false;
  async function sync() {
    if (enCours) { encore = true; return; }
    if (!actif() || navigator.onLine === false) return;
    if (!AUTH.pret()) { setTimeout(sync, 3000); return; }
    enCours = true;
    try {
      let chg = false;
      const p = await AUTH.api("/rest/v1/photos_cartes?select=id,fiche_id,chemin,largeur,hauteur,legende,reperes,auteur,valide_le&statut=eq.publiee&order=valide_le.asc&limit=500", {});
      if (p.ok && Array.isArray(p.j)) {
        const l = p.j.filter(x => okChemin(x.chemin) && /^[a-z0-9-]+$/.test(x.fiche_id || ""));
        chg = JSON.stringify(st.get(PUB, [])) !== JSON.stringify(l); st.set(PUB, l);
        /* photos retirées : on libère la place ; photos publiées : téléchargées pour le hors ligne */
        try { const gard = new Set(l.map(x => cle(x.chemin))), c = await caches.open(CACHE);
          for (const q of await c.keys()) if (q.url.includes("/__photos-cartes/") && !gard.has(q.url)) await c.delete(q); } catch (e) {}
        setTimeout(() => precharger(l), 3000);
      }
      const m = await AUTH.api("/rest/v1/photos_cartes?select=id,fiche_id,statut,motif,cree_le,legende&email=eq." + encodeURIComponent(moi()) + "&order=cree_le.desc&limit=50", {});
      if (m.ok && Array.isArray(m.j)) { chg = chg || JSON.stringify(st.get(MES, [])) !== JSON.stringify(m.j); st.set(MES, m.j); }
      if (admin()) {
        const n = await AUTH.api("/rest/v1/photos_cartes?select=id&statut=eq.attente&limit=200", {});
        if (n.ok && Array.isArray(n.j)) { chg = chg || st.get(NB, 0) !== n.j.length; st.set(NB, n.j.length); }
      }
      if (chg) rafraichir();
    } catch (e) {} finally { enCours = false; if (encore) { encore = false; setTimeout(sync, 0); } }
  }
  let prech = false;
  async function precharger(l) {
    if (prech) return; prech = true;
    try { for (const x of l.slice(0, 80)) { if (navigator.onLine === false) break; try { await image(x.chemin); } catch (e) { if (e.message === "reseau") break; } } } finally { prech = false; }
  }
  const rafraichir = () => {
    const m = /^#\/c\/([^/]+)\/bornier/.exec(location.hash), a = document.activeElement;
    if (m && !(a && /INPUT|TEXTAREA|SELECT/.test(a.tagName)) && !document.querySelector(".phadd[open]") && typeof route === "function") route();
    if (/^#\/reglages/.test(location.hash) && !(a && /INPUT|TEXTAREA|SELECT/.test(a.tagName)) && typeof viewSettings === "function") viewSettings();
  };
  addEventListener("auth-ok", () => setTimeout(sync, 2500));
  addEventListener("load", () => setTimeout(sync, 5000));
  addEventListener("online", () => setTimeout(sync, 3000));
  setInterval(() => { if (document.visibilityState === "visible") sync(); }, 10 * 60e3);
  addEventListener("auth-out", () => { try { [MES, NB].forEach(k => localStorage.removeItem(k)); } catch (e) {} });

  /* ---------- photo avec repères (fiche et administration) ---------- */
  const vueHtml = (x, rs, id) => `<div class="phw" id="${id}" style="aspect-ratio:${x.largeur} / ${x.hauteur};max-width:calc(55vh * ${(x.largeur / x.hauteur).toFixed(3)})"><img alt="Photo de la carte" draggable="false">` +
    rs.map((r, i) => `<button class="phm" style="left:${(r.x * 100).toFixed(2)}%;top:${(r.y * 100).toFixed(2)}%" data-i="${i}" aria-label="Repère ${i + 1} : borne ${esc(r.n)}">${i + 1}</button>`).join("") + `<p class="phv"></p></div>`;

  /* onglet Bornier : appelé après l'affichage des bornes */
  window.photoBornier = (c, pane) => {
    libererUrls();
    if (!actif()) return;
    const L = st.get(PUB, []).filter(x => x.fiche_id === c.id);
    const att = st.get(MES, []).filter(x => x.fiche_id === c.id && x.statut === "attente").length;
    const div = document.createElement("div"); div.className = "phc";
    let k = 0;
    const dessiner = () => {
      libererUrls();
      const x = L[k], rs = x ? reperes(c, x.reperes) : [];
      div.innerHTML = (x ? `<h2>Photo de la carte</h2>` + vueHtml(x, rs, "phv0") +
        `<div class="phl"><small>${rs.length ? "Touchez un repère pour voir la borne. " : "Repères pas encore placés. "}${esc(x.legende || "")}${x.legende ? " · " : ""}Photo : ${esc(x.auteur || "technicien")}${x.valide_le ? ", " + fdate(x.valide_le) : ""}</small>` +
        (L.length > 1 ? `<span class="phn"><button class="mini" data-d="-1" aria-label="Photo précédente">‹</button>${k + 1} / ${L.length}<button class="mini" data-d="1" aria-label="Photo suivante">›</button></span>` : "") + `</div>` : "") +
        `<details class="phadd"><summary>📷 ${x ? "Ajouter une autre photo" : "Ajouter une photo réelle de la carte"}</summary><div class="phb">
          <p class="hotn">De face, bien éclairée, borniers et inscriptions lisibles, carte hors tension si le capot doit être ouvert. Elle sera visible par toute l'équipe une fois validée par l'administrateur, qui y placera les repères des bornes.</p>
          <label class="dbtn" style="display:block;text-align:center;cursor:pointer">Prendre ou choisir une photo<input type="file" accept="image/*" class="phf" style="display:none"></label>
          <div class="php"></div><input class="phlg" maxlength="200" placeholder="Légende (facultatif, ex. « carte révision 2019, capot retiré »)">
          <button class="dbtn phgo" disabled>Envoyer pour validation</button><p class="hotn phr">${att ? `${att} photo${att > 1 ? "s" : ""} de votre part en attente de validation.` : ""}</p></div></details>`;
      if (x) {
        poserImage(div.querySelector("img"), x.chemin, div.querySelector(".phv"));
        div.querySelectorAll(".phm").forEach(b => b.onclick = () => {
          const r = rs[+b.dataset.i], q = borneDe(c, r); if (!q) return;
          const t = pane.querySelector(`.term[data-k="${q.gi}-${q.i}"]`); if (!t) return;
          if (t.getAttribute("aria-pressed") !== "true") t.click();
          t.scrollIntoView({ block: "center", behavior: "smooth" });
          t.classList.remove("phflash"); void t.offsetWidth; t.classList.add("phflash");
        });
        div.querySelectorAll(".phn button").forEach(b => b.onclick = () => { k = (k + (+b.dataset.d) + L.length) % L.length; dessiner(); marquerBornes(); });
      }
      brancherEnvoi(div, c);
    };
    /* sur les bornes : numéro du repère, et clignotement du repère quand on touche la borne */
    const marquerBornes = () => {
      pane.querySelectorAll(".term .phtag").forEach(e => e.remove());
      const x = L[k]; if (!x) return;
      reperes(c, x.reperes).forEach((r, i) => {
        const q = borneDe(c, r), t = q && pane.querySelector(`.term[data-k="${q.gi}-${q.i}"]`); if (!t) return;
        const s = document.createElement("span"); s.className = "phtag"; s.textContent = "📍" + (i + 1); t.appendChild(s);
      });
    };
    pane.querySelectorAll(".term").forEach(t => t.addEventListener("click", () => {
      const x = L[k]; if (!x) return;
      const rs = reperes(c, x.reperes);
      rs.forEach((r, i) => { const q = borneDe(c, r); if (q && t.dataset.k === `${q.gi}-${q.i}`) { const m = div.querySelector(`.phm[data-i="${i}"]`); if (m) { m.classList.remove("phpulse"); void m.offsetWidth; m.classList.add("phpulse"); } } });
    }));
    dessiner(); marquerBornes();
    pane.insertBefore(div, pane.firstChild);
  };

  /* ---------- envoi d'une photo (technicien) ---------- */
  async function reduire(file) {
    const u = URL.createObjectURL(file);
    try {
      const img = new Image(); img.src = u; await img.decode();
      const W = img.naturalWidth, H = img.naturalHeight; if (!W || !H) throw new Error("image");
      const k = Math.min(1, 1600 / Math.max(W, H)), w = Math.max(50, Math.round(W * k)), h = Math.max(50, Math.round(H * k));
      const cv = document.createElement("canvas"); cv.width = w; cv.height = h; cv.getContext("2d").drawImage(img, 0, 0, w, h);
      const blob = await new Promise(ok => cv.toBlob(ok, "image/jpeg", 0.85)); if (!blob) throw new Error("image");
      return { blob, w, h };
    } finally { URL.revokeObjectURL(u); }
  }
  function brancherEnvoi(div, c) {
    const f = div.querySelector(".phf"), go = div.querySelector(".phgo"), out = div.querySelector(".phr"), pv = div.querySelector(".php");
    let prete = null;
    f.onchange = async () => {
      const file = f.files[0]; if (!file) return;
      out.textContent = "Préparation de la photo…"; go.disabled = true; prete = null; pv.innerHTML = "";
      try { prete = await reduire(file); const u = URL.createObjectURL(prete.blob); urls.push(u); pv.innerHTML = `<img src="${u}" alt="Aperçu">`; out.textContent = `Photo prête (${Math.round(prete.blob.size / 1024)} Ko).`; go.disabled = false; }
      catch (e) { out.textContent = "⚠ Ce fichier n'est pas une image lisible."; }
    };
    go.onclick = async () => {
      if (!prete) return;
      if (!actif() || navigator.onLine === false || !AUTH.pret()) { out.textContent = "⚠ Il faut du réseau pour envoyer une photo : réessayez quand vous en aurez (la photo reste dans la galerie du téléphone)."; return; }
      go.disabled = true; out.textContent = "Envoi…";
      const chemin = (c.id + "-" + Date.now().toString(36) + "-" + Math.random().toString(36).slice(2, 6)).slice(0, 96) + ".jpg";
      try {
        const r = await AUTH.brut("/storage/v1/object/" + BUCKET + "/" + chemin, { method: "POST", headers: { "Content-Type": "image/jpeg", "x-upsert": "false" }, body: prete.blob }, 120000);
        if (!r) throw new Error("Pas de réseau : réessayez.");
        if (!r.ok) throw new Error("Envoi refusé (" + r.status + ").");
        const lg = div.querySelector(".phlg").value.trim().slice(0, 200);
        const ins = await AUTH.api("/rest/v1/photos_cartes", { method: "POST", headers: { ...JS, Prefer: "return=minimal" }, body: JSON.stringify({ email: moi(), fiche_id: c.id, chemin, largeur: prete.w, hauteur: prete.h, legende: lg || null }) });
        if (!ins.ok) throw new Error(ins.net ? "Pas de réseau : réessayez." : "Enregistrement refusé (" + ins.status + ").");
        try { const cc = await caches.open(CACHE); await cc.put(cle(chemin), new Response(prete.blob, { headers: { "Content-Type": "image/jpeg" } })); } catch (e) {}
        prete = null; pv.innerHTML = ""; f.value = ""; div.querySelector(".phlg").value = "";
        out.textContent = "✓ Merci ! Photo envoyée : elle apparaîtra ici une fois validée par l'administrateur.";
        sync();
      } catch (e) { go.disabled = false; out.textContent = "⚠ " + (e && e.message || "Échec de l'envoi."); }
    };
  }

  /* ---------- Réglages : mes photos ---------- */
  window.photoMesHtml = () => {
    if (!actif()) return "";
    const mes = st.get(MES, []); if (!mes.length) return "";
    return `<div class="set"><details class="grp"><summary>📷 Mes photos de cartes <small>${mes.length} · ${mes.filter(x => x.statut === "publiee").length} publiée(s)</small></summary><div class="secb">` +
      mes.map(x => `<div class="sgl"><a href="#/c/${esc(x.fiche_id)}/bornier"><b>${esc(nomCarte(x.fiche_id))}</b></a><span class="sgs ${x.statut === "publiee" ? "corrige" : x.statut === "refusee" ? "rejete" : "nouveau"}">${ETAT[x.statut] || ""}</span><small>${fdate(x.cree_le)}</small>${x.legende ? `<p>${esc(x.legende)}</p>` : ""}${x.motif ? `<p class="sgrep">Réponse : ${esc(x.motif)}</p>` : ""}</div>`).join("") +
      `</div></details></div>`;
  };
  window.photoNbAttente = () => st.get(NB, 0);

  /* ---------- Administration : validation et repères ---------- */
  let filtre = "attente";
  window.viewPhotosAdmin = async function (f) {
    setHead("Photos des cartes", true);
    libererUrls();
    filtre = ["attente", "publiee", "refusee"].includes(f) ? f : "attente";
    if (!admin()) { app.innerHTML = `<p class="empty">Page réservée à l'administrateur.</p>`; return; }
    const seg = `<div class="seg2 stseg">` + [["attente", "À valider"], ["publiee", "Publiées"], ["refusee", "Refusées"]].map(([k, l]) => `<button aria-pressed="${k === filtre}" onclick="go('#/photos/${k}')">${l}</button>`).join("") + `</div>`;
    app.innerHTML = seg + `<p class="note">Chargement…</p>`;
    const r = await AUTH.api("/rest/v1/photos_cartes?select=id,email,auteur,fiche_id,chemin,largeur,hauteur,legende,reperes,statut,motif,cree_le,valide_le&statut=eq." + filtre + "&order=cree_le.desc&limit=200", {});
    if (!/^#\/photos/.test(location.hash)) return;
    if (!r.ok || !Array.isArray(r.j)) { app.innerHTML = seg + `<p class="empty">${r.net ? "Pas de réseau." : "Photos indisponibles."}</p>`; return; }
    if (filtre === "attente") st.set(NB, r.j.length);
    const L = r.j.filter(x => okChemin(x.chemin));
    app.innerHTML = seg + `<p class="note">Pour placer un repère : touchez la photo à l'endroit d'une borne, puis choisissez la borne dans la liste. Les repères s'enregistrent avec « Enregistrer » ou « Publier ».</p>` +
      (L.length ? L.map((x, n) => `<div class="sgl adm phad" data-n="${n}"><a href="#/c/${esc(x.fiche_id)}/bornier"><b>${esc(nomCarte(x.fiche_id))}</b></a><small>${esc(x.auteur || x.email)} · ${fdate(x.cree_le)} · ${ETAT[x.statut]}</small>
          <div class="phed"></div><div class="phrl"></div>
          <input class="sgin phlgA" maxlength="200" placeholder="Légende (facultatif)" value="${esc(x.legende || "")}">
          ${x.statut !== "publiee" ? `<input class="sgin phmo" maxlength="500" placeholder="Réponse au technicien (facultatif)" value="${esc(x.motif || "")}">` : ""}
          <div class="sga">${x.statut === "publiee" ? `<button class="mini" data-a="save">Enregistrer</button><button class="mini" data-a="refusee">Retirer</button>` : `<button class="mini" data-a="publiee">✓ Publier</button><button class="mini" data-a="save">Enregistrer</button>${x.statut === "attente" ? `<button class="mini" data-a="refusee">Refuser</button>` : ""}`}<button class="mini" data-a="suppr">Supprimer</button></div><p class="hotn phst"></p></div>`).join("")
        : `<p class="empty">Aucune photo ${filtre === "attente" ? "à valider" : "ici"}.</p>`);
    app.querySelectorAll(".phad").forEach(d => editeur(d, L[+d.dataset.n]));
  };
  function editeur(d, x) {
    const c = carte(x.fiche_id), st2 = d.querySelector(".phst");
    let rs = c ? reperes(c, x.reperes).map(r => ({ x: r.x, y: r.y, n: r.n, g: r.g })) : [];
    const bornes = c ? c.bornier.groupes.flatMap(g => g.bornes.map(b => ({ n: b.n, g: g.nom, l: b.label }))) : [];
    const dessiner = () => {
      const ed = d.querySelector(".phed"), img = ed.querySelector("img");
      const src = img ? img.src : "";
      ed.innerHTML = vueHtml(x, rs, "phe" + x.id);
      const ni = ed.querySelector("img");
      if (src) ni.src = src; else poserImage(ni, x.chemin, ed.querySelector(".phv"));
      const w = ed.querySelector(".phw");
      w.onclick = e => {
        if (e.target.closest(".phm") || !c) return;
        const R = w.getBoundingClientRect(), px = (e.clientX - R.left) / R.width, py = (e.clientY - R.top) / R.height;
        if (!(px >= 0 && px <= 1 && py >= 0 && py <= 1)) return;
        choisir(px, py);
      };
      w.querySelectorAll(".phm").forEach(b => b.onclick = ev => { ev.stopPropagation(); const i = +b.dataset.i; if (confirm(`Retirer le repère ${i + 1} (borne ${rs[i].n}) ?`)) { rs.splice(i, 1); dessiner(); } });
      d.querySelector(".phrl").innerHTML = c ? (rs.length ? `<ol class="phli">${rs.map((r, i) => `<li><b>${i + 1}</b> · ${esc(r.n)} <small>${esc(r.g)}</small> <button class="mini" data-i="${i}" aria-label="Retirer">✕</button></li>`).join("")}</ol>` : `<p class="hotn">Aucun repère pour l'instant.</p>`) : `<p class="hotn">Fiche introuvable dans cette version de l'appli : repères impossibles.</p>`;
      d.querySelectorAll(".phli button").forEach(b => b.onclick = () => { rs.splice(+b.dataset.i, 1); dessiner(); });
    };
    const choisir = (px, py) => {
      d.querySelectorAll(".phsel").forEach(e => e.remove());
      const box = document.createElement("div"); box.className = "phsel";
      box.innerHTML = `<label>Borne à cet endroit<select><option value="">Choisir…</option>${c.bornier.groupes.map(g => `<optgroup label="${esc(g.nom)}">${g.bornes.map(b => `<option value="${esc(g.nom)}|${esc(b.n)}">${esc(b.n)} · ${esc(b.label)}</option>`).join("")}</optgroup>`).join("")}</select></label><button class="mini">Annuler</button>`;
      d.querySelector(".phrl").before(box);
      const s = box.querySelector("select"); s.focus();
      s.onchange = () => { if (!s.value) return; const i = s.value.indexOf("|"), g = s.value.slice(0, i), n = s.value.slice(i + 1); rs.push({ x: +px.toFixed(4), y: +py.toFixed(4), n, g }); box.remove(); dessiner(); };
      box.querySelector("button").onclick = () => box.remove();
    };
    dessiner();
    d.querySelectorAll(".sga button[data-a]").forEach(b => b.onclick = async () => {
      const a = b.dataset.a;
      if (a === "suppr") {
        if (!confirm("Supprimer définitivement cette photo ?")) return;
        b.disabled = true;
        const s = await AUTH.brut("/storage/v1/object/" + BUCKET, { method: "DELETE", headers: JS, body: JSON.stringify({ prefixes: [x.chemin] }) });
        if (!s || !s.ok) { b.disabled = false; st2.textContent = s ? "Suppression du fichier refusée : réessayez." : "Pas de réseau."; return; }
        const u = await AUTH.api("/rest/v1/photos_cartes?id=eq." + Number(x.id), { method: "DELETE", headers: { Prefer: "return=minimal" } });
        if (!u.ok) { b.disabled = false; st2.textContent = u.net ? "Pas de réseau." : "Suppression refusée."; return; }
        try { (await caches.open(CACHE)).delete(cle(x.chemin)); } catch (e) {}
        await viewPhotosAdmin(filtre); sync(); return;
      }
      const corps = { reperes: rs, legende: d.querySelector(".phlgA").value.trim().slice(0, 200) || null };
      const mo = d.querySelector(".phmo"); if (mo) corps.motif = mo.value.trim().slice(0, 500) || null;
      if (a === "publiee") { corps.statut = "publiee"; corps.valide_le = new Date().toISOString(); }
      if (a === "refusee") { corps.statut = "refusee"; corps.valide_le = null; }
      b.disabled = true; st2.textContent = "Enregistrement…";
      const u = await AUTH.api("/rest/v1/photos_cartes?id=eq." + Number(x.id), { method: "PATCH", headers: { ...JS, Prefer: "return=minimal" }, body: JSON.stringify(corps) });
      b.disabled = false;
      if (!u.ok) { st2.textContent = u.net ? "Pas de réseau." : "Modification refusée."; return; }
      x.reperes = rs; x.legende = corps.legende;
      if (a === "save") { st2.textContent = `✓ Enregistré (${rs.length} repère${rs.length > 1 ? "s" : ""}).`; sync(); return; }
      await viewPhotosAdmin(filtre); sync();
    });
  }
  window.PHOTOS = { sync };
})();
