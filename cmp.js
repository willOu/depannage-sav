/* Comparateur de borniers : deux cartes côte à côte, bornes rangées par fonction.
   Le rapprochement se fait uniquement à partir des libellés et descriptions des fiches (rien n'est ajouté) :
   c'est une aide au recâblage, à vérifier sur les notices (type de contact NO / NF, tensions, puissances). */
(function () {
  const norm = s => String(s || "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9+~]+/g, " ").trim();
  /* fonctions, de la plus précise à la plus générale : la première qui correspond l'emporte */
  const F = [
    ["terre", "Terre", /\bterre\b|\bpe\b|⏚/],
    ["fdc", "Fins de course", /fin(s)? de course|\bfdc|\bfca\b|\bfcc\b|\bswo|\bswc|\bfsw (op|cl)\b|micro interrupteur|\bsec ?[12]\b|ref swe|capteur (barriere|au dela)/],
    ["enc", "Encodeur", /encod/],
    ["test", "Test des sécurités / alimentation TX", /test|tx ?fsw|autotest|\bts\b|24 ?v ?safe|vsafe|24 v securite/],
    ["barr", "Barrière : lisse, boucles, verrouillage", /lisse|degond|boucle|reposoir|ventouse|palpeur bas/],
    ["opt", "Options / relais et entrées auxiliaires", /option|\bopt ?\d|contact sec( programmable)?$|relais multifonction|\brel ?\d|\baux\b|\baux ?\d\b|auxiliaire/],
    ["ctrl", "Contrôle d'accès / sélecteurs / capteurs", /clavier|transpondeur|lecteur|selecteur|bouton poussoir|capteur (interieur|exterieur)? ?de presence|\bcapteurs?\b|controle d acces|entree code/],
    ["moteur", "Moteur(s) / frein", /\bmoteur|\bmot ?[12]\b|\bm[12]\b|\bcom moteur|\bouv moteur|\bferm moteur|frein|contacteur/],
    ["cli", "Clignotant / feu", /clignot|\bfeu|\blamp\b|\blam\b|\blampe\b(?! cycle| temoin)|\bw ?e1\b|flash/],
    ["ecl", "Éclairage / lampe cycle", /courtoisie|eclairage|lumiere|lampe cycle|\bcor\b|\bminut|\becl\b/],
    ["voy", "Voyant / témoin / report d'état", /voyant|temoin|\bw ?l\b|report|\bsca\b|warning light/],
    ["serr", "Électroserrure / déverrouillage", /serrure|\block\b|\bes\b|verrouillage/],
    ["barre", "Barres palpeuses / bords sensibles", /palpeuse|bords? (sensible|mobile)|\bcos ?\d?\b|\bcost[a]?\b|\bedge\b|\bsh\b|\bsb\b|tranche de securite/],
    ["photo", "Photocellules / sécurités", /photo(?!volta)|cellule|\bft ?\d?\b|\bfot|\bcx\b|\bcy\b|\bcz\b|\bc[12]\b|\bsafe ?\d?\b|\bfault|securit|reouverture|\bsf ?\d?\b|\bso ?\d?\b/],
    ["stop", "Stop / arrêt d'urgence", /\bstop\b|arret/],
    ["pieton", "Ouverture partielle / piéton", /partiel|pieton|\bped\b|\bouv ?p\b|\bouvp\b|\bap\b/],
    ["ouv", "Ouverture", /\bouv|\bouvre\b|ouverture|\bopen\b|\bop\b/],
    ["ferm", "Fermeture", /\bferm|\bferme\b|\bclose\b|\bcl\b|\bch\b/],
    ["pap", "Pas à pas / start / commandes", /pas a pas|\bstart|\bst\b|\bpp\b|ouvre ferme|\bcommandes?\b|\bic ?\d?\b|\bing ?\d\b/],
    ["ant", "Antenne", /antenne|\bant\b/],
    ["radio", "Récepteur radio / 2e canal", /recepteur|radio|2e canal|canal/],
    ["batt", "Batteries", /batter/],
    ["secteur", "Alimentation secteur", /secteur|\b2[23]0\b|\b400\b|\bl ?n\b|\bl1|phase|neutre|reseau|transfo|alimentation generale|alimentation de la carte|mains/],
    ["bus", "Bus / interfaces / modules", /bus|rs485|\badi\b|interface|b74|bconnect|oview|usb|module|carte|modbus|sd card|net (exp|node)|memory roll|\br[78]00\b|\brse\b|\bcrp\b/],
    ["acc", "Alimentation des accessoires", /accessoire|\+ ?24|24 ?v|12 ?v|sortie.*v|vcc|vac|vdc|alim/],
    ["com", "Communs / négatif", /\bcom\b|commun|negatif|\b0 ?v\b|\bgnd\b|−|-$/]
  ];
  const fonction = b => {
    const l = norm(b.label), n = norm(b.n), d = norm(b.desc);
    for (const f of F) if (f[2].test(l)) return f[0];
    for (const f of F) if (f[2].test(n)) return f[0];
    for (const f of F) if (f[2].test(d)) return f[0];
    return "autre";
  };
  const bornes = c => ((c.bornier && c.bornier.groupes) || []).flatMap(g => g.bornes.map(b => ({ ...b, g: g.nom, f: fonction(b) })));
  const find = id => (typeof BOARDS !== "undefined" ? BOARDS : []).find(x => x.c.id === id);

  function selectHtml(id, sel, autre) {
    const byM = {};
    BOARDS.forEach(({ m, c }) => { (byM[m.nom] = byM[m.nom] || []).push(c); });
    return `<select id="${id}" class="cmpsel"><option value="">— choisir une carte —</option>` + Object.keys(byM).map(mn => `<optgroup label="${esc(mn)}">` +
      byM[mn].map(c => `<option value="${esc(c.id)}"${c.id === sel ? " selected" : ""}${c.id === autre ? " disabled" : ""}>${esc(c.nom)}</option>`).join("") + `</optgroup>`).join("") + `</select>`;
  }
  const cell = list => list.length ? list.map(b => `<div class="cb" style="--tc:var(--t-${esc(b.t)})"><span class="cn">${nw(b.n)}</span><b>${esc(b.label)}</b><small>${esc(b.desc)}</small></div>`).join("") : `<div class="cb vide">—</div>`;

  window.viewCmp = function (a, b) {
    setHead("Comparateur de borniers", true);
    const A = find(a), B = find(b);
    let h = `<p class="note">Remplacement d'une carte par une autre : les bornes des deux cartes sont rangées par fonction, à partir des libellés des notices. <b>Aide indicative</b> : vérifiez toujours sur les deux notices le type de contact (NO / NF), les tensions et les puissances.</p>
      <div class="cmpp"><label>Carte en place ${selectHtml("ca", a, b)}</label><label>Nouvelle carte ${selectHtml("cb", b, a)}</label></div>`;
    if (A && B) {
      const xa = bornes(A.c), xb = bornes(B.c);
      h += `<div class="cmph"><div><span class="badge" style="--c:${A.m.couleur}">${esc(A.m.nom)}</span> ${esc(A.c.nom)}</div><button class="mini" onclick="go('#/cmp/${esc(b)}/${esc(a)}')" aria-label="Inverser les deux cartes">⇄</button><div><span class="badge" style="--c:${B.m.couleur}">${esc(B.m.nom)}</span> ${esc(B.c.nom)}</div></div>`;
      const seule = [];
      const ORDRE = ["secteur", "terre", "transfo", "moteur", "fdc", "enc", "batt", "acc", "com", "test", "stop", "pap", "ouv", "ferm", "pieton", "photo", "barre", "cli", "ecl", "voy", "serr", "ant", "radio", "ctrl", "barr", "opt", "bus"];
      ORDRE.map(k => F.find(f => f[0] === k)).filter(Boolean).concat([["autre", "Autres bornes (fonction non reconnue)"]]).forEach(([k, titre]) => {
        const la = xa.filter(x => x.f === k), lb = xb.filter(x => x.f === k);
        if (!la.length && !lb.length) return;
        const row = `<div class="cmpr${k === "autre" ? " autre" : ""}"><h3>${esc(titre)}${(!la.length || !lb.length) && k !== "autre" ? ` <span class="warn">${la.length ? "rien d'équivalent repéré sur la nouvelle carte" : "seulement sur la nouvelle carte"}</span>` : ""}</h3><div class="cmpc">${cell(la)}</div><div class="cmpc">${cell(lb)}</div></div>`;
        if (k !== "autre" && (!la.length || !lb.length)) seule.push(row); else h += row;
      });
      if (seule.length) h += `<h2>Sans correspondance</h2>` + seule.join("");
      h += `<p class="foot">Sources : ${esc(A.c.source)} · ${esc(B.c.source)}.<br>En cas de doute, la notice livrée avec le matériel fait foi.</p>`;
    } else h += `<p class="empty">Choisissez les deux cartes.</p>`;
    app.innerHTML = h;
    const upd = () => { const x = document.getElementById("ca").value, y = document.getElementById("cb").value; go("#/cmp/" + encodeURIComponent(x || "-") + (y ? "/" + encodeURIComponent(y) : "")); };
    document.getElementById("ca").onchange = upd; document.getElementById("cb").onchange = upd;
  };
  window.cmpFonction = fonction; /* pour les tests */
})();
