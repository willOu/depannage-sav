/* =====================================================================
   Dépannage SAV — Espacs Automatisme
   Données techniques par marque / carte électronique.
   Toutes les entrées sont reprises des notices fabricant citées dans
   "source" (reformulées). p: 1 = action complétée par un contrôle
   terrain de base (pas mot pour mot dans la notice).
   Pour ajouter une carte : copier un bloc { id, nom, ... } et l'adapter,
   puis augmenter DATA_VERSION (sinon les téléphones gardent l'ancienne).
   ===================================================================== */

const DATA_VERSION = "2026-10-17";

/* Journal des modifications — ajouter une entrée en haut à chaque mise à jour.
   docs : nom des notices ajoutées (affichées dans Réglages). */
const CHANGELOG = [
  { date: "2026-10-17", titre: "Relecture des cartes BFT", items: [
    "LEO B CBB : type corrigé (coulissant), codes AUX 3 et clignotant précisés, ajout du menu simplifié avec les presets, des notes sur le sens d'ouverture, des fusibles et du montage vantaux opposés.",
    "MERAK : bornier SAFE 2 corrigé (borne 73, pont 70-73, plus de FAULT), puissances par modèle, vantaux opposés, presets, signalement des points où la notice se contredit ou que seule l'ancienne édition mentionne."
  ], docs: [] },
  { date: "2026-10-17", titre: "Recherche par modèle", items: [
    "On peut chercher un modèle d'automatisme (ex. Ares 1000, AYRON, BIONIK, RB400, BX708) ou un type (coulissant, battant, barrière) : la carte correspondante s'ouvre.",
    "La saisie sans espace fonctionne aussi (ex. bta400, rb400)."
  ], docs: [] },
  { date: "2026-10-17", titre: "BFT LEO B CBB et MERAK BT A à jour", items: [
    "Nouvelle carte BFT LEO B CBB (3 230 L02 / L04, 3 120 F02 / F04) : codes, bornier, paramètres (tableaux A, B, C) et autoconfiguration.",
    "BFT MERAK : mise à jour avec la notice D814459 (MERAK BT A) : nouveaux codes d'erreur, 9 groupes de paramètres, bornier AUX 1 / AUX 2, notes d'apprentissage.",
    "Roger B70/2ML, EDGE1, CTRL : corrections après relecture indépendante des notices (mise en veille, OFSt, symptômes, paramètres esclave)."
  ], docs: [
    "Notice BFT D812161 00100_04, LEO B CBB",
    "Notice BFT D814459 0AR00_09, MERAK BT A"
  ] },
  { date: "2026-10-17", titre: "Trois nouvelles cartes Roger", items: [
    "Roger B70/2ML (portail battant AYRON, BE20, MONOS4) : codes, bornier, écran, 68 paramètres, apprentissage.",
    "Roger EDGE1 (portail battant 36 V : BR20, BR21, BH23, SMARTY, BE20, MONOS4) : codes, bornier, écran, 77 paramètres, apprentissage.",
    "Roger CTRL (barrières BIONIK BI/004HP, BI/004, BI/006, BI/008) : codes, bornier, écran, paramètres (dont accès parkings et lumières RGB), apprentissage simple et MASTER/SLAVE."
  ], docs: [
    "Notice Roger IS240 Rev.15, B70/2ML firmware P2.05",
    "Notice Roger IS160 Rev.26, EDGE1 firmware P5.10",
    "Notice Roger IS88 Rev.28, CTRL firmware P4.35"
  ] },
  { date: "2026-10-17", titre: "Onglet Paramètres et menu Réglages", items: [
    "Nouvel onglet Paramètres : tous les paramètres de programmation de la carte, avec valeur usine, valeurs possibles et recherche.",
    "Roger B70/1DC : 62 paramètres (A0 à CP, y compris High Speed et réversible).",
    "Les paramètres sortent aussi dans la recherche générale.",
    "Menu Réglages (roue dentée) : thème, nouveautés, documentations intégrées.",
    "Mise à jour automatique dès l'ouverture quand il y a du réseau.",
    "Les trois carrés de couleur en haut à gauche ramènent à l'accueil."
  ], docs: [] },
  { date: "2026-10-17", titre: "Roger B70/1DC firmware P3.00 et onglet Écran", items: [
    "Fiche Roger B70/1DC refaite à partir de la notice P3.00 : 42 codes, bornier, apprentissage.",
    "Nouvel onglet Écran : dessin de l'afficheur et signification de chaque segment (touchez un segment)."
  ], docs: ["Notice Roger IS117 Rev.30, firmware P3.00"] },
  { date: "2026-10-17", titre: "Première version", items: [
    "Codes erreur, bornier et apprentissage pour Came, Nice, FAAC, BFT et Roger, consultables hors ligne."
  ], docs: [
    "Notice Came FA02214-FR (03/2025)",
    "Notice Came 119BU56 v1.0 (01/2008)",
    "Notice Nice IDV0629A01FR (31/01/2019)",
    "Notice FAAC 732099 Rev.E (746 E R, 2019)",
    "Notice BFT D811980 00100_01"
  ] }
];

const MARQUES = [
/* ------------------------------------------------------------------ */
{
  id: "came", nom: "Came", couleur: "#1f5fa8",
  cartes: [
  {
    id: "came-zbx7n",
    nom: "ZBX7N",
    modeles: "BX704AGS · BX708AGS · BX704ALS · BX708ALS · BX708RGS (et carte de rechange des BX-74/78)",
    type: "Coulissant 230 V — carte à afficheur",
    source: "Notice Came FA02214-FR (03/2025)",
    codes: [
      { code: "E1", p: 1, type: "afficheur", titre: "Erreur de calibrage", action: "Relancer l'auto-apprentissage de la course (A3). Vérifier que l'encodeur est activé (F11 = ON)." },
      { code: "E2", p: 1, type: "afficheur", titre: "Erreur de réglage", action: "Contrôler les réglages de mise en service (F54 sens, A1 type moteur), puis refaire A3." },
      { code: "E3", p: 1, type: "afficheur", titre: "Rupture encodeur", action: "Contrôler le câble et le connecteur encodeur sur la carte." },
      { code: "E4", type: "afficheur", titre: "Test des sécurités échoué", action: "Le test F5 a échoué sur CX et/ou CY : vérifier photocellules, alignement et câblage du TX sur la borne TS." },
      { code: "E7", p: 1, type: "afficheur", titre: "Temps de fonctionnement dépassé", action: "Vérifier les fins de course (ailettes, micro-interrupteurs) et l'absence de point dur." },
      { code: "E8", type: "afficheur", titre: "Volet de déblocage ouvert", action: "Refermer le volet de déblocage. La notice demande aussi de vérifier le fusible accessoires (1 A-F)." },
      { code: "E9", p: 1, type: "afficheur", titre: "Obstacle détecté en fermeture", action: "Rechercher l'obstacle ou le point dur. Sensibilité : F34 (course) et F35 (ralentissement)." },
      { code: "E10", p: 1, type: "afficheur", titre: "Obstacle détecté en ouverture", action: "Idem E9." },
      { code: "E11", p: 1, type: "afficheur", titre: "Trop d'obstacles consécutifs", action: "Nombre maximum d'obstacles consécutifs atteint : supprimer la cause puis redonner une commande." },
      { code: "E14", p: 1, type: "afficheur", titre: "Erreur de communication", action: "Contrôler la liaison RSE (vis-à-vis / CRP) et sa configuration F49." },
      { code: "E15", p: 1, type: "afficheur", titre: "Émetteur incompatible", action: "Vérifier le type de décodage radio U4 (tous / rolling code / TW Key Block)." },
      { code: "E17", p: 1, type: "afficheur", titre: "Système sans fil ne communique pas", action: "Vérifier la carte RIO Conn et les dispositifs RIO." },
      { code: "E18", p: 1, type: "afficheur", titre: "Système sans fil non configuré", action: "Configurer les dispositifs RIO (F65 à F68)." },
      { code: "– – –", type: "afficheur", titre: "Les 3 segments clignotent", action: "Course non apprise : lancer l'auto-apprentissage A3." },
      { code: "CSI", type: "afficheur", titre: "Affiché dans le compteur A5", action: "Intervention d'entretien demandée." }
    ],
    bornier: {
      groupes: [
        { nom: "Puissance", bornes: [
          { n: "L · N", label: "Secteur", desc: "230 V AC 50/60 Hz (120 V sur BX708RGS)", t: "alim" },
          { n: "W · E1", label: "Clignotant", desc: "230 V AC, 25 W max (lampe supplémentaire : 60 W)", t: "sortie" }
        ]},
        { nom: "Accessoires", bornes: [
          { n: "10 · 11", label: "24 V", desc: "Alimentation accessoires 24 V AC, 20 W max au total", t: "alim" },
          { n: "11 · FA / FC", label: "Voyants", desc: "Voyants d'état ouvert / fermé, 24 V AC 3 W max", t: "sortie" },
          { n: "TS", label: "Test sécu", desc: "Alimentation TX photocellules pour le test F5", t: "sortie" }
        ]},
        { nom: "Commandes", bornes: [
          { n: "1 · 2", label: "STOP", desc: "Arrêt total, contact NF. Activer F1 si utilisé ; sinon le laisser désactivé", t: "nf" },
          { n: "2 · 7", label: "Pas-à-pas", desc: "Contact NO. Fonction réglée par F7 (pas-à-pas, séquentielle, ouverture, fermeture)", t: "no" },
          { n: "2 · 3P", label: "Partielle", desc: "Contact NO. Ouverture partielle par défaut (F8)", t: "no" }
        ]},
        { nom: "Sécurités", bornes: [
          { n: "2 · CX", label: "CX", desc: "Entrée sécurité NF. Fonction F2 (C1 réouverture, C2 refermeture, C3 arrêt partiel, C4 attente, C7/C8 bords, r7/r8 bord 8K2). Désactiver si inutilisée", t: "nf" },
          { n: "2 · CY", label: "CY", desc: "Idem, fonction F3", t: "nf" }
        ]}
      ],
      fusibles: "Ligne 5 A-F (8 A-F en RGS) · Carte 630 mA-F · Accessoires 1 A-F",
      notes: [
        "Couple moteur : déplacer la cosse sur l'une des 4 positions du limiteur (1 mini → 4 maxi).",
        "Fins de course : ailettes sur la crémaillère, environ 20 mm, le ressort doit déclencher le micro-interrupteur."
      ]
    },
    apprentissage: {
      avant: [
        "Zone de manœuvre dégagée.",
        "Après la mise sous tension, la 1re manœuvre est toujours une ouverture : la laisser se terminer.",
        "Touches : ENTER = entrer/valider · ESC = sortir/annuler/arrêter · < > = naviguer / changer la valeur."
      ],
      etapes: [
        "F54 — Sens d'ouverture : 0 = vers la gauche (défaut), 1 = vers la droite.",
        "F1 — Arrêt total : ON seulement si un bouton d'arrêt est câblé sur 1-2.",
        "F11 — Encodeur : laisser sur ON (sinon A3 n'apparaît pas).",
        "A1 — Type moteur : 1 = BX704, 2 = BX708.",
        "A3 — Auto-apprentissage de la course : ON puis ENTER. Le portail apprend la course.",
        "Contrôler F34 / F35 (sensibilité) et vérifier les efforts selon EN 12453."
      ],
      apres: [
        "A4 = remise à zéro des paramètres (garde le décodage radio, le type moteur et la course apprise).",
        "U1 nouvel utilisateur · U2 supprimer un · U3 supprimer tous · U4 type de décodage (attention : rolling code ou TW efface les autres)."
      ]
    }
  },
  {
    id: "came-zbx74",
    nom: "ZBX74 / ZBX78",
    modeles: "BX-74 · BX-78 (ancienne carte à dip-switch)",
    type: "Coulissant 230 V — dip-switch + touches CH1/CH2",
    source: "Notice Came 119BU56 v1.0 (01/2008)",
    codes: [
      { code: "PROG rapide", type: "led", titre: "LED PROG clignote rapidement", action: "Carte jamais programmée : faire la programmation de la course (onglet Apprentissage). Après programmation, la LED reste éteinte." },
      { code: "LED clignote", type: "led", titre: "LED de signalisation clignote au repos", action: "Un contact de sécurité NF est ouvert : 1-2 (stop), 2-C1 ou 2-C3. Contrôler le dispositif ou le dip correspondant (9, 7, 8)." },
      { code: "Arrêt ouvert", type: "symptome", titre: "Portail arrêté en ouverture, plus de fermeture auto", action: "Après 3 détections d'obstacle consécutives, le portail s'arrête en ouverture et la fermeture automatique est annulée : redonner une commande." },
      { code: "Ouverture lente", type: "symptome", titre: "Ouverture complète au ralenti après coupure", action: "Normal : après une coupure pendant la course (ralentissements actifs), le portail refait une ouverture complète à vitesse ralentie." }
    ],
    bornier: {
      groupes: [
        { nom: "Puissance", bornes: [
          { n: "L · N", label: "Secteur", desc: "230 V AC 50/60 Hz", t: "alim" },
          { n: "W · E1", label: "Clignotant", desc: "230 V, 25 W max — clignote pendant les manœuvres", t: "sortie" }
        ]},
        { nom: "Accessoires", bornes: [
          { n: "10 · 11", label: "24 V", desc: "Alimentation accessoires 24 V AC, 20 W max au total", t: "alim" },
          { n: "B1 · B2", label: "2e canal", desc: "Sortie 2e canal radio, contact NO, 5 A 24 V DC (accessoire ou 2e moteur)", t: "sortie" }
        ]},
        { nom: "Commandes", bornes: [
          { n: "1 · 2", label: "STOP", desc: "Stop total NF. Inutilisé → dip 9 sur ON", t: "nf" },
          { n: "2 · 7", label: "Ouvre/ferme", desc: "Contact NO. Comportement selon dip 2 et 3 (rangée de 10) et dip 1 (rangée de 4)", t: "no" },
          { n: "2 · 3P", label: "Partielle", desc: "Contact NO. Ouverture partielle (trimmer PAR.OP 0 à 16 s) ou ouverture seule (dip 2 rangée de 4)", t: "no" }
        ]},
        { nom: "Sécurités", bornes: [
          { n: "2 · C1", label: "Réouverture", desc: "NF, réouverture pendant la fermeture. Inutilisé → dip 7 sur ON", t: "nf" },
          { n: "2 · C3", label: "Stop partiel", desc: "NF, arrêt puis fermeture auto si active. Inutilisé → dip 8 sur ON", t: "nf" }
        ]}
      ],
      fusibles: "Ligne 5 A-F · Accessoires 1 A-F · Dispositifs de commande 630 mA-F",
      notes: [
        "Installation à droite : inverser U-V du moteur et FA-FC des fins de course.",
        "Couple moteur : déplacer la cosse du fil noir sur l'une des 4 positions (1 mini → 4 maxi).",
        "Trimmer A.C.T : temps de fermeture automatique, 1 à 120 s (dip 1 ON).",
        "Carte radio AF : l'enficher hors tension (AF43S TOP, AF43TW TWIN, AF43SR ATOMO)."
      ]
    },
    apprentissage: {
      avant: [
        "Noter la position actuelle des dip-switch.",
        "Faire les sélections moteur à l'arrêt, portail en position fermée."
      ],
      etapes: [
        "Rangée de 10 : tous les dip sur OFF.",
        "Rangée de 10 : dip 4, 7, 8 et 9 sur ON. Rangée de 4 : dip 3 sur OFF (lecteur optique actif).",
        "Maintenir CH1 jusqu'à ce que la LED rouge clignote (environ 3 s).",
        "Le portail fait une fermeture complète puis une ouverture complète.",
        "LED fixe = course enregistrée.",
        "Remettre les dip-switch dans leur position de fonctionnement."
      ],
      apres: [
        "Ralentissement à 50 cm des fins de course. Pendant un ralentissement : CH1 = vitesse lente plus faible, CH2 = plus forte.",
        "Dip 10 ON = ralentissements supprimés.",
        "Mémoriser un émetteur : maintenir CH1 (LED clignote), appuyer sur la touche de l'émetteur, la LED reste allumée."
      ]
    }
  }
  ]
},
/* ------------------------------------------------------------------ */
{
  id: "nice", nom: "Nice", couleur: "#0b7a75",
  cartes: [
  {
    id: "nice-rba3",
    nom: "RBA3 (Robus)",
    modeles: "Robus RB400 · RB250HS (depuis 04/2018). RB600 / RB1000 utilisent la même logique RBA3 (notice IDV0620A01FR, non recoupée ici).",
    type: "Coulissant 230 V — BlueBUS, 8 LED L1…L8",
    source: "Notice Nice IDV0629A01FR (31/01/2019)",
    codes: [
      { code: "1 clignot.", type: "flash", titre: "Erreur BlueBUS", action: "Au départ, les dispositifs BlueBUS ne correspondent pas à ceux mémorisés. Chercher le dispositif en panne ; si on a ajouté ou retiré un dispositif, refaire la reconnaissance des dispositifs." },
      { code: "2 clignot.", type: "flash", titre: "Photocellule", action: "Au départ, une photocellule refuse la manœuvre : obstacle ou mauvais alignement. Pendant le mouvement, c'est normal si quelqu'un passe." },
      { code: "3 clignot.", type: "flash", titre: "Limiteur « Force moteur »", action: "Le portail a rencontré une friction plus forte : chercher le point dur (rail, roues, crémaillère) avant de toucher au réglage de force." },
      { code: "4 clignot.", type: "flash", titre: "Entrée STOP", action: "L'entrée STOP est intervenue au départ ou pendant le mouvement : contrôler barre palpeuse, arrêt d'urgence, etc." },
      { code: "5 clignot.", type: "flash", titre: "Paramètres internes", action: "Attendre au moins 30 s puis redonner une commande. Si ça persiste : panne grave, carte à remplacer." },
      { code: "6 clignot.", type: "flash", titre: "Trop de manœuvres par heure", action: "Limite atteinte : attendre quelques minutes." },
      { code: "7 clignot.", type: "flash", titre: "Circuits électriques internes", action: "Couper toutes les alimentations quelques secondes puis réessayer. Si ça persiste : carte à remplacer." },
      { code: "8 clignot.", type: "flash", titre: "Une commande est déjà présente", action: "Une commande reste active (ex. horloge sur OPEN, bouton collé) : regarder quelle LED Sbs / OPEN / CLOSE est allumée." },
      { code: "9 clignot.", type: "flash", titre: "Automatisme verrouillé", action: "Verrouillé par une commande « verrouiller automatisme » : envoyer « déverrouiller automatisme » (ex. Oview)." },
      { code: "BLUEBUS éteinte", type: "led", titre: "LED BLUEBUS éteinte", action: "Pas de tension ou fusible grillé (1,6 AT) : en chercher la cause avant de remplacer à l'identique." },
      { code: "BLUEBUS fixe", type: "led", titre: "LED BLUEBUS allumée fixe", action: "Anomalie grave : couper la logique quelques secondes. Si ça persiste, carte à remplacer." },
      { code: "BLUEBUS 1/s", type: "led", titre: "1 clignotement par seconde", action: "Fonctionnement normal." },
      { code: "BLUEBUS ×2", type: "led", titre: "2 clignotements rapides", action: "Normal : une entrée vient de changer d'état (commande, photocellule, émetteur radio)." },
      { code: "STOP éteinte", type: "led", titre: "LED STOP éteinte", action: "Entrée STOP intervenue : vérifier les dispositifs branchés sur STOP. Au repos elle doit être allumée." },
      { code: "AUX IN éteinte", type: "led", titre: "LED AUX_IN éteinte", action: "Contact de l'entrée AUX_IN ouvert : vérifier le dispositif branché." },
      { code: "L1+L2", type: "led", titre: "L1 et L2 clignotent ensemble", action: "Reconnaissance des dispositifs à faire (onglet Apprentissage)." },
      { code: "L3+L4", type: "led", titre: "L3 et L4 clignotent ensemble", action: "Reconnaissance de la longueur du vantail à faire (onglet Apprentissage)." },
      { code: "Inversion", type: "symptome", titre: "La manœuvre démarre puis s'inverse", action: "Force trop basse pour ce portail ou obstacle : vérifier, puis augmenter « Force moteur » (2e niveau, L5)." },
      { code: "Radio", type: "symptome", titre: "Émetteur sans effet, LED BLUEBUS ne clignote pas 2×", action: "Commande non reçue : piles de l'émetteur, mémorisation dans le récepteur OXI/SMXI, alimentation secteur." }
    ],
    bornier: {
      groupes: [
        { nom: "Sorties", bornes: [
          { n: "FLASH", label: "Clignotant", desc: "Clignotant Nice : 2 clignotants LED ELDC ou 2 lampes 12 V 21 W max", t: "sortie" },
          { n: "OGI", label: "Voyant", desc: "Voyant portail ouvert 24 V 4 W max (fonction réglable, 2e niveau L4)", t: "sortie" },
          { n: "BLUEBUS", label: "BlueBUS", desc: "2 fils sans polarité pour photocellules et dispositifs compatibles, 15 unités max", t: "bus" }
        ]},
        { nom: "Entrées", bornes: [
          { n: "STOP", label: "STOP", desc: "NO, NF ou 8,2 kΩ — type reconnu automatiquement lors de la reconnaissance", t: "nf" },
          { n: "SBS", label: "Pas à pas", desc: "Contact NO", t: "no" },
          { n: "OPEN", label: "Ouverture", desc: "Contact NO", t: "no" },
          { n: "CLOSE", label: "Fermeture", desc: "Contact NO (peut devenir ouverture partielle, L7)", t: "no" },
          { n: "AUX IN", label: "Aux", desc: "Contact NF, commande « ALT » par défaut", t: "nf" },
          { n: "AERIAL", label: "Antenne", desc: "Câble RG58, longueur conseillée < 5 m", t: "autre" }
        ]},
        { nom: "Alimentation accessoires", bornes: [
          { n: "GND · 24V", label: "24 V", desc: "24 V DC (−30 % / +50 %), 100 mA max — près des bornes STOP / SBS", t: "alim" }
        ]}
      ],
      fusibles: "1,6 AT",
      notes: [
        "Sortie usine prévue pour une installation à droite : pour la gauche, suivre la fig. 6 de la notice.",
        "Après tout ajout ou retrait sur BlueBUS ou STOP : refaire la reconnaissance des dispositifs.",
        "Photocellules BlueBUS : mêmes cavaliers sur TX et RX, une adresse par paire."
      ]
    },
    apprentissage: {
      avant: [
        "Débrayer, amener le vantail à mi-course, rembrayer.",
        "Mettre sous tension : la LED BLUEBUS doit clignoter 1 fois par seconde, clignotant et OGI éteints.",
        "Pattes de fin de course : jusqu'au clic, puis +2 cm minimum."
      ],
      etapes: [
        "Reconnaissance des dispositifs : maintenir ▲ (Open) + Stop/Set.",
        "Relâcher quand L1 et L2 clignotent très vite (environ 3 s). Attendre quelques secondes.",
        "Fin : LED STOP allumée, L1 et L2 éteintes, puis L3 et L4 se mettent à clignoter.",
        "Reconnaissance de la longueur : maintenir Stop/Set + ▼ (Close).",
        "Relâcher quand la manœuvre démarre (environ 3 s). Ce doit être une ouverture ; sinon appuyer sur Stop/Set et revoir le sens d'installation.",
        "Laisser finir l'ouverture puis la fermeture."
      ],
      apres: [
        "Contrôle : ralentissement 70 à 50 cm avant la fin de course, arrêt à 2-3 cm de la butée mécanique.",
        "Historique des 8 dernières manœuvres : Stop/Set 3 s, aller sur L8, maintenir Stop/Set ; la LED de chaque manœuvre en défaut reprend le nombre de clignotements du code.",
        "Programmation : Stop/Set 3 s, ▲/▼ pour choisir la LED, Stop/Set pour basculer (1er niveau) ou maintenu + ▲/▼ (2e niveau). Pas plus de 10 s entre deux appuis."
      ]
    }
  }
  ]
},
/* ------------------------------------------------------------------ */
{
  id: "faac", nom: "FAAC", couleur: "#c4161c",
  cartes: [
  {
    id: "faac-780d",
    nom: "780D",
    modeles: "746 E R (Z16 / Z20) · 844 R",
    type: "Coulissant 230 V — afficheur 2 chiffres, touches F + −",
    source: "Notice FAAC 732099 Rev.E (746 E R, 2019)",
    codes: [
      { code: "00", type: "afficheur", titre: "Fermé", action: "État normal." },
      { code: "01", type: "afficheur", titre: "En ouverture", action: "État normal." },
      { code: "02", type: "afficheur", titre: "Bloqué", action: "STOP actif : borne 5 ouverte. Si aucun arrêt n'est câblé, ponter 5 avec le négatif (7 ou 8)." },
      { code: "03", type: "afficheur", titre: "Ouvert", action: "État normal." },
      { code: "04", type: "afficheur", titre: "Ouvert en pause", action: "Attente avant fermeture automatique (temps PA)." },
      { code: "05", type: "afficheur", titre: "Échec test Failsafe", action: "Le test des photocellules (FS) ou des bords (SA) a échoué : le négatif du TX doit être sur la borne 11 (TX-FSW), 100 mA max. Vérifier câblage et alignement." },
      { code: "06", type: "afficheur", titre: "En fermeture", action: "État normal." },
      { code: "07", type: "afficheur", titre: "En phase d'inversion", action: "Inversion après obstacle (codeur ou bord sensible)." },
      { code: "08", p: 1, type: "afficheur", titre: "Intervention photocellules", action: "Faisceau coupé : obstacle, alignement, ou entrée FSW non pontée sur TX-FSW si pas de cellule." },
      { code: "FC1/FC2", type: "led", titre: "LED fin de course éteinte", action: "Fin de course engagé. Portail à mi-course, les deux doivent être allumées." },
      { code: "FSW OP/CL", type: "led", titre: "LED photocellule éteinte", action: "Sécurité engagée ou entrée non pontée. Au repos : allumées." },
      { code: "STOP", type: "led", titre: "LED STOP éteinte", action: "Commande STOP active. Au repos : allumée." },
      { code: "SAFE", type: "led", titre: "LED SAFE éteinte", action: "Bord sensible actif ou entrée non pontée sur TX-FSW. Au repos : allumée." },
      { code: "OPEN A/B", type: "led", titre: "LED OPEN allumée en permanence", action: "Une commande reste active (bouton collé, récepteur, horloge). Au repos : éteintes." },
      { code: "ENCODER", type: "led", titre: "LED ENCODER", action: "Doit clignoter pendant le mouvement." },
      { code: "Pré-clign. 2 s", type: "symptome", titre: "Le clignotant reste 2 s allumé avant chaque manœuvre", action: "Demande d'assistance : le compteur de cycles nc est arrivé à zéro (fonction AS = Y)." }
    ],
    bornier: {
      groupes: [
        { nom: "J1 — commandes et sécurités", bornes: [
          { n: "1", label: "OPEN A", desc: "Ouverture totale, contact NO", t: "no" },
          { n: "2", label: "OPEN B", desc: "Contact NO : ouverture partielle (logiques A, AP, S, E, EP) ou fermeture (B, C, BC)", t: "no" },
          { n: "3", label: "FSW OP", desc: "Photocellules ouverture, NF. Inutilisé → ponter sur 11 (TX-FSW)", t: "nf" },
          { n: "4", label: "FSW CL", desc: "Photocellules fermeture, NF. Inutilisé → ponter sur 11 (TX-FSW)", t: "nf" },
          { n: "5", label: "STOP", desc: "NF. Inutilisé → ponter au négatif (−)", t: "nf" },
          { n: "6", label: "SAFE", desc: "Bords sensibles NF (inversion 2 s puis blocage). Inutilisé → ponter sur 11", t: "nf" },
          { n: "7 · 8", label: "−", desc: "Négatif accessoires et commun des contacts", t: "alim" },
          { n: "9 · 10", label: "+24 V", desc: "Positif accessoires 24 V DC, 500 mA max", t: "alim" },
          { n: "11", label: "TX-FSW", desc: "Négatif open collector pour le test Failsafe : y brancher le négatif des TX / bords. 24 V 100 mA max", t: "sortie" },
          { n: "12", label: "W.L.", desc: "Négatif open collector : voyant, éclairage, serrure ou feux (fonction SP). 24 V 100 mA max", t: "sortie" }
        ]},
        { nom: "J6 — moteur et clignotant", bornes: [
          { n: "13 · 14", label: "LAMP", desc: "Clignotant 230 V, 60 W max (13 phase, 14 neutre)", t: "sortie" },
          { n: "15", label: "COM", desc: "Commun moteur (gris ou bleu) — câblé usine", t: "moteur" },
          { n: "16", label: "MOT 1", desc: "Phase (noir) — câblé usine", t: "moteur" },
          { n: "17", label: "MOT 2", desc: "Phase (marron) — câblé usine", t: "moteur" }
        ]},
        { nom: "J7 — secteur", bornes: [
          { n: "L · N · PE", label: "Secteur", desc: "220-240 V 50/60 Hz", t: "alim" }
        ]}
      ],
      fusibles: "F1 secteur F 5 A (230 V) · F2 accessoires T 0,8 A",
      notes: [
        "Ne pas modifier le câblage moteur usine : pour changer de sens, utiliser dI.",
        "J2 : carte radio / décodage 5 broches, connecteur polarisé, à enficher hors tension.",
        "Contacts NF en série, contacts NO en parallèle."
      ]
    },
    apprentissage: {
      avant: [
        "Pas d'auto-apprentissage de course sur la 780D : les arrêts se font sur les fins de course magnétiques, réglés par paramètres.",
        "Menu de base : maintenir F → LO s'affiche ; relâcher pour voir la valeur ; + / − pour modifier ; F pour passer à la suite ; sortir sur St.",
        "Menu avancé : maintenir F puis appuyer aussi sur +."
      ],
      etapes: [
        "Déverrouiller, vantail à mi-course, mettre sous tension et contrôler les LED.",
        "Poser les fins de course : faire glisser jusqu'à ce que la LED correspondante s'éteigne, puis encore environ 4 cm.",
        "dI — sens d'ouverture (vu côté déverrouillage) : -3 = droite, E- = gauche.",
        "rP — ralentissement avant fin de course (avancé).",
        "rA et br — ralentissement après fin de course et freinage : l'arrêt doit se faire quelques cm avant la butée mécanique.",
        "t — délai d'attente : temps de course mesuré + environ 10 s.",
        "Anti-écrasement : embrayage (hors tension) + sensibilité EC, puis mesure EN 12453."
      ],
      apres: [
        "Remise à zéro usine : entrée SAFE fermée (LED allumée), maintenir +, − et F au moins 5 s jusqu'à t et S en alternance.",
        "Le ralentissement ne s'applique qu'après une course complète d'un fin de course à l'autre (Sr = Y pour rouler lentement après coupure)."
      ]
    }
  }
  ]
},
/* ------------------------------------------------------------------ */
{
  id: "bft", nom: "BFT", couleur: "#e07b00",
  cartes: [
  {
    id: "bft-merak",
    nom: "MERAK",
    modeles: "Deimos Ultra BT A400 · A600 · BT B 400 · 600 · Ares Ultra BT B 1000 · 1500 · Ares Veloce BT B 500 · 1000",
    type: "Coulissant 24 V — afficheur 4 caractères, touches + / − / OK",
    source: "Notices BFT D811980 00100_01 et D814459 0AR00_09 (MERAK BT A)",
    codes: [
      { code: "STRE", type: "diag", titre: "Entrée Start externe activée", action: "Diagnostic d'entrée (START E)." },
      { code: "STRI", type: "diag", titre: "Entrée Start interne activée", action: "Diagnostic d'entrée (START I)." },
      { code: "OPEN", type: "diag", titre: "Entrée OPEN activée", action: "Diagnostic d'entrée." },
      { code: "CLS", type: "diag", titre: "Entrée CLOSE activée", action: "Diagnostic d'entrée." },
      { code: "PED", type: "diag", titre: "Entrée piéton activée", action: "Diagnostic d'entrée." },
      { code: "TIME", type: "diag", titre: "Entrée TIMER activée", action: "Diagnostic d'entrée." },
      { code: "STOP", type: "diag", titre: "Entrée STOP activée", action: "Contact 70-71 ouvert : pont usine retiré ou arrêt actionné." },
      { code: "PHOT", type: "diag", titre: "Photocellule PHOT activée", action: "Faisceau coupé ou pont 70-72 retiré." },
      { code: "PHOP", type: "diag", titre: "Photocellule ouverture activée", action: "Faisceau coupé." },
      { code: "PHCL", type: "diag", titre: "Photocellule fermeture activée", action: "Faisceau coupé." },
      { code: "BAR", type: "diag", titre: "Bord sensible activé", action: "Bord actionné ou pont 70-73 retiré (SAFE 2 en BAR par défaut)." },
      { code: "BAR 2", type: "diag", titre: "Bord sur moteur slave", action: "Vantaux opposés : bord du moteur slave. Code non retrouvé dans la notice D814459 (repris de l'ancienne D811980), à confirmer." },
      { code: "SET", type: "diag", titre: "Attente d'une manœuvre complète", action: "La carte attend une ouverture-fermeture complète sans arrêt pour apprendre le couple. Détection d'obstacle INACTIVE pendant ce temps." },
      { code: "ER01", type: "erreur", titre: "Test photocellules échoué", action: "Vérifier le branchement des photocellules et la configuration des entrées de sécurité (SAFE 1/2)." },
      { code: "ER02", type: "erreur", titre: "Test bord échoué", action: "Vérifier le branchement du bord et la configuration." },
      { code: "ER03", type: "erreur", titre: "Test photocellules ouverture échoué", action: "Vérifier branchement et paramètres / logiques." },
      { code: "ER04", type: "erreur", titre: "Test photocellules fermeture échoué", action: "Vérifier branchement et paramètres / logiques." },
      { code: "ER05", type: "erreur", titre: "Test bord moteur slave échoué", action: "Vantaux opposés : vérifier le bord et sa configuration. Code non retrouvé dans la notice D814459 (repris de l'ancienne D811980), à confirmer." },
      { code: "ER06", type: "erreur", titre: "Test bord 8K2 échoué", action: "Vérifier le bord résistif 8,2 kΩ et sa configuration." },
      { code: "ER1x", type: "erreur", titre: "Erreur test matériel de la carte", action: "Vérifier les connexions moteur. Si ça persiste : problème carte, assistance technique." },
      { code: "ER3x", type: "erreur", titre: "Inversion sur obstacle (ampérostop)", action: "Rechercher un obstacle ou point dur sur la course." },
      { code: "ER4x", type: "erreur", titre: "Protection thermique", action: "Laisser refroidir l'automatisme." },
      { code: "ER5x", type: "erreur", titre: "Communication avec dispositifs distants", action: "Vérifier la liaison série avec les cartes d'extension et accessoires." },
      { code: "ER07", type: "erreur", titre: "Test bord ouverture échoué", action: "Vérifier la connexion des bords sensibles et/ou la configuration des paramètres/logiques (SAFE)." },
      { code: "ER08", type: "erreur", titre: "Test bord fermeture échoué", action: "Vérifier la connexion des bords sensibles et/ou la configuration des paramètres/logiques (SAFE)." },
      { code: "ER09", type: "erreur", titre: "Court-circuit entre 2 entrées de sécurité adjacentes", action: "Vérifier le raccordement des entrées de sécurité." },
      { code: "ER72", type: "erreur", titre: "Incohérence des paramètres / logiques de la centrale", action: "OK confirme les configurations détectées et la carte continue de fonctionner avec. Contrôler ensuite tous les paramètres et logiques." },
      { code: "ER73", type: "erreur", titre: "Erreur dans les paramètres de D-track", action: "OK : la carte repart avec D-track par défaut. Faire ensuite un autoset." },
      { code: "ER83", type: "erreur", titre: "Erreur de mémoire EEPROM", action: "Vérifier que la carte mémoire est bien insérée, couper et rallumer. Si ça persiste : assistance technique." },
      { code: "ER8x · ER9x", type: "erreur", titre: "Erreur interne de supervision du système", action: "Couper et rallumer la carte. Si ça persiste : assistance technique (x = 0 à 9, A à F)." },
      { code: "ERF2", type: "erreur", titre: "Surcharge du boîtier d'alimentation", action: "Contrôler le moteur et l'alimentation ; couper et rallumer." },
      { code: "ERF3", type: "erreur", titre: "Configuration des logiques incorrecte (entrées SAFE, type de moteur)", action: "Vérifier la bonne configuration des logiques SAFE et du type de moteur." },
      { code: "ERF4", type: "erreur", titre: "Surcharge sur la sortie d'alimentation des auxiliaires", action: "Vérifier le raccordement de l'alimentation des auxiliaires et leur consommation totale (24 V, 0,5 A max)." },
      { code: "ERF9", type: "erreur", titre: "Surcharge sur la sortie serrure électrique", action: "Vérifier les branchements de la serrure et qu'elle est adaptée." },
      { code: "BARO · BARC", type: "diag", titre: "Bord activé uniquement à l'ouverture / à la fermeture", action: "Entrée BAR avec inversion activée seulement en ouverture (BARO) ou en fermeture (BARC) : bord actionné, ou pont 70-73 retiré." },
      { code: "rLS", type: "diag", titre: "Déblocage mécanique du moteur activé (Ares Veloce BT B 500 / 1000)", action: "Moteur débloqué : le rebloquer, vérifier le contact de déblocage." },
      { code: "C · O", type: "diag", titre: "Fin de course fermeture (C) / ouverture (O) actif", action: "Un « C » ou un « O » seul à l'écran indique l'activation de l'entrée de fin de course (SWC / SWO) : portail fermé = C, ouvert = O. Rien d'affiché = portail à mi-course." },
      { code: "Point (.)", type: "afficheur", titre: "Point au dernier chiffre : mode basse consommation actif", action: "Normal : après 10 s moteur à l'arrêt, les bornes 50-51 ne sont plus alimentées (PSAVE 1). Pour régler des accessoires (alignement photocellules) ou si un accessoire exige une alimentation continue (récepteur radio, bord actif) : PSAVE 0." },
      { code: "KO", type: "afficheur", titre: "Autoset interrompu", action: "Appui simultané sur + et − pendant l'autoset : relancer." },
      { code: "BLOC", type: "afficheur", titre: "Accès bloqué", action: "10 mots de passe faux consécutifs : attendre 3 minutes. Mot de passe par défaut : 1234." }
    ],
    parametres: {
      intro: "Notice D814459. Trois menus : PARAM (valeurs chiffrées), LOGIC (réglages à choix) et RADIO. Valeur usine = « usine ». Après modification d'un paramètre de course ou de vitesse, refaire un autoset.",
      navigation: [
        "OK deux fois : accès au menu avancé (PARAM, LOGIC, RADIO, DEFAULT, LANGUE, AUTOSET, STAT, PASSWORD). OK une fois : menu simplifié.",
        "+ / − : naviguer dans le menu ou changer la valeur. OK : entrer / confirmer.",
        "+ et − ensemble : sortir (ESC).",
        "Avec un niveau de protection 1 à 4 (logique niv prot), un mot de passe est demandé (usine 1234). Après 10 essais faux : BLOC pendant 3 min.",
        "Menu STAT : version du logiciel, nombre de manœuvres (en centaines), nombre de radiocommandes, 30 dernières erreurs (01 = la plus récente)."
      ],
      groupes: [
        { nom: "Temps", items: [
          { code: "tcA", def: "10", titre: "Temps de fermeture automatique (s)", valeurs: [["0–120", "Temps d'attente avant la fermeture automatique. Actif si la logique tcA = 1."]] },
          { code: "PEd tcA", def: "0", titre: "Fermeture automatique après ouverture piéton (s)", valeurs: [["0–120", "À 0, le temps est le même que pour la manœuvre non piéton."]] },
          { code: "t EuAc FEU", def: "40", titre: "Temps d'évacuation de la zone du feu (s)", valeurs: [["1–180", "Évacuation de la zone concernée par la circulation réglée par le feu."]] },
          { code: "t.EcLAirAGE", def: "90", titre: "Temps d'allumage de la lumière de courtoisie (s)", valeurs: [["30–300", "Durée d'allumage de la lumière de courtoisie."]] },
          { code: "t.Sortie", def: "10", titre: "Temps d'activation de la sortie temporisée (s)", valeurs: [["1–240", "Durée d'activation de la sortie du canal radio temporisé."]] },
          { code: "EntrEtien", def: "0", titre: "Seuil de manœuvres avant demande d'entretien (centaines)", valeurs: [["0–250", "Nombre de manœuvres après lequel la demande d'entretien est signalée sur la sortie AUX configurée en Entretien ou Clignotant et Entretien."]] }
        ]},
        { nom: "Course : espaces, ouverture partielle, vitesse", items: [
          { code: "ESP rAL ouv", def: "5", titre: "Espace de ralentissement à l'ouverture (%)", valeurs: [["1–100", "Pourcentage de la course totale. Si le calcul donne moins de 30 cm, il est ramené à 30 cm."]],
            note: "Refaire une manœuvre complète sans interruption après modification. Pendant le « SET » à l'écran, la détection d'obstacle n'est pas active. Actionneurs à butées intégrées : ralentissement toujours actif, valeur supérieure à 5." },
          { code: "ESP rAL FErM", def: "5", titre: "Espace de ralentissement à la fermeture (%)", valeurs: [["1–100", "Pourcentage de la course totale. Minimum 30 cm."]],
            note: "Mêmes remarques que pour l'ouverture." },
          { code: "ESP dEcE.", def: "25", titre: "Espace de décélération (%)", valeurs: [["0–100", "Passage de la vitesse de régime à la vitesse de ralentissement, à l'ouverture et à la fermeture."]],
            note: "Manœuvre complète sans interruption après modification." },
          { code: "ouv PArtiELLE", def: "30", titre: "Ouverture partielle (%)", valeurs: [["10–100", "Pourcentage de l'ouverture totale, avec la commande piéton PED."]] },
          { code: "vit ouv", def: "100", titre: "Vitesse à l'ouverture (%)", valeurs: [["15–100", "Pourcentage de la vitesse maximale du moteur."]], note: "Manœuvre complète sans interruption après modification." },
          { code: "vit FErM", def: "100", titre: "Vitesse à la fermeture (%)", valeurs: [["15–100", "Pourcentage de la vitesse maximale du moteur."]], note: "Manœuvre complète sans interruption après modification." },
          { code: "vit rALL", def: "15", titre: "Vitesse de ralentissement (%)", valeurs: [["15–25", "Deimos Ultra BT B 400 / 600 : 15 à 25."], ["10–25", "Ares Ultra BT B 1000 / 1500 : 10 à 25."]],
            note: "Vitesse à l'ouverture et à la fermeture pendant le ralentissement, en pourcentage de la vitesse maximale. Manœuvre complète sans interruption après modification." }
        ]},
        { nom: "Forces", items: [
          { code: "ForcE ouv", def: "50", titre: "Force du vantail à l'ouverture (%)", valeurs: [["1–100", "Force fournie en plus de celle mémorisée à l'autoset, avant d'engendrer une alarme d'obstacle. Réglé automatiquement par l'autoset."]],
            note: "Influence directement la force d'impact : vérifier qu'elle respecte les normes (EN 12453 / 12445) ; au besoin poser des dispositifs anti-écrasement (bords déformables)." },
          { code: "ForcE FErM", def: "50", titre: "Force du vantail à la fermeture (%)", valeurs: [["1–100", "Idem, à la fermeture. Réglé automatiquement par l'autoset."]], note: "Même remarque sur les forces d'impact." },
          { code: "ForcE rAL ouv", def: "50", titre: "Force du vantail à l'ouverture en ralentissement (%)", valeurs: [["1–100", "Réglé automatiquement par l'autoset."]], note: "Même remarque sur les forces d'impact." },
          { code: "ForcE rAL FErM", def: "50", titre: "Force du vantail à la fermeture en ralentissement (%)", valeurs: [["1–100", "Réglé automatiquement par l'autoset."]], note: "Même remarque sur les forces d'impact." },
          { code: "ForcE PrESSion Suc", def: "100", titre: "Force du vantail sous pression en fin de course de fermeture (%)", valeurs: [["0–100", "Force exercée par le vantail pendant la pression sur le fin de course de fermeture (logique PrESS Suc)."]] }
        ]},
        { nom: "Logiques : fermeture et mouvement", items: [
          { code: "tcA (logique)", def: "0", titre: "Fermeture automatique", valeurs: [["0", "Logique non activée."], ["1", "Fermeture automatique activée (temps réglé par le paramètre tcA)."]] },
          { code: "P SAuE", def: "1", titre: "Activation du Power Down (basse consommation)", valeurs: [
            ["0", "Power Down désactivé : accessoires toujours alimentés. Consommation en attente supérieure à 0,5 W."],
            ["1", "Power Down activé : bornes 50-51 coupées 10 s après l'arrêt du moteur (un point s'affiche à l'écran)."]],
            note: "Pour régler des accessoires (alignement photocellules) : PSAVE 0, régler, puis PSAVE 1. Accessoires à alimentation continue (récepteur radio, bords radio actifs) : PSAVE 0." },
          { code: "UL ink 1", def: "0", titre: "Protocole U-Link", valeurs: [
            ["0", "Les deux connecteurs U-Link prennent en charge le nouveau protocole U-Link2."],
            ["1", "Protocole U-Link (version précédente) sur le connecteur 1 de la carte en option ; la version précédente ne peut être activée que sur le connecteur 1."]] },
          { code: "FErm rAP", def: "0", titre: "Fermeture rapide", valeurs: [
            ["0", "Logique non activée."], ["1", "Ferme 3 s après le dégagement des photocellules, sans attendre la fin du tcA."]] },
          { code: "bAtt conFiG", def: "0", titre: "Configuration batterie", valeurs: [
            ["0", "Aucune modification du fonctionnement."], ["1", "Ouverture totale et attente du retour de l'alimentation."],
            ["2", "Ouverture partielle (selon le paramètre ouverture partielle) et attente du retour de l'alimentation."], ["3", "Fermeture totale et attente du retour de l'alimentation."]] },
          { code: "Mouvt PAS A PAS", def: "0", titre: "Mouvement pas à pas", valeurs: [
            ["0", "Entrées Start E, Start I, Ped : logique à 4 pas (ouvre – stop – ferme – stop)."],
            ["1", "Logique à 3 pas : l'impulsion pendant la fermeture inverse le mouvement."],
            ["2", "Logique à 2 pas : à chaque impulsion, ouvre / ferme (inverse le mouvement)."]],
            note: "Tableau de la notice (2 / 3 / 4 pas) : fermé → ouvre ; à la fermeture → ouvre (2 et 3 pas) ou stop (4 pas) ; ouvert → ferme ; à l'ouverture → ferme (2 pas) ou stop + tca (3 et 4 pas) ; après stop → ouvre." },
          { code: "PrEAL", def: "0", titre: "Préalarme (préclignotement)", valeurs: [
            ["0", "Le clignotant s'allume au démarrage du moteur."], ["1–10", "Pré-alarme activée : le clignotant s'allume avant le démarrage, pendant 1 à 10 s."]] },
          { code: "HoMME Mort", def: "0", titre: "Homme mort", valeurs: [
            ["0", "Fonctionnement à impulsions."],
            ["1", "Homme mort : IC1 (61) = OPEN UP, IC2 (62) = CLOSE UP. La manœuvre continue tant que la touche est enfoncée. Dispositifs de sécurité NON activés."],
            ["2", "Homme mort urgence : fonctionnement normal à impulsions ; si la carte rate les tests de sécurité (photocellule ou bord, Er0x) 3 fois de suite, passe en homme mort jusqu'au relâchement. Sécurités non activées."],
            ["3", "Homme présent à la fermeture : ouverture automatique, la fermeture se poursuit tant que CLOSE est maintenu. Sécurités non activées pendant la fermeture."]] }
        ]},
        { nom: "Logiques : blocages d'impulsions et fonctions spéciales", items: [
          { code: "bL imP ouv", def: "0", titre: "Blocage des impulsions à l'ouverture", valeurs: [
            ["0", "L'impulsion des entrées Start E, Start I, Ped prend effet pendant l'ouverture."], ["1", "N'a pas d'effet pendant l'ouverture."]] },
          { code: "bL imP tcA", def: "0", titre: "Blocage des impulsions en pause TCA", valeurs: [
            ["0", "L'impulsion prend effet pendant la pause TCA."], ["1", "N'a pas d'effet pendant la pause TCA."]] },
          { code: "bL imP FErM", def: "0", titre: "Blocage des impulsions à la fermeture", valeurs: [
            ["0", "L'impulsion prend effet pendant la fermeture."], ["1", "N'a pas d'effet pendant la fermeture."]] },
          { code: "couP bEL ouv", def: "0", titre: "Coup de bélier à l'ouverture", valeurs: [
            ["0", "Désactivé."], ["1", "Avant d'ouvrir, le portail pousse environ 2 s en fermeture pour faciliter le déverrouillage de la serrure électrique."]],
            note: "Ne pas utiliser sans butées d'arrêt mécaniques adaptées." },
          { code: "couP bEL FErM", def: "0", titre: "Coup de bélier à la fermeture", valeurs: [
            ["0", "Désactivé."], ["1", "Avant de fermer, le portail pousse environ 2 s en ouverture pour faciliter le déverrouillage de la serrure."]],
            note: "Ne pas utiliser sans butées d'arrêt mécaniques adaptées." },
          { code: "MAint bLoc", def: "0", titre: "Maintien du blocage", valeurs: [
            ["0", "Désactivé."], ["1", "Moteur arrêté en ouverture ou fermeture complète depuis plus d'une heure : activé 3 s environ dans le sens de la butée, toutes les heures."]],
            note: "Ne pas utiliser sans butées d'arrêt mécaniques adaptées." },
          { code: "PrESS Suc", def: "0", titre: "Pression en fin de course de fermeture", valeurs: [
            ["0", "Le mouvement ne s'arrête que sur l'intervention du fin de course de fermeture (réglage très précis du fin de course nécessaire)."],
            ["1", "Pression du vantail sur la butée mécanique de fermeture, sans que cela soit pris pour un obstacle par l'ampérostop. Le vantail continue quelques secondes après l'interception du fin de course."]],
            note: "À utiliser avec une butée mécanique de fermeture." },
          { code: " icE", def: "0", titre: "Fonction Ice (basses températures)", valeurs: [
            ["0", "Seuil d'intervention de l'ampérostop fixe."],
            ["1", "À chaque départ, la centrale compense automatiquement le seuil d'intervention de l'ampérostop."]],
            note: "Vérifier que la force d'impact aux points prévus par EN 12445 reste inférieure à EN 12453 ; au doute, ajouter des sécurités. Après activation : refaire un autoset." },
          { code: "oPt ionS d'inStALLAt ion", def: "—", titre: "Options d'installation", valeurs: [["0 / 1", "Voir fig. E de la notice."]] }
        ]},
        { nom: "Entrées de sécurité et de commande", items: [
          { code: "1 SAFE", def: "0", titre: "Entrée de sécurité SAFE 1 (borne 72)", valeurs: [
            ["0", "PHOT : photocellule."], ["1", "PHOT TEST : photocellule vérifiée."], ["2", "PHOT OP : activée uniquement à l'ouverture."], ["3", "PHOT OP TEST : vérifiée, ouverture seulement."],
            ["4", "PHOT CL : activée uniquement à la fermeture."], ["5", "PHOT CL TEST : vérifiée, fermeture seulement."], ["6", "BAR : bord sensible."], ["7", "BAR TEST : bord sensible vérifié."]],
            note: "Les valeurs 8 à 15 existent dans la notice pour SAFE 2 (voir ci-dessous) ; seules 0 à 7 sont listées pour SAFE 1." },
          { code: "2 SAFE", def: "6", titre: "Entrée de sécurité SAFE 2 (borne 73)", valeurs: [
            ["0–7", "Comme SAFE 1 (0 PHOT … 7 BAR TEST)."],
            ["8", "BAR 8k2 : bord résistif 8,2 kΩ (pas activable sur SAFE 11 et 13)."],
            ["9", "BAR OP : bord, inversion activée seulement à l'ouverture ; à la fermeture, arrêt du mouvement."],
            ["10", "BAR OP TEST : bord vérifié, inversion seulement à l'ouverture."],
            ["11", "BAR OP 8k2 : bord 8k2, inversion seulement à l'ouverture."],
            ["12", "BAR CL : bord, inversion activée seulement à la fermeture ; à l'ouverture, arrêt."],
            ["13", "BAR CL TEST : bord vérifié, inversion seulement à la fermeture."],
            ["14", "BAR CL 8k2 : bord 8k2, inversion seulement à la fermeture."],
            ["15", "Non disponible sur SAFE 2 (valeur réservée à SAFE 10-13)."]],
            note: "Inversion de 2 s au contact du bord. Bords de type D non vérifiés : entretien obligatoire au moins tous les 6 mois (EN 12453)." },
          { code: "10 SAFE · 11 SAFE · 12 SAFE · 13 SAFE", def: "15", titre: "Entrées de sécurité SAFE 10 à 13 (carte d'extension, bornes 77 à 80)", valeurs: [
            ["0–15", "Mêmes valeurs que SAFE 2, plus 15 = désactivée (à laisser si pas de carte d'extension). Les valeurs 8, 11 et 14 (bords 8k2) ne sont pas activables sur SAFE 11 et SAFE 13."]],
            note: "Uniquement avec carte d'extension." },
          { code: "1 ic", def: "0", titre: "Entrée de commande IC 1 (borne 61)", valeurs: [
            ["0", "START E : start externe (gestion du feu)."], ["1", "START I : start interne (gestion du feu)."],
            ["2", "OPEN : ouverture. Si l'entrée reste fermée, les vantaux restent ouverts jusqu'à l'ouverture du contact (puis fermeture après tca)."],
            ["3", "CLOSE : fermeture."]],
            note: "Les valeurs 4 à 6 sont communes avec IC 2 (voir ci-dessous)." },
          { code: "2 ic", def: "4", titre: "Entrée de commande IC 2 (borne 62)", valeurs: [
            ["0–3", "Comme IC 1 (START E, START I, OPEN, CLOSE)."], ["4", "PED : ouverture piétonne partielle (usine)."],
            ["5", "TIMER : analogue à OPEN, fermeture garantie même après une panne de courant."], ["6", "TIMER PED : ouverture piétonne ; fermeture garantie même après une panne de courant."]] },
          { code: "10 ic · 11 ic", def: "2 · 3", titre: "Entrées de commande IC 10 (64) et IC 11 (65) (carte d'extension)", valeurs: [
            ["0–6", "Mêmes valeurs que IC 2 ; usine IC 10 = 2 (OPEN), IC 11 = 3 (CLOSE)."]], note: "Uniquement avec carte d'extension." },
          { code: "1ch", def: "0", titre: "1er canal radio", valeurs: [
            ["0", "START E."], ["1", "START I."], ["2", "OPEN."], ["3", "CLOSE."], ["4", "PED."], ["5", "STOP."], ["6", "AUX 1 (**)."], ["7", "Non utilisé."], ["8", "AUX 11 (**) (carte d'extension)."], ["9", "AUX 2 (**)."], ["10–11", "Non utilisé."], ["12", "Lumière de courtoisie (logique bistable, au moins une sortie AUX configurée en lumière de courtoisie)."]],
            note: "(**) Actif seulement si la sortie est configurée en canal radio monostable, lumière de courtoisie, lumière de zone, lumière d'escalier, canal radio bistable ou temporisé." },
          { code: "2ch", def: "4", titre: "2e canal radio", valeurs: [["0–12", "Mêmes valeurs que 1ch (usine : PED)."]] },
          { code: "3ch", def: "9", titre: "3e canal radio", valeurs: [["0–12", "Mêmes valeurs que 1ch (usine : AUX 2)."]] },
          { code: "4ch", def: "5", titre: "4e canal radio", valeurs: [["0–12", "Mêmes valeurs que 1ch (usine : STOP)."]] }
        ]},
        { nom: "Sorties AUX et serrure", items: [
          { code: "1AUX", def: "6", titre: "Sortie AUX 1 (bornes 20-21)", valeurs: [
            ["0", "Canal radio monostable (contact fermé 1 s)."], ["1", "SCA : voyant portail ouvert (fermé pendant l'ouverture et portail ouvert, intermittent à la fermeture, ouvert portail fermé)."],
            ["2", "Lumière de courtoisie (fermé pendant le temps t.EcLAirAGE)."], ["3", "Lumière de zone (fermé pendant toute la manœuvre)."], ["4", "Lumière d'escalier (fermé 1 s après le début de la manœuvre)."],
            ["5", "Alarme portail ouvert (fermé si le portail reste ouvert 2 fois plus que le TCA)."], ["6", "Clignotant (fermé pendant le mouvement) — usine."], ["7–8", "Non utilisé."],
            ["9", "Entretien (fermé quand le seuil EntrEtien est atteint)."], ["10", "Clignotant et entretien (fermé pendant le mouvement ; à la fin de manœuvre, portail fermé : 4 fois pendant 10 s puis ouvert 5 s pour signaler l'entretien)."],
            ["11–12", "Non utilisé."], ["13", "État portail fermé."], ["14", "Canal radio bistable."], ["15", "Canal radio temporisé (durée t.Sortie)."], ["16", "État portail ouvert."]] },
          { code: "2AUX", def: "0", titre: "Sortie AUX 2 (bornes 26-27)", valeurs: [["0–16", "Mêmes valeurs que 1AUX (usine : canal radio monostable)."]] },
          { code: "10AUX", def: "3", titre: "Sortie AUX 10 (bornes 22-23, carte d'extension)", valeurs: [["0–16", "Mêmes valeurs que 1AUX (usine : lumière de zone)."]], note: "Uniquement avec carte d'extension." },
          { code: "SErrurE", def: "0", titre: "Type de serrure (bornes 28-29, carte d'extension)", valeurs: [
            ["0", "Serrure électrique à déclic 12 V."], ["1", "Serrure à aimant 12 V, max 0,5 A (Power Down non activé)."],
            ["2", "Serrure électrique à déclic 24 V."], ["3", "Serrure à aimant 24 V, max 0,25 A (Power Down non activé)."], ["4", "Serrure à traction : activée pendant toute la manœuvre, max 1 A pendant 1 s puis 0,2 A."]],
            note: "Uniquement avec carte d'extension." }
        ]},
        { nom: "Réseau, protection, feux", items: [
          { code: "niv Prot", def: "0", titre: "Niveau de protection (mot de passe)", valeurs: [
            ["0", "Pas de mot de passe pour les menus. Mémorisation radio par touche cachée et touche normale, à proximité de la carte (10 s) ; saisie automatique des replay ; modification des paramètres via le réseau U-Link possible."],
            ["1", "Mot de passe demandé pour les menus (usine 1234). Les fonctions radio, replay et U-Link restent comme au niveau 0."],
            ["2", "Non utilisé."],
            ["3", "Mot de passe demandé ; mémorisation par radio désactivée ; saisie automatique des replay désactivée."],
            ["4", "Mot de passe demandé ; mémorisation par radio désactivée ; replay désactivé ; modification via U-Link désactivée. Les radiocommandes ne se mémorisent que via le menu Radio."]] },
          { code: "ModE SEriE", def: "0", titre: "Mode série (réseau BFT)", valeurs: [
            ["0", "ESCLAVE : la carte reçoit et transmet commandes, diagnostic, etc."],
            ["1", "MAÎTRE standard : envoie des commandes d'activation (START, OPEN, CLOSE, PED, STOP) à d'autres cartes."],
            ["2", "ESCLAVE vantaux opposés sur réseau local (sans module intelligent)."],
            ["3", "MAÎTRE vantaux opposés sur réseau local (sans module intelligent)."]],
            note: "Vantaux opposés (fig. L) : maître = mode série 3, UL ink 1 = 1, adresse 0, 1 SAFE = 1, 2 SAFE = 7 ; esclave = mode série 2, UL ink 1 = 1, 2 SAFE identique au maître. Module B EBA RS485 LINK requis (DIP 1 à 4) ; autoset à faire séparément sur chaque vantail avant de régler les vantaux opposés." },
          { code: "AdrESSE", def: "0", titre: "Adresse sur le réseau BFT", valeurs: [["0–119", "Adresse de la carte dans une connexion de réseau BFT local."]] },
          { code: "FEu PrE", def: "0", titre: "Clignotement préalable du feu", valeurs: [["0", "Clignotement préalable exclu."], ["1", "Lumières rouges clignotantes 3 s au début de la manœuvre."]] },
          { code: "FEu rouGE", def: "0", titre: "Feu rouge fixe", valeurs: [["0", "Lumières rouges éteintes portail fermé."], ["1", "Lumières rouges allumées portail fermé."]] }
        ]},
        { nom: "Menu radio, retour usine, langue", items: [
          { code: "rAd io", def: "—", titre: "Menu radio", valeurs: [
            ["AdJ 1", "Ajouter touche 1ch : associe la touche voulue à la commande du 1er canal radio."],
            ["AdJ 2 · 3 · 4", "Ajouter touche 2ch / 3ch / 4ch (même principe)."],
            ["EFFAcEr touT", "Supprimer la liste : efface TOUTES les radiocommandes de la mémoire du récepteur."],
            ["EFFAcEr", "Éliminer une radiocommande (si replay désactivé) : écrire sa position ou appuyer sur sa touche."]],
            note: "Raccourcis : + = ajout 1er canal ; − = ajout 2e canal (≥ 2 s selon la p. 49, plus de 5 s selon la figure p. 4) ; + et − plus de 5 s = suppression des émetteurs." },
          { code: "dEFAuLt", def: "—", titre: "Retour aux valeurs usine", valeurs: [["OK", "Rétablit la centrale aux valeurs préréglées. Faire ensuite un nouvel autoset. Efface aussi toutes les radiocommandes."]],
            note: "Autre méthode : secteur coupé, contact STOP ouvert (pont 70-71 retiré), maintenir − et OK, remettre sous tension : rSt, valider par OK dans les 3 s." },
          { code: "LAnGuE", def: "—", titre: "Langue de l'afficheur", valeurs: [["itA · FrA · dEu · EnG · ESP", "Italien, français, allemand, anglais, espagnol."]] },
          { code: "AutoSEt", def: "—", titre: "Autoset", valeurs: [["OK", "La carte exécute une ouverture puis une fermeture (1 à 3 manœuvres) et règle automatiquement les forces. Détection d'obstacle inactive pendant l'autoset."]] }
        ]}
      ]
    },
    bornier: {
      groupes: [
        { nom: "Puissance", bornes: [
          { n: "L · N", label: "Secteur", desc: "220-230 V 50/60 Hz (versions 120 V). Câble multipolaire 2 x 1,5 mm² minimum, mini H05RN-F", t: "alim" },
          { n: "10 · 11", label: "Moteur", desc: "MOT + / MOT −. Câble 1,5 mm² minimum, mini H05RN-F", t: "moteur" }
        ]},
        { nom: "Sorties AUX", bornes: [
          { n: "20 · 21", label: "AUX 1", desc: "Contact alimenté 24 V NO, 1 A max. Défaut : clignotant (logique 1AUX)", t: "sortie" },
          { n: "26 · 27", label: "AUX 2", desc: "Contact libre NO, 24 V 1 A max. Notice p. 52 : défaut 2e canal radio ; paramètres p. 58 : 2AUX = 0 (canal radio monostable), commandé par 3ch en usine", t: "sortie" }
        ]},
        { nom: "Alimentation accessoires", bornes: [
          { n: "50", label: "24 V −", desc: "Alimentation accessoires", t: "alim" },
          { n: "51", label: "24 V +", desc: "Alimentation accessoires (0,5 A max)", t: "alim" },
          { n: "52", label: "24 V Safe +", desc: "Alimentation des TX vérifiés (photocellules, bords) — active seulement pendant la manœuvre", t: "alim" }
        ]},
        { nom: "Commandes", bornes: [
          { n: "60", label: "COM", desc: "Commun IC1 / IC2", t: "autre" },
          { n: "61", label: "IC 1", desc: "NO configurable. Défaut : START E", t: "no" },
          { n: "62", label: "IC 2", desc: "NO configurable. Défaut : PED (piéton)", t: "no" }
        ]},
        { nom: "Sécurités", bornes: [
          { n: "70", label: "COM", desc: "Commun STOP / SAFE 1 / SAFE 2", t: "autre" },
          { n: "71", label: "STOP", desc: "NF. Inutilisé → laisser le pont usine 70-71", t: "nf" },
          { n: "72", label: "SAFE 1", desc: "NF configurable (la notice écrit N.O. p. 52, les schémas montrent NF). Défaut : PHOT. Inutilisé → pont usine 70-72", t: "nf" },
          { n: "73", label: "SAFE 2", desc: "NF configurable (la notice écrit N.O. p. 52, les schémas montrent NF). Défaut : BAR. Inutilisé → pont usine 70-73", t: "nf" }
        ]},
        { nom: "Antenne", bornes: [
          { n: "Y · #", label: "Antenne", desc: "Antenne accordée 433 MHz, câble RG58 (# = blindage)", t: "autre" }
        ]}
      ],
      fusibles: "F1 0,63 A T (220-230 V) / 1,6 A T (120 V) · F3 1,25 A T (valeurs de l'ancienne notice D811980, non reprises dans D814459). Consommation en attente 0,43 W. Alimentation accessoires 24 V ≤ 0,5 A",
      notes: [
        "Ponts précâblés d'usine : 70-71, 70-72, 70-73 — les retirer seulement si la borne est utilisée. Ne pas relier la borne 60 (COM IC) à la borne 70 (COM sécurités).",
        "Changement de sens : ne pas intervertir les étriers de fin de course, utiliser la logique d'inversion de direction (dir).",
        "Afficheur éteint : + (moins de 2 s) = OPEN / STOP, − (moins de 2 s) = CLOSE / STOP. + = ajout du 1er canal radio, − = 2e canal (≥ 2 s selon la p. 49, plus de 5 s selon la figure p. 4 : la notice se contredit). + et − plus de 5 s = suppression des émetteurs.",
        "Puissances : Deimos 400 = 80 W, Deimos 600 = 100 W, Ares Ultra 1000 = 130 W, Ares Ultra 1500 = 160 W, Ares Veloce 500 et 1000 = 160 W. La notice D814459 ne cite que des BT B pour les modèles (BT A = nom de la notice).",
        "Carte d'extension (option) : ajoute SAFE 10 à 13, IC 10 et 11, AUX 10 et serrure électrique (bornes 22-23, 28-29, 77-80, 64-65). Sécurités NF de type D (EN 12453) non vérifiées : entretien obligatoire au moins tous les 6 mois.",
        "Bornes d'entrées de sécurité configurables : SAFE 1 = 72, SAFE 2 = 73 (logiques 1SAFE / 2SAFE, usine PHOT / BAR)."
      ]
    },
    apprentissage: {
      avant: [
        "Faire l'autoset avec le moteur froid (pas après une série de manœuvres).",
        "Menu simplifié : régler la langue, dir (0 = ouverture à droite, 1 = ouverture à gauche, fig. E) et éventuellement le preset : rAU / rSAU (résidentiel auto / semi-auto), cAU / cSAU (collectif auto / semi-auto), indU (homme présent). Presets : rAU et cAU = tcA 1 + pas à pas 1 ; cAU et cSAU ajoutent préalarme 3 et verrouillage impulsions ouverture 1 ; indU = homme mort 1. Séquence conseillée : 1) autoset, 2) radiocommandes, 3) réglages."
      ],
      etapes: [
        "Aller dans le menu AUTOSET et appuyer sur OK.",
        "L'afficheur montre « .... .... .... » : la carte fait une ouverture puis une fermeture (1 à 3 manœuvres).",
        "Pendant ce temps : ne pas couper les photocellules, ne pas utiliser START, STOP ni l'afficheur.",
        "+ et − ensemble = arrêt et sortie, l'afficheur indique KO.",
        "À la fin, contrôler les valeurs de force réglées et mesurer les efforts selon EN 12453."
      ],
      apres: [
        "Attention : détection d'obstacle inactive pendant l'autoset, surveiller la zone.",
        "Retour usine (efface aussi les télécommandes) : couper l'alimentation, ouvrir l'entrée STOP, maintenir − et OK, remettre sous tension ; RST s'affiche, valider par OK dans les 3 s.",
        "Menu STAT : 30 dernières erreurs (2 premiers chiffres = rang, 2 derniers = code, 01 = la plus récente).",
        "Après un menu DEFAULT, refaire un AUTOSET.",
        "Autoset : OK plus de 5 s (écran éteint) lance aussi l'autoset. 1 à 3 manœuvres nécessaires. Pendant l'autoset, la détection d'obstacle n'est pas active.",
        "Réglage usine (nouvelle notice) : couper le secteur, ouvrir le contact STOP (retirer le pont 70-71), maintenir − et OK, remettre sous tension : rSt s'affiche, valider par OK dans les 3 s (YES / ok). Efface aussi les télécommandes.",
        "Après le retour usine ou après avoir modifié ESP RAL OUV, ESP RAL FERM, ESP DECE., VIT OUV, VIT FERM, VIT RALL : refaire un autoset (manœuvre complète sans interruption)."
      ]
    }
  },
  {
    id: "bft-leo-b-cbb",
    nom: "LEO B CBB",
    modeles: "LEO B CBB 3 230 L02 · L04 (230 V) · LEO B CBB 3 120 F02 · F04 (120 V)",
    type: "Portail coulissant — afficheur 4 caractères, touches + / − / OK",
    source: "Notice BFT D812161 00100_04 (LEO B CBB)",
    codes: [
      { code: "StrE", type: "diag", titre: "Entrée Start externe activée", action: "Diagnostic d'entrée (START E)." },
      { code: "Str I", type: "diag", titre: "Entrée Start interne activée", action: "Diagnostic d'entrée (START I)." },
      { code: "oPEn", type: "diag", titre: "Entrée OPEN activée", action: "Diagnostic d'entrée." },
      { code: "cLS", type: "diag", titre: "Entrée CLOSE activée", action: "Diagnostic d'entrée." },
      { code: "PEd", type: "diag", titre: "Entrée piéton PED activée", action: "Diagnostic d'entrée." },
      { code: "t IME", type: "diag", titre: "Entrée TIMER activée", action: "Diagnostic d'entrée." },
      { code: "StoP", type: "diag", titre: "Entrée STOP activée", action: "Contact 70-71 ouvert : pont retiré ou arrêt actionné." },
      { code: "Phot", type: "diag", titre: "Photocellule PHOT activée", action: "Faisceau coupé ou pont 70-72 retiré." },
      { code: "PhoP", type: "diag", titre: "Photocellule en ouverture (PHOT OP) activée", action: "Faisceau coupé." },
      { code: "PhcL", type: "diag", titre: "Photocellule en fermeture (PHOT CL) activée", action: "Faisceau coupé." },
      { code: "bAr", type: "diag", titre: "Linteau sensible BAR activé", action: "Bord actionné ou pont 70-74 retiré." },
      { code: "bAr 2", type: "diag", titre: "Linteau BAR sur moteur slave", action: "Connexion vantaux opposés : bord du moteur slave." },
      { code: "SwC", type: "diag", titre: "Fin de course fermeture du moteur", action: "Diagnostic fin de course (borne 42)." },
      { code: "SwO", type: "diag", titre: "Fin de course ouverture du moteur", action: "Diagnostic fin de course (borne 43)." },
      { code: "SEt", type: "diag", titre: "Attente d'une manœuvre complète", action: "La carte attend une ouverture-fermeture complète sans arrêt intermédiaire pour obtenir le couple nécessaire. Détection d'obstacle INACTIVE pendant ce temps." },
      { code: "Er01", type: "erreur", titre: "Essai photocellules échoué", action: "Vérifier la connexion des photocellules et/ou la configuration des logiques." },
      { code: "Er02", type: "erreur", titre: "Essai linteau échoué", action: "Vérifier la connexion des linteaux et/ou la configuration des logiques." },
      { code: "Er03", type: "erreur", titre: "Essai photocellules ouverture échoué", action: "Vérifier la connexion des photocellules et la configuration des paramètres / logiques." },
      { code: "Er04", type: "erreur", titre: "Essai photocellules fermeture échoué", action: "Vérifier la connexion des photocellules et la configuration des paramètres / logiques." },
      { code: "Er05", type: "erreur", titre: "Essai linteau sur moteur slave échoué", action: "Connexion vantaux opposés : vérifier le linteau et la configuration des paramètres / logiques." },
      { code: "Er06", type: "erreur", titre: "Essai linteau 8k2 échoué", action: "Vérifier le linteau résistif 8,2 kΩ et la configuration des paramètres / logiques." },
      { code: "Er1x", type: "erreur", titre: "Erreur essai matériel de la carte", action: "Vérifier les connexions sur le moteur. Problème matériel sur la carte : s'adresser au SAV (x = 0 à 9, A à F)." },
      { code: "Er3x", type: "erreur", titre: "Inversion pour obstacle (ampérostop)", action: "Vérifier les obstacles éventuels le long du parcours." },
      { code: "Er5x", type: "erreur", titre: "Erreur de communication avec dispositifs à distance", action: "Vérifier la connexion sur les dispositifs accessoires et/ou les cartes d'expansion connectés via série." },
      { code: "Er7x", type: "erreur", titre: "Erreur interne de contrôle / supervision du système", action: "Éteindre et rallumer la carte. Si le problème persiste : contacter le service après-vente." },
      { code: "BLOC", type: "afficheur", titre: "Accès bloqué", action: "10 mots de passe faux consécutifs : attendre 3 minutes avant de réessayer. Mot de passe par défaut : 1234." },
      { code: "RST", type: "afficheur", titre: "Retour aux valeurs usine en cours", action: "Procédure de rétablissement : valider par OK dans les 3 secondes. Efface aussi toutes les radiocommandes." },
      { code: "35.40", type: "afficheur", titre: "Nombre : seuil obstacle / force du moteur", action: "Affichage possible pendant la manœuvre sur LEO B CBB 3 230 L02 : seuil d'obstacle et force instantanée du moteur (voir Fig. 1 de la notice)." }
    ],
    parametres: {
      intro: "Notice D812161. Trois menus : PARAM (valeurs chiffrées, tableau A), LOGIC (réglages à choix, tableau B) et RADIO (tableau C). Les forces et le mode encodeur ne concernent que le LEO B CBB 3 230 L02 pour l'autoconfiguration. Valeur usine = « usine ».",
      navigation: [
        "OK : entrer dans le menu. + / − : naviguer ou changer la valeur. OK : confirmer. + et − ensemble : sortir.",
        "Menus de l'afficheur : PARAM, LOGIC, RADIO, DEFAULT, LANGUE, AUTOSET (L02 uniquement), STAT, PASSWORD.",
        "Mot de passe demandé si la logique niveau protection est à 1, 2, 3 ou 4 (usine 1234). Après 10 essais faux : BLOC pendant 3 min.",
        "STAT : version du logiciel, nombre de manœuvres (en centaines), nombre de radiocommandes, 30 dernières erreurs (2 premiers chiffres = rang, 2 derniers = code ; 01 = la plus récente).",
        "Attention : toute erreur de configuration de la sensibilité peut causer des dommages aux personnes, animaux et biens."
      ],
      groupes: [
        { nom: "Menu simplifié (un seul appui sur OK)", items: [
          { code: "LAnGuAGE", def: "—", titre: "Langue", valeurs: [["itA · FrA · dEu · EnG · ESP", "Italien, français, allemand, anglais, espagnol."]] },
          { code: "dIr", def: "drt", titre: "Sens d'ouverture", valeurs: [["drt", "Ouverture à droite (équivaut à inu.SEnS.ouv = 0)."], ["Gch", "Ouverture à gauche (équivaut à inu.SEnS.ouv = 1)."]] },
          { code: "PrESEt", def: "—", titre: "Préréglage de fonctionnement", valeurs: [
            ["Ar", "Automatique, résidentiel : tcA = 1, pas à pas = 1."],
            ["Sr", "Semi-automatique, résidentiel : tcA = 0, pas à pas = 0."],
            ["Ac", "Automatique, collectif : tcA = 1, pas à pas = 1, préalarme = 1, verrouillage impulsions ouverture = 1."],
            ["Sc", "Semi-automatique, collectif : tcA = 0, pas à pas = 0, préalarme = 1, verrouillage impulsions ouverture = 1."],
            ["ind", "Homme présent (HoMME Mort = 1)."]],
            note: "Pour tous les presets : tcA (temps) 40 s, évacuation sémaphore 40 s, ouverture partielle 20 %, encodeur 2, programmation radio 1. Temps de travail, ralentissements et forces sont réglés par l'autoconfiguration (L02). Les autres logiques (SAFE, IC, AUX 3, EXP, mode série…) restent inchangées." },
          { code: "AutoSEt", def: "—", titre: "Autoconfiguration (menu simplifié, L02 uniquement)", valeurs: [["ok", "1 à 3 manœuvres : ouverture automatique puis fermeture automatique."], ["ko", "Abandon."]] },
          { code: "MEN TELEC", def: "—", titre: "Mémorisation d'une radiocommande", valeurs: [["Touche cachée", "Appuyer sur la touche cachée de l'émetteur, la relâcher, puis appuyer sur la touche à mémoriser : ok 01 s'affiche."]] }
        ]},
        { nom: "Tableau A : temps et espaces", items: [
          { code: "ttrAv ouv", def: "300", titre: "Temps de travail à l'ouverture (s)", valeurs: [["5–300", "Temps maximum de travail des moteurs à l'ouverture. Réglé légèrement au-dessus du temps de la manœuvre complète ; modifié par l'autoconfiguration qui l'adapte au temps de travail détecté."]] },
          { code: "ttrAv FEr", def: "300", titre: "Temps de travail à la fermeture (s)", valeurs: [["5–300", "Idem à la fermeture."]] },
          { code: "tcA", def: "40", titre: "Temps de fermeture automatique (s)", valeurs: [["0–180", "Temps d'attente avant la fermeture automatique."]] },
          { code: "t.EuAc.SEm", def: "40", titre: "Temps d'évacuation de la zone du sémaphore (s)", valeurs: [["1–180", "Évacuation de la zone concernée par la circulation réglée par le sémaphore."]] },
          { code: "ESP rAL ouv", def: "0 (120 V F02) · 30 (autres modèles)", titre: "Espace de ralentissement à l'ouverture (%)", valeurs: [["0–99", "Pourcentage de la course totale. Usine : 0 sur LEO B CBB 3 120 F02, 30 sur les autres modèles."]], note: "L'autoconfiguration modifie la valeur si le ralentissement ne permet pas au moins 50 cm à vitesse réduite. Après modification : faire une manœuvre complète sans interruption. Pendant « SET » à l'écran, la détection d'obstacle n'est pas active." },
          { code: "ESP rAL FErM", def: "0 (120 V F02) · 30 (autres)", titre: "Espace de ralentissement à la fermeture (%)", valeurs: [["0–99", "Idem à la fermeture."]], note: "Mêmes remarques que pour l'ouverture." },
          { code: "ouv. PArtiELLE", def: "20", titre: "Ouverture partielle (%)", valeurs: [["10–50", "Pourcentage de l'ouverture totale, à la suite de la commande piéton PED."]] },
          { code: "EntrEtiEn", def: "0", titre: "Seuil de manœuvres avant demande d'entretien (centaines)", valeurs: [["0–250", "Nombre de manœuvres après lequel la demande d'entretien est signalée sur la sortie AUX configurée comme Entretien ou Clignotant et Entretien."]] }
        ]},
        { nom: "Tableau A : forces et freinage", items: [
          { code: "ForcE ouv", def: "41 (L02) · 75 (autres)", titre: "Force des vantaux à l'ouverture (%)", valeurs: [["1–99", "Sur LEO B CBB 3 230 L02 : pourcentage de force fourni en plus de celle mémorisée à l'autoconfiguration (mis à jour par elle), avant de générer une alarme d'obstacle. Réglé automatiquement par l'autoconfiguration."]], note: "Influence directement la force d'impact : vérifier qu'elle respecte les normes (EN 12453 pour les limites, EN 12445 pour la mesure) ; au besoin poser des dispositifs anti-écrasement (bords déformables)." },
          { code: "ForcE FErM", def: "41 (L02) · 75 (autres)", titre: "Force des vantaux à la fermeture (%)", valeurs: [["1–99", "Idem à la fermeture."]], note: "Même remarque sur les forces d'impact." },
          { code: "ForcE rAL ouv", def: "75", titre: "Force à l'ouverture en ralentissement (%)", valeurs: [["1–99", "Force des vantaux à l'ouverture à la vitesse de ralentissement. Sur L02 : pourcentage de force fourni en plus de celle mémorisée ; réglé par l'autoconfiguration."]], note: "Même remarque sur les forces d'impact." },
          { code: "ForcE rAL FErM", def: "75", titre: "Force à la fermeture en ralentissement (%)", valeurs: [["1–99", "Idem à la fermeture."]], note: "Même remarque sur les forces d'impact." },
          { code: "FrE In", def: "0", titre: "Freinage (%)", valeurs: [["1–99", "Pourcentage de freinage appliqué pour arrêter le mouvement des moteurs."]] }
        ]},
        { nom: "Tableau B : fermeture et mouvement", items: [
          { code: "tcA", def: "0", titre: "Fermeture automatique", valeurs: [["0", "Logique non active."], ["1", "Active la fermeture automatique."]] },
          { code: "FErm rAP", def: "0", titre: "Fermeture rapide", valeurs: [["0", "Logique non active."], ["1", "Ferme 3 s après le dégagement des photocellules, sans attendre la fin du TCA configuré."]] },
          { code: "Mouvt PAS A PAS", def: "0", titre: "Mouvement pas à pas", valeurs: [
            ["0", "Entrées Start E, Start I, Ped : logique à 4 pas."],
            ["1", "Logique à 3 pas : l'impulsion pendant la phase de fermeture inverse le mouvement."],
            ["2", "Logique à 2 pas : à chaque impulsion, le mouvement est inversé."]],
            note: "Tableau 2 / 3 / 4 pas : fermé → ouvre ; en fermeture → ouvre (2 et 3 pas) ou stop (4 pas) ; ouvert → ferme ; en ouverture → ferme (2 pas) ou stop + TCA (3 et 4 pas) ; après stop → ouvre." },
          { code: "EncodEur", def: "2", titre: "Encodeur (actif uniquement sur LEO B CBB 3 230 L02)", valeurs: [
            ["1", "Encodeur utilisé comme capteur de position pour acquérir les cotes de ralentissement ; détection portail coincé. Forces (ouverture, fermeture, ralentissements) à régler manuellement."],
            ["2", "Fonctionnement automatique avec encodeur : ralentissement et détection d'obstacle. Autoconfiguration possible ; régler la sensibilité par les paramètres Force."]],
            note: "Vérifier que la force d'impact mesurée respecte la norme EN 12453. Toute erreur de configuration de la sensibilité peut causer des dommages aux personnes, animaux et biens." },
          { code: "PrEAL", def: "0", titre: "Préalarme", valeurs: [["0", "Le clignotant s'allume au démarrage du ou des moteurs."], ["1", "Le clignotant s'allume environ 3 s avant le démarrage."]] },
          { code: "HoMME Mort", def: "0", titre: "Homme présent", valeurs: [
            ["0", "Fonctionnement à impulsions."],
            ["1", "Homme présent : IC 1 (61) = OPEN UP, IC 2 (62) = CLOSE UP. La manœuvre continue tant que la touche est enfoncée. Dispositifs de sécurité NON actifs."],
            ["2", "Homme présent Urgence : impulsions ; si la carte échoue 3 fois de suite aux essais de sécurité (photocellule ou linteau, Er0x), passe en homme présent jusqu'au relâchement. Sécurités NON actives."]] },
          { code: "inu.SEnS.ouv", def: "0", titre: "Inversion du sens de l'ouverture", valeurs: [["0", "Fonctionnement standard (Fig. G réf. 1 : dIr = drt, ouverture à droite)."], ["1", "Sens d'ouverture inversé (Fig. G réf. 2 : dIr = Gch, ouverture à gauche)."]], note: "Pour changer le sens, ne pas inverser le branchement d'origine des bornes 42-43 : utiliser cette logique (ou dIr du menu simplifié)." }
        ]},
        { nom: "Tableau B : blocages d'impulsions", items: [
          { code: "bL. imP.ouv", def: "0", titre: "Verrouillage impulsions à l'ouverture", valeurs: [["0", "L'impulsion de Start E, Start I, Ped agit pendant l'ouverture."], ["1", "N'agit pas pendant l'ouverture."]] },
          { code: "bL imP.tcA", def: "0", titre: "Verrouillage impulsions en TCA", valeurs: [["0", "L'impulsion agit pendant l'ouverture TCA."], ["1", "N'agit pas pendant la pause TCA."]] },
          { code: "bL imFE", def: "0", titre: "Verrouillage impulsions à la fermeture", valeurs: [["0", "L'impulsion agit pendant la fermeture."], ["1", "N'agit pas pendant la fermeture."]] }
        ]},
        { nom: "Tableau B : entrées de sécurité SAFE", items: [
          { code: "SAFE 1", def: "0", titre: "Entrée de sécurité SAFE 1 (borne 72)", valeurs: [
            ["0", "Phot, photocellule non vérifiée : en cas d'obscurcissement, active à l'ouverture et à la fermeture ; inverse seulement quand la photocellule est libérée."], ["1", "Phot test, photocellule vérifiée (vérification au début de la manœuvre) ; en fermeture, inverse seulement après dégagement."], ["2", "Phot op, active seulement à l'ouverture, non vérifiée."],
            ["3", "Phot op test, vérifiée, active seulement à l'ouverture."], ["4", "Phot cl, active seulement à la fermeture, non vérifiée ; en fermeture, inverse immédiatement."],
            ["5", "Phot cl test, vérifiée, active seulement à la fermeture ; inverse immédiatement."], ["6", "Bar, linteau sensible non vérifié : inverse le mouvement 2 s."], ["7", "Bar test, linteau sensible vérifié : inverse 2 s."], ["8", "Bar 8k2 : linteau résistif 8,2 kΩ, inverse 2 s (pas actif sur SAFE 3)."]] },
          { code: "SAFE 2", def: "6", titre: "Entrée de sécurité SAFE 2 (borne 74)", valeurs: [["0–8", "Mêmes options que SAFE 1 (0 Phot … 6 Bar … 8 Bar 8k2). Usine : 6 = Bar."]] },
          { code: "SAFE 3", def: "2", titre: "Entrée de sécurité SAFE 3 (borne 77)", valeurs: [["0–7", "Mêmes options 0 à 7 que SAFE 1 (8 = Bar 8k2 non actif sur SAFE 3). Usine : 2 = Phot op."]] }
        ]},
        { nom: "Tableau B : entrées de commande IC", items: [
          { code: "IC 1", def: "0", titre: "Entrée de commande IC 1 (borne 61)", valeurs: [["0", "Start E : suit la logique Mouvt PAS A PAS ; démarrage externe pour la gestion du sémaphore."], ["1", "Start I : suit la logique pas à pas ; démarrage interne pour le sémaphore."], ["2", "Open : ouvre ; si l'entrée reste fermée, les vantaux restent ouverts jusqu'à l'ouverture du contact, puis fermeture automatique après TCA."], ["3", "Close : ferme."], ["4", "Ped : ouverture piétonne partielle (suit la logique pas à pas)."], ["5", "Timer : comme Open, fermeture garantie même après une panne de courant."], ["6", "Timer piéton : ouverture piétonne ; fermeture garantie même après une panne de courant."]] },
          { code: "IC 2", def: "4", titre: "Entrée de commande IC 2 (borne 62)", valeurs: [["0–6", "Mêmes options que IC 1. Usine : 4 = Ped."]] },
          { code: "IC 3", def: "2", titre: "Entrée de commande IC 3 (borne 64)", valeurs: [["0–6", "Mêmes options que IC 1. Usine : 2 = Open."]] },
          { code: "IC 4", def: "3", titre: "Entrée de commande IC 4 (borne 65)", valeurs: [["0–6", "Mêmes options que IC 1. Usine : 3 = Close."]] }
        ]},
        { nom: "Tableau B : sortie AUX 3 et radio", items: [
          { code: "AUX 3", def: "0", titre: "Sortie AUX 3 (bornes 26-27)", valeurs: [
            ["0", "2e canal radio (contact fermé 1 s)."], ["1", "SCA : voyant portail ouvert."], ["2", "Lumière de courtoisie (90 s après la dernière manœuvre)."],
            ["3", "Lumière de zone (pendant la manœuvre)."], ["4", "Lumières d'escalier (1 s après le début de la manœuvre)."],
            ["5", "Alarme portail ouvert (si le vantail reste ouvert plus de 2 × TCA)."], ["6", "Clignotant."], ["7", "Serrure électrique à décliq (contact fermé 2 s à chaque ouverture)."], ["8", "Serrure électrique à aimant (fermée quand le portail est fermé)."],
            ["9", "Entretien."], ["10", "Clignotant et Entretien : contact fermé pendant la manœuvre des vantaux ; si le seuil Entretien est atteint, en fin de manœuvre portail fermé : 4 fois contact fermé 10 s / ouvert 5 s."]],
            note: "Non actif sur LEO B CBB 3 120 F02 (la sortie sert de signal acoustique). Le tableau B de la notice porte par erreur « actif uniquement sur 120 F02 »." },
          { code: "codE FIxE", def: "0", titre: "Code fixe", valeurs: [["0", "Récepteur en code rolling : les clones à code fixe ne sont pas acceptés."], ["1", "Récepteur en code fixe : les clones à code fixe sont acceptés."]] }
        ]},
        { nom: "Tableau B : protection, réseau et expansion", items: [
          { code: "niveau de protection", def: "0", titre: "Niveau de protection", valeurs: [
            ["0", "Pas de mot de passe pour le menu. Mémorisation radio possible (touche cachée + touche normale d'une radio déjà mémorisée en 10 s). Saisie automatique des clones et replay active."],
            ["1", "Mot de passe demandé (usine 1234). Fonctions B, C, D, E comme au niveau 0."],
            ["2", "Mot de passe ; mémorisation par radio désactivée ; saisie automatique des clones désactivée."],
            ["3", "Mot de passe ; mémorisation par radio désactivée ; saisie automatique des replay désactivée."],
            ["4", "Mot de passe ; mémorisation radio, clones et replay désactivés ; modification des paramètres via U-Link impossible. Radiocommandes mémorisables seulement par le menu Radio (bloque l'accès aux clones et parasites radio)."]] },
          { code: "ModE SEriE", def: "0", titre: "Mode série (réseau BFT)", valeurs: [
            ["0", "SLAVE standard : reçoit commandes / diagnostics."], ["1", "MASTER standard : envoie les commandes (START, OPEN, CLOSE, PED, STOP) à d'autres cartes."],
            ["2", "ESCLAVE vantaux opposés (réseau local, sans module intelligent)."], ["3", "MAÎTRE vantaux opposés (réseau local, sans module intelligent)."]],
            note: "Vantaux opposés (Fig. F) : Master = mode série 3, SAFE 1 = 1, SAFE 2 = 7, SAFE 3 = 1 ; Slave = mode série 2, SAFE 2 = 7 ; adresse 0 sur les deux cartes ; liaison par module B EBA 201 R01, 250 m maximum. Sur la carte configurée en Slave, l'entrée Linteau (Linteau / Linteau Essai / Linteau 8k2) ne peut être configurée que sur SAFE 2. Uniquement sur la barre." },
          { code: "AdrESSE", def: "0", titre: "Adresse sur le réseau BFT", valeurs: [["0–119", "Adresse de la carte dans une connexion de réseau BFT local."]] },
          { code: "EXP I1", def: "1", titre: "Entrée EXPI1 de la carte d'expansion entrées/sorties 1-2", valeurs: [
            ["0–6", "Commandes : 0 Start E, 1 Start I, 2 Open, 3 Close, 4 Ped, 5 Timer, 6 Timer piéton."],
            ["7", "Phot. 8 : Phot op. 9 : Phot cl. 10 : Bar."],
            ["11–14", "Phot test, Phot op test, Phot cl test, Bar test (vérifiés) : l'entrée 3 (EXPI2) de la carte est commutée sur la vérification EXPFAULT1."]] },
          { code: "EXP I2", def: "0", titre: "Entrée EXPI2 de la carte d'expansion entrées/sorties 1-3", valeurs: [["0–10", "0 à 6 : commandes (Start E … Timer piéton). 7 Phot, 8 Phot op, 9 Phot cl, 10 Bar."]] },
          { code: "EXPo 1", def: "11", titre: "Sortie EXPO1 de la carte d'expansion (4-5)", valeurs: [["0–11", "0 2e canal radio, 1 SCA, 2 lumière courtoisie, 3 lumière de zone, 4 lumières escaliers, 5 alarme, 6 clignotant, 7 serrure à déclic, 8 serrure à aimant, 9 entretien, 10 clignotant + entretien, 11 gestion sémaphore avec carte TLB."]] },
          { code: "EXPo 2", def: "11", titre: "Sortie EXPO2 de la carte d'expansion (6-7)", valeurs: [["0–11", "Mêmes options que EXPO1."]] },
          { code: "FEU DE SIGNALISATION PRE-CLIGNOTEMENT", def: "0", titre: "Pré-clignotement du sémaphore", valeurs: [["0", "Pré-clignotement exclu."], ["1", "Lumières rouges clignotantes 3 s au début de la manœuvre."]] },
          { code: "FEU DE SIGNALISATION ROUGE FIXE", def: "0", titre: "Sémaphore rouge fixe", valeurs: [["0", "Lumières rouges éteintes portail fermé."], ["1", "Lumières rouges allumées portail fermé."]] }
        ]},
        { nom: "Tableau C : menu radio, retour usine, langue", items: [
          { code: "AdJ StArt", def: "—", titre: "Ajouter touche Start", valeurs: [["OK", "Associe la touche voulue à la commande Start."]] },
          { code: "AdJ 2ch", def: "—", titre: "Ajouter touche 2ch", valeurs: [["OK", "Associe la touche voulue à la commande 2e canal radio. Si aucune sortie n'est configurée en 2e canal radio, le 2e canal radio commande l'ouverture piéton."]] },
          { code: "EFFAcEr 64", def: "—", titre: "Supprimer la liste", valeurs: [["OK", "Supprime complètement de la mémoire du récepteur TOUTES les radiocommandes mémorisées."]] },
          { code: "cod rH", def: "—", titre: "Lecture du code récepteur", valeurs: [["OK", "Affiche le code récepteur nécessaire pour cloner les radiocommandes."]] },
          { code: "uk", def: "OFF", titre: "Programmation à distance W LINK", valeurs: [["ON", "Active la programmation à distance de la carte via un émetteur W LINK déjà mémorisé ; reste actif 3 minutes après la dernière pression."], ["OFF", "Programmation W LINK désactivée."]] },
          { code: "dEFAuLt", def: "—", titre: "Retour aux valeurs usine", valeurs: [["OK", "Ramène la carte aux valeurs préréglées et efface toutes les radiocommandes mémorisées. Refaire ensuite l'autoconfiguration."]],
            note: "Autre méthode (Fig. H) : mettre hors tension, ouvrir l'entrée Stop et appuyer sur − et OK, remettre sous tension : RST à l'écran, valider par OK dans les 3 s, attendre la fin de la procédure." },
          { code: "LAnGuE", def: "—", titre: "Langue de l'afficheur", valeurs: [["itA · FrA · dEu · EnG · ESP", "Italien, français, allemand, anglais, espagnol."]] },
          { code: "AutoSEt", def: "—", titre: "Autoconfiguration (LEO B CBB 3 230 L02 uniquement)", valeurs: [["OK", "Exécute 1 à 3 manœuvres d'ouverture-fermeture et règle automatiquement forces, espaces de ralentissement et temps de travail."]] }
        ]}
      ]
    },
    bornier: {
      groupes: [
        { nom: "Puissance", bornes: [
          { n: "L · N · GND", label: "Secteur", desc: "230 V (120 V pour les versions F02 / F04) + terre. Câble 3 × 1,5 mm² minimum (monophasé, type H05 VV-F)", t: "alim" },
          { n: "20 · 21", label: "Clignotant", desc: "Clignotant 230 V max 40 W (L02 / L04) · 120 V max 40 W (F02 / F04)", t: "sortie" },
          { n: "26 · 27", label: "AUX 3 / signal acoustique", desc: "Contact libre NO 24 V~ 0,5 A (le tableau bornier de la notice indique 1 A), configurable par AUX 3. Sur F02 : sortie alarme sonore 24 Vdc (Fig. B2), AUX 3 non actif", t: "sortie" }
        ]},
        { nom: "Commandes", bornes: [
          { n: "10", label: "MARCHE + COND", desc: "Moteur (commun marche + condensateur)", t: "moteur" },
          { n: "11", label: "COM", desc: "Moteur — commun", t: "moteur" },
          { n: "12", label: "MARCHE", desc: "Moteur — marche", t: "moteur" },
          { n: "13", label: "COND", desc: "Moteur — condensateur", t: "moteur" },
          { n: "60", label: "COM IC 1-2", desc: "Commun des entrées de commande IC 1 et IC 2", t: "autre" },
          { n: "61", label: "IC 1", desc: "NO configurable. Défaut : START E", t: "no" },
          { n: "62", label: "IC 2", desc: "NO configurable. Défaut : PED (piéton)", t: "no" },
          { n: "63", label: "COM IC 3-4", desc: "Commun des entrées IC 3 et IC 4", t: "autre" },
          { n: "64", label: "IC 3", desc: "NO configurable. Défaut : OPEN", t: "no" },
          { n: "65", label: "IC 4", desc: "NO configurable. Défaut : CLOSE", t: "no" }
        ]},
        { nom: "Fins de course", bornes: [
          { n: "41", label: "+ REF SWE", desc: "Commun des fins de course", t: "alim" },
          { n: "42", label: "SWC", desc: "Fin de course fermeture", t: "nf" },
          { n: "43", label: "SWO", desc: "Fin de course ouverture", t: "nf" }
        ]},
        { nom: "Alimentation accessoires", bornes: [
          { n: "50 · 51", label: "24 V− / 24 V+", desc: "50 = 24 V−, 51 = 24 V+ : alimentation des accessoires (données techniques : 24 V~ 1 A max)", t: "alim" },
          { n: "52", label: "24 V Safe +", desc: "Alimentation des émetteurs vérifiés (photocellules, bords) — sortie active seulement pendant le cycle de manœuvre", t: "alim" }
        ]},
        { nom: "Sécurités", bornes: [
          { n: "70", label: "COM", desc: "Commun entrées STOP, SAFE 1 et SAFE 2", t: "autre" },
          { n: "71", label: "STOP", desc: "NF, interrompt la manœuvre. Inutilisé → laisser la barrette (pont) 70-71", t: "nf" },
          { n: "72", label: "SAFE 1", desc: "NF configurable. Défaut : PHOT. Inutilisé → barrette 70-72", t: "nf" },
          { n: "73", label: "FAULT 1", desc: "Entrée de vérification des dispositifs de sécurité sur SAFE 1", t: "autre" },
          { n: "74", label: "SAFE 2", desc: "NF configurable. Défaut : BAR. Inutilisé → barrette 70-74", t: "nf" },
          { n: "75", label: "FAULT 2", desc: "Entrée de vérification des dispositifs de sécurité sur SAFE 2", t: "autre" },
          { n: "76", label: "COM", desc: "Commun entrée SAFE 3", t: "autre" },
          { n: "77", label: "SAFE 3", desc: "NF configurable. Défaut : PHOT OP. Inutilisé → barrette 76-77", t: "nf" },
          { n: "78", label: "FAULT 3", desc: "Entrée de vérification des dispositifs de sécurité sur SAFE 3", t: "autre" }
        ]},
        { nom: "Antenne", bornes: [
          { n: "Y · #", label: "Antenne", desc: "Antenne accordée 433 MHz, câble coaxial RG58 (# = blindage). Des masses métalliques près de l'antenne perturbent la réception : la déplacer dans un endroit dégagé.", t: "autre" }
        ]}
      ],
      fusibles: "Fig. B de la notice : F1 315 mAT (230 V) / 630 mAT (120 V) · F2 6,3 AF (230 V) / 10 AF (120 V)",
      notes: [
        "Barrettes (ponts) précâblées d'usine : 70-71, 70-72, 70-74 et 76-77. Les retirer seulement quand la borne est utilisée.",
        "Moteur 750 W maximum. Accessoires 24 V~ 1 A. Jusqu'à 63 émetteurs mémorisables.",
        "L02 et F02 : détection d'obstacle par encodeur (autoconfiguration sur la 230 L02). L04 et F04 : sans détection d'obstacle par encodeur.",
        "F02 : la sortie AUX 3 n'est pas active (le signal acoustique est présent à la place).",
        "Sécurités NF de type D (EN 12453) branchées en mode non vérifié : entretien obligatoire au moins tous les 6 mois.",
        "Photocellules NON vérifiées : fig. D réf. 1 ; vérifiées : fig. D réf. 2 (alimentées sur 52, test sur FAULT).",
        "Utiliser uniquement des dispositifs de sécurité récepteurs avec contact en libre échange."
      ]
    },
    apprentissage: {
      avant: [
        "Contrôler la mécanique, les fins de course et les dispositifs de sécurité avant l'autoconfiguration.",
        "AUTOSET disponible uniquement sur LEO B CBB 3 230 L02 (avec encodeur). Sur les autres modèles : régler les temps et forces à la main.",
        "Encodeur = 2 (valeur usine) requis pour l'autoconfiguration. Régler le sens d'ouverture avant (dIr du menu simplifié), sans inverser les bornes 42-43."
      ],
      etapes: [
        "Lancer l'opération d'autoconfiguration dans le menu AUTOSET (OK).",
        "Après OK, l'afficheur montre « .... .... .... » : la centrale commande une manœuvre d'ouverture puis de fermeture et règle le couple minimum nécessaire (1 à 3 manœuvres).",
        "Pendant l'opération : ne pas obscurcir les photocellules, ne pas utiliser START, STOP ni l'afficheur.",
        "À la fin, la carte configure automatiquement forces, espaces de ralentissement et temps de travail. Les contrôler et, si besoin, les ajuster.",
        "Vérifier que la force d'impact mesurée aux points prévus par la norme EN 12445 est inférieure à la valeur de la EN 12453 (les forces peuvent être réduites par des bords déformables)."
      ],
      apres: [
        "Attention : pendant l'autoréglage, la détection d'obstacle n'est pas active : surveiller la zone de manœuvre et empêcher personnes et objets de s'approcher.",
        "Séquence de vérification : autoconfiguration → vérifier les forces d'impact (sinon ajuster la sensibilité) → linteau passif → pression / électrosensibles → manœuvre homme présent → contrôle des détecteurs de présence dans l'aire de manœuvre.",
        "Après un menu DEFAULT ou RST : refaire l'autoconfiguration.",
        "Après modification des espaces de ralentissement : manœuvre complète sans interruption.",
        "Retour usine par bornes : couper l'alimentation, ouvrir STOP, maintenir − et OK, remettre sous tension : RST, valider par OK dans les 3 s. Efface aussi les radiocommandes.",
        "Mémoriser la 1re radio avec la touche cachée du premier émetteur : en manuel, le 1er émetteur donne le CODE CLÉ du récepteur nécessaire au clonage ; le marquer."
      ]
    }
  }
  ]
},
/* ------------------------------------------------------------------ */
{
  id: "roger", nom: "Roger", couleur: "#5b4aa8",
  cartes: [
  {
    id: "roger-b70-1dc",
    nom: "B70/1DC",
    modeles: "Brushless BH30/603 · /604 · /803 · /804 · BH30 HS · BM30/400 · BM30/300/HS · BH30/804/R",
    type: "Coulissant brushless 24 V — afficheur 4 chiffres, touches UP / DOWN / + / − / PROG / TEST",
    source: "Notice Roger IS117 Rev.30, firmware P3.00 (version affichée à la mise sous tension)",
    codes: [
      { code: "P3.00", type: "afficheur", titre: "Version du firmware", action: "Affichée quelques secondes à la mise sous tension. Ensuite : état des commandes et sécurités (onglet Afficheur)." },
      { code: "dAtA", type: "afficheur", titre: "Erreur de saisie de données de course", action: "Carte neuve ou course non apprise : faire l'apprentissage. Sinon : vérifier le réglage des fins de course, appuyer sur TEST et contrôler les sécurités en alarme, refaire l'apprentissage. Peut aussi venir d'un étalonnage échoué : bien attendre que PHAS clignote avant de refermer la poignée de déverrouillage." },
      { code: "OFSt", type: "afficheur", titre: "Anomalie de tension d'alimentation / initialisation échouée", action: "Couper l'alimentation, attendre 10 s, remettre. Si ça persiste : remplacer la centrale. TEST masque temporairement l'erreur pour consulter les paramètres." },
      { code: "PrOt", type: "afficheur", titre: "Surintensité dans l'onduleur", action: "Appuyer deux fois sur TEST ou donner 3 commandes de suite." },
      { code: "Mot", type: "afficheur", titre: "Moteur non raccordé", action: "Vérifier le câble moteur (bornier X-Y-Z)." },
      { code: "FE", type: "afficheur", titre: "Les deux fins de course sont actifs", action: "Vérifier le raccordement des fins de course ou la présence d'objets dans le verrouillage fin de course. Avec fins de course magnétiques : le fusible F2 (accessoires) est peut-être grillé." },
      { code: "xx EE", type: "afficheur", titre: "Erreur de paramètre (ex. 15EE, 21EE)", action: "Le paramètre indiqué a une valeur incorrecte : la corriger et enregistrer." },
      { code: "EnE1", type: "afficheur", titre: "Encodeur non branché", action: "Vérifier le raccordement de l'encodeur. Si ça persiste : remplacer l'encodeur." },
      { code: "EnE3", type: "afficheur", titre: "Grave dysfonctionnement de l'encodeur", action: "TEST. Si l'erreur revient : éteindre la centrale 5 s puis rallumer. Si ça persiste : remplacer l'encodeur." },
      { code: "EnE5", type: "afficheur", titre: "Dysfonctionnement encodeur / alimentation insuffisante / batteries", action: "TEST ; si ça persiste, remplacer l'encodeur. Saleté, humidité ou insectes : couper la tension et nettoyer carte et encodeur. En fonctionnement sur batteries : batteries presque déchargées." },
      { code: "EnE8", type: "afficheur", titre: "Erreur de calcul de l'encodeur", action: "Refaire l'apprentissage de la course." },
      { code: "tEMP", type: "afficheur", titre: "Protection thermique de l'onduleur", action: "Le fonctionnement reprend tout seul dans les 2 minutes." },
      { code: "SEnS", type: "afficheur", titre: "Anomalie de la commande du moteur", action: "Si ça persiste : remplacer la centrale." },
      { code: "btLO", type: "afficheur", titre: "Batteries déchargées", action: "Attendre le retour du secteur." },
      { code: "bAtt", type: "afficheur", titre: "Fonctionnement sur batteries (BH30 + B71/BC)", action: "Coupure secteur : la centrale tourne sur batteries jusqu'au retour du réseau ou jusqu'au seuil bas (btLO)." },
      { code: "COM1", type: "afficheur", titre: "Communication RS485 MASTER / SLAVE absente", action: "Vérifier les bornes COM-LNA-LNB, le paramètre A0 et la présence du kit batteries sur les deux centrales." },
      { code: "COM2", type: "afficheur", titre: "Deux centrales MASTER détectées", action: "Vérifier le paramètre A0." },
      { code: "COM3", type: "afficheur", titre: "Erreur de transfert des paramètres MASTER / SLAVE", action: "Vérifier le branchement COM-LNA-LNB." },
      { code: "COM4", type: "afficheur", titre: "Firmwares MASTER / SLAVE incompatibles", action: "Vérifier le paramètre n7 : les deux centrales doivent avoir la même version de communication RS485. Sinon : assistance Roger." },
      { code: "StoP", type: "afficheur", titre: "« StoP » clignotant : déblocage ouvert", action: "Refermer la poignée de déverrouillage et tourner la clé en position fermée. Vérifier le contact de déverrouillage (SB)." },
      { code: "noPH", type: "afficheur", titre: "Anomalie commande moteur / réglage moteur échoué", action: "Vérifier le câble encodeur-moteur, couper et rétablir l'alimentation, refaire l'apprentissage. Vérifier que la poignée de déverrouillage était bien ouverte, que le moteur tourne librement et que la tension secteur est correcte. Si ça persiste : assistance." },
      { code: "APPE", type: "afficheur", titre: "Erreur d'apprentissage", action: "TEST appuyé par erreur, sécurité en alarme, chute de tension ou paramètres 30 / 31 mal réglés : TEST pour annuler, contrôler les sécurités, la tension secteur et 30 / 31 selon le poids et la vitesse du vantail, puis refaire l'apprentissage." },
      { code: "APPL", type: "afficheur", titre: "Erreur de longueur de course", action: "Portail en fermeture complète (fin de course FC actif) et refaire la procédure. Vérifier le câblage des fins de course. Si la course est inférieure au minimum : l'augmenter. Au besoin : retour aux réglages usine puis apprentissage." },
      { code: "APPM", type: "afficheur", titre: "Longueur de course maximale dépassée", action: "Réduire la course ; sinon contacter l'assistance Roger." },
      { code: "SELF", type: "afficheur", titre: "BH30/804/R : portail déplacé à la main", action: "Uniquement BH30/804/R : vantail bougé sans déblocage, sans secteur ni batterie. Avec B71/BC : vérifier les fils rouge (+) sur borne 5 et noir (−) sur borne 4 de POWER IN." },
      { code: "SELF ALIM", type: "afficheur", titre: "Branchement du chargeur de batterie inversé", action: "Inverser les fils (+) et (−) sur POWER IN. TEST masque l'erreur temporairement." },
      { code: "noLP", type: "afficheur", titre: "Mode « low power » non activé", action: "B70/MODLP endommagé ou contact de relais bloqué : contrôler le récepteur H93/RX2LP/I et le câblage avec le B70/MODLP." },
      { code: "notr", type: "afficheur", titre: "Transformateur éteint par erreur par le B70/MODLP", action: "Même contrôle que noLP (H93/RX2LP/I, câblage, B70/MODLP)." },
      { code: "StbY", type: "afficheur", titre: "Passage en veille « low power »", action: "Normal : la centrale passe en veille (afficheur éteint, sorties SC, LAM et COR coupées). Une commande ou une touche la réveille." },
      { code: "00", type: "test", titre: "TEST : aucune sécurité en alarme", action: "Aucune sécurité en alarme et aucun fin de course actif." },
      { code: "Sb", type: "test", titre: "TEST : poignée de déverrouillage ouverte", action: "Refermer la poignée, clé en position fermée, vérifier le contact de déverrouillage." },
      { code: "15", type: "test", titre: "TEST : contact STOP ouvert", action: "Installer un bouton STOP (NF) ou ponter ST (15) avec COM (14)." },
      { code: "13", type: "test", titre: "TEST : bord sensible COS1 ouvert", action: "Vérifier le raccordement. Bord absent : régler 73 00 ou ponter COS1 (13) avec COM." },
      { code: "12", type: "test", titre: "TEST : bord sensible COS2 ouvert", action: "Vérifier le raccordement. Bord absent : régler 74 00 ou ponter COS2 (12) avec COM." },
      { code: "11", type: "test", titre: "TEST : photocellule FT1 ouverte", action: "Vérifier la cellule et le câblage. Absente : régler 50 00 et 51 00 ou ponter FT1 (11) avec COM (28)." },
      { code: "10", type: "test", titre: "TEST : photocellule FT2 ouverte", action: "Vérifier la cellule et le câblage. Absente : régler 53 00 et 54 00 ou ponter FT2 (10) avec COM (28)." },
      { code: "FA", type: "test", titre: "TEST : fin de course d'ouverture actif", action: "Normal si le portail est ouvert. Indication fausse : vérifier le paramètre 71 (position du moteur), ou le câblage si le fin de course est absent." },
      { code: "FC", type: "test", titre: "TEST : fin de course de fermeture actif", action: "Normal si le portail est fermé. Indication fausse : vérifier le paramètre 71, ou le câblage si le fin de course est absent." },
      { code: "nC", type: "test", titre: "TEST : pas de communication MASTER / SLAVE", action: "A0 différent de 00 (RS485 activée) et aucune communication : voir la gestion MASTER / SLAVE." },
      { code: "PP · CH · AP · PE · Or", type: "test", titre: "TEST : commande active sans action", action: "Contact NO défectueux ou bouton mal raccordé : vérifier le contact correspondant avec COM (21). ORO ne doit jamais être ponté s'il n'est pas utilisé." },
      { code: "POWER éteinte", type: "led", titre: "LED POWER éteinte", action: "Pas d'alimentation ou fusible grillé : vérifier le câble, remplacer le fusible hors tension." },
      { code: "POWER clignote", type: "led", titre: "LED POWER clignote, afficheur éteint", action: "Veille après 30 min d'inactivité (L1 00) : appuyer sur une touche." }
    ],
    afficheur: {
      intro: "En fonctionnement normal, l'afficheur ne montre pas des chiffres mais l'état des entrées : certains segments correspondent chacun à une commande ou à une sécurité.",
      ecrans: [
        { nom: "État des commandes", digits: [
          { seg: { a: "AP", g: "PP", d: "CH" }, dp: "POWER" },
          { seg: { a: "PED", d: "ORO" }, dp: null }
        ]},
        { nom: "État des sécurités", digits: [
          { seg: { a: "FT1", g: "COS1", d: "COS2" }, dp: "SB" },
          { seg: { a: "FT2", e: "FA", c: "FC" }, dp: "STOP" }
        ]}
      ],
      reperes: {
        AP:    { g: "commande", nom: "Ouverture", repos: "Éteint", detail: "S'allume à la réception d'une commande d'ouverture (borne 23)." },
        PP:    { g: "commande", nom: "Pas-à-pas", repos: "Éteint", detail: "S'allume à la réception d'une commande pas-à-pas (borne 25 ou radio PR1)." },
        CH:    { g: "commande", nom: "Fermeture", repos: "Éteint", detail: "S'allume à la réception d'une commande de fermeture (borne 24)." },
        PED:   { g: "commande", nom: "Ouverture partielle", repos: "Éteint", detail: "S'allume à la réception d'une commande piéton (borne 26 ou radio PR2)." },
        ORO:   { g: "commande", nom: "Horloge", repos: "Éteint", detail: "Allumé tant que le contact horloge (borne 22) est fermé." },
        POWER: { g: "led", nom: "Alimentation", repos: "Allumé", detail: "Carte alimentée. Clignote en veille (afficheur éteint). Éteint : pas de tension ou fusible grillé." },
        FT1:   { g: "securite", nom: "Photocellules FT1", repos: "Allumé", detail: "Éteint = faisceau coupé ou non raccordé (bornes 11-28). Clignotant = désactivé par paramètre." },
        FT2:   { g: "securite", nom: "Photocellules FT2", repos: "Allumé", detail: "Éteint = faisceau coupé ou non raccordé (bornes 10-28). Clignotant = désactivé par paramètre." },
        COS1:  { g: "securite", nom: "Bord sensible COS1", repos: "Allumé", detail: "Éteint = bord actionné ou non raccordé (bornes 13-14). Clignotant = désactivé (73 00, réglage usine)." },
        COS2:  { g: "securite", nom: "Bord sensible COS2", repos: "Allumé", detail: "Éteint = bord actionné ou non raccordé (bornes 12-14). Clignotant = désactivé (74 00, réglage usine)." },
        FA:    { g: "securite", nom: "Fin de course d'ouverture", repos: "Allumé", detail: "S'éteint quand le portail est sur le fin de course d'ouverture." },
        FC:    { g: "securite", nom: "Fin de course de fermeture", repos: "Allumé", detail: "S'éteint quand le portail est sur le fin de course de fermeture." },
        SB:    { g: "securite", nom: "Poignée de déverrouillage", repos: "Allumé", detail: "Éteint = poignée de déverrouillage ouverte." },
        STOP:  { g: "securite", nom: "STOP", repos: "Allumé", detail: "Éteint = contact STOP ouvert (bornes 15-14)." }
      },
      regles: [
        "Commandes : segments normalement ÉTEINTS, ils s'allument quand la commande arrive.",
        "Sécurités : segments normalement ALLUMÉS. Éteint = en alarme ou non raccordé. Clignotant = désactivé par son paramètre.",
        "Les segments sans nom ne servent pas dans ce mode."
      ],
      autres: [
        { titre: "Mode paramètres", texte: "UP / DOWN font défiler : les 2 chiffres de gauche = numéro du paramètre, les 2 de droite = sa valeur. + / − pour modifier ; la valeur clignote, puis l'afficheur clignote vite quand elle est enregistrée. Modification possible seulement moteur à l'arrêt." },
        { titre: "Mode TEST (touche TEST, moteur à l'arrêt)", texte: "À gauche pendant 5 s : la commande reçue (AP, CH, PP, PE, Or). À droite : le numéro de la borne de la sécurité en alarme, qui clignote (15 STOP, 13 COS1, 12 COS2, 11 FT1, 10 FT2, Sb déblocage). Portail en fin de course : FA ou FC. Flash et voyant portail ouvert s'allument 1 s à chaque commande ou sécurité. Si plusieurs sécurités sont en alarme, la suivante s'affiche quand la première est réglée. TEST pour sortir (sinon retour seul après 10 s)." },
        { titre: "Mode INFO (TEST 5 s, moteur à l'arrêt)", texte: "Défile avec + / − : P3.00 version · Cnt position du moteur en tours · Lun longueur de course · rPM vitesse · AMP courant moteur · bUS bon état de l'alimentation (28.5 à 230 V, 25.5 à 207 V, 31.6 à 253 V) · CMP courant de compensation · ASC seuil anti-écrasement (AMP doit rester inférieur) · tIn temps de détection d'obstacle (≥ 0,3 s) · UP position connue (UP …) ou en récupération (UP 1.) · OC état (OP, CL, -O, -C) · UF sous-tension (U) ou surintensité (H) · nPtE interventions thermiques. Quitter : TEST quelques secondes." },
        { titre: "Veille (stand-by)", texte: "Après 30 min sans action, l'afficheur s'éteint et seule la LED POWER clignote. Une touche ou une commande le rallume." },
        { titre: "Récupération de position", texte: "Après une coupure ou un déblocage en position intermédiaire : manœuvre lente, clignotant 3 s allumé / 1,5 s éteint. Ne rien commander avant qu'un fin de course soit atteint." }
      ]
    },
    bornier: {
      groupes: [
        { nom: "Puissance (câblé usine)", bornes: [
          { n: "L · N", label: "Secteur", desc: "230 V ±10 % 50/60 Hz (115 V sur B70/1DC/115), fusible 5x20 T2A. Mesurer : en dehors de cette plage, le brushless fonctionne mal", t: "alim" },
          { n: "POWER IN 5+ / 4−", label: "Alim carte", desc: "Arrivée du transformateur ou du chargeur B71/BC (BH30). Attention à la polarité avec le chargeur", t: "alim" },
          { n: "X · Y · Z", label: "Moteur", desc: "Moteur brushless. Si les fils ont été débranchés : refaire l'apprentissage", t: "moteur" }
        ]},
        { nom: "Sorties", bornes: [
          { n: "6 · 7", label: "COR", desc: "Contact libre : éclairage de courtoisie 230 V 100 W / 24 V 40 W (fusible conseillé), ou signalisation selon le paramètre 20", t: "sortie" },
          { n: "8 · 9", label: "+SC · COM", desc: "Voyant portail ouvert 24 V 3 W (paramètre A8). Ou alimentation TX pour test photocellules (A8 02) / économie batteries (A8 03 ou 04) : plus de voyant possible dans ce cas", t: "sortie" },
          { n: "29 · 28", label: "LAM", desc: "Clignotant 24 V DC, intermittence 50 %. Préclignotement : A5, mode : 78", t: "sortie" }
        ]},
        { nom: "Sécurités NF", bornes: [
          { n: "10 · 28", label: "FT2", desc: "Photocellules FT2. Usine : 53 00, 54 00 (désactivée en ouverture et fermeture), 55 01. Absente : ponter ou 53 00 + 54 00", t: "nf" },
          { n: "11 · 28", label: "FT1", desc: "Photocellules FT1. Usine : 50 00 (ignorée en ouverture), 51 02 (inversion en fermeture), 52 01. Absente : ponter ou 50 00 + 51 00", t: "nf" },
          { n: "12 · 14", label: "COS2", desc: "Bord sensible 2, NF ou 8,2 kΩ. Désactivé d'usine (74 00)", t: "nf" },
          { n: "13 · 14", label: "COS1", desc: "Bord sensible 1, NF ou 8,2 kΩ. Désactivé d'usine (73 00)", t: "nf" },
          { n: "15 · 14", label: "ST", desc: "STOP NF — shunté d'usine", t: "nf" }
        ]},
        { nom: "Commandes NO (commun 21)", bornes: [
          { n: "22", label: "ORO", desc: "Horloge (paramètre 80). Ne jamais ponter si inutilisée", t: "no" },
          { n: "23", label: "AP", desc: "Ouverture. Maintenue : pas de fermeture automatique", t: "no" },
          { n: "24", label: "CH", desc: "Fermeture", t: "no" },
          { n: "25", label: "PP", desc: "Pas-à-pas (paramètre 84)", t: "no" },
          { n: "26", label: "PED", desc: "Ouverture partielle, 50 % d'usine", t: "no" }
        ]},
        { nom: "Alimentation, bus, antenne", bornes: [
          { n: "27 · 28", label: "+24 V", desc: "Alimentation accessoires (7 ou 10 W max selon le modèle)", t: "alim" },
          { n: "16 · 17 · 18", label: "COM LNA LNB", desc: "Liaison RS485 MASTER / SLAVE (vantaux opposés), câble 3 x 0,5 mm², 30 m max", t: "bus" },
          { n: "20 · 19", label: "ANT", desc: "Antenne : câble RG58, 10 m max, sans raccord", t: "autre" }
        ]},
        { nom: "Connecteurs (câblés usine)", bornes: [
          { n: "ENC", label: "Encodeur", desc: "Débrancher / rebrancher uniquement hors tension. Si remplacé : refaire l'apprentissage", t: "moteur" },
          { n: "FC", label: "Fins de course", desc: "Mécaniques ou magnétiques (NC). Après tout réglage : refaire l'apprentissage", t: "moteur" },
          { n: "SB", label: "Déverrouillage", desc: "Contact NC de la poignée de déverrouillage", t: "moteur" },
          { n: "RECEIVER", label: "Récepteur", desc: "H93/RX2LP/I : PR1 pas-à-pas (param. 76), PR2 partielle (param. 77). Ne pas remplacer par un autre récepteur si le B70/MODLP est utilisé", t: "autre" },
          { n: "WIFI", label: "B74/BCONNECT", desc: "Module Wi-Fi (activer avec L0 01, low power désactivé L1 00)", t: "autre" }
        ]}
      ],
      fusibles: "F1 15 A (ATO257) circuit moteur · F2 2 A (ATO257) accessoires · F3 T2A (5x20) primaire transformateur",
      notes: [
        "Sécurités absentes : shunter sur COM ou les désactiver par paramètres 50, 51, 53, 54, 73, 74.",
        "Photocellules conseillées : séries F4ES ou F4S.",
        "Câbles : photocellules RX 4 x 0,5 mm², TX 2 x 0,5 mm² (20 m max) ; clignotant FIFTHY/24 2 x 1 mm² (10 m max)."
      ]
    },
    parametres: {
      intro: "Firmware P3.00. Valeur entre parenthèses = réglage usine. Les paramètres se lisent à tout moment mais ne se modifient que moteur arrêté.",
      navigation: [
        "UP ▲ / DOWN ▼ : paramètre suivant / précédent.",
        "+ / − : modifier la valeur (elle clignote). Maintenir pour défiler vite.",
        "Enregistrer : attendre quelques secondes ou passer à un autre paramètre avec UP/DOWN. L'écran clignote vite = valeur enregistrée.",
        "Si un mot de passe est actif (CP 01), les valeurs sont visibles mais non modifiables : saisir P1–P4 d'abord."
      ],
      groupes: [
        { nom: "Configuration générale", items: [
          { code: "A0", def: "00", titre: "Communication RS485 MASTER / SLAVE", valeurs: [
            ["00", "Standard (centrale seule)."],
            ["01", "MASTER."],
            ["02", "SLAVE avec copie des paramètres du MASTER. A0 non modifié ; 50 à 55 réglés pour désactiver les photocellules du SLAVE ; 71 opposé au MASTER."],
            ["03", "SLAVE avec paramètres indépendants."]],
            note: "Paramètres modifiables sur le SLAVE : 11, 12, 20, 31, 33, 34, 40, 41, 42, 50 à 55, 71, 73, 74." },
          { code: "A1", def: "selon moteur", titre: "Modèle d'automatisme", valeurs: [
            ["01", "BH30/603, BH30/604 (600 kg, irréversible)."],
            ["02", "BH30/803, BH30/804 (1000 kg)."],
            ["03", "BH30/503/HS, 504/HS, 603/HS, 604/HS (600 kg, High Speed)."],
            ["04", "BM30/400 (500 kg)."],
            ["05", "BM30/300/HS (400 kg, High Speed)."],
            ["06", "BH30/804/R (800 kg, réversible)."]],
            note: "Réglé en usine. À ressaisir à la main après un retour aux valeurs usine. Un mauvais modèle = fonctionnement dégradé et erreurs. 03, 05 et 06 désactivent la veille « low power » (L1 non affiché)." },
          { code: "71", def: "01", titre: "Position du moteur (vue de l'intérieur)", valeurs: [
            ["00", "Moteur installé à gauche."],
            ["01", "Moteur installé à droite."]],
            note: "À ressaisir à la main après un retour aux valeurs usine." },
          { code: "60", def: "01", titre: "Type de fin de course", valeurs: [
            ["00", "Micro-interrupteurs (contact sec)."],
            ["01", "Magnétiques (capteurs à effet Hall)."]],
            note: "Un bon choix permet de surveiller les contacts même en veille (par ex. déplacement manuel après déverrouillage)." },
          { code: "65", def: "05", titre: "Espace d'arrêt du moteur", valeurs: [
            ["01–05", "01 = freinage rapide, arrêt court … 05 = freinage doux, arrêt plus long."]] }
        ]},
        { nom: "Logique de fonctionnement", items: [
          { code: "A2", def: "00", titre: "Refermeture après pause (depuis portail complètement ouvert)", valeurs: [
            ["00", "Désactivée."],
            ["01–15", "Nombre de tentatives de refermeture après passage dans la photocellule."],
            ["99", "Tentatives illimitées."]] },
          { code: "A3", def: "00", titre: "Refermeture après coupure secteur (black-out)", valeurs: [
            ["00", "Désactivée."],
            ["01", "Au retour du courant, ferme après 5 s de préclignotement, en mode récupération de position."]] },
          { code: "A4", def: "00", titre: "Mode de la commande pas-à-pas (PP)", valeurs: [
            ["00", "Ouvre – stop – ferme – stop."],
            ["01", "Copropriété, temporisation renouvelée (PP ignoré pendant l'ouverture)."],
            ["02", "Copropriété, temporisation non renouvelée (PP ignoré pendant l'ouverture)."],
            ["03", "Ouvre – ferme – ouvre – ferme."],
            ["04", "Ouvre – ferme – stop – ouvre."]],
            note: "En 01 / 02 avec A2 00, la copropriété force une tentative de refermeture (comme A2 01)." },
          { code: "A5", def: "00", titre: "Préclignotement", valeurs: [
            ["00", "Désactivé."],
            ["01–10", "Préclignotement de 1 à 10 s avant chaque manœuvre."],
            ["99", "5 s avant la fermeture seulement."]] },
          { code: "A6", def: "00", titre: "Copropriété sur l'ouverture partielle (PED)", valeurs: [
            ["00", "PED en pas-à-pas."],
            ["01", "PED ignoré pendant l'ouverture."]] },
          { code: "A7", def: "00", titre: "Homme présent", valeurs: [
            ["00", "Désactivé."],
            ["01", "Activé : maintenir AP / CH pendant la manœuvre."]] },
          { code: "A8", def: "00", titre: "Voyant portail ouvert / test photocellules / battery saving", valeurs: [
            ["00", "Voyant : éteint fermé, fixe en manœuvre et ouvert."],
            ["01", "Voyant : clignote lent en ouverture, fixe ouvert, clignote vite en fermeture, s'éteint 2 fois toutes les 15 s si arrêté à mi-course."],
            ["02", "Sortie SC utilisée pour le test des photocellules."],
            ["03", "Sortie SC utilisée pour le battery saving."],
            ["04", "Battery saving + test photocellules."]],
            note: "Voyant utilisable seulement si L1 00." },
          { code: "15", def: "50", titre: "Ouverture partielle", valeurs: [
            ["10–99", "Pourcentage de la course totale."]] },
          { code: "16", def: "10", titre: "Fermeture auto après ouverture partielle", valeurs: [
            ["00–90", "0 à 90 s."], ["92–99", "2 à 9 min."]] },
          { code: "21", def: "30", titre: "Temps de fermeture automatique", valeurs: [
            ["00–90", "0 à 90 s."], ["92–99", "2 à 9 min."]],
            note: "L'intervention des photocellules relance le décompte." },
          { code: "22", def: "00", titre: "Ouverture avec exclusion de la fermeture auto", valeurs: [
            ["00", "Désactivée."],
            ["01", "AP ouvre sans fermeture auto ; l'AP suivant ferme."],
            ["02", "Idem avec PP."],
            ["03", "Idem avec PED."]] },
          { code: "80", def: "00", titre: "Contact horloge", valeurs: [
            ["00", "Horloge active : le portail s'ouvre et reste ouvert, toute commande est ignorée. Fin d'horloge : il se ferme."],
            ["01", "Horloge active : s'ouvre et reste ouvert, les commandes sont acceptées. Revenu complètement ouvert, la fonction horloge reprend."]] },
          { code: "81", def: "00", titre: "Fermeture / ouverture garantie", valeurs: [
            ["00", "Désactivée (82 non affiché)."],
            ["01", "Fermeture garantie : après le temps 82, préclignotement 5 s (indépendant de A5) puis fermeture."],
            ["02", "Fermeture et ouverture : arrêté après PP → ferme après 82 ; arrêté par obstacle en fermeture → ferme après 82 ; arrêté par obstacle en ouverture → s'ouvre après 82."]],
            note: "Ne s'active pas si : commande d'arrêt reçue ; bord sensible détecte un obstacle dans le même sens ; tentatives A2 épuisées ; position perdue (récupération de position)." },
          { code: "82", def: "03", titre: "Temps avant fermeture / ouverture garantie", valeurs: [
            ["02–90", "2 à 90 s de pause."], ["92–99", "2 à 9 min de pause."]],
            note: "Visible seulement si 81 01." }
        ]},
        { nom: "Course : vitesse, ralentissement, accélération", items: [
          { code: "11", def: "04", titre: "Ralentissement en ouverture (et fermeture pour les non HS)", valeurs: [
            ["01–05", "01 = ralentit près du fin de course … 05 = ralentit bien avant."]],
            note: "HS / réversible : 12 règle la fermeture séparément." },
          { code: "12", def: "04", titre: "Ralentissement en fermeture (High Speed et réversible)", valeurs: [
            ["01–05", "01 = ralentit près du fin de course … 05 = ralentit bien avant."]] },
          { code: "13", def: "05", titre: "Espace d'approche à vitesse constante, ouverture", valeurs: [
            ["05–40", "05 ≈ 15 cm, 10 ≈ 30 cm, 40 ≈ 120 cm. Vitesse réglée par 42."]] },
          { code: "14", def: "05", titre: "Espace d'approche à vitesse constante, fermeture", valeurs: [
            ["05–40", "05 ≈ 15 cm, 10 ≈ 30 cm, 40 ≈ 120 cm. Vitesse réglée par 42."]] },
          { code: "33", def: "04", titre: "Accélération au départ, ouverture (et fermeture pour les non HS)", valeurs: [
            ["01–05", "01 = démarrage rapide … 05 = démarrage lent et progressif."]] },
          { code: "34", def: "04", titre: "Accélération au départ, fermeture (High Speed et réversible)", valeurs: [
            ["01–05", "01 = démarrage rapide … 05 = démarrage lent et progressif."]] },
          { code: "40", def: "05", titre: "Vitesse en ouverture (et fermeture pour les non HS)", valeurs: [
            ["01", "60 %."], ["02", "70 %."], ["03", "80 %."], ["04", "90 %."], ["05", "100 %."]],
            note: "High Speed : 01 = 10 m/min … 05 = 24 m/min. Réversible : 01 = 7 m/min … 05 = 20 m/min." },
          { code: "41", def: "05", titre: "Vitesse en fermeture (High Speed et réversible)", valeurs: [
            ["01–05", "High Speed : 10 → 24 m/min. Réversible : 7 → 20 m/min."]] },
          { code: "42", def: "03", titre: "Vitesse d'approche constante en fin de manœuvre", valeurs: [
            ["01–08", "01 = 250 tr/min, +50 par cran, 08 = 600 tr/min."]],
            note: "Indicatif : BH30/800 ≈ 2–5 m/min ; BH30 et BM30 HS ≈ 3–8 m/min ; BH30 réversible ≈ 2–6 m/min." },
          { code: "36", def: "00", titre: "Couple max d'aide au démarrage (boost)", valeurs: [
            ["00", "Désactivé."],
            ["01", "Seulement à l'ouverture, y compris en récupération de position (en fermeture seulement si position connue et portail à plus de 2 m de la fermeture)."],
            ["02", "À chaque démarrage."]],
            note: "Couple maxi pendant 5 s ou ≈ 65 cm. Les HS ont une accélération fixe de 2 s." }
        ]},
        { nom: "Couple et détection d'obstacle", items: [
          { code: "30", def: "05", titre: "Couple moteur", valeurs: [
            ["01", "−35 %."], ["02", "−25 %."], ["03", "−16 %."], ["04", "−8 %."], ["05", "Réglage usine."],
            ["06", "+8 %."], ["07", "+16 %."], ["08", "+25 %."], ["09", "+35 %."]],
            note: "Moins de couple = détection plus sensible. En dessous de 03 : installations légères uniquement." },
          { code: "31", def: "15", titre: "Sensibilité à la force d'impact (anti-écrasement)", valeurs: [
            ["01–10", "Couple faible (seulement si le niveau moyen ne convient pas)."],
            ["11–16", "Couple moyen, conseillé."],
            ["17", "Couple 70 %, 1 s."], ["18", "Couple 80 %, 2 s."], ["19", "Couple maxi, 3 s."], ["20", "Couple maxi, 5 s."]],
            note: "17 à 20 : bord sensible obligatoire. Réaction trop lente → baisser 31. Force trop élevée → baisser 30." },
          { code: "37", def: "00", titre: "Couple pendant la récupération de position", valeurs: [
            ["00", "Uniquement selon 30 / 31."],
            ["01", "30 / 31 + courant maxi relevé à l'apprentissage."],
            ["02", "70 %, 1 s."], ["03", "80 %, 2 s."], ["04", "100 %, 3 s."], ["05", "100 %, 5 s."]] },
          { code: "27", def: "03", titre: "Temps d'inversion après bord sensible / détection d'obstacle", valeurs: [
            ["00–60", "0 à 60 s."]] },
          { code: "49", def: "01", titre: "Tentatives de refermeture après bord sensible / obstacle", valeurs: [
            ["00", "Aucune."], ["01–03", "1 à 3 tentatives (≤ A2 ; seulement si portail complètement ouvert)."]] }
        ]},
        { nom: "Sécurités : photocellules et bords", items: [
          { code: "50", def: "00", titre: "FT1 en ouverture", valeurs: [
            ["00", "Désactivée."], ["01", "ARRÊT jusqu'à la commande suivante."], ["02", "INVERSION IMMÉDIATE."],
            ["03", "STOP TEMPORAIRE : reprend l'ouverture une fois dégagée."], ["04", "INVERSION RETARDÉE : s'arrête, ferme une fois dégagée."]] },
          { code: "51", def: "02", titre: "FT1 en fermeture", valeurs: [
            ["00", "Désactivée."], ["01", "ARRÊT."], ["02", "INVERSION IMMÉDIATE."],
            ["03", "STOP TEMPORAIRE : reprend la fermeture une fois dégagée."], ["04", "INVERSION RETARDÉE : s'arrête, ouvre une fois dégagée."]] },
          { code: "52", def: "01", titre: "FT1 avec portail fermé", valeurs: [
            ["00", "Ouverture impossible si occultée."], ["01", "Ouvre sur commande même occultée."],
            ["02", "Occultée = commande d'ouverture (seulement si L1 00)."]],
            note: "Non visible si A8 02, 03 ou 04." },
          { code: "53", def: "00", titre: "FT2 en ouverture", valeurs: [
            ["00", "Désactivée."], ["01", "ARRÊT jusqu'à la commande suivante."], ["02", "INVERSION IMMÉDIATE."],
            ["03", "STOP TEMPORAIRE : reprend l'ouverture une fois dégagée."], ["04", "INVERSION RETARDÉE : s'arrête, ferme une fois dégagée."]] },
          { code: "54", def: "00", titre: "FT2 en fermeture", valeurs: [
            ["00", "Désactivée."], ["01", "ARRÊT."], ["02", "INVERSION IMMÉDIATE."],
            ["03", "STOP TEMPORAIRE : reprend la fermeture une fois dégagée."], ["04", "INVERSION RETARDÉE : s'arrête, ouvre une fois dégagée."]] },
          { code: "55", def: "01", titre: "FT2 avec portail fermé", valeurs: [
            ["00", "Ouverture impossible si occultée."], ["01", "Ouvre sur commande même occultée."],
            ["02", "Occultée = commande d'ouverture."]],
            note: "Non visible si A8 02, 03 ou 04." },
          { code: "56", def: "00", titre: "Fermeture 6 s après passage dans une photocellule", valeurs: [
            ["00", "Désactivée."], ["01", "Sur FT1."], ["02", "Sur FT2."]],
            note: "Non visible si A8 03 ou 04 ; non géré en stand-by." },
          { code: "73", def: "00", titre: "Bord sensible COS1", valeurs: [
            ["00", "Non installé."],
            ["01", "Contact NF, inverse uniquement en ouverture."],
            ["02", "Résistif 8k2, inverse uniquement en ouverture."],
            ["03", "Contact NF, inverse toujours."],
            ["04", "Résistif 8k2, inverse toujours."],
            ["12", "Deux bords 8k2 en parallèle (4k1), inverse seulement en ouverture."],
            ["14", "Deux bords 8k2 en parallèle (4k1), inverse toujours."]] },
          { code: "74", def: "00", titre: "Bord sensible COS2", valeurs: [
            ["00", "Non installé."],
            ["01", "Contact NF, inverse uniquement en fermeture."],
            ["02", "Résistif 8k2, inverse uniquement en fermeture."],
            ["03", "Contact NF, inverse toujours."],
            ["04", "Résistif 8k2, inverse toujours."],
            ["12", "Deux bords 8k2 en parallèle (4k1), inverse seulement en ouverture."],
            ["14", "Deux bords 8k2 en parallèle (4k1), inverse toujours."]] }
        ]},
        { nom: "Radio, sorties et éclairage", items: [
          { code: "76", def: "00", titre: "1er canal radio (PR1)", valeurs: [
            ["00", "PAS (pas-à-pas)."], ["01", "OUVERTURE PARTIELLE."], ["02", "OUVERTURE."], ["03", "FERMETURE."], ["04", "ARRÊT."],
            ["05", "Lumière de courtoisie (sortie COR) tant que la télécommande est active ; 79 ignoré."],
            ["06", "Lumière de courtoisie pas-à-pas : allume / éteint ; 79 ignoré."],
            ["07", "PAS avec confirmation de sécurité."], ["08", "OUVERTURE PARTIELLE avec confirmation."],
            ["09", "OUVERTURE avec confirmation."], ["10", "FERMETURE avec confirmation."]],
            note: "Confirmation : la touche doit être confirmée dans les 2 s par une 2e touche (ex. 76 07 et 77 01 : CHA puis CHB → ouverture partielle). Évite les manœuvres involontaires." },
          { code: "77", def: "01", titre: "2e canal radio (PR2)", valeurs: [
            ["00–10", "Mêmes valeurs que 76."]] },
          { code: "78", def: "00", titre: "Clignotant", valeurs: [
            ["00", "Intermittence gérée par le clignotant lui-même."],
            ["01", "Intermittence lente."],
            ["02", "Lente en ouverture, rapide en fermeture."]] },
          { code: "20", def: "00", titre: "Mode de la sortie COR", valeurs: [
            ["00", "Lumière de courtoisie standard, gérée par 79."],
            ["01", "Fermée si centrale OK, ouverte en alarme."],
            ["02", "Fermée sur secteur ou batterie chargée ; ouverte si anomalie batterie (seuil 85 ou alarme btLO)."],
            ["03", "Fermée sans anomalie 1 ni 2 ; ouverte si l'une des deux."],
            ["04", "Fermée si portail pas complètement ouvert ; ouverte quand complètement ouvert."],
            ["05", "Fermée si portail pas complètement fermé ; ouverte quand complètement fermé."]],
            note: "Utilisable seulement si L1 00." },
          { code: "79", def: "60", titre: "Lumière de courtoisie", valeurs: [
            ["00", "Désactivée."], ["01", "Impulsion au début de chaque manœuvre."], ["02", "Allumée pendant toute la manœuvre."],
            ["03–90", "Reste allumée 3 à 90 s après la manœuvre."], ["92–99", "Reste allumée 2 à 9 min après la manœuvre."]],
            note: "Non visible si 20 différent de 00." }
        ]},
        { nom: "Batterie et veille", items: [
          { code: "85", def: "03", titre: "Gestion du fonctionnement sur batterie", valeurs: [
            ["00", "Accepte les commandes jusqu'à épuisement ; au minimum, btLO s'affiche (20 V avec B71/BC, 23,7 V avec B71/PBX) et la centrale n'accepte plus de commande."],
            ["01", "Seuil minimum (22 V B71/BC ; 24,6 V B71/PBX)."],
            ["02", "Seuil intermédiaire (23 V B71/BC ; 25 V B71/PBX)."],
            ["03", "Seuil maximum (24 V B71/BC ; 25,4 V B71/PBX)."]],
            note: "Le comportement au seuil se règle avec 86 ; signalisation possible par COR (20)." },
          { code: "86", def: "00", titre: "Limitations sur batterie (au seuil 85, pendant plus de 30 s)", valeurs: [
            ["00", "Aucune limitation (signalisation possible via COR)."],
            ["01", "N'accepte que l'ouverture et ne referme plus."],
            ["02", "Préclignote 5 s, ouvre et n'accepte plus que l'ouverture."],
            ["03", "N'accepte que la fermeture (même si ORO est actif et 80 01)."],
            ["04", "Préclignote 5 s, ferme et n'accepte plus que l'ouverture."]],
            note: "Visible seulement si 85 différent de 00." },
          { code: "87", def: "00", titre: "Type de batterie et réduction de consommation", valeurs: [
            ["00", "24 V (2×12 V) avec B70/1DC : accélérations / vitesses réduites pour l'autonomie."],
            ["01", "24 V avec B70/1DC : pas de réduction, consommation maxi."],
            ["02", "24 V avec chargeur externe B71/PBX : performances réduites pour l'autonomie."],
            ["03", "24 V avec chargeur externe B71/PBX : pas de réduction, consommation maxi."]] },
          { code: "L1", def: "04", titre: "Veille « low power »", valeurs: [
            ["00", "Désactivée."], ["01", "Veille après 5 min d'inactivité."], ["02", "Après 10 min."], ["03", "Après 15 min."], ["04", "Après 20 min."]],
            note: "Pas de veille portail ouvert en attente de refermeture (A2, 21), ni pendant le décompte de 81/82. Désactivée d'office sur High Speed et réversible (L1 non affiché). Voyant (A8) et COR (20) ne fonctionnent qu'en L1 00." }
        ]},
        { nom: "Communication, test et maintenance", items: [
          { code: "L0", def: "00", titre: "Communication série", valeurs: [
            ["00", "Désactivée."], ["01", "Module B74/BCONNECT."], ["02", "Carte de débogage (usage interne)."]] },
          { code: "89", def: "00", titre: "Gestion des paramètres du SLAVE via B74/BCONNECT sur le MASTER", valeurs: [
            ["00", "Désactivée."],
            ["01", "Le MASTER permet de voir et modifier les paramètres du SLAVE et de sauvegarder ceux du SLAVE sur B-CONNECT."]],
            note: "Remettre 00 une fois terminé." },
          { code: "88", def: "00", titre: "Manœuvres cycliques (modes de test uniquement)", valeurs: [
            ["00", "Désactivées."],
            ["01–90", "Ouverture toutes les 1 à 90 s."], ["91–99", "Ouverture toutes les 1 à 9 min."]],
            note: "Régler aussi A2 et 21. Le cycle complet (ouverture-pause-fermeture) est toujours mené à terme avant le suivant." },
          { code: "FA", def: "00", titre: "Retour aux valeurs usine", valeurs: [
            ["Procédure", "Afficher FA 00, maintenir + et − 4 s : rES- clignote, valeurs usine restaurées."],
            ["Au démarrage", "Maintenir ▲ et ▼ 4 s à la mise sous tension, avant l'affichage de la version firmware."]],
            note: "Impossible si un mot de passe est actif : le débloquer avec P1–P4 (CP 00 s'affiche). Non restaurés : A0, A1, 60, 71, 86, 87, 89, L0, L1 → vérifier qu'ils correspondent à l'installation." },
          { code: "n0–n7", def: "lecture", titre: "Identification de la carte", valeurs: [
            ["n0", "Version matérielle."], ["n1", "Année de production."], ["n2", "Semaine de production."],
            ["n3 n4 n5", "Numéro de série."], ["n6", "Version firmware."], ["n7", "Version communication MASTER/SLAVE RS485."]] },
          { code: "oП–o1", def: "lecture", titre: "Compteur de manœuvres", valeurs: [
            ["oП o0 o1", "Lire à la suite × 100. Ex. 01 23 45 → 1 234 500 manœuvres."]] },
          { code: "h0–h1", def: "lecture", titre: "Heures de manœuvre", valeurs: [
            ["h0 h1", "Ex. 01 23 → 123 heures."]] },
          { code: "d0–d1", def: "lecture", titre: "Jours sous tension", valeurs: [
            ["d0 d1", "Ex. 01 23 → 123 jours."]] },
          { code: "P1–P4", def: "00", titre: "Mot de passe", valeurs: [
            ["Activer", "Saisir P1, P2, P3, P4 ; afficher CP ; maintenir + et − 4 s (l'écran clignote) ; couper puis remettre le courant et vérifier CP 01."],
            ["Débloquer", "Saisir le mot de passe, vérifier CP 00. Se réactive après 30 min sans appui ou à la remise sous tension."],
            ["Supprimer", "Débloquer (CP 00), mettre P1 à P4 à 00, afficher CP, maintenir + et − 4 s, couper puis remettre le courant."]],
            note: "Mot de passe perdu : contacter l'assistance Roger." },
          { code: "CP", def: "00", titre: "État du mot de passe", valeurs: [
            ["00", "Protection désactivée."], ["01", "Protection activée."]] }
        ]}
      ]
    },
    apprentissage: {
      avant: [
        "A1 — modèle : 01 BH30/603-604 · 02 BH30/803-804 · 03 BH30 HS (503/504/603/604) · 04 BM30/400 · 05 BM30/300/HS · 06 BH30/804/R.",
        "71 — position : 71 00 ouverture à gauche, 71 01 ouverture à droite (vue de l'intérieur).",
        "Fins de course réglés pour que le portail s'arrête un peu avant la butée mécanique.",
        "Homme présent désactivé : A7 00. Portail en position fermée.",
        "TEST : contrôler commandes et sécurités ; shunter ou désactiver celles qui ne sont pas installées (50, 51, 53, 54, 73, 74).",
        "Si TEST affiche FC : prêt. S'il affiche dAtA : TEST 1 clic puis apprentissage. S'il affiche un n° de borne : régler la sécurité d'abord."
      ],
      etapes: [
        "Maintenir PROG 4 s : AP P- s'affiche.",
        "Ouvrir la poignée de déverrouillage : après quelques secondes PH AS s'affiche, la centrale règle le moteur.",
        "Attendre que PH AS clignote (réglage réussi).",
        "Refermer la poignée de déverrouillage : l'apprentissage démarre.",
        "FOtO s'affiche (si une photocellule est active) : s'écarter du faisceau dans les 5 s.",
        "Auto : ouverture à faible vitesse jusqu'au fin de course d'ouverture, court arrêt, Auto clignote.",
        "Fermeture jusqu'au fin de course de fermeture. Réussi : retour à l'état des commandes et sécurités."
      ],
      apres: [
        "Erreurs : noPH (réglage moteur échoué), APPE (TEST ou sécurité), APPL (longueur) → voir l'onglet Codes et recommencer.",
        "Garder au moins 3 cm entre le point d'arrêt et la butée mécanique ; sinon déplacer le fin de course et refaire l'apprentissage.",
        "Contrôle final : StoP doit clignoter quand on ouvre la poignée de déverrouillage."
      ]
    }
  },
  {
    id: "roger-b70-2ml",
    nom: "B70/2ML",
    modeles: "Battant 1 ou 2 vantaux brushless : AYRON (High Speed), BE20/200, MONOS4",
    type: "Battant brushless 24 V — afficheur 4 chiffres, touches UP / DOWN / + / − / PROG / TEST",
    source: "Notice Roger IS240 Rev.15, firmware P2.05",
    codes: [
      { code: "P2.05", type: "afficheur", titre: "Version du firmware", action: "Affichée quelques secondes à la mise sous tension. Ensuite : état des commandes et sécurités (onglet Écran)." },
      { code: "OFSt", type: "afficheur", titre: "Anomalie de tension d'alimentation / initialisation échouée", action: "Couper l'alimentation, attendre 10 s, remettre. Si ça persiste : contacter le revendeur / l'assistance Roger. TEST masque temporairement l'erreur pour consulter les paramètres." },
      { code: "PrOt", type: "afficheur", titre: "Surintensité dans l'onduleur", action: "Appuyer deux fois sur TEST ou donner 3 commandes de suite." },
      { code: "dAtA", type: "afficheur", titre: "Données de longueur de course erronées", action: "TEST et contrôler les sécurités en alarme et leurs branchements. Vérifier le positionnement des butées mécaniques des moteurs 1 et 2. Refaire l'apprentissage." },
      { code: "Mot1", type: "afficheur", titre: "Moteur 1 non raccordé", action: "Vérifier le câble moteur 1 (bornes X-Y-Z)." },
      { code: "Mot2", type: "afficheur", titre: "Moteur 2 non raccordé", action: "Vérifier le câble moteur 2 (bornes Z-Y-X). Un seul moteur installé : régler 70 01." },
      { code: "xx EE", type: "afficheur", titre: "Erreur de paramètre (ex. 15EE, 21EE)", action: "Le paramètre indiqué a une valeur incorrecte : la corriger et enregistrer." },
      { code: "btLO", type: "afficheur", titre: "Batteries déchargées", action: "Attendre le retour du secteur." },
      { code: "bAtt", type: "afficheur", titre: "Fonctionnement sur batteries", action: "Coupure secteur : la centrale tourne sur batteries (le voyant clignote) jusqu'au retour du réseau ou jusqu'au seuil bas (btLO)." },
      { code: "APPE", type: "afficheur", titre: "Erreur d'apprentissage", action: "TEST appuyé par erreur, sécurité en alarme ou chute de tension : TEST pour annuler, contrôler les sécurités et la tension secteur, refaire l'apprentissage." },
      { code: "APPL", type: "afficheur", titre: "Erreur de longueur de course", action: "Mettre les vantaux en fermeture complète (sur les butées) et refaire la procédure." },
      { code: "noLP", type: "afficheur", titre: "Mode « low power » non activé", action: "B70/MODLP endommagé ou contact de relais bloqué : contrôler le récepteur H93/RX2LP/I et le câblage avec le B70/MODLP." },
      { code: "notr", type: "afficheur", titre: "Le transformateur ne fournit pas de tension", action: "Même contrôle que noLP (H93/RX2LP/I, câblage, B70/MODLP). Vérifier aussi le fusible F2." },
      { code: "StbY", type: "afficheur", titre: "Passage en veille « low power »", action: "Normal : la centrale passe en veille (afficheur éteint, sorties SC, LAM et COR coupées). Une commande ou une touche la réveille." },
      { code: "ASCC", type: "afficheur", titre: "Assistance à distance B74/BCONNECT active", action: "Normal si la téléassistance est activée. TEST masque le message 10 s pour accéder aux paramètres." },
      { code: "L-ES", type: "afficheur", titre: "Fonctionnement d'urgence résidentiel (B74/BCONNECT)", action: "Sécurités et alarmes exclues, vitesse lente, commande maintenue. Désactiver depuis B-CONNECT une fois le dépannage fini." },
      { code: "L-EM", type: "afficheur", titre: "Fonctionnement d'urgence copropriété (B74/BCONNECT)", action: "Sécurités exclues, PP ouvre puis les vantaux restent ouverts. Désactiver depuis B-CONNECT une fois le dépannage fini." },
      { code: "Voyant HS", type: "symptome", titre: "Le voyant portail ouvert ne marche pas", action: "Ampoule grillée ou fils débranchés : vérifier l'ampoule et/ou les fils (bornes 11-12)." },
      { code: "Portée radio faible", type: "symptome", titre: "La télécommande porte peu, ne marche pas moteur en marche", action: "Installer l'antenne (bornes 36-35, RG58). Remplacer les piles des émetteurs." },
      { code: "Mauvais sens", type: "symptome", titre: "Le vantail ne fait pas la manœuvre souhaitée", action: "Fils du moteur inversés : échanger deux fils sur X-Y-Z (moteur 1) ou Z-Y-X (moteur 2)." },
      { code: "Clignotant HS", type: "symptome", titre: "Le flash ne fonctionne pas", action: "Ampoule / LED grillée ou fils débranchés : contrôler le circuit LED et le câblage (bornes 20-19)." },
      { code: "00", type: "test", titre: "TEST : aucune sécurité en alarme", action: "Tout est OK." },
      { code: "27", type: "test", titre: "TEST : contact STOP ouvert", action: "Installer un bouton STOP (NF) ou ponter ST (27) avec COM (26). Vérifier aussi le paramètre 57 (NF / 8k2)." },
      { code: "28", type: "test", titre: "TEST : bord sensible COS ouvert (ISEL, si 60 01)", action: "Inutilisé : régler 73 00 ou ponter ISEL (28) avec COM (26)." },
      { code: "25", type: "test", titre: "TEST : photocellule FT1 ouverte", action: "Vérifier la cellule, le câblage et le paramètre 57. Absente : régler 50 00 et 51 00 ou ponter FT1 (25) avec COM (23)." },
      { code: "24", type: "test", titre: "TEST : photocellule FT2 ouverte", action: "Vérifier la cellule, le câblage et le paramètre 57. Absente : régler 53 00 et 54 00 ou ponter FT2 (24) avec COM (23)." },
      { code: "PP · CH · AP · PE · Or", type: "test", titre: "TEST : commande active sans action", action: "Contact NO défectueux ou bouton mal raccordé : vérifier le contact avec COM (17). Or (si 60 00) : vérifier ISEL-COM ; ne jamais ponter si inutilisé." },
      { code: "POWER éteinte", type: "led", titre: "LED POWER éteinte", action: "Pas de tension secteur ou fusible grillé (F1, F2, F3) : vérifier le câble, remplacer le fusible hors tension." },
      { code: "POWER clignote", type: "led", titre: "LED POWER clignote, afficheur éteint", action: "Veille : simple économie d'écran (30 min) ou veille « low power » (L1). Une touche ou une commande la réveille." }
    ],
    afficheur: {
      intro: "En fonctionnement normal, l'afficheur ne montre pas des chiffres mais l'état des entrées : certains segments correspondent chacun à une commande ou à une sécurité.",
      ecrans: [
        { nom: "État des commandes", digits: [
          { seg: { a: "AP", g: "PP", d: "CH" }, dp: "POWER" },
          { seg: { a: "PED", d: "ORO" }, dp: null }
        ]},
        { nom: "État des sécurités", digits: [
          { seg: { a: "FT1", g: "COS" }, dp: null },
          { seg: { a: "FT2" }, dp: "STOP" }
        ]}
      ],
      reperes: {
        AP:    { g: "commande", nom: "Ouverture", repos: "Éteint", detail: "S'allume à la réception d'une commande d'ouverture (borne 16)." },
        PP:    { g: "commande", nom: "Pas-à-pas", repos: "Éteint", detail: "S'allume à la réception d'une commande pas-à-pas (borne 14 ou radio PR1)." },
        CH:    { g: "commande", nom: "Fermeture", repos: "Éteint", detail: "S'allume à la réception d'une commande de fermeture (borne 15)." },
        PED:   { g: "commande", nom: "Ouverture partielle", repos: "Éteint", detail: "S'allume à la réception d'une commande piéton (borne 13 ou radio PR2)." },
        ORO:   { g: "commande", nom: "Horloge", repos: "Éteint", detail: "Seulement si 60 00 (ISEL en horloge) : allumé tant que le contact horloge (borne 28) est fermé." },
        POWER: { g: "led", nom: "Alimentation", repos: "Allumé", detail: "Carte alimentée. Clignote en veille (afficheur éteint). Éteint : pas de tension ou fusible grillé." },
        FT1:   { g: "securite", nom: "Photocellules FT1", repos: "Allumé", detail: "Éteint = faisceau coupé ou non raccordé (bornes 25-23). Clignotant = désactivé par paramètre." },
        FT2:   { g: "securite", nom: "Photocellules FT2", repos: "Allumé", detail: "Éteint = faisceau coupé ou non raccordé (bornes 24-23). Clignotant = désactivé par paramètre (usine)." },
        COS:   { g: "securite", nom: "Bord sensible COS", repos: "Allumé", detail: "Seulement si 60 01 (ISEL en bord sensible). Éteint = bord actionné ou non raccordé (bornes 28-26). Clignotant = désactivé (73 00)." },
        STOP:  { g: "securite", nom: "STOP", repos: "Allumé", detail: "Éteint = contact STOP ouvert (bornes 27-26)." }
      },
      regles: [
        "Commandes : segments normalement ÉTEINTS, ils s'allument quand la commande arrive.",
        "Sécurités : segments normalement ALLUMÉS. Éteint = en alarme ou non raccordé. Clignotant = désactivé par son paramètre.",
        "ORO et COS partagent l'entrée ISEL : un seul des deux est géré selon le paramètre 60."
      ],
      autres: [
        { titre: "Mode paramètres", texte: "UP / DOWN font défiler : les 2 chiffres de gauche = numéro du paramètre, les 2 de droite = sa valeur. + / − pour modifier ; la valeur clignote, puis l'afficheur clignote vite quand elle est enregistrée. Modification possible seulement moteur à l'arrêt." },
        { titre: "Mode TEST (touche TEST, à l'arrêt)", texte: "À gauche pendant 5 s : la commande reçue (AP, CH, PP, PE, Or). À droite : le numéro de la borne de la sécurité en alarme, qui clignote (27 STOP, 28 COS, 25 FT1, 24 FT2 ; 00 = aucune). Le flash et le voyant s'allument 1 s à chaque commande ou sécurité. Si plusieurs sécurités sont en alarme, la suivante s'affiche quand la première est réglée. TEST pour sortir (sinon retour seul après 10 s)." },
        { titre: "Mode INFO (TEST 5 s, moteur arrêté)", texte: "Défile avec + / − : P2.05 version · Cnt1/Cnt2 position moteur 1/2 en tours · Lun1/Lun2 longueur de course · rPM1/rPM2 vitesse · AMP1/AMP2 courant (001.1 = 1,1 A) · bUS état de l'alimentation (28.5 à 230 V, 25.5 à 207 V, 31.6 à 253 V) · CMP1/CMP2 courant de compensation · ASC1/ASC2 seuil anti-écrasement (AMP doit rester inférieur) · tIn1/tIn2 temps de détection d'obstacle (≥ 0,3 s) · AbS1/AbS2 bon état du moteur (< 500 normal, > 500 câble trop long ou inadapté, > 2000 moteur bloqué) · UP position connue / en récupération (UP 1 vantail 1, UP 2 vantail 2, UP 12 les deux) · OC état (OP, CL, -O, -C) · UF sous-tension ou surcharge réseau (U), surintensité (H). En INFO, on peut commander chaque moteur en homme mort : afficher Cnt1/rPM1/AMP1/AbS1 (moteur 1) ou Cnt2/rPM2/AMP2/AbS2 (moteur 2), puis ▲ ouvre, ▼ ferme (appuyer, relâcher, rappuyer dans la seconde en maintenant). Replacer les vantaux correctement avant de quitter. Quitter : TEST quelques secondes." },
        { titre: "Veille (stand-by)", texte: "Simple : afficheur éteint, LED POWER clignote après 30 min (L1 00). « Low power » (L1 01 à 04, usine 20 min) : le B70/MODLP coupe le transformateur ; pas de batterie, pas de récepteur externe, pas de B74/BCONNECT, ORO inactif. Réveil par une commande du bornier, la radio ou PROG/TEST (message « Act »). Forcer la veille : UP, DOWN, + et − ensemble environ 0,5 s (StbY, puis l'afficheur s'éteint 1,5 s après ; noLP si le B70/MODLP ne coupe pas le transformateur au bout de 8 s)." },
        { titre: "Récupération de position", texte: "Après coupure de courant ou 3 obstacles de suite au même endroit : la commande suivante lance une manœuvre lente (clignotant 3 s allumé / 1,5 s éteint) jusqu'aux butées d'ouverture puis de fermeture. Ne rien commander et ne pas couper les photocellules pendant ce temps. Vantaux déverrouillés à fond ouverts ou fermés : les remettre dans la même position puis reverrouiller." }
      ]
    },
    parametres: {
      intro: "Firmware P2.05. Valeur entre parenthèses = réglage usine. Les paramètres se lisent à tout moment mais ne se modifient que moteur arrêté.",
      navigation: [
        "UP ▲ / DOWN ▼ : paramètre suivant / précédent.",
        "+ / − : modifier la valeur (elle clignote). Maintenir pour défiler vite.",
        "Enregistrer : attendre quelques secondes ou passer à un autre paramètre avec UP/DOWN. L'écran clignote vite = valeur enregistrée.",
        "Si un mot de passe est actif (CP 01), les valeurs sont visibles mais non modifiables : saisir P1–P4 d'abord."
      ],
      groupes: [
        { nom: "Configuration générale", items: [
          { code: "A1", def: "02", titre: "Modèle d'automatisme", valeurs: [
            ["01", "Série AYRON : motoréducteur à bras articulé irréversible, High Speed (vantaux jusqu'à 2,5 m)."],
            ["02", "BE20 : vérin à bras irréversible avec vis sans fin (jusqu'à 3 m) / MONOS4 : vérin télescopique irréversible (jusqu'à 4 m)."]],
            note: "Un mauvais modèle provoque des erreurs de fonctionnement. À ressaisir à la main après un retour aux valeurs usine." },
          { code: "70", def: "02", titre: "Nombre de moteurs installés", valeurs: [
            ["01", "1 moteur (un vantail)."], ["02", "2 moteurs. Même type de moteur sur les deux vantaux."]] },
          { code: "60", def: "01", titre: "Entrée sélectionnable ISEL", valeurs: [
            ["00", "ISEL = entrée NO, fonction horloge (réglée par 80)."],
            ["01", "ISEL = entrée NF, fonction bord sensible COS (réglée par 73)."]] },
          { code: "65", def: "05", titre: "Espace d'arrêt du moteur", valeurs: [
            ["01–05", "01 = freinage rapide, arrêt court … 05 = freinage doux, arrêt plus long."]] }
        ]},
        { nom: "Logique de fonctionnement", items: [
          { code: "A2", def: "00", titre: "Refermeture après pause (depuis portail complètement ouvert)", valeurs: [
            ["00", "Désactivée."], ["01–15", "1 à 15 tentatives après intervention de la photocellule, puis le portail reste ouvert."], ["99", "Tentatives illimitées."]] },
          { code: "A3", def: "00", titre: "Refermeture après coupure secteur (black-out)", valeurs: [
            ["00", "Désactivée."], ["01", "Si le portail n'est pas complètement ouvert, il se ferme au retour du courant après 5 s de préclignotement, en mode récupération de position."]] },
          { code: "A4", def: "00", titre: "Mode de la commande pas-à-pas (PP)", valeurs: [
            ["00", "Ouvre – stop – ferme – stop – ouvre."],
            ["01", "Copropriété, temps de fermeture auto renouvelé (PP ignoré pendant l'ouverture)."],
            ["02", "Copropriété, temps non renouvelé (PP ignoré pendant l'ouverture)."],
            ["03", "Ouvre – ferme – ouvre – ferme."], ["04", "Ouvre – ferme – stop – ouvre."]],
            note: "En 01 / 02 avec A2 00, la copropriété active une tentative de refermeture (A2 01)." },
          { code: "A5", def: "00", titre: "Préclignotement", valeurs: [
            ["00", "Désactivé."], ["01–10", "1 à 10 s avant chaque manœuvre."], ["99", "5 s avant la fermeture seulement."]] },
          { code: "A6", def: "00", titre: "Copropriété sur l'ouverture partielle (PED)", valeurs: [
            ["00", "PED en pas-à-pas : ouvre – stop – ferme – stop."], ["01", "PED ignoré pendant l'ouverture."]] },
          { code: "A7", def: "00", titre: "Homme présent", valeurs: [
            ["00", "Désactivé."], ["01", "Maintenir AP ou CH pendant la manœuvre ; au relâchement le portail s'arrête."]] },
          { code: "A8", def: "00", titre: "Voyant portail ouvert / test photocellules / battery saving", valeurs: [
            ["00", "Voyant : éteint fermé, fixe en manœuvre et ouvert."],
            ["01", "Voyant : clignote lent en ouverture, fixe ouvert, clignote vite en fermeture, s'éteint 2 fois toutes les 15 s si arrêté à mi-course."],
            ["02", "Sortie SC = test photocellules (type d'essai par 58 et 59)."],
            ["03", "Sortie SC = économie batterie : accessoires sur SC coupés portail complètement ouvert ou fermé."],
            ["04", "Économie batterie + test photocellules (58 et 59)."]],
            note: "Voyant utilisable seulement si L1 00." },
          { code: "15", def: "99", titre: "Ouverture partielle", valeurs: [
            ["15–99", "15 à 99 % de la course totale."]],
            note: "Deux vantaux : par défaut ouverture totale du vantail 1. Un vantail : 50 % de l'ouverture totale." },
          { code: "21", def: "30", titre: "Temps de fermeture automatique", valeurs: [
            ["00–90", "0 à 90 s de pause."], ["92–99", "2 à 9 min de pause."]],
            note: "Les photocellules relancent le décompte. Une commande d'ouverture maintenue bloque la fermeture auto ; le décompte reprend au relâchement." },
          { code: "22", def: "00", titre: "Ouverture avec exclusion de la fermeture auto", valeurs: [
            ["00", "Désactivée."], ["01", "AP ouvre sans fermeture auto ; l'AP suivant ferme."],
            ["02", "Idem avec PP."], ["03", "Idem avec PED (ouverture partielle)."]] },
          { code: "80", def: "00", titre: "Contact horloge (ORO)", valeurs: [
            ["00", "Horloge active : s'ouvre et reste ouvert, toute commande ignorée. Fin d'horloge : se ferme."],
            ["01", "Horloge active : s'ouvre et reste ouvert, commandes acceptées. Revenu complètement ouvert, l'horloge reprend."]],
            note: "Visible seulement si 60 00. ORO ne réveille pas la centrale de la veille : pour l'utiliser, mettre L1 00." },
          { code: "81", def: "00", titre: "Fermeture / ouverture garantie", valeurs: [
            ["00", "Désactivée (82 non affiché)."],
            ["01", "Fermeture garantie : après le temps 82, préclignotement 5 s (indépendant de A5) puis fermeture."],
            ["02", "Fermeture et ouverture : arrêté après PP → ferme après 82 ; arrêté par obstacle en fermeture → ferme après 82 ; arrêté par obstacle en ouverture → s'ouvre après 82."]],
            note: "Ne s'active pas si : commande d'arrêt ; bord sensible dans le même sens ; tentatives A2 épuisées ; position perdue." },
          { code: "82", def: "03", titre: "Temps avant fermeture / ouverture garantie", valeurs: [
            ["02–90", "2 à 90 s de pause."], ["92–99", "2 à 9 min de pause."]] }
        ]},
        { nom: "Course des vantaux", items: [
          { code: "25", def: "03", titre: "Retard du MOTEUR 2 à l'ouverture", valeurs: [["00–10", "0 à 10 s."]] },
          { code: "26", def: "05", titre: "Retard du MOTEUR 1 à la fermeture", valeurs: [["00–30", "0 à 30 s."]] },
          { code: "11", def: "04", titre: "Ralentissement MOTEUR 1 (ouverture et fermeture)", valeurs: [
            ["01–05", "01 = ralentit près de la butée ou du fin de course … 05 = ralentit bien avant."]] },
          { code: "12", def: "04", titre: "Ralentissement MOTEUR 2 (ouverture et fermeture)", valeurs: [
            ["01–05", "01 = ralentit près de la butée ou du fin de course … 05 = ralentit bien avant."]] },
          { code: "13", def: "10", titre: "Contrôle de position VANTAIL 1", valeurs: [
            ["01–20", "Nombre de tours moteur (01 = minimum, 20 = maximum)."]],
            note: "Doit garantir une ouverture/fermeture correcte jusqu'à la butée. Trop bas = inversion du mouvement sur la butée." },
          { code: "14", def: "10", titre: "Contrôle de position VANTAIL 2", valeurs: [
            ["01–20", "Nombre de tours moteur (01 = minimum, 20 = maximum)."]],
            note: "Trop bas = inversion du mouvement sur la butée." },
          { code: "19", def: "00", titre: "Anticipation de l'arrêt du VANTAIL 1 en ouverture", valeurs: [
            ["00", "Le vantail s'arrête sur la butée d'ouverture."], ["01–25", "S'arrête 1 à 25 tours moteur avant l'ouverture complète."]] },
          { code: "20", def: "00", titre: "Anticipation de l'arrêt du VANTAIL 2 en ouverture", valeurs: [
            ["00", "Le vantail s'arrête sur la butée d'ouverture."], ["01–25", "S'arrête 1 à 25 tours moteur avant l'ouverture complète."]] },
          { code: "34", def: "08", titre: "Accélération au départ MOTEUR 1", valeurs: [
            ["01–10", "01 = démarrage rapide … 10 = démarrage lent et progressif."]] },
          { code: "35", def: "08", titre: "Accélération au départ MOTEUR 2", valeurs: [
            ["01–10", "01 = démarrage rapide … 10 = démarrage lent et progressif."]] },
          { code: "40", def: "04", titre: "Vitesse en ouverture", valeurs: [["01–05", "01 = 60 % … 05 = 100 %."]] },
          { code: "41", def: "04", titre: "Vitesse en fermeture", valeurs: [["01–05", "01 = 60 % … 05 = 100 %."]] },
          { code: "43", def: "00", titre: "Espace d'approche MOTEUR 1 (ouverture et fermeture)", valeurs: [
            ["00–80", "0 à 80 tours moteur à vitesse minimale (vitesse non réglable)."]] },
          { code: "44", def: "00", titre: "Espace d'approche MOTEUR 2 (ouverture et fermeture)", valeurs: [
            ["00–80", "0 à 80 tours moteur à vitesse minimale (vitesse non réglable)."]] }
        ]},
        { nom: "Couple et détection d'obstacle", items: [
          { code: "30", def: "07", titre: "Couple moteur", valeurs: [
            ["01", "−35 %."], ["02", "−25 %."], ["03", "−16 %."], ["04", "−8 %."], ["05", "0 %."],
            ["06", "+8 %."], ["07", "+16 %."], ["08", "+25 %."], ["09", "+35 %."]],
            note: "Moins de couple = plus sensible. En dessous de 03 : installations légères, sans vent fort ni grand froid. Vantaux de longueurs différentes : régler le moteur 2 avec 33." },
          { code: "33", def: "10", titre: "Couple MOTEUR 2", valeurs: [
            ["01–09", "Comme 30 : 01 = −35 % … 05 = 0 % … 09 = +35 %."], ["10", "Couple réglé par 30."]] },
          { code: "31", def: "15", titre: "Sensibilité à la force d'impact MOTEUR 1", valeurs: [
            ["01–10", "Couple faible (si le couple moyen ne convient pas)."],
            ["11–19", "Couple moyen, conseillé : 11 = force d'impact mini … 19 = maxi."],
            ["20", "Couple maxi : bord sensible obligatoire."]],
            note: "Réaction trop lente → baisser 31. Force trop élevée → baisser 30. Refaire l'apprentissage après chaque changement." },
          { code: "32", def: "15", titre: "Sensibilité à la force d'impact MOTEUR 2", valeurs: [
            ["01–10", "Couple faible."], ["11–19", "Couple moyen, conseillé."], ["20", "Couple maxi : bord sensible obligatoire."]],
            note: "Force trop élevée → baisser 30 (ou 33 si différent de 10). Refaire l'apprentissage après chaque changement." },
          { code: "27", def: "03", titre: "Temps d'inversion après bord sensible / obstacle", valeurs: [["00–60", "0 à 60 s."]] },
          { code: "49", def: "01", titre: "Tentatives de refermeture après bord sensible / obstacle", valeurs: [
            ["00", "Aucune."], ["01–03", "1 à 3 tentatives (conseillé ≤ A2 ; seulement si portail complètement ouvert)."]] }
        ]},
        { nom: "Serrure électrique", items: [
          { code: "28", def: "00", titre: "Type d'électroserrure", valeurs: [
            ["00", "Serrure normalement non alimentée (alimentée 3 s au début de l'ouverture). Activée par 29."],
            ["01", "Ventouse alimentée portail complètement fermé ; coupée en mouvement."],
            ["02", "Ventouse alimentée portail complètement ouvert ou fermé ; coupée en mouvement."],
            ["10–12", "Serrure non alimentée avec temporisation : 10 = 0,5 s ; 11 = 1 s ; 12 = 1,5 s."]],
            note: "Ventouse : le mode « low power » est désactivé (L1 non visible)." },
          { code: "29", def: "00", titre: "Électroverrouillage", valeurs: [
            ["00", "Désactivé."],
            ["01", "Près de la butée de fermeture, force supplémentaire sur le MOTEUR 1 pour enclencher la serrure."],
            ["02", "Force maximale sur le MOTEUR 1 pour enclencher la serrure ; détection d'obstacle exclue."]] },
          { code: "38", def: "00", titre: "Coup de bélier (déblocage de la serrure)", valeurs: [
            ["00", "Désactivé."], ["01", "Poussée de fermeture (max 4 s) avant l'ouverture pour décrocher la serrure."]] }
        ]},
        { nom: "Sécurités : photocellules et bords", items: [
          { code: "50", def: "00", titre: "FT1 en ouverture", valeurs: [
            ["00", "Désactivée."], ["01", "ARRÊT jusqu'à la commande suivante."], ["02", "INVERSION IMMÉDIATE."],
            ["03", "STOP TEMPORAIRE : reprend l'ouverture une fois dégagée."], ["04", "INVERSION RETARDÉE : s'arrête, ferme une fois dégagée."]] },
          { code: "51", def: "02", titre: "FT1 en fermeture", valeurs: [
            ["00", "Désactivée."], ["01", "ARRÊT."], ["02", "INVERSION IMMÉDIATE."],
            ["03", "STOP TEMPORAIRE : reprend la fermeture une fois dégagée."], ["04", "INVERSION RETARDÉE : s'arrête, ouvre une fois dégagée."]] },
          { code: "52", def: "01", titre: "FT1 avec portail fermé", valeurs: [
            ["00", "Ouverture impossible si occultée."], ["01", "Ouvre sur commande même occultée."], ["02", "Occultée = commande d'ouverture (seulement si L1 00)."]],
            note: "Non visible si A8 02 ou A8 03 / 04." },
          { code: "53", def: "00", titre: "FT2 en ouverture", valeurs: [
            ["00", "Désactivée."], ["01", "ARRÊT jusqu'à la commande suivante."], ["02", "INVERSION IMMÉDIATE."],
            ["03", "STOP TEMPORAIRE : reprend l'ouverture une fois dégagée."], ["04", "INVERSION RETARDÉE : s'arrête, ferme une fois dégagée."]] },
          { code: "54", def: "00", titre: "FT2 en fermeture", valeurs: [
            ["00", "Désactivée."], ["01", "ARRÊT."], ["02", "INVERSION IMMÉDIATE."],
            ["03", "STOP TEMPORAIRE : reprend la fermeture une fois dégagée."], ["04", "INVERSION RETARDÉE : s'arrête, ouvre une fois dégagée."]] },
          { code: "55", def: "01", titre: "FT2 avec portail fermé", valeurs: [
            ["00", "Ouverture impossible si occultée."], ["01", "Ouvre sur commande même occultée."], ["02", "Occultée = commande d'ouverture."]],
            note: "Non visible si A8 02, 03 ou 04." },
          { code: "56", def: "00", titre: "Fermeture 6 s après passage dans une photocellule", valeurs: [
            ["00", "Désactivée."], ["01", "Passage dans FT1 → fermeture 6 s après."], ["02", "Passage dans FT2 → fermeture 6 s après."]],
            note: "Visible seulement si A8 03 ou 04. Non géré en stand-by portail ouvert (photocellules non alimentées)." },
          { code: "57", def: "00", titre: "Type de contact FT1 / FT2 / ST (NF ou 8k2)", valeurs: [
            ["00", "FT1 NF · FT2 NF · ST NF (standard)."], ["01", "FT1 8k2 · FT2 NF · ST NF."], ["02", "FT1 NF · FT2 8k2 · ST NF."],
            ["03", "FT1 8k2 · FT2 8k2 · ST NF."], ["10", "FT1 NF · FT2 NF · ST 8k2."], ["11", "FT1 8k2 · FT2 NF · ST 8k2."],
            ["12", "FT1 NF · FT2 8k2 · ST 8k2."], ["13", "FT1 8k2 · FT2 8k2 · ST 8k2."]],
            note: "Pour les dispositifs à contact 8,2 kΩ (normes EN 12453 / EN 12445)." },
          { code: "58", def: "00", titre: "Essai des photocellules sur FT1", valeurs: [
            ["00", "Désactivé."], ["01", "En ouverture seulement."], ["02", "En fermeture seulement."], ["03", "En ouverture et en fermeture."]],
            note: "Visible si A8 02 ou 04. L'essai dure au plus 3 s OFF / 3 s ON." },
          { code: "59", def: "00", titre: "Essai des photocellules sur FT2", valeurs: [
            ["00", "Désactivé."], ["01", "En ouverture seulement."], ["02", "En fermeture seulement."], ["03", "En ouverture et en fermeture."]],
            note: "Visible si A8 02 ou 04." },
          { code: "73", def: "03", titre: "Bord sensible COS", valeurs: [
            ["00", "Non installé."], ["01", "Contact NF, inverse uniquement en ouverture."], ["02", "Résistif 8k2, inverse uniquement en ouverture."],
            ["03", "Contact NF, inverse toujours."], ["04", "Résistif 8k2, inverse toujours."],
            ["12", "Deux bords 8k2 en parallèle (4k1), inverse seulement en ouverture."], ["14", "Deux bords 8k2 en parallèle (4k1), inverse toujours."]],
            note: "Visible seulement si 60 01 (ISEL en COS)." }
        ]},
        { nom: "Radio, sorties et éclairage", items: [
          { code: "76", def: "00", titre: "1er canal radio (PR1)", valeurs: [
            ["00", "PAS (pas-à-pas)."], ["01", "OUVERTURE PARTIELLE."], ["02", "OUVERTURE."], ["03", "FERMETURE."], ["04", "ARRÊT."],
            ["05", "Lumière de courtoisie tant que la télécommande est active ; 79 ignoré."],
            ["06", "Lumière de courtoisie ON-OFF ; 79 ignoré."],
            ["07", "PAS avec confirmation."], ["08", "OUVERTURE PARTIELLE avec confirmation."], ["09", "OUVERTURE avec confirmation."], ["10", "FERMETURE avec confirmation."]],
            note: "Confirmation : la touche doit être confirmée dans les 2 s par une 2e touche (ex. 76 07 et 77 01 : CHA puis CHB → ouverture partielle)." },
          { code: "77", def: "01", titre: "2e canal radio (PR2)", valeurs: [["00–10", "Mêmes valeurs que 76."]] },
          { code: "78", def: "00", titre: "Clignotant", valeurs: [
            ["00", "Intermittence gérée par le clignotant."], ["01", "Intermittence lente."], ["02", "Lente en ouverture, rapide en fermeture."]] },
          { code: "18", def: "00", titre: "Mode de la sortie COR", valeurs: [
            ["00", "Lumière de courtoisie standard, gérée par 79."],
            ["01", "Fermé si centrale OK, ouvert en alarme."],
            ["02", "Fermé sur secteur ou batterie chargée ; ouvert si batterie faible (seuil 85) ou alarme btLO."],
            ["03", "Fermé sans anomalie 1 ni 2 ; ouvert si l'une des deux."],
            ["04", "Fermé si portail pas complètement ouvert ; ouvert quand complètement ouvert."],
            ["05", "Fermé si portail pas complètement fermé ; ouvert quand complètement fermé."]],
            note: "Utilisable seulement si L1 00." },
          { code: "79", def: "60", titre: "Lumière de courtoisie", valeurs: [
            ["00", "Désactivée."], ["01", "Impulsion au début de chaque manœuvre."], ["02", "Allumée pendant toute la manœuvre."],
            ["03–90", "Reste allumée 3 à 90 s après la manœuvre."], ["92–99", "Reste allumée 2 à 9 min après la manœuvre."]],
            note: "Visible seulement si 18 00." }
        ]},
        { nom: "Batterie et veille", items: [
          { code: "85", def: "03", titre: "Gestion du fonctionnement sur batterie", valeurs: [
            ["00", "Accepte les commandes jusqu'à épuisement de la batterie."],
            ["01", "Seuil minimum (22 V B71/BC ; 24,6 V B71/PBX)."],
            ["02", "Seuil intermédiaire (23 V B71/BC ; 25 V B71/PBX)."],
            ["03", "Seuil maximum (24 V B71/BC ; 25,4 V B71/PBX)."]],
            note: "Comportement au seuil réglé par 83 ; signalisation possible par COR (18)." },
          { code: "83", def: "00", titre: "Limitations sur batterie (au seuil 85, plus de 30 s)", valeurs: [
            ["00", "Aucune limitation (signalisation possible via COR)."],
            ["01", "N'accepte que l'ouverture et ne referme plus."],
            ["02", "Préclignote 5 s, ouvre et n'accepte plus que la fermeture."],
            ["03", "N'accepte que la fermeture (même si ORO est actif et 80 01)."],
            ["04", "Préclignote 5 s, ferme et n'accepte plus que l'ouverture."]],
            note: "Visible seulement si 85 différent de 00." },
          { code: "84", def: "00", titre: "Type de batterie et réduction de consommation", valeurs: [
            ["00", "24 V (2×12 V) avec B71/BC : accélérations / vitesses réduites pour l'autonomie."],
            ["01", "24 V avec B71/BC : pas de réduction, consommation maxi."],
            ["02", "24 V avec chargeur externe B71/PBX : performances réduites pour l'autonomie."],
            ["03", "24 V avec chargeur externe B71/PBX : pas de réduction, consommation maxi."]] },
          { code: "L1", def: "04", titre: "Veille « low power »", valeurs: [
            ["00", "Désactivée."], ["01", "Veille après 5 min d'inactivité."], ["02", "Après 10 min."], ["03", "Après 15 min."], ["04", "Après 20 min."]],
            note: "Pas de veille portail ouvert en attente de refermeture (A2, 21) ni pendant 81/82. Désactivée d'office sur High Speed. En veille : pas de récepteur externe, pas de batterie, pas de B74/BCONNECT, ORO inactif." }
        ]},
        { nom: "Communication et maintenance", items: [
          { code: "L0", def: "00", titre: "Communication série", valeurs: [
            ["00", "Désactivée."], ["01", "Module B74/BCONNECT."], ["02", "Carte de débogage (usage interne)."]],
            note: "B74/BCONNECT nécessite L1 00." },
          { code: "FA", def: "00", titre: "Retour aux valeurs usine", valeurs: [
            ["Procédure", "Afficher FA 00, maintenir + et − 4 s : rES- clignote, valeurs usine restaurées."],
            ["Au démarrage", "Maintenir ▲ et ▼ 4 s à la mise sous tension, avant l'affichage de la version firmware."]],
            note: "Impossible si un mot de passe est actif (le débloquer avec P1–P4, CP 00). Non restaurés : A1, 28, 29, 60, 70, 83, 84, L0, L1 → vérifier qu'ils correspondent à l'installation." },
          { code: "n0–n6", def: "lecture", titre: "Identification de la carte", valeurs: [
            ["n0", "Version matérielle."], ["n1", "Année de production."], ["n2", "Semaine de production."],
            ["n3 n4 n5", "Numéro de série."], ["n6", "Version firmware."]] },
          { code: "o0–o1", def: "lecture", titre: "Compteur de manœuvres", valeurs: [
            ["o0 o1", "Lire à la suite × 100. Ex. 01 23 → 12 300 manœuvres (toute activation du moteur)."]] },
          { code: "h0–h1", def: "lecture", titre: "Heures de manœuvre", valeurs: [["h0 h1", "Ex. 01 23 → 123 heures."]] },
          { code: "d0–d1", def: "lecture", titre: "Jours sous tension", valeurs: [["d0 d1", "Ex. 01 23 → 123 jours."]] },
          { code: "P1–P4", def: "00", titre: "Mot de passe", valeurs: [
            ["Activer", "Saisir P1, P2, P3, P4 ; afficher CP ; maintenir + et − 4 s (l'écran clignote) ; couper puis remettre le courant et vérifier CP 01."],
            ["Débloquer", "Saisir le mot de passe, vérifier CP 00. Se réactive après 30 min sans appui ou à la remise sous tension."],
            ["Supprimer", "Débloquer (CP 00), mettre P1 à P4 à 00, afficher CP, maintenir + et − 4 s, couper puis remettre le courant."]],
            note: "Mot de passe perdu : contacter l'assistance Roger." },
          { code: "CP", def: "00", titre: "État du mot de passe", valeurs: [["00", "Protection désactivée."], ["01", "Protection activée."]] }
        ]}
      ]
    },
    bornier: {
      groupes: [
        { nom: "Puissance", bornes: [
          { n: "L · N · ⏚", label: "Secteur", desc: "230 V ±10 % 50/60 Hz (115 V sur B70/2ML/115), fusible F3 T1A. Câble H07RN-F 3G1,5 (AYRON) ou 2G1,5. Hors plage, le brushless fonctionne mal", t: "alim" },
          { n: "+ −", label: "Alim carte", desc: "Arrivée du transformateur (ou du chargeur de batterie B71/BC). Câblé en usine", t: "alim" },
          { n: "X · Y · Z", label: "Moteur 1", desc: "Moteur brushless 1. Sens inversé : échanger deux fils", t: "moteur" },
          { n: "Z · Y · X", label: "Moteur 2", desc: "Moteur brushless 2. Sens inversé : échanger deux fils. Un seul moteur : 70 01", t: "moteur" }
        ]},
        { nom: "Sorties", bornes: [
          { n: "9 · 10", label: "COR", desc: "Contact libre : lumière de courtoisie 230 V 100 W / 24 V 40 W, ou signalisation (batterie faible, portail ouvert/fermé) selon le paramètre 18. Fusible extérieur conseillé", t: "sortie" },
          { n: "20 · 19", label: "LAM", desc: "Clignotant 24 V DC 25 W, intermittence 50 %. Préclignotement : A5, mode : 78", t: "sortie" },
          { n: "22 · 21", label: "ES", desc: "Électroserrure 12 V DC 15 W (moyenne 12 V, max 30 V). Réglages : 28 et 29", t: "sortie" },
          { n: "11 · 12", label: "+SC · COM", desc: "Voyant portail ouvert 24 V 3 W (A8). Ou alimentation des TX pour test photocellules (A8 02) / économie batterie (A8 03, 04) : plus de voyant dans ce cas", t: "sortie" }
        ]},
        { nom: "Sécurités NF ou 8k2 (param. 57)", bornes: [
          { n: "24 · 23", label: "FT2", desc: "Photocellules FT2. Usine : 53 00, 54 00 (désactivée), 55 01. Absente : ponter ou 53 00 + 54 00", t: "nf" },
          { n: "25 · 23", label: "FT1", desc: "Photocellules FT1. Usine : 50 00 (ignorée en ouverture), 51 02 (inversion en fermeture), 52 01. Absente : ponter ou 50 00 + 51 00", t: "nf" },
          { n: "27 · 26", label: "ST", desc: "STOP NF ou 8k2 — shunté d'usine", t: "nf" },
          { n: "28 · 26", label: "ISEL", desc: "Entrée au choix (param. 60) : bord sensible COS NF / 8k2 (60 01, usine, réglage 73) ou horloge ORO NO (60 00, réglage 80)", t: "nf" }
        ]},
        { nom: "Commandes NO (commun 17)", bornes: [
          { n: "16", label: "AP", desc: "Ouverture. Maintenue : pas de fermeture automatique", t: "no" },
          { n: "15", label: "CH", desc: "Fermeture", t: "no" },
          { n: "14", label: "PP", desc: "Pas-à-pas (paramètre A4)", t: "no" },
          { n: "13", label: "PED", desc: "Ouverture partielle : vantail 1 entier sur 2 vantaux, 50 % sur 1 vantail (paramètre 15)", t: "no" }
        ]},
        { nom: "Alimentation, antenne, connecteurs", bornes: [
          { n: "18 · 19", label: "+24 V", desc: "Alimentation accessoires 24 V, 10 W (400 mA) max", t: "alim" },
          { n: "36 · 35", label: "ANT", desc: "Antenne : câble RG58, 10 m max, sans raccord", t: "autre" },
          { n: "RECEIVER", label: "Récepteur", desc: "H93/RX2LP/I relié au B70/MODLP (3 fils, câblé usine) : PR1 pas-à-pas (76), PR2 partielle (77). Indispensable au mode « low power » : ne pas le remplacer par un autre récepteur", t: "autre" },
          { n: "BATT", label: "Batteries", desc: "Kit 2 x 12 V 1,2 Ah (B71/BC/INT, dans l'automatisme) ou 4,5 Ah (B71/BC/EXT, boîtier). Uniquement AGM. Pas de batterie en « low power » (L1 00 obligatoire). Contrôler tous les 6 mois", t: "alim" },
          { n: "WIFI", label: "B74/BCONNECT", desc: "Module Wi-Fi (L0 01, L1 00)", t: "autre" }
        ]}
      ],
      fusibles: "F1 F3,15 A (5x20) accessoires · F2 F15 A (5x20) circuit de puissance moteurs · F3 T1 A (5x20) primaire transformateur",
      notes: [
        "Sécurités absentes : shunter sur COM ou les désactiver par paramètres 50, 51, 53, 54, 73.",
        "Même type de moteur obligatoire sur les deux vantaux.",
        "Photocellules conseillées : R90/F4ES, G90/F4ES ou T90/F4S.",
        "Câbles : moteurs 3 x 2,5 mm² (10 m) ou 3 x 4 mm² (30 m) ; photocellules RX 5 x 0,5 mm², TX 3 x 0,5 mm² (20 m) ; clignotant FIFTHY/24 2 x 1 mm² (10 m)."
      ]
    },
    apprentissage: {
      avant: [
        "A1 — modèle : 01 série AYRON (High Speed, vantaux jusqu'à 2,5 m) · 02 BE20/200 (jusqu'à 3 m) ou MONOS4 (jusqu'à 4 m).",
        "70 — nombre de moteurs : 70 01 un vantail, 70 02 deux vantaux (usine).",
        "Homme présent désactivé : A7 00.",
        "Butées mécaniques d'arrêt en place en ouverture ET en fermeture.",
        "Vantaux en position fermée, en appui sur les butées.",
        "TEST : contrôler commandes et sécurités ; shunter ou désactiver celles qui ne sont pas installées (50, 51, 53, 54, 73).",
        "Si TEST affiche 00 : prêt. S'il affiche dAtA : TEST 1 clic puis apprentissage. S'il affiche un n° de borne : régler la sécurité d'abord."
      ],
      etapes: [
        "Maintenir PROG 4 s : APP- s'affiche.",
        "Appuyer de nouveau sur PROG (1 clic) : Auto s'affiche.",
        "MOTEUR 1 démarre en ouverture à faible vitesse.",
        "Après le retard réglé par 25 (3 s d'usine), MOTEUR 2 démarre en ouverture.",
        "Butée d'ouverture atteinte : arrêt bref, Auto clignote 2 s.",
        "Auto redevient fixe : MOTEUR 2 ferme le premier, puis après le retard 26 (5 s d'usine) MOTEUR 1 ferme jusqu'aux butées.",
        "Réussi : retour à l'affichage de l'état des commandes et sécurités."
      ],
      apres: [
        "APPE : TEST pour annuler, vérifier la sécurité en alarme, recommencer.",
        "APPL : TEST pour annuler, s'assurer que les deux vantaux sont entièrement fermés, recommencer.",
        "Refaire l'apprentissage après tout changement des paramètres 31 et 32 (sensibilité aux obstacles).",
        "Vantail qui s'inverse sur la butée : augmenter 13 (vantail 1) ou 14 (vantail 2)."
      ]
    },
  },
  {
    "id": "roger-edge1",
    "nom": "EDGE1",
    "modeles": "Battant 1 ou 2 vantaux brushless 36 V : BE20, BR20, BR21, BH23, SMARTY (y compris réversibles et High Speed), MONOS4",
    "type": "Battant brushless 36 V (EDGE1/BOX) — afficheur 4 chiffres, touches UP / DOWN / + / − / PROG / TEST",
    "source": "Notice Roger IS160 Rev.26, firmware P5.10",
    "codes": [
      {
        "code": "P5.10",
        "type": "afficheur",
        "titre": "Version du firmware",
        "action": "Affichée quelques secondes à la mise sous tension. Ensuite : état des commandes et sécurités (onglet Écran)."
      },
      {
        "code": "OFSt",
        "type": "afficheur",
        "titre": "Anomalie de tension d'alimentation / initialisation échouée",
        "action": "Couper l'alimentation, attendre 10 s, remettre. Si ça persiste : contacter le revendeur / l'assistance Roger. TEST masque temporairement l'erreur pour consulter les paramètres."
      },
      {
        "code": "PrOt",
        "type": "afficheur",
        "titre": "Surintensité dans l'onduleur",
        "action": "Appuyer deux fois sur TEST ou donner 3 commandes de suite."
      },
      {
        "code": "SECO",
        "type": "afficheur",
        "titre": "Mauvais raccordement SEC1-SEC2 du transformateur",
        "action": "Échanger les connexions SEC1 et SEC2."
      },
      {
        "code": "dAtA",
        "type": "afficheur",
        "titre": "Données de longueur de course erronées / paramètre 71 modifié",
        "action": "TEST et contrôler les sécurités en alarme et leurs branchements, vérifier les butées des moteurs 1 et 2, refaire l'apprentissage. Après un changement de 71 (ou de A1 sur SMARTY) : PROG jusqu'à APP- puis apprentissage."
      },
      {
        "code": "Mot1",
        "type": "afficheur",
        "titre": "Moteur 1 non raccordé",
        "action": "Vérifier le câble moteur 1 (X-Y-Z)."
      },
      {
        "code": "Mot2",
        "type": "afficheur",
        "titre": "Moteur 2 non raccordé",
        "action": "Vérifier le câble moteur 2 (Z-Y-X). Un seul moteur : 70 01."
      },
      {
        "code": "FUSE",
        "type": "afficheur",
        "titre": "Fusible F1 grillé",
        "action": "Remplacer F1 (20 A) hors tension. Sur batterie, ce message n'apparaît pas."
      },
      {
        "code": "xx EE",
        "type": "afficheur",
        "titre": "Erreur de paramètre (ex. 15EE, 21EE)",
        "action": "Le paramètre indiqué a une valeur incorrecte : la corriger et enregistrer."
      },
      {
        "code": "En11 / En21",
        "type": "afficheur",
        "titre": "Encodeur moteur 1 / 2 ne répond pas",
        "action": "Vérifier le raccordement de l'encodeur. Si ça persiste : remplacer l'encodeur."
      },
      {
        "code": "En12 / En22",
        "type": "afficheur",
        "titre": "Erreur de communication avec l'encodeur moteur 1 / 2",
        "action": "Vérifier le raccordement du moteur concerné."
      },
      {
        "code": "En13 / En23",
        "type": "afficheur",
        "titre": "Dysfonctionnement léger de l'encodeur moteur 1 / 2",
        "action": "Vérifier le raccordement du moteur et la tension d'alimentation de la centrale."
      },
      {
        "code": "En14 / En24",
        "type": "afficheur",
        "titre": "Erreur grave de l'encodeur moteur 1 / 2",
        "action": "Si ça persiste : remplacer l'encodeur."
      },
      {
        "code": "En15 / En25",
        "type": "afficheur",
        "titre": "Position du moteur 1 / 2 incohérente avec la course",
        "action": "Vérifier A1 et refaire l'apprentissage ; sinon remplacer l'encodeur. Vérifier aussi l'installation : SMARTY avec SMARTY/EMA ne doit pas ouvrir vers l'extérieur."
      },
      {
        "code": "btLO",
        "type": "afficheur",
        "titre": "Batteries déchargées",
        "action": "Attendre le retour du secteur."
      },
      {
        "code": "bAtt",
        "type": "afficheur",
        "titre": "Fonctionnement sur batteries",
        "action": "Coupure secteur : la centrale tourne sur batteries jusqu'au retour du réseau ou jusqu'au seuil bas (btLO)."
      },
      {
        "code": "FALL",
        "type": "afficheur",
        "titre": "Chute de tension d'alimentation moteur",
        "action": "Pas d'intervention : phase d'attente avant un signal définitif (btLO ou FUSE)."
      },
      {
        "code": "bnod",
        "type": "afficheur",
        "titre": "Mauvais type de batterie sélectionné",
        "action": "Corriger le paramètre 84."
      },
      {
        "code": "APPE",
        "type": "afficheur",
        "titre": "Erreur d'apprentissage",
        "action": "TEST appuyé par erreur, sécurité en alarme ou chute de tension : TEST pour annuler, contrôler les sécurités et la tension secteur, refaire l'apprentissage."
      },
      {
        "code": "APPL",
        "type": "afficheur",
        "titre": "Erreur de longueur de course",
        "action": "Mettre les vantaux en fermeture complète et refaire la procédure."
      },
      {
        "code": "ASSt",
        "type": "afficheur",
        "titre": "Alarme d'entretien (clignotant 1 s / 4 s, portail fermé)",
        "action": "Faire l'entretien. Remise à zéro : débloquer le mot de passe (CP 00), TEST 5 s : ASSt puis UPdt clignote 4 s, garder TEST jusqu'à donE. Relâché trop tôt : Abrt, alarme non remise à zéro."
      },
      {
        "code": "POS1 / POS2",
        "type": "afficheur",
        "titre": "Lecture de position moteur 1 / 2 (SMARTY/EMA), avec signal sonore",
        "action": "Normal à chaque démarrage. Si la lecture échoue, l'écran affiche En11 ou En21."
      },
      {
        "code": "noLP",
        "type": "afficheur",
        "titre": "Mode « low power » non activé",
        "action": "B70/MODLP endommagé ou contact de relais bloqué : contrôler le récepteur H93/RX2LP/I et le câblage avec le B70/MODLP."
      },
      {
        "code": "StbY",
        "type": "afficheur",
        "titre": "Passage en veille « low power »",
        "action": "Normal : afficheur éteint, sorties SC, LAM et COR coupées. Une commande ou une touche la réveille (Act)."
      },
      {
        "code": "ASCC · L-ES · L-EM",
        "type": "afficheur",
        "titre": "Modes B74/BCONNECT (assistance à distance / urgence)",
        "action": "ASCC = téléassistance active ; L-ES / L-EM = fonctionnement d'urgence résidentiel / copropriété (sécurités exclues). TEST masque le message 10 s."
      },
      {
        "code": "Clignotant HS",
        "type": "symptome",
        "titre": "Le flash clignotant ne fonctionne pas",
        "action": "Ampoule / LED grillée ou fils débranchés : vérifier le circuit LED et/ou les fils (bornes 16-15)."
      },
      {
        "code": "Voyant HS",
        "type": "symptome",
        "titre": "Le voyant portail ouvert ne marche pas",
        "action": "Ampoule grillée ou fils débranchés : vérifier l'ampoule et/ou les fils (bornes 20-19)."
      },
      {
        "code": "Portée radio faible",
        "type": "symptome",
        "titre": "La télécommande porte peu, ne marche pas moteur en marche",
        "action": "Installer l'antenne (bornes 29-30, RG58). Remplacer les piles des émetteurs."
      },
      {
        "code": "Mauvais sens",
        "type": "symptome",
        "titre": "Le vantail ne fait pas la manœuvre souhaitée",
        "action": "Fils du moteur inversés : échanger deux fils sur X-Y-Z (moteur 1) ou Z-Y-X (moteur 2)."
      },
      {
        "code": "00",
        "type": "test",
        "titre": "TEST : aucune sécurité en alarme",
        "action": "Tout est OK."
      },
      {
        "code": "27",
        "type": "test",
        "titre": "TEST : contact STOP ouvert",
        "action": "Installer un bouton STOP (NF) ou ponter ST (27) avec COM (26). Vérifier le paramètre 57."
      },
      {
        "code": "25",
        "type": "test",
        "titre": "TEST : bord sensible COS1 ouvert",
        "action": "Inutilisé : régler 73 00 ou ponter COS1 (25) avec COM (26)."
      },
      {
        "code": "24",
        "type": "test",
        "titre": "TEST : bord sensible COS2 ouvert",
        "action": "Inutilisé : régler 74 00 ou ponter COS2 (24) avec COM (26)."
      },
      {
        "code": "23",
        "type": "test",
        "titre": "TEST : photocellule FT1 ouverte",
        "action": "Vérifier la cellule, le câblage et 57. Absente : 50 00 et 51 00 ou ponter FT1 (23) avec COM (21)."
      },
      {
        "code": "22",
        "type": "test",
        "titre": "TEST : photocellule FT2 ouverte",
        "action": "Vérifier la cellule, le câblage et 57. Absente : 53 00 et 54 00 ou ponter FT2 (22) avec COM (21)."
      },
      {
        "code": "dAtA",
        "type": "test",
        "titre": "TEST : paramètre 71 modifié",
        "action": "PROG jusqu'à APP- puis refaire l'apprentissage."
      },
      {
        "code": "PP · CH · AP · PE · Or",
        "type": "test",
        "titre": "TEST : commande active sans action",
        "action": "Contact NO défectueux ou bouton mal raccordé : vérifier le contact avec COM (37 ; ORO avec 31). Ne jamais ponter ORO s'il n'est pas utilisé."
      },
      {
        "code": "POWER éteinte",
        "type": "led",
        "titre": "LED POWER éteinte",
        "action": "Pas d'alimentation ou fusible grillé : vérifier le câble, remplacer le fusible hors tension."
      },
      {
        "code": "POWER clignote",
        "type": "led",
        "titre": "LED POWER clignote, afficheur éteint",
        "action": "Veille : économie d'écran (30 min) ou « low power » (L1). Une touche ou une commande la réveille."
      }
    ],
    "afficheur": {
      "intro": "En fonctionnement normal, l'afficheur ne montre pas des chiffres mais l'état des entrées : certains segments correspondent chacun à une commande ou à une sécurité.",
      "ecrans": [
        {
          "nom": "État des commandes",
          "digits": [
            {
              "seg": {
                "a": "AP",
                "g": "PP",
                "d": "CH"
              },
              "dp": "POWER"
            },
            {
              "seg": {
                "a": "PED",
                "d": "ORO"
              },
              "dp": null
            }
          ]
        },
        {
          "nom": "État des sécurités",
          "digits": [
            {
              "seg": {
                "a": "FT1",
                "g": "COS1",
                "d": "COS2"
              },
              "dp": null
            },
            {
              "seg": {
                "a": "FT2"
              },
              "dp": "STOP"
            }
          ]
        }
      ],
      "reperes": {
        "AP": {
          "g": "commande",
          "nom": "Ouverture",
          "repos": "Éteint",
          "detail": "S'allume à la réception d'une commande d'ouverture (borne 33)."
        },
        "PP": {
          "g": "commande",
          "nom": "Pas-à-pas",
          "repos": "Éteint",
          "detail": "S'allume à la réception d'une commande pas-à-pas (borne 35 ou radio PR1)."
        },
        "CH": {
          "g": "commande",
          "nom": "Fermeture",
          "repos": "Éteint",
          "detail": "S'allume à la réception d'une commande de fermeture (borne 34)."
        },
        "PED": {
          "g": "commande",
          "nom": "Ouverture partielle",
          "repos": "Éteint",
          "detail": "S'allume à la réception d'une commande piéton (borne 36 ou radio PR2)."
        },
        "ORO": {
          "g": "commande",
          "nom": "Horloge",
          "repos": "Éteint",
          "detail": "Allumé tant que le contact horloge (bornes 32-31) est fermé."
        },
        "POWER": {
          "g": "led",
          "nom": "Alimentation",
          "repos": "Allumé",
          "detail": "Carte alimentée. Clignote en veille (afficheur éteint). Éteint : pas de tension ou fusible grillé."
        },
        "FT1": {
          "g": "securite",
          "nom": "Photocellules FT1",
          "repos": "Allumé",
          "detail": "Éteint = faisceau coupé ou non raccordé (bornes 23-21). Clignotant = désactivé par paramètre."
        },
        "FT2": {
          "g": "securite",
          "nom": "Photocellules FT2",
          "repos": "Allumé",
          "detail": "Éteint = faisceau coupé ou non raccordé (bornes 22-21). Clignotant = désactivé par paramètre (usine)."
        },
        "COS1": {
          "g": "securite",
          "nom": "Bord sensible COS1",
          "repos": "Allumé",
          "detail": "Éteint = bord actionné ou non raccordé (bornes 25-26). Clignotant = désactivé (73 00)."
        },
        "COS2": {
          "g": "securite",
          "nom": "Bord sensible COS2",
          "repos": "Allumé",
          "detail": "Éteint = bord actionné ou non raccordé (bornes 24-26). Clignotant = désactivé (74 00, usine)."
        },
        "STOP": {
          "g": "securite",
          "nom": "STOP",
          "repos": "Allumé",
          "detail": "Éteint = contact STOP ouvert (bornes 27-26)."
        }
      },
      "regles": [
        "Commandes : segments normalement ÉTEINTS, ils s'allument quand la commande arrive.",
        "Sécurités : segments normalement ALLUMÉS. Éteint = en alarme ou non raccordé. Clignotant = désactivé par son paramètre."
      ],
      "autres": [
        {
          "titre": "Mode paramètres",
          "texte": "UP / DOWN font défiler : les 2 chiffres de gauche = numéro du paramètre, les 2 de droite = sa valeur. + / − pour modifier ; la valeur clignote, puis l'afficheur clignote vite quand elle est enregistrée. Modification possible seulement moteur à l'arrêt."
        },
        {
          "titre": "Mode TEST (touche TEST, à l'arrêt)",
          "texte": "À gauche pendant 5 s : la commande reçue (AP, CH, PP, PE, Or). À droite : le numéro de la borne de la sécurité en alarme, qui clignote (27 STOP, 25 COS1, 24 COS2, 23 FT1, 22 FT2 ; 00 = aucune ; dAtA = paramètre 71 modifié). Une pression sur TEST pendant le mouvement = ARRÊT. Flash et voyant s'allument 1 s à chaque commande ou sécurité. TEST pour sortir (sinon retour seul après 10 s)."
        },
        {
          "titre": "Mode INFO (TEST 5 s, moteur arrêté)",
          "texte": "Défile avec + / − : P5.10 version · Cnt1/Cnt2 position moteur 1/2 en tours · Lun1/Lun2 longueur de course · rPM1/rPM2 vitesse · AMP1/AMP2 courant (001.1 = 1,1 A) · bUS état de l'alimentation (37.6 à 230 V, 33.6 à 207 V, 41.6 à 253 V) · CMP1/CMP2 courant de compensation · ASC1/ASC2 seuil anti-écrasement (AMP doit rester inférieur) · tIn1/tIn2 temps de détection d'obstacle (≥ 0,3 s) · AbS1/AbS2 bon état du moteur (< 500 normal, > 500 câble trop long ou inadapté, > 2000 moteur bloqué) · UP position connue / en récupération (UP 1 vantail 1, UP 2 vantail 2, UP 12 les deux) · OC état (OP, CL, -O, -C) · UF sous-tension (U) ou surintensité (H) · HOUr heures restantes avant l'alarme d'entretien (▼ : heures du dernier entretien) · bLoc frein (00 désactivé, 10 moteur 1, 02 moteur 2, 12 les deux). En INFO, on peut commander chaque moteur en homme mort : afficher Cnt1/rPM1/AMP1/AbS1 (moteur 1) ou Cnt2/rPM2/AMP2/AbS2 (moteur 2), puis ▲ ouvre, ▼ ferme (appuyer, relâcher, rappuyer dans la seconde en maintenant). Replacer les vantaux correctement avant de quitter. Quitter : TEST quelques secondes."
        },
        {
          "titre": "Veille (stand-by)",
          "texte": "Simple : afficheur éteint, LED POWER clignote après 30 min (L1 00). « Low power » (L1 01 à 04, usine 20 min) : le B70/MODLP coupe le transformateur ; pas de batterie, pas de récepteur externe, pas de B74/BCONNECT, . Réveil par une commande du bornier, la radio ou PROG/TEST (message « Act »). Forcer la veille : UP, DOWN, + et − ensemble environ 0,5 s (StbY, puis l'afficheur s'éteint 1,5 s après ; noLP si le B70/MODLP ne coupe pas le transformateur au bout de 8 s)."
        },
        {
          "titre": "Récupération de position",
          "texte": "Sans encodeur absolu : après coupure de courant ou 3 obstacles de suite au même endroit, la commande suivante lance une manœuvre lente (clignotant 3 s allumé / 1,5 s éteint) jusqu'aux butées. Ne rien commander pendant ce temps. Éviter de déverrouiller en position intermédiaire. Avec encodeur absolu (SMARTY/EMA) : la position est relue immédiatement à la commande suivante ; si elle était fausse, la centrale fait une ouverture complète puis referme après 1 s."
        }
      ]
    },
    "parametres": {
      "intro": "Firmware P5.10. Valeur entre parenthèses = réglage usine. Les paramètres se lisent à tout moment mais ne se modifient que moteur arrêté.",
      "navigation": [
        "UP ▲ / DOWN ▼ : paramètre suivant / précédent.",
        "+ / − : modifier la valeur (elle clignote). Maintenir pour défiler vite.",
        "Enregistrer : attendre quelques secondes ou passer à un autre paramètre avec UP/DOWN. L'écran clignote vite = valeur enregistrée.",
        "Si un mot de passe est actif (CP 01), les valeurs sont visibles mais non modifiables : saisir P1–P4 d'abord."
      ],
      "groupes": [
        {
          "nom": "Configuration générale",
          "items": [
            {
              "code": "A1",
              "def": "04",
              "titre": "Modèle d'automatisme",
              "valeurs": [
                [
                  "01",
                  "BE20/200/HS : vérin irréversible High Speed."
                ],
                [
                  "02",
                  "Série BR20 : vérin irréversible."
                ],
                [
                  "03",
                  "BH23/282 : motoréducteur à bras articulé irréversible."
                ],
                [
                  "04",
                  "BR21/351, BR21/361, BR21/362 : motoréducteur enterré irréversible."
                ],
                [
                  "05",
                  "SMARTY 5, SMARTY 7, SMARTY8/T : vérin irréversible (avec SMARTY/EMA : 71 01)."
                ],
                [
                  "06",
                  "SMARTY 7R : vérin réversible (64 01 et 71 01)."
                ],
                [
                  "07",
                  "SMARTY 5R5 : vérin réversible (64 01 et 71 01)."
                ],
                [
                  "08",
                  "SMARTY 4HS : vérin irréversible High Speed (avec SMARTY/EMA : 71 01)."
                ],
                [
                  "09",
                  "BH23/252/HS : bras articulé irréversible High Speed."
                ],
                [
                  "10",
                  "BR21/351/HS, BR21/361/HS : enterré irréversible High Speed."
                ],
                [
                  "11",
                  "BE20/400 / MONOS4 : vérin irréversible."
                ],
                [
                  "12",
                  "BR20/400/R : vérin réversible."
                ]
              ],
              "note": "Un mauvais modèle provoque des erreurs. À ressaisir à la main après un retour aux valeurs usine. Avec SMARTY, chaque changement affiche dAtA : PROG jusqu'à APP- puis refaire l'apprentissage."
            },
            {
              "code": "70",
              "def": "02",
              "titre": "Nombre de moteurs installés",
              "valeurs": [
                [
                  "01",
                  "1 moteur (un vantail)."
                ],
                [
                  "02",
                  "2 moteurs. Même type de moteur sur les deux vantaux."
                ]
              ],
              "note": "SMARTY réversible : refaire l'apprentissage après tout changement."
            },
            {
              "code": "71",
              "def": "00",
              "titre": "Encodeur absolu (série SMARTY)",
              "valeurs": [
                [
                  "00",
                  "Désactivé."
                ],
                [
                  "01",
                  "Activé : refaire l'apprentissage."
                ]
              ],
              "note": "Obligatoire (71 01) avec SMARTY réversible et avec SMARTY/EMA. Chaque changement affiche dAtA : PROG jusqu'à APP- puis apprentissage. SMARTY avec SMARTY/EMA ne doit pas ouvrir vers l'extérieur."
            },
            {
              "code": "64",
              "def": "00",
              "titre": "Réversibilité SMARTY 5R5 / 7R",
              "valeurs": [
                [
                  "00",
                  "Le moteur ne résiste à aucune force : vantail déplaçable à la main dans les deux sens sans déverrouiller."
                ],
                [
                  "01",
                  "Moteur utilisé comme frein de maintien (secteur présent ou portail arrêté) ; une force supérieure fait bouger le vantail."
                ]
              ],
              "note": "Visible si A1 06 ou 07. Désactive le mode « low power » (L1 non visible). Si le portail doit rester verrouillé ouvert ou fermé : électroserrure obligatoire."
            },
            {
              "code": "65",
              "def": "05",
              "titre": "Espace d'arrêt du moteur",
              "valeurs": [
                [
                  "01–05",
                  "01 = freinage rapide, arrêt court … 05 = freinage doux, arrêt plus long."
                ]
              ]
            }
          ]
        },
        {
          "nom": "Logique de fonctionnement",
          "items": [
            {
              "code": "A2",
              "def": "00",
              "titre": "Refermeture après pause (depuis portail complètement ouvert)",
              "valeurs": [
                [
                  "00",
                  "Désactivée."
                ],
                [
                  "01–15",
                  "1 à 15 tentatives après intervention de la photocellule, puis le portail reste ouvert."
                ],
                [
                  "99",
                  "Tentatives illimitées."
                ]
              ]
            },
            {
              "code": "A3",
              "def": "00",
              "titre": "Refermeture après coupure secteur (black-out)",
              "valeurs": [
                [
                  "00",
                  "Désactivée."
                ],
                [
                  "01",
                  "Si le portail n'est pas complètement ouvert, il se ferme au retour du courant après 5 s de préclignotement, en mode récupération de position."
                ]
              ]
            },
            {
              "code": "A4",
              "def": "00",
              "titre": "Mode de la commande pas-à-pas (PP)",
              "valeurs": [
                [
                  "00",
                  "Ouvre – stop – ferme – stop – ouvre."
                ],
                [
                  "01",
                  "Copropriété, temps de fermeture auto renouvelé (PP ignoré pendant l'ouverture)."
                ],
                [
                  "02",
                  "Copropriété, temps non renouvelé (PP ignoré pendant l'ouverture)."
                ],
                [
                  "03",
                  "Ouvre – ferme – ouvre – ferme."
                ],
                [
                  "04",
                  "Ouvre – ferme – stop – ouvre."
                ]
              ],
              "note": "En 01 / 02 avec A2 00, la copropriété active une tentative de refermeture (A2 01)."
            },
            {
              "code": "A5",
              "def": "00",
              "titre": "Préclignotement",
              "valeurs": [
                [
                  "00",
                  "Désactivé."
                ],
                [
                  "01–10",
                  "1 à 10 s avant chaque manœuvre."
                ],
                [
                  "99",
                  "5 s avant la fermeture seulement."
                ]
              ]
            },
            {
              "code": "A6",
              "def": "00",
              "titre": "Copropriété sur l'ouverture partielle (PED)",
              "valeurs": [
                [
                  "00",
                  "PED en pas-à-pas : ouvre – stop – ferme – stop."
                ],
                [
                  "01",
                  "PED ignoré pendant l'ouverture."
                ]
              ]
            },
            {
              "code": "A7",
              "def": "00",
              "titre": "Homme présent",
              "valeurs": [
                [
                  "00",
                  "Désactivé."
                ],
                [
                  "01",
                  "Maintenir AP ou CH pendant la manœuvre ; au relâchement le portail s'arrête."
                ]
              ]
            },
            {
              "code": "A8",
              "def": "00",
              "titre": "Voyant portail ouvert / test photocellules / battery saving",
              "valeurs": [
                [
                  "00",
                  "Voyant : éteint fermé, fixe en manœuvre et ouvert."
                ],
                [
                  "01",
                  "Voyant : clignote lent en ouverture, fixe ouvert, clignote vite en fermeture, s'éteint 2 fois toutes les 15 s si arrêté à mi-course."
                ],
                [
                  "02",
                  "Sortie SC = test photocellules (type d'essai par 58 et 59)."
                ],
                [
                  "03",
                  "Sortie SC = économie batterie : accessoires sur SC coupés portail complètement ouvert ou fermé."
                ],
                [
                  "04",
                  "Économie batterie + test photocellules (58 et 59)."
                ]
              ],
              "note": "Voyant utilisable seulement si L1 00."
            },
            {
              "code": "15",
              "def": "99",
              "titre": "Ouverture partielle",
              "valeurs": [
                [
                  "15–99",
                  "15 à 99 % de la course totale."
                ]
              ],
              "note": "Deux vantaux : par défaut ouverture totale du vantail 1. Un vantail : 50 %."
            },
            {
              "code": "23",
              "def": "10",
              "titre": "Fermeture auto après ouverture partielle",
              "valeurs": [
                [
                  "00–90",
                  "0 à 90 s."
                ],
                [
                  "92–99",
                  "2 à 9 min."
                ]
              ],
              "note": "Le décompte démarre quand l'ouverture piétonne (15) est atteinte."
            },
            {
              "code": "21",
              "def": "30",
              "titre": "Temps de fermeture automatique",
              "valeurs": [
                [
                  "00–90",
                  "0 à 90 s de pause."
                ],
                [
                  "92–99",
                  "2 à 9 min de pause."
                ]
              ],
              "note": "Les photocellules relancent le décompte. Une commande d'ouverture maintenue bloque la fermeture auto ; le décompte reprend au relâchement."
            },
            {
              "code": "22",
              "def": "00",
              "titre": "Ouverture avec exclusion de la fermeture auto",
              "valeurs": [
                [
                  "00",
                  "Désactivée."
                ],
                [
                  "01",
                  "AP ouvre sans fermeture auto ; l'AP suivant ferme."
                ],
                [
                  "02",
                  "Idem avec PP."
                ],
                [
                  "03",
                  "Idem avec PED (ouverture partielle)."
                ]
              ]
            },
            {
              "code": "80",
              "def": "00",
              "titre": "Contact horloge (ORO)",
              "valeurs": [
                [
                  "00",
                  "Horloge active : s'ouvre et reste ouvert, toute commande ignorée. Fin d'horloge : se ferme."
                ],
                [
                  "01",
                  "Horloge active : s'ouvre et reste ouvert, commandes acceptées. Revenu complètement ouvert, l'horloge reprend."
                ]
              ]
            },
            {
              "code": "81",
              "def": "00",
              "titre": "Fermeture / ouverture garantie",
              "valeurs": [
                [
                  "00",
                  "Désactivée (82 non affiché)."
                ],
                [
                  "01",
                  "Fermeture garantie : après le temps 82, préclignotement 5 s (indépendant de A5) puis fermeture."
                ],
                [
                  "02",
                  "Fermeture et ouverture : arrêté après PP → ferme après 82 ; arrêté par obstacle en fermeture → ferme après 82 ; arrêté par obstacle en ouverture → s'ouvre après 82."
                ]
              ],
              "note": "Ne s'active pas si : commande d'arrêt ; bord sensible dans le même sens ; tentatives A2 épuisées ; position perdue."
            },
            {
              "code": "82",
              "def": "03",
              "titre": "Temps avant fermeture / ouverture garantie",
              "valeurs": [
                [
                  "02–90",
                  "2 à 90 s de pause."
                ],
                [
                  "92–99",
                  "2 à 9 min de pause."
                ]
              ]
            }
          ]
        },
        {
          "nom": "Course des vantaux",
          "items": [
            {
              "code": "25",
              "def": "03",
              "titre": "Retard du MOTEUR 2 à l'ouverture",
              "valeurs": [
                [
                  "00–10",
                  "0 à 10 s."
                ]
              ]
            },
            {
              "code": "26",
              "def": "05",
              "titre": "Retard du MOTEUR 1 à la fermeture",
              "valeurs": [
                [
                  "00–30",
                  "0 à 30 s."
                ]
              ]
            },
            {
              "code": "A9",
              "def": "04",
              "titre": "Ralentissement MOTEUR 1 en ouverture",
              "valeurs": [
                [
                  "01–05",
                  "01 = ralentit près de la butée … 05 = bien avant (10 pour SMARTY)."
                ]
              ],
              "note": "Visible seulement si A1 01, 09, 10, 11 ou 12, ou si A1 05, 06, 07, 08 avec 71 01 (SMARTY/EMA activé)."
            },
            {
              "code": "10",
              "def": "04",
              "titre": "Ralentissement MOTEUR 2 en ouverture",
              "valeurs": [
                [
                  "01–05",
                  "01 = ralentit près de la butée … 05 = bien avant (10 pour SMARTY)."
                ]
              ],
              "note": "Mêmes conditions de visibilité que A9."
            },
            {
              "code": "11",
              "def": "04",
              "titre": "Ralentissement MOTEUR 1",
              "valeurs": [
                [
                  "01–05",
                  "01 = ralentit près de la butée ou du fin de course … 05 = ralentit bien avant (10 possible sur SMARTY)."
                ]
              ],
              "note": "Selon A1, 11 règle l'ouverture et la fermeture, ou seulement la fermeture quand A9 et 10 sont visibles (A1 01, 05 à 12)."
            },
            {
              "code": "12",
              "def": "04",
              "titre": "Ralentissement MOTEUR 2",
              "valeurs": [
                [
                  "01–05",
                  "01 = ralentit près de la butée … 05 = bien avant (10 possible sur SMARTY)."
                ]
              ],
              "note": "Fermeture seulement quand A9 et 10 sont visibles ; sinon ouverture et fermeture."
            },
            {
              "code": "13",
              "def": "10",
              "titre": "Contrôle de position VANTAIL 1",
              "valeurs": [
                [
                  "01–20",
                  "Nombre de tours moteur (01 = minimum, 20 = maximum)."
                ]
              ],
              "note": "Trop bas = inversion du mouvement sur la butée. BR21 : en fermeture complète, régler la butée interne pour laisser au levier quelques millimètres de jeu."
            },
            {
              "code": "14",
              "def": "10",
              "titre": "Contrôle de position VANTAIL 2",
              "valeurs": [
                [
                  "01–20",
                  "Nombre de tours moteur (01 = minimum, 20 = maximum)."
                ]
              ],
              "note": "Trop bas = inversion du mouvement sur la butée. BR21 : même remarque que 13."
            },
            {
              "code": "19",
              "def": "00",
              "titre": "Anticipation de l'arrêt du VANTAIL 1 en ouverture",
              "valeurs": [
                [
                  "00",
                  "Le vantail s'arrête sur la butée d'ouverture."
                ],
                [
                  "01–25",
                  "S'arrête 1 à 25 tours moteur avant l'ouverture complète."
                ]
              ]
            },
            {
              "code": "20",
              "def": "00",
              "titre": "Anticipation de l'arrêt du VANTAIL 2 en ouverture",
              "valeurs": [
                [
                  "00",
                  "Le vantail s'arrête sur la butée d'ouverture."
                ],
                [
                  "01–25",
                  "S'arrête 1 à 25 tours moteur avant l'ouverture complète."
                ]
              ]
            },
            {
              "code": "34",
              "def": "08",
              "titre": "Accélération au départ MOTEUR 1",
              "valeurs": [
                [
                  "01–10",
                  "01 = démarrage rapide … 10 = démarrage lent et progressif."
                ]
              ]
            },
            {
              "code": "35",
              "def": "08",
              "titre": "Accélération au départ MOTEUR 2",
              "valeurs": [
                [
                  "01–10",
                  "01 = démarrage rapide … 10 = démarrage lent et progressif."
                ]
              ]
            },
            {
              "code": "40",
              "def": "04",
              "titre": "Vitesse en ouverture",
              "valeurs": [
                [
                  "01–05",
                  "01 = 60 % … 05 = 100 %."
                ]
              ]
            },
            {
              "code": "41",
              "def": "04",
              "titre": "Vitesse en fermeture",
              "valeurs": [
                [
                  "01–05",
                  "01 = 60 % … 05 = 100 %."
                ]
              ]
            },
            {
              "code": "43",
              "def": "00",
              "titre": "Espace d'approche en ouverture MOTEUR 1",
              "valeurs": [
                [
                  "00–80",
                  "0 à 80 tours moteur à vitesse minimale (non réglable)."
                ]
              ],
              "note": "Visible seulement pour SMARTY avec SMARTY/EMA (71 01), BE20/400, MONOS4 et BR20/400/R (A1 05 à 08, 11, 12)."
            },
            {
              "code": "44",
              "def": "00",
              "titre": "Espace d'approche en ouverture MOTEUR 2",
              "valeurs": [
                [
                  "00–80",
                  "0 à 80 tours moteur à vitesse minimale (vitesse non réglable)."
                ]
              ],
              "note": "Mêmes conditions que 43."
            },
            {
              "code": "45",
              "def": "00",
              "titre": "Espace d'approche en fermeture MOTEUR 1",
              "valeurs": [
                [
                  "00–80",
                  "0 à 80 tours moteur à vitesse minimale."
                ]
              ],
              "note": "Mêmes conditions que 43."
            },
            {
              "code": "46",
              "def": "00",
              "titre": "Espace d'approche en fermeture MOTEUR 2",
              "valeurs": [
                [
                  "00–80",
                  "0 à 80 tours moteur à vitesse minimale."
                ]
              ],
              "note": "Mêmes conditions que 43."
            }
          ]
        },
        {
          "nom": "Couple et détection d'obstacle",
          "items": [
            {
              "code": "30",
              "def": "07",
              "titre": "Couple moteur",
              "valeurs": [
                [
                  "01",
                  "−35 %."
                ],
                [
                  "02",
                  "−25 %."
                ],
                [
                  "03",
                  "−16 %."
                ],
                [
                  "04",
                  "−8 %."
                ],
                [
                  "05",
                  "0 %."
                ],
                [
                  "06",
                  "+8 %."
                ],
                [
                  "07",
                  "+16 %."
                ],
                [
                  "08",
                  "+25 %."
                ],
                [
                  "09",
                  "+35 %."
                ]
              ],
              "note": "Moins de couple = plus sensible. En dessous de 03 : installations légères, sans vent fort ni grand froid. Vantaux de longueurs différentes : régler le moteur 2 avec 33."
            },
            {
              "code": "33",
              "def": "10",
              "titre": "Couple MOTEUR 2",
              "valeurs": [
                [
                  "01–09",
                  "Comme 30 : 01 = −35 % … 05 = 0 % … 09 = +35 %."
                ],
                [
                  "10",
                  "Couple réglé par 30."
                ]
              ]
            },
            {
              "code": "31",
              "def": "15",
              "titre": "Sensibilité à la force d'impact MOTEUR 1",
              "valeurs": [
                [
                  "01–10",
                  "Couple faible (si le couple moyen ne convient pas)."
                ],
                [
                  "11–19",
                  "Couple moyen, conseillé : 11 = force d'impact mini … 19 = maxi."
                ],
                [
                  "20",
                  "Couple maxi : bord sensible obligatoire."
                ]
              ],
              "note": "Réaction trop lente → baisser 31. Force trop élevée → baisser 30. Refaire l'apprentissage après chaque changement."
            },
            {
              "code": "32",
              "def": "15",
              "titre": "Sensibilité à la force d'impact MOTEUR 2",
              "valeurs": [
                [
                  "01–10",
                  "Couple faible."
                ],
                [
                  "11–19",
                  "Couple moyen, conseillé."
                ],
                [
                  "20",
                  "Couple maxi : bord sensible obligatoire."
                ]
              ],
              "note": "Force trop élevée → baisser 30 (ou 33 si différent de 10). Refaire l'apprentissage après chaque changement."
            },
            {
              "code": "27",
              "def": "03",
              "titre": "Temps d'inversion après bord sensible / obstacle",
              "valeurs": [
                [
                  "00–60",
                  "0 à 60 s."
                ]
              ]
            },
            {
              "code": "49",
              "def": "01",
              "titre": "Tentatives de refermeture après bord sensible / obstacle",
              "valeurs": [
                [
                  "00",
                  "Aucune."
                ],
                [
                  "01–03",
                  "1 à 3 tentatives (conseillé ≤ A2 ; seulement si portail complètement ouvert)."
                ]
              ]
            }
          ]
        },
        {
          "nom": "Serrure électrique",
          "items": [
            {
              "code": "28",
              "def": "00",
              "titre": "Type d'électroserrure",
              "valeurs": [
                [
                  "00",
                  "Serrure normalement non alimentée (alimentée 3 s au début de l'ouverture). Activée par 29."
                ],
                [
                  "01",
                  "Ventouse alimentée portail complètement fermé ; coupée en mouvement."
                ],
                [
                  "02",
                  "Ventouse alimentée portail complètement ouvert ou fermé ; coupée en mouvement."
                ],
                [
                  "10–12",
                  "Serrure non alimentée avec temporisation : 10 = 0,5 s ; 11 = 1 s ; 12 = 1,5 s."
                ]
              ],
              "note": "Ventouse : le mode « low power » est désactivé (L1 non visible)."
            },
            {
              "code": "29",
              "def": "00",
              "titre": "Électroverrouillage",
              "valeurs": [
                [
                  "00",
                  "Désactivé."
                ],
                [
                  "01",
                  "Près de la butée de fermeture, force supplémentaire sur le MOTEUR 1 pour enclencher la serrure."
                ],
                [
                  "02",
                  "Force maximale sur le MOTEUR 1 pour enclencher la serrure ; détection d'obstacle exclue."
                ]
              ]
            },
            {
              "code": "38",
              "def": "00",
              "titre": "Coup de bélier (déblocage de la serrure)",
              "valeurs": [
                [
                  "00",
                  "Désactivé."
                ],
                [
                  "01",
                  "Poussée de fermeture (max 4 s) avant l'ouverture pour décrocher la serrure."
                ]
              ]
            }
          ]
        },
        {
          "nom": "Sécurités : photocellules et bords",
          "items": [
            {
              "code": "50",
              "def": "00",
              "titre": "FT1 en ouverture",
              "valeurs": [
                [
                  "00",
                  "Désactivée."
                ],
                [
                  "01",
                  "ARRÊT jusqu'à la commande suivante."
                ],
                [
                  "02",
                  "INVERSION IMMÉDIATE."
                ],
                [
                  "03",
                  "STOP TEMPORAIRE : reprend l'ouverture une fois dégagée."
                ],
                [
                  "04",
                  "INVERSION RETARDÉE : s'arrête, ferme une fois dégagée."
                ]
              ]
            },
            {
              "code": "51",
              "def": "02",
              "titre": "FT1 en fermeture",
              "valeurs": [
                [
                  "00",
                  "Désactivée."
                ],
                [
                  "01",
                  "ARRÊT."
                ],
                [
                  "02",
                  "INVERSION IMMÉDIATE."
                ],
                [
                  "03",
                  "STOP TEMPORAIRE : reprend la fermeture une fois dégagée."
                ],
                [
                  "04",
                  "INVERSION RETARDÉE : s'arrête, ouvre une fois dégagée."
                ]
              ]
            },
            {
              "code": "52",
              "def": "01",
              "titre": "FT1 avec portail fermé",
              "valeurs": [
                [
                  "00",
                  "Ouverture impossible si occultée."
                ],
                [
                  "01",
                  "Ouvre sur commande même occultée."
                ],
                [
                  "02",
                  "Occultée = commande d'ouverture (seulement si L1 00)."
                ]
              ],
              "note": "Non visible si A8 02 ou A8 03 / 04."
            },
            {
              "code": "53",
              "def": "00",
              "titre": "FT2 en ouverture",
              "valeurs": [
                [
                  "00",
                  "Désactivée."
                ],
                [
                  "01",
                  "ARRÊT jusqu'à la commande suivante."
                ],
                [
                  "02",
                  "INVERSION IMMÉDIATE."
                ],
                [
                  "03",
                  "STOP TEMPORAIRE : reprend l'ouverture une fois dégagée."
                ],
                [
                  "04",
                  "INVERSION RETARDÉE : s'arrête, ferme une fois dégagée."
                ]
              ]
            },
            {
              "code": "54",
              "def": "00",
              "titre": "FT2 en fermeture",
              "valeurs": [
                [
                  "00",
                  "Désactivée."
                ],
                [
                  "01",
                  "ARRÊT."
                ],
                [
                  "02",
                  "INVERSION IMMÉDIATE."
                ],
                [
                  "03",
                  "STOP TEMPORAIRE : reprend la fermeture une fois dégagée."
                ],
                [
                  "04",
                  "INVERSION RETARDÉE : s'arrête, ouvre une fois dégagée."
                ]
              ]
            },
            {
              "code": "55",
              "def": "01",
              "titre": "FT2 avec portail fermé",
              "valeurs": [
                [
                  "00",
                  "Ouverture impossible si occultée."
                ],
                [
                  "01",
                  "Ouvre sur commande même occultée."
                ],
                [
                  "02",
                  "Occultée = commande d'ouverture."
                ]
              ],
              "note": "Non visible si A8 02, 03 ou 04."
            },
            {
              "code": "56",
              "def": "00",
              "titre": "Fermeture 6 s après passage dans une photocellule",
              "valeurs": [
                [
                  "00",
                  "Désactivée."
                ],
                [
                  "01",
                  "Passage dans FT1 → fermeture 6 s après."
                ],
                [
                  "02",
                  "Passage dans FT2 → fermeture 6 s après."
                ]
              ],
              "note": "Visible seulement si A8 03 ou 04. Non géré en stand-by portail ouvert (photocellules non alimentées)."
            },
            {
              "code": "57",
              "def": "00",
              "titre": "Type de contact FT1 / FT2 / ST (NF ou 8k2)",
              "valeurs": [
                [
                  "00",
                  "FT1 NF · FT2 NF · ST NF (standard)."
                ],
                [
                  "01",
                  "FT1 8k2 · FT2 NF · ST NF."
                ],
                [
                  "02",
                  "FT1 NF · FT2 8k2 · ST NF."
                ],
                [
                  "03",
                  "FT1 8k2 · FT2 8k2 · ST NF."
                ],
                [
                  "10",
                  "FT1 NF · FT2 NF · ST 8k2."
                ],
                [
                  "11",
                  "FT1 8k2 · FT2 NF · ST 8k2."
                ],
                [
                  "12",
                  "FT1 NF · FT2 8k2 · ST 8k2."
                ],
                [
                  "13",
                  "FT1 8k2 · FT2 8k2 · ST 8k2."
                ]
              ],
              "note": "Pour les dispositifs à contact 8,2 kΩ (normes EN 12453 / EN 12445)."
            },
            {
              "code": "58",
              "def": "00",
              "titre": "Essai des photocellules sur FT1",
              "valeurs": [
                [
                  "00",
                  "Désactivé."
                ],
                [
                  "01",
                  "En ouverture seulement."
                ],
                [
                  "02",
                  "En fermeture seulement."
                ],
                [
                  "03",
                  "En ouverture et en fermeture."
                ]
              ],
              "note": "Visible si A8 02 ou 04. L'essai dure au plus 3 s OFF / 3 s ON."
            },
            {
              "code": "59",
              "def": "00",
              "titre": "Essai des photocellules sur FT2",
              "valeurs": [
                [
                  "00",
                  "Désactivé."
                ],
                [
                  "01",
                  "En ouverture seulement."
                ],
                [
                  "02",
                  "En fermeture seulement."
                ],
                [
                  "03",
                  "En ouverture et en fermeture."
                ]
              ],
              "note": "Visible si A8 02 ou 04."
            },
            {
              "code": "73",
              "def": "03",
              "titre": "Bord sensible COS1",
              "valeurs": [
                [
                  "00",
                  "Non installé."
                ],
                [
                  "01",
                  "Contact NF, inverse uniquement en ouverture."
                ],
                [
                  "02",
                  "Résistif 8k2, inverse uniquement en ouverture."
                ],
                [
                  "03",
                  "Contact NF, inverse toujours."
                ],
                [
                  "04",
                  "Résistif 8k2, inverse toujours."
                ],
                [
                  "12",
                  "Deux bords 8k2 en parallèle (4k1), inverse seulement en ouverture."
                ],
                [
                  "14",
                  "Deux bords 8k2 en parallèle (4k1), inverse toujours."
                ]
              ]
            },
            {
              "code": "74",
              "def": "00",
              "titre": "Bord sensible COS2",
              "valeurs": [
                [
                  "00",
                  "Non installé."
                ],
                [
                  "01",
                  "Contact NF, inverse uniquement en fermeture."
                ],
                [
                  "02",
                  "Résistif 8k2, inverse uniquement en fermeture."
                ],
                [
                  "03",
                  "Contact NF, inverse toujours."
                ],
                [
                  "04",
                  "Résistif 8k2, inverse toujours."
                ],
                [
                  "12",
                  "Deux bords 8k2 en parallèle (4k1), inverse seulement en ouverture."
                ],
                [
                  "14",
                  "Deux bords 8k2 en parallèle (4k1), inverse toujours."
                ]
              ]
            }
          ]
        },
        {
          "nom": "Radio, sorties et éclairage",
          "items": [
            {
              "code": "76",
              "def": "00",
              "titre": "1er canal radio (PR1)",
              "valeurs": [
                [
                  "00",
                  "PAS (pas-à-pas)."
                ],
                [
                  "01",
                  "OUVERTURE PARTIELLE."
                ],
                [
                  "02",
                  "OUVERTURE."
                ],
                [
                  "03",
                  "FERMETURE."
                ],
                [
                  "04",
                  "ARRÊT."
                ],
                [
                  "05",
                  "Lumière de courtoisie tant que la télécommande est active ; 79 ignoré."
                ],
                [
                  "06",
                  "Lumière de courtoisie ON-OFF ; 79 ignoré."
                ],
                [
                  "07",
                  "PAS avec confirmation."
                ],
                [
                  "08",
                  "OUVERTURE PARTIELLE avec confirmation."
                ],
                [
                  "09",
                  "OUVERTURE avec confirmation."
                ],
                [
                  "10",
                  "FERMETURE avec confirmation."
                ]
              ],
              "note": "Confirmation : la touche doit être confirmée dans les 2 s par une 2e touche (ex. 76 07 et 77 01 : CHA puis CHB → ouverture partielle)."
            },
            {
              "code": "77",
              "def": "01",
              "titre": "2e canal radio (PR2)",
              "valeurs": [
                [
                  "00–10",
                  "Mêmes valeurs que 76."
                ]
              ]
            },
            {
              "code": "78",
              "def": "00",
              "titre": "Clignotant",
              "valeurs": [
                [
                  "00",
                  "Intermittence gérée par le clignotant."
                ],
                [
                  "01",
                  "Intermittence lente."
                ],
                [
                  "02",
                  "Lente en ouverture, rapide en fermeture."
                ]
              ]
            },
            {
              "code": "18",
              "def": "00",
              "titre": "Mode de la sortie COR",
              "valeurs": [
                [
                  "00",
                  "Lumière de courtoisie standard, gérée par 79."
                ],
                [
                  "01",
                  "Fermé si centrale OK, ouvert en alarme."
                ],
                [
                  "02",
                  "Fermé sur secteur ou batterie chargée ; ouvert si batterie faible (seuil 85) ou alarme btLO."
                ],
                [
                  "03",
                  "Fermé sans anomalie 1 ni 2 ; ouvert si l'une des deux."
                ],
                [
                  "04",
                  "Fermé si portail pas complètement ouvert ; ouvert quand complètement ouvert."
                ],
                [
                  "05",
                  "Fermé si portail pas complètement fermé ; ouvert quand complètement fermé."
                ]
              ],
              "note": "Utilisable seulement si L1 00."
            },
            {
              "code": "79",
              "def": "60",
              "titre": "Lumière de courtoisie",
              "valeurs": [
                [
                  "00",
                  "Désactivée."
                ],
                [
                  "01",
                  "Impulsion au début de chaque manœuvre."
                ],
                [
                  "02",
                  "Allumée pendant toute la manœuvre."
                ],
                [
                  "03–90",
                  "Reste allumée 3 à 90 s après la manœuvre."
                ],
                [
                  "92–99",
                  "Reste allumée 2 à 9 min après la manœuvre."
                ]
              ],
              "note": "Visible seulement si 18 00."
            }
          ]
        },
        {
          "nom": "Batterie et veille",
          "items": [
            {
              "code": "85",
              "def": "03",
              "titre": "Gestion du fonctionnement sur batterie",
              "valeurs": [
                [
                  "00",
                  "Accepte les commandes jusqu'à épuisement de la batterie."
                ],
                [
                  "01",
                  "Seuil minimum (22 V en 2×12 V ; 36,4 V en 3×12 V)."
                ],
                [
                  "02",
                  "Seuil intermédiaire (23 V ; 36,8 V)."
                ],
                [
                  "03",
                  "Seuil maximum (24 V ; 37,2 V)."
                ]
              ],
              "note": "Comportement au seuil réglé par 83 ; signalisation possible par COR (18)."
            },
            {
              "code": "83",
              "def": "00",
              "titre": "Limitations sur batterie (au seuil 85, plus de 30 s)",
              "valeurs": [
                [
                  "00",
                  "Aucune limitation (signalisation possible via COR)."
                ],
                [
                  "01",
                  "N'accepte que l'ouverture et ne referme plus."
                ],
                [
                  "02",
                  "Préclignote 5 s, ouvre et n'accepte plus que la fermeture."
                ],
                [
                  "03",
                  "N'accepte que la fermeture (même si ORO est actif et 80 01)."
                ],
                [
                  "04",
                  "Préclignote 5 s, ferme et n'accepte plus que l'ouverture."
                ]
              ],
              "note": "Visible seulement si 85 différent de 00."
            },
            {
              "code": "84",
              "def": "00",
              "titre": "Type de batterie et réduction de consommation",
              "valeurs": [
                [
                  "00",
                  "24 V (2×12 V) avec B71/BCHP : performances réduites pour l'autonomie."
                ],
                [
                  "01",
                  "24 V avec B71/BCHP : pas de réduction, consommation maxi."
                ],
                [
                  "02",
                  "36 V (3×12 V) avec chargeur externe : performances réduites pour l'autonomie."
                ],
                [
                  "03",
                  "36 V avec chargeur externe : pas de réduction, consommation maxi."
                ]
              ],
              "note": "Mauvais réglage : sans secteur, blocage avec btLO (84 01 ou 02 avec 2×12 V) ou signalisation bnod."
            },
            {
              "code": "L1",
              "def": "04",
              "titre": "Veille « low power »",
              "valeurs": [
                [
                  "00",
                  "Désactivée."
                ],
                [
                  "01",
                  "Veille après 5 min d'inactivité."
                ],
                [
                  "02",
                  "Après 10 min."
                ],
                [
                  "03",
                  "Après 15 min."
                ],
                [
                  "04",
                  "Après 20 min."
                ]
              ],
              "note": "Pas de veille portail ouvert en attente de refermeture (A2, 21) ni pendant 81/82. Non disponible avec frein électrique (64 01) ou ventouse (28 01/02). En veille : pas de récepteur externe, pas de batterie, pas de B74/BCONNECT."
            }
          ]
        },
        {
          "nom": "Communication et maintenance",
          "items": [
            {
              "code": "L0",
              "def": "00",
              "titre": "Communication série",
              "valeurs": [
                [
                  "00",
                  "Désactivée."
                ],
                [
                  "01",
                  "Module B74/BCONNECT."
                ],
                [
                  "02",
                  "Carte de débogage (usage interne)."
                ]
              ],
              "note": "B74/BCONNECT nécessite L1 00."
            },
            {
              "code": "86",
              "def": "00",
              "titre": "Alarme d'entretien périodique",
              "valeurs": [
                [
                  "00",
                  "Désactivée."
                ],
                [
                  "01",
                  "Entretien après 87 × 10 heures de manœuvre."
                ],
                [
                  "02",
                  "Entretien après 87 × 100 heures de manœuvre."
                ]
              ],
              "note": "Visible seulement si un mot de passe personnel est enregistré (P1–P4). Au seuil : ASSt à l'écran et clignotant 1 s / 4 s à moteur arrêté. Remise à zéro : débloquer (CP 00), TEST 5 s jusqu'à ASSt puis UPdt, maintenir jusqu'à donE. Désactivée définitivement après 8000 h."
            },
            {
              "code": "87",
              "def": "00",
              "titre": "Heures avant entretien",
              "valeurs": [
                [
                  "00",
                  "Désactivé."
                ],
                [
                  "01–80",
                  "10 à 800 h (86 01) ou 100 à 8000 h (86 02)."
                ]
              ],
              "note": "Visible si 86 01 ou 02. À ressaisir après un retour aux valeurs usine."
            },
            {
              "code": "FA",
              "def": "00",
              "titre": "Retour aux valeurs usine",
              "valeurs": [
                [
                  "Procédure",
                  "Afficher FA 00, maintenir + et − 4 s : rES- clignote, valeurs usine restaurées."
                ],
                [
                  "Au démarrage",
                  "Maintenir ▲ et ▼ 4 s à la mise sous tension, avant l'affichage de la version firmware."
                ]
              ],
              "note": "Impossible si un mot de passe est actif (le débloquer avec P1–P4, CP 00). Non restaurés : A1, 28, 29, 64, 70, 71, 86, 87, L0, L1 → vérifier qu'ils correspondent à l'installation."
            },
            {
              "code": "n0–n6",
              "def": "lecture",
              "titre": "Identification de la carte",
              "valeurs": [
                [
                  "n0",
                  "Version matérielle."
                ],
                [
                  "n1",
                  "Année de production."
                ],
                [
                  "n2",
                  "Semaine de production."
                ],
                [
                  "n3 n4 n5",
                  "Numéro de série."
                ],
                [
                  "n6",
                  "Version firmware."
                ]
              ]
            },
            {
              "code": "o0–o1",
              "def": "lecture",
              "titre": "Compteur de manœuvres",
              "valeurs": [
                [
                  "o0 o1",
                  "Lire à la suite × 100. Ex. 01 23 → 12 300 manœuvres (toute activation du moteur)."
                ]
              ]
            },
            {
              "code": "h0–h1",
              "def": "lecture",
              "titre": "Heures de manœuvre",
              "valeurs": [
                [
                  "h0 h1",
                  "Ex. 01 23 → 123 heures."
                ]
              ]
            },
            {
              "code": "d0–d1",
              "def": "lecture",
              "titre": "Jours sous tension",
              "valeurs": [
                [
                  "d0 d1",
                  "Ex. 01 23 → 123 jours."
                ]
              ]
            },
            {
              "code": "P1–P4",
              "def": "00",
              "titre": "Mot de passe",
              "valeurs": [
                [
                  "Activer",
                  "Saisir P1, P2, P3, P4 ; afficher CP ; maintenir + et − 4 s (l'écran clignote) ; couper puis remettre le courant et vérifier CP 01."
                ],
                [
                  "Débloquer",
                  "Saisir le mot de passe, vérifier CP 00. Se réactive après 30 min sans appui ou à la remise sous tension."
                ],
                [
                  "Supprimer",
                  "Débloquer (CP 00), mettre P1 à P4 à 00, afficher CP, maintenir + et − 4 s, couper puis remettre le courant."
                ]
              ],
              "note": "Mot de passe perdu : contacter l'assistance Roger."
            },
            {
              "code": "CP",
              "def": "00",
              "titre": "État du mot de passe",
              "valeurs": [
                [
                  "00",
                  "Protection désactivée."
                ],
                [
                  "01",
                  "Protection activée."
                ]
              ]
            }
          ]
        }
      ]
    },
    "bornier": {
      "groupes": [
        {
          "nom": "Puissance",
          "bornes": [
            {
              "n": "L · N · ⏚",
              "label": "Secteur",
              "desc": "230 V ±10 % 50/60 Hz (115 V sur EDGE1/115/BOX), fusible 5x20 T2A. Câble H07RN-F 2G1,5. Hors plage, le brushless fonctionne mal",
              "t": "alim"
            },
            {
              "n": "SEC1 · SEC2",
              "label": "Transfo",
              "desc": "Secondaire du transformateur : 26 V~ alimentation moteur (SEC1), 19 V~ logique et accessoires (SEC2). Câblé usine ; inversé = SECO",
              "t": "alim"
            },
            {
              "n": "X · Y · Z",
              "label": "Moteur 1",
              "desc": "Moteur brushless 1. Sens inversé : échanger deux fils",
              "t": "moteur"
            },
            {
              "n": "Z · Y · X",
              "label": "Moteur 2",
              "desc": "Moteur brushless 2. Sens inversé : échanger deux fils. Un seul moteur : 70 01",
              "t": "moteur"
            },
            {
              "n": "BATTERY − +",
              "label": "Batteries",
              "desc": "Kit B71/BCHP (chargeur) + B71/BCHP/EXT (2 x 12 V 4,5 Ah, AGM). Utilisables seulement avec L1 00 (low power désactivé). Contrôler tous les 6 mois",
              "t": "alim"
            }
          ]
        },
        {
          "nom": "Sorties",
          "bornes": [
            {
              "n": "13 · 14",
              "label": "COR",
              "desc": "Contact libre : lumière de courtoisie 230 V 100 W / 24 V 40 W, ou signalisation selon le paramètre 18",
              "t": "sortie"
            },
            {
              "n": "16 · 15",
              "label": "LAM",
              "desc": "Clignotant 24 V DC 25 W, intermittence 50 %. Préclignotement : A5, mode : 78",
              "t": "sortie"
            },
            {
              "n": "17 · 15",
              "label": "ES",
              "desc": "Électroserrure 12 V DC 15 W (max 40 V). Réglages : 28 et 29",
              "t": "sortie"
            },
            {
              "n": "20 · 19",
              "label": "+SC · COM",
              "desc": "Voyant portail ouvert 24 V 3 W (A8). Ou alimentation des TX pour test photocellules (A8 02) / économie batterie (A8 03, 04)",
              "t": "sortie"
            }
          ]
        },
        {
          "nom": "Sécurités NF ou 8k2 (param. 57)",
          "bornes": [
            {
              "n": "22 · 21",
              "label": "FT2",
              "desc": "Photocellules FT2. Usine : 53 00, 54 00 (désactivée), 55 01. Absente : ponter ou 53 00 + 54 00",
              "t": "nf"
            },
            {
              "n": "23 · 21",
              "label": "FT1",
              "desc": "Photocellules FT1. Usine : 50 00 (ignorée en ouverture), 51 02 (inversion en fermeture), 52 01. Absente : ponter ou 50 00 + 51 00",
              "t": "nf"
            },
            {
              "n": "24 · 26",
              "label": "COS2",
              "desc": "Bord sensible 2, NF ou 8k2. Désactivé d'usine (74 00)",
              "t": "nf"
            },
            {
              "n": "25 · 26",
              "label": "COS1",
              "desc": "Bord sensible 1, NF ou 8k2. Usine 73 03 : inverse toujours. Absent : ponter ou 73 00",
              "t": "nf"
            },
            {
              "n": "27 · 26",
              "label": "ST",
              "desc": "STOP NF ou 8k2 — shunté d'usine",
              "t": "nf"
            }
          ]
        },
        {
          "nom": "Commandes NO",
          "bornes": [
            {
              "n": "32 · 31",
              "label": "ORO",
              "desc": "Horloge (paramètre 80). Ne jamais ponter si inutilisée",
              "t": "no"
            },
            {
              "n": "33 · 37",
              "label": "AP",
              "desc": "Ouverture. Maintenue : pas de fermeture automatique",
              "t": "no"
            },
            {
              "n": "34 · 37",
              "label": "CH",
              "desc": "Fermeture",
              "t": "no"
            },
            {
              "n": "35 · 37",
              "label": "PP",
              "desc": "Pas-à-pas (paramètre A4)",
              "t": "no"
            },
            {
              "n": "36 · 37",
              "label": "PED",
              "desc": "Ouverture partielle : vantail 1 entier sur 2 vantaux, 50 % sur 1 vantail (paramètre 15)",
              "t": "no"
            }
          ]
        },
        {
          "nom": "Alimentation, antenne, connecteurs",
          "bornes": [
            {
              "n": "18 · 15",
              "label": "+24 V",
              "desc": "Alimentation accessoires 24 V, 20 W (750 mA) max",
              "t": "alim"
            },
            {
              "n": "29 · 30",
              "label": "ANT",
              "desc": "Antenne : câble RG58, 10 m max, sans raccord",
              "t": "autre"
            },
            {
              "n": "ENC",
              "label": "Encodeur absolu",
              "desc": "SMARTY/EMA (SMARTY) : en parallèle sur les phases moteur, petit sifflement normal. Activer avec 71 01 puis apprentissage",
              "t": "moteur"
            },
            {
              "n": "RECEIVER",
              "label": "Récepteur",
              "desc": "H93/RX2LP/I relié au B70/MODLP : PR1 pas-à-pas (76), PR2 partielle (77). Indispensable au « low power »",
              "t": "autre"
            },
            {
              "n": "EXP",
              "label": "B74/BCONNECT",
              "desc": "Module Wi-Fi (L0 01, L1 00)",
              "t": "autre"
            }
          ]
        }
      ],
      "fusibles": "F1 20 A (ATO257) puissance moteurs · F2 4 A (ATO257) électroserrure · F3 3 A (ATO257) accessoires · F4 T2A (5x20) transformateur",
      "notes": [
        "Sécurités absentes : shunter sur COM ou les désactiver par paramètres 50, 51, 53, 54, 73, 74.",
        "Même type de moteur obligatoire sur les deux vantaux.",
        "Photocellules conseillées : R90/F4ES, G90/F4ES ou T90/F4S.",
        "SMARTY avec SMARTY/EMA : ne pas installer pour ouvrir vers l'extérieur."
      ]
    },
    "apprentissage": {
      "avant": [
        "A1 — modèle : 01 BE20/200/HS · 02 BR20 · 03 BH23/282 · 04 BR21/351-361-362 (usine) · 05 SMARTY 5/7/8T · 06 SMARTY 7R · 07 SMARTY 5R5 · 08 SMARTY 4HS · 09 BH23/252/HS · 10 BR21/351-361/HS · 11 BE20/400 ou MONOS4 · 12 BR20/400/R.",
        "SMARTY réversible (06, 07) : 64 01 et 71 01. SMARTY avec encodeur SMARTY/EMA : 71 01.",
        "70 — nombre de moteurs : 70 01 un vantail, 70 02 deux vantaux (usine).",
        "Homme présent désactivé : A7 00.",
        "Butées mécaniques d'arrêt en place en ouverture ET en fermeture.",
        "Vantaux en position fermée, en appui sur les butées.",
        "TEST : contrôler commandes et sécurités ; shunter ou désactiver celles qui ne sont pas installées (50, 51, 53, 54, 73, 74).",
        "Si TEST affiche 00 : prêt. S'il affiche dAtA : PROG jusqu'à APP- puis apprentissage. S'il affiche un n° de borne : régler la sécurité d'abord."
      ],
      "etapes": [
        "Maintenir PROG 4 s : APP- s'affiche.",
        "Appuyer de nouveau sur PROG (1 clic) : Auto s'affiche.",
        "MOTEUR 1 démarre en ouverture à faible vitesse.",
        "Après le retard réglé par 25 (3 s d'usine), MOTEUR 2 démarre en ouverture.",
        "Butée d'ouverture atteinte : arrêt bref, Auto clignote 2 s.",
        "Auto redevient fixe : MOTEUR 2 ferme le premier, puis après le retard 26 (5 s d'usine) MOTEUR 1 ferme jusqu'aux butées.",
        "Réussi : retour à l'affichage de l'état des commandes et sécurités."
      ],
      "apres": [
        "APPE : TEST pour annuler, vérifier la sécurité en alarme, recommencer.",
        "APPL : TEST pour annuler, s'assurer que les deux vantaux sont entièrement fermés, recommencer.",
        "Refaire l'apprentissage après tout changement des paramètres 31 et 32 (sensibilité aux obstacles).",
        "Vantail qui s'inverse sur la butée : augmenter 13 (vantail 1) ou 14 (vantail 2)."
      ]
    }
  },
  {
    id: "roger-ctrl",
    nom: "CTRL (barrière BIONIK)",
    modeles: "Barrières BIONIK : BI/004HP, BI/004, BI/006, BI/008 (BIONIK4, 4HP, 6, 8)",
    type: "Barrière brushless 36 V à encodeur — afficheur 4 chiffres, touches UP / DOWN / + / − / PROG / TEST",
    source: "Notice Roger IS88 Rev.28, firmware P4.35",
    codes: [
      { code: "P4.35", type: "afficheur", titre: "Version du firmware", action: "Affichée quelques secondes à la mise sous tension. Ensuite : état des commandes et sécurités (onglet Écran)." },
      { code: "FUSE", type: "afficheur", titre: "Fusible F1 grillé", action: "Remplacer F1 (10 A) hors tension. Sur batterie, ce message n'apparaît pas." },
      { code: "OFSt", type: "afficheur", titre: "Anomalie de tension d'alimentation / initialisation échouée", action: "Couper l'alimentation, attendre 10 s, remettre. Si ça persiste : remplacer la centrale." },
      { code: "PrOt", type: "afficheur", titre: "Surintensité dans l'onduleur", action: "Appuyer deux fois sur TEST ou donner 3 commandes de suite." },
      { code: "SECO", type: "afficheur", titre: "Mauvais raccordement SEC1-SEC2 du transformateur", action: "Échanger les connexions SEC1 et SEC2." },
      { code: "dAtA", type: "afficheur", titre: "Données de course / étalonnage / paramètre 71 modifié", action: "Course : vérifier l'équilibrage du ressort barrière débloquée, TEST et contrôler les sécurités, refaire l'apprentissage. Étalonnage (PHAS) échoué : respecter les temps, attendre que PHAS clignote avant de rebloquer. Après changement de 71 : tige à 45°, déplacer le ressort côté ouverture, PROG jusqu'à APP- puis apprentissage." },
      { code: "Mot", type: "afficheur", titre: "Moteur non raccordé", action: "Vérifier le câble moteur (X-Y-Z, bornes 7-8-9)." },
      { code: "brEA", type: "afficheur", titre: "Système BreakAway ACS/BA/60 en alarme", action: "Vérifier le paramètre 19 et le branchement de l'ACS/BA/60. Raccrocher la lisse ; vérifier si elle est endommagée." },
      { code: "xx EE", type: "afficheur", titre: "Erreur de paramètre (ex. 21EE, 33EE)", action: "Le paramètre indiqué a une valeur incorrecte : la corriger et enregistrer." },
      { code: "COM5", type: "afficheur", titre: "Firmwares MASTER / SLAVE incompatibles", action: "Vérifier le paramètre n7 : même version de firmware sur les deux centrales. Sinon : assistance Roger." },
      { code: "StoP", type: "afficheur", titre: "« StoP » + clignotant : barrière débloquée ou sécurité d'arrêt", action: "Déblocage ouvert : BIONIK4HP/6/8 refermer avec la clé (2 tours complets sens horaire) ; BIONIK4 fermer la trappe et tourner la clé. Trappe d'inspection ouverte : la fermer, vérifier le micro-interrupteur. Connecteurs LOCKS : vérifier, ponter celui qui ne sert pas. Bouton STOP actif plus de 5 s : vérifier. MASTER/SLAVE : BreakAway activé sur la MASTER, le rebrancher." },
      { code: "EnE1 / EnE2", type: "afficheur", titre: "Encodeur 1 / 2 non branché", action: "Vérifier le raccordement de l'encodeur (ENC1 / ENC2, hors tension). Si ça persiste : remplacer l'encodeur." },
      { code: "EnE3 / EnE4", type: "afficheur", titre: "Grave dysfonctionnement de l'encodeur 1 / 2", action: "TEST. Si l'erreur revient : éteindre la centrale 5 s puis rallumer. Si ça persiste : remplacer l'encodeur." },
      { code: "EnE5 / EnE6", type: "afficheur", titre: "Dysfonctionnement de l'encodeur 1 / 2", action: "TEST ou 3 commandes de suite ; si ça persiste, remplacer l'encodeur. Sur batteries : batteries presque déchargées." },
      { code: "EnE7 / EnE8", type: "afficheur", titre: "Erreur de calcul de l'encodeur 1 / 2", action: "Refaire l'apprentissage de la course." },
      { code: "tEMP", type: "afficheur", titre: "Protection thermique de l'onduleur", action: "Le fonctionnement reprend tout seul dans les 2 minutes." },
      { code: "btLO", type: "afficheur", titre: "Batteries déchargées", action: "Attendre le retour du secteur." },
      { code: "bAtt", type: "afficheur", titre: "Fonctionnement sur batteries", action: "Coupure secteur : la centrale tourne sur batteries (clignotant intermittent) jusqu'au retour du réseau ou jusqu'au seuil bas (btLO)." },
      { code: "bnod", type: "afficheur", titre: "Batterie non détectée alors que 85 est différent de 00", action: "Modifier la valeur du paramètre 87 (type de batterie) ; vérifier aussi le raccordement des batteries." },
      { code: "COM1", type: "afficheur", titre: "Communication RS485 MASTER / SLAVE absente", action: "Vérifier les bornes COM-LNA-LNB (18-19-20), le paramètre A0 et la présence du kit batteries sur les deux barrières." },
      { code: "COM2", type: "afficheur", titre: "Deux centrales MASTER détectées", action: "Vérifier A0 (MASTER 11, SLAVE 10)." },
      { code: "COM3", type: "afficheur", titre: "Erreur de transfert des paramètres MASTER / SLAVE", action: "Vérifier le branchement COM-LNA-LNB." },
      { code: "COM4", type: "afficheur", titre: "Modèles de centrales incompatibles", action: "Vérifier l'installation et remplacer une ou les deux centrales." },
      { code: "S-CH", type: "afficheur", titre: "Recherche de la barrière SLAVE (A0 11)", action: "Normal quelques secondes à l'activation MASTER. Le point C485 s'allume quand la SLAVE est trouvée." },
      { code: "noPH", type: "afficheur", titre: "Réglage du moteur échoué (apprentissage)", action: "Refaire l'apprentissage. Vérifier le câble encodeur 1, la rotation libre du moteur, la tension secteur et la section du câble. Si ça persiste : assistance." },
      { code: "APPE", type: "afficheur", titre: "Erreur d'apprentissage", action: "TEST appuyé par erreur, sécurité en alarme ou chute de tension : refaire l'apprentissage après avoir vérifié les sécurités et l'alimentation." },
      { code: "Mauvaise manœuvre", type: "symptome", titre: "La barrière ne fait pas la manœuvre souhaitée", action: "Paramètre 71 (position droite / gauche) incorrect : le corriger et refaire l'apprentissage." },
      { code: "Ouvre et referme court", type: "symptome", titre: "La barrière s'ouvre et se referme sur une courte distance, puis s'arrête", action: "Vérifier A1 (modèle et longueur de lisse) puis refaire l'apprentissage. Adapter 33, 34, 40, 41. Vérifier l'équilibrage du ressort." },
      { code: "Flash HS", type: "symptome", titre: "Le clignotant ne fonctionne pas", action: "Ampoule / LED grillée ou fils débranchés : vérifier le circuit LED et les fils (bornes 16-17)." },
      { code: "Voyant HS", type: "symptome", titre: "Le voyant barrière ouverte ne marche pas", action: "Ampoule grillée ou fils débranchés : vérifier l'ampoule et les fils (bornes 11-10)." },
      { code: "Portée radio faible", type: "symptome", titre: "La télécommande porte peu", action: "Installer l'antenne (bornes 27-26, RG58). Remplacer les piles des émetteurs." },
      { code: "00", type: "test", titre: "TEST : aucune sécurité en alarme", action: "Aucune sécurité en alarme, ou barrière en attente de commande." },
      { code: "21", type: "test", titre: "TEST : STOP / déblocage / trappe d'inspection", action: "Contact STOP ouvert (ponter ST 21 avec COM 22 si absent), dispositif de déblocage ouvert (refermer à la clé, vérifier le micro-interrupteur) ou porte d'inspection ouverte (la fermer, vérifier le micro-interrupteur)." },
      { code: "23", type: "test", titre: "TEST : bord sensible COS ouvert", action: "Vérifier le branchement. Inutilisé : 73 00 ou ponter COS (23) avec COM (22)." },
      { code: "24", type: "test", titre: "TEST : photocellule FT ouverte", action: "Vérifier le branchement (visible sur la barrière MASTER). Inutilisée : 50 00 et 51 00 ou ponter FT (24) avec COM (13)." },
      { code: "br", type: "test", titre: "TEST : système BreakAway en défaut", action: "BreakAway activé (19) mais non branché ou mal branché : vérifier 19 et le branchement." },
      { code: "rS", type: "test", titre: "TEST : barrière MASTER bloquée (vu sur la SLAVE)", action: "STOP actif sur la barrière MASTER : vérifier le bouton STOP de la MASTER ou ponter ST avec COM sur la MASTER." },
      { code: "PP · CH · AP · PE · Or", type: "test", titre: "TEST : commande active sans action", action: "Contact NO défectueux ou bouton mal raccordé : vérifier le contact avec COM (28 ; ORO avec 34). Ne jamais ponter ORO s'il n'est pas utilisé." },
      { code: "POWER éteinte", type: "led", titre: "LED POWER éteinte", action: "Pas d'alimentation ou fusible grillé : vérifier le câble, remplacer le fusible hors tension." },
      { code: "POWER clignote", type: "led", titre: "LED POWER clignote lentement, afficheur éteint", action: "Veille après 30 min d'inactivité : appuyer sur UP, DOWN, + ou −." }
    ],
    afficheur: {
      intro: "En fonctionnement normal, l'afficheur ne montre pas des chiffres mais l'état des entrées : certains segments correspondent chacun à une commande ou à une sécurité.",
      ecrans: [
        { nom: "État des commandes", digits: [
          { seg: { a: "AP", g: "PP", d: "CH" }, dp: "POWER" },
          { seg: { a: "PED", d: "ORO" }, dp: "C485" }
        ]},
        { nom: "État des sécurités", digits: [
          { seg: { a: "FT", g: "COS" }, dp: null },
          { seg: { g: "BREAK" }, dp: "STOP" }
        ]}
      ],
      reperes: {
        AP:    { g: "commande", nom: "Ouverture", repos: "Éteint", detail: "S'allume à la réception d'une commande d'ouverture (borne 32)." },
        PP:    { g: "commande", nom: "Pas-à-pas", repos: "Éteint", detail: "S'allume à la réception d'une commande pas-à-pas (borne 30 ou radio PR1)." },
        CH:    { g: "commande", nom: "Fermeture", repos: "Éteint", detail: "S'allume à la réception d'une commande de fermeture (borne 31 ou radio PR2)." },
        PED:   { g: "commande", nom: "Ouverture partielle", repos: "Éteint", detail: "S'allume à la réception d'une commande PED (borne 29) : sur la barrière, elle ouvre toujours en totalité." },
        ORO:   { g: "commande", nom: "Horloge", repos: "Éteint", detail: "Allumé tant que le contact horloge (bornes 33-34) est fermé." },
        POWER: { g: "led", nom: "Alimentation", repos: "Allumé", detail: "Carte alimentée. Clignote lentement en veille (afficheur éteint). Éteint : pas de tension ou fusible grillé." },
        C485:  { g: "led", nom: "Communication RS485", repos: "Allumé si MASTER/SLAVE", detail: "Sur la MASTER (A0 11) : s'allume quand la barrière SLAVE est détectée. Éteint en installation simple (A0 00)." },
        FT:    { g: "securite", nom: "Photocellule FT", repos: "Allumé", detail: "Éteint = faisceau coupé ou non raccordé (bornes 24-13). Clignotant = désactivé par paramètre." },
        COS:   { g: "securite", nom: "Bord sensible COS", repos: "Allumé", detail: "Éteint = bord actionné ou non raccordé (bornes 23-22). Clignotant = désactivé (73 00, usine)." },
        BREAK: { g: "securite", nom: "Capteur BreakAway ACS/BA/60", repos: "Allumé", detail: "Capteur magnétique de la lisse débrayable. Éteint = lisse décrochée ou capteur non branché. Clignotant = désactivé (19 00)." },
        STOP:  { g: "securite", nom: "STOP / déblocage", repos: "Allumé", detail: "Éteint = contact STOP ouvert (bornes 21-22), déblocage ouvert ou trappe d'inspection ouverte." }
      },
      regles: [
        "Commandes : segments normalement ÉTEINTS, ils s'allument quand la commande arrive.",
        "Sécurités : segments normalement ALLUMÉS. Éteint = en alarme ou non raccordé. Clignotant = désactivé par son paramètre."
      ],
      autres: [
        { titre: "Mode paramètres", texte: "UP / DOWN font défiler : les 2 chiffres de gauche = numéro du paramètre, les 2 de droite = sa valeur. + / − pour modifier ; la valeur clignote, puis l'afficheur clignote vite quand elle est enregistrée. Modification possible seulement moteur à l'arrêt. En MASTER/SLAVE, tout se règle sur la MASTER ; sur la SLAVE : A0, 19 et 73 (31 aussi, selon la notice)." },
        { titre: "Mode TEST (touche TEST)", texte: "Barrière en mouvement : TEST = ARRÊT ; un 2e appui passe en TEST. À gauche pendant 5 s : la commande reçue (AP, CH, PP, PE, Or). À droite : le numéro de la borne de la sécurité en alarme, qui clignote (21 STOP / déblocage / trappe, 23 COS, 24 FT, br BreakAway, rS MASTER bloquée vu sur la SLAVE ; 00 = aucune). Flash et voyant s'allument 1 s. TEST pour sortir (sinon retour seul après 10 s)." },
        { titre: "Mode INFO (TEST 5 s, moteur arrêté)", texte: "Défile avec + / − : P4.35 version · Cnt position en tours (021.6 = barrière à droite, −21.6 = à gauche) · Lun longueur de course en tours · rPM vitesse · AMP courant moteur (016.5 = 16,5 A) · bUS état de l'alimentation (37.6 à 230 V, 33.6 à 207 V, 41.6 à 253 V) · tIn temps de détection d'obstacle (≥ 0,3 s) · MStA / rStA état centrale (assistance Roger) · ErrL erreurs de communication RS485 (problèmes de circuits de la carte) · ErrC erreurs de protocole (câble LNA/LNB/COM trop long, trop près de câbles de puissance, ou difficulté à joindre la SLAVE) ; ▼ remet chaque compteur à zéro · rStA état de la SLAVE (assistance Roger, « ---- » sur la SLAVE) · OC état (OP, CL, -O, -C) · Ot détection d'obstacle · UF sous-tension (U), surintensité (H), dysfonctionnement (S : réduire accélérations et vitesse, vérifier le ressort). La barrière peut être commandée en INFO. Quitter : TEST quelques secondes." },
        { titre: "Veille (stand-by)", texte: "Après 30 min sans action, l'afficheur s'éteint et la LED POWER clignote lentement. UP, DOWN, + ou − le rallument." },
        { titre: "MASTER / SLAVE (deux barrières opposées)", texte: "Câble 3 x 0,5 mm² (30 m max) entre COM-LNA-LNB (18-19-20). A0 11 sur la MASTER, A0 10 sur la SLAVE, puis couper et remettre le courant. Commandes, photocellules et STOP général sur la MASTER ; bords sensibles et BreakAway sur chaque barrière (BreakAway de la SLAVE sur ORO, 19 05). Un obstacle sur une barrière inverse aussi l'autre. Faire l'apprentissage sur les deux barrières." }
      ]
    },
    parametres: {
      intro: "Firmware P4.35. Valeur entre parenthèses = réglage usine. Les valeurs usine de 11, 12, 31, 33, 34, 40, 41, 43, 44 et 65 dépendent du modèle choisi en A1.",
      navigation: [
        "UP ▲ / DOWN ▼ : paramètre suivant / précédent.",
        "+ / − : modifier la valeur (elle clignote). Maintenir pour défiler vite.",
        "Enregistrer : attendre quelques secondes ou passer à un autre paramètre avec UP/DOWN. L'écran clignote vite = valeur enregistrée.",
        "MASTER / SLAVE : tout se règle sur la MASTER ; sur la SLAVE : A0, 19 et 73 (la notice cite aussi 31 en p143).",
        "Si un mot de passe est actif (CP 01), les valeurs sont visibles mais non modifiables : saisir P1–P4 d'abord."
      ],
      groupes: [
        { nom: "Configuration générale", items: [
          { code: "A1", def: "02", titre: "Modèle de barrière et longueur de lisse", valeurs: [
            ["00", "BI/004HP, lisse jusqu'à 3 m."], ["01", "BI/004HP, lisse de 3 à 4,5 m."], ["02", "BI/006, lisse de 4,5 à 6 m."],
            ["03", "BI/004, lisse jusqu'à 3 m."], ["04", "BI/004, lisse de 3 à 4 m."], ["05", "BI/008, lisse jusqu'à 8 m."]],
            note: "Un mauvais réglage peut causer de graves dommages. Valeurs usine selon A1 (11 · 12 · 31 · 33 · 34 · 40 · 41 · 43 · 44 · 65) : 00 et 03 → 08 06 07 05 07 07 07 10 10 04 ; 01 et 04 → 09 09 08 06 08 06 05 10 10 06 ; 02 et 05 → 10 10 09 10 10 04 04 15 30 08." },
          { code: "71", def: "01", titre: "Position de la barrière (vue côté trappe d'inspection)", valeurs: [
            ["00", "Barrière à gauche, passage à droite."], ["01", "Barrière à droite, passage à gauche."]],
            note: "Chaque changement affiche dAtA : PROG jusqu'à APP- puis apprentissage. Changer aussi la position du ou des ressorts. En MASTER/SLAVE, se règle sur la MASTER, la SLAVE se met en position complémentaire." },
          { code: "A0", def: "00", titre: "Communication RS485 MASTER / SLAVE", valeurs: [
            ["00", "Désactivée."], ["10", "Barrière SLAVE."], ["11", "Barrière MASTER : S-CH s'affiche quelques secondes, le point C485 s'allume si la SLAVE est détectée."]],
            note: "Pour deux barrières opposées. Après réglage : couper et remettre l'alimentation. Non restauré par le retour usine." },
          { code: "65", def: "selon A1", titre: "Espace d'arrêt du moteur", valeurs: [
            ["01–10", "01 = freinage rapide, arrêt court … 10 = freinage doux (soft-stop), arrêt plus long."]],
            note: "Conseillé pour les lisses de plus de 4 m. Limité selon A1." }
        ]},
        { nom: "Logique de fonctionnement", items: [
          { code: "A2", def: "00", titre: "Refermeture après pause (depuis barrière complètement ouverte)", valeurs: [
            ["00", "Désactivée."], ["01–15", "1 à 15 tentatives après intervention des photocellules, puis la barrière reste ouverte."], ["99", "Tentatives illimitées."]],
            note: "Non visible sur la SLAVE ni si 83 01, 02 ou 03." },
          { code: "A3", def: "00", titre: "Refermeture après coupure secteur (black-out)", valeurs: [
            ["00", "Désactivée."], ["01", "Si la barrière n'est pas complètement ouverte, elle se ferme au retour du courant après 5 s de préclignotement."]],
            note: "Non visible sur la SLAVE." },
          { code: "A4", def: "00", titre: "Mode de la commande pas-à-pas (PP)", valeurs: [
            ["00", "Ouvre – stop – ferme – stop – ouvre."],
            ["01", "Copropriété, temps de fermeture auto renouvelé (PP ignoré pendant l'ouverture)."],
            ["02", "Copropriété, temps non renouvelé (PP ignoré pendant l'ouverture)."],
            ["03", "Ouvre – ferme – ouvre – ferme."], ["04", "Ouvre – ferme – stop – ouvre."]],
            note: "En 01 / 02 avec A2 00, la copropriété active une tentative de refermeture (A2 01)." },
          { code: "A5", def: "00", titre: "Préclignotement", valeurs: [
            ["00", "Désactivé."], ["01–10", "1 à 10 s avant chaque manœuvre."], ["99", "5 s avant la fermeture seulement."]] },
          { code: "A6", def: "00", titre: "Copropriété sur PED", valeurs: [
            ["00", "PED en pas-à-pas."], ["01", "PED ignoré pendant l'ouverture."]] },
          { code: "A7", def: "00", titre: "Homme présent", valeurs: [
            ["00", "Désactivé."], ["01", "Maintenir AP ou CH ; au relâchement la barrière s'arrête."]],
            note: "Non visible si 83 01, 02 ou 03. Empêche le réalignement MASTER/SLAVE." },
          { code: "21", def: "30", titre: "Temps de fermeture automatique", valeurs: [
            ["00–90", "0 à 90 s de pause."], ["92–99", "2 à 9 min de pause."]],
            note: "Les photocellules relancent le décompte." },
          { code: "22", def: "00", titre: "Ouverture avec exclusion de la fermeture auto", valeurs: [
            ["00", "Désactivée."], ["01", "AP ouvre sans fermeture auto ; l'AP suivant ferme."], ["02", "Idem avec PP."], ["03", "Idem avec PED."]],
            note: "Non visible si A0 ou 83 différent de 00." },
          { code: "80", def: "00", titre: "Contact horloge (ORO)", valeurs: [
            ["00", "Horloge active : s'ouvre et reste ouverte, toute commande ignorée. Fin d'horloge : se ferme."],
            ["01", "Horloge active : s'ouvre et reste ouverte, commandes acceptées. Revenue complètement ouverte, l'horloge reprend."]] },
          { code: "81", def: "00", titre: "Fermeture garantie", valeurs: [
            ["00", "Désactivée (82 non visible)."],
            ["01", "Si la barrière s'arrête après un PP : après le temps 82, préclignotement 5 s puis fermeture."]],
            note: "Ne s'active pas si : commande d'arrêt, bord sensible, tentatives A2 épuisées." },
          { code: "82", def: "03", titre: "Temps avant fermeture garantie", valeurs: [
            ["02–90", "2 à 90 s de pause."], ["92–99", "2 à 9 min de pause."]],
            note: "Non visible si 81 00." }
        ]},
        { nom: "Accès parkings", items: [
          { code: "83", def: "00", titre: "Mode d'accès parking", valeurs: [
            ["00", "Désactivé (84 non visible)."],
            ["01", "Bidirectionnel avec refermeture immédiate : AP ou radio ouvre en entrée et en sortie ; le véhicule libère FT (ex. boucle magnétique NF) → fermeture immédiate."],
            ["02", "Directionnel 1 : entrée par AP / radio, refermeture après passage dans FT puis PED ; sortie par PED (boucle magnétique), refermeture après libération de FT."],
            ["03", "Directionnel 2 : entrée par AP / radio, refermeture par la fermeture auto 21 (à régler différent de 00) ; sortie par PED (boucle), refermeture après libération de FT."]],
            note: "En 01, 02, 03 : A2, A7, 50, 51, 52 et 56 ne sont pas visibles ; fermeture après le temps 21 si 21 différent de 00. Avec 21 00, la barrière reste ouverte tant que le véhicule n'a pas fini son passage. Ajouter 5 s avant la fermeture : A5 99. Voir chapitre 13 de la notice." },
          { code: "84", def: "00", titre: "Fermeture après intervention de la photocellule FT", valeurs: [
            ["00", "Désactivée."], ["01", "Si FT s'active en fermeture, la barrière s'arrête ; une fois FT libérée elle continue de se fermer."]],
            note: "Non visible si 83 00." }
        ]},
        { nom: "Course : vitesse, ralentissement, accélération", items: [
          { code: "11", def: "selon A1", titre: "Ralentissement en ouverture", valeurs: [
            ["01–10", "01 = ralentit près de la butée … 10 = ralentit bien avant."]], note: "Limité selon A1." },
          { code: "12", def: "selon A1", titre: "Ralentissement en fermeture", valeurs: [
            ["01–10", "01 = ralentit près de la butée … 10 = ralentit bien avant."]], note: "Limité selon A1." },
          { code: "33", def: "selon A1", titre: "Accélération au départ en ouverture", valeurs: [
            ["01–10", "01 = démarrage rapide … 10 = démarrage lent et progressif."]] },
          { code: "34", def: "selon A1", titre: "Accélération au départ en fermeture", valeurs: [
            ["01–10", "01 = démarrage rapide … 10 = démarrage lent et progressif."]] },
          { code: "40", def: "selon A1", titre: "Vitesse en ouverture", valeurs: [["01–10", "01 = 10 % … 10 = 100 %."]] },
          { code: "41", def: "selon A1", titre: "Vitesse en fermeture", valeurs: [["01–10", "01 = 10 % … 10 = 100 %."]] },
          { code: "42", def: "01", titre: "Vitesse d'approche des butées", valeurs: [["01–10", "01 = 10 tr/min … 10 = 100 tr/min."]] },
          { code: "43", def: "selon A1", titre: "Espace d'approche en ouverture", valeurs: [["05–30", "0,5 à 3 tours moteur à la vitesse 42."]] },
          { code: "44", def: "selon A1", titre: "Espace d'approche en fermeture", valeurs: [["05–30", "0,5 à 3 tours moteur à la vitesse 42."]] }
        ]},
        { nom: "Sécurités", items: [
          { code: "31", def: "selon A1", titre: "Détection d'obstacle (anti-écrasement)", valeurs: [
            ["01–09", "01 = temps d'intervention mini (sensibilité maxi) … 09 = temps maxi (sensibilité mini)."],
            ["10", "La barrière reste arrêtée sur l'obstacle au maximum 5 s avant d'inverser."]],
            note: "En fermeture : réouverture. En ouverture : inversion seulement dans les 60 premiers degrés. Refermeture réglée par 49." },
          { code: "49", def: "01", titre: "Tentatives de refermeture après bord sensible / obstacle", valeurs: [
            ["00", "Aucune."], ["01–03", "1 à 3 tentatives (≤ A2 ; seulement si barrière complètement ouverte)."]] },
          { code: "50", def: "00", titre: "Photocellule FT en ouverture", valeurs: [
            ["00", "Désactivée."], ["01", "ARRÊT jusqu'à la commande suivante."], ["02", "INVERSION IMMÉDIATE."],
            ["03", "STOP TEMPORAIRE : reprend l'ouverture une fois dégagée."], ["04", "INVERSION RETARDÉE : s'arrête, ferme une fois dégagée."]],
            note: "Non visible si 83 01, 02 ou 03." },
          { code: "51", def: "02", titre: "Photocellule FT en fermeture", valeurs: [
            ["00", "Désactivée."], ["01", "ARRÊT."], ["02", "INVERSION IMMÉDIATE."],
            ["03", "STOP TEMPORAIRE : reprend la fermeture une fois dégagée."], ["04", "INVERSION RETARDÉE : s'arrête, ouvre une fois dégagée."]],
            note: "Non visible si 83 01, 02 ou 03." },
          { code: "52", def: "01", titre: "Photocellule FT avec barrière fermée", valeurs: [
            ["00", "Ouverture impossible si occultée."], ["01", "Ouvre sur commande même occultée."], ["02", "Occultée = commande d'ouverture."]],
            note: "Non visible si 83 01, 02, 03 ou A8 01 à 04." },
          { code: "56", def: "00", titre: "Fermeture 6 s après passage dans la photocellule", valeurs: [
            ["00", "Désactivée."], ["01", "Passage dans FT → fermeture 6 s après."]],
            note: "Non visible si A8 03 / 04 ou 83 01, 02, 03." },
          { code: "73", def: "00", titre: "Bord sensible COS", valeurs: [
            ["00", "Non installé."], ["01", "Contact NF : inverse uniquement en fermeture."], ["02", "Résistif 8k2 : inverse uniquement en fermeture."]],
            note: "En MASTER/SLAVE, à régler sur chaque barrière." },
          { code: "19", def: "00", titre: "Lisse débrayable BreakAway ACS/BA/60", valeurs: [
            ["00", "Non branché : les entrées de commande restent standard."], ["01", "Capteur sur l'entrée AP."], ["02", "Sur l'entrée CH."], ["03", "Sur l'entrée PP."],
            ["04", "Sur l'entrée PED."], ["05", "Sur l'entrée ORO (seul réglage possible sur la SLAVE)."]],
            note: "Le capteur passe de NF à NO quand la lisse se décroche. MASTER/SLAVE : capteur de la SLAVE obligatoirement sur ORO de la SLAVE (19 05). Pour la batterie avec ACS/BA/60 : 20 01 conseillé." }
        ]},
        { nom: "Sorties, voyants et radio", items: [
          { code: "A8", def: "00", titre: "Voyant barrière ouverte / test photocellules / battery saving", valeurs: [
            ["00", "Voyant : éteint fermée, fixe en manœuvre et ouverte."],
            ["01", "Voyant : clignote lent en ouverture, fixe ouverte, clignote vite en fermeture, s'éteint 2 fois toutes les 15 s si arrêtée à mi-course."],
            ["02", "Sortie SC = test photocellules."],
            ["03", "Sortie SC = économie batterie (accessoires sur SC coupés barrière complètement ouverte ou fermée)."],
            ["04", "Économie batterie + test photocellules."]],
            note: "Non visible sur la SLAVE (fixé à 00) ni si 20 différent de 00. 03 et 04 impossibles avec 83 01, 02, 03 ou en MASTER/SLAVE." },
          { code: "20", def: "00", titre: "Mode de la sortie SC", valeurs: [
            ["00", "Standard, géré par A8."],
            ["01", "Allumé = capteur BreakAway ACS/BA/60 au repos ; éteint = capteur en alarme."],
            ["02", "Allumé = alimentation par réseau ou batterie chargée ; éteint = batterie faible (seuil 85)."],
            ["03", "Allumé = aucune anomalie 1 ou 2 ; éteint = au moins une."],
            ["04", "Allumé = barrière fonctionne ; éteint = bloquée par alarme, STOP / BLOCK / SENSOR ACS/BA/60 ou btLO."]],
            note: "Un relais sur SC donne un contact pour une supervision. MASTER/SLAVE avec 00 à 03 : SC de la SLAVE = voyant standard ; avec 04 : SC de la SLAVE donne l'état d'alarme de la SLAVE." },
          { code: "76", def: "00", titre: "1er canal radio (PR1)", valeurs: [
            ["00", "PAS (pas-à-pas)."], ["01", "OUVERTURE PARTIELLE."], ["02", "OUVERTURE."], ["03", "FERMETURE."], ["04", "ARRÊT."],
            ["07", "PAS avec confirmation."], ["08", "OUVERTURE PARTIELLE avec confirmation."], ["09", "OUVERTURE avec confirmation."], ["10", "FERMETURE avec confirmation."]],
            note: "Confirmation : la touche doit être confirmée dans les 2 s par une 2e touche (ex. 76 07 et 77 01)." },
          { code: "77", def: "03", titre: "2e canal radio (PR2)", valeurs: [["00–10", "Mêmes valeurs que 76 (usine : FERMETURE)."]] },
          { code: "29", def: "00", titre: "Électroverrouillage", valeurs: [
            ["00", "Désactivé."],
            ["01", "Électro-bloc normalement non alimenté, alimenté 1,5 s au début de l'ouverture pour permettre son déblocage."],
            ["02", "Verrouillage magnétique « ventouse » : alimenté barrière complètement fermée, non alimenté en mouvement ou complètement ouverte."],
            ["03", "Électro-bloc « ventouse » avec démagnétiseur B72/DGS."]],
            note: "Avec MASTER/SLAVE, 29 03 demande le firmware P4.10 ou plus récent sur les deux centrales." },
          { code: "78", def: "02", titre: "Clignotant / lumières de la calotte", valeurs: [
            ["00", "Intermittence gérée par le clignotant."],
            ["01", "Intermittence lente ; plus lente près des butées."],
            ["02", "Lente en ouverture, rapide en fermeture ; plus lente près des butées."]] }
        ]},
        { nom: "Lumières LED et RGB (B73/EXP, B73/LTM)", items: [
          { code: "10", def: "00", titre: "Dispositif de signalisation B73/EXP ou B73/LTM", valeurs: [
            ["00", "Aucun accessoire à contrôler."],
            ["01", "B73/EXP – B73/EXP/LED : contacts TO (ouverte) et TC (fermée) ; feux de lisse rouges fermée/arrêtée, clignotants en mouvement, verts ouverte."],
            ["02", "B73/LTM : calotte frontale R/G, lampe de tige R (ALED/4C … 12C)."],
            ["03", "B73/LTM : calotte frontale blanche (BI/BLED), lampes de tige RGB."],
            ["04", "B73/LTM : calotte avant R/G, feux de poteau RGB."],
            ["05", "B73/LTM : calotte pilotée par l'entrée IN_SEL, feux de pôle R."],
            ["06", "B73/LTM : calotte pilotée par IN_SEL, barres lumineuses RGB."],
            ["07", "B73/LTM : IN_SEL ouvert piloté par capteur de luminosité ; le jour, lumières de tête et de barre éteintes."],
            ["08", "Idem : le jour, lumières de barre éteintes."],
            ["09", "Idem : le jour, lumières de tête éteintes."]],
            note: "IN_SEL : contact fermé = tête verte, ouvert = tête rouge." },
          { code: "18", def: "00", titre: "Lumières RGB avec barrière débloquée et ouverte", valeurs: [
            ["00", "Gestion standard RGB."], ["01", "Lumières de barre éteintes."], ["02", "Verte, présence clignotante."], ["03", "Vertes allumées."]],
            note: "Visible seulement si la gestion RGB est sélectionnée (10, 70, 72, 74, 75, 79)." },
          { code: "70", def: "00", titre: "Projecteur LED de la calotte", valeurs: [
            ["00", "Calotte blanche, clignotante (réglée par 78)."],
            ["01–06", "B73/LTM : gestion de la calotte de type A à F."]] },
          { code: "72", def: "00", titre: "Transition des couleurs à l'arrivée en pleine ouverture", valeurs: [
            ["00", "Aucune transition."],
            ["01–05", "Rouge clignotant → orange clignotant à 65°, 70°, 75°, 80° ou 85°."],
            ["06–10", "Rouge clignotant → vert clignotant à 65°, 70°, 75°, 80° ou 85°."]],
            note: "Seulement pour les lumières RGB de type A, B, F, G." },
          { code: "74", def: "00", titre: "Délai avant veille des lumières RGB (barrière fermée)", valeurs: [
            ["00", "Veille désactivée."], ["01–20", "30 s, 60 s, 90 s, 2 min … par pas de 30 s jusqu'à 10 min."]] },
          { code: "75", def: "00", titre: "Couleur des lumières de barre en veille", valeurs: [
            ["00", "Transition des couleurs 01 à 09, avec gradient automatique."],
            ["01", "Bleu."], ["02", "Jaune."], ["03", "Rose."], ["04", "Bleu clair."], ["05", "Fuchsia."], ["06", "Blanc."], ["07", "Orange."], ["08", "Pourpre clair."], ["09", "Rouge."]],
            note: "Différent de 00 : flashs courts répétés de la couleur choisie." },
          { code: "79", def: "00", titre: "Lumières de signalisation sur la barre", valeurs: [
            ["00", "Désactivées (toujours éteintes)."], ["01", "Toujours allumées."],
            ["02", "Allumées barrière arrêtée, clignotantes en mouvement (régler 02 si B73/EXP/LED avec 10 01)."],
            ["03", "Brève intermittence à l'arrêt, clignotantes en mouvement."],
            ["04", "Brève intermittence fermée, clignotantes en mouvement, éteintes ouverte."],
            ["05", "Brève intermittence fermée, clignotantes en mouvement, fixes ouverte."],
            ["06–13", "B73/LTM : lumières de barre de type A à H."]],
            note: "Sur batterie, la centrale passe d'elle-même en 04 pour réduire la consommation." }
        ]},
        { nom: "Batterie", items: [
          { code: "85", def: "00", titre: "Gestion du fonctionnement sur batterie", valeurs: [
            ["00", "Accepte les commandes jusqu'à épuisement de la batterie."],
            ["01", "Seuil minimum (22 V en 2×12 V)."], ["02", "Seuil intermédiaire (23 V)."], ["03", "Seuil maximum (24 V)."]],
            note: "Comportement au seuil réglé par 86 ; signalisation possible par SC (20)." },
          { code: "86", def: "00", titre: "Limitations sur batterie (au seuil 85)", valeurs: [
            ["00", "Aucune limitation (signalisation via SC possible)."],
            ["01", "N'accepte que l'ouverture et ne referme plus."],
            ["02", "Préclignote 5 s, ouvre et n'accepte plus que la fermeture."],
            ["03", "N'accepte que la fermeture (même si ORO est actif et 80 01)."],
            ["04", "Préclignote 5 s, ferme et n'accepte plus que l'ouverture."]],
            note: "Visible seulement si 85 différent de 00. Non disponible sur la SLAVE." },
          { code: "87", def: "00", titre: "Type de batterie et réduction de consommation", valeurs: [
            ["00", "24 V (2×12 V) avec B71/BCHP : performances réduites pour l'autonomie."],
            ["01", "24 V avec B71/BCHP : pas de réduction, consommation maxi."],
            ["02–03", "36 V (3×12 V) : NE PAS SÉLECTIONNER (utilisation future)."]],
            note: "Mauvais réglage : sans secteur, blocage avec btLO ou signalisation bnod." }
        ]},
        { nom: "Maintenance", items: [
          { code: "90", def: "00", titre: "Retour aux valeurs usine", valeurs: [
            ["Procédure", "Afficher 90 00, maintenir + et − 4 s : rES- clignote, valeurs usine restaurées."],
            ["Au démarrage", "Maintenir ▲ et ▼ 4 s à la mise sous tension, avant l'affichage de la version firmware."]],
            note: "Impossible si un mot de passe est actif. Non visible sur la SLAVE. Non restaurés : A0, A1, 71 → vérifier qu'ils correspondent à l'installation." },
          { code: "n0–n7", def: "lecture", titre: "Identification de la carte", valeurs: [
            ["n0", "Version matérielle."], ["n1", "Année de production."], ["n2", "Semaine de production."],
            ["n3 n4 n5", "Numéro de série."], ["n6", "Version firmware."], ["n7", "Version de communication RS485 (identique sur MASTER et SLAVE)."]] },
          { code: "oП–o1", def: "lecture", titre: "Compteur de manœuvres", valeurs: [
            ["oП o0 o1", "Lire à la suite × 100. Ex. 01 23 45 → 1 234 500 manœuvres."]] },
          { code: "h0–h1", def: "lecture", titre: "Heures de manœuvre", valeurs: [["h0 h1", "Ex. 01 23 → 123 heures."]] },
          { code: "d0–d1", def: "lecture", titre: "Jours sous tension", valeurs: [["d0 d1", "Ex. 01 23 → 123 jours."]] },
          { code: "P1–P4", def: "00", titre: "Mot de passe", valeurs: [
            ["Activer", "Saisir P1, P2, P3, P4 ; afficher CP ; maintenir + et − 4 s (l'écran clignote) ; couper puis remettre le courant et vérifier CP 01."],
            ["Débloquer", "Saisir le mot de passe, vérifier CP 00. Se réactive après 30 min sans appui ou à la remise sous tension."],
            ["Supprimer", "Débloquer (CP 00), mettre P1 à P4 à 00, afficher CP, maintenir + et − 4 s, couper puis remettre le courant."]],
            note: "Non visible sur la SLAVE. Mot de passe perdu : contacter l'assistance Roger." },
          { code: "CP", def: "00", titre: "État du mot de passe", valeurs: [["00", "Protection désactivée."], ["01", "Protection activée."]] }
        ]}
      ]
    },
    bornier: {
      groupes: [
        { nom: "Puissance", bornes: [
          { n: "L · N · ⏚", label: "Secteur", desc: "230 V ±10 % 50 Hz (115 V 60 Hz sur les versions /115), fusible 5x20 T2A. Câble H07RN-F 3G1,5. Hors plage, le brushless fonctionne mal", t: "alim" },
          { n: "3-4 · 5-6", label: "SEC2 · SEC1", desc: "Secondaire du transformateur : 19 V~ logique et accessoires (SEC2), 26 V~ moteur (SEC1). Câblé usine ; inversé = SECO", t: "alim" },
          { n: "7 · 8 · 9", label: "X · Y · Z", desc: "Moteur brushless (câblé usine). Si les fils ont été débranchés : refaire l'apprentissage", t: "moteur" },
          { n: "BATTERY + −", label: "Batteries", desc: "Kit BI/BAT/KIT ou AG/BAT/KIT (2 x 12 V 4,5 Ah AGM) avec chargeur B71/BCHP ou BI/BCHP. Contrôler tous les 6 mois", t: "alim" }
        ]},
        { nom: "Sorties", bornes: [
          { n: "11 · 10", label: "+SC · COM", desc: "Voyant barrière ouverte / fermée 24 V 3 W (A8)", t: "sortie" },
          { n: "11 · 13", label: "+SC · COM", desc: "Ou : alimentation des TX pour test photocellules (A8 02), économie batterie (A8 03, 04), voyant d'anomalie ou relais de supervision (20). Plus de voyant barrière ouverte dans ce cas", t: "sortie" },
          { n: "12 · 13", label: "LUMIÈRES", desc: "Lumières de signalisation de la lisse ALED (option) 24 V 12 W max (79)", t: "sortie" },
          { n: "15 · 17", label: "ES", desc: "Électroverrouillage 12 V : impulsion 1,5 s (10 W selon p131, 15 W selon p134) ou verrouillage alimenté 5 W (max 40 V). Réglage : 29", t: "sortie" },
          { n: "16 · 17", label: "LAM", desc: "Clignotant extérieur 24 V 5 W max. Préclignotement : A5, mode : 78", t: "sortie" }
        ]},
        { nom: "Sécurités NF", bornes: [
          { n: "21 · 22", label: "ST", desc: "STOP NF — shunté d'usine. En MASTER/SLAVE : STOP sur la MASTER arrête les deux barrières, sur la SLAVE seulement la SLAVE", t: "nf" },
          { n: "23 · 22", label: "COS", desc: "Bord sensible NF ou 8k2 : en fermeture, réouverture. Désactivé d'usine (73 00). MASTER/SLAVE : à raccorder et régler sur chaque barrière", t: "nf" },
          { n: "24 · 13", label: "FT", desc: "Photocellule NF. Usine : 50 00 (ignorée en ouverture), 51 02 (inversion en fermeture), 52 01. Absente : ponter ou 50 00 + 51 00. Parking : peut recevoir une boucle magnétique NF (83). MASTER/SLAVE : uniquement sur la MASTER", t: "nf" }
        ]},
        { nom: "Commandes NO (commun 28)", bornes: [
          { n: "32", label: "AP", desc: "Ouverture. Ou entrée NF du capteur BreakAway ACS/BA/60 (19 01)", t: "no" },
          { n: "31", label: "CH", desc: "Fermeture. Ou capteur BreakAway (19 02)", t: "no" },
          { n: "30", label: "PP", desc: "Pas-à-pas (A4). Ou capteur BreakAway (19 03)", t: "no" },
          { n: "29", label: "PED", desc: "Ouvre toujours en totalité. Parking directionnel (83 02/03) : ouverture par boucle magnétique. Ou capteur BreakAway (19 04)", t: "no" },
          { n: "33 · 34", label: "ORO", desc: "Horloge NO (80), commun 34. Ou capteur BreakAway (19 05, obligatoire sur la SLAVE). Ne jamais ponter si inutilisée", t: "no" }
        ]},
        { nom: "Alimentation, bus, antenne", bornes: [
          { n: "14 · 13", label: "+24 V", desc: "Alimentation accessoires 24 V, 10 W max", t: "alim" },
          { n: "18 · 19 · 20", label: "COM LNA LNB", desc: "RS485 MASTER / SLAVE (barrières opposées), câble 3 x 0,5 mm², 30 m max, firmware n6 13 ou plus. A0 11 MASTER, A0 10 SLAVE", t: "bus" },
          { n: "27 · 26", label: "ANT", desc: "Antenne : câble RG58, 10 m max, sans raccord", t: "autre" }
        ]},
        { nom: "Connecteurs", bornes: [
          { n: "ENC1", label: "Encodeur moteur", desc: "Connecteur 7 fils (encodeur sur le moteur). Débrancher / brancher hors tension uniquement", t: "moteur" },
          { n: "ENC2", label: "Encodeur position", desc: "Connecteur 6 fils (encodeur côté moteur / position de la barrière). Hors tension uniquement", t: "moteur" },
          { n: "LOCKS", label: "Micro-interrupteurs", desc: "Déblocage et portillon d'inspection (câblés usine). Si un seul est branché, ponter l'autre", t: "nf" },
          { n: "LED LIGHT", label: "Lumières calotte / lisse", desc: "B73/EXP (option, lumières de calotte) ou B73/LTM (lumières RGB lisse et calotte) — paramètres 10, 70, 72, 74, 75, 79", t: "sortie" },
          { n: "RÉCEPTEUR", label: "Radio", desc: "Récepteur enfichable : PR1 pas-à-pas (76), PR2 fermeture (77)", t: "autre" },
          { n: "EXP", label: "B74/BCONNECT", desc: "Module Wi-Fi : gestion à distance par navigateur", t: "autre" }
        ]}
      ],
      fusibles: "F1 10 A (ATO257) puissance moteur · F2 4 A (ATO257) électroserrure · F3 3 A (ATO257) accessoires · F4 T2A (5x20) transformateur",
      notes: [
        "Sécurités absentes : shunter sur COM ou les désactiver par paramètres 50, 51, 73.",
        "Photocellules conseillées : G90/F4ES ou T90/F4S. Câbles : RX 5 x 0,5 mm², TX 3 x 0,5 mm² (20 m).",
        "Barrières opposées : commandes, photocellules et STOP général sur la MASTER ; bords sensibles et BreakAway sur chaque barrière.",
        "Graisser les articulations à la graisse au lithium (RS/GR2/100)."
      ]
    },
    apprentissage: {
      avant: [
        "A1 — modèle et longueur de lisse : 00 BI/004HP ≤ 3 m · 01 BI/004HP 3–4,5 m · 02 BI/006 4,5–6 m · 03 BI/004 ≤ 3 m · 04 BI/004 3–4 m · 05 BI/008 ≤ 8 m. Mauvais réglage = risque de graves dommages.",
        "71 — position : 71 01 barrière à droite (usine), 71 00 à gauche, vue côté trappe d'inspection. Si on change, déplacer aussi le ou les ressorts.",
        "Homme présent désactivé : A7 00.",
        "Équilibrage du ressort et butées mécaniques réglés : débloquée, la lisse doit rester à 45°.",
        "Sans BreakAway ACS/BA/60 : 19 00.",
        "TEST : contrôler commandes et sécurités ; shunter ou désactiver celles qui ne sont pas installées (50, 51, 73).",
        "Si TEST affiche 00 : prêt. S'il affiche dAtA : PROG jusqu'à APP-. S'il affiche 21 : régler la sécurité d'abord.",
        "La première manœuvre doit toujours partir de 45° vers l'ouverture."
      ],
      etapes: [
        "Lisse à 45°. Maintenir PROG 4 s : APP- s'affiche.",
        "Débloquer : BIONIK4HP / 6 / 8 → deux tours complets de clé sens antihoraire ; BIONIK4 → ouvrir la trappe de déverrouillage.",
        "Laisser la lisse s'ouvrir à 45°.",
        "Après quelques secondes, PHAS s'affiche : la centrale règle le moteur.",
        "Attendre que PHAS clignote (réglage réussi).",
        "Rebloquer : BIONIK4HP / 6 / 8 → deux tours complets sens horaire ; BIONIK4 → fermer la trappe et tourner la clé.",
        "Auto s'affiche : ouverture à faible vitesse jusqu'à la butée d'ouverture, court arrêt, Auto clignote.",
        "Fermeture jusqu'à la butée de fermeture. Réussi : retour à l'état des commandes et sécurités."
      ],
      apres: [
        "noPH : réglage moteur échoué ; APPE : erreur d'apprentissage → voir l'onglet Codes et recommencer.",
        "Barrières opposées : câbler COM-LNA-LNB hors tension (batteries débranchées), A0 11 sur la MASTER, A0 10 sur la SLAVE, 71 sur la MASTER seulement, puis apprentissage sur la MASTER ET sur la SLAVE.",
        "Si la position ouverte ou fermée est modifiée par les butées mécaniques après coup : refaire l'apprentissage.",
        "Si la lisse part dans le mauvais sens : la remettre en position correcte et régler 71."
      ]
    }
  }
  ]
}
];
