/* Accès réservé aux techniciens (Supabase, sans bibliothèque : simples appels fetch).
   - Connexion une seule fois : la session est gardée sur l'appareil et se renouvelle toute seule.
   - À chaque ouverture avec du réseau (et au retour au premier plan), l'appli vérifie que le compte
     existe encore et que la ligne du technicien est « actif » dans la table `techniciens`.
   - Sans réseau, l'appli continue de marcher jusqu'à MAX_HORS_LIGNE_JOURS jours après la dernière
     vérification réussie, puis se verrouille jusqu'à la prochaine connexion au réseau.
   Pour couper un technicien : Supabase > Table Editor > techniciens > actif = false (et/ou Authentication > Users > Ban). */
(function () {
  const URL_ = "https://egcsppwvfxtvdxdgygcp.supabase.co";
  const KEY = "sb_publishable_OhMbSV6EeqeSaJcTahWeiw_-KDRRQYK";
  const ACCES_REQUIS = true; /* false = appli ouverte sans connexion */
  const MAX_HORS_LIGNE_JOURS = 14;
  const REVERIF_MS = 30 * 60 * 1000; /* nouvelle vérification au retour au premier plan après 30 min */
  const LS = "diagsav-auth";
  const H = tok => ({ apikey: KEY, "Content-Type": "application/json", ...(tok ? { Authorization: "Bearer " + tok } : {}) });
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  const load = () => { try { return JSON.parse(localStorage.getItem(LS)); } catch (e) { return null; } };
  const save = s => { try { s ? localStorage.setItem(LS, JSON.stringify(s)) : localStorage.removeItem(LS); } catch (e) {} };
  let S = load(), started = false, busy = false, onReady = null;

  /* appel réseau avec délai maxi ; "net" = pas de réponse (hors ligne, serveur injoignable) */
  async function call(path, opt, ms) {
    const c = new AbortController(), t = setTimeout(() => c.abort(), ms || 8000);
    try { const r = await fetch(URL_ + path, { ...opt, signal: c.signal }); let j = null; try { j = await r.json(); } catch (e) {} return { ok: r.ok, status: r.status, j }; }
    catch (e) { return { net: true }; } finally { clearTimeout(t); }
  }
  const tokens = (j, email) => ({ access_token: j.access_token, refresh_token: j.refresh_token, email: email || (j.user && j.user.email) || (S && S.email) || "", lastOk: (S && S.lastOk) || 0 });

  /* identifiant de cet appareil (gardé même après déconnexion) et nom lisible */
  const DEV = (() => { try { let d = localStorage.getItem("diagsav-appareil"); if (!d) { d = (crypto.randomUUID ? crypto.randomUUID() : Date.now().toString(36) + Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2)); localStorage.setItem("diagsav-appareil", d); } return d; } catch (e) { return "inconnu-" + Date.now(); } })();
  const devNom = () => {
    const u = navigator.userAgent || "";
    const os = /iPad/.test(u) || (/Macintosh/.test(u) && navigator.maxTouchPoints > 1) ? "iPad" : /iPhone/.test(u) ? "iPhone" : /Android/.test(u) ? (/Mobile/.test(u) ? "Téléphone Android" : "Tablette Android") : /Windows/.test(u) ? "PC Windows" : /Mac/.test(u) ? "Mac" : /Linux/.test(u) ? "Linux" : "Appareil";
    const nav = /SamsungBrowser/.test(u) ? "Samsung Internet" : /Edg\//.test(u) ? "Edge" : /Firefox|FxiOS/.test(u) ? "Firefox" : /Chrome|CriOS/.test(u) ? "Chrome" : /Safari/.test(u) ? "Safari" : "";
    const app = matchMedia && matchMedia("(display-mode: standalone)").matches ? "appli" : nav;
    return (os + (app ? " · " + app : "")).slice(0, 80);
  };
  let PLEIN = [], PROV = false, MDP_SAISI = "", MAXA = 2;
  /* le technicien doit être actif ; l'appareil doit être l'un de ses appareils autorisés (2, ou 5 pour un administrateur).
     Renvoie le nom (ou "ok"), "non", "plein" (maximum d'appareils déjà connectés) ou "net". */
  async function autorise(tok, liberer) {
    const r = await call("/rest/v1/rpc/acces", { method: "POST", headers: H(tok), body: JSON.stringify({ appareil: DEV, nom_appareil: devNom(), liberer: liberer || null }) });
    if (r.net) return "net";
    if (r.status === 404) { /* fonction pas encore installée côté Supabase : ancienne vérification */
      const t = await call("/rest/v1/techniciens?select=actif,nom", { headers: H(tok) });
      if (t.net) return "net";
      if (!t.ok) return t.status === 401 || t.status === 403 ? "non" : "net";
      return Array.isArray(t.j) && t.j[0] && t.j[0].actif === true ? (t.j[0].nom || "ok") : "non";
    }
    if (!r.ok) return r.status === 401 || r.status === 403 ? "non" : "net";
    const j = r.j || {};
    if (j.max > 0) MAXA = j.max;
    if (j.statut === "ok") { PROV = j.provisoire === true; return j.nom || "ok"; }
    if (j.statut === "plein") { PLEIN = Array.isArray(j.appareils) ? j.appareils : []; return "plein"; }
    return "non";
  }

  /* vérifie la session : "ok" | "net" | "refus" | "expire" */
  async function verifier() {
    if (!S || !S.refresh_token) return "expire";
    const r = await call("/auth/v1/token?grant_type=refresh_token", { method: "POST", headers: H(), body: JSON.stringify({ refresh_token: S.refresh_token }) });
    if (r.net) return "net";
    if (!r.ok) return r.status >= 500 || r.status === 408 || r.status === 429 ? "net" : (r.j && /ban/i.test(JSON.stringify(r.j)) ? "refus" : "expire");
    S = { ...tokens(r.j), lastOk: S.lastOk }; save(S);
    const a = await autorise(S.access_token);
    if (a === "net") return "net";
    if (a === "non") return "refus";
    if (a === "plein") return "plein";
    S.lastOk = Date.now(); if (a !== "ok") S.nom = a; save(S);
    setTimeout(() => dispatchEvent(new Event("auth-ok")), 0);
    return "ok";
  }
  const horsDelai = () => !S || !S.lastOk || (Date.now() - S.lastOk) > MAX_HORS_LIGNE_JOURS * 864e5;

  /* ---------- écran de connexion ---------- */
  function ecran(msg, kind) {
    let el = document.getElementById("login");
    if (!el) { el = document.createElement("div"); el.id = "login"; document.body.appendChild(el); }
    el.innerHTML = `<form id="lgf" autocomplete="on">
      <div class="sq"><b style="background:#6FA8E8"></b><b style="background:#F5A33A"></b><b style="background:#FF6A5E"></b></div>
      <h2>Diag'SAV</h2>
      <p class="lgm ${kind || ""}" id="lgm" role="status">${esc(msg || "Connexion réservée aux techniciens.")}</p>
      <input id="lge" type="email" name="email" placeholder="Email" autocomplete="username" required value="${esc((S && S.email) || "")}">
      <input id="lgp" type="password" name="password" placeholder="Mot de passe" autocomplete="current-password" required>
      <button id="lgb" type="submit">Se connecter</button>
      <p class="lgn">Une seule connexion, avec du réseau.</p><p class="lgv">Version ${typeof APP_V !== "undefined" ? esc(APP_V) : "—"}</p></form>`;
    document.documentElement.classList.add("locked");
    document.getElementById("lgf").onsubmit = async ev => {
      ev.preventDefault();
      const m = document.getElementById("lgm"), b = document.getElementById("lgb"), email = document.getElementById("lge").value.trim().toLowerCase(), pw = document.getElementById("lgp").value;
      b.disabled = true; m.className = "lgm"; m.textContent = "Connexion…";
      const r = await call("/auth/v1/token?grant_type=password", { method: "POST", headers: H(), body: JSON.stringify({ email, password: pw }) });
      if (r.net) { b.disabled = false; m.className = "lgm bad"; m.textContent = "Pas de réseau : la première connexion demande du réseau."; return; }
      if (!r.ok) { b.disabled = false; m.className = "lgm bad"; m.textContent = r.j && /ban/i.test(JSON.stringify(r.j)) ? "Ce compte est désactivé. Contactez le SAV." : r.status === 429 ? "Trop d'essais : patientez quelques minutes." : r.status === 400 || r.status === 401 ? "Email ou mot de passe incorrect." : "Connexion impossible pour le moment. Réessayez."; return; }
      if (S && S.email && S.email.toLowerCase() !== email) { try { dispatchEvent(new Event("auth-out")); } catch (e) {} } /* autre compte : on oublie les favoris locaux du précédent */
      S = { ...tokens(r.j, email), lastOk: 0 };
      const a = await autorise(S.access_token);
      if (a === "net") { b.disabled = false; m.className = "lgm bad"; m.textContent = "Vérification impossible : réessayez avec du réseau."; S = null; save(null); return; }
      if (a === "non") { S = null; save(null); b.disabled = false; m.className = "lgm bad"; m.textContent = "Ce compte n'est pas autorisé à utiliser Diag'SAV."; return; }
      MDP_SAISI = pw;
      if (a === "plein") { b.disabled = false; return choixAppareil(); }
      if (PROV) return choixMdp(a);
      reussi(a);
    };
  }
  /* mot de passe provisoire (créé ou réinitialisé par le SAV) : le technicien choisit le sien avant d'entrer */
  function choixMdp(a) {
    const f = document.getElementById("lgf");
    f.innerHTML = `<div class="sq"><b style="background:#6FA8E8"></b><b style="background:#F5A33A"></b><b style="background:#FF6A5E"></b></div><h2>Diag'SAV</h2>
      <p class="lgm" id="lgm">Bienvenue ! Choisissez votre mot de passe personnel (8 caractères minimum). Le mot de passe provisoire ne servira plus.</p>
      <input id="lgn1" type="password" placeholder="Nouveau mot de passe" autocomplete="new-password" minlength="8" required>
      <input id="lgn2" type="password" placeholder="Confirmer le mot de passe" autocomplete="new-password" minlength="8" required>
      <button id="lgb" type="submit">Enregistrer et continuer</button>`;
    f.onsubmit = async ev => {
      ev.preventDefault();
      const m = document.getElementById("lgm"), b = document.getElementById("lgb"), p1 = document.getElementById("lgn1").value, p2 = document.getElementById("lgn2").value;
      m.className = "lgm bad";
      if (p1.length < 8) { m.textContent = "8 caractères minimum."; return; }
      if (p1 !== p2) { m.textContent = "Les deux mots de passe sont différents."; return; }
      if (p1 === MDP_SAISI) { m.textContent = "Choisissez un mot de passe différent du provisoire."; return; }
      b.disabled = true; m.className = "lgm"; m.textContent = "Enregistrement…";
      const r = await changer(S.access_token, MDP_SAISI, p1);
      if (!r.ok) { b.disabled = false; m.className = "lgm bad"; m.textContent = r.erreur; return; }
      MDP_SAISI = ""; PROV = false; reussi(a);
    };
  }
  async function changer(tok, ancien, nouveau) {
    const r = await call("/functions/v1/mon-mot-de-passe", { method: "POST", headers: H(tok), body: JSON.stringify({ ancien, nouveau }) }, 15000);
    if (r.net) return { ok: false, erreur: "Pas de réseau : réessayez." };
    if (!r.ok) return { ok: false, erreur: (r.j && r.j.erreur) || "Changement impossible pour le moment." };
    return { ok: true };
  }
  function reussi(a) { S.lastOk = Date.now(); if (a !== "ok") S.nom = a; save(S); ouvrir(); setTimeout(() => dispatchEvent(new Event("auth-ok")), 0); }
  const fd = d => { try { return new Date(d).toLocaleDateString("fr-FR", { day: "numeric", month: "short" }) + " à " + new Date(d).toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" }); } catch (e) { return ""; } };
  /* compte déjà ouvert sur 2 appareils : choisir lequel déconnecter */
  function choixAppareil() {
    const f = document.getElementById("lgf");
    f.innerHTML = `<div class="sq"><b style="background:#6FA8E8"></b><b style="background:#F5A33A"></b><b style="background:#FF6A5E"></b></div><h2>Diag'SAV</h2>
      <p class="lgm bad" id="lgm">Ce compte est déjà connecté sur ${MAXA} appareils (maximum).</p>
      <p class="lgn" style="white-space:normal">Pour vous connecter ici, déconnectez l'un d'eux :</p>` +
      PLEIN.map(x => `<button type="button" class="lgd" data-id="${esc(x.id)}"><b>${esc(x.nom || "Appareil")}</b><small>dernière utilisation le ${esc(fd(x.vu))}</small></button>`).join("") +
      `<button type="button" id="lgx" class="lgd2">Annuler</button>`;
    f.querySelectorAll(".lgd").forEach(btn => btn.onclick = async () => {
      if (!confirm("Déconnecter « " + btn.querySelector("b").textContent + " » ? Il faudra s'y reconnecter avec le mot de passe.")) return;
      f.querySelectorAll("button").forEach(x => x.disabled = true);
      const a = await autorise(S.access_token, btn.dataset.id);
      if (a === "plein") return choixAppareil();
      if (a === "net" || a === "non") { const em = S && S.email; S = em ? { email: em } : null; save(S); return ecran(a === "net" ? "Pas de réseau : réessayez." : "Ce compte n'est pas autorisé à utiliser Diag'SAV.", "bad"); }
      if (PROV) return choixMdp(a);
      reussi(a);
    });
    document.getElementById("lgx").onclick = () => { const em = S && S.email; S = em ? { email: em } : null; save(S); ecran(); };
  }
  function ouvrir() {
    const el = document.getElementById("login"); if (el) el.remove();
    document.documentElement.classList.remove("locked");
    if (onReady) { const f = onReady; onReady = null; f(); }
  }
  function verrou(msg) { S = S ? { email: S.email } : null; save(S); ecran(msg, "bad"); }

  async function reverif(silent) {
    if (busy || !S || !S.refresh_token) return; busy = true;
    try {
      const v = await verifier();
      if (v === "ok") { if (document.documentElement.classList.contains("locked")) ouvrir(); }
      else if (v === "refus") verrou("Votre accès a été désactivé. Contactez le SAV.");
      else if (v === "plein") verrou("Ce compte a été connecté sur un autre appareil (" + MAXA + " maximum). Reconnectez-vous pour utiliser celui-ci.");
      else if (v === "expire") verrou("Session expirée : reconnectez-vous.");
      else if (v === "net" && horsDelai()) { ecran("Plus de vérification depuis plus de " + MAX_HORS_LIGNE_JOURS + " jours : connectez-vous au réseau pour continuer (l'appli se rouvrira toute seule).", "bad"); }
    } finally { busy = false; }
  }

  window.AUTH = {
    /* démarre l'appli (cb) une fois l'accès confirmé ; sans réseau, la session gardée suffit dans le délai */
    start(cb) {
      if (!ACCES_REQUIS) { window.AUTH_ACTIF = false; cb(); return; }
      window.AUTH_ACTIF = true; onReady = cb; started = true;
      if (S && S.refresh_token && !horsDelai()) { ouvrir(); reverif(true); }
      else if (S && S.refresh_token) { /* délai dépassé : il faut vérifier avant d'ouvrir */
        ecran("Vérification de votre accès…");
        verifier().then(v => { if (v === "ok") ouvrir(); else if (v === "net") ecran("Plus de vérification depuis plus de " + MAX_HORS_LIGNE_JOURS + " jours : connectez-vous au réseau pour continuer (l'appli se rouvrira toute seule).", "bad"); else verrou(v === "refus" ? "Votre accès a été désactivé. Contactez le SAV." : v === "plein" ? "Ce compte a été connecté sur un autre appareil (" + MAXA + " maximum). Reconnectez-vous pour utiliser celui-ci." : "Session expirée : reconnectez-vous."); });
      } else ecran();
      document.addEventListener("visibilitychange", () => { if (document.visibilityState === "visible" && started && S && Date.now() - (S.lastOk || 0) > REVERIF_MS) reverif(true); });
      addEventListener("online", () => { if (S) reverif(true); });
    },
    email: () => (S && S.email) || "",
    /* appel authentifié à Supabase (renouvelle le jeton une fois s'il a expiré) ; renvoie { ok, status, j } ou { net: true } */
    async api(path, opt) {
      if (!S || !S.access_token) return { ok: false, status: 401 };
      const o = opt || {}, h = t => ({ ...H(t), ...(o.headers || {}) });
      let r = await call(path, { ...o, headers: h(S.access_token) });
      if (!r.net && r.status === 401 && S && S.refresh_token) {
        const v = await verifier();
        if (v !== "ok") { if (v === "refus") verrou("Votre accès a été désactivé. Contactez le SAV."); else if (v === "plein") verrou("Ce compte a été connecté sur un autre appareil (" + MAXA + " maximum). Reconnectez-vous pour utiliser celui-ci."); else if (v === "expire") verrou("Session expirée : reconnectez-vous."); return { ok: false, status: 401 }; }
        r = await call(path, { ...o, headers: h(S.access_token) });
      }
      return r;
    },
    pret: () => !!(S && S.access_token && !document.documentElement.classList.contains("locked")),
    nom: () => (S && S.nom) || "",
    /* Réglages : changer son mot de passe (l'ancien est revérifié côté serveur) */
    async changerMdp(ancien, nouveau) {
      if (!S || !S.access_token) return { ok: false, erreur: "Non connecté." };
      let r = await changer(S.access_token, ancien, nouveau);
      if (!r.ok && /Session invalide/.test(r.erreur || "")) { const v = await verifier(); if (v === "ok") r = await changer(S.access_token, ancien, nouveau); }
      return r;
    },
    async deconnecter() {
      let reste = 0;
      try { if (window.SYNC && SYNC.vider) reste = await Promise.race([SYNC.vider(), new Promise(r => setTimeout(() => r(-1), 6000))]); } catch (e) {}
      if (reste !== 0 && !confirm(reste > 0 ? reste + " changement(s) (favoris, consultations) n'ont pas pu être envoyés faute de réseau et seront perdus. Se déconnecter quand même ?" : "L'envoi des derniers changements n'a pas abouti. Se déconnecter quand même ?")) return;
      const t = S && S.access_token;
      if (t) { await call("/rest/v1/rpc/quitter", { method: "POST", headers: H(t), body: JSON.stringify({ appareil: DEV }) }, 4000); call("/auth/v1/logout?scope=local", { method: "POST", headers: H(t) }, 4000); } /* libère la place de cet appareil */
      S = null; save(null); try { dispatchEvent(new Event("auth-out")); } catch (e) {} setTimeout(() => location.reload(), 300);
    },
    joursRestants() { return S && S.lastOk ? Math.max(0, MAX_HORS_LIGNE_JOURS - Math.floor((Date.now() - S.lastOk) / 864e5)) : 0; }
  };
})();
