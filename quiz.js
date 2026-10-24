/* Quiz de formation (EN TEST) : questions tirées uniquement des fiches (codes et borniers).
   Les mauvaises réponses proposées sont d'autres codes ou bornes de la même carte : rien n'est inventé. */
(function () {
  const TYPES_CODE = ["afficheur", "erreur", "led", "flash", "diag"];
  const mel = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const uniq = (arr, k) => { const s = new Set(); return arr.filter(x => { const v = k(x).toLowerCase().trim(); if (!v || s.has(v)) return false; s.add(v); return true; }); };
  let Q = null; /* partie en cours */

  function questions(marque) {
    const out = [];
    BOARDS.filter(({ m }) => !marque || m.id === marque).forEach(({ m, c }) => {
      const carte = `${m.nom} ${c.nom}`;
      const codes = uniq(uniq((c.codes || []).filter(x => TYPES_CODE.includes(x.type) && x.code && x.titre && x.code.length <= 24 && x.titre.length <= 90), x => x.code), x => x.titre);
      if (codes.length >= 4) codes.forEach(x => {
        const autres = mel(codes.filter(y => y !== x)).slice(0, 3);
        out.push({ id: c.id, tab: "codes", carte, q: `Que signifie le code « ${x.code} » ?`, bonne: x.titre, choix: mel([x.titre, ...autres.map(y => y.titre)]), expl: x.action || "", src: c.source });
        out.push({ id: c.id, tab: "codes", carte, q: `Quel code correspond à « ${x.titre} » ?`, bonne: x.code, choix: mel([x.code, ...autres.map(y => y.code)]), expl: x.action || "", src: c.source, mono: true });
      });
      const bornes = uniq(uniq(((c.bornier && c.bornier.groupes) || []).flatMap(g => g.bornes).filter(b => b.n && b.label && b.n.length <= 30), b => b.n), b => b.label);
      if (bornes.length >= 4) bornes.forEach(b => {
        const autres = mel(bornes.filter(y => y !== b)).slice(0, 3);
        out.push({ id: c.id, tab: "bornier", carte, q: `Sur quelle(s) borne(s) se raccorde « ${b.label} » ?`, bonne: b.n, choix: mel([b.n, ...autres.map(y => y.n)]), expl: b.desc || "", src: c.source, mono: true });
      });
    });
    return out;
  }

  function accueil() {
    setHead("Quiz de formation", true);
    const ms = MARQUES.filter(m => questions(m.id).length >= 5);
    app.innerHTML = `<p class="note"><b>EN TEST.</b> Questions tirées des fiches de l'appli : codes erreur et borniers. Les mauvaises réponses proposées sont d'autres codes ou bornes de la même carte.</p>
      <h2>Choisir</h2><div class="list">
      <button class="row" onclick="quizGo('')"><b>Toutes les marques</b><br><span class="muted">10 questions au hasard</span></button>` +
      ms.map(m => `<button class="row" onclick="quizGo('${m.id}')"><span class="badge" style="--c:${m.couleur}">${esc(m.nom)}</span> <span class="muted">10 questions</span></button>`).join("") + `</div>`;
  }
  window.quizGo = function (marque) {
    const all = questions(marque);
    Q = { marque, list: mel(all).slice(0, 10), i: 0, ok: 0, rate: [], rep: null };
    go("#/quiz/jeu");
  };
  function jeu() {
    if (!Q || !Q.list.length) return go("#/quiz");
    setHead("Quiz de formation", true);
    if (Q.i >= Q.list.length) return fin();
    const x = Q.list[Q.i], r = Q.rep;
    app.innerHTML = `<div class="qzh"><span>Question ${Q.i + 1} / ${Q.list.length}</span><span>Score ${Q.ok}</span></div><div class="qzbar"><i style="width:${Q.i / Q.list.length * 100}%"></i></div>
      <p class="qzc">${esc(x.carte)}</p><div class="q">${esc(x.q)}</div><div class="qzo">` +
      x.choix.map((ch, k) => {
        const cls = r === null ? "" : ch === x.bonne ? " bon" : k === r ? " faux" : " off";
        return `<button class="row${cls}${x.mono ? " mono" : ""}" ${r === null ? `onclick="quizRep(${k})"` : "disabled"}>${esc(ch)}</button>`;
      }).join("") + `</div>` +
      (r === null ? "" : `<div class="note qzx"><b>${x.choix[r] === x.bonne ? "✓ Bonne réponse" : "✗ Réponse : " + esc(x.bonne)}</b>${x.expl ? `<br>${esc(x.expl)}` : ""}<br><small>Source : ${esc(x.src)}</small></div>
        <button class="dbtn" onclick="quizNext()">${Q.i + 1 < Q.list.length ? "Question suivante" : "Voir le résultat"}</button>`);
  }
  window.quizRep = k => { if (!Q || Q.rep !== null) return; Q.rep = k; const x = Q.list[Q.i]; if (x.choix[k] === x.bonne) Q.ok++; else Q.rate.push(x); jeu(); };
  window.quizNext = () => { if (!Q) return; Q.i++; Q.rep = null; jeu(); window.scrollTo(0, 0); };
  function fin() {
    const n = Q.list.length, pc = Math.round(Q.ok / n * 100);
    let best = 0; try { best = +localStorage.getItem("quiz-best") || 0; if (pc > best) localStorage.setItem("quiz-best", pc); } catch (e) {}
    app.innerHTML = `<div class="qzr"><div class="big">${Q.ok} / ${n}</div><div>${pc >= 80 ? "Excellent !" : pc >= 50 ? "Pas mal, encore un effort." : "À revoir : les fiches sont là pour ça."}</div>${best ? `<small>Meilleur score sur cet appareil : ${Math.max(best, pc)} %</small>` : ""}</div>` +
      (Q.rate.length ? `<h2>À revoir</h2><div class="list">` + Q.rate.map(x => `<button class="row" onclick="go('#/c/${x.id}/${x.tab}')"><b>${esc(x.carte)}</b><br><span class="muted">${esc(x.q)} → ${esc(x.bonne)}</span></button>`).join("") + `</div>` : "") +
      `<button class="dbtn" onclick="quizGo(Q_m())">Rejouer</button><button class="dbtn" onclick="go('#/quiz')">Changer de marque</button>`;
  }
  window.Q_m = () => (Q && Q.marque) || "";
  window.viewQuiz = sub => (sub === "jeu" ? jeu() : accueil());
})();
