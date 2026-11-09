/* Simulateur de carte (formation) : #/sim (liste), #/sim/<carte> (simulateur), #/sim/suivi (administrateur).
   Tout vient des fiches (onglet Paramètres, extrait des notices) : menus, valeurs, valeurs d'usine. Ce que la fiche ne décrit pas
   n'est pas simulé et l'écran le dit. Deux familles :
   - Roger à afficheur 4 chiffres (B70/1DCHP, EDGE1, B70/1DC) : UP / DOWN font défiler les paramètres dans l'ordre de l'index de la
     notice (A0…A9 puis 10…99, paramètres spéciaux à la fin), + / − changent la valeur qui clignote, enregistrement après quelques
     secondes ou au paramètre suivant (l'afficheur clignote vite) ;
   - Casit à dip-switch (EQ2009, KEQS08) : interrupteurs à basculer, effet affiché d'après la fiche.
   Exercices tirés des paramètres de la fiche, résultat enregistré sur le compte (table simulateur_resultats). */
(function () {
  const CARTES = { "roger-b70-1dchp": "roger", "roger-edge1": "roger", "roger-b70-1dc": "roger", "casit-eq2009": "dip", "casit-keqs08": "dip" };
  const Q = "sim-q", LOC = "sim-loc";
  const st = { get(k, d) { try { const v = localStorage.getItem(k); return v === null ? d : JSON.parse(v); } catch (e) { return d; } }, set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} } };
  const actif = () => !!(window.AUTH_ACTIF && window.AUTH && AUTH.email());
  const moi = () => ((window.AUTH && AUTH.email()) || "").toLowerCase();
  const board = id => (typeof BOARDS !== "undefined" ? BOARDS : []).find(x => x.c.id === id);
  const mel = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  let courant = null, tEnreg = 0, tFlash = 0; /* simulateur affiché et ses minuteries */
  window.simDispo = id => !!(CARTES[id] && board(id) && board(id).c.parametres);

  /* ---------- résultats : file d'attente hors ligne puis envoi ---------- */
  function noter(fiche, exercice, reussi, aide, duree) {
    const loc = st.get(LOC, {}); const k = moi() + "|" + fiche; const l = loc[k] || { ok: 0, essais: 0 };
    l.essais++; if (reussi) l.ok++; loc[k] = l; st.set(LOC, loc);
    if (!actif()) return;
    const q = st.get(Q, []); q.push({ e: moi(), fiche_id: fiche, exercice: exercice.slice(0, 200), reussi: !!reussi, aide: !!aide, duree_s: Math.max(0, Math.min(86400, Math.round(duree))), fait_le: new Date().toISOString() });
    st.set(Q, q.slice(-300)); envoyer();
  }
  let enCours = false;
  async function envoyer() {
    if (enCours || !actif() || navigator.onLine === false || !AUTH.pret()) return;
    enCours = true;
    try {
      const lot = st.get(Q, []).filter(x => x.e === moi()).slice(0, 50); if (!lot.length) return;
      const r = await AUTH.api("/rest/v1/simulateur_resultats", { method: "POST", headers: { "Content-Type": "application/json", Prefer: "return=minimal" }, body: JSON.stringify(lot.map(({ e, ...x }) => ({ ...x, email: e }))) });
      if (r.ok || (!r.net && r.status >= 400 && r.status < 500 && r.status !== 401 && r.status !== 429)) { const s = new Set(lot.map(x => x.fait_le + x.exercice)); st.set(Q, st.get(Q, []).filter(x => !(x.e === moi() && s.has(x.fait_le + x.exercice)))); }
    } catch (e) {} finally { enCours = false; }
  }
  addEventListener("online", () => setTimeout(envoyer, 3000));
  addEventListener("auth-ok", () => setTimeout(envoyer, 4000));
  addEventListener("load", () => setTimeout(envoyer, 6000));

  /* ---------- Roger : liste des paramètres et valeurs ---------- */
  const SPECIAL_V = /^(Procédure|Activer|Débloquer|Supprimer|Exemple|Au démarrage|lecture)$/i;
  const special = x => x.def === "lecture" || (x.valeurs || []).some(([v, d]) => SPECIAL_V.test(v) || /\b(maintenir|Saisir|Lire à la suite)\b/i.test(d || "")) || !(x.valeurs || []).length;
  /* valeurs possibles à l'écran (2 caractères), plages développées ; null si la fiche ne donne pas de valeurs simples */
  function valeursRoger(x) {
    if (special(x)) return null;
    const out = [];
    for (const [v, d] of x.valeurs) {
      const m = /^(\d{2})\s*[–-]\s*(\d{2})$/.exec(v);
      if (m) { for (let n = +m[1]; n <= +m[2] && out.length < 120; n++) out.push({ v: String(n).padStart(2, "0"), d }); continue; }
      if (/^[0-9A-Za-z]{1,2}$/.test(v)) { out.push({ v: v.length === 1 ? "0" + v : v, d }); continue; }
      return null; /* valeur non affichable telle quelle : pas simulée */
    }
    const vu = new Set(); return out.filter(o => !vu.has(o.v) && vu.add(o.v));
  }
  /* ordre de l'index des paramètres de la notice : A0…A9, puis 10…99, puis le reste dans l'ordre de la fiche */
  function ordreRoger(c) {
    const its = c.parametres.groupes.flatMap(g => g.items);
    const a = its.filter(x => /^A\d$/.test(x.code)).sort((p, q) => p.code.localeCompare(q.code));
    const n = its.filter(x => /^\d{2}$/.test(x.code)).sort((p, q) => +p.code - +q.code);
    const r = its.filter(x => !a.includes(x) && !n.includes(x));
    return a.concat(n, r);
  }
  const defRoger = (x, L) => { const d = String(x.def || "").trim(); const dd = /^\d$/.test(d) ? "0" + d : d; return L && L.some(o => o.v === dd) ? dd : null; };

  /* ---------- Casit : interrupteurs ---------- */
  /* « S1 · DIP 3 », « S4 · DIP 1 · 2 », « A · DIP 1 · 2 » → banc + numéros */
  function dipsDe(code) { const m = /^(\w+)\s*·\s*DIP\s+([\d\s·]+)$/.exec(code); if (!m) return null; return { banc: m[1], n: m[2].split("·").map(s => +s.trim()).filter(Boolean) }; }
  /* état d'un réglage combiné : « OFF · ON » ou « 1 OFF · 2 ON » selon la notation de la fiche */
  function etiquette(item, dp, etat) {
    const pos = dp.n.map(k => etat[dp.banc + k] ? "ON" : "OFF");
    const a = pos.join(" · "), b = dp.n.map((k, i) => k + " " + pos[i]).join(" · ");
    return (item.valeurs.find(([v]) => v === a || v === b) || [null, null]);
  }

  /* ---------- pages ---------- */
  window.viewSim = function (sub) {
    if (sub === "suivi") return suivi();
    if (sub && CARTES[sub]) return simulateur(sub);
    setHead("Simulateur de carte", true);
    const loc = st.get(LOC, {});
    app.innerHTML = `<p class="note"><b>Formation.</b> Une carte dessinée qui réagit comme la vraie, d'après les fiches (tirées des notices). Faites les exercices pour vous entraîner sans portail. Ce que la notice ne décrit pas n'est pas simulé.</p><div class="list">` +
      Object.keys(CARTES).filter(simDispo).map(id => { const b = board(id), l = loc[moi() + "|" + id]; return `<button class="row" onclick="go('#/sim/${id}')"><span class="badge" style="--c:${esc(b.m.couleur)}">${esc(b.m.nom)}</span><b>${esc(b.c.nom)}</b><small>${CARTES[id] === "roger" ? "Afficheur et touches" : "Dip-switch"}${l ? ` · ${l.ok} exercice${l.ok > 1 ? "s" : ""} réussi${l.ok > 1 ? "s" : ""}` : ""}</small></button>`; }).join("") + `</div>` +
      (window.SYNC && SYNC.estAdmin() ? `<button class="dbtn" onclick="go('#/sim/suivi')">📊 Suivi des techniciens</button>` : "");
  };

  function simulateur(id) {
    const { m, c } = board(id), fam = CARTES[id];
    setHead("Simulateur · " + c.nom, true);
    clearTimeout(tEnreg); clearTimeout(tFlash);
    const S = courant = { fam, c, ex: null, t0: Date.now(), aide: false, fini: 0 };
    if (fam === "roger") {
      S.liste = ordreRoger(c); S.vals = {}; S.mode = "repos"; S.i = 0; S.edit = null; S.msg = "";
      S.liste.forEach(x => { const L = valeursRoger(x); S.vals[x.code] = defRoger(x, L); });
    } else {
      S.etat = {}; S.items = c.parametres.groupes.flatMap(g => g.items.map(x => ({ x, g: g.nom, dp: dipsDe(x.code) }))).filter(o => o.dp);
      S.bancs = {}; S.items.forEach(o => o.dp.n.forEach(k => { S.bancs[o.dp.banc] = Math.max(S.bancs[o.dp.banc] || 0, k); }));
    }
    app.innerHTML = `<p class="note"><b>Formation.</b> ${fam === "roger" ? "Touches comme sur la carte : UP / DOWN pour changer de paramètre, + / − pour la valeur. La valeur clignote puis s'enregistre au bout de quelques secondes, ou en passant au paramètre suivant." : "Touchez un interrupteur pour le basculer. L'effet de chaque réglage s'affiche d'après la fiche. La notice ne donne pas les positions d'usine : départ tout sur OFF."}</p>
      <div class="simc ${fam}" id="simc"></div><div class="simex" id="simex"></div>
      <p class="hotn">Simulateur indicatif, construit d'après la fiche (source : ${esc(c.source)}). ${fam === "roger" ? "Ordre de défilement d'après l'index des paramètres de la notice ; les paramètres qui n'apparaissent que selon le moteur ou d'autres réglages sont tous affichés ici. PROG (apprentissage) et TEST ne sont pas simulés." : "Trimmers et cavaliers : voir l'onglet Paramètres de la fiche (non simulés)."} <a href="#/c/${esc(id)}/param">Voir la fiche</a></p>`;
    dessiner(S); nouvelExo(S);
  }

  function dessiner(S) {
    const el = $("#simc"); if (!el || S !== courant || !location.hash.startsWith("#/sim/" + S.c.id)) return; /* minuterie d'une autre page : rien à dessiner */
    if (S.fam === "roger") {
      const x = S.liste[S.i], L = x && valeursRoger(x);
      const val = S.mode === "param" ? (S.edit !== null ? S.edit : (S.vals[x.code] || "--")) : "";
      const gauche = S.mode === "param" ? (/^[0-9A-Za-z]{2}$/.test(x.code) ? x.code : x.code.slice(0, 2)) : "", desc = S.mode === "param" && L ? (L.find(o => o.v === (S.edit !== null ? S.edit : S.vals[x.code])) || {}).d : "";
      el.innerHTML = `<div class="simcarte"><div class="mne seg simaff ${S.flash ? "vite" : ""}"><span>${esc(gauche || "  ")}</span><span class="${S.edit !== null ? "cli" : ""}">${esc(S.mode === "param" ? val : "")}</span></div>
        <div class="simk">${["UP ▲", "DOWN ▼", "+", "−", "PROG", "TEST"].map(k => `<button class="simt" data-k="${k}" aria-label="Touche ${k}">${k}</button>`).join("")}</div></div>
        <div class="siminfo">${S.mode === "param" ? `<b>${esc(x.code)} · ${esc(x.titre)}</b><br>${S.edit !== null ? "Valeur en cours de modification (elle clignote) : " : "Valeur : "}<b>${esc(val)}</b>${desc ? " — " + esc(desc) : ""}${!L ? `<br><i>Réglage à procédure propre ou en lecture : voir la fiche.</i>` : ""}` : "Au repos, l'afficheur montre l'état des commandes et des sécurités (onglet Écran de la fiche). Appuyez sur UP ou DOWN pour afficher les paramètres."}${S.msg ? `<p class="simmsg">${esc(S.msg)}</p>` : ""}</div>`;
      el.querySelectorAll(".simt").forEach(b => b.onclick = () => touche(S, b.dataset.k));
    } else {
      const bancs = Object.keys(S.bancs);
      el.innerHTML = `<div class="simcarte dip">${bancs.map(bn => `<div class="simbanc"><b>${esc(bn.length === 1 ? "DIP " + bn : bn)}</b><div class="simdips">${Array.from({ length: S.bancs[bn] }, (_, i) => i + 1).map(k => `<button class="simdip${S.etat[bn + k] ? " on" : ""}" data-b="${esc(bn)}" data-k="${k}" aria-pressed="${!!S.etat[bn + k]}" aria-label="${esc(bn)} interrupteur ${k}"><i></i><span>${k}</span></button>`).join("")}</div><small>ON en haut</small></div>`).join("")}</div>
        <div class="siminfo">${bancs.map(bn => `<h4>${esc(bn.length === 1 ? "DIP " + bn : bn)}</h4><ul class="plain">${S.items.filter(o => o.dp.banc === bn).map(o => { const [v, d] = etiquette(o.x, o.dp, S.etat); return `<li${S.dernier === o.x.code ? ' class="simder"' : ""}><b>${esc(o.dp.n.join(" · "))}</b> ${esc(o.x.titre)} : ${v ? esc(d || v) : "<i>combinaison non décrite par la notice</i>"}</li>`; }).join("")}</ul>`).join("")}</div>`;
      el.querySelectorAll(".simdip").forEach(b => b.onclick = () => { const k = b.dataset.b + b.dataset.k; S.etat[k] = !S.etat[k]; const o = S.items.find(o => o.dp.banc === b.dataset.b && o.dp.n.includes(+b.dataset.k)); S.dernier = o && o.x.code; dessiner(S); verifier(S); });
    }
  }

  /* touches Roger */
  function enregistrer(S) {
    if (S !== courant) return;
    clearTimeout(tEnreg); const x = S.liste[S.i];
    if (S.edit === null || !x) return;
    S.vals[x.code] = S.edit; S.edit = null; S.flash = true; clearTimeout(tFlash); tFlash = setTimeout(() => { S.flash = false; dessiner(S); }, 900);
    dessiner(S); verifier(S);
  }
  function touche(S, k) {
    S.msg = "";
    const x = S.liste[S.i];
    if (k === "PROG") { S.msg = "PROG lance l'apprentissage de la course : non simulé ici (voir l'onglet Apprent. de la fiche)."; return dessiner(S); }
    if (k === "TEST") { S.msg = "TEST : mode test des entrées, non simulé ici (voir l'onglet Écran de la fiche)."; return dessiner(S); }
    if (k === "UP ▲" || k === "DOWN ▼") {
      if (S.edit !== null) enregistrer(S); /* passer à un autre paramètre enregistre la valeur */
      if (S.mode !== "param") { S.mode = "param"; S.i = 0; } /* la notice : UP / DOWN affichent les paramètres */
      else S.i = (S.i + (k === "UP ▲" ? 1 : -1) + S.liste.length) % S.liste.length;
      return dessiner(S);
    }
    if (S.mode !== "param") { S.msg = "Affichez d'abord un paramètre avec UP ou DOWN."; return dessiner(S); }
    const L = valeursRoger(x);
    if (!L) { S.msg = "Ce réglage ne se change pas avec + / − : il a sa propre procédure (voir la fiche)."; return dessiner(S); }
    const cur = S.edit !== null ? S.edit : S.vals[x.code];
    let i = L.findIndex(o => o.v === cur);
    if (i < 0) i = k === "+" ? -1 : L.length; /* valeur d'usine non indiquée : on part d'un bout de la liste */
    i = Math.max(0, Math.min(L.length - 1, i + (k === "+" ? 1 : -1)));
    S.edit = L[i].v;
    clearTimeout(tEnreg); tEnreg = setTimeout(() => enregistrer(S), 3000); /* « attendre quelques secondes » */
    dessiner(S);
  }

  /* ---------- exercices ---------- */
  function candidats(S) {
    if (S.fam === "roger") return S.liste.map(x => ({ x, L: valeursRoger(x) })).filter(o => o.L && o.L.length >= 2 && o.L.length <= 30 && o.L.some(v => v.d));
    return S.items.filter(o => o.x.valeurs.length >= 2);
  }
  function nouvelExo(S) {
    const C = candidats(S); if (!C.length) { $("#simex").innerHTML = `<p class="empty">Pas d'exercice possible sur cette carte.</p>`; return; }
    const o = mel(C)[0];
    if (S.fam === "roger") {
      const cur = S.vals[o.x.code], choix = mel(o.L.filter(v => v.v !== cur && v.d))[0] || o.L.find(v => v.v !== cur);
      S.ex = { code: o.x.code, v: choix.v, texte: `Règle « ${o.x.titre} » sur ${choix.v}${choix.d ? " (" + choix.d + ")" : ""}.`, indice: `C'est le paramètre ${o.x.code} : UP / DOWN jusqu'à ${o.x.code}, puis + / − jusqu'à ${choix.v}, et attendre l'enregistrement.` };
    } else {
      const [cv] = etiquette(o.x, o.dp, S.etat), choix = mel(o.x.valeurs.filter(([v]) => v !== cv))[0];
      S.ex = { code: o.x.code, v: choix[0], texte: `Règle « ${o.x.titre} » : ${choix[1] || choix[0]}.`, indice: `Interrupteur${o.dp.n.length > 1 ? "s" : ""} ${o.x.code} : ${choix[0]}.` };
    }
    S.t0 = Date.now(); S.aide = false;
    $("#simex").innerHTML = `<h2>Exercice ${S.fini + 1}</h2><p class="simq">${esc(S.ex.texte)}</p><p class="hotn" id="simind"></p>
      <div class="sga"><button class="mini" id="simai">Indice</button><button class="mini" id="simpa">Passer</button></div>`;
    $("#simai").onclick = () => { S.aide = true; $("#simind").textContent = S.ex.indice; };
    $("#simpa").onclick = () => { noter(S.c.id, S.ex.texte, false, S.aide, (Date.now() - S.t0) / 1000); nouvelExo(S); };
    verifier(S, true);
  }
  function verifier(S, initial) {
    if (!S.ex || S !== courant || !$("#simex")) return;
    let ok = false;
    if (S.fam === "roger") ok = S.vals[S.ex.code] === S.ex.v && S.edit === null;
    else { const o = S.items.find(o => o.x.code === S.ex.code); ok = o && etiquette(o.x, o.dp, S.etat)[0] === S.ex.v; }
    if (!ok || initial) return;
    const ex = S.ex; S.ex = null; S.fini++;
    noter(S.c.id, ex.texte, true, S.aide, (Date.now() - S.t0) / 1000);
    $("#simex").innerHTML = `<p class="simok">✓ Réussi${S.aide ? " (avec indice)" : ""} en ${Math.round((Date.now() - S.t0) / 1000)} s.</p><button class="dbtn" id="simnx">Exercice suivant</button>`;
    $("#simnx").onclick = () => nouvelExo(S);
  }

  /* ---------- suivi (administrateur) ---------- */
  async function suivi() {
    setHead("Suivi du simulateur", true);
    if (!(window.SYNC && SYNC.estAdmin())) { app.innerHTML = `<p class="empty">Page réservée à l'administrateur.</p>`; return; }
    app.innerHTML = `<p class="note">Chargement…</p>`;
    const r = await AUTH.api("/rest/v1/rpc/simulateur_suivi", { method: "POST", headers: { "Content-Type": "application/json" }, body: "{}" });
    if (!/^#\/sim\/suivi/.test(location.hash)) return;
    if (!r.ok || !Array.isArray(r.j)) { app.innerHTML = `<p class="empty">${r.net ? "Pas de réseau : le suivi demande une connexion." : "Suivi indisponible."}</p>`; return; }
    const fd = d => { try { return new Date(d).toLocaleDateString("fr-FR", { day: "numeric", month: "short" }); } catch (e) { return ""; } };
    app.innerHTML = r.j.length ? `<table class="stt">${r.j.map(t => `<tr><td>${esc(t.nom)}<small>${(t.liste_cartes || []).map(id => esc((board(id) || { c: { nom: id } }).c.nom)).join(" · ")} · dernier exercice ${fd(t.dernier)}</small></td><td class="n">${Number(t.reussis)}<small>réussis / ${Number(t.essais)}<br>${Number(t.sans_aide)} sans indice</small></td></tr>`).join("")}</table>` : `<p class="empty">Aucun exercice fait pour l'instant.</p>`;
  }
  window.SIM = { valeursRoger, ordreRoger, dipsDe, etiquette, cartes: CARTES };
})();
