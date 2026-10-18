/* Recherche en langage courant : trouve le paramètre / la borne / le code qui répond à une phrase.
   Ce n'est pas une réponse rédigée : c'est une recherche par mots-clés (avec synonymes) dans les fiches. */
(function () {
  const STOP = new Set(("comment pour sur sous dans avec sans que qui quoi quel quelle quels quelles est sont etre avoir a au aux de du des un une le la les l d s et ou ou ni donc car en y il elle on ce cet cette ces se sa son ses mon ma mes ton ta tes " +
    "faire fait faut falloir peut peux puis pouvoir vouloir veux voudrais dois doit devoir mettre met mis activer active desactiver desactive regler regle reglage modifier modifie changer change augmenter diminuer passer passe parametrer " +
    "ou oui non pas plus moins tres bien alors si quand lorsque ca cela ceci y a-t-il quelle quel faut-il où comment-faire pourquoi ne n bornier borne bornes fiche carte parametre parametres code codes notice").split(/\s+/));
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
    const raw = norm(q).split(" ").filter(Boolean);
    const brands = [], boards = [], used = new Set();
    // marques
    raw.forEach((w, i) => MARQUES.forEach(m => { if (norm(m.nom) === w || m.id === w) { brands.push(m.id); used.add(i); } }));
    // cartes : un mot, ou deux mots accolés (zbx 241)
    const tokCount = {};
    const tokensOf = c => { const k = new Set(); norm(c.nom).split(" ").forEach(t => t.length >= 3 && k.add(t)); norm(c.modeles || "").split(" ").forEach(t => { if (t.length >= 3 && /\d/.test(t) && /[a-z]/.test(t)) k.add(t); }); return k; };
    BOARDS.forEach(({ c }) => tokensOf(c).forEach(t => tokCount[t] = (tokCount[t] || 0) + 1));
    BOARDS.forEach(({ m, c }) => {
      const keys = new Set([compact(c.nom)]);
      tokensOf(c).forEach(t => { if (tokCount[t] === 1) keys.add(t); });
      raw.forEach((w, i) => {
        if (w.length >= 3 && keys.has(w)) { boards.push(c.id); used.add(i); }
        if (i + 1 < raw.length && keys.has(w + raw[i + 1])) { boards.push(c.id); used.add(i); used.add(i + 1); }
      });
    });
    const topic = raw.filter((w, i) => !used.has(i) && !STOP.has(w) && w.length > 1 && !/^\d+$/.test(w) && w !== "deux").map(sing);
    return { brands, boards: [...new Set(boards)], topic };
  }
  const alts = w => [w].concat(SYN[w] || [], SYN[w + "s"] || []);
  const has = (txt, list) => list.some(a => txt.includes(a));
  function scoreText(tIn, tAll, topic) {
    let s = 0, n = 0;
    topic.forEach(w => { const a = alts(w); if (has(tIn, a)) { s += 3; n++; } else if (has(tAll, a)) { s += 1; n++; } });
    return { s, n };
  }

  window.askAnswer = function (q) {
    const { brands, boards, topic } = parse(q);
    if (!topic.length && !boards.length) return "";
    const pool = BOARDS.filter(({ m, c }) => (!boards.length || boards.includes(c.id)) && (!brands.length || brands.includes(m.id)));
    if (!pool.length || (!boards.length && !brands.length && topic.length < 2)) return "";
    const need = Math.max(1, Math.ceil(topic.length * 0.6));
    const hits = [];
    const ctxOf = (m, c) => `<span class="badge" style="--c:${m.couleur}">${esc(m.nom)}</span>${esc(c.nom)}`;
    pool.forEach(({ m, c }) => {
      if (topic.length) {
        (c.parametres ? c.parametres.groupes.flatMap(g => g.items) : []).forEach(x => {
          const tIn = norm(`${x.code} ${x.titre}`), tAll = norm(tIn + " " + x.valeurs.map(v => v.join(" ")).join(" ") + " " + (x.note || ""));
          const r = scoreText(tIn, tAll, topic);
          if (r.n >= need && r.s >= 3) hits.push({ k: "p", s: r.s + 0.5, m, c, x });
        });
        c.bornier.groupes.forEach(g => g.bornes.forEach(t => {
          const tIn = norm(`${t.n} ${t.label}`), tAll = norm(tIn + " " + t.desc);
          const r = scoreText(tIn, tAll, topic);
          if (r.n >= need && r.s >= 3) hits.push({ k: "b", s: r.s, m, c, t });
        }));
        c.codes.forEach(x => {
          const tIn = norm(`${x.code} ${x.titre}`), tAll = norm(tIn + " " + x.action);
          const r = scoreText(tIn, tAll, topic);
          if (r.n >= need && r.s >= 3) hits.push({ k: "c", s: r.s - 0.5, m, c, x });
        });
      }
    });
    hits.sort((a, b) => b.s - a.s);
    const top = hits.slice(0, 8);
    let h = "";
    const wantsAppr = topic.some(w => APPR.includes(w));
    if (wantsAppr && boards.length) boards.forEach(id => {
      const b = findBoard(id); if (b && b.c.apprentissage) h += `<div class="ahit" onclick="go('#/c/${id}/appr')"><div class="ak">Procédure</div><div>${ctxOf(b.m, b.c)}<br><b>Apprentissage / réglage de la course</b> — voir les étapes</div></div>`;
    });
    top.forEach(r => {
      if (r.k === "p") {
        const vals = r.x.valeurs.slice(0, 4).map(v => `<li><b>${esc(v[0])}</b> : ${esc(v[1])}</li>`).join("");
        h += `<div class="ahit" onclick="paramOpen=${esc(JSON.stringify(r.x.code))};go('#/c/${r.c.id}/param')"><div class="ak">Paramètre</div><div>${ctxOf(r.m, r.c)}<br><b>${esc(r.x.code)} · ${esc(r.x.titre)}</b> <span class="p">usine ${esc(r.x.def)}</span><ul class="plain">${vals}</ul></div></div>`;
      } else if (r.k === "b") {
        h += `<div class="ahit" onclick="go('#/c/${r.c.id}/bornier')"><div class="ak">Borne</div><div>${ctxOf(r.m, r.c)}<br><b>${esc(r.t.n)} · ${esc(r.t.label)}</b> — ${esc(r.t.desc)}</div></div>`;
      } else {
        h += `<div class="ahit" onclick="go('#/c/${r.c.id}/codes')"><div class="ak">Code</div><div>${ctxOf(r.m, r.c)}<br><b>${esc(r.x.code)} · ${esc(r.x.titre)}</b></div></div>`;
      }
    });
    if (!h) return "";
    return `<h2>Résultats pour votre question</h2><div class="ask">${h}<p class="note">Recherche par mots-clés dans les fiches (pas une réponse rédigée). Touchez un résultat pour ouvrir la fiche, et vérifiez avec la notice en cas de doute.</p></div>`;
  };
})();
