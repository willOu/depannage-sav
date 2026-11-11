/* Recherche en langage courant : trouve le paramètre / la borne / le code qui répond à une phrase.
   Ce n'est pas une réponse rédigée : c'est une recherche par mots-clés (avec synonymes) dans les fiches. */
(function () {
  const STOP = new Set(("comment pour sur sous dans avec sans que qui quoi quel quelle quels quelles est sont etre avoir a au aux de du des un une le la les l d s et ou ou ni donc car en y il elle on ce cet cette ces se sa son ses mon ma mes ton ta tes " +
    "faire fait faut falloir peut peux puis pouvoir vouloir veux voudrais dois doit devoir mettre met mis activer active desactiver desactive regler regle reglage modifier modifie changer change augmenter diminuer passer passe parametrer " +
    "ou oui non pas plus moins tres bien alors si quand lorsque ca cela ceci y a-t-il quelle quel faut-il où comment-faire pourquoi ne n bornier borne bornes fiche carte parametre parametres code codes notice " +
    "mais portail porte brancher branche branchement cabler cablage raccorder raccordement connecter trouver trouve cherche chercher veut dire signifie j je me te").split(/\s+/));
  const SYN = {
    automatique: ["auto", "tca", "tfa"], fermeture: ["ferm", "fermer", "refermeture"], fermer: ["fermeture"], ouvrir: ["ouverture"], ouvre: ["ouverture"],
    photocellule: ["cellule", "photo", "cx", "cy"], cellule: ["photocellule", "cx", "cy"], clignotant: ["flash", "lampe", "feu"], lampe: ["clignotant", "cycle"],
    couple: ["force", "sensibilite"], force: ["couple", "sensibilite"], sensibilite: ["couple", "obstacle"], obstacle: ["sensibilite"],
    radio: ["emetteur", "telecommande", "canal"], emetteur: ["radio", "telecommande"], telecommande: ["radio", "emetteur"], badge: ["transpondeur", "utilisateur"],
    serrure: ["electro", "verrou"], pieton: ["pietonne", "partielle"], pietons: ["pietonne", "partielle"], partielle: ["pietonne", "partielle"],
    vitesse: ["speed"], ralentissement: ["ralenti", "ral", "slow"], ralentir: ["ralentissement", "ralenti"], pause: ["tca", "tfa", "attente", "temps"], attente: ["pause", "temps"],
    temps: ["duree", "tl"], duree: ["temps"], preclignotement: ["preclignotement"], moteur: ["motor", "motoreducteur"], encodeur: ["enc"], arret: ["stop"], stop: ["arret"],
    homme: ["maintenue", "continue"], mort: ["maintenue", "continue"], maintenue: ["homme", "continue"], bouton: ["commande", "poussoir"], voyant: ["lampe", "temoin", "spia"],
    antenne: ["rg58"], batterie: ["batteries", "secours"], coulissant: [], battant: []
  };
  const APPR = ["apprentissage", "apprendre", "calibrage", "etalonnage", "course", "programmer", "programmation"];
  const sing = w => (w.length > 4 && /[sx]$/.test(w)) ? w.slice(0, -1) : w;
  const compact = s => norm(s).replace(/ /g, "");

  function parse(q) {
    const raw = norm(String(q).replace(/['’]/g, " ")).split(" ").filter(Boolean);
    const brands = [], boards = [], used = new Set(), amb = [];
    // marques
    raw.forEach((w, i) => MARQUES.forEach(m => { if (norm(m.nom) === w || m.id === w || (m.alias && norm(m.alias).split(" ").includes(w))) { brands.push(m.id); used.add(i); } }));
    // cartes : un mot, ou deux mots accolés (zbx 241)
    const tokCount = {};
    const tokensOf = c => { const k = new Set(); norm(c.nom).split(" ").forEach(t => t.length >= 3 && k.add(t)); norm(c.modeles || "").split(" ").forEach(t => { if (t.length >= 3 && /\d/.test(t) && /[a-z]/.test(t)) k.add(t); }); return k; };
    BOARDS.forEach(({ c }) => tokensOf(c).forEach(t => tokCount[t] = (tokCount[t] || 0) + 1));
    BOARDS.forEach(({ m, c }) => {
      const keys = new Set([compact(c.nom)]);
      tokensOf(c).forEach(t => { if (tokCount[t] === 1) keys.add(t); });
      const tous = tokensOf(c);
      raw.forEach((w, i) => {
        /* début de référence commun à plusieurs cartes (« B70 ») : on retient ces cartes sans en choisir une */
        if (w.length >= 3 && /\d/.test(w) && /[a-z]/.test(w) && !keys.has(w) && (tous.has(w) || (w.length >= 4 && [...tous].some(t => t.startsWith(w))))) { amb.push(c.id); used.add(i); }
        if (w.length >= 3 && keys.has(w)) { boards.push(c.id); used.add(i); }
        if (i + 1 < raw.length && keys.has(w + raw[i + 1])) { boards.push(c.id); used.add(i); used.add(i + 1); }
      });
    });
    const topic = raw.filter((w, i) => !used.has(i) && !STOP.has(w) && w.length > 1 && !/^\d+$/.test(w) && w !== "deux").map(sing);
    return { brands, boards: [...new Set(boards)], amb: boards.length ? [] : [...new Set(amb)], topic };
  }
  const alts = w => [w].concat(SYN[w] || [], SYN[w + "s"] || []);
  const has = (txt, list) => list.some(a => txt.includes(a));
  function scoreText(tIn, tAll, topic) {
    let s = 0, n = 0;
    topic.forEach(w => { const a = alts(w); if (has(tIn, a)) { s += 3; n++; } else if (has(tAll, a)) { s += 1; n++; } });
    return { s, n };
  }

  const ctxOf = (m, c) => `<span class="badge" style="--c:${m.couleur}">${esc(m.nom)}</span>${esc(c.nom)}`;
  /* tous les résultats (paramètres, bornes, codes) qui répondent à la phrase, du plus proche au moins proche */
  function collect(q, carte) {
    const P = parse(q), { brands, boards, topic } = P;
    const ids = carte ? [carte] : boards.length ? boards : P.amb;
    const pool = BOARDS.filter(({ m, c }) => (!ids.length || ids.includes(c.id)) && (carte || !brands.length || brands.includes(m.id)));
    const hits = [];
    if (topic.length) {
      const need = Math.max(1, Math.ceil(topic.length * 0.6));
      const min = topic.length === 1 && ids.length ? 1 : 3; /* un seul mot sur une carte précise : on accepte aussi une mention dans la description */
      pool.forEach(({ m, c }) => {
        (c.parametres ? c.parametres.groupes.flatMap(g => g.items) : []).forEach(x => {
          const tIn = norm(`${x.code} ${x.titre}`), tAll = norm(tIn + " " + x.valeurs.map(v => v.join(" ")).join(" ") + " " + (x.note || ""));
          const r = scoreText(tIn, tAll, topic);
          if (r.n >= need && r.s >= min) hits.push({ k: "p", s: r.s + 0.5, m, c, x });
        });
        c.bornier.groupes.forEach(g => g.bornes.forEach(t => {
          const tIn = norm(`${t.n} ${t.label}`), tAll = norm(tIn + " " + t.desc);
          const r = scoreText(tIn, tAll, topic);
          if (r.n >= need && r.s >= min) hits.push({ k: "b", s: r.s, m, c, t });
        }));
        c.codes.forEach(x => {
          const tIn = norm(`${x.code} ${x.titre}`), tAll = norm(tIn + " " + x.action);
          const r = scoreText(tIn, tAll, topic);
          if (r.n >= need && r.s >= min) hits.push({ k: "c", s: r.s - 0.5, m, c, x });
        });
      });
    }
    hits.sort((a, b) => b.s - a.s);
    return { P, pool, hits };
  }
  function hitHtml(r) {
    if (r.k === "p") {
      const vals = r.x.valeurs.slice(0, 4).map(v => `<li><b>${esc(v[0])}</b> : ${esc(v[1])}</li>`).join("");
      return `<div class="ahit" onclick="paramOpen=${esc(JSON.stringify(r.x.code))};go('#/c/${r.c.id}/param')"><div class="ak">Paramètre</div><div>${ctxOf(r.m, r.c)}<br><b>${esc(r.x.code)} · ${esc(r.x.titre)}</b> <span class="p">usine ${esc(r.x.def)}</span><ul class="plain">${vals}</ul></div></div>`;
    }
    if (r.k === "b") return `<div class="ahit" onclick="go('#/c/${r.c.id}/bornier')"><div class="ak">Borne</div><div>${ctxOf(r.m, r.c)}<br><b>${esc(r.t.n)} · ${esc(r.t.label)}</b> — ${esc(r.t.desc)}</div></div>`;
    return `<div class="ahit" onclick="go('#/c/${r.c.id}/codes/${esc(encodeURIComponent(r.x.code).replace(/'/g, "%27"))}')"><div class="ak">Code</div><div>${ctxOf(r.m, r.c)}<br><b>${esc(r.x.code)} · ${esc(r.x.titre)}</b>${r.x.action ? `<br><span class="p">${esc(r.x.action)}</span>` : ""}</div></div>`;
  }
  const apprHtml = id => { const b = findBoard(id); return b && b.c.apprentissage ? `<div class="ahit" onclick="go('#/c/${id}/appr')"><div class="ak">Procédure</div><div>${ctxOf(b.m, b.c)}<br><b>Apprentissage / réglage de la course</b> — voir les étapes</div></div>` : ""; };

  window.askAnswer = function (q) {
    const { P, pool, hits } = collect(q);
    const { brands, topic } = P, boards = P.boards.length ? P.boards : P.amb;
    if (!topic.length && !boards.length) return "";
    if (!pool.length || (!boards.length && !brands.length && topic.length < 2)) return "";
    let h = "";
    if (topic.some(w => APPR.includes(w)) && boards.length) boards.forEach(id => { h += apprHtml(id); });
    h += hits.slice(0, 8).map(hitHtml).join("");
    if (!h) return "";
    return `<h2>Résultats pour votre question</h2><div class="ask">${h}<p class="note">Recherche par mots-clés dans les fiches (pas une réponse rédigée). Touchez un résultat pour ouvrir la fiche, et vérifiez avec la notice en cas de doute.</p><button class="mini" onclick="go('#/ask/${esc(encodeURIComponent(q).replace(/'/g, "%27"))}')">Affiner avec l'assistant ›</button></div>`;
  };

  /* ---------- Assistant (#/ask) : la même recherche, guidée par des questions de précision. Sans IA, hors ligne. ---------- */
  const st = { get(k, d) { try { const v = localStorage.getItem(k); return v === null ? d : JSON.parse(v); } catch (e) { return d; } }, set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} } };
  const EX = ["le portail s'ouvre mais ne se referme pas", "comment régler la fermeture automatique sur B70", "où brancher les photocellules ZBX7N", "le clignotant reste allumé"];
  const INTENT = [
    ["p", /\b(regl\w*|modifi\w*|chang\w*|augment\w*|diminu\w*|activ\w*|desactiv\w*|parametr\w*|programm\w*|temps|duree|vitesse)\b/],
    ["b", /\b(branch\w*|cabl\w*|raccord\w*|born\w*|connect\w*|fil|fils)\b/],
    ["c", /\b(code|erreur|err|affiche\w*|signifi\w*|clignot\w*|voyant|led|alarme|defaut)\b/],
    ["s", /\b(ne|pas|plus|panne|bloqu\w*|arret\w*|refuse|reste|rien|impossible|hs)\b/]
  ];
  const KINDS = { s: "Une panne", p: "Un réglage", b: "Un branchement", c: "Un code ou un voyant" };
  let etat = { q: "", carte: "", genre: "", marque: "" };
  window.askSet = (k, v) => { etat[k] = etat[k] === v ? "" : v; viewAsk(etat.q, true); };
  window.viewAsk = function (q, garde) {
    q = (q || "").trim();
    setHead("Assistant", true);
    if (!garde || etat.q !== q) etat = { q, carte: "", genre: "", marque: "" };
    const enc = x => esc(encodeURIComponent(x).replace(/'/g, "%27"));
    let h = `<p class="note"><b>Assistant de recherche.</b> Décrivez la panne ou posez votre question : l'assistant cherche dans les fiches et vous aide à préciser. Il fonctionne sans réseau et sans IA : il ne rédige pas de réponse, il vous amène au bon endroit de la bonne fiche.</p>
      <form class="askf" onsubmit="event.preventDefault();const v=document.getElementById('askq').value.trim();if(v)go('#/ask/'+encodeURIComponent(v));"><textarea id="askq" rows="2" placeholder="ex. le portail s'ouvre mais ne se referme pas" aria-label="Votre question">${esc(q)}</textarea><button class="btn" type="submit">Chercher</button></form>`;
    if (!q) {
      const hist = st.get("ask-hist", []);
      h += `<h2>Exemples</h2><div class="askc">${EX.map(x => `<button class="mini" onclick="go('#/ask/${enc(x)}')">${esc(x)}</button>`).join("")}</div>` +
        (hist.length ? `<h2>Vos dernières questions</h2><div class="askc">${hist.map(x => `<button class="mini" onclick="go('#/ask/${enc(x)}')">${esc(x)}</button>`).join("")}</div>` : "");
      app.innerHTML = h; return;
    }
    const hist = st.get("ask-hist", []).filter(x => x !== q); hist.unshift(q); st.set("ask-hist", hist.slice(0, 6));
    const col = collect(q, etat.carte), P = col.P, hits = col.hits.filter(r => !etat.marque || etat.carte || r.m.id === etat.marque);
    let sy = []; try { sy = window.symptList ? symptList(q, 40) : []; } catch (e) {}
    const cibles = P.boards.length ? P.boards : P.amb;
    const filtreMarque = r => etat.carte ? r.c.id === etat.carte : (!cibles.length || cibles.includes(r.c.id)) && (!P.brands.length || P.brands.includes(r.m.id));
    sy = sy.filter(filtreMarque).filter(r => !etat.marque || etat.carte || r.m.id === etat.marque);
    /* ce que l'assistant a compris */
    const compris = [];
    P.brands.forEach(id => { const m = MARQUES.find(x => x.id === id); if (m) compris.push("marque " + m.nom); });
    P.boards.forEach(id => { const b = findBoard(id); if (b) compris.push("carte " + b.c.nom); });
    if (P.amb.length) compris.push(P.amb.length + " cartes de cette famille");
    if (P.topic.length) compris.push("mots : " + P.topic.join(", "));
    h += `<p class="hotn">J'ai compris : ${compris.length ? esc(compris.join(" · ")) : "aucun mot utile, reformulez avec le modèle de la carte ou un mot précis"}.</p>`;
    const par = { s: sy.map(r => ({ k: "s", m: r.m, c: r.c, x: r.x })), p: hits.filter(r => r.k === "p"), b: hits.filter(r => r.k === "b"), c: hits.filter(r => r.k === "c") };
    const total = par.s.length + par.p.length + par.b.length + par.c.length;
    if (!total) {
      h += `<div class="empty">Rien trouvé dans les fiches pour cette phrase.<br>Essayez avec le modèle de la carte (ex. <b>ZBX7N</b>), un mot précis (ex. <b>encodeur</b>) ou le code affiché.</div>` +
        (window.viewDiag ? `<button class="dbtn" onclick="go('#/d')">Diagnostic guidé : trouver la panne en quelques questions</button>` : "");
      app.innerHTML = h; return;
    }
    /* question 1 : quelle carte ? (seulement si la phrase n'en nomme pas) */
    if (!P.boards.length) {
      const sc = new Map();
      [...par.s, ...hits].forEach((r, i) => { const o = sc.get(r.c.id) || { m: r.m, c: r.c, n: 0 }; o.n++; sc.set(r.c.id, o); });
      const l = [...sc.values()].sort((a, b) => b.n - a.n);
      if (etat.carte) { const b = findBoard(etat.carte); h += `<h2>Carte choisie</h2><div class="askc"><button class="mini on" onclick="askSet('carte','${esc(etat.carte)}')">${b ? esc(b.m.nom + " " + b.c.nom) : ""} ✕</button></div>`; }
      else if (etat.marque || (l.length > 10 && !P.brands.length)) { /* beaucoup de cartes : la marque d'abord */
        if (etat.marque) { const m = MARQUES.find(x => x.id === etat.marque); h += `<h2>Marque choisie</h2><div class="askc"><button class="mini on" onclick="askSet('marque','${esc(etat.marque)}')">${m ? esc(m.nom) : ""} ✕</button></div>` + (l.length > 1 ? `<h2>Sur quelle carte ?</h2><div class="askc">${l.slice(0, 12).map(o => `<button class="mini" onclick="askSet('carte','${esc(o.c.id)}')">${esc(o.c.nom)} <small>${o.n}</small></button>`).join("")}</div>` : ""); }
        else { const pm = new Map(); l.forEach(o => { const x = pm.get(o.m.id) || { m: o.m, n: 0 }; x.n += o.n; pm.set(o.m.id, x); });
          h += `<h2>Quelle marque ?</h2><div class="askc">${[...pm.values()].sort((a, b) => (b.m.id === "roger") - (a.m.id === "roger") || b.n - a.n).map(x => `<button class="mini" onclick="askSet('marque','${esc(x.m.id)}')">${esc(x.m.nom)} <small>${x.n}</small></button>`).join("")}</div>`; }
      }
      else if (l.length > 1) h += `<h2>Sur quelle carte ?</h2><div class="askc">${l.slice(0, 10).map(o => `<button class="mini" onclick="askSet('carte','${esc(o.c.id)}')">${esc(o.m.nom + " " + o.c.nom)} <small>${o.n}</small></button>`).join("")}</div>${l.length > 10 ? `<p class="hotn">${l.length} cartes ont des résultats : ajoutez le modèle dans votre phrase pour aller plus vite.</p>` : ""}`;
    }
    /* question 2 : que cherchez-vous ? */
    const dispo = Object.keys(KINDS).filter(k => par[k].length);
    const nq = norm(q), devine = (INTENT.find(([k, re]) => re.test(nq) && par[k].length) || [])[0] || "";
    if (dispo.length > 1) h += `<h2>Que cherchez-vous ?</h2><div class="askc">${dispo.map(k => `<button class="mini${etat.genre === k ? " on" : ""}" onclick="askSet('genre','${k}')">${KINDS[k]} <small>${par[k].length}</small></button>`).join("")}</div>`;
    const ordre = etat.genre ? [etat.genre] : [devine, ...dispo.filter(k => k !== devine)].filter(Boolean);
    const TIT = { s: "Pannes qui ressemblent", p: "Réglages (paramètres)", b: "Branchements (bornes)", c: "Codes et voyants" };
    const cap = etat.genre ? 30 : 5;
    ordre.forEach(k => {
      const l = par[k]; if (!l.length) return;
      h += `<h2>${TIT[k]} <small>${l.length}</small></h2>` + (k === "s" ? `<p class="hotn">Entrées des notices proches de votre phrase, de la plus proche à la moins proche. Ce n'est pas un diagnostic.</p>` : "") +
        `<div class="ask">` + (k === "p" && P.topic.some(w => APPR.includes(w)) ? [...new Set([etat.carte, ...P.boards].filter(Boolean))].map(apprHtml).join("") : "") +
        l.slice(0, cap).map(r => k === "s" ? hitHtml({ k: "c", m: r.m, c: r.c, x: r.x }) : hitHtml(r)).join("") + `</div>` +
        (l.length > cap ? `<button class="mini" onclick="askSet('genre','${k}')">Voir les ${l.length} résultats ›</button>` : "");
    });
    h += `<p class="note">Résultats repris des fiches de l'appli. Touchez un résultat pour ouvrir la fiche ; en cas de doute, la notice du fabricant fait foi.</p>` +
      (window.viewDiag ? `<button class="dbtn" onclick="go('#/d')">Diagnostic guidé : trouver la panne en quelques questions</button>` : "");
    app.innerHTML = h;
  };
})();
