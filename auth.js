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

  /* la ligne du technicien doit exister et être active */
  async function autorise(tok) {
    const r = await call("/rest/v1/techniciens?select=actif,nom", { headers: H(tok) });
    if (r.net) return "net";
    if (!r.ok) return r.status === 401 || r.status === 403 ? "non" : "net";
    return Array.isArray(r.j) && r.j[0] && r.j[0].actif === true ? (r.j[0].nom || "ok") : "non";
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
    S.lastOk = Date.now(); if (a !== "ok") S.nom = a; save(S);
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
      <p class="lgn">La connexion se fait une seule fois. Il faut du réseau ce jour-là.</p></form>`;
    document.documentElement.classList.add("locked");
    document.getElementById("lgf").onsubmit = async ev => {
      ev.preventDefault();
      const m = document.getElementById("lgm"), b = document.getElementById("lgb"), email = document.getElementById("lge").value.trim().toLowerCase(), pw = document.getElementById("lgp").value;
      b.disabled = true; m.className = "lgm"; m.textContent = "Connexion…";
      const r = await call("/auth/v1/token?grant_type=password", { method: "POST", headers: H(), body: JSON.stringify({ email, password: pw }) });
      if (r.net) { b.disabled = false; m.className = "lgm bad"; m.textContent = "Pas de réseau : la première connexion demande du réseau."; return; }
      if (!r.ok) { b.disabled = false; m.className = "lgm bad"; m.textContent = r.j && /ban/i.test(JSON.stringify(r.j)) ? "Ce compte est désactivé. Contactez le SAV." : r.status === 429 ? "Trop d'essais : patientez quelques minutes." : r.status === 400 || r.status === 401 ? "Email ou mot de passe incorrect." : "Connexion impossible pour le moment. Réessayez."; return; }
      S = { ...tokens(r.j, email), lastOk: 0 };
      const a = await autorise(S.access_token);
      if (a === "net") { b.disabled = false; m.className = "lgm bad"; m.textContent = "Vérification impossible : réessayez avec du réseau."; S = null; save(null); return; }
      if (a === "non") { S = null; save(null); b.disabled = false; m.className = "lgm bad"; m.textContent = "Ce compte n'est pas autorisé à utiliser Diag'SAV."; return; }
      S.lastOk = Date.now(); if (a !== "ok") S.nom = a; save(S);
      ouvrir();
    };
  }
  function ouvrir() {
    const el = document.getElementById("login"); if (el) el.remove();
    document.documentElement.classList.remove("locked");
    if (onReady) { const f = onReady; onReady = null; f(); }
  }
  function verrou(msg) { S = S ? { email: S.email } : null; save(null); ecran(msg, "bad"); }

  async function reverif(silent) {
    if (busy || !S || !S.refresh_token) return; busy = true;
    try {
      const v = await verifier();
      if (v === "ok") { if (document.documentElement.classList.contains("locked")) ouvrir(); }
      else if (v === "refus") verrou("Votre accès a été désactivé. Contactez le SAV.");
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
        verifier().then(v => { if (v === "ok") ouvrir(); else if (v === "net") ecran("Plus de vérification depuis plus de " + MAX_HORS_LIGNE_JOURS + " jours : connectez-vous au réseau pour continuer (l'appli se rouvrira toute seule).", "bad"); else verrou(v === "refus" ? "Votre accès a été désactivé. Contactez le SAV." : "Session expirée : reconnectez-vous."); });
      } else ecran();
      document.addEventListener("visibilitychange", () => { if (document.visibilityState === "visible" && started && S && Date.now() - (S.lastOk || 0) > REVERIF_MS) reverif(true); });
      addEventListener("online", () => { if (S) reverif(true); });
    },
    email: () => (S && S.email) || "",
    nom: () => (S && S.nom) || "",
    deconnecter() { const t = S && S.access_token; if (t) call("/auth/v1/logout?scope=local", { method: "POST", headers: H(t) }, 4000); S = null; save(null); location.reload(); },
    joursRestants() { return S && S.lastOk ? Math.max(0, MAX_HORS_LIGNE_JOURS - Math.floor((Date.now() - S.lastOk) / 864e5)) : 0; }
  };
})();
