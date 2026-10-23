/* Recherche par symptôme : « le portail ne s'ouvre pas », « la LED clignote »…
   Recherche par mots-clés (racines + synonymes) dans les codes, voyants et symptômes de toutes les fiches.
   Ce n'est pas un diagnostic : elle propose les entrées des notices qui ressemblent à la phrase. */
(function () {
  const STOP = new Set(("le la les l un une des du de d au aux et ou mais donc car ni n que qui quoi ce cet cette ces se sa son ses mon ma mes il elle on y en a est sont ete etre avoir " +
    "fait fais faire veut veux peut peux dois doit ca cela ceci quand lorsque si alors apres avant pendant sur sous dans avec sans pour par tout tous toute toutes tres bien comme meme encore toujours " +
    "j je tu nous vous ils elles lui leur mon quel quelle probleme panne souci cas").split(/\s+/));
  const norm = s => String(s).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]+/g, " ").trim();
  /* racines : on ramène les formes courantes à une même racine */
  const ROOTS = [
    [/^ouv\w*$/, "ouv"], [/^ferm\w*$/, "ferm"], [/^(boug|mouv|bouge)\w*$/, "boug"], [/^(march|demarr|part)\w*$/, "march"],
    [/^clignot\w*$/, "clignot"], [/^allum\w*$/, "allum"], [/^(etein|eteig)\w*$/, "etein"], [/^(led|voyant|temoin|lampe|diode)\w*$/, "led"],
    [/^(bloqu|coinc)\w*$/, "bloqu"], [/^(arret|stop)\w*$/, "arret"], [/^(photocell|cellule)\w*$/, "photo"], [/^(obstacl)\w*$/, "obstacl"],
    [/^(inver|invers|contrair)\w*$/, "invers"], [/^(telecomm|emetteur|radio)\w*$/, "radio"], [/^(alim|secteur|courant|tension)\w*$/, "alim"],
    [/^(batter|accu)\w*$/, "batt"], [/^(fusib)\w*$/, "fusib"], [/^(erreur|defaut|alarme|err)\w*$/, "erreur"], [/^(ralent|lent)\w*$/, "ralent"],
    [/^(fin|butee)$/, "fdc"], [/^(fdc|limit)\w*$/, "fdc"], [/^(encod)\w*$/, "encod"], [/^(moteur|motoreduct)\w*$/, "moteur"],
    [/^(pieton)\w*$/, "pieton"], [/^(bip|sonn|buzz)\w*$/, "bip"], [/^(surchauf|chaud|therm)\w*$/, "therm"], [/^(affich|ecran)\w*$/, "affich"]
  ];
  const stem = w => { for (const [re, r] of ROOTS) if (re.test(w)) return r; return w.length > 5 ? w.slice(0, 5) : w; };
  const NEG = new Set(["ne", "pas", "plus", "jamais", "rien", "aucun", "aucune", "sans", "impossible", "hs"]);
  const toks = s => norm(s).split(" ").filter(w => w && !STOP.has(w) && (w.length > 1)).map(w => NEG.has(w) ? "neg" : stem(w));
  const GENERIC = new Set(["neg", "porta", "autom", "carte", "armoi", "centr", "platin", "moteur"]);
  const TYPEW = { erreur: 1.4, symptome: 1.5, led: 1.1, afficheur: 1, flash: 1.1, diag: .8, test: .5 };

  let IDX = null;
  function build() {
    if (IDX) return IDX;
    const docs = [], df = new Map();
    BOARDS.forEach(({ m, c }) => (c.codes || []).forEach(x => {
      const tt = new Set(toks(`${x.code} ${x.titre}`)), ta = new Set(toks(x.action || ""));
      const all = new Set([...tt, ...ta]);
      all.forEach(w => df.set(w, (df.get(w) || 0) + 1));
      docs.push({ m, c, x, tt, ta });
    }));
    IDX = { docs, df, n: docs.length };
    return IDX;
  }

  window.symptList = function (q, max) {
    const qt = [...new Set(toks(q))];
    if (qt.length < 2) return [];
    const { docs, df, n } = build();
    const idf = w => Math.log(1 + n / (1 + (df.get(w) || 0)));
    const need = qt.length <= 2 ? qt.length : Math.ceil(qt.length * .6);
    const out = [];
    docs.forEach(d => {
      let sc = 0, hit = 0, specific = false;
      qt.forEach(w => {
        const inT = d.tt.has(w), inA = d.ta.has(w);
        if (inT || inA) {
          hit++; sc += (w === "neg" ? .6 : idf(w)) * (inT ? 3 : 1);
          if (!GENERIC.has(w)) specific = true;
        }
      });
      if (hit >= need && specific) out.push({ m: d.m, c: d.c, x: d.x, score: sc * (TYPEW[d.x.type] || 1) * (hit / qt.length) / (1 + .04 * d.tt.size) });
    });
    out.sort((a, b) => b.score - a.score);
    return out.slice(0, max || 8);
  };
})();
