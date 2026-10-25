/* Signaler une erreur sur une fiche (carte ou accessoire).
   Le technicien écrit ce qui ne va pas ; sans réseau, le signalement attend dans l'appareil et part au retour du réseau.
   L'administrateur traite les signalements dans Administration → Signalements (#/signalements) ; le technicien voit la réponse dans Réglages. */
(function () {
  const Q = "sig-q", MES = "sig-mes", NB = "sig-nb";
  const st = { get(k, d) { try { const v = localStorage.getItem(k); return v === null ? d : JSON.parse(v); } catch (e) { return d; } }, set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} } };
  const JS = { "Content-Type": "application/json" };
  const actif = () => !!(window.AUTH_ACTIF && window.AUTH && AUTH.email());
  const moi = () => (window.AUTH && AUTH.email()) || "";
  const fdate = d => { try { return new Date(d).toLocaleDateString("fr-FR", { day: "numeric", month: "short" }); } catch (e) { return ""; } };
  const ETAT = { nouveau: "En attente", corrige: "Corrigé", rejete: "Non retenu" };
  const nomFiche = (g, id) => {
    if (g === "carte") { const b = (typeof BOARDS !== "undefined" ? BOARDS : []).find(x => x.c.id === id); return b ? `${b.m.nom} · ${b.c.nom}` : id; }
    const a = (window.ACCESSOIRES || []).find(x => x.id === id); return a ? `${a.marque} · ${a.nom}` : id;
  };
  const lien = (g, id, o) => (g === "carte" ? "#/c/" : "#/a/") + id + (o ? "/" + o : "");

  /* ---------- envoi (avec file d'attente) ---------- */
  let enCours = false;
  async function envoyer() {
    if (enCours || !actif() || !AUTH.pret() || navigator.onLine === false) return;
    enCours = true;
    try {
      for (const s of st.get(Q, []).filter(x => x.e === moi())) {
        const r = await AUTH.api("/rest/v1/signalements", { method: "POST", headers: { ...JS, Prefer: "return=minimal" }, body: JSON.stringify({ genre: s.genre, fiche_id: s.fiche_id, onglet: s.onglet, message: s.message }) });
        if (r.net || (!r.ok && (r.status >= 500 || r.status === 401 || r.status === 429))) break;
        st.set(Q, st.get(Q, []).filter(x => x.t !== s.t)); /* envoyé (ou refusé définitivement) */
      }
      /* mes signalements (pour voir les réponses) */
      const m = await AUTH.api("/rest/v1/signalements?select=id,genre,fiche_id,onglet,message,statut,reponse,cree_le,traite_le&email=eq." + encodeURIComponent(moi()) + "&order=cree_le.desc&limit=30", {});
      if (m.ok && Array.isArray(m.j)) {
        const avant = JSON.stringify(st.get(MES, [])); st.set(MES, m.j);
        const a = document.activeElement;
        if (avant !== JSON.stringify(m.j) && /^#\/reglages/.test(location.hash) && !(a && /INPUT|TEXTAREA|SELECT/.test(a.tagName)) && typeof viewSettings === "function") viewSettings();
      }
    } catch (e) {} finally { enCours = false; }
  }
  async function compterNouveaux() {
    if (!(window.SYNC && SYNC.estAdmin())) return;
    const r = await AUTH.api("/rest/v1/signalements?select=id&statut=eq.nouveau&limit=200", {});
    if (r.ok && Array.isArray(r.j)) { const av = st.get(NB, 0); st.set(NB, r.j.length); const a = document.activeElement; if (av !== r.j.length && /^#\/reglages/.test(location.hash) && !(a && /INPUT|TEXTAREA|SELECT/.test(a.tagName)) && typeof viewSettings === "function") viewSettings(); }
  }
  addEventListener("auth-ok", () => setTimeout(async () => { await envoyer(); await compterNouveaux(); }, 1500));
  addEventListener("online", () => setTimeout(envoyer, 2500));
  addEventListener("auth-out", () => { try { [Q, MES, NB].forEach(k => localStorage.removeItem(k)); } catch (e) {} });

  /* ---------- bouton et formulaire sur les fiches ---------- */
  window.sigBouton = (genre, id, onglet) => !actif() ? "" :
    `<details class="sig"><summary>⚑ Signaler une erreur sur cette fiche</summary><div class="sigb">
      <textarea id="sgm" maxlength="1000" rows="3" placeholder="Ce qui ne va pas : code, borne, valeur, schéma… (ex. « la borne 7 est l'ouverture, pas le pas-à-pas »)"></textarea>
      <button class="dbtn" onclick="sigEnvoyer('${genre}','${esc(id)}','${esc(onglet || "")}')">Envoyer au SAV</button><p class="hotn" id="sgr"></p></div></details>`;
  window.sigEnvoyer = async (genre, id, onglet) => {
    const t = document.getElementById("sgm"), out = document.getElementById("sgr"), msg = (t.value || "").trim();
    if (msg.length < 3) { out.textContent = "⚠ Décrivez l'erreur en quelques mots."; return; }
    const q = st.get(Q, []); q.push({ e: moi(), t: Date.now() + Math.random(), genre, fiche_id: id, onglet: onglet || null, message: msg.slice(0, 1000) }); st.set(Q, q);
    t.value = ""; out.textContent = navigator.onLine === false ? "✓ Enregistré : il partira au retour du réseau." : "✓ Merci, envoyé au SAV. La réponse apparaîtra dans Réglages → Mes signalements.";
    await envoyer();
    if (st.get(Q, []).some(x => x.e === moi())) out.textContent = "✓ Enregistré : il partira au retour du réseau.";
  };

  /* ---------- Réglages : mes signalements ---------- */
  window.sigMesHtml = () => {
    if (!actif()) return "";
    const att = st.get(Q, []).filter(x => x.e === moi()), mes = st.get(MES, []);
    if (!att.length && !mes.length) return "";
    return `<div class="set"><details class="grp"><summary>⚑ Mes signalements <small>${mes.length + att.length} · ${mes.filter(x => x.statut !== "nouveau").length} traité(s)</small></summary><div class="secb">` +
      att.map(x => `<div class="sgl"><b>${esc(nomFiche(x.genre, x.fiche_id))}</b><span class="sgs att">À envoyer</span><p>${esc(x.message)}</p></div>`).join("") +
      mes.map(x => `<div class="sgl"><b>${esc(nomFiche(x.genre, x.fiche_id))}</b><span class="sgs ${x.statut}">${ETAT[x.statut] || ""}</span><small>${fdate(x.cree_le)}</small><p>${esc(x.message)}</p>${x.reponse ? `<p class="sgrep">Réponse du SAV : ${esc(x.reponse)}</p>` : ""}</div>`).join("") + `</div></details></div>`;
  };
  window.sigNbNouveaux = () => st.get(NB, 0);

  /* ---------- Administration : traitement ---------- */
  let filtre = "nouveau";
  window.viewSignalements = async function (f) {
    setHead("Signalements", true);
    filtre = ["nouveau", "corrige", "rejete", "tous"].includes(f) ? f : "nouveau";
    if (!(window.SYNC && SYNC.estAdmin())) { app.innerHTML = `<p class="empty">Page réservée à l'administrateur.</p>`; return; }
    const seg = `<div class="seg2 stseg">` + [["nouveau", "À traiter"], ["corrige", "Corrigés"], ["rejete", "Non retenus"], ["tous", "Tous"]].map(([k, l]) => `<button aria-pressed="${k === filtre}" onclick="go('#/signalements/${k}')">${l}</button>`).join("") + `</div>`;
    app.innerHTML = seg + `<p class="note">Chargement…</p>`;
    const r = await AUTH.api("/rest/v1/signalements?select=id,email,genre,fiche_id,onglet,message,statut,reponse,cree_le,traite_le" + (filtre === "tous" ? "" : "&statut=eq." + filtre) + "&order=cree_le.desc&limit=200", {});
    if (!/^#\/signalements/.test(location.hash)) return;
    if (!r.ok || !Array.isArray(r.j)) { app.innerHTML = seg + `<p class="empty">${r.net ? "Pas de réseau." : "Signalements indisponibles."}</p>`; return; }
    if (filtre === "nouveau") st.set(NB, r.j.length);
    app.innerHTML = seg + (r.j.length ? r.j.map(s => `<div class="sgl adm" data-id="${Number(s.id)}"><a href="${esc(lien(s.genre, s.fiche_id, s.onglet))}"><b>${esc(nomFiche(s.genre, s.fiche_id))}</b></a>${s.onglet ? ` <span class="muted">onglet ${esc(s.onglet)}</span>` : ""}<span class="sgs ${s.statut}">${ETAT[s.statut]}</span>
        <small>${esc(s.email)} · ${fdate(s.cree_le)}</small><p>${esc(s.message)}</p>${s.reponse ? `<p class="sgrep">Réponse : ${esc(s.reponse)}</p>` : ""}
        ${s.statut === "nouveau" ? `<input class="sgin" maxlength="500" placeholder="Réponse au technicien (facultatif)"><div class="sga"><button class="mini" data-s="corrige">✓ Corrigé</button><button class="mini" data-s="rejete">Non retenu</button></div>` : `<div class="sga"><button class="mini" data-s="nouveau">Remettre à traiter</button></div>`}</div>`).join("")
        : `<p class="empty">Aucun signalement ${filtre === "nouveau" ? "à traiter" : "ici"}.</p>`) +
      `<p class="hotn">Pour corriger une fiche, transmets-moi le signalement : la fiche est modifiée dans l'appli puis tu le marques « Corrigé ». Le technicien voit la réponse dans ses Réglages.</p>`;
    app.querySelectorAll(".sgl.adm button[data-s]").forEach(b => b.onclick = async () => {
      const d = b.closest(".sgl"), id = Number(d.dataset.id), s = b.dataset.s, inp = d.querySelector(".sgin");
      const corps = s === "nouveau" ? { statut: "nouveau", traite_le: null } : { statut: s, traite_le: new Date().toISOString(), ...(inp && inp.value.trim() ? { reponse: inp.value.trim().slice(0, 500) } : {}) };
      b.disabled = true;
      const u = await AUTH.api("/rest/v1/signalements?id=eq." + id, { method: "PATCH", headers: { ...JS, Prefer: "return=minimal" }, body: JSON.stringify(corps) });
      if (!u.ok) { b.disabled = false; alert(u.net ? "Pas de réseau." : "Modification refusée."); return; }
      viewSignalements(filtre);
    });
  };
})();
