/* Données partagées avec Supabase (compte du technicien) :
   - favoris synchronisés entre ses appareils (file d'attente hors ligne, la liste du serveur fait foi) ;
   - messages du SAV affichés à l'accueil (dernière liste gardée pour le hors ligne) ;
   - consultations (cartes, accessoires, recherches, diagnostics) envoyées par lots pour les statistiques ;
   - pour l'administrateur : publication des messages et page de statistiques (#/stats).
   Sans compte (AUTH_ACTIF faux), rien n'est envoyé : les favoris restent locaux comme avant. */
(function () {
  const st = {
    get(k, d) { try { const v = localStorage.getItem(k); return v === null ? d : JSON.parse(v); } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} },
    del(k) { try { localStorage.removeItem(k); } catch (e) {} }
  };
  const esc = s => String(s == null ? "" : s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const actif = () => !!(window.AUTH_ACTIF && window.AUTH && AUTH.email());
  const moi = () => (window.AUTH && AUTH.email()) || "";
  const JSONH = { "Content-Type": "application/json" };
  const surAccueil = () => /^#?\/?$/.test(location.hash);
  /* réaffiche l'accueil ou les Réglages après une mise à jour venue du serveur (sans écraser une saisie en cours) */
  const rafraichir = () => {
    if (typeof route !== "function") return;
    if (surAccueil()) return route();
    if (/^#\/reglages/.test(location.hash)) {
      const a = document.activeElement, mt = document.getElementById("mt"), mx = document.getElementById("mx");
      if ((a && /INPUT|TEXTAREA|SELECT/.test(a.tagName)) || (mt && mt.value) || (mx && mx.value)) return;
      route();
    }
  };

  /* ---------- favoris ---------- */
  const FQ = "sync-favs-q", OWNER = "favs-owner";
  function favOp(id, ajout) {
    if (!actif()) return;
    const q = st.get(FQ, []).filter(o => !(o.e === moi() && o.id === id)); /* la dernière action sur une fiche suffit */
    q.push({ e: moi(), id, a: !!ajout }); st.set(FQ, q); bientot();
  }
  async function syncFavs() {
    const e = moi(); if (!e) return;
    /* premier passage sur cet appareil pour ce compte */
    const owner = st.get(OWNER, null);
    if (owner !== e) {
      const locaux = st.get("favs", []).filter(x => typeof x === "string");
      if (owner === null && locaux.length) { const q = st.get(FQ, []); locaux.slice().reverse().forEach(id => { if (!q.some(o => o.e === e && o.id === id)) q.push({ e, id, a: true }); }); st.set(FQ, q); }
      else if (owner !== null) { st.set("favs", []); st.set(FQ, st.get(FQ, []).filter(o => o.e === e)); }
      st.set(OWNER, e);
    }
    /* envoi des actions en attente, dans l'ordre */
    let q = st.get(FQ, []).filter(o => o.e === e);
    for (const o of q) {
      const r = o.a
        ? await AUTH.api("/rest/v1/favoris?on_conflict=user_id,item_id", { method: "POST", headers: { ...JSONH, Prefer: "resolution=ignore-duplicates,return=minimal" }, body: JSON.stringify({ item_id: o.id }) })
        : await AUTH.api("/rest/v1/favoris?item_id=eq." + encodeURIComponent(o.id), { method: "DELETE", headers: { Prefer: "return=minimal" } });
      if (r.net || (!r.ok && (r.status >= 500 || r.status === 401 || r.status === 429))) return; /* on réessaiera plus tard */
      st.set(FQ, st.get(FQ, []).filter(x => !(x.e === e && x.id === o.id && x.a === o.a)));
    }
    /* la liste du serveur fait foi */
    const r = await AUTH.api("/rest/v1/favoris?select=item_id&order=ajoute_le.desc", {});
    if (!r.ok || !Array.isArray(r.j) || st.get(FQ, []).some(o => o.e === e)) return;
    const avant = JSON.stringify(st.get("favs", [])), apres = r.j.map(x => x.item_id);
    if (avant !== JSON.stringify(apres)) { st.set("favs", apres); rafraichir(); }
  }

  /* ---------- consultations ---------- */
  const VQ = "sync-vues-q";
  let dernier = "";
  function vue(genre, item, onglet) {
    if (!item) { dernier = ""; return; }
    if (!actif()) return;
    const cle = genre + "|" + item;
    if (cle === dernier) return; /* un changement d'onglet sur la même fiche ne compte pas */
    dernier = cle;
    const q = st.get(VQ, []);
    q.push({ e: moi(), genre, item_id: String(item).slice(0, 120), onglet: onglet ? String(onglet).slice(0, 20) : null, vu_le: new Date().toISOString() });
    st.set(VQ, q.slice(-400)); bientot();
  }
  async function envoyerVues() {
    const e = moi(), lim = Date.now() - 29 * 864e5;
    let q = st.get(VQ, []).filter(v => v.e === e && Date.parse(v.vu_le) > lim);
    if (!q.length) { st.set(VQ, []); return; }
    const lot = q.slice(0, 100);
    const r = await AUTH.api("/rest/v1/consultations", { method: "POST", headers: { ...JSONH, Prefer: "return=minimal" }, body: JSON.stringify(lot.map(({ genre, item_id, onglet, vu_le }) => ({ genre, item_id, onglet, vu_le }))) });
    if (r.ok || (!r.net && r.status >= 400 && r.status < 500 && r.status !== 401 && r.status !== 429)) { /* envoyé, ou refusé définitivement : on retire le lot */
      const sent = new Set(lot.map(v => v.vu_le + v.item_id));
      st.set(VQ, st.get(VQ, []).filter(v => !(v.e === e && sent.has(v.vu_le + v.item_id))));
      if (q.length > 100 && r.ok) return envoyerVues();
    }
  }

  /* ---------- messages ---------- */
  const MS = "sync-msgs", LUS = "sync-msgs-lus";
  async function chargerMessages() {
    const now = new Date().toISOString();
    const r = await AUTH.api("/rest/v1/messages?select=id,titre,texte,alerte,publie_le,expire_le&or=(expire_le.is.null,expire_le.gt." + encodeURIComponent(now) + ")&order=publie_le.desc&limit=20", {});
    if (!r.ok || !Array.isArray(r.j)) return;
    const avant = JSON.stringify(st.get(MS, []));
    st.set(MS, r.j);
    const ids = new Set(r.j.map(m => m.id)); st.set(LUS, st.get(LUS, []).filter(i => ids.has(i)));
    if (avant !== JSON.stringify(r.j)) rafraichir();
  }
  const messages = () => { const now = Date.now(); return actif() ? st.get(MS, []).filter(m => !m.expire_le || Date.parse(m.expire_le) > now) : []; };
  const fdate = d => { try { return new Date(d).toLocaleDateString("fr-FR", { day: "numeric", month: "short" }); } catch (e) { return ""; } };
  const msgHtml = (m, lu) => `<div class="msg${m.alerte ? " al" : ""}${lu ? " lu" : ""}"><div class="mh"><b>${m.alerte ? "⚠ " : ""}${esc(m.titre)}</b><span>${fdate(m.publie_le)}</span></div>${m.texte ? `<p>${esc(m.texte).replace(/\n/g, "<br>")}</p>` : ""}${lu ? "" : `<button onclick="SYNC.lu(${Number(m.id)})">J'ai lu</button>`}</div>`;

  /* ---------- administrateur ---------- */
  async function majAdmin() { const r = await AUTH.api("/rest/v1/rpc/est_admin", { method: "POST", headers: JSONH, body: "{}" }); if (r.ok) { const v = r.j === true ? moi() : "", av = st.get("sync-admin", ""); st.set("sync-admin", v); if (v !== av) rafraichir(); } }
  const estAdmin = () => actif() && st.get("sync-admin", "") === moi();

  /* ---------- planification ---------- */
  let t = null, enCours = false, encore = false;
  function bientot(ms) { clearTimeout(t); t = setTimeout(tout, ms || 1500); }
  async function tout() {
    if (enCours) { encore = true; return; }
    if (!actif() || !AUTH.pret() || navigator.onLine === false) return;
    enCours = true; encore = false;
    try { await syncFavs(); await envoyerVues(); await chargerMessages(); await majAdmin(); } catch (e) {} finally { enCours = false; if (encore) bientot(500); }
  }
  addEventListener("auth-ok", () => bientot(300));
  addEventListener("online", () => bientot(2000));
  document.addEventListener("visibilitychange", () => { if (document.visibilityState === "visible") bientot(1000); else if (actif()) { clearTimeout(t); tout(); } });
  addEventListener("auth-out", () => { ["favs", FQ, VQ, MS, LUS, OWNER, "sync-admin"].forEach(st.del); });
  setInterval(() => { if (document.visibilityState === "visible") bientot(10); }, 5 * 60 * 1000);

  /* avant la déconnexion : envoie ce qui attend ; renvoie le nombre de changements restés en attente */
  async function vider() {
    if (!actif()) return 0;
    try { if (!enCours && navigator.onLine !== false) { enCours = true; try { await syncFavs(); await envoyerVues(); } finally { enCours = false; } } } catch (e) {}
    const e = moi(); return st.get(FQ, []).filter(o => o.e === e).length + st.get(VQ, []).filter(v => v.e === e).length;
  }
  window.SYNC = {
    vider,
    fav: favOp, vue, messages, estAdmin,
    lu(id) { const l = st.get(LUS, []); if (!l.includes(id)) l.push(id); st.set(LUS, l); if (typeof route === "function") route(); },
    nonLus() { const l = st.get(LUS, []); return messages().filter(m => !l.includes(m.id)); },
    /* bandeau de l'accueil : messages non lus */
    accueilHtml() { const n = this.nonLus(); return n.length ? `<div class="msgs">` + n.map(m => msgHtml(m, false)).join("") + `</div>` : ""; },
    /* Réglages : messages en cours + publication (admin) */
    reglagesHtml() {
      if (!actif()) return "";
      const l = st.get(LUS, []), ms = messages();
      let h = `<h2>Messages du SAV</h2>` + (ms.length ? ms.map(m => msgHtml(m, true)).join("") : `<p class="note">Aucun message en cours.</p>`);
      if (estAdmin()) h += `<h2>Administration</h2><div class="set adm">
        <div class="row"><span>Statistiques de consultation</span><button class="mini" onclick="go('#/stats')">Voir</button></div></div>
        <div class="note"><b>Publier un message</b>
        <input id="mt" maxlength="120" placeholder="Titre (ex. Nouvelle notice Came ajoutée)">
        <textarea id="mx" maxlength="1000" rows="3" placeholder="Texte (facultatif)"></textarea>
        <label class="chk"><input type="checkbox" id="ma"> Alerte (en rouge)</label>
        <label class="chk">Affiché pendant <select id="md"><option value="7">7 jours</option><option value="30" selected>30 jours</option><option value="0">sans limite</option></select></label>
        <button class="dbtn" id="mp">Publier</button><p id="mr" class="hotn"></p></div>` +
        (ms.length ? `<div class="note"><b>Messages publiés</b>` + ms.map(m => `<div class="row"><span>${esc(m.titre)}</span><button class="mini" onclick="SYNC.suppr(${Number(m.id)})">Retirer</button></div>`).join("") + `</div>` : "");
      return h;
    },
    brancherReglages() {
      const b = document.getElementById("mp"); if (!b) return;
      b.onclick = async () => {
        const titre = document.getElementById("mt").value.trim(), texte = document.getElementById("mx").value.trim(), alerte = document.getElementById("ma").checked, j = +document.getElementById("md").value, out = document.getElementById("mr");
        if (!titre) { out.textContent = "Il faut un titre."; return; }
        b.disabled = true; out.textContent = "Publication…";
        const r = await AUTH.api("/rest/v1/messages", { method: "POST", headers: { ...JSONH, Prefer: "return=minimal" }, body: JSON.stringify({ titre, texte, alerte, expire_le: j ? new Date(Date.now() + j * 864e5).toISOString() : null }) });
        b.disabled = false;
        if (r.ok) { await chargerMessages(); if (typeof viewSettings === "function" && /reglages/.test(location.hash)) viewSettings(); const o2 = document.getElementById("mr"); if (o2) o2.textContent = "✓ Publié. Les techniciens le verront à leur prochaine ouverture avec du réseau."; }
        else out.textContent = r.net ? "Pas de réseau : réessayez." : "Publication refusée (droits administrateur ?).";
      };
    },
    async suppr(id) {
      if (!confirm("Retirer ce message pour tout le monde ?")) return;
      const r = await AUTH.api("/rest/v1/messages?id=eq." + Number(id), { method: "DELETE", headers: { Prefer: "return=minimal" } });
      if (r.ok) { await chargerMessages(); if (typeof viewSettings === "function") viewSettings(); } else alert(r.net ? "Pas de réseau." : "Suppression refusée.");
    },
    /* page de statistiques (admin) */
    async viewStats(jours) {
      setHead("Statistiques", true);
      jours = [7, 30, 90].includes(+jours) ? +jours : 30;
      const app = document.getElementById("app");
      const seg = `<div class="seg2 stseg">` + [7, 30, 90].map(n => `<button aria-pressed="${n === jours}" onclick="go('#/stats/${n}')">${n} jours</button>`).join("") + `</div>`;
      if (!estAdmin()) { app.innerHTML = `<p class="empty">Page réservée à l'administrateur.</p>`; return; }
      app.innerHTML = seg + `<p class="note">Chargement…</p>`;
      const r = await AUTH.api("/rest/v1/rpc/stats", { method: "POST", headers: JSONH, body: JSON.stringify({ jours }) });
      if (!/^#\/stats/.test(location.hash)) return;
      if (!r.ok || !r.j) { app.innerHTML = seg + `<p class="empty">${r.net ? "Pas de réseau : les statistiques demandent une connexion." : "Statistiques indisponibles."}</p>`; return; }
      const s = r.j, nom = x => {
        if (x.genre === "carte") { const b = (typeof BOARDS !== "undefined" ? BOARDS : []).find(y => y.c.id === x.item_id); return b ? [`${b.m.nom} · ${b.c.nom}`, "#/c/" + x.item_id] : [x.item_id + " (fiche retirée)", ""]; }
        const a = (window.ACCESSOIRES || []).find(y => y.id === x.item_id); return a ? [`${a.marque} · ${a.nom}`, "#/a/" + x.item_id] : [x.item_id + " (fiche retirée)", ""];
      };
      const tab = (titre, rows, vide) => `<h2>${titre}</h2>` + (rows.length ? `<table class="stt">${rows.join("")}</table>` : `<p class="note">${vide}</p>`);
      app.innerHTML = seg + `<p class="note"><b>${s.total}</b> consultation${s.total > 1 ? "s" : ""} sur ${jours} jours. Les consultations faites hors ligne arrivent au retour du réseau.</p>` +
        tab("Fiches les plus consultées", (s.items || []).map(x => { const [n, h] = nom(x); return `<tr${h ? ` style="cursor:pointer" data-h="${esc(h)}" onclick="go(this.dataset.h)"` : ""}><td>${esc(n)}<small>${x.genre === "carte" ? "Carte" : "Accessoire"} · ${x.techs} technicien${x.techs > 1 ? "s" : ""}</small></td><td class="n">${x.n}</td></tr>`; }), "Aucune consultation pour l'instant.") +
        tab("Recherches les plus fréquentes", (s.recherches || []).map(x => `<tr style="cursor:pointer" data-h="${esc("#/s/" + encodeURIComponent(x.q))}" onclick="go(this.dataset.h)"><td>${esc(x.q)}</td><td class="n">${x.n}</td></tr>`), "Aucune recherche enregistrée.") +
        tab("Diagnostics guidés aboutis", (s.diag || []).map(x => `<tr><td>${esc(x.item_id)}</td><td class="n">${x.n}</td></tr>`), "Aucun diagnostic terminé.") +
        tab("Par technicien", (s.techniciens || []).map(x => `<tr><td>${esc(x.nom)}<small>dernière consultation ${fdate(x.dernier)}</small></td><td class="n">${x.n}</td></tr>`), "—");
    }
  };
})();
