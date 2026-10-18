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
    },
    {
      id: "bircher-rfgate",
      nom: "RFGate 2.2.A / 2.2.NG",
      marque: "BBC Bircher",
      couleur: "#b3122f",
      categorie: "Transmission radio de bords sensibles",
      modeles: "RFGate 2.2.A (2 émetteurs, 1 entrée chacun) et RFGate 2.2.NG (1 émetteur, 2 entrées) — récepteur 2 canaux 12/24 V AC/DC",
      source: "Notice BBC Bircher 341033C (01/19), français, 4 p.",
      resume: "Système sans fil pour profils sensibles de sécurité (portes industrielles, portails coulissants) : un émetteur à piles sur le bord sensible, un récepteur à 2 relais côté armoire. Mise en service obligatoirement suivie d'un test du système.",
      specs: [
        ["Alimentation du récepteur", "12/24 V CA/CC"],
        ["Consommation du récepteur", "0,5 W à 12 V · 1,2 W à 24 V"],
        ["Sorties", "2 relais 24 V, 0,5 A ; micro-interrupteur 1B"],
        ["Entrée de test (signal)", "12/24 V CA/CC"],
        ["Mémoires émetteur", "7 + 7"],
        ["Fréquences", "868,95 MHz et 869,85 MHz"],
        ["Portée", "Jusqu'à 100 m en conditions optimales"],
        ["Émetteur", "2 piles lithium 3 V type CR2032 ; consommation 17 mA en émission, 16 µA en veille"],
        ["Protection / température", "IP 55 · −20 à +55 °C · degré de pollution 2"],
        ["Remplacement des piles", "Recommandé une fois par an"]
      ],
      raccordement: [
        { n: "VCC1 · VCC2", label: "Alimentation du récepteur", desc: "12/24 V CA/CC (+/~ et −/~) sur le bornier d'alimentation." },
        { n: "COM1 · OUT1", label: "Sortie 1 (relais)", desc: "Vers l'entrée de sécurité de l'armoire : contact représenté hors tension. L'émetteur 1 (2.2.A) ou l'entrée 1 (2.2.NG) commande la sortie 1." },
        { n: "COM2 · OUT2", label: "Sortie 2 (relais)", desc: "L'émetteur 2 (2.2.A) ou l'entrée 2 (2.2.NG) commande la sortie 2." },
        { n: "SOUT1 · 2", label: "Sorties de sécurité", desc: "Contacts COMx – SOUTx : ouverts quand le détecteur est activé ou en défaut, fermés en service (voir tableau d'états dans Notes). Une sortie à 8,2 kΩ est possible côté commande de porte (pour une commande avec entrée NO, la notice montre le cavalier à enlever sur le récepteur)." },
        { n: "TST · COM.T", label: "Entrées de test", desc: "Signal de test 12/24 V CA/CC et commun de test (voir le schéma de la page 2)." },
        { n: "IN1 · IN2", label: "Raccordement des détecteurs", desc: "Selon le réglage des dip de l'émetteur : profil sensible 8K2 ou contact NC / NO sur IN1 (et IN2 pour le 2.2.NG)." }
      ],
      installation: [
        "Vérifier les réglages des dip de l'émetteur selon le détecteur (profil sensible 8K2, contact) et de l'entrée (NC ou NO, voir Notes).",
        "Monter et câbler le récepteur, puis mettre l'alimentation.",
        "Insérer les piles de l'émetteur en respectant l'ordre (pile 1 puis pile 2).",
        "Appairer émetteur et récepteur (voir procédure en Notes).",
        "Monter et câbler l'émetteur sur le détecteur ; visser le couvercle (couple max 45 N·cm).",
        "Tester le système : actionner le profil sensible sur la porte et vérifier la réaction. Distance minimale de 1 m entre l'émetteur, le récepteur et les autres émetteurs."
      ],
      notes: [
        "Dip du récepteur : 1 ON = application de sécurité selon EN ISO 13849-1 (usine) ; 1 OFF = inactif, aucune fonction de sécurité (la liaison radio n'est pas contrôlée). 2 : ON = 869,85 MHz, OFF = 868,95 MHz (usine) : à changer avant l'appairage. 3 : type d'entrée de test, ON = NC (activé = contact ouvert), OFF = NO (usine, activé = contact fermé). 4 : adaptation automatique de fréquence, ON = active (à n'utiliser qu'en cas de perturbation radio), OFF = inactive (usine). 5 : ON = RFGate 2.2.A, 2 émetteurs (usine) ; OFF = RFGate 2.2.NG, 1 émetteur. La notice représente les positions par des dessins : relire la position ON sur le schéma de la page 2.",
        "Émetteur : passer l'entrée de NC à NO (réglage d'usine = NC) : insérer la pile 1, la LED clignote 2 fois (NC) ou 5 fois (NO) ; appuyer plus de 1,5 s sur le bouton de l'émetteur pour changer l'état ; insérer la pile 2. On a 10 s après la pile 1 pour changer l'état. IN2 et dip 2 ne sont actifs que sur le RFGate 2.2.NG.",
        "Appairage 2.2.A : appuyer plus de 1,5 s sur le bouton du récepteur (bip, LED allumée), relâcher ; appuyer sur le bouton de l'émetteur 1 puis le relâcher ; attendre 2 bips, LED éteinte : code mémorisé. Recommencer : deux appuis longs (> 1,5 s) sur le bouton du récepteur (LED allumée puis clignotante), puis l'émetteur 2 pour le canal 2 (10 s d'attente).",
        "Appairage 2.2.NG : même procédure, un seul émetteur (entrées 1 et 2 vers sorties 1 et 2).",
        "Réinitialisation : sur le récepteur, appuyer et maintenir le bouton (bips brefs), relâcher après plus de 3 s ; mémoire vidée sur tous les émetteurs (2 bips après 10 s).",
        "États des contacts : détecteur non activé (système en service) : COMx – OUTx 8K2, COMx – SOUTx fermé. Détecteur activé, absence d'alimentation, émetteur non appairé, liaison détecteur-émetteur défectueuse ou piles faibles : COMx – OUTx fermé, COMx – SOUTx ouvert.",
        "Piles faibles : 4 bips chaque fois que l'émetteur transmet ; rien n'est indiqué sur les LED du récepteur (elles indiquent seulement : allumée = sécurité OK, éteinte = objet reconnu).",
        "Mémoire pleine : bip de 10 s à l'appairage.",
        "Coupure de l'alimentation obligatoire avant toute intervention ; montage et mise en service par un spécialiste formé. L'évaluation des risques et l'installation conforme relèvent de l'installateur."
      ]
    },
    {
      id: "bircher-xrf1",
      nom: "XRF-1",
      marque: "BBC Bircher",
      couleur: "#b3122f",
      categorie: "Transmission radio de bords sensibles",
      modeles: "XRF-1 — système sans fil monocanal pour profils sensibles, 12–36 V AC/DC",
      source: "Notice BBC Bircher 410610C (07/20), français, 4 p.",
      resume: "Récepteur monocanal avec émetteurs à pile (CR2450N) sur les profils sensibles ; jusqu'à 7 émetteurs mémorisés. Sortie de sécurité à 2 relais (PLd selon EN ISO 13849-1) et entrée de test pour les applications de catégorie 2.",
      specs: [
        ["Alimentation du récepteur", "12–36 V CA/CC"],
        ["Consommation", "0,6 W à 12 V · 0,7 W à 36 V"],
        ["Sorties de sécurité (2 relais)", "36 V max, 1 A max, 36 W / 36 VA"],
        ["Entrée de test", "12–36 V CA/CC"],
        ["Mémoire des détecteurs", "7"],
        ["Fréquence", "868,3 MHz"],
        ["Temps de réaction", "Typiquement 15 ms"],
        ["Portée", "100 m en condition optimale"],
        ["Catégorie", "PLd selon EN ISO 13849-1, catégorie 3 ; entrée de test pour la catégorie 2"],
        ["Pile de l'émetteur", "1 pile lithium 3 V CR2450N ; durée typique 1,2 an"],
        ["Protection / température", "IP65 · −20 à +60 °C"]
      ],
      raccordement: [
        { n: "1 · 2", label: "Alimentation", desc: "12–36 V CA/CC." },
        { n: "3 · 4", label: "Sortie 1 (résistance 8k2)", desc: "Sortie avec résistance 8k2 au repos, fermée quand un détecteur est activé (tableau d'états en Notes). 36 V 1 A max. Ne pas câbler en même temps que 5/6." },
        { n: "5 · 6", label: "Sortie 1 (contact NC)", desc: "Fermée système prêt, ouverte détecteur activé ou erreur. 36 V 1 A max. Ne pas câbler en même temps que 3/4. Avec la sortie NC, le câble d'alimentation de la commande doit être posé à demeure et protégé (EN ISO 13849-2, tableau D.4) ou testé en catégorie 2." },
        { n: "7 · 8", label: "Entrée de test", desc: "À câbler uniquement pour une application de catégorie 2. Dip 1 du récepteur : activation haut (usine) ou bas." },
        { n: "IN1 · IN2", label: "Détecteur", desc: "Dip de l'émetteur selon le détecteur : profil sensible 8k2 ou contact de commutation. IN2 inutilisé." }
      ],
      installation: [
        "Choisir le cheminement des câbles ; casser la partie correspondante du couvercle ou utiliser les trous de la plaque de base. Câble Ø 3,1 – 5,2 mm.",
        "Régler les dip de l'émetteur selon le détecteur, insérer la pile CR2450N.",
        "Câbler le récepteur (alimentation, sortie 3/4 ou 5/6, test si catégorie 2).",
        "Appairer l'émetteur au récepteur (voir Notes), puis effectuer le test du système : actionner chaque profil sensible : la LED passe du vert au rouge. Test obligatoire après chaque configuration.",
        "Respecter l'espace pour ouvrir le couvercle (50 × 121 mm, 5 mm d'espace)."
      ],
      notes: [
        "Appairage : appui long sur le bouton du récepteur (bip, LED 1 orange clignotante), relâcher, appuyer sur le bouton de l'émetteur (premier canal), relâcher, puis appui long sur le bouton du récepteur (ou attendre 1 minute) : 2 bips, LED verte = code mémorisé.",
        "Effacer les appairages : maintenir le bouton du récepteur 5 s (LED SYS orange clignotante), relâcher puis nouvel appui long (ou attendre 1 min) : 5 bips puis 2 bips, tous les appairages sont supprimés.",
        "Sortie d'état et LED du récepteur : système prêt, aucun détecteur activé : sortie 3-4 8k2, 5-6 fermée, LED 1 et SYS vertes. Détecteur activé : 3-4 fermée, 5-6 ouverte, LED rouge / SYS orange. Porte de service ouverte (XRF-TW) : idem. Configuration : orange. Mémoire pleine : orange avec 10 bips. Batterie faible : LED verte et 3 bips par minute. Entrée de test active : LED rouge / SYS verte. Erreur (émetteur perdu, câble coupé, erreur système, pile vide) : LED rouge et SYS rouge.",
        "Pile faible : 3 bips par minute ; pour savoir quel émetteur est concerné, appuyer sur chaque profil (pas de bip = pile bonne, un bip = pile faible).",
        "Erreur (LED SYS rouge, visible couvercle ouvert) : appuyer sur chaque profil ; LED SYS clignotante orange = émetteur bon, restant rouge = émetteur en erreur.",
        "Le feuillet du transmetteur apporte les détails de l'émetteur (autres émetteurs avec manuels spécifiques).",
        "Consignes de sécurité : montage par un électricien spécialisé hors tension, évaluation des risques par le fabricant de l'installation ; appareils de catégorie 2 à tester au moins une fois par cycle."
      ]
    },
    {
      id: "optex-ovs02gt",
      nom: "OVS-02GT",
      marque: "OPTEX",
      couleur: "#0057a8",
      categorie: "Détecteur de véhicule (boucle virtuelle)",
      modeles: "OVS-02GT — détecteur de véhicule hyperfréquence 24 GHz, montage en surface, réglage par smartphone (Bluetooth)",
      source: "Notice OPTEX OVS-02 (FR, 39 p.), lue par reconnaissance de texte et pages visuelles : valeurs vérifiées sur le tableau de la page 37",
      resume: "Détecteur radar FMCW qui remplace une boucle magnétique : détecte les véhicules de 2 à 35 km/h, portée réglable de 1,5 à 8 m. Entièrement paramétré depuis l'application « OPTEX Virtual Loop » ; deux sorties relais.",
      specs: [
        ["Méthode / fréquence", "Hyperfréquence FMCW 24 GHz ; communication BLE 2,4 GHz"],
        ["Alimentation", "12 à 24 V AC/DC"],
        ["Consommation", "Chauffage actif : jusqu'à 300 mA ; chauffage désactivé : jusqu'à 90 mA (à 24 V)"],
        ["Sortie 1", "Relais statique sans tension 30 V DC 0,3 A max (N.O. / N.C.)"],
        ["Sortie 2", "Relais mécanique sans tension 30 V DC 1 A max (N.O. / N.C.)"],
        ["Entrée", "Contact sec ; résistance ON ≤ 100 Ω, OFF ≥ 200 kΩ ; tension de rappel interne env. 3,3 V"],
        ["Vitesse du véhicule", "2 à 35 km/h"],
        ["Portée de détection", "1,5 à 8,0 m par pas de 0,5 m"],
        ["Hauteur de pose", "500 mm du sol au bas du capteur"],
        ["Angle d'ajustement", "±96° gauche / droite (par pas de 3°)"],
        ["Protection / température", "IP66 / NEMA4 · −30 à +50 °C · 95 % max d'humidité sans condensation"],
        ["Poids", "600 g avec accessoires"],
        ["Véhicule détecté", "Longueur 3 300 à 5 000 mm, largeur 1 400 à 1 900 mm, hauteur 1 200 à 2 100 mm, garde au sol minimale 150-250 mm, poids total ≤ 2,5 t"]
      ],
      raccordement: [
        { n: "B1 : − +", label: "Alimentation (bornier 1)", desc: "12 à 24 V AC/DC." },
        { n: "B1 : NO COM NC", label: "Bornier 1 : sortie 1 (relais statique)", desc: "30 V DC 0,3 A max, charge résistive." },
        { n: "B2 : NC COM NO", label: "Bornier 2 : sortie 2 (relais mécanique)", desc: "30 V DC 1 A max, charge résistive." },
        { n: "B2 : IN GND", label: "Bornier 2 : entrée", desc: "Contact d'un autre appareil (liaison, inhibition, activation) : choisir le mode et le contact dans l'application." },
        { n: "Câble", label: "Section des fils", desc: "Fil rigide 0,5–1,2 mm, fil souple 0,3–2,0 mm². Couper l'embout caoutchouc au diamètre du câble ; presse-étoupe possible (trou Ø 21 mm, G1/2)." }
      ],
      installation: [
        "Poteau perpendiculaire au sol, sans objet mobile (drapeaux, végétation) ni grille dans la zone ; pas de lampe fluorescente alentour. Le bas du capteur à 500 mm du sol (pose pour portail battant : voir la notice).",
        "Desserrer sans les retirer les vis des capots haut et bas, retirer les capots, soulever le bloc.",
        "Fixer la base sur le poteau (vis M4 fournies) ; faire passer les fils par le trou du presse-étoupe ou du cache-bornes.",
        "Raccorder alimentation, sortie 1 ou 2 et entrée aux bornes.",
        "Remettre l'unité, orienter l'angle selon l'application (90° ou 45°) ; la direction du capteur doit correspondre à l'angle du véhicule, pas à celui de la voie.",
        "Se connecter au capteur par l'appli : premier mot de passe à définir à la première connexion. Choisir l'application, la portée (largeur de voie − 1,5 m recommandé), envoyer les paramètres.",
        "Calibrage sans personne ni véhicule dans la zone (10 s maxi), puis vérification de la zone de détection à pied : vert clignotant = non-détection, jaune = pré-détection, rouge = détection.",
        "Remettre les capots, serrer les vis (vis M3 × 6 si l'une est perdue)."
      ],
      notes: [
        "Application et paramètres : l'appli propose barrière (activation / protection), portail coulissant (activation / protection), portail battant (activation / protection / shadow) et alerte véhicule. Plage de détection, sensibilité (1 à 7), réglage de présence (1 à 7), sensibilité courte portée (1 à 7), détection d'approche latérale (OFF / 2,5 / 5 / 10 / 30 / 60 / 120 s, seulement à 90°), sensibilité aux vibrations (OFF / bas / moyen / élevé), augmentation de la sensibilité (et sa tempo), temps de réponse du relais (niveau 1 à 4), tempo de détection de présence (5 / 15 / 60 / 180 min / infini), annulation du portail coulissant (OFF / ON).",
        "Sorties : mode détection / pré-détection / masque ; type maintenu (holding) ou impulsion (entrée ou sortie, 150 ms / 250 ms / 500 ms / 1 s) ; délai (OFF / 0,5 / 1 / 2 / 3 / 4 s) ; tempo de maintien (OFF / 0,5 / 1 / 2 / 3 / 10 / 30 / 60 s). Entrée : liaison (porte OU / ET), inhibition ou activation. Le mode masque émet la sortie si le capteur est masqué plus de 30 s.",
        "Voyant : vert fixe = veille ; jaune fixe = pré-détection ; rouge fixe = détection ; bleu fixe = calibrage incomplet ; violet fixe = environnement défavorable ; bleu fixe 2 s = démarrage ; bleu clignotant rapide = reset usine terminé. En mode connecté à l'appli, les mêmes couleurs clignotent. Calibrage : bleu et vert clignotants = en cours ; rouge et jaune clignotants = erreur instable ; rouge et bleu clignotants = réflexion élevée ; violet clignotant 10 s = réflexion forte puis calibrage terminé (performances dégradées).",
        "Voyant éteint ou activé / désactivé : option « Indicateur » de l'appli, ou aimant présenté sur le voyant (hors connexion à l'appli).",
        "Chauffage anti-gel automatique sous 5 °C : OFF (90 mA max) / normal (220 mA) / élevé (300 mA), consommations maximales à 24 V DC.",
        "Reset d'usine : maintenir le bouton de reset 5 à 10 s (efface mot de passe et calibrage), ou menu de l'appli. Après tout déplacement, recalibrer.",
        "Dépannage : voyant éteint : alimentation 12–24 V AC/DC. Véhicule non détecté : recalibrer, vérifier l'angle, augmenter portée ou sensibilité, réduire temps de réponse. Reste en détection : retirer les obstacles de la zone, recalibrer, réduire la tempo, augmenter le réglage de présence. Piétons détectés : réduire la sensibilité ou allonger le temps de réponse du relais.",
        "Ne jamais démonter ni modifier l'appareil ; nettoyer avec un chiffon humide sans alcool ; pas de lavage haute pression ; pas d'autocollant sur le capteur.",
        "Pour les mots de passe, éviter les identifiants devinables (ID du détecteur, code postal, séquences simples)."
      ]
    }
  ];
  window.ACCESSOIRES = ACCESSOIRES;
  const TABS = [["info", "Infos"], ["racc", "Raccord."], ["inst", "Installation"], ["sch", "Schéma"], ["notes", "Notes"]];
  const has = (a, t) => t === "info" ? true : t === "sch" ? hasSchema(a.id) : t === "racc" ? a.raccordement && a.raccordement.length : t === "inst" ? a.installation && a.installation.length : (a.notes && a.notes.length) || (a.codes && a.codes.length);
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
    if (tab === "sch") h += schemaPane(a.id);
    if (tab === "racc") h += `<table>` + a.raccordement.map(r => `<tr><td>${esc(r.n)}</td><td><b>${esc(r.label)}</b><br>${esc(r.desc)}</td></tr>`).join("") + `</table>`;
    if (tab === "inst") h += `<div class="note"><ol class="plain" style="padding-left:20px;margin:0">${a.installation.map(s => `<li style="margin:6px 0">${esc(s)}</li>`).join("")}</ol></div>`;
    if (tab === "notes") h += (a.codes ? `<h2>Codes</h2><table>` + a.codes.map(c => `<tr><td>${esc(c[0])}</td><td>${esc(c[1])}</td></tr>`).join("") + `</table>` : "") + (a.notes ? `<div class="note"><ul class="plain">${a.notes.map(n => `<li>${esc(n)}</li>`).join("")}</ul></div>` : "");
    h += `<p class="foot">Source : ${esc(a.source)}.<br>En cas de doute, la notice livrée avec le matériel fait foi.</p>`;
    app.innerHTML = h;
  };
})();
