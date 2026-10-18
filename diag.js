/* Diagnostic guidé « arbre de panne » — module de TEST, séparé du reste de l'appli.
   Pour le retirer : supprimer diag.js et les repères « DIAG » de index.html (ou revenir au commit 5861fe1). */
(function(){
const R = (titre, cause, actions, liens) => ({ r: { titre, cause, actions, liens: liens || [] } });
const Q = (q, o, aide) => ({ q, o, aide });
const FICHES = ["Ouvrir les fiches (marque / carte)", "#/"];
const CODES = ["Chercher le code dans l'appli", "#/"];

const DIAG = [
  { id: "ouvre", titre: "Le portail ne s'ouvre pas", sous: "Rien ne bouge quand on donne l'ordre",
    arbre: Q("La carte est-elle alimentée ? (LED, afficheur ou voyant allumé)", [
      ["Non, rien d'allumé", R("Pas d'alimentation de la carte", "La carte ne reçoit pas de tension.", [
        "Vérifier la présence du secteur (disjoncteur, sectionneur, différentiel).",
        "Contrôler le fusible de ligne, puis le fusible des accessoires : en chercher la cause avant de le remplacer.",
        "Sur les cartes à transformateur, mesurer le secondaire du transformateur.",
        "Sur batteries de secours (BN1) : voir si la LED du secteur et celle des batteries sont allumées."
      ], [["Bornier de la carte : onglet Bornier de sa fiche", "#/"]])],
      ["Oui, elle est allumée", Q("La carte signale-t-elle un code ? (clignotant qui compte, LED qui clignotent, afficheur avec E… ou C…)", [
        ["Oui, un code ou une LED anormale", R("Lire le code de la carte", "La carte indique elle-même sa panne.", [
          "Relever le code exact (nombre de clignotements, LED, affichage).",
          "Chercher ce code dans l'appli, ouvrir la carte et suivre « À faire »."
        ], [CODES, FICHES])],
        ["Non, rien de particulier", Q("Quand on appuie sur le bouton ou l'émetteur, la carte réagit-elle ? (LED d'entrée qui change, relais qui claque, clignotant)", [
          ["Non, aucune réaction", Q("La commande vient d'un bouton filaire ou d'un émetteur ?", [
            ["Bouton ou clé filaire", R("Commande filaire non reçue", "Le contact d'ouverture n'arrive pas à la carte.", [
              "Contrôler le contact NO entre le commun et la borne d'ouverture (continuité à l'appui).",
              "Tester en reliant provisoirement le commun et la borne d'ouverture : si le portail part, le défaut est sur le bouton ou le câble.",
              "Vérifier que la fonction de cette entrée est bien celle attendue (dip ou paramètre de la fiche)."
            ], [FICHES])],
            ["Émetteur radio", R("Commande radio non reçue", "L'émetteur n'est pas pris en compte.", [
              "Remplacer la pile, regarder si la LED de l'émetteur s'allume.",
              "Contrôler l'antenne et son câble, la carte radio bien enfichée, puis la mémorisation de l'émetteur (voir l'onglet Apprentissage de la fiche).",
              "Essayer un autre émetteur déjà mémorisé."
            ], [["Autre panne : émetteur sans effet", "#/d/radio"], FICHES])]
          ])],
          ["Oui, mais rien ne bouge", Q("Un contact de sécurité NF est-il ouvert ? (STOP, photocellules, bords sensibles, porte de déblocage)", [
            ["Oui, un contact est ouvert", R("Sécurité ouverte", "Une entrée de sécurité empêche la manœuvre.", [
              "Repérer l'entrée concernée : LED de l'entrée éteinte, code ou avertissement de la carte.",
              "Contrôler le dispositif (alignement des photocellules, bord sensible, bouton STOP, porte de déblocage fermée) et le câblage.",
              "Ne laisser aucun pont de contournement après l'essai. Si une sécurité n'est pas utilisée, suivre la fiche (dip ou paramètre à désactiver)."
            ], [FICHES])],
            ["Non, tout est fermé", Q("Y a-t-il de la tension sur les bornes du moteur pendant l'ordre d'ouverture ?", [
              ["Oui, tension présente", R("Moteur ou mécanique", "La carte commande mais le moteur ne tourne pas.", [
                "Vérifier que le portail n'est pas débrayé et qu'aucun point dur ne le bloque.",
                "Sur moteur 230 V : contrôler le condensateur. Sur moteur 24 V : contrôler les balais, l'encodeur et les fins de course.",
                "Contrôler le câblage moteur (bornes et connecteurs)."
              ], [FICHES])],
              ["Non, aucune tension", R("Sortie moteur de la carte", "La carte n'alimente pas le moteur.", [
                "Contrôler d'abord le fusible moteur et les fins de course (contact NF fermé, câblage).",
                "Vérifier que la carte n'est pas en attente (autre code ou fonction qui bloque le départ).",
                "Si tout est correct, la carte est probablement défectueuse : la remplacer."
              ], [FICHES])]
            ])]
          ])]
        ])]
      ])]
    ]) },
  { id: "ferme", titre: "Le portail ne se ferme pas", sous: "Ou ne se referme pas tout seul",
    arbre: Q("Se ferme-t-il quand on le commande (bouton ou émetteur) ?", [
      ["Non, il ne se ferme pas", Q("Une photocellule ou une sécurité est-elle active (LED de l'entrée, clignotant qui compte, code) ?", [
        ["Oui", R("Sécurité de fermeture", "Une photocellule ou un bord sensible bloque la fermeture.", [
          "Nettoyer et réaligner les photocellules, chercher un obstacle sur le passage.",
          "Contrôler le contact NF et le câblage de l'entrée concernée.",
          "Relever le code de la carte et le chercher dans l'appli."
        ], [CODES, FICHES])],
        ["Non", Q("Le portail est-il resté ouvert après des inversions ou un obstacle ?", [
          ["Oui", R("Blocage après obstacle", "Après plusieurs détections d'obstacle consécutives, certaines cartes laissent le portail ouvert sans fermeture automatique.", [
            "Donner une commande de fermeture avec l'émetteur ou le bouton après avoir supprimé l'obstacle.",
            "Chercher la cause : point dur, sensibilité d'obstacle réglée trop fine (voir la fiche)."
          ], [FICHES])],
          ["Non", R("Commande de fermeture non reçue", "L'ordre ne parvient pas à la carte.", [
            "Contrôler le contact de fermeture (bouton, clé) et son câblage, ou l'émetteur et sa mémorisation.",
            "Vérifier que la fonction de l'entrée est bien celle attendue (dip ou paramètre)."
          ], [FICHES])]
        ])]
      ])],
      ["Oui, mais pas tout seul", R("Fermeture automatique", "La fermeture automatique est désactivée, trop longue ou annulée.", [
        "Vérifier que la fermeture automatique est activée (dip ou paramètre de la fiche) et le temps de pause.",
        "Elle est annulée après un STOP total ou une coupure de courant : redonner une commande.",
        "Si une sécurité reste active (photocellule masquée), la carte peut ne pas refermer."
      ], [FICHES])]
    ]) },
  { id: "arret", titre: "Il s'arrête ou repart en arrière", sous: "En cours de manœuvre",
    arbre: Q("Où cela arrive-t-il ?", [
      ["Toujours au même endroit", R("Point dur mécanique", "Le moteur rencontre une résistance à cet endroit.", [
        "Chercher un frottement : rail, roues, crémaillère, gonds, jeu ou sol qui a bougé.",
        "Contrôler que rien ne gêne la course (végétation, gravillons, butée).",
        "Ne pas augmenter la force avant d'avoir supprimé le point dur."
      ], [FICHES])],
      ["N'importe où dans la course", Q("Un code ou une LED s'affiche-t-il après l'arrêt ?", [
        ["Oui", R("Lire le code", "La carte indique la cause (obstacle, force, sécurité).", [
          "Relever le code exact et le chercher dans l'appli.",
          "Si c'est un obstacle ou une force : voir la réponse « point dur » avant de toucher au réglage."
        ], [CODES, FICHES])],
        ["Non", R("Sensibilité d'obstacle trop fine", "La détection de force est réglée trop bas pour ce portail.", [
          "Vérifier d'abord la mécanique (rail, roues, gonds).",
          "Régler la sensibilité ou la force d'après la fiche (trimmer, paramètre ou menu).",
          "Sur moteur 24 V : contrôler l'encodeur et son câblage."
        ], [FICHES])]
      ])],
      ["En fin de course", R("Fins de course ou apprentissage", "La carte ne trouve pas sa fin de course correctement.", [
        "Contrôler le réglage des butées et le fonctionnement des fins de course (contact NF).",
        "Refaire l'apprentissage de la course (onglet Apprentissage de la fiche).",
        "Sur moteur à encodeur : contrôler l'encodeur et le câblage."
      ], [FICHES])]
    ]) },
  { id: "radio", titre: "L'émetteur ne commande pas", sous: "Télécommande, clavier ou transpondeur",
    arbre: Q("La LED de l'émetteur s'allume-t-elle quand on appuie ?", [
      ["Non", R("Pile de l'émetteur", "L'émetteur n'envoie rien.", ["Remplacer la pile, contrôler les contacts de la pile.", "Si la LED ne s'allume toujours pas : émetteur défectueux."])],
      ["Oui", Q("Un autre émetteur déjà mémorisé fonctionne-t-il ?", [
        ["Oui, l'autre marche", R("Émetteur non mémorisé", "Cet émetteur n'est pas (ou plus) dans la mémoire de la carte.", [
          "Le mémoriser (onglet Apprentissage de la fiche).",
          "Vérifier que l'émetteur est de la bonne famille de code que le récepteur."
        ], [FICHES])],
        ["Non, aucun ne marche", Q("Cela marche-t-il seulement tout près du portail ?", [
          ["Oui, tout près", R("Antenne ou portée", "La réception est trop faible.", [
            "Contrôler l'antenne, son câble (RG58) et son raccordement.",
            "Éloigner la carte de sources de perturbation, ou déporter l'antenne."
          ], [FICHES])],
          ["Non, même près", R("Récepteur radio", "La carte ne reçoit rien.", [
            "Vérifier que la carte radio est bien enfichée (la carte ne la reconnaît qu'à la remise sous tension).",
            "Contrôler le câble d'antenne, puis essayer de mémoriser un émetteur.",
            "Si rien ne change : carte radio ou carte mère à remplacer."
          ], [FICHES])]
        ])]
      ])]
    ]) },
  { id: "signal", titre: "Clignotant ou voyant en panne", sous: "Le portail manœuvre normalement",
    arbre: Q("Quelle sortie ne fonctionne pas ?", [
      ["Le clignotant ou la lampe", Q("Y a-t-il de la tension sur ses bornes pendant la manœuvre ? (elle est souvent intermittente)", [
        ["Oui", R("Clignotant ou ampoule", "La carte alimente la sortie.", ["Remplacer l'ampoule ou le clignotant, contrôler le câble et les connexions.", "Vérifier la puissance maximale autorisée de la sortie (voir le bornier de la fiche)."], [FICHES])],
        ["Non", R("Fonction de la sortie", "La sortie n'est pas activée.", ["Vérifier la fonction programmée pour cette sortie (clignotant, lampe cycle, accueil) dans la fiche.", "Contrôler le fusible des accessoires.", "Sinon, sortie de carte défectueuse."], [FICHES])]
      ])],
      ["Le voyant portail ouvert", R("Voyant de signalisation", "Sortie voyant.", ["Vérifier la fonction programmée pour cette sortie dans la fiche (voyant fixe, clignotant, serrure).", "Contrôler la puissance de la lampe (24 V, quelques watts) et son câblage."], [FICHES])]
    ]) }
];

function diagNode(sid, path) {
  const t = DIAG.find(x => x.id === sid); if (!t) return null;
  let n = t.arbre; const trail = [];
  for (const i of path) {
    const o = n.o && n.o[i]; if (!o) return null;
    trail.push({ q: n.q, a: o[0] });
    n = o[1];
  }
  return { t, n, trail };
}

const TEST = `<div class="dtest"><b>Fonction en test.</b> Ces conseils sont généraux et peuvent être incomplets, inadaptés à votre matériel ou comporter des erreurs. Ne vous y fiez pas seuls : contrôlez avec la fiche de la carte et la notice du fabricant.</div>`;
function viewDiag(sid, pathStr) {
  setHead("Diagnostic guidé (test)", true);
  if (!sid) {
    let h = TEST + `<div class="q">Quel est le problème ?</div><div class="list">` + DIAG.map(t =>
      `<button class="row" onclick="go('#/d/${t.id}')"><b>${esc(t.titre)}</b><br><span class="muted">${esc(t.sous)}</span></button>`).join("") + `</div>
      <p class="note">Aide établie à partir des pratiques courantes, pas d'une notice. Pour les valeurs précises, ouvrir la fiche de la carte.</p>`;
    app.innerHTML = h; return;
  }
  const path = pathStr ? pathStr.split("-").map(Number) : [];
  const r = diagNode(sid, path);
  if (!r) { go("#/d"); return; }
  const base = "#/d/" + sid;
  let h = TEST + `<div class="q">${esc(r.t.titre)}</div>`;
  if (r.trail.length) h += `<div class="dtrail">` + r.trail.map((s, i) =>
    `<div class="dstep"><span>${esc(s.q)}</span><b>${esc(s.a)}</b><a href="${base}${i ? "/" + path.slice(0, i).join("-") : ""}">Modifier</a></div>`).join("") + `</div>`;
  if (r.n.r) {
    const x = r.n.r;
    h += `<div class="dres"><div class="dk">Cause probable</div><h2>${esc(x.titre)}</h2><p>${esc(x.cause)}</p>
      <div class="dk">À faire</div><ol class="steps">${x.actions.map(a => `<li>${esc(a)}</li>`).join("")}</ol></div>`;
    h += `<div class="dlinks">` + x.liens.map(l => `<button class="row" onclick="go('${l[1]}')">${esc(l[0])}</button>`).join("") +
      `<button class="row" onclick="go('#/d/${sid}')">Recommencer</button><button class="row" onclick="go('#/d')">Autre problème</button></div>
      <p class="note">Fonction en test : en cas de doute, la notice de la carte fait foi. Couper l'alimentation avant toute intervention sur la carte.</p>`;
  } else {
    h += `<div class="dq"><h2>${esc(r.n.q)}</h2>` + r.n.o.map((o, i) =>
      `<button class="row" onclick="go('${base}/${path.concat(i).join("-")}')">${esc(o[0])}</button>`).join("") + `</div>`;
  }
  app.innerHTML = h;
}
window.viewDiag = viewDiag;
})();
