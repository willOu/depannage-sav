/* Rubrique « Accessoires » : gyrophares, radio, photocellules, claviers…
   Une fiche = { id, nom, marque, couleur, categorie, modeles, source, resume, specs:[[label, valeur]],
   raccordement:[{n, label, desc}], installation:[étapes], notes:[…], codes?:[[code, signification]] }
   Les onglets vides ne sont pas affichés. */
(function () {
  const ACCESSOIRES = [
    {
      id: "v2-lumos-m",
      nom: "LUMOS-M",
      marque: "AFCA",
      alias: "ABLE V2",
      couleur: "#2a7a4b",
      categorie: "Feu clignotant",
      modeles: "Feu clignotant à LED multi-tension, antenne intégrée — 24 à 300 V DC, 24 à 230 V AC 50/60 Hz",
      source: "Notice V2 S.p.A. IL 438 (édition 20/09/2016), pages FR — V2 est rangé avec AFCA / ABLE",
      resume: "Feu de signalisation à LED pour portails, portes de garage et barrières levantes. Intermittence automatique : aucun réglage. Installation uniquement en position verticale.",
      specs: [
        ["Alimentation", "24 à 300 V DC · 24 à 230 V AC 50/60 Hz"],
        ["Consommation", "1,15 W (230 V, 5 mA) · 1,15 W (115 V, 10 mA) · 0,7 W (24 V AC, 30 mA) · 0,9 W (30 V DC, 30 mA)"],
        ["Intermittence", "Automatique"],
        ["Classe d'isolation", "II"],
        ["Protection", "IP54"],
        ["Température de fonctionnement", "−20 à +60 °C"],
        ["Dimensions", "136 × 82 × 35 mm (fixation sur surface horizontale, fig. 1) · 167 × 82 × 60 mm (sur paroi verticale, fig. 2)"],
        ["Câble d'alimentation", "Adapté à l'extérieur, section 2 × 0,5 mm² minimum, 2 × 1,5 mm² maximum"],
        ["Câble d'antenne", "RG174"]
      ],
      raccordement: [
        { n: "VERT", label: "Sortie clignotant de l'armoire", desc: "Raccorder la sortie clignotant de l'armoire de commande sur la borne VERT. La notice ne cite pas la seconde borne d'alimentation : suivre la sérigraphie du bornier." },
        { n: "BLEU", label: "Antenne intégrée", desc: "Raccorder l'antenne intégrée sur la borne BLEU, en respectant la sérigraphie. Câble RG174." }
      ],
      installation: [
        "Choisir l'emplacement : surface plane, solide, sans eau stagnante, avec une visibilité totale et lointaine du feu. Position verticale uniquement.",
        "Prévoir le passage des câbles d'alimentation.",
        "Ouvrir le boîtier. Utiliser la base A pour tracer les trous si le feu est posé sur un plan horizontal (fig. 1), ou la pièce B pour une paroi verticale (fig. 2).",
        "Fixer la base et raccorder au bornier (voir l'onglet Raccordement).",
        "Raccorder l'antenne intégrée sur la borne BLEU.",
        "Sceller les trous des chevilles avec du silicone pour éviter les infiltrations d'eau.",
        "Refermer le boîtier avec les vis prévues."
      ],
      notes: [
        "Avant de raccorder, couper la tension de l'armoire et vérifier que la tension du feu (24 à 300 V DC / 24 à 230 V AC) est compatible avec celle de la sortie clignotant.",
        "Installation par un personnel qualifié, selon les normes en vigueur.",
        "Pas de menu ni de code d'erreur sur ce produit : intermittence automatique, sans réglage.",
        "Compatibilité : la notice AFCA Startéco 4 montre des feux LUMOS 24 V sur les sorties feux orange CL1 / CL2 (15 W maxi par feu, feux sans clignoteur propre)."
      ]
    }
  ];
  window.ACCESSOIRES = ACCESSOIRES;
  const TABS = [["info", "Infos"], ["racc", "Raccord."], ["inst", "Installation"], ["notes", "Notes"]];
  const has = (a, t) => t === "info" ? true : t === "racc" ? a.raccordement && a.raccordement.length : t === "inst" ? a.installation && a.installation.length : (a.notes && a.notes.length) || (a.codes && a.codes.length);
  const rowAcc = a => `<button class="row" onclick="go('#/a/${a.id}')"><span class="badge" style="--c:${a.couleur}">${esc(a.marque)}</span><b>${esc(a.nom)}</b> <span class="p">${esc(a.categorie)}</span><small>${esc(a.modeles)}</small></button>`;

  window.accList = function (q) {
    const words = norm(q || "").split(" ").filter(Boolean);
    return ACCESSOIRES.filter(a => { const t = norm(`${a.marque} ${a.alias || ""} ${a.nom} ${a.categorie} ${a.modeles} ${a.resume} gyrophare clignotant feu`); return words.every(w => t.includes(w)); }).map(rowAcc).join("");
  };

  window.viewAccList = function () {
    setHead("Accessoires", true);
    app.innerHTML = `<p class="note"><b>Accessoires</b> : gyrophares, radio, photocellules, claviers… Rubrique en construction : une fiche pour l'instant.</p><h2>Fiches (${ACCESSOIRES.length})</h2><div class="list">${ACCESSOIRES.map(rowAcc).join("")}</div>`;
  };

  window.viewAcc = function (id, tab) {
    const a = ACCESSOIRES.find(x => x.id === id); if (!a) return viewAccList();
    setHead(`${a.marque} ${a.nom}`, true);
    const tabs = TABS.filter(t => has(a, t[0])); tab = tabs.some(t => t[0] === tab) ? tab : "info";
    let h = `<p class="note">${esc(a.resume)}</p><div class="tabs" role="tablist">` + tabs.map(t => `<button role="tab" aria-selected="${t[0] === tab}" onclick="go('#/a/${a.id}/${t[0]}')">${t[1]}</button>`).join("") + `</div>`;
    if (tab === "info") h += `<div class="set">` + a.specs.map(s => `<div style="padding:11px 14px;border-top:1px solid var(--line)"><div style="font-size:12.5px;color:var(--muted);font-weight:600">${esc(s[0])}</div><div style="font-size:15.5px;margin-top:2px">${esc(s[1])}</div></div>`).join("") + `</div>`;
    if (tab === "racc") h += `<table>` + a.raccordement.map(r => `<tr><td>${esc(r.n)}</td><td><b>${esc(r.label)}</b><br>${esc(r.desc)}</td></tr>`).join("") + `</table>`;
    if (tab === "inst") h += `<div class="note"><ol class="plain" style="padding-left:20px;margin:0">${a.installation.map(s => `<li style="margin:6px 0">${esc(s)}</li>`).join("")}</ol></div>`;
    if (tab === "notes") h += (a.codes ? `<h2>Codes</h2><table>` + a.codes.map(c => `<tr><td>${esc(c[0])}</td><td>${esc(c[1])}</td></tr>`).join("") + `</table>` : "") + (a.notes ? `<div class="note"><ul class="plain">${a.notes.map(n => `<li>${esc(n)}</li>`).join("")}</ul></div>` : "");
    h += `<p class="foot">Source : ${esc(a.source)}.<br>En cas de doute, la notice livrée avec le matériel fait foi.</p>`;
    app.innerHTML = h;
  };
})();
