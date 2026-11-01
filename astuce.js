/* Astuces terrain partagées.
   Un technicien propose une astuce sur une fiche (carte ou accessoire) ; sans réseau, elle attend dans l'appareil.
   L'administrateur la valide (texte corrigeable) ou la refuse dans Administration → Astuces (#/astuces).
   Les astuces publiées sont gardées sur le téléphone et s'affichent sur la fiche, même hors ligne. */
(function () {
  const Q = "ast-q", PUB = "ast-pub", MES = "ast-mes", NB = "ast-nb";
  const st = { get(k, d) { try { const v = localStorage.getItem(k); return v === null ? d : JSON.parse(v); } catch (e) { return d; } }, set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} } };
  const JS = { "Content-Type": "application/json" };
  const actif = () => !!(window.AUTH_ACTIF && window.AUTH && AUTH.email());
  const moi = () => (window.AUTH && AUTH.email()) || "";
  const fdate = d => { try { return new Date(d).toLocaleDateString("fr-FR", { day: "numeric", month: "short", year: "numeric" }); } catch (e) { return ""; } };
  const nomFiche = (g, id) => {
    if (g === "carte") { const b = (typeof BOARDS !== "undefined" ? BOARDS : []).find(x => x.c.id === id); return b ? `${b.m.nom} · ${b.c.nom}` : id; }
    const a = (window.ACCESSOIRES || []).find(x => x.id === id); return a ? `${a.marque} · ${a.nom}` : id;
  };
  const lien = (g, id) => (g === "carte" ? "#/c/" : "#/a/") + id;
  const ETAT = { attente: "En attente de validation", publiee: "Publiée", refusee: "Non retenue" };
  /* met à jour le bloc d'astuces de la fiche ouverte sans recharger la page (garde la saisie et le message) */
  const rafraichir = () => {
    const m = /^#\/(c|a)\/([^/]+)/.exec(location.hash), el = document.querySelector(".ast");
    if (m && el && !el.contains(document.activeElement)) {
      const msg = (document.getElementById("astr") || {}).textContent, ouvert = el.open, form = (el.querySelector(".astn") || {}).open;
      el.outerHTML = astuceHtml(m[1] === "c" ? "carte" : "accessoire", decodeURIComponent(m[2]));
      const n = document.querySelector(".ast"); if (n) { if (ouvert) n.open = true; if (form) n.querySelector(".astn").open = true; if (msg && /✓/.test(msg)) document.getElementById("astr").textContent = msg; }
    }
    const a = document.activeElement;
    if (/^#\/reglages/.test(location.hash) && !(a && /INPUT|TEXTAREA|SELECT/.test(a.tagName)) && typeof viewSettings === "function") viewSettings();
  };

  /* ---------- synchronisation ---------- */
  let enCours = false, encore = false;
  async function sync() {
    if (enCours) { encore = true; return; } /* une synchro tourne déjà : on la relance à la fin (astuce envoyée entre-temps) */
    if (!actif() || navigator.onLine === false) return;
    if (!AUTH.pret()) { setTimeout(sync, 3000); return; }
    enCours = true;
    try {
      for (const s of st.get(Q, []).filter(x => x.e === moi())) {
        const r = await AUTH.api("/rest/v1/astuces", { method: "POST", headers: { ...JS, Prefer: "return=minimal" }, body: JSON.stringify({ email: moi().toLowerCase(), genre: s.genre, fiche_id: s.fiche_id, texte: s.texte }) });
        if (r.net || (!r.ok && (r.status >= 500 || r.status === 401 || r.status === 429))) break;
        st.set(Q, st.get(Q, []).filter(x => x.t !== s.t));
      }
      let chg = false;
      const p = await AUTH.api("/rest/v1/astuces?select=id,genre,fiche_id,texte,auteur,valide_le&statut=eq.publiee&order=valide_le.desc&limit=1000", {});
      if (p.ok && Array.isArray(p.j)) { chg = JSON.stringify(st.get(PUB, [])) !== JSON.stringify(p.j); st.set(PUB, p.j); }
      const m = await AUTH.api("/rest/v1/astuces?select=id,genre,fiche_id,texte,statut,motif,cree_le&email=eq." + encodeURIComponent(moi().toLowerCase()) + "&order=cree_le.desc&limit=50", {});
      if (m.ok && Array.isArray(m.j)) { chg = chg || JSON.stringify(st.get(MES, [])) !== JSON.stringify(m.j); st.set(MES, m.j); }
      if (window.SYNC && SYNC.estAdmin()) {
        const n = await AUTH.api("/rest/v1/astuces?select=id&statut=eq.attente&limit=200", {});
        if (n.ok && Array.isArray(n.j)) { chg = chg || st.get(NB, 0) !== n.j.length; st.set(NB, n.j.length); }
      }
      if (chg) rafraichir();
    } catch (e) {} finally { enCours = false; if (encore) { encore = false; setTimeout(sync, 0); } }
  }
  addEventListener("auth-ok", () => setTimeout(sync, 2000));
  addEventListener("load", () => setTimeout(sync, 4000)); /* session déjà ouverte : pas toujours d'événement auth-ok */
  addEventListener("online", () => setTimeout(sync, 3000));
  setInterval(() => { if (document.visibilityState === "visible") sync(); }, 10 * 60e3);
  addEventListener("auth-out", () => { try { [Q, MES, NB].forEach(k => localStorage.removeItem(k)); } catch (e) {} });

  /* ---------- sur la fiche ---------- */
  window.astuceHtml = (genre, id) => {
    if (!actif()) return "";
    const pub = st.get(PUB, []).filter(x => x.genre === genre && x.fiche_id === id);
    const att = st.get(Q, []).filter(x => x.e === moi() && x.genre === genre && x.fiche_id === id).length
      + st.get(MES, []).filter(x => x.genre === genre && x.fiche_id === id && x.statut === "attente").length;
    return `<details class="ast"${pub.length ? " open" : ""}><summary>💡 Astuces terrain <span>· ${pub.length || "aucune"}</span></summary><div class="astb">` +
      pub.map(x => `<div class="astl"><p>${esc(x.texte)}</p><small>${esc(x.auteur || "Technicien")}${x.valide_le ? " · " + fdate(x.valide_le) : ""}</small></div>`).join("") +
      (pub.length ? "" : `<p class="hotn">Pas encore d'astuce sur cette fiche.</p>`) +
      `<details class="astn"><summary>+ Proposer une astuce</summary>
        <textarea id="astt" maxlength="1000" rows="3" placeholder="Ce qui vous a fait gagner du temps sur ce matériel (ex. « sur cette carte, le pont 8-9 est souvent oublié après un remplacement »)"></textarea>
        <button class="dbtn" onclick="astuceEnvoyer('${genre}','${esc(id)}')">Envoyer pour validation</button><p class="hotn" id="astr">${att ? `${att} astuce${att > 1 ? "s" : ""} de votre part en attente de validation.` : "Elle sera visible par toute l'équipe une fois validée par l'administrateur."}</p></details>
      </div></details>`;
  };
  window.astuceEnvoyer = async (genre, id) => {
    const t = document.getElementById("astt"), out = document.getElementById("astr"), txt = (t.value || "").trim();
    if (txt.length < 10) { out.textContent = "⚠ Écrivez l'astuce en une ou deux phrases."; return; }
    const q = st.get(Q, []); q.push({ e: moi(), t: Date.now() + Math.random(), genre, fiche_id: id, texte: txt.slice(0, 1000) }); st.set(Q, q);
    t.value = ""; out.textContent = "✓ Merci ! Envoyée pour validation : elle apparaîtra ici une fois validée.";
    await sync();
    for (let i = 0; i < 20 && enCours; i++) await new Promise(r => setTimeout(r, 250));
    if (st.get(Q, []).some(x => x.e === moi())) out.textContent = "✓ Enregistrée : elle partira au retour du réseau, puis sera validée par l'administrateur.";
  };

  /* ---------- Réglages : mes astuces ---------- */
  window.astuceMesHtml = () => {
    if (!actif()) return "";
    const att = st.get(Q, []).filter(x => x.e === moi()), mes = st.get(MES, []);
    if (!att.length && !mes.length) return "";
    return `<div class="set"><details class="grp"><summary>💡 Mes astuces <small>${mes.length + att.length} · ${mes.filter(x => x.statut === "publiee").length} publiée(s)</small></summary><div class="secb">` +
      att.map(x => `<div class="sgl"><a href="${lien(x.genre, x.fiche_id)}"><b>${esc(nomFiche(x.genre, x.fiche_id))}</b></a><span class="sgs att">À envoyer</span><p>${esc(x.texte)}</p></div>`).join("") +
      mes.map(x => `<div class="sgl"><a href="${lien(x.genre, x.fiche_id)}"><b>${esc(nomFiche(x.genre, x.fiche_id))}</b></a><span class="sgs ${x.statut === "publiee" ? "corrige" : x.statut === "refusee" ? "rejete" : "nouveau"}">${ETAT[x.statut] || ""}</span><small>${fdate(x.cree_le)}</small><p>${esc(x.texte)}</p>${x.motif ? `<p class="sgrep">Réponse : ${esc(x.motif)}</p>` : ""}</div>`).join("") +
      `</div></details></div>`;
  };
  window.astuceNbAttente = () => st.get(NB, 0);

  /* ---------- Administration : validation ---------- */
  let filtre = "attente";
  window.viewAstuces = async function (f) {
    setHead("Astuces terrain", true);
    filtre = ["attente", "publiee", "refusee"].includes(f) ? f : "attente";
    if (!(window.SYNC && SYNC.estAdmin())) { app.innerHTML = `<p class="empty">Page réservée à l'administrateur.</p>`; return; }
    const seg = `<div class="seg2 stseg">` + [["attente", "À valider"], ["publiee", "Publiées"], ["refusee", "Refusées"]].map(([k, l]) => `<button aria-pressed="${k === filtre}" onclick="go('#/astuces/${k}')">${l}</button>`).join("") + `</div>`;
    app.innerHTML = seg + `<p class="note">Chargement…</p>`;
    const r = await AUTH.api("/rest/v1/astuces?select=id,email,auteur,genre,fiche_id,texte,statut,motif,cree_le,valide_le&statut=eq." + filtre + "&order=cree_le.desc&limit=300", {});
    if (!/^#\/astuces/.test(location.hash)) return;
    if (!r.ok || !Array.isArray(r.j)) { app.innerHTML = seg + `<p class="empty">${r.net ? "Pas de réseau." : "Astuces indisponibles."}</p>`; return; }
    if (filtre === "attente") st.set(NB, r.j.length);
    app.innerHTML = seg + (r.j.length ? r.j.map(s => `<div class="sgl adm" data-id="${Number(s.id)}"><a href="${esc(lien(s.genre, s.fiche_id))}"><b>${esc(nomFiche(s.genre, s.fiche_id))}</b></a>
        <small>${esc(s.auteur || s.email)} · ${fdate(s.cree_le)}</small>
        ${s.statut === "attente" ? `<textarea class="sgin astx" maxlength="1000" rows="3">${esc(s.texte)}</textarea><input class="sgin astm" maxlength="500" placeholder="Réponse au technicien (facultatif)">
          <div class="sga"><button class="mini" data-s="publiee">✓ Publier</button><button class="mini" data-s="refusee">Refuser</button></div>`
        : `<p>${esc(s.texte)}</p>${s.motif ? `<p class="sgrep">Réponse : ${esc(s.motif)}</p>` : ""}<div class="sga">${s.statut === "publiee" ? `<button class="mini" data-s="refusee">Retirer</button>` : `<button class="mini" data-s="publiee">Publier</button>`}<button class="mini" data-s="suppr">Supprimer</button></div>`}
      </div>`).join("") : `<p class="empty">Aucune astuce ${filtre === "attente" ? "à valider" : "ici"}.</p>`) +
      `<p class="hotn">Vous pouvez corriger le texte avant de publier. Une astuce publiée est visible sur la fiche par tous les techniciens, avec le nom de son auteur.</p>`;
    app.querySelectorAll(".sgl.adm button[data-s]").forEach(b => b.onclick = async () => {
      const d = b.closest(".sgl"), id = Number(d.dataset.id), s = b.dataset.s;
      if (s === "suppr" && !confirm("Supprimer définitivement cette astuce ?")) return;
      b.disabled = true;
      let u;
      if (s === "suppr") u = await AUTH.api("/rest/v1/astuces?id=eq." + id, { method: "DELETE", headers: { Prefer: "return=minimal" } });
      else {
        const tx = d.querySelector(".astx"), mo = d.querySelector(".astm"), corps = { statut: s, valide_le: s === "publiee" ? new Date().toISOString() : null };
        if (tx) { const v = tx.value.trim(); if (v.length < 3) { b.disabled = false; alert("Texte trop court."); return; } corps.texte = v.slice(0, 1000); }
        if (mo && mo.value.trim()) corps.motif = mo.value.trim().slice(0, 500);
        u = await AUTH.api("/rest/v1/astuces?id=eq." + id, { method: "PATCH", headers: { ...JS, Prefer: "return=minimal" }, body: JSON.stringify(corps) });
      }
      if (!u.ok) { b.disabled = false; alert(u.net ? "Pas de réseau." : "Modification refusée."); return; }
      await viewAstuces(filtre); sync();
    });
  };
})();
