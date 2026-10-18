/* =====================================================================
   Dépannage SAV — Espacs Automatisme
   Données techniques par marque / carte électronique.
   Toutes les entrées sont reprises des notices fabricant citées dans
   "source" (reformulées). p: 1 = action complétée par un contrôle
   terrain de base (pas mot pour mot dans la notice).
   Pour ajouter une carte : copier un bloc { id, nom, ... } et l'adapter,
   puis augmenter DATA_VERSION (sinon les téléphones gardent l'ancienne).
   VERSION DE L'APPLI : chaque nouveauté ajoute une entrée en tête du CHANGELOG avec v: "1.N+1"
   (la première entrée donne le numéro affiché partout : accueil, en-tête, Réglages).
   ===================================================================== */

const DATA_VERSION = "2026-10-18";

/* Journal des modifications — ajouter une entrée en haut à chaque mise à jour.
   docs : nom des notices ajoutées (affichées dans Réglages). */
const CHANGELOG = [
  { v: "1.18", date: "2026-10-18", titre: "Onglet Schéma (pages de notice en image)", items: [
    "Nouvel onglet « Schéma » sur les trois Startéco AFCA et le feu LUMOS-M : les pages de la notice avec le dessin de la carte, ses bornes et le raccordement des accessoires.",
    "Chaque image s'agrandit (boutons + / −, pincement, double-touche) et reste disponible hors ligne."
  ], docs: [] },
  { v: "1.17", date: "2026-10-18", titre: "AFCA / ABLE / V2 regroupés", items: [
    "Le feu LUMOS-M (notice V2) est rangé sous la marque AFCA ; chercher « V2 » ou « ABLE » retrouve les cartes AFCA et l'accessoire."
  ], docs: [] },
  { v: "1.16", date: "2026-10-18", titre: "Rubrique Accessoires (en construction)", items: [
    "Nouveau bouton « Accessoires » sur l'accueil : gyrophares, radio, photocellules, claviers… avec des onglets adaptés (infos, raccordement, installation, notes).",
    "Première fiche : feu clignotant à LED V2 LUMOS-M (24 à 300 V), trouvable aussi par la recherche (« gyrophare », « lumos »)."
  ], docs: [
    "Notice V2 LUMOS-M (IL 438)"
  ] },
  { v: "1.15", date: "2026-10-18", titre: "AFCA : nouvelle marque, 3 armoires Startéco", items: [
    "Nouvelle marque AFCA avec 3 cartes : Startéco 3 (contacteurs, V1.6), Startéco 3 deux moteurs (V4.1) et Startéco 4 (afficheur LCD, 47 paramètres).",
    "Startéco 3 : afficheur 7 segments (codes Po, Att, AU, Fdcnd, dEF C1…), 20 switchs, temporisations, autotests et diagnostic des entrées.",
    "Startéco 3 deux moteurs : puissance et détection d'obstacle par moteur (grande et petite vitesse), décalages, deux jeux de fins de course.",
    "Startéco 4 : menus PARAMETRAGE, MANOEUVRES, DIAGNOSTIC, INPUTS, USINE, FDC électronique, horloge ; historique des défauts ; récepteur MR."
  ], docs: [
    "Notice AFCA Startéco 3 V1.6 (contacteurs, Doc 19.1.a indice 162)", "Notice AFCA Startéco 3 2 moteurs V4.1 (Doc 19.1.a indice 229)", "Notice AFCA Startéco 4 (Doc 19.1.a n° 363)"
  ] },
  { v: "1.14", date: "2026-10-18", titre: "Numéro de version de l'appli", items: [
    "L'appli a maintenant un numéro de version (v1.14), affiché dans l'en-tête, sur l'accueil et dans Réglages.",
    "Chaque nouveauté de l'historique porte son numéro ; toucher le bandeau de l'accueil ouvre Réglages et l'historique."
  ], docs: [] },
  { v: "1.13", date: "2026-10-18", titre: "Accueil : état des données et recherche par question", items: [
    "Accueil : bandeau « Données à jour du … » avec l'état du mode hors ligne (actif ou en préparation).",
    "Recherche : une phrase comme « comment mettre la fermeture automatique sur ZL90 » renvoie vers le bon paramètre, la bonne borne ou le bon code. Recherche par mots-clés (en test) : la notice fait foi."
  ], docs: [] },
  { v: "1.12", date: "2026-10-18", titre: "Diagnostic guidé (en test)", items: [
    "Nouveau bouton sur l'accueil : un arbre de panne en 3 à 5 questions (le portail ne s'ouvre pas, ne se ferme pas, s'arrête en cours, émetteur sans effet, clignotant ou voyant en panne).",
    "Fonction en test : les conseils sont généraux, ils peuvent être incomplets ou comporter des erreurs. La fiche de la carte et la notice du fabricant font foi."
  ], docs: [] },
  { v: "1.11", date: "2026-10-18", titre: "Came : 14 nouvelles cartes", items: [
    "Nouvelles cartes à afficheur : ZM3E, ZM3ES (400 V triphasé), ZLJ24, avec menu FONCTIONS, ENCODEUR, RÉGLAGE TEMPS, bornier complet et branchements.",
    "Nouvelles cartes à fonctions F : ZN7 (coulissant 24 V avec encodeur, fonctions F, U, A, H) et ZL92 (moteurs 24 V).",
    "Nouvelles cartes à dip-switch : ZBX6, ZBX241 (avec batteries BN1), ZL90 (calibrage automatique, serrure et coup de bélier), ZBX10, ZA3, ZA4, ZA5.",
    "Nouvelles cartes de barrière : ZA3P (88003-0183, carte de remplacement) et 88003-0184 (barrières CAT1DAGS : codes E4, E11, E13, E15 et avertissements C0, C1, C4, C5, C7)."
  ], docs: [
    "Notice Came FA00379M4A (ZM3E)", "Notice Came FA00557M4A (ZM3ES)", "Notice Came FA00434M4A (ZLJ24)", "Notice Came FA00402M4A (ZN7)", "Notice Came FA00042M4A (ZBX6)",
    "Notice Came 319LR17 (ZBX241 + BN1)", "Notice Came 319LR07 (ZL90)", "Notice Came 319LR36 (ZL92)", "Notice Came 319LR21 (ZBX10)",
    "Notice Came 319LR23 (ZA3)", "Notice Came 319LR24 (ZA4)", "Notice Came 319LR25 (ZA5)", "Notice Came FA02020M4A (ZA3P, 88003-0183)", "Notice Came FA02006M4A (88003-0184)"
  ] },
  { v: "1.10", date: "2026-10-18", titre: "Nice RUN (RUN1800 / RUN2500)", items: [
    "Nouvelle carte Nice RUN (RUN1800, RUN1800P, RUN2500, RUN2500P, versions /V1 120 V) : codes du clignotant et des LED, symptômes, bornier, fonctions ON-OFF et paramètres des 2 niveaux, reconnaissance et fins de course.",
    "Onglet Écran : rôle des LED L1…L8 et des LED des bornes, lecture de l'historique des anomalies."
  ], docs: [
    "Notice Nice IS0307A01MMD (RUN)"
  ] },
  { v: "1.9", date: "2026-10-18", titre: "Roger B70/1DCHP (BG30, 36 V)", items: [
    "Nouvelle carte Roger B70/1DCHP pour les moteurs BG30 (1600, 2200, High Speed, réversible 1400/R) : codes, bornier (nouvelle numérotation), écran, 63 paramètres, apprentissage.",
    "Nouveautés du firmware P3.10, limiteur de tension B72/CL, mode INFO et batteries B71/BCHP."
  ], docs: [
    "Notice Roger IS142 Rev.23, B70/1DCHP firmware P3.10"
  ] },
  { v: "1.8", date: "2026-10-18", titre: "Nouveau design de l'accueil et des codes", items: [
    "Accueil : on choisit d'abord le type d'automatisme (portail coulissant, battant, barrière levante), puis la carte. L'accès par marque reste disponible.",
    "Codes : triés par gravité (erreurs à corriger, symptômes, codes de l'afficheur, diagnostic des entrées). Touchez un code pour voir ce qu'il faut faire ; le premier est déjà ouvert."
  ], docs: [] },
  { v: "1.7", date: "2026-10-17", titre: "Écrans des BFT LEO B CBB et MERAK", items: [
    "Onglet Écran de la BFT LEO B CBB : touches, menus, statistiques, messages affichés (SEt, 35.40, BLOC, RST…). La notice ne décrit pas les segments un par un, il n'y a donc pas de dessin interactif.",
    "Même onglet Écran pour la BFT MERAK : touches, menus, point de basse consommation, lettres C et O, messages affichés."
  ], docs: [] },
  { v: "1.6", date: "2026-10-17", titre: "Relecture des cartes BFT", items: [
    "LEO B CBB : type corrigé (coulissant), codes AUX 3 et clignotant précisés, ajout du menu simplifié avec les presets, des notes sur le sens d'ouverture, des fusibles et du montage vantaux opposés.",
    "MERAK : bornier SAFE 2 corrigé (borne 73, pont 70-73, plus de FAULT), puissances par modèle, vantaux opposés, presets, signalement des points où la notice se contredit ou que seule l'ancienne édition mentionne."
  ], docs: [] },
  { v: "1.5", date: "2026-10-17", titre: "Recherche par modèle", items: [
    "On peut chercher un modèle d'automatisme (ex. Ares 1000, AYRON, BIONIK, RB400, BX708) ou un type (coulissant, battant, barrière) : la carte correspondante s'ouvre.",
    "La saisie sans espace fonctionne aussi (ex. bta400, rb400)."
  ], docs: [] },
  { v: "1.4", date: "2026-10-17", titre: "BFT LEO B CBB et MERAK BT A à jour", items: [
    "Nouvelle carte BFT LEO B CBB (3 230 L02 / L04, 3 120 F02 / F04) : codes, bornier, paramètres (tableaux A, B, C) et autoconfiguration.",
    "BFT MERAK : mise à jour avec la notice D814459 (MERAK BT A) : nouveaux codes d'erreur, 9 groupes de paramètres, bornier AUX 1 / AUX 2, notes d'apprentissage.",
    "Roger B70/2ML, EDGE1, CTRL : corrections après relecture indépendante des notices (mise en veille, OFSt, symptômes, paramètres esclave)."
  ], docs: [
    "Notice BFT D812161 00100_04, LEO B CBB",
    "Notice BFT D814459 0AR00_09, MERAK BT A"
  ] },
  { v: "1.3", date: "2026-10-17", titre: "Trois nouvelles cartes Roger", items: [
    "Roger B70/2ML (portail battant AYRON, BE20, MONOS4) : codes, bornier, écran, 68 paramètres, apprentissage.",
    "Roger EDGE1 (portail battant 36 V : BR20, BR21, BH23, SMARTY, BE20, MONOS4) : codes, bornier, écran, 77 paramètres, apprentissage.",
    "Roger CTRL (barrières BIONIK BI/004HP, BI/004, BI/006, BI/008) : codes, bornier, écran, paramètres (dont accès parkings et lumières RGB), apprentissage simple et MASTER/SLAVE."
  ], docs: [
    "Notice Roger IS240 Rev.15, B70/2ML firmware P2.05",
    "Notice Roger IS160 Rev.26, EDGE1 firmware P5.10",
    "Notice Roger IS88 Rev.28, CTRL firmware P4.35"
  ] },
  { v: "1.2", date: "2026-10-17", titre: "Onglet Paramètres et menu Réglages", items: [
    "Nouvel onglet Paramètres : tous les paramètres de programmation de la carte, avec valeur usine, valeurs possibles et recherche.",
    "Roger B70/1DC : 62 paramètres (A0 à CP, y compris High Speed et réversible).",
    "Les paramètres sortent aussi dans la recherche générale.",
    "Menu Réglages (roue dentée) : thème, nouveautés, documentations intégrées.",
    "Mise à jour automatique dès l'ouverture quand il y a du réseau.",
    "Les trois carrés de couleur en haut à gauche ramènent à l'accueil."
  ], docs: [] },
  { v: "1.1", date: "2026-10-17", titre: "Roger B70/1DC firmware P3.00 et onglet Écran", items: [
    "Fiche Roger B70/1DC refaite à partir de la notice P3.00 : 42 codes, bornier, apprentissage.",
    "Nouvel onglet Écran : dessin de l'afficheur et signification de chaque segment (touchez un segment)."
  ], docs: ["Notice Roger IS117 Rev.30, firmware P3.00"] },
  { v: "1.0", date: "2026-10-17", titre: "Première version", items: [
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
  },
  {
    "id": "came-zm3e",
    "nom": "ZM3E",
    "modeles": "ZM3E110 · ZM3EP (rechange 3199ZM3E) — battant 230 V, 2 moteurs avec encodeur",
    "type": "Battant 230 V — menu à afficheur, encodeurs",
    "source": "Notice Came FA00379M4A (02/2016, fiche de rechange)",
    "codes": [
      {
        "code": "TEST MOT.",
        "type": "test",
        "titre": "Menu TEST MOT.",
        "action": "Fait bouger chaque moteur séparément (affichage « <=M1 M2=> ») pour vérifier le sens de marche. Utile après avoir inversé des fils ou remplacé un moteur."
      },
      {
        "code": "INFO",
        "type": "diag",
        "titre": "Menu INFO",
        "action": "Version, nombre de courses, message initial, remise à zéro du système."
      },
      {
        "code": "C1…C8",
        "type": "diag",
        "titre": "Fonctions des entrées CX / CY / CZ",
        "action": "Si le portail s'arrête ou ne repart pas : vérifier le contact NF de l'entrée concernée (2-CX, 2-CY, 2-CZ) et la fonction choisie dans FONCTIONS (C1, C2, C3, C4, C7, C8)."
      }
    ],
    "bornier": {
      "groupes": [
        {
          "nom": "Alimentation",
          "bornes": [
            {
              "n": "L · N",
              "label": "Secteur",
              "desc": "230 V AC",
              "t": "alim"
            },
            {
              "n": "10 · 11",
              "label": "24 V accessoires",
              "desc": "Sortie 24 V AC, 40 W max",
              "t": "alim"
            },
            {
              "n": "10 · TS",
              "label": "24 V sécurité",
              "desc": "Sortie 24 V pour la sécurité des photocellules (test)",
              "t": "alim"
            }
          ]
        },
        {
          "nom": "Moteurs, encodeurs, fins de course",
          "bornes": [
            {
              "n": "U · W · V",
              "label": "Moteur M1",
              "desc": "230 V AC, retard à l'ouverture. Condensateur sur les fils noirs",
              "t": "moteur"
            },
            {
              "n": "X · W · Y",
              "label": "Moteur M2",
              "desc": "230 V AC, retard à la fermeture. Condensateur sur les fils rouges",
              "t": "moteur"
            },
            {
              "n": "+ · E · −",
              "label": "Encodeur A (M1)",
              "desc": "Fils blanc, marron, vert",
              "t": "bus"
            },
            {
              "n": "+ · E · −",
              "label": "Encodeur B (M2)",
              "desc": "Fils blanc, marron, vert",
              "t": "bus"
            },
            {
              "n": "2 · FA1",
              "label": "Fin de course ouv. M1",
              "desc": "Programmable (menu FONCTIONS : NF ou NO)",
              "t": "nf"
            },
            {
              "n": "2 · FC1",
              "label": "Fin de course ferm. M1",
              "desc": "Programmable (menu FONCTIONS : NF ou NO)",
              "t": "nf"
            },
            {
              "n": "2 · FA2",
              "label": "Fin de course ouv. M2",
              "desc": "Programmable (menu FONCTIONS : NF ou NO)",
              "t": "nf"
            },
            {
              "n": "2 · FC2",
              "label": "Fin de course ferm. M2",
              "desc": "Programmable (menu FONCTIONS : NF ou NO)",
              "t": "nf"
            }
          ]
        },
        {
          "nom": "Sorties",
          "bornes": [
            {
              "n": "W · E",
              "label": "Clignotant",
              "desc": "230 V AC, 25 W max",
              "t": "sortie"
            },
            {
              "n": "E · E3",
              "label": "Lampe cycle",
              "desc": "230 V AC, 60 W max (menu : cycle ou accueil)",
              "t": "sortie"
            },
            {
              "n": "10 · 5",
              "label": "Voyant",
              "desc": "Lampe témoin 24 V AC, 3 W max",
              "t": "sortie"
            },
            {
              "n": "11 · ES",
              "label": "Serrure",
              "desc": "Électro-serrure 12 V, 15 W max",
              "t": "sortie"
            },
            {
              "n": "B1 · B2",
              "label": "2e canal radio",
              "desc": "24 V DC, 1 A max, contact NO",
              "t": "sortie"
            }
          ]
        },
        {
          "nom": "Commandes",
          "bornes": [
            {
              "n": "1 · 2",
              "label": "STOP",
              "desc": "Bouton d'arrêt, contact NF",
              "t": "nf"
            },
            {
              "n": "2 · 3",
              "label": "Ouvre seulement",
              "desc": "Contact NO",
              "t": "no"
            },
            {
              "n": "2 · 3P",
              "label": "Partielle / piétonne",
              "desc": "Programmable (menu FONCTIONS), contact NO",
              "t": "no"
            },
            {
              "n": "2 · 4",
              "label": "Ferme seulement",
              "desc": "Contact NO",
              "t": "no"
            },
            {
              "n": "2 · 7",
              "label": "Commande programmable",
              "desc": "Contact NO (menu FONCTIONS)",
              "t": "no"
            }
          ]
        },
        {
          "nom": "Sécurités et accessoires",
          "bornes": [
            {
              "n": "2 · CX",
              "label": "Photocellules CX",
              "desc": "Contact NF, fonction programmable",
              "t": "nf"
            },
            {
              "n": "2 · CY",
              "label": "Photocellules CY",
              "desc": "Contact NF, fonction programmable",
              "t": "nf"
            },
            {
              "n": "2 · CZ",
              "label": "Photocellules CZ",
              "desc": "Contact NF, fonction programmable",
              "t": "nf"
            },
            {
              "n": "S1 · GND",
              "label": "Capteur",
              "desc": "Sortie pour capteur TST01 ou LT001 (clavier, transpondeur, lecteur de cartes)",
              "t": "bus"
            },
            {
              "n": "A · B · GND",
              "label": "Série RS485",
              "desc": "Carte RSE pour la domotique via CRP (Came Remote Protocol)",
              "t": "bus"
            },
            {
              "n": "Antenne",
              "label": "Antenne",
              "desc": "Câble RG58 de l'antenne (carte radio AF enfichée)",
              "t": "bus"
            }
          ]
        }
      ],
      "fusibles": "Non indiqués sur la fiche de rechange (voir le manuel de l'armoire).",
      "notes": [
        "Moteur M1 : retard à l'ouverture ; moteur M2 : retard à la fermeture (intitulés de la fiche).",
        "Fiche valable pour ZM3E110 et ZM3EP (même carte 3199ZM3E).",
        "Avant toute intervention, et avant d'insérer une carte à enfichage (AF, R700, etc.) : couper la tension de ligne et débrancher les batteries éventuelles."
      ]
    },
    "parametres": {
      "intro": "Menu à afficheur : FONCTIONS, ENCODEUR, RÉGLAGE TEMPS, UTILISATEURS, INFO, TEST MOT. La fiche donne l'arborescence et les choix, pas les valeurs d'usine.",
      "navigation": [
        "Menu à afficheur : LANGUE, FONCTIONS, RÉGLAGE TEMPS, UTILISATEURS, INFO, TEST MOT., plus ENCODEUR et / ou CONFIG COURSE sur les cartes qui les ont (voir l'intro de la carte).",
        "La fiche de rechange donne l'arborescence et les choix possibles séparés par « > ». Les touches de navigation et le sens exact de chaque réglage sont dans le manuel de l'armoire (docs.came.com).",
        "La valeur d'usine n'est pas indiquée sur la fiche (colonne « usine » : —)."
      ],
      "groupes": [
        {
          "nom": "Fonctions",
          "items": [
            {
              "code": "Ferm. automatique",
              "def": "—",
              "titre": "Fermeture automatique",
              "valeurs": [
                [
                  "Désactivée",
                  "Pas de refermeture automatique"
                ],
                [
                  "Activée",
                  "Refermeture après le temps T.F.A. (menu Réglage temps)"
                ]
              ]
            },
            {
              "code": "Act. maintenue",
              "def": "—",
              "titre": "Action maintenue",
              "valeurs": [
                [
                  "Désactivée",
                  "Fonctionnement normal"
                ],
                [
                  "Activée",
                  "Le portail bouge tant qu'on appuie sur la commande"
                ],
                [
                  "En fermeture",
                  "Action maintenue seulement à la fermeture"
                ]
              ]
            },
            {
              "code": "Dét. obstacle",
              "def": "—",
              "titre": "Détection d'obstacle",
              "valeurs": [
                [
                  "Activée",
                  "Activée"
                ],
                [
                  "Désactivée",
                  "Désactivée"
                ]
              ],
              "note": "Intitulé de la fiche : « Dét. obstacle » (Ril. ostacolo / Obstacle dec.), sans autre précision. Voir le manuel de l'armoire."
            },
            {
              "code": "Test dispositifs de sécurité",
              "def": "—",
              "titre": "Test des photocellules",
              "valeurs": [
                [
                  "Désactivé",
                  "Pas de test"
                ],
                [
                  "CX · CY · CZ",
                  "Test sur une entrée"
                ],
                [
                  "CX+CY · CX+CZ · CY+CZ",
                  "Test sur deux entrées"
                ],
                [
                  "CX+CY+CZ",
                  "Test sur les trois entrées"
                ]
              ],
              "note": "L'émetteur des photocellules se branche sur TS (sortie 24 V pour la sécurité des photocellules)."
            },
            {
              "code": "Préclignotement",
              "def": "—",
              "titre": "Préclignotement",
              "valeurs": [
                [
                  "Désactivé",
                  "Pas de préclignotement"
                ],
                [
                  "Activé",
                  "Le clignotant démarre avant la manœuvre (durée : « T. Préclignotement »)"
                ]
              ]
            },
            {
              "code": "Arrêt total",
              "def": "—",
              "titre": "Entrée STOP 1-2",
              "valeurs": [
                [
                  "Désactivé",
                  "Entrée STOP ignorée"
                ],
                [
                  "Activé",
                  "L'entrée STOP 1-2 arrête le portail"
                ]
              ]
            },
            {
              "code": "Entrée CX",
              "def": "—",
              "titre": "Fonction de l'entrée 2-CX",
              "valeurs": [
                [
                  "Choix",
                  "C1 > C2 > C3 > C4 > C7 > C8"
                ],
                [
                  "C1",
                  "Réouverture pendant la fermeture (photocellules)"
                ],
                [
                  "C2",
                  "Refermeture pendant l'ouverture (photocellules)"
                ],
                [
                  "C3",
                  "Arrêt partiel"
                ],
                [
                  "C4",
                  "Attente obstacle"
                ],
                [
                  "C7",
                  "Réouverture pendant la fermeture (bords sensibles)"
                ],
                [
                  "C8",
                  "Refermeture pendant l'ouverture (bords sensibles)"
                ]
              ],
              "note": "Les significations viennent de la fiche ZN7 (fonctions F2 / F3, mêmes numéros 1, 2, 3, 4, 7, 8). Les fiches ZM3E / ZM3ES / ZLJ24 ne donnent que la liste « C1 > C2 > C3 > C4 > C7 > C8 » : en cas de doute, voir le manuel de l'armoire."
            },
            {
              "code": "Entrée CY",
              "def": "—",
              "titre": "Fonction de l'entrée 2-CY",
              "valeurs": [
                [
                  "Choix",
                  "C1 > C2 > C3 > C4 > C7 > C8"
                ],
                [
                  "C1",
                  "Réouverture pendant la fermeture (photocellules)"
                ],
                [
                  "C2",
                  "Refermeture pendant l'ouverture (photocellules)"
                ],
                [
                  "C3",
                  "Arrêt partiel"
                ],
                [
                  "C4",
                  "Attente obstacle"
                ],
                [
                  "C7",
                  "Réouverture pendant la fermeture (bords sensibles)"
                ],
                [
                  "C8",
                  "Refermeture pendant l'ouverture (bords sensibles)"
                ]
              ],
              "note": "Les significations viennent de la fiche ZN7 (fonctions F2 / F3, mêmes numéros 1, 2, 3, 4, 7, 8). Les fiches ZM3E / ZM3ES / ZLJ24 ne donnent que la liste « C1 > C2 > C3 > C4 > C7 > C8 » : en cas de doute, voir le manuel de l'armoire."
            },
            {
              "code": "Entrée CZ",
              "def": "—",
              "titre": "Fonction de l'entrée 2-CZ",
              "valeurs": [
                [
                  "Choix",
                  "C1 > C2 > C3 > C4 > C7 > C8"
                ],
                [
                  "C1",
                  "Réouverture pendant la fermeture (photocellules)"
                ],
                [
                  "C2",
                  "Refermeture pendant l'ouverture (photocellules)"
                ],
                [
                  "C3",
                  "Arrêt partiel"
                ],
                [
                  "C4",
                  "Attente obstacle"
                ],
                [
                  "C7",
                  "Réouverture pendant la fermeture (bords sensibles)"
                ],
                [
                  "C8",
                  "Refermeture pendant l'ouverture (bords sensibles)"
                ]
              ],
              "note": "Les significations viennent de la fiche ZN7 (fonctions F2 / F3, mêmes numéros 1, 2, 3, 4, 7, 8). Les fiches ZM3E / ZM3ES / ZLJ24 ne donnent que la liste « C1 > C2 > C3 > C4 > C7 > C8 » : en cas de doute, voir le manuel de l'armoire."
            },
            {
              "code": "Poussée ferm.",
              "def": "—",
              "titre": "Poussée à la fermeture",
              "valeurs": [
                [
                  "Désactivée",
                  "Pas de poussée"
                ],
                [
                  "Activée",
                  "Poussée sur la butée de fermeture"
                ]
              ]
            },
            {
              "code": "Fin de course",
              "def": "—",
              "titre": "Type des fins de course",
              "valeurs": [
                [
                  "NF",
                  "Contact fermé au repos"
                ],
                [
                  "NO",
                  "Contact ouvert au repos"
                ]
              ]
            },
            {
              "code": "Commande 2-7",
              "def": "—",
              "titre": "Fonction du bouton sur 2-7",
              "valeurs": [
                [
                  "Ouv.-Arrêt-Ferm.",
                  "Ouvre – stop – ferme – stop"
                ],
                [
                  "Ouverture-Fermeture-inversion",
                  "Ouvre – ferme – inversion"
                ]
              ]
            },
            {
              "code": "Commande 2-3P",
              "def": "—",
              "titre": "Fonction du bouton sur 2-3P",
              "valeurs": [
                [
                  "Piétonnière",
                  "Ouverture piétonne"
                ],
                [
                  "Partielle",
                  "Ouverture partielle"
                ]
              ]
            },
            {
              "code": "Sortie B1-B2",
              "def": "—",
              "titre": "Sortie du 2e canal radio",
              "valeurs": [
                [
                  "Monostable",
                  "Contact fermé le temps de l'appui sur la touche de l'émetteur"
                ],
                [
                  "Bistable",
                  "Change d'état à chaque appui"
                ]
              ]
            },
            {
              "code": "Adresse CRP",
              "def": "—",
              "titre": "Adresse sur la liaison série",
              "valeurs": [
                [
                  "1 > 32",
                  "Adresse CRP (Came Remote Protocol) pour la domotique via carte RSE"
                ]
              ]
            },
            {
              "code": "Serrure",
              "def": "—",
              "titre": "Électro-serrure",
              "valeurs": [
                [
                  "Désactivée",
                  "Pas de serrure"
                ],
                [
                  "Ouverture",
                  "À l'ouverture"
                ],
                [
                  "Fermeture",
                  "À la fermeture"
                ],
                [
                  "Ouverture-Fermeture",
                  "Aux deux"
                ]
              ]
            },
            {
              "code": "Coup de bélier",
              "def": "—",
              "titre": "Coup de bélier",
              "valeurs": [
                [
                  "Désactivé",
                  "Pas de coup de bélier"
                ],
                [
                  "Ouverture",
                  "À l'ouverture"
                ],
                [
                  "Fermeture",
                  "À la fermeture"
                ],
                [
                  "Ouverture-Fermeture",
                  "Aux deux"
                ]
              ]
            },
            {
              "code": "Config.",
              "def": "—",
              "titre": "Configuration des fins de course / ralentissements",
              "valeurs": [
                [
                  "ralentissement",
                  "Ralentissement"
                ],
                [
                  "Fouv.-Ral. Fermeture",
                  "Fin de course à l'ouverture + ralentissement à la fermeture"
                ],
                [
                  "ENCODER",
                  "Arrêt par encodeur"
                ],
                [
                  "fc temporisé",
                  "Fin de course temporisé"
                ],
                [
                  "fin de course",
                  "Fin de course"
                ]
              ],
              "note": "Liste de la fiche : « ralentissement > Fouv.-Ral. Fermeture > fc temporisé > fin de course » (IT : Rallentamento > Fap-Rall Chiude > ENCODER > FC a tempo > Fine corsa)."
            },
            {
              "code": "Vit. Ral.",
              "def": "—",
              "titre": "Vitesse de ralentissement",
              "valeurs": [
                [
                  "− … +",
                  "Réglage"
                ]
              ]
            },
            {
              "code": "Lampe E",
              "def": "—",
              "titre": "Sortie E (E-E3)",
              "valeurs": [
                [
                  "Cycle",
                  "Lampe cycle"
                ],
                [
                  "Accueil",
                  "Lampe d'accueil"
                ]
              ]
            },
            {
              "code": "Nbre Moteurs",
              "def": "—",
              "titre": "Nombre de moteurs",
              "valeurs": [
                [
                  "M1+M2",
                  "Deux vantaux"
                ],
                [
                  "M2",
                  "Moteur M2 seul"
                ]
              ]
            },
            {
              "code": "Type moteur",
              "def": "—",
              "titre": "Gamme de moteurs",
              "valeurs": [
                [
                  "Frog > Axo > Fast > Ferni",
                  "Moteur installé"
                ]
              ]
            },
            {
              "code": "Mode Veille",
              "def": "—",
              "titre": "Mode veille",
              "valeurs": [
                [
                  "Désactivé",
                  "Pas de veille"
                ],
                [
                  "Activé",
                  "Veille activée"
                ]
              ]
            },
            {
              "code": "Baudrate CRP",
              "def": "—",
              "titre": "Vitesse de la liaison série",
              "valeurs": [
                [
                  "1200 … 115200",
                  "1200 > 2400 > 4800 > 9600 > 19200 > 38400 > 57600 > 115200 bauds"
                ]
              ]
            }
          ]
        },
        {
          "nom": "Encodeur",
          "items": [
            {
              "code": "Sensibilité",
              "def": "—",
              "titre": "Sensibilité de l'encodeur",
              "valeurs": [
                [
                  "Activée",
                  "Activée"
                ],
                [
                  "Désactivée",
                  "Désactivée"
                ]
              ]
            },
            {
              "code": "Sensib. Course",
              "def": "—",
              "titre": "Sensibilité pendant la course",
              "valeurs": [
                [
                  "− … +",
                  "Réglage de la sensibilité"
                ]
              ]
            },
            {
              "code": "Sensib. Ral.",
              "def": "—",
              "titre": "Sensibilité pendant le ralentissement",
              "valeurs": [
                [
                  "− … +",
                  "Réglage de la sensibilité"
                ]
              ]
            },
            {
              "code": "Ralent. Enc.",
              "def": "—",
              "titre": "Ralentissement à l'encodeur",
              "valeurs": [
                [
                  "ON",
                  "Actif"
                ],
                [
                  "OFF",
                  "Inactif"
                ]
              ]
            },
            {
              "code": "M1 / M2 Ral. OUV. / FERM. %",
              "def": "—",
              "titre": "Début de ralentissement de chaque moteur",
              "valeurs": [
                [
                  "1 > 60",
                  "% de la course, séparément pour M1 et M2, à l'ouverture et à la fermeture"
                ]
              ]
            },
            {
              "code": "M1 / M2 Acc. OUV. / FERM. %",
              "def": "—",
              "titre": "Accélération de chaque moteur",
              "valeurs": [
                [
                  "1 > 15",
                  "% de la course, séparément pour M1 et M2, à l'ouverture et à la fermeture"
                ]
              ]
            },
            {
              "code": "Réglage course",
              "def": "—",
              "titre": "Apprentissage de la course (« Set Encoder »)",
              "valeurs": [
                [
                  "confirmer ? oui / non",
                  "Lance l'apprentissage de la course"
                ]
              ],
              "note": "Libellé IT « Taratura corsa ». Le déroulement exact n'est pas décrit sur la fiche : voir le manuel de l'armoire."
            }
          ]
        },
        {
          "nom": "Réglage temps",
          "items": [
            {
              "code": "T.F.A.",
              "def": "—",
              "titre": "Temps de fermeture automatique",
              "valeurs": [
                [
                  "0 > 300 s",
                  "Pause avant la refermeture automatique"
                ]
              ]
            },
            {
              "code": "T.F.A. Piétonnière",
              "def": "—",
              "titre": "Fermeture automatique après ouverture piétonne",
              "valeurs": [
                [
                  "0 > 300 s",
                  "Pause avant la refermeture après une ouverture piétonne"
                ]
              ]
            },
            {
              "code": "Temps de fonctionnement",
              "def": "—",
              "titre": "Durée de la manœuvre",
              "valeurs": [
                [
                  "10 > 150 s",
                  "Temps de travail"
                ]
              ]
            },
            {
              "code": "Ret. Ouv. M1",
              "def": "—",
              "titre": "Retard du moteur M1 à l'ouverture",
              "valeurs": [
                [
                  "0 > 10 s",
                  "Le vantail M1 part en retard sur M2"
                ]
              ]
            },
            {
              "code": "Ret. Ferm. M2",
              "def": "—",
              "titre": "Retard du moteur M2 à la fermeture",
              "valeurs": [
                [
                  "0 > 60 s",
                  "Le vantail M2 part en retard à la fermeture"
                ]
              ]
            },
            {
              "code": "T. Préclignotement",
              "def": "—",
              "titre": "Durée du préclignotement",
              "valeurs": [
                [
                  "1 > 60 s",
                  "Avant la manœuvre"
                ]
              ]
            },
            {
              "code": "T. Serr.",
              "def": "—",
              "titre": "Temps de la serrure",
              "valeurs": [
                [
                  "1 > 5 s",
                  "Durée d'alimentation de l'électro-serrure"
                ]
              ]
            },
            {
              "code": "T. Coup de bélier",
              "def": "—",
              "titre": "Durée du coup de bélier",
              "valeurs": [
                [
                  "1 > 10 s",
                  "Poussée sur la butée avant l'ouverture"
                ]
              ]
            },
            {
              "code": "Ouv. partielle",
              "def": "—",
              "titre": "Ouverture partielle",
              "valeurs": [
                [
                  "5 > 60 s",
                  "Temps de manœuvre pour l'ouverture partielle"
                ]
              ]
            },
            {
              "code": "T. ral.",
              "def": "—",
              "titre": "Temps de ralentissement",
              "valeurs": [
                [
                  "OFF > 30 s",
                  "Durée du ralentissement"
                ]
              ]
            }
          ]
        },
        {
          "nom": "Utilisateurs et info",
          "items": [
            {
              "code": "Utilisateurs",
              "def": "—",
              "titre": "Gestion des émetteurs et du capteur",
              "valeurs": [
                [
                  "Nouvel Utilisateur",
                  "Confirmer oui / non"
                ],
                [
                  "Modifier Nom · Mod. Code",
                  "Sélectionner l'utilisateur (001, 002…)"
                ],
                [
                  "Fonct. Associée",
                  "Fonction de la touche, ex. 2-7 > Ouverture"
                ],
                [
                  "Supprimer utilisateur",
                  "Un seul (confirmer oui / non)"
                ],
                [
                  "Supprimer TOUS",
                  "Confirmer oui / non"
                ],
                [
                  "CAPTEUR",
                  "Clavier > Transpondeur"
                ],
                [
                  "Sauvegarder / Télécharger Mémoire",
                  "Confirmer oui / non, Memory Roll insérée avant"
                ]
              ]
            },
            {
              "code": "INFO",
              "def": "—",
              "titre": "Informations",
              "valeurs": [
                [
                  "Version > Nbre Courses > Msg Initial > RàZ Système",
                  "Consultation, et remise à zéro du système"
                ]
              ]
            }
          ]
        }
      ]
    },
    "apprentissage": {
      "avant": [
        "Couper la tension de ligne et débrancher les batteries avant d'insérer une carte à enfichage (AF, R700, etc.).",
        "Vérifier le sens de marche des moteurs avec le menu TEST MOT. (« <=M1 M2=> »)."
      ],
      "etapes": [
        "La fiche ne décrit aucune procédure. Elle indique seulement dans le menu ENCODEUR la ligne « Réglage course (confirmer ? oui / non) », qui lance l'apprentissage de la course.",
        "Pour les temps et les débuts de ralentissement par moteur : menus RÉGLAGE TEMPS et ENCODEUR."
      ],
      "apres": [
        "Déroulement exact de l'apprentissage : voir le manuel de l'armoire (docs.came.com).",
        "Mémoriser les émetteurs : menu UTILISATEURS > Nouvel Utilisateur.",
        "Menu INFO : version, nombre de courses, remise à zéro du système."
      ]
    }
  },
  {
    "id": "came-zm3es",
    "nom": "ZM3ES",
    "modeles": "Rechange 3199ZM3ES — battant, 2 moteurs triphasés 400 V",
    "type": "Battant 400 V triphasé — menu à afficheur, fins de course",
    "source": "Notice Came FA00557M4A (07/2016, fiche de rechange)",
    "codes": [
      {
        "code": "TEST MOT.",
        "type": "test",
        "titre": "Menu TEST MOT.",
        "action": "Fait bouger chaque moteur séparément (affichage « <=M1 M2=> ») pour vérifier le sens de marche. Utile après avoir inversé des fils ou remplacé un moteur."
      },
      {
        "code": "INFO",
        "type": "diag",
        "titre": "Menu INFO",
        "action": "Version, nombre de courses, message initial, remise à zéro du système."
      },
      {
        "code": "C1…C8",
        "type": "diag",
        "titre": "Fonctions des entrées CX / CY / CZ",
        "action": "Si le portail s'arrête ou ne repart pas : vérifier le contact NF de l'entrée concernée (2-CX, 2-CY, 2-CZ) et la fonction choisie dans FONCTIONS (C1, C2, C3, C4, C7, C8)."
      }
    ],
    "bornier": {
      "groupes": [
        {
          "nom": "Alimentation",
          "bornes": [
            {
              "n": "R · S · T · N",
              "label": "Secteur",
              "desc": "400 V AC triphasé 50/60 Hz",
              "t": "alim"
            },
            {
              "n": "10 · 11",
              "label": "24 V accessoires",
              "desc": "Sortie 24 V AC, 30 W max",
              "t": "alim"
            },
            {
              "n": "10 · TS",
              "label": "24 V sécurité",
              "desc": "Sortie 24 V pour la sécurité des photocellules",
              "t": "alim"
            }
          ]
        },
        {
          "nom": "Moteurs et fins de course",
          "bornes": [
            {
              "n": "U · W · V",
              "label": "Moteur M1",
              "desc": "400 V AC, retard à l'ouverture",
              "t": "moteur"
            },
            {
              "n": "X · W · Y",
              "label": "Moteur M2",
              "desc": "400 V AC, retard à la fermeture",
              "t": "moteur"
            },
            {
              "n": "2 · FA1",
              "label": "Fin de course ouv. M1",
              "desc": "Contact NF (fils noir / gris selon la fiche)",
              "t": "nf"
            },
            {
              "n": "2 · FC1",
              "label": "Fin de course ferm. M1",
              "desc": "Contact NF (fils noir / gris selon la fiche)",
              "t": "nf"
            },
            {
              "n": "2 · FA2",
              "label": "Fin de course ouv. M2",
              "desc": "Contact NF (fils noir / gris selon la fiche)",
              "t": "nf"
            },
            {
              "n": "2 · FC2",
              "label": "Fin de course ferm. M2",
              "desc": "Contact NF (fils noir / gris selon la fiche)",
              "t": "nf"
            }
          ]
        },
        {
          "nom": "Sorties",
          "bornes": [
            {
              "n": "E1 · E2",
              "label": "Clignotant",
              "desc": "230 V AC, 25 W max",
              "t": "sortie"
            },
            {
              "n": "E · E3",
              "label": "Lampe cycle / accueil",
              "desc": "230 V AC, 60 W max",
              "t": "sortie"
            },
            {
              "n": "10 · 5",
              "label": "Voyant",
              "desc": "Lampe témoin 24 V AC, 3 W max",
              "t": "sortie"
            },
            {
              "n": "11 · ES",
              "label": "Serrure",
              "desc": "Électro-serrure 12 V, 15 W max",
              "t": "sortie"
            },
            {
              "n": "B1 · B2",
              "label": "2e canal radio",
              "desc": "24 V DC, 1 A max, contact NO",
              "t": "sortie"
            }
          ]
        },
        {
          "nom": "Commandes",
          "bornes": [
            {
              "n": "1 · 2",
              "label": "STOP",
              "desc": "Bouton d'arrêt, contact NF",
              "t": "nf"
            },
            {
              "n": "2 · 3",
              "label": "Ouvre seulement",
              "desc": "Contact NO",
              "t": "no"
            },
            {
              "n": "2 · 3P",
              "label": "Partielle / piétonne",
              "desc": "Programmable (menu FONCTIONS), contact NO",
              "t": "no"
            },
            {
              "n": "2 · 4",
              "label": "Ferme seulement",
              "desc": "Contact NO",
              "t": "no"
            },
            {
              "n": "2 · 7",
              "label": "Commande programmable",
              "desc": "Contact NO (menu FONCTIONS)",
              "t": "no"
            }
          ]
        },
        {
          "nom": "Sécurités et accessoires",
          "bornes": [
            {
              "n": "2 · CX",
              "label": "Photocellules CX",
              "desc": "Contact NF, fonction programmable",
              "t": "nf"
            },
            {
              "n": "2 · CY",
              "label": "Photocellules CY",
              "desc": "Contact NF, fonction programmable",
              "t": "nf"
            },
            {
              "n": "2 · CZ",
              "label": "Photocellules CZ",
              "desc": "Contact NF, fonction programmable",
              "t": "nf"
            },
            {
              "n": "S1 · GND",
              "label": "Capteur",
              "desc": "Sortie pour capteur TSP00 ou LT001 (clavier, transpondeur, lecteur de cartes)",
              "t": "bus"
            },
            {
              "n": "A · B · GND",
              "label": "Série RS485",
              "desc": "Carte RSE pour la domotique via CRP (Came Remote Protocol)",
              "t": "bus"
            },
            {
              "n": "Antenne",
              "label": "Antenne",
              "desc": "Câble RG58 de l'antenne (carte radio AF enfichée)",
              "t": "bus"
            }
          ]
        }
      ],
      "fusibles": "Non indiqués sur la fiche de rechange (voir le manuel de l'armoire).",
      "notes": [
        "Moteurs triphasés 400 V : ne pas confondre avec la ZM3E (230 V monophasé, encodeurs).",
        "Pas de bornes d'encodeur sur cette carte : arrêt par fins de course.",
        "Capteur sur S1-GND : le texte français dit TSP00 ou LT001, le texte russe TST01 ou LT001.",
        "Carte radio AF : l'enficher uniquement hors tension (batteries débranchées) ; la carte mère ne la reconnaît qu'à la remise sous tension.",
        "Avant toute intervention, et avant d'insérer une carte à enfichage (AF, R700, etc.) : couper la tension de ligne et débrancher les batteries éventuelles."
      ]
    },
    "parametres": {
      "intro": "Menu à afficheur : FONCTIONS, RÉGLAGE TEMPS, UTILISATEURS, INFO, TEST MOT. La fiche donne l'arborescence et les choix, pas les valeurs d'usine.",
      "navigation": [
        "Menu à afficheur : LANGUE, FONCTIONS, RÉGLAGE TEMPS, UTILISATEURS, INFO, TEST MOT., plus ENCODEUR et / ou CONFIG COURSE sur les cartes qui les ont (voir l'intro de la carte).",
        "La fiche de rechange donne l'arborescence et les choix possibles séparés par « > ». Les touches de navigation et le sens exact de chaque réglage sont dans le manuel de l'armoire (docs.came.com).",
        "La valeur d'usine n'est pas indiquée sur la fiche (colonne « usine » : —)."
      ],
      "groupes": [
        {
          "nom": "Fonctions",
          "items": [
            {
              "code": "Ferm. automatique",
              "def": "—",
              "titre": "Fermeture automatique",
              "valeurs": [
                [
                  "Désactivée",
                  "Pas de refermeture automatique"
                ],
                [
                  "Activée",
                  "Refermeture après le temps T.F.A. (menu Réglage temps)"
                ]
              ]
            },
            {
              "code": "Act. maintenue",
              "def": "—",
              "titre": "Action maintenue",
              "valeurs": [
                [
                  "Désactivée",
                  "Fonctionnement normal"
                ],
                [
                  "Activée",
                  "Le portail bouge tant qu'on appuie sur la commande"
                ],
                [
                  "En fermeture",
                  "Action maintenue seulement à la fermeture"
                ]
              ]
            },
            {
              "code": "Dét. obstacle",
              "def": "—",
              "titre": "Détection d'obstacle",
              "valeurs": [
                [
                  "Activée",
                  "Activée"
                ],
                [
                  "Désactivée",
                  "Désactivée"
                ]
              ],
              "note": "Intitulé de la fiche : « Dét. obstacle » (Ril. ostacolo / Obstacle dec.), sans autre précision. Voir le manuel de l'armoire."
            },
            {
              "code": "Test dispositifs de sécurité",
              "def": "—",
              "titre": "Test des photocellules",
              "valeurs": [
                [
                  "Désactivé",
                  "Pas de test"
                ],
                [
                  "CX · CY · CZ",
                  "Test sur une entrée"
                ],
                [
                  "CX+CY · CX+CZ · CY+CZ",
                  "Test sur deux entrées"
                ],
                [
                  "CX+CY+CZ",
                  "Test sur les trois entrées"
                ]
              ],
              "note": "L'émetteur des photocellules se branche sur TS (sortie 24 V pour la sécurité des photocellules)."
            },
            {
              "code": "Préclignotement",
              "def": "—",
              "titre": "Préclignotement",
              "valeurs": [
                [
                  "Désactivé",
                  "Pas de préclignotement"
                ],
                [
                  "Activé",
                  "Le clignotant démarre avant la manœuvre (durée : « T. Préclignotement »)"
                ]
              ]
            },
            {
              "code": "Arrêt total",
              "def": "—",
              "titre": "Entrée STOP 1-2",
              "valeurs": [
                [
                  "Désactivé",
                  "Entrée STOP ignorée"
                ],
                [
                  "Activé",
                  "L'entrée STOP 1-2 arrête le portail"
                ]
              ]
            },
            {
              "code": "Entrée CX",
              "def": "—",
              "titre": "Fonction de l'entrée 2-CX",
              "valeurs": [
                [
                  "Choix",
                  "C1 > C2 > C3 > C4 > C7 > C8"
                ],
                [
                  "C1",
                  "Réouverture pendant la fermeture (photocellules)"
                ],
                [
                  "C2",
                  "Refermeture pendant l'ouverture (photocellules)"
                ],
                [
                  "C3",
                  "Arrêt partiel"
                ],
                [
                  "C4",
                  "Attente obstacle"
                ],
                [
                  "C7",
                  "Réouverture pendant la fermeture (bords sensibles)"
                ],
                [
                  "C8",
                  "Refermeture pendant l'ouverture (bords sensibles)"
                ]
              ],
              "note": "Les significations viennent de la fiche ZN7 (fonctions F2 / F3, mêmes numéros 1, 2, 3, 4, 7, 8). Les fiches ZM3E / ZM3ES / ZLJ24 ne donnent que la liste « C1 > C2 > C3 > C4 > C7 > C8 » : en cas de doute, voir le manuel de l'armoire."
            },
            {
              "code": "Entrée CY",
              "def": "—",
              "titre": "Fonction de l'entrée 2-CY",
              "valeurs": [
                [
                  "Choix",
                  "C1 > C2 > C3 > C4 > C7 > C8"
                ],
                [
                  "C1",
                  "Réouverture pendant la fermeture (photocellules)"
                ],
                [
                  "C2",
                  "Refermeture pendant l'ouverture (photocellules)"
                ],
                [
                  "C3",
                  "Arrêt partiel"
                ],
                [
                  "C4",
                  "Attente obstacle"
                ],
                [
                  "C7",
                  "Réouverture pendant la fermeture (bords sensibles)"
                ],
                [
                  "C8",
                  "Refermeture pendant l'ouverture (bords sensibles)"
                ]
              ],
              "note": "Les significations viennent de la fiche ZN7 (fonctions F2 / F3, mêmes numéros 1, 2, 3, 4, 7, 8). Les fiches ZM3E / ZM3ES / ZLJ24 ne donnent que la liste « C1 > C2 > C3 > C4 > C7 > C8 » : en cas de doute, voir le manuel de l'armoire."
            },
            {
              "code": "Entrée CZ",
              "def": "—",
              "titre": "Fonction de l'entrée 2-CZ",
              "valeurs": [
                [
                  "Choix",
                  "C1 > C2 > C3 > C4 > C7 > C8"
                ],
                [
                  "C1",
                  "Réouverture pendant la fermeture (photocellules)"
                ],
                [
                  "C2",
                  "Refermeture pendant l'ouverture (photocellules)"
                ],
                [
                  "C3",
                  "Arrêt partiel"
                ],
                [
                  "C4",
                  "Attente obstacle"
                ],
                [
                  "C7",
                  "Réouverture pendant la fermeture (bords sensibles)"
                ],
                [
                  "C8",
                  "Refermeture pendant l'ouverture (bords sensibles)"
                ]
              ],
              "note": "Les significations viennent de la fiche ZN7 (fonctions F2 / F3, mêmes numéros 1, 2, 3, 4, 7, 8). Les fiches ZM3E / ZM3ES / ZLJ24 ne donnent que la liste « C1 > C2 > C3 > C4 > C7 > C8 » : en cas de doute, voir le manuel de l'armoire."
            },
            {
              "code": "Poussée ferm.",
              "def": "—",
              "titre": "Poussée à la fermeture",
              "valeurs": [
                [
                  "Désactivée",
                  "Pas de poussée"
                ],
                [
                  "Activée",
                  "Poussée sur la butée de fermeture"
                ]
              ]
            },
            {
              "code": "Fin de course",
              "def": "—",
              "titre": "Type des fins de course",
              "valeurs": [
                [
                  "NF",
                  "Contact fermé au repos"
                ],
                [
                  "NO",
                  "Contact ouvert au repos"
                ]
              ]
            },
            {
              "code": "Commande 2-7",
              "def": "—",
              "titre": "Fonction du bouton sur 2-7",
              "valeurs": [
                [
                  "Ouv.-Arrêt-Ferm.",
                  "Ouvre – stop – ferme – stop"
                ],
                [
                  "Ouverture-Fermeture-inversion",
                  "Ouvre – ferme – inversion"
                ]
              ]
            },
            {
              "code": "Commande 2-3P",
              "def": "—",
              "titre": "Fonction du bouton sur 2-3P",
              "valeurs": [
                [
                  "Piétonnière",
                  "Ouverture piétonne"
                ],
                [
                  "Partielle",
                  "Ouverture partielle"
                ]
              ]
            },
            {
              "code": "Sortie B1-B2",
              "def": "—",
              "titre": "Sortie du 2e canal radio",
              "valeurs": [
                [
                  "Monostable",
                  "Contact fermé le temps de l'appui sur la touche de l'émetteur"
                ],
                [
                  "Bistable",
                  "Change d'état à chaque appui"
                ]
              ]
            },
            {
              "code": "Adresse CRP",
              "def": "—",
              "titre": "Adresse sur la liaison série",
              "valeurs": [
                [
                  "1 > 32",
                  "Adresse CRP (Came Remote Protocol) pour la domotique via carte RSE"
                ]
              ]
            },
            {
              "code": "Serrure",
              "def": "—",
              "titre": "Électro-serrure",
              "valeurs": [
                [
                  "Désactivée",
                  "Pas de serrure"
                ],
                [
                  "Activé",
                  "Électro-serrure 12 V active"
                ]
              ]
            },
            {
              "code": "Coup de bélier",
              "def": "—",
              "titre": "Coup de bélier",
              "valeurs": [
                [
                  "Désactivé",
                  "Pas de coup de bélier"
                ],
                [
                  "Activé",
                  "Coup de bélier activé"
                ]
              ]
            },
            {
              "code": "Config.",
              "def": "—",
              "titre": "Configuration des arrêts de course",
              "valeurs": [
                [
                  "fin de course",
                  "Seule valeur à utiliser"
                ]
              ],
              "note": "La fiche liste « ralentissement*, Fouv.-Ral. Fermeture*, fc temporisé*, fin de course » et précise que les valeurs marquées * sont dans le logiciel mais ne doivent pas être utilisées."
            },
            {
              "code": "Lampe E3",
              "def": "—",
              "titre": "Sortie E3",
              "valeurs": [
                [
                  "Cycle",
                  "Lampe cycle"
                ],
                [
                  "Accueil",
                  "Lampe d'accueil"
                ]
              ]
            },
            {
              "code": "Nbre Moteurs",
              "def": "—",
              "titre": "Nombre de moteurs",
              "valeurs": [
                [
                  "M1+M2",
                  "Deux vantaux"
                ],
                [
                  "M2",
                  "Moteur M2 seul"
                ]
              ]
            },
            {
              "code": "Baudrate CRP",
              "def": "—",
              "titre": "Vitesse de la liaison série",
              "valeurs": [
                [
                  "1200 … 115200",
                  "1200 > 2400 > 4800 > 9600 > 19200 > 38400 > 57600 > 115200 bauds"
                ]
              ]
            }
          ]
        },
        {
          "nom": "Réglage temps",
          "items": [
            {
              "code": "T.F.A.",
              "def": "—",
              "titre": "Temps de fermeture automatique",
              "valeurs": [
                [
                  "0 > 300 s",
                  "Pause avant la refermeture automatique"
                ]
              ]
            },
            {
              "code": "T.F.A. Piétonnière",
              "def": "—",
              "titre": "Fermeture automatique après ouverture piétonne",
              "valeurs": [
                [
                  "0 > 300 s",
                  "Pause avant la refermeture après une ouverture piétonne"
                ]
              ]
            },
            {
              "code": "Temps de fonctionnement",
              "def": "—",
              "titre": "Durée de la manœuvre",
              "valeurs": [
                [
                  "10 > 150 s",
                  "Temps de travail"
                ]
              ]
            },
            {
              "code": "Ret. Ouv. M1",
              "def": "—",
              "titre": "Retard du moteur M1 à l'ouverture",
              "valeurs": [
                [
                  "0 > 10 s",
                  "Le vantail M1 part en retard sur M2"
                ]
              ]
            },
            {
              "code": "Ret. Ferm. M2",
              "def": "—",
              "titre": "Retard du moteur M2 à la fermeture",
              "valeurs": [
                [
                  "0 > 60 s",
                  "Le vantail M2 part en retard à la fermeture"
                ]
              ]
            },
            {
              "code": "T. Préclignotement",
              "def": "—",
              "titre": "Durée du préclignotement",
              "valeurs": [
                [
                  "1 > 60 s",
                  "Avant la manœuvre"
                ]
              ]
            },
            {
              "code": "T. Serr.",
              "def": "—",
              "titre": "Temps de la serrure",
              "valeurs": [
                [
                  "1 > 5 s",
                  "Durée d'alimentation de l'électro-serrure"
                ]
              ]
            },
            {
              "code": "T. Coup de bélier",
              "def": "—",
              "titre": "Durée du coup de bélier",
              "valeurs": [
                [
                  "1 > 10 s",
                  "Poussée sur la butée avant l'ouverture"
                ]
              ]
            },
            {
              "code": "Ouv. partielle",
              "def": "—",
              "titre": "Ouverture partielle",
              "valeurs": [
                [
                  "5 > 60 s",
                  "Temps de manœuvre pour l'ouverture partielle"
                ]
              ]
            },
            {
              "code": "T. ral.",
              "def": "—",
              "titre": "Temps de ralentissement",
              "valeurs": [
                [
                  "OFF > 30 s",
                  "Durée du ralentissement"
                ]
              ]
            }
          ]
        },
        {
          "nom": "Utilisateurs et info",
          "items": [
            {
              "code": "Utilisateurs",
              "def": "—",
              "titre": "Gestion des émetteurs et du capteur",
              "valeurs": [
                [
                  "Nouvel Utilisateur",
                  "Confirmer oui / non"
                ],
                [
                  "Modifier Nom · Mod. Code",
                  "Sélectionner l'utilisateur (001, 002…)"
                ],
                [
                  "Fonct. Associée",
                  "Fonction de la touche, ex. 2-7 > Ouverture"
                ],
                [
                  "Supprimer utilisateur",
                  "Un seul (confirmer oui / non)"
                ],
                [
                  "Supprimer TOUS",
                  "Confirmer oui / non"
                ],
                [
                  "CAPTEUR",
                  "Clavier > Transpondeur"
                ],
                [
                  "Sauvegarder / Télécharger Mémoire",
                  "Confirmer oui / non, Memory Roll insérée avant"
                ]
              ]
            },
            {
              "code": "INFO",
              "def": "—",
              "titre": "Informations",
              "valeurs": [
                [
                  "Version > Nbre Courses > Msg Initial > RàZ Système",
                  "Consultation, et remise à zéro du système"
                ]
              ]
            }
          ]
        }
      ]
    },
    "apprentissage": {
      "avant": [
        "Couper la tension de ligne avant d'insérer une carte à enfichage ; vérifier le sens de rotation des moteurs triphasés (menu TEST MOT.).",
        "Régler le menu FONCTIONS : nombre de moteurs, fins de course NF / NO, configuration « fin de course »."
      ],
      "etapes": [
        "La fiche ne décrit aucune procédure de réglage. Les fins de course se raccordent sur FA1 / FC1 / FA2 / FC2 (contacts NF) ; temps de fonctionnement, retards M1 / M2 et autres réglages : menu RÉGLAGE TEMPS."
      ],
      "apres": [
        "La fiche de rechange ne décrit pas de procédure d'apprentissage : se reporter au manuel de l'armoire (docs.came.com).",
        "Mémoriser les émetteurs : menu UTILISATEURS > Nouvel Utilisateur."
      ]
    }
  },
  {
    "id": "came-zlj24",
    "nom": "ZLJ24",
    "modeles": "ZLJ24 / ZLJ24110 (rechange 3199ZLJ24) — battant 24 V, 2 moteurs avec encodeur",
    "type": "Battant 24 V DC — menu à afficheur, encodeurs",
    "source": "Notice Came FA00434M4A (04/2016, fiche de rechange)",
    "codes": [
      {
        "code": "TEST MOT.",
        "type": "test",
        "titre": "Menu TEST MOT.",
        "action": "Fait bouger chaque moteur séparément (affichage « <=M1 M2=> ») pour vérifier le sens de marche. Utile après avoir inversé des fils ou remplacé un moteur."
      },
      {
        "code": "INFO",
        "type": "diag",
        "titre": "Menu INFO",
        "action": "Version, nombre de courses, message initial, remise à zéro du système."
      },
      {
        "code": "C1…C8",
        "type": "diag",
        "titre": "Fonctions des entrées CX / CY / CZ",
        "action": "Si le portail s'arrête ou ne repart pas : vérifier le contact NF de l'entrée concernée (2-CX, 2-CY, 2-CZ) et la fonction choisie dans FONCTIONS (C1, C2, C3, C4, C7, C8)."
      }
    ],
    "bornier": {
      "groupes": [
        {
          "nom": "Alimentation",
          "bornes": [
            {
              "n": "L · N",
              "label": "Secteur",
              "desc": "230 V AC",
              "t": "alim"
            },
            {
              "n": "10 · 11",
              "label": "24 V accessoires",
              "desc": "Sortie 24 V AC / DC, 50 W max",
              "t": "alim"
            },
            {
              "n": "10 · TS",
              "label": "24 V sécurité",
              "desc": "Sortie 24 V pour la sécurité des photocellules",
              "t": "alim"
            }
          ]
        },
        {
          "nom": "Moteurs, encodeurs, fins de course",
          "bornes": [
            {
              "n": "M1 · N1 · E",
              "label": "Moteur M1",
              "desc": "24 V DC, retard à l'ouverture",
              "t": "moteur"
            },
            {
              "n": "M2 · N2 · E",
              "label": "Moteur M2",
              "desc": "24 V DC, retard à la fermeture",
              "t": "moteur"
            },
            {
              "n": "+ · E · −",
              "label": "Encodeur A (M1)",
              "desc": "Fils blanc, marron, vert",
              "t": "bus"
            },
            {
              "n": "+ · E · −",
              "label": "Encodeur B (M2)",
              "desc": "Fils blanc, marron, vert",
              "t": "bus"
            },
            {
              "n": "2 · FA1",
              "label": "Fin de course ouv. M1",
              "desc": "Programmable (menu FONCTIONS : NF ou NO)",
              "t": "nf"
            },
            {
              "n": "2 · FC1",
              "label": "Fin de course ferm. M1",
              "desc": "Programmable (menu FONCTIONS : NF ou NO)",
              "t": "nf"
            },
            {
              "n": "2 · FA2",
              "label": "Fin de course ouv. M2",
              "desc": "Programmable (menu FONCTIONS : NF ou NO)",
              "t": "nf"
            },
            {
              "n": "2 · FC2",
              "label": "Fin de course ferm. M2",
              "desc": "Programmable (menu FONCTIONS : NF ou NO)",
              "t": "nf"
            }
          ]
        },
        {
          "nom": "Sorties",
          "bornes": [
            {
              "n": "10 · E",
              "label": "Clignotant / lampe cycle / accueil",
              "desc": "Contact 24 V AC/DC, 25 W max (menu : Clignotant, Cycle ou Accueil)",
              "t": "sortie"
            },
            {
              "n": "10 · 5",
              "label": "Voyant",
              "desc": "Lampe témoin 24 V AC, 3 W max",
              "t": "sortie"
            },
            {
              "n": "11 · ES",
              "label": "Serrure",
              "desc": "Électro-serrure 12 V, 15 W max",
              "t": "sortie"
            },
            {
              "n": "B1 · B2",
              "label": "2e canal radio",
              "desc": "24 V DC, 500 mA max, contact NO",
              "t": "sortie"
            }
          ]
        },
        {
          "nom": "Commandes",
          "bornes": [
            {
              "n": "1 · 2",
              "label": "STOP",
              "desc": "Bouton d'arrêt, contact NF",
              "t": "nf"
            },
            {
              "n": "2 · 3",
              "label": "Ouvre seulement",
              "desc": "Contact NO",
              "t": "no"
            },
            {
              "n": "2 · 3P",
              "label": "Partielle / piétonne",
              "desc": "Programmable (menu FONCTIONS), contact NO",
              "t": "no"
            },
            {
              "n": "2 · 4",
              "label": "Ferme seulement",
              "desc": "Contact NO",
              "t": "no"
            },
            {
              "n": "2 · 7",
              "label": "Commande programmable",
              "desc": "Contact NO (menu FONCTIONS)",
              "t": "no"
            }
          ]
        },
        {
          "nom": "Sécurités et accessoires",
          "bornes": [
            {
              "n": "2 · CX",
              "label": "Photocellules CX",
              "desc": "Contact NF, fonction programmable",
              "t": "nf"
            },
            {
              "n": "2 · CY",
              "label": "Photocellules CY",
              "desc": "Contact NF, fonction programmable",
              "t": "nf"
            },
            {
              "n": "2 · CZ",
              "label": "Photocellules CZ",
              "desc": "Contact NF, fonction programmable",
              "t": "nf"
            },
            {
              "n": "S1 · GND",
              "label": "Capteur",
              "desc": "Sortie pour capteur TSP00 ou LT001 (clavier, transpondeur, lecteur de cartes)",
              "t": "bus"
            },
            {
              "n": "A · B · GND",
              "label": "Série RS485",
              "desc": "Carte RSE pour la domotique via CRP (Came Remote Protocol)",
              "t": "bus"
            },
            {
              "n": "Antenne",
              "label": "Antenne",
              "desc": "Câble RG58 de l'antenne (carte radio AF enfichée)",
              "t": "bus"
            }
          ]
        }
      ],
      "fusibles": "Non indiqués sur la fiche de rechange (voir le manuel de l'armoire).",
      "notes": [
        "Fiche valable pour ZLJ24 et ZLJ24110 (même carte 3199ZLJ24).",
        "Menu Config. : le texte français omet « ENCODER » que les textes italien et russe listent.",
        "Moteurs possibles (menu CONFIG COURSE, Type moteur) : Frog-F4024E, Frog-J, Frog-FL, Amico, Myto, Axo, Fast, Ferni.",
        "Avant toute intervention, et avant d'insérer une carte à enfichage (AF, R700, etc.) : couper la tension de ligne et débrancher les batteries éventuelles."
      ]
    },
    "parametres": {
      "intro": "Menu à afficheur : FONCTIONS, CONFIG COURSE, ENCODEUR, RÉGLAGE TEMPS, UTILISATEURS, INFO, TEST MOT. La fiche donne l'arborescence et les choix, pas les valeurs d'usine.",
      "navigation": [
        "Menu à afficheur : LANGUE, FONCTIONS, RÉGLAGE TEMPS, UTILISATEURS, INFO, TEST MOT., plus ENCODEUR et / ou CONFIG COURSE sur les cartes qui les ont (voir l'intro de la carte).",
        "La fiche de rechange donne l'arborescence et les choix possibles séparés par « > ». Les touches de navigation et le sens exact de chaque réglage sont dans le manuel de l'armoire (docs.came.com).",
        "La valeur d'usine n'est pas indiquée sur la fiche (colonne « usine » : —)."
      ],
      "groupes": [
        {
          "nom": "Fonctions",
          "items": [
            {
              "code": "Ferm. automatique",
              "def": "—",
              "titre": "Fermeture automatique",
              "valeurs": [
                [
                  "Désactivée",
                  "Pas de refermeture automatique"
                ],
                [
                  "Activée",
                  "Refermeture après le temps T.F.A. (menu Réglage temps)"
                ]
              ]
            },
            {
              "code": "Act. maintenue",
              "def": "—",
              "titre": "Action maintenue",
              "valeurs": [
                [
                  "Désactivée",
                  "Fonctionnement normal"
                ],
                [
                  "Activée",
                  "Le portail bouge tant qu'on appuie sur la commande"
                ],
                [
                  "En fermeture",
                  "Action maintenue seulement à la fermeture"
                ]
              ]
            },
            {
              "code": "Dét. obstacle",
              "def": "—",
              "titre": "Détection d'obstacle",
              "valeurs": [
                [
                  "Activée",
                  "Activée"
                ],
                [
                  "Désactivée",
                  "Désactivée"
                ]
              ],
              "note": "Intitulé de la fiche : « Dét. obstacle » (Ril. ostacolo / Obstacle dec.), sans autre précision. Voir le manuel de l'armoire."
            },
            {
              "code": "Test dispositifs de sécurité",
              "def": "—",
              "titre": "Test des photocellules",
              "valeurs": [
                [
                  "Désactivé",
                  "Pas de test"
                ],
                [
                  "CX · CY · CZ",
                  "Test sur une entrée"
                ],
                [
                  "CX+CY · CX+CZ · CY+CZ",
                  "Test sur deux entrées"
                ],
                [
                  "CX+CY+CZ",
                  "Test sur les trois entrées"
                ]
              ],
              "note": "L'émetteur des photocellules se branche sur TS (sortie 24 V pour la sécurité des photocellules)."
            },
            {
              "code": "Préclignotement",
              "def": "—",
              "titre": "Préclignotement",
              "valeurs": [
                [
                  "Désactivé",
                  "Pas de préclignotement"
                ],
                [
                  "Activé",
                  "Le clignotant démarre avant la manœuvre (durée : « T. Préclignotement »)"
                ]
              ]
            },
            {
              "code": "Arrêt total",
              "def": "—",
              "titre": "Entrée STOP 1-2",
              "valeurs": [
                [
                  "Désactivé",
                  "Entrée STOP ignorée"
                ],
                [
                  "Activé",
                  "L'entrée STOP 1-2 arrête le portail"
                ]
              ]
            },
            {
              "code": "Entrée CX",
              "def": "—",
              "titre": "Fonction de l'entrée 2-CX",
              "valeurs": [
                [
                  "Choix",
                  "C1 > C2 > C3 > C4 > C7 > C8"
                ],
                [
                  "C1",
                  "Réouverture pendant la fermeture (photocellules)"
                ],
                [
                  "C2",
                  "Refermeture pendant l'ouverture (photocellules)"
                ],
                [
                  "C3",
                  "Arrêt partiel"
                ],
                [
                  "C4",
                  "Attente obstacle"
                ],
                [
                  "C7",
                  "Réouverture pendant la fermeture (bords sensibles)"
                ],
                [
                  "C8",
                  "Refermeture pendant l'ouverture (bords sensibles)"
                ]
              ],
              "note": "Les significations viennent de la fiche ZN7 (fonctions F2 / F3, mêmes numéros 1, 2, 3, 4, 7, 8). Les fiches ZM3E / ZM3ES / ZLJ24 ne donnent que la liste « C1 > C2 > C3 > C4 > C7 > C8 » : en cas de doute, voir le manuel de l'armoire."
            },
            {
              "code": "Entrée CY",
              "def": "—",
              "titre": "Fonction de l'entrée 2-CY",
              "valeurs": [
                [
                  "Choix",
                  "C1 > C2 > C3 > C4 > C7 > C8"
                ],
                [
                  "C1",
                  "Réouverture pendant la fermeture (photocellules)"
                ],
                [
                  "C2",
                  "Refermeture pendant l'ouverture (photocellules)"
                ],
                [
                  "C3",
                  "Arrêt partiel"
                ],
                [
                  "C4",
                  "Attente obstacle"
                ],
                [
                  "C7",
                  "Réouverture pendant la fermeture (bords sensibles)"
                ],
                [
                  "C8",
                  "Refermeture pendant l'ouverture (bords sensibles)"
                ]
              ],
              "note": "Les significations viennent de la fiche ZN7 (fonctions F2 / F3, mêmes numéros 1, 2, 3, 4, 7, 8). Les fiches ZM3E / ZM3ES / ZLJ24 ne donnent que la liste « C1 > C2 > C3 > C4 > C7 > C8 » : en cas de doute, voir le manuel de l'armoire."
            },
            {
              "code": "Entrée CZ",
              "def": "—",
              "titre": "Fonction de l'entrée 2-CZ",
              "valeurs": [
                [
                  "Choix",
                  "C1 > C2 > C3 > C4 > C7 > C8"
                ],
                [
                  "C1",
                  "Réouverture pendant la fermeture (photocellules)"
                ],
                [
                  "C2",
                  "Refermeture pendant l'ouverture (photocellules)"
                ],
                [
                  "C3",
                  "Arrêt partiel"
                ],
                [
                  "C4",
                  "Attente obstacle"
                ],
                [
                  "C7",
                  "Réouverture pendant la fermeture (bords sensibles)"
                ],
                [
                  "C8",
                  "Refermeture pendant l'ouverture (bords sensibles)"
                ]
              ],
              "note": "Les significations viennent de la fiche ZN7 (fonctions F2 / F3, mêmes numéros 1, 2, 3, 4, 7, 8). Les fiches ZM3E / ZM3ES / ZLJ24 ne donnent que la liste « C1 > C2 > C3 > C4 > C7 > C8 » : en cas de doute, voir le manuel de l'armoire."
            },
            {
              "code": "Poussée ferm.",
              "def": "—",
              "titre": "Poussée à la fermeture",
              "valeurs": [
                [
                  "Désactivée",
                  "Pas de poussée"
                ],
                [
                  "Activée",
                  "Poussée sur la butée de fermeture"
                ]
              ]
            },
            {
              "code": "Fin de course",
              "def": "—",
              "titre": "Type des fins de course",
              "valeurs": [
                [
                  "NF",
                  "Contact fermé au repos"
                ],
                [
                  "NO",
                  "Contact ouvert au repos"
                ]
              ]
            },
            {
              "code": "Commande 2-7",
              "def": "—",
              "titre": "Fonction du bouton sur 2-7",
              "valeurs": [
                [
                  "Ouv.-Arrêt-Ferm.",
                  "Ouvre – stop – ferme – stop"
                ],
                [
                  "Ouverture-Fermeture-inversion",
                  "Ouvre – ferme – inversion"
                ]
              ]
            },
            {
              "code": "Commande 2-3P",
              "def": "—",
              "titre": "Fonction du bouton sur 2-3P",
              "valeurs": [
                [
                  "Piétonnière",
                  "Ouverture piétonne"
                ],
                [
                  "Partielle",
                  "Ouverture partielle"
                ]
              ]
            },
            {
              "code": "Sortie B1-B2",
              "def": "—",
              "titre": "Sortie du 2e canal radio",
              "valeurs": [
                [
                  "Monostable",
                  "Contact fermé le temps de l'appui sur la touche de l'émetteur"
                ],
                [
                  "Bistable",
                  "Change d'état à chaque appui"
                ]
              ]
            },
            {
              "code": "Adresse CRP",
              "def": "—",
              "titre": "Adresse sur la liaison série",
              "valeurs": [
                [
                  "1 > 32",
                  "Adresse CRP (Came Remote Protocol) pour la domotique via carte RSE"
                ]
              ]
            },
            {
              "code": "Serrure",
              "def": "—",
              "titre": "Électro-serrure",
              "valeurs": [
                [
                  "Désactivée",
                  "Pas de serrure"
                ],
                [
                  "Ouverture",
                  "À l'ouverture"
                ],
                [
                  "Fermeture",
                  "À la fermeture"
                ],
                [
                  "Ouverture-Fermeture",
                  "Aux deux"
                ]
              ]
            },
            {
              "code": "Coup de bélier",
              "def": "—",
              "titre": "Coup de bélier",
              "valeurs": [
                [
                  "Désactivé",
                  "Pas de coup de bélier"
                ],
                [
                  "Ouverture",
                  "À l'ouverture"
                ],
                [
                  "Fermeture",
                  "À la fermeture"
                ],
                [
                  "Ouverture-Fermeture",
                  "Aux deux"
                ]
              ]
            },
            {
              "code": "Config.",
              "def": "—",
              "titre": "Configuration des fins de course / ralentissements",
              "valeurs": [
                [
                  "ralentissement",
                  "Ralentissement"
                ],
                [
                  "Fouv.-Ral. Fermeture",
                  "Fin de course à l'ouverture + ralentissement à la fermeture"
                ],
                [
                  "ENCODER",
                  "Arrêt par encodeur"
                ],
                [
                  "fc temporisé",
                  "Fin de course temporisé"
                ],
                [
                  "fin de course",
                  "Fin de course"
                ]
              ]
            },
            {
              "code": "Lampe E",
              "def": "—",
              "titre": "Sortie 10-E",
              "valeurs": [
                [
                  "Clignotant",
                  "Clignotant"
                ],
                [
                  "Cycle",
                  "Lampe cycle"
                ],
                [
                  "Accueil",
                  "Lampe d'accueil"
                ]
              ]
            },
            {
              "code": "Baudrate CRP",
              "def": "—",
              "titre": "Vitesse de la liaison série",
              "valeurs": [
                [
                  "1200 … 115200",
                  "1200 > 2400 > 4800 > 9600 > 19200 > 38400 > 57600 > 115200 bauds"
                ]
              ]
            }
          ]
        },
        {
          "nom": "Config course",
          "items": [
            {
              "code": "Nbre Moteurs",
              "def": "—",
              "titre": "Nombre de moteurs",
              "valeurs": [
                [
                  "M1+M2",
                  "Deux vantaux"
                ],
                [
                  "M2",
                  "Moteur M2 seul"
                ]
              ]
            },
            {
              "code": "Type moteur",
              "def": "—",
              "titre": "Gamme de moteurs",
              "valeurs": [
                [
                  "Frog-F4024E > Frog-J > Frog-FL > Amico > Myto > Axo > Fast > Ferni",
                  "Moteur installé"
                ]
              ]
            },
            {
              "code": "Vitesse Man %",
              "def": "—",
              "titre": "Vitesse de manœuvre",
              "valeurs": [
                [
                  "20 > 100",
                  "% de la vitesse maximale"
                ]
              ]
            },
            {
              "code": "Vitesse Rall. %",
              "def": "—",
              "titre": "Vitesse de ralentissement",
              "valeurs": [
                [
                  "5 > 80",
                  "% de la vitesse"
                ]
              ]
            },
            {
              "code": "Départ Ralenti.",
              "def": "—",
              "titre": "Départ ralenti (soft start)",
              "valeurs": [
                [
                  "Activée",
                  "Démarrage progressif"
                ],
                [
                  "Désactivée",
                  "Démarrage normal"
                ]
              ]
            },
            {
              "code": "Capt. Ampérom.",
              "def": "—",
              "titre": "Détection d'obstacle ampèremétrique",
              "valeurs": [
                [
                  "Activée",
                  "Activée"
                ],
                [
                  "Désactivée",
                  "Désactivée"
                ]
              ]
            },
            {
              "code": "Ampèrem. Course",
              "def": "—",
              "titre": "Sensibilité ampèremétrique en course",
              "valeurs": [
                [
                  "− … +",
                  "Réglage"
                ]
              ]
            },
            {
              "code": "T. Ralentiss.",
              "def": "—",
              "titre": "Temps de ralentissement",
              "valeurs": [
                [
                  "0 > 30 s",
                  "Durée du ralentissement"
                ]
              ]
            }
          ]
        },
        {
          "nom": "Encodeur",
          "items": [
            {
              "code": "Sensibilité",
              "def": "—",
              "titre": "Sensibilité de l'encodeur",
              "valeurs": [
                [
                  "Activée",
                  "Activée"
                ],
                [
                  "Désactivée",
                  "Désactivée"
                ]
              ]
            },
            {
              "code": "Sensib. Course",
              "def": "—",
              "titre": "Sensibilité pendant la course",
              "valeurs": [
                [
                  "− … +",
                  "Réglage de la sensibilité"
                ]
              ]
            },
            {
              "code": "Sensib. Ral.",
              "def": "—",
              "titre": "Sensibilité pendant le ralentissement",
              "valeurs": [
                [
                  "− … +",
                  "Réglage de la sensibilité"
                ]
              ]
            },
            {
              "code": "Ralent. Enc.",
              "def": "—",
              "titre": "Ralentissement à l'encodeur",
              "valeurs": [
                [
                  "ON",
                  "Actif"
                ],
                [
                  "OFF",
                  "Inactif"
                ]
              ]
            },
            {
              "code": "M1 / M2 Ral. OUV. / FERM. %",
              "def": "—",
              "titre": "Début de ralentissement de chaque moteur",
              "valeurs": [
                [
                  "1 > 60",
                  "% de la course, séparément pour M1 et M2, à l'ouverture et à la fermeture"
                ]
              ]
            },
            {
              "code": "M1 / M2 Acc. OUV. / FERM. %",
              "def": "—",
              "titre": "Accélération de chaque moteur",
              "valeurs": [
                [
                  "1 > 15",
                  "% de la course, séparément pour M1 et M2, à l'ouverture et à la fermeture"
                ]
              ]
            },
            {
              "code": "Réglage course",
              "def": "—",
              "titre": "Apprentissage de la course (« Set Encoder »)",
              "valeurs": [
                [
                  "confirmer ? oui / non",
                  "Lance l'apprentissage de la course"
                ]
              ],
              "note": "Libellé IT « Taratura corsa ». Le déroulement exact n'est pas décrit sur la fiche : voir le manuel de l'armoire."
            }
          ]
        },
        {
          "nom": "Réglage temps",
          "items": [
            {
              "code": "T.F.A.",
              "def": "—",
              "titre": "Temps de fermeture automatique",
              "valeurs": [
                [
                  "0 > 300 s",
                  "Pause avant la refermeture automatique"
                ]
              ]
            },
            {
              "code": "T.F.A. Piétonnière",
              "def": "—",
              "titre": "Fermeture automatique après ouverture piétonne",
              "valeurs": [
                [
                  "0 > 300 s",
                  "Pause avant la refermeture après une ouverture piétonne"
                ]
              ]
            },
            {
              "code": "Temps de fonctionnement",
              "def": "—",
              "titre": "Durée de la manœuvre",
              "valeurs": [
                [
                  "10 > 150 s",
                  "Temps de travail"
                ]
              ]
            },
            {
              "code": "Ret. Ouv. M1",
              "def": "—",
              "titre": "Retard du moteur M1 à l'ouverture",
              "valeurs": [
                [
                  "0 > 10 s",
                  "Le vantail M1 part en retard sur M2"
                ]
              ]
            },
            {
              "code": "Ret. Ferm. M2",
              "def": "—",
              "titre": "Retard du moteur M2 à la fermeture",
              "valeurs": [
                [
                  "0 > 60 s",
                  "Le vantail M2 part en retard à la fermeture"
                ]
              ]
            },
            {
              "code": "T. Préclignotement",
              "def": "—",
              "titre": "Durée du préclignotement",
              "valeurs": [
                [
                  "1 > 60 s",
                  "Avant la manœuvre"
                ]
              ]
            },
            {
              "code": "T. Serr.",
              "def": "—",
              "titre": "Temps de la serrure",
              "valeurs": [
                [
                  "1 > 5 s",
                  "Durée d'alimentation de l'électro-serrure"
                ]
              ]
            },
            {
              "code": "T. Coup de bélier",
              "def": "—",
              "titre": "Durée du coup de bélier",
              "valeurs": [
                [
                  "1 > 10 s",
                  "Poussée sur la butée avant l'ouverture"
                ]
              ],
              "note": "Contradiction dans la fiche : le texte français indique 1 à 10 s, les textes italien et anglais indiquent 1 à 3 s."
            },
            {
              "code": "Ouv. partielle",
              "def": "—",
              "titre": "Ouverture partielle",
              "valeurs": [
                [
                  "5 > 60 s",
                  "Temps de manœuvre pour l'ouverture partielle"
                ]
              ]
            }
          ]
        },
        {
          "nom": "Utilisateurs et info",
          "items": [
            {
              "code": "Utilisateurs",
              "def": "—",
              "titre": "Gestion des émetteurs et du capteur",
              "valeurs": [
                [
                  "Nouvel Utilisateur",
                  "Confirmer oui / non"
                ],
                [
                  "Modifier Nom · Mod. Code",
                  "Sélectionner l'utilisateur (001, 002…)"
                ],
                [
                  "Fonct. Associée",
                  "Fonction de la touche, ex. 2-7 > Ouverture"
                ],
                [
                  "Supprimer utilisateur",
                  "Un seul (confirmer oui / non)"
                ],
                [
                  "Supprimer TOUS",
                  "Confirmer oui / non"
                ],
                [
                  "CAPTEUR",
                  "Clavier > Transpondeur"
                ],
                [
                  "Sauvegarder / Télécharger Mémoire",
                  "Confirmer oui / non, Memory Roll insérée avant"
                ]
              ]
            },
            {
              "code": "INFO",
              "def": "—",
              "titre": "Informations",
              "valeurs": [
                [
                  "Version > Nbre Courses > Msg Initial > RàZ Système",
                  "Consultation, et remise à zéro du système"
                ]
              ]
            }
          ]
        }
      ]
    },
    "apprentissage": {
      "avant": [
        "Couper la tension de ligne et débrancher les batteries avant d'insérer une carte à enfichage (AF, R700, etc.).",
        "Vérifier le sens de marche des moteurs avec le menu TEST MOT. (« <=M1 M2=> »)."
      ],
      "etapes": [
        "La fiche ne décrit aucune procédure. Elle indique seulement dans le menu ENCODEUR la ligne « Réglage course (confirmer ? oui / non) », qui lance l'apprentissage de la course.",
        "Pour les temps et les débuts de ralentissement par moteur : menus RÉGLAGE TEMPS et ENCODEUR."
      ],
      "apres": [
        "Déroulement exact de l'apprentissage : voir le manuel de l'armoire (docs.came.com).",
        "Mémoriser les émetteurs : menu UTILISATEURS > Nouvel Utilisateur.",
        "Menu INFO : version, nombre de courses, remise à zéro du système."
      ]
    }
  },
  {
    "id": "came-zn7",
    "nom": "ZN7",
    "modeles": "Rechange 3199ZN7 — moteur 24 V DC avec encodeur (type d'automatisme non précisé sur la fiche, classée en coulissant)",
    "type": "Coulissant 24 V — fonctions F, encodeur",
    "source": "Notice Came FA00402M4A (03/2016, fiche de rechange)",
    "codes": [
      {
        "code": "F 2 / F 3",
        "type": "diag",
        "titre": "Fonction sur les entrées 2-CX et 2-CY",
        "action": "Si le portail s'arrête ou ne repart pas : vérifier le contact NF de 2-CX / 2-CY et la fonction choisie (F 2, F 3). F 1 = 1 active l'entrée STOP 1-2 (contact NF) : si elle est ouverte, le portail ne bouge pas."
      },
      {
        "code": "F 11",
        "type": "diag",
        "titre": "Encodeur désactivé",
        "action": "F 11 = 1 désactive l'encodeur : à contrôler si l'encodeur ne semble plus pris en compte."
      },
      {
        "code": "A 5",
        "type": "diag",
        "titre": "Compteur de manœuvres",
        "action": "A 5 affiche le nombre de manœuvres (0 = nombre ; 1 = effacer tout)."
      },
      {
        "code": "H 1",
        "type": "diag",
        "titre": "Version logicielle",
        "action": "H 1 affiche la version du logiciel de la carte."
      },
      {
        "code": "A 4",
        "type": "test",
        "titre": "Reset des paramètres",
        "action": "A 4 = 1 remet les paramètres à zéro (« Resetting parameters » sur la fiche). À utiliser avec précaution."
      }
    ],
    "bornier": {
      "groupes": [
        {
          "nom": "Alimentation",
          "bornes": [
            {
              "n": "24 · 0",
              "label": "Entrée 24 V",
              "desc": "24 V AC/DC",
              "t": "alim"
            },
            {
              "n": "10 · 11",
              "label": "24 V accessoires",
              "desc": "Sortie 24 V AC/DC, 40 W max",
              "t": "alim"
            },
            {
              "n": "10 · TS",
              "label": "24 V sécurité",
              "desc": "Sortie 24 V pour le test des photocellules",
              "t": "alim"
            }
          ]
        },
        {
          "nom": "Moteur, encodeur, fins de course",
          "bornes": [
            {
              "n": "M · N",
              "label": "Moteur",
              "desc": "24 V DC (fils rouge / vert)",
              "t": "moteur"
            },
            {
              "n": "+ · E · −",
              "label": "Encodeur",
              "desc": "Fils blanc, marron, vert",
              "t": "bus"
            },
            {
              "n": "F · FA",
              "label": "Fin de course ouverture",
              "desc": "Contact NF",
              "t": "nf"
            },
            {
              "n": "F · FC",
              "label": "Fin de course fermeture",
              "desc": "Contact NF",
              "t": "nf"
            }
          ]
        },
        {
          "nom": "Sorties",
          "bornes": [
            {
              "n": "10 · E",
              "label": "Clignotant / lampe cycle",
              "desc": "24 V AC/DC, 25 W max (fonction F 18)",
              "t": "sortie"
            },
            {
              "n": "10 · 5",
              "label": "Voyant portail ouvert",
              "desc": "24 V, 3 W max (fonction F 10) ; 24 V AC/DC en français et en italien, 24 V AC en anglais",
              "t": "sortie"
            },
            {
              "n": "A · B",
              "label": "Sélecteur à clavier",
              "desc": "Sortie pour clavier à code",
              "t": "bus"
            },
            {
              "n": "S1 · GND",
              "label": "Transpondeur / lecteur",
              "desc": "Sortie pour transpondeur ou lecteur de cartes",
              "t": "bus"
            },
            {
              "n": "A · B · GND",
              "label": "Série RS485",
              "desc": "Carte RSE pour la domotique via CRP",
              "t": "bus"
            }
          ]
        },
        {
          "nom": "Commandes",
          "bornes": [
            {
              "n": "1 · 2",
              "label": "STOP",
              "desc": "Bouton d'arrêt, contact NF (F 1)",
              "t": "nf"
            },
            {
              "n": "2 · 3P",
              "label": "Ouverture / partielle",
              "desc": "Ouverture ou ouverture partielle, contact NO (F 8)",
              "t": "no"
            },
            {
              "n": "2 · 4",
              "label": "Ferme seulement",
              "desc": "Contact NO",
              "t": "no"
            },
            {
              "n": "2 · 7",
              "label": "Commande programmable",
              "desc": "Contact NO (F 7)",
              "t": "no"
            }
          ]
        },
        {
          "nom": "Sécurités",
          "bornes": [
            {
              "n": "2 · CX",
              "label": "Photocellules CX",
              "desc": "Contact NF, programmable (F 2)",
              "t": "nf"
            },
            {
              "n": "2 · CY",
              "label": "Photocellules CY",
              "desc": "Contact NF, programmable (F 3)",
              "t": "nf"
            }
          ]
        }
      ],
      "fusibles": "Non indiqués sur la fiche de rechange.",
      "notes": [
        "Entrées RIO-EDGE [T1] [T2] et RIO-CELL [T1] [T2] : fonctions F 65 à F 68 (accessoires sans fil).",
        "Antenne : câble RG58.",
        "Avant toute intervention, et avant d'insérer une carte à enfichage (AF, R700, etc.) : couper la tension de ligne et débrancher les batteries éventuelles."
      ]
    },
    "parametres": {
      "intro": "Menu de fonctions F, U, A, H. La fiche de rechange donne les valeurs possibles, pas les valeurs d'usine ni la façon de naviguer (voir le manuel de l'armoire sur docs.came.com).",
      "navigation": [
        "Les fonctions sont repérées F + numéro (F 1…F 71), U + numéro (utilisateurs), A + numéro (moteur, apprentissage, compteur), H 1 (version).",
        "La fiche ne décrit pas les touches de navigation : voir le manuel de l'armoire.",
        "Valeur d'usine non indiquée sur la fiche (colonne « usine » : —)."
      ],
      "groupes": [
        {
          "nom": "Commandes et sécurités",
          "items": [
            {
              "code": "F 1",
              "def": "—",
              "titre": "Arrêt total (1-2)",
              "valeurs": [
                [
                  "0",
                  "Désactivée"
                ],
                [
                  "1",
                  "Activée"
                ]
              ]
            },
            {
              "code": "F 2",
              "def": "—",
              "titre": "Fonction de l'entrée 2-CX",
              "valeurs": [
                [
                  "0",
                  "Désactivée"
                ],
                [
                  "1",
                  "Réouverture pendant la fermeture (photocellules)"
                ],
                [
                  "2",
                  "Refermeture pendant l'ouverture (photocellules)"
                ],
                [
                  "3",
                  "Arrêt partiel"
                ],
                [
                  "4",
                  "Attente obstacle"
                ],
                [
                  "7",
                  "Réouverture pendant la fermeture (bords sensibles)"
                ],
                [
                  "8",
                  "Refermeture pendant l'ouverture (bords sensibles)"
                ]
              ]
            },
            {
              "code": "F 3",
              "def": "—",
              "titre": "Fonction de l'entrée 2-CY",
              "valeurs": [
                [
                  "0",
                  "Désactivée"
                ],
                [
                  "1",
                  "Réouverture pendant la fermeture (photocellules)"
                ],
                [
                  "2",
                  "Refermeture pendant l'ouverture (photocellules)"
                ],
                [
                  "3",
                  "Arrêt partiel"
                ],
                [
                  "4",
                  "Attente obstacle"
                ],
                [
                  "7",
                  "Réouverture pendant la fermeture (bords sensibles)"
                ],
                [
                  "8",
                  "Refermeture pendant l'ouverture (bords sensibles)"
                ]
              ],
              "note": "Mêmes valeurs que F 2 (le texte de la fiche est identique)."
            },
            {
              "code": "F 5",
              "def": "—",
              "titre": "Test de sécurité",
              "valeurs": [
                [
                  "0",
                  "Désactivé"
                ],
                [
                  "1",
                  "CX"
                ],
                [
                  "2",
                  "CY"
                ],
                [
                  "4",
                  "CX+CY"
                ]
              ]
            },
            {
              "code": "F 6",
              "def": "—",
              "titre": "Action maintenue",
              "valeurs": [
                [
                  "0",
                  "Désactivée"
                ],
                [
                  "1",
                  "Activée"
                ]
              ]
            },
            {
              "code": "F 7",
              "def": "—",
              "titre": "Mode de la commande 2-7",
              "valeurs": [
                [
                  "0",
                  "Pas à pas"
                ],
                [
                  "1",
                  "Séquentielle"
                ]
              ]
            },
            {
              "code": "F 8",
              "def": "—",
              "titre": "Mode de la commande 2-3P",
              "valeurs": [
                [
                  "0",
                  "Ouverture"
                ],
                [
                  "1",
                  "Ouverture partielle"
                ]
              ]
            },
            {
              "code": "F 9",
              "def": "—",
              "titre": "Détection d'obstacle avant le démarrage",
              "valeurs": [
                [
                  "0",
                  "Désactivée"
                ],
                [
                  "1",
                  "Activée"
                ]
              ]
            },
            {
              "code": "F 65",
              "def": "—",
              "titre": "Entrée RIO-EDGE [T1]",
              "valeurs": [
                [
                  "0",
                  "Désactivée"
                ],
                [
                  "7",
                  "Réouverture pendant la fermeture"
                ],
                [
                  "8",
                  "Refermeture pendant l'ouverture"
                ]
              ]
            },
            {
              "code": "F 66",
              "def": "—",
              "titre": "Entrée RIO-EDGE [T2]",
              "valeurs": [
                [
                  "0",
                  "Désactivée"
                ],
                [
                  "7",
                  "Réouverture pendant la fermeture"
                ],
                [
                  "8",
                  "Refermeture pendant l'ouverture"
                ]
              ]
            },
            {
              "code": "F 67",
              "def": "—",
              "titre": "Entrée RIO-CELL [T1]",
              "valeurs": [
                [
                  "0",
                  "Désactivée"
                ],
                [
                  "7",
                  "Réouverture pendant la fermeture"
                ],
                [
                  "8",
                  "Refermeture pendant l'ouverture"
                ]
              ]
            },
            {
              "code": "F 68",
              "def": "—",
              "titre": "Entrée RIO-CELL [T2]",
              "valeurs": [
                [
                  "0",
                  "Désactivée"
                ],
                [
                  "7",
                  "Réouverture pendant la fermeture"
                ],
                [
                  "8",
                  "Refermeture pendant l'ouverture"
                ]
              ]
            }
          ]
        },
        {
          "nom": "Sorties et mouvement",
          "items": [
            {
              "code": "F 10",
              "def": "—",
              "titre": "Sortie voyant portail ouvert (10-5)",
              "valeurs": [
                [
                  "0",
                  "Allumé quand le portail est ouvert ou en mouvement"
                ],
                [
                  "1",
                  "Clignote toutes les 0,5 s à l'ouverture, toutes les 1 s à la fermeture, fixe portail ouvert, éteint portail fermé"
                ]
              ]
            },
            {
              "code": "F 11",
              "def": "—",
              "titre": "Encodeur",
              "valeurs": [
                [
                  "0",
                  "Activé"
                ],
                [
                  "1",
                  "Désactivé"
                ]
              ]
            },
            {
              "code": "F 12",
              "def": "—",
              "titre": "Départ ralenti",
              "valeurs": [
                [
                  "0",
                  "Désactivée"
                ],
                [
                  "1",
                  "Activée"
                ]
              ]
            },
            {
              "code": "F 14",
              "def": "—",
              "titre": "Type de capteur",
              "valeurs": [
                [
                  "0",
                  "Commande par transpondeur ou lecteur de cartes"
                ],
                [
                  "1",
                  "Commande par clavier à code"
                ]
              ]
            },
            {
              "code": "F 18",
              "def": "—",
              "titre": "Lampe supplémentaire (10-E)",
              "valeurs": [
                [
                  "0",
                  "Clignotant"
                ],
                [
                  "1",
                  "Cycle"
                ]
              ]
            },
            {
              "code": "F 54",
              "def": "—",
              "titre": "Sens d'ouverture",
              "valeurs": [
                [
                  "0",
                  "Ouverture vers la gauche"
                ],
                [
                  "1",
                  "Ouverture vers la droite"
                ]
              ]
            }
          ]
        },
        {
          "nom": "Temps et vitesses",
          "items": [
            {
              "code": "F 19",
              "def": "—",
              "titre": "Temps de fermeture automatique",
              "valeurs": [
                [
                  "0",
                  "Désactivé"
                ],
                [
                  "1 > 180 s",
                  "Pause avant refermeture"
                ]
              ]
            },
            {
              "code": "F 20",
              "def": "—",
              "titre": "Fermeture automatique après ouverture partielle",
              "valeurs": [
                [
                  "0",
                  "Désactivé"
                ],
                [
                  "1 > 180 s",
                  "Pause avant refermeture"
                ]
              ]
            },
            {
              "code": "F 21",
              "def": "—",
              "titre": "Temps de préclignotement",
              "valeurs": [
                [
                  "0",
                  "Désactivé"
                ],
                [
                  "1 > 10 s",
                  "Durée"
                ]
              ]
            },
            {
              "code": "F 28",
              "def": "—",
              "titre": "Vitesse de course",
              "valeurs": [
                [
                  "60 > 100",
                  "60 = vitesse minimale, 100 = maximale"
                ]
              ]
            },
            {
              "code": "F 30",
              "def": "—",
              "titre": "Vitesse de ralentissement",
              "valeurs": [
                [
                  "10 > 50",
                  "10 = vitesse minimale, 50 = maximale"
                ]
              ]
            },
            {
              "code": "F 34",
              "def": "—",
              "titre": "Sensibilité pendant la course",
              "valeurs": [
                [
                  "10 > 100",
                  "10 = sensibilité maximale, 100 = minimale"
                ]
              ]
            },
            {
              "code": "F 35",
              "def": "—",
              "titre": "Sensibilité pendant le ralentissement",
              "valeurs": [
                [
                  "10 > 100",
                  "10 = sensibilité maximale, 100 = minimale"
                ]
              ]
            },
            {
              "code": "F 36",
              "def": "—",
              "titre": "Ouverture partielle",
              "valeurs": [
                [
                  "10 > 80",
                  "% de la course (10 % à 80 %)"
                ]
              ]
            },
            {
              "code": "F 37",
              "def": "—",
              "titre": "Début de ralentissement à l'ouverture",
              "valeurs": [
                [
                  "10 > 60",
                  "% de la course"
                ]
              ]
            },
            {
              "code": "F 38",
              "def": "—",
              "titre": "Début de ralentissement à la fermeture",
              "valeurs": [
                [
                  "10 > 60",
                  "% de la course"
                ]
              ]
            },
            {
              "code": "F 71",
              "def": "—",
              "titre": "Temps d'ouverture partielle",
              "valeurs": [
                [
                  "5 > 40 s",
                  "Durée"
                ]
              ]
            }
          ]
        },
        {
          "nom": "Liaison série et mémoire",
          "items": [
            {
              "code": "F 49",
              "def": "—",
              "titre": "Gestion de la liaison série",
              "valeurs": [
                [
                  "0",
                  "Désactivée"
                ],
                [
                  "1",
                  "Vis-à-vis (2 cartes couplées)"
                ],
                [
                  "3",
                  "CRP"
                ]
              ]
            },
            {
              "code": "F 50",
              "def": "—",
              "titre": "Sauvegarde des données dans la mémoire",
              "valeurs": [
                [
                  "0",
                  "Désactivée"
                ],
                [
                  "1",
                  "Activée"
                ]
              ]
            },
            {
              "code": "F 51",
              "def": "—",
              "titre": "Lecture des données de la mémoire",
              "valeurs": [
                [
                  "0",
                  "Désactivée"
                ],
                [
                  "1",
                  "Activée"
                ]
              ]
            },
            {
              "code": "F 52",
              "def": "—",
              "titre": "Passage des paramètres en vis-à-vis (Master vers Slave)",
              "valeurs": [
                [
                  "0",
                  "Désactivée"
                ],
                [
                  "1",
                  "Activée"
                ]
              ]
            },
            {
              "code": "F 56",
              "def": "—",
              "titre": "Numéro de périphérique",
              "valeurs": [
                [
                  "1 > 255",
                  "Adresse"
                ]
              ]
            },
            {
              "code": "F 63",
              "def": "—",
              "titre": "Vitesse COM",
              "valeurs": [
                [
                  "0",
                  "1200 bauds"
                ],
                [
                  "1",
                  "2400"
                ],
                [
                  "2",
                  "4800"
                ],
                [
                  "3",
                  "9600"
                ],
                [
                  "4",
                  "14400"
                ],
                [
                  "5",
                  "19200"
                ],
                [
                  "6",
                  "38400"
                ],
                [
                  "7",
                  "57600"
                ],
                [
                  "8",
                  "115200"
                ]
              ]
            }
          ]
        },
        {
          "nom": "Utilisateurs et moteur",
          "items": [
            {
              "code": "U 1",
              "def": "—",
              "titre": "Nouvel utilisateur avec commande associée",
              "valeurs": [
                [
                  "1",
                  "Pas à pas (ouvre-ferme)"
                ],
                [
                  "2",
                  "Séquentielle (ouvre-stop-ferme-stop)"
                ],
                [
                  "3",
                  "Ouvre seulement"
                ],
                [
                  "4",
                  "Partielle"
                ]
              ]
            },
            {
              "code": "U 2",
              "def": "—",
              "titre": "Supprimer un utilisateur",
              "valeurs": [
                [
                  "—",
                  "Suppression d'un seul utilisateur"
                ]
              ]
            },
            {
              "code": "U 3",
              "def": "—",
              "titre": "Supprimer tous les utilisateurs",
              "valeurs": [
                [
                  "0",
                  "Désactivée"
                ],
                [
                  "1",
                  "Activée"
                ]
              ]
            },
            {
              "code": "A 1",
              "def": "—",
              "titre": "Type de moteur",
              "valeurs": [
                [
                  "1",
                  "400 kg"
                ],
                [
                  "2",
                  "600 kg"
                ],
                [
                  "3",
                  "800 kg"
                ],
                [
                  "4",
                  "1000 kg"
                ]
              ]
            },
            {
              "code": "A 3",
              "def": "—",
              "titre": "Apprentissage de la course (étalonnage)",
              "valeurs": [
                [
                  "0",
                  "Désactivée"
                ],
                [
                  "1",
                  "Activée"
                ]
              ]
            },
            {
              "code": "A 4",
              "def": "—",
              "titre": "Remise à zéro des paramètres",
              "valeurs": [
                [
                  "0",
                  "Désactivée"
                ],
                [
                  "1",
                  "Activée"
                ]
              ]
            },
            {
              "code": "A 5",
              "def": "—",
              "titre": "Compteur de manœuvres",
              "valeurs": [
                [
                  "0",
                  "Affiche le nombre de manœuvres"
                ],
                [
                  "1",
                  "Efface le compteur"
                ]
              ]
            },
            {
              "code": "H 1",
              "def": "—",
              "titre": "Version du logiciel",
              "valeurs": [
                [
                  "—",
                  "Affichage seul"
                ]
              ]
            }
          ]
        }
      ]
    },
    "apprentissage": {
      "avant": [
        "Couper la tension de ligne et débrancher les batteries avant d'insérer une carte à enfichage (AF, R700, etc.).",
        "Choisir le type de moteur (A 1 : 400, 600, 800 ou 1000 kg) et le sens d'ouverture (F 54).",
        "Vérifier le câblage des fins de course (FA, FC, contact NF) et de l'encodeur."
      ],
      "etapes": [
        "A 3 : étalonnage de la course (0 = désactivé, 1 = activé). La fiche ne décrit pas le déroulement.",
        "Vitesses : F 28 (course) et F 30 (ralentissement) ; sensibilités : F 34 et F 35 ; débuts de ralentissement : F 37 et F 38 ; ouverture partielle : F 36 (en %) et F 71 (en temps)."
      ],
      "apres": [
        "La fiche de rechange ne décrit pas le déroulement de l'étalonnage : voir le manuel de l'armoire (docs.came.com).",
        "Mémoriser les émetteurs avec U 1 (choix de la commande associée).",
        "A 4 remet les paramètres à zéro : à n'utiliser qu'en dernier recours."
      ]
    }
  },
  {
    "id": "came-zbx6",
    "nom": "ZBX6",
    "modeles": "Rechange 3199ZBX6 — moteur 230 V AC avec fins de course (type d'automatisme non précisé sur la fiche, classée en coulissant)",
    "type": "Coulissant 230 V — 2 dip-switch, 1 trimmer",
    "source": "Notice Came FA00042M4A (05/2015, fiche de rechange)",
    "codes": [
      {
        "code": "Sans STOP",
        "type": "symptome",
        "titre": "Le portail ne bouge pas, aucun bouton STOP raccordé",
        "action": "Si le bouton STOP n'est pas utilisé, 1-2 doit être ponté (contact NF). Sans pont, la carte reste à l'arrêt."
      },
      {
        "code": "Sans photocellule",
        "type": "symptome",
        "titre": "Le portail ne bouge pas, pas de photocellule sur 2-C1",
        "action": "Si les photocellules en réouverture ne sont pas utilisées, 2-C1 doit être ponté (contact NF)."
      },
      {
        "code": "Radio",
        "type": "symptome",
        "titre": "L'émetteur n'est pas reconnu après avoir enfiché la carte AF",
        "action": "La carte mère ne reconnaît la carte AF qu'à la remise sous tension : couper, enficher, remettre sous tension, puis mémoriser."
      }
    ],
    "bornier": {
      "groupes": [
        {
          "nom": "Alimentation et sorties",
          "bornes": [
            {
              "n": "L1 · L2",
              "label": "Secteur",
              "desc": "230 V AC",
              "t": "alim"
            },
            {
              "n": "10 · 11",
              "label": "24 V accessoires",
              "desc": "Sortie 24 V AC, 20 W max",
              "t": "alim"
            },
            {
              "n": "W · E1",
              "label": "Clignotant",
              "desc": "230 V AC, 25 W max",
              "t": "sortie"
            },
            {
              "n": "11 · FC",
              "label": "Voyant portail ouvert",
              "desc": "24 V AC, 3 W max",
              "t": "sortie"
            },
            {
              "n": "11 · FA",
              "label": "Voyant portail fermé",
              "desc": "24 V AC, 3 W max",
              "t": "sortie"
            }
          ]
        },
        {
          "nom": "Moteur et fins de course",
          "bornes": [
            {
              "n": "U · W · V",
              "label": "Moteur",
              "desc": "230 V AC",
              "t": "moteur"
            },
            {
              "n": "F · FA",
              "label": "Fin de course ouverture",
              "desc": "Contact NF",
              "t": "nf"
            },
            {
              "n": "F · FC",
              "label": "Fin de course fermeture",
              "desc": "Contact NF",
              "t": "nf"
            }
          ]
        },
        {
          "nom": "Commandes et sécurités",
          "bornes": [
            {
              "n": "1 · 2",
              "label": "STOP",
              "desc": "Bouton d'arrêt, contact NF. Si inutilisé : ponter 1-2",
              "t": "nf"
            },
            {
              "n": "2 · 7",
              "label": "Ouvre-ferme-inversion",
              "desc": "Commande pas à pas, contact NO",
              "t": "no"
            },
            {
              "n": "2 · C1",
              "label": "Photocellules",
              "desc": "Réouverture pendant la fermeture, contact NF. Si inutilisé : ponter 2-C1",
              "t": "nf"
            }
          ]
        }
      ],
      "fusibles": "Non indiqués sur la fiche de rechange.",
      "notes": [
        "Limiteur de couple : déplacer la cosse (faston) sur l'une des 4 positions, de 1 (min.) à 4 (max.).",
        "Carte radio AF : l'enficher uniquement hors tension (batteries débranchées) ; la carte mère ne la reconnaît qu'à la remise sous tension.",
        "Avant toute intervention, et avant d'insérer une carte à enfichage (AF, R700, etc.) : couper la tension de ligne et débrancher les batteries éventuelles."
      ]
    },
    "parametres": {
      "intro": "Carte très simple : 2 dip-switch et 1 trimmer. Valeur d'usine non indiquée sur la fiche.",
      "navigation": [
        "Le trimmer porte le nom TFA dans le texte français (TCA en italien, ACT en anglais)."
      ],
      "groupes": [
        {
          "nom": "Dip-switch",
          "items": [
            {
              "code": "DIP 1",
              "def": "—",
              "titre": "Action maintenue",
              "valeurs": [
                [
                  "OFF",
                  "Désactivée (fonctionnement normal)"
                ],
                [
                  "ON",
                  "Activée : le portail bouge tant qu'on appuie ; exclut le fonctionnement de l'émetteur"
                ]
              ]
            },
            {
              "code": "DIP 2",
              "def": "—",
              "titre": "Fermeture automatique",
              "valeurs": [
                [
                  "ON",
                  "Activée. Le temps d'attente avant la fermeture est réglable ; la fonction s'annule après un STOP total ou une coupure de courant"
                ],
                [
                  "OFF",
                  "Désactivée"
                ]
              ]
            }
          ]
        },
        {
          "nom": "Trimmer",
          "items": [
            {
              "code": "TFA / TCA",
              "def": "—",
              "titre": "Temps d'attente avant la fermeture automatique",
              "valeurs": [
                [
                  "1 > 120 s",
                  "Temps d'attente en position ouverte"
                ]
              ]
            }
          ]
        }
      ]
    },
    "apprentissage": {
      "avant": [
        "Couper la tension de ligne et débrancher les batteries éventuelles avant d'enficher la carte AF.",
        "Brancher le câble d'antenne TOP-RG58."
      ],
      "etapes": [
        "Enficher la carte AF sur la carte électronique, puis remettre sous tension (la carte mère ne la reconnaît qu'à ce moment).",
        "Maintenir la touche PROG ou CH1 appuyée sur la carte : le voyant clignote.",
        "Appuyer sur une touche de l'émetteur pour envoyer le code : le voyant change d'état pour signaler la mémorisation."
      ],
      "apres": [
        "La fiche ne décrit aucune procédure de course : la carte fonctionne avec fins de course (F-FA, F-FC).",
        "Régler le couple avec la cosse (position 1 à 4) et le temps de fermeture automatique avec le trimmer TCA (1 à 120 s)."
      ]
    }
  },
  {
    "id": "came-zbx241",
    "nom": "ZBX241",
    "modeles": "Carte ZBX241 + carte batteries BN1 — moteur 24 V DC avec fins de course (type d'automatisme non précisé, classée en coulissant)",
    "type": "Coulissant 24 V — 9 dip-switch, 3 trimmers, batteries de secours",
    "source": "Notice Came 319LR17 (24 p., FR p. 9-12)",
    "codes": [
      {
        "code": "LED verte BN1",
        "type": "led",
        "titre": "LED verte de la carte BN1 éteinte",
        "action": "Tension de ligne absente (la LED verte indique la présence du secteur). Vérifier l'alimentation 230 V, le fusible de ligne 1 A, la liaison avec la ZBX241."
      },
      {
        "code": "LED rouge BN1",
        "type": "led",
        "titre": "LED rouge de la carte BN1 allumée",
        "action": "Le portail fonctionne sur les batteries d'urgence (12 V 1,2 Ah non fournies) : le secteur est coupé ou absent."
      },
      {
        "code": "Porte déblocage",
        "type": "symptome",
        "titre": "Le moteur ne tourne pas, porte de déblocage ouverte",
        "action": "L'ouverture de la porte de déblocage empêche le fonctionnement du moteur : la refermer."
      },
      {
        "code": "3 inversions",
        "type": "symptome",
        "titre": "Portail resté ouvert, fermeture automatique exclue",
        "action": "Après trois inversions consécutives dues à un obstacle, le portail reste ouvert et la fermeture automatique est exclue : refermer avec la radiocommande ou le bouton de fermeture après avoir levé l'obstacle."
      },
      {
        "code": "Photocellules",
        "type": "symptome",
        "titre": "Photocellules sans effet",
        "action": "Respecter la polarité des photocellules (DIR). Pour la réouverture pendant la fermeture, le dip 7 est sur OFF et le dispositif sur 2-C1 ; les dips 8 (STOP 1-2) et 9 (stop partiel 2-C3) fonctionnent de la même façon."
      }
    ],
    "bornier": {
      "groupes": [
        {
          "nom": "Alimentation",
          "bornes": [
            {
              "n": "L1 · L2",
              "label": "Secteur",
              "desc": "230 V AC (fusible de ligne 1 A)",
              "t": "alim"
            },
            {
              "n": "+10 · −11",
              "label": "24 V accessoires",
              "desc": "24 V, 40 W max (fusible 1,6 A)",
              "t": "alim"
            },
            {
              "n": "BATTERY",
              "label": "Batteries d'urgence",
              "desc": "Batteries d'urgence 12 V 1,2 Ah (non fournies) : à brancher sur la borne (+, −) de la ZBX241 avec les fils fournis ; câble-pontet entre les batteries",
              "t": "alim"
            }
          ]
        },
        {
          "nom": "Moteur et fins de course",
          "bornes": [
            {
              "n": "M · N",
              "label": "Moteur",
              "desc": "24 V DC (fusible moteur 10 A)",
              "t": "moteur"
            },
            {
              "n": "F · FA",
              "label": "Fin de course ouvre",
              "desc": "Contact NF",
              "t": "nf"
            },
            {
              "n": "F · FC",
              "label": "Fin de course ferme",
              "desc": "Contact NF",
              "t": "nf"
            }
          ]
        },
        {
          "nom": "Sorties",
          "bornes": [
            {
              "n": "11 · E",
              "label": "Sortie 24 V en mouvement",
              "desc": "Ex. clignotant 25 W",
              "t": "sortie"
            },
            {
              "n": "2 · FC",
              "label": "Voyant portail ouvert",
              "desc": "Lampe témoin 24 V, 3 W max",
              "t": "sortie"
            }
          ]
        },
        {
          "nom": "Commandes et sécurités",
          "bornes": [
            {
              "n": "1 · 2",
              "label": "STOP",
              "desc": "Bouton d'arrêt, NF (dip 8)",
              "t": "nf"
            },
            {
              "n": "2 · 3",
              "label": "Ouvre",
              "desc": "Bouton-poussoir, NO",
              "t": "no"
            },
            {
              "n": "2 · 3P",
              "label": "Ouverture partielle",
              "desc": "Bouton-poussoir, NO",
              "t": "no"
            },
            {
              "n": "2 · 7",
              "label": "Commande",
              "desc": "Contact NO (dips 2 et 3)",
              "t": "no"
            },
            {
              "n": "2 · C1",
              "label": "Réouverture pendant la fermeture",
              "desc": "Contact NF (dip 7)",
              "t": "nf"
            },
            {
              "n": "2 · C3",
              "label": "Stop partiel",
              "desc": "Contact NF (dip 9)",
              "t": "nf"
            }
          ]
        }
      ],
      "fusibles": "Ligne 1 A · Accessoires 1,6 A · Moteur 10 A · Centrale 630 mA",
      "notes": [
        "Montage à gauche (vu de l'intérieur) : groupe moteur / fins de course déjà branchés. Montage à droite : inverser FA-FC des fins de course et les phases M-N du moteur sur la plaque à bornes.",
        "Photocellules : respecter la polarité (DIR). branchement TX / RX selon le schéma de la notice (p. 10).",
        "Temps de fonctionnement fixe : 90 secondes.",
        "Sécurité intégrée sensible aux obstacles : en ouverture, le portail s'arrête et active la fermeture automatique ; en fermeture, il inverse jusqu'à l'ouverture complète, avec intervention de la fermeture automatique. Après trois inversions consécutives, le portail reste ouvert sans fermeture automatique.",
        "Photocellules : réouverture en fermeture ; stop partiel (arrêt puis fermeture automatique programmée) ; stop total (arrêt et exclusion de la fermeture automatique, il faut agir sur les boutons ou la radiocommande). Dip 6 : détection de présence, moteur en fin de course.",
        "Fermeture automatique : le temporisateur démarre en fin de course d'ouverture ; elle est exclue après un stop total, l'intervention des sécurités ou une coupure de courant. Antenne : câble RG58.",
        "Pour toute intervention à l'intérieur de l'appareillage : couper la tension de ligne et débrancher les batteries (si branchées).",
        "Cartes radio AF : AF130 (FM 26,995, émetteur TFM), AF150 (FM 30,900), AF26 (AM 26,995, TOP), AF30 (AM 30,900, TOP), AF43S / AF43SM (AM 433,92, TAM / TOP), AF43SR (ATOMO), AF40 (AM 40,685, TOUCH).",
        "Puissance totale des accessoires à 24 V : 40 W maximum."
      ]
    },
    "parametres": {
      "intro": "Sélection des fonctions par dip-switch (9 dips) et réglages par 3 trimmers : T.C.A., AP.PARZ. (ouverture partielle), SENS. (sensibilité ampèremétrique). Valeur d'usine non indiquée dans la notice.",
      "navigation": [
        "Les dip-switch sont repérés 1 à 9 (le 10 n'est pas utilisé).",
        "Carte radio AF43S : positionner le pontet selon la fréquence de l'émetteur (433,92 AM = séries TOP et TAM) avant de l'enficher."
      ],
      "groupes": [
        {
          "nom": "Dip-switch",
          "items": [
            {
              "code": "DIP 1",
              "def": "—",
              "titre": "Fermeture automatique",
              "valeurs": [
                [
                  "ON",
                  "Activée"
                ],
                [
                  "OFF",
                  "Désactivée"
                ]
              ]
            },
            {
              "code": "DIP 2",
              "def": "—",
              "titre": "Mode du bouton 2-7 et de la radio",
              "valeurs": [
                [
                  "ON",
                  "Ouvre-stop-ferme-stop"
                ],
                [
                  "OFF",
                  "Ouvre-ferme-inversion"
                ]
              ],
              "note": "Avec carte radio."
            },
            {
              "code": "DIP 3",
              "def": "—",
              "titre": "Ouverture seulement",
              "valeurs": [
                [
                  "ON",
                  "Commande bouton / radio : ouverture seulement"
                ]
              ]
            },
            {
              "code": "DIP 4",
              "def": "—",
              "titre": "Action maintenue",
              "valeurs": [
                [
                  "ON",
                  "Fonctionnement bouton-poussoir (action maintenue)"
                ]
              ]
            },
            {
              "code": "DIP 5",
              "def": "—",
              "titre": "Préclignotement",
              "valeurs": [
                [
                  "ON",
                  "Préclignotement à l'ouverture et à la fermeture"
                ]
              ]
            },
            {
              "code": "DIP 6",
              "def": "—",
              "titre": "Détection de présence (moteur en fin de course)",
              "valeurs": [
                [
                  "ON",
                  "Activée"
                ]
              ]
            },
            {
              "code": "DIP 7",
              "def": "—",
              "titre": "Réouverture pendant la fermeture",
              "valeurs": [
                [
                  "OFF",
                  "Activée : brancher le dispositif sur 2-C1"
                ],
                [
                  "ON",
                  "Désactivée (si 2-C1 non utilisé)"
                ]
              ]
            },
            {
              "code": "DIP 8",
              "def": "—",
              "titre": "Bouton STOP",
              "valeurs": [
                [
                  "OFF",
                  "Activé : brancher le dispositif sur 1-2"
                ],
                [
                  "ON",
                  "Désactivé (si 1-2 non utilisé)"
                ]
              ]
            },
            {
              "code": "DIP 9",
              "def": "—",
              "titre": "Arrêt partiel",
              "valeurs": [
                [
                  "OFF",
                  "Activé : brancher le dispositif sur 2-C3"
                ],
                [
                  "ON",
                  "Désactivé (si 2-C3 non utilisé)"
                ]
              ]
            }
          ]
        },
        {
          "nom": "Trimmers",
          "items": [
            {
              "code": "T.C.A.",
              "def": "—",
              "titre": "Temps de fermeture automatique",
              "valeurs": [
                [
                  "1 > 120 s",
                  "Pause avant la fermeture automatique"
                ]
              ]
            },
            {
              "code": "AP.PARZ.",
              "def": "—",
              "titre": "Ouverture partielle (piétons)",
              "valeurs": [
                [
                  "1 > 15 s",
                  "Durée de l'ouverture partielle"
                ]
              ]
            },
            {
              "code": "SENS.",
              "def": "—",
              "titre": "Sensibilité ampèremétrique",
              "valeurs": [
                [
                  "− … +",
                  "Réglage de la détection d'obstacle"
                ]
              ]
            }
          ]
        }
      ]
    },
    "apprentissage": {
      "avant": [
        "Couper la tension de ligne et débrancher les batteries avant d'enficher la carte radio AF.",
        "Lire les trois procédures (préparation de la carte radio, codage de l'émetteur, mémorisation du code) avant de monter les cartes.",
        "Pour l'AF43S : mettre le pontet dans la bonne position selon la fréquence."
      ],
      "etapes": [
        "Préparer la carte radio AF (par. 7.1) : pontet de l'AF43S pour les émetteurs 433,92 AM (TOP / TAM).",
        "Enficher la carte AF hors tension, remettre sous tension.",
        "Coder l'émetteur (par. 7.2) puis mémoriser le code sur la carte de commande (par. 7.3, touche de mémorisation des codes de la carte)."
      ],
      "apres": [
        "Les détails des paragraphes 7.2 et 7.3 (codage et mémorisation) ne figurent pas dans les pages françaises lues ici : voir la notice.",
        "LED de signalisation code radio : repère 10 sur la carte.",
        "Le temps de travail est fixe (90 s) : aucun apprentissage de course."
      ]
    }
  },
  {
    "id": "came-zl90",
    "nom": "ZL90",
    "modeles": "Moteurs 24 V DC à action retardée (M1 / M2 avec ENC) ; dip 7 : A1824 ou FROG J",
    "type": "Battant 24 V — 10 dip-switch, boutons SET UP / OPEN MOTOR",
    "source": "Notice Came 319LR07 v1.0 (11/2007), pages FR 15 à 20",
    "codes": [
      {
        "code": "PROG fixe",
        "type": "led",
        "titre": "LED PROG allumée fixe après le calibrage",
        "action": "Calibrage automatique correct (LED allumée quelques secondes, vantaux ouverts)."
      },
      {
        "code": "PROG clignote",
        "type": "led",
        "titre": "LED PROG clignote après le calibrage",
        "action": "Contrôler les connexions et répéter l'opération de calibrage."
      },
      {
        "code": "Vantail ferme",
        "type": "symptome",
        "titre": "Un vantail se ferme au lieu de s'ouvrir au contrôle du sens",
        "action": "Si les deux vantaux se ferment : inverser M et N sur les deux moteurs. Si seul le premier se ferme : inverser M1-N1. Si seul le second : inverser M2-N2."
      },
      {
        "code": "Un seul vantail",
        "type": "symptome",
        "titre": "Un seul moteur installé",
        "action": "Brancher le moteur sur les bornes M2-N2-ENC2."
      },
      {
        "code": "Dip 7",
        "type": "diag",
        "titre": "Choix de la gamme de moteurs",
        "action": "Le dip 7 doit correspondre au moteur installé : ON = A1824, OFF = FROG J (à contrôler avant le calibrage)."
      }
    ],
    "bornier": {
      "groupes": [
        {
          "nom": "Alimentation",
          "bornes": [
            {
              "n": "L · N",
              "label": "Secteur",
              "desc": "230 V AC 50/60 Hz",
              "t": "alim"
            },
            {
              "n": "10 · 11",
              "label": "24 V accessoires",
              "desc": "Alimentation des accessoires 24 V AC",
              "t": "alim"
            }
          ]
        },
        {
          "nom": "Moteurs",
          "bornes": [
            {
              "n": "M1 · N1 · ENC1",
              "label": "Moteur 1",
              "desc": "24 V DC, retard à l'ouverture",
              "t": "moteur"
            },
            {
              "n": "M2 · N2 · ENC2",
              "label": "Moteur 2",
              "desc": "24 V DC, retard à la fermeture",
              "t": "moteur"
            }
          ]
        },
        {
          "nom": "Sorties",
          "bornes": [
            {
              "n": "10 · E1",
              "label": "Clignotant",
              "desc": "24 V, 25 W max",
              "t": "sortie"
            },
            {
              "n": "10 · 5",
              "label": "Voyant portail ouvert",
              "desc": "24 V, 3 W max (ou électro-serrure 12 V 15 W max, voir notes)",
              "t": "sortie"
            },
            {
              "n": "B1 · B2",
              "label": "2e canal radio",
              "desc": "Contact NO, 5 A 24 V DC",
              "t": "sortie"
            }
          ]
        },
        {
          "nom": "Commandes",
          "bornes": [
            {
              "n": "1 · 2",
              "label": "STOP",
              "desc": "Bouton d'arrêt, contact NF",
              "t": "nf"
            },
            {
              "n": "2 · 3",
              "label": "Ouverture",
              "desc": "Sélecteur à clé et / ou bouton, NO",
              "t": "no"
            },
            {
              "n": "2 · 3P",
              "label": "Ouverture partielle",
              "desc": "Sélecteur à clé et / ou bouton, NO",
              "t": "no"
            },
            {
              "n": "2 · 4",
              "label": "Fermeture",
              "desc": "Sélecteur à clé et / ou bouton, NO",
              "t": "no"
            },
            {
              "n": "2 · 7",
              "label": "Commandes",
              "desc": "Sélecteur à clé et / ou bouton, NO",
              "t": "no"
            }
          ]
        },
        {
          "nom": "Sécurités",
          "bornes": [
            {
              "n": "2 · CX",
              "label": "Réouverture pendant la fermeture",
              "desc": "Contact NF",
              "t": "nf"
            },
            {
              "n": "2 · CY",
              "label": "Stop partiel / attente obstacle",
              "desc": "Contact NF (dips 1 et 2)",
              "t": "nf"
            }
          ]
        }
      ],
      "fusibles": "Non indiqués dans les pages françaises lues. La notice parle d'un fusible 3,15 A sur le 17 V du transformateur (schéma de la serrure).",
      "notes": [
        "Électro-serrure : ZL90 permet de brancher, à la place du voyant sur 10-5, une serrure 12 V (15 W max) et, si besoin, la fonction « coup de bélier ».",
        "Un seul vantail : brancher le moteur sur M2-N2-ENC2.",
        "Antenne : câble RG58 sur le bornier de l'antenne. Carte radio : enficher hors tension, la carte ne la reconnaît qu'alimentée.",
        "Mise en mémoire de l'émetteur : touche CH1 (commande du motoréducteur) ou CH2 (dispositif accessoire sur B1-B2) ; la LED clignote puis reste allumée."
      ]
    },
    "parametres": {
      "intro": "10 dip-switch (groupe E) + groupe F (dips 1 et 2) + 6 trimmers. Les dips 3 et 6 servent aussi, de façon indépendante, à mettre en service la serrure et le coup de bélier (voir procédure). Valeurs d'usine non indiquées dans les pages françaises.",
      "navigation": [
        "Les lettres F et E désignent les groupes de dip-switch sur les dessins de la notice : groupe F (dips 1 et 2 pour stop partiel / attente obstacle) et groupe E (dips 1 à 10).",
        "Le même numéro 1 ou 2 apparaît dans les deux groupes : bien identifier lequel on règle."
      ],
      "groupes": [
        {
          "nom": "Groupe F — obstacle",
          "items": [
            {
              "code": "F · DIP 1",
              "def": "—",
              "titre": "Attente obstacle / stop partiel (borne 2-CY)",
              "valeurs": [
                [
                  "OFF",
                  "Fonction autorisée : brancher le dispositif sur 2-CY"
                ],
                [
                  "ON",
                  "À mettre si le dispositif n'est pas utilisé"
                ]
              ]
            },
            {
              "code": "F · DIP 2",
              "def": "—",
              "titre": "Choix de la fonction (avec dip 1 sur OFF)",
              "valeurs": [
                [
                  "ON",
                  "Attente obstacle : arrêt en présence d'obstacle, reprise automatique dans le même sens à sa disparition"
                ],
                [
                  "OFF",
                  "Stop partiel : le portail reste arrêté ou se ferme à la disparition de l'obstacle si la fermeture automatique est active"
                ]
              ]
            }
          ]
        },
        {
          "nom": "Groupe E — dip-switch 1 à 10",
          "items": [
            {
              "code": "E · DIP 1",
              "def": "—",
              "titre": "Fermeture automatique",
              "valeurs": [
                [
                  "ON",
                  "Activée : temporisation en fin d'ouverture, annulée après un STOP total ou une coupure de courant"
                ]
              ]
            },
            {
              "code": "E · DIP 2",
              "def": "—",
              "titre": "Mode des commandes 2-7 et radio",
              "valeurs": [
                [
                  "ON",
                  "Ouvre-stop-ferme-stop"
                ],
                [
                  "OFF",
                  "Ouvre-ferme-inversion"
                ]
              ]
            },
            {
              "code": "E · DIP 3",
              "def": "—",
              "titre": "Radio : ouverture seulement",
              "valeurs": [
                [
                  "ON",
                  "Commande radio « ouverture seulement » (dip 3 aussi utilisé pour la serrure, voir notes)"
                ]
              ]
            },
            {
              "code": "E · DIP 4",
              "def": "—",
              "titre": "Préclignotement",
              "valeurs": [
                [
                  "ON",
                  "Le clignotant branché sur 10-E clignote 5 s avant d'ouvrir ou de fermer"
                ]
              ],
              "note": "La notice FR cite la borne 10-E ; le bornier cite 10-E1."
            },
            {
              "code": "E · DIP 5",
              "def": "—",
              "titre": "Détection de présence d'obstacle",
              "valeurs": [
                [
                  "ON",
                  "À l'arrêt (fermé, ouvert ou après STOP), toute manœuvre est empêchée si les sécurités détectent un obstacle"
                ]
              ]
            },
            {
              "code": "E · DIP 6",
              "def": "—",
              "titre": "Action maintenue",
              "valeurs": [
                [
                  "ON",
                  "Le portail bouge tant qu'on appuie : bouton 2-3 pour ouvrir, 2-4 pour fermer (dip 6 aussi utilisé pour la serrure)"
                ]
              ]
            },
            {
              "code": "E · DIP 7",
              "def": "—",
              "titre": "Gamme de moteurs",
              "valeurs": [
                [
                  "ON",
                  "A1824"
                ],
                [
                  "OFF",
                  "FROG J"
                ]
              ]
            },
            {
              "code": "E · DIP 8",
              "def": "—",
              "titre": "Test de sécurité des photocellules",
              "valeurs": [
                [
                  "ON",
                  "Contrôle de l'efficacité des photocellules après chaque commande d'ouverture ou de fermeture"
                ]
              ]
            },
            {
              "code": "E · DIP 9",
              "def": "—",
              "titre": "Stop total",
              "valeurs": [
                [
                  "OFF",
                  "Activé : dispositif de sécurité sur 1-2 (arrête et annule la fermeture automatique)"
                ],
                [
                  "ON",
                  "À mettre si 1-2 n'est pas utilisé"
                ]
              ]
            },
            {
              "code": "E · DIP 10",
              "def": "—",
              "titre": "Réouverture pendant la fermeture",
              "valeurs": [
                [
                  "OFF",
                  "Activée : photocellules sur 2-CX, inversion jusqu'à l'ouverture complète"
                ]
              ]
            }
          ]
        },
        {
          "nom": "Trimmers",
          "items": [
            {
              "code": "ACT",
              "def": "—",
              "titre": "Temps d'attente avant la fermeture automatique",
              "valeurs": [
                [
                  "1 > 150 s",
                  "Durée en position ouverte"
                ]
              ]
            },
            {
              "code": "DELAY 2M",
              "def": "—",
              "titre": "Retard du 2e moteur à la fermeture",
              "valeurs": [
                [
                  "1 > 16 s",
                  "Retard du vantail 2 à chaque fermeture"
                ]
              ]
            },
            {
              "code": "SENS RUN",
              "def": "—",
              "titre": "Sensibilité ampèremétrique en marche",
              "valeurs": [
                [
                  "− … +",
                  "Si la force dépasse le réglage, la marche s'inverse"
                ]
              ]
            },
            {
              "code": "SENS SLOWING",
              "def": "—",
              "titre": "Sensibilité ampèremétrique en ralentissement",
              "valeurs": [
                [
                  "− … +",
                  "Si la force dépasse le réglage, la marche s'inverse"
                ]
              ]
            },
            {
              "code": "SPEED RUN",
              "def": "—",
              "titre": "Vitesse de marche",
              "valeurs": [
                [
                  "− … +",
                  "Vitesse en ouverture et en fermeture"
                ]
              ]
            },
            {
              "code": "SPEED SLOWING",
              "def": "—",
              "titre": "Vitesse de ralentissement",
              "valeurs": [
                [
                  "− … +",
                  "Vitesse en fin de course"
                ]
              ]
            }
          ]
        }
      ]
    },
    "apprentissage": {
      "avant": [
        "Un seul vantail : brancher le moteur sur M2-N2-ENC2.",
        "Choisir le dip 7 selon le moteur : ON = A1824, OFF = FROG J.",
        "Contrôle du sens : appuyer brièvement sur OPEN MOTOR, les deux vantaux doivent s'ouvrir. Sinon inverser M-N (les deux moteurs), ou M1-N1 (premier vantail), ou M2-N2 (second vantail)."
      ],
      "etapes": [
        "Débloquer les deux motoréducteurs, placer les vantaux à mi-course, rebloquer.",
        "Placer les vantaux à peu près à mi-course avec la touche OPEN MOTOR.",
        "Appuyer environ 3 s sur la touche SET UP.",
        "Le second vantail fait une fermeture puis une ouverture, puis le premier fait la même manœuvre.",
        "Vantaux ouverts, la LED PROG reste allumée quelques secondes : calibrage correct. Si elle clignote, contrôler les connexions et recommencer."
      ],
      "apres": [
        "Électro-serrure 12 V (au lieu du voyant sur 10-5) : dip 6 ON (et dip 3 OFF), appuyer sur CH1 : la LED PROG clignote puis reste allumée (environ 5 s) ; remettre les dips en position. Pour revenir à la sélection d'usine (voyant sur 10-5), même procédure avec CH2.",
        "Coup de bélier : dips 3 et 6 sur ON puis même procédure ; CH2 pour l'exclure. À chaque ouverture, les vantaux appuient une seconde sur la butée de fermeture pour libérer la serrure.",
        "Mémoriser un émetteur : touche CH1, la LED clignote, appuyer sur la touche de l'émetteur, la LED reste allumée. CH2 pour le canal accessoire (B1-B2)."
      ]
    }
  },
  {
    "id": "came-zl92",
    "nom": "ZL92",
    "modeles": "Moteurs 24 V DC STYLO ME · STYLO RME · AMICO · FROG J · MYTO ME (avec encodeur)",
    "type": "Battant 24 V — menu à fonctions F, encodeur",
    "source": "Notice Came 319LR36 v2.0 (03/2012), pages FR 11 à 14",
    "codes": [
      {
        "code": "F 5",
        "type": "test",
        "titre": "Test de sécurité des photocellules",
        "action": "À chaque ordre d'ouverture ou de fermeture, la carte contrôle les photocellules ; une anomalie est signalée sur la carte et annule toute commande de l'émetteur ou du bouton. La fonction F 5 choisit les entrées où le test est actif. Émetteur et récepteur à raccorder comme sur le dessin."
      },
      {
        "code": "F 51",
        "type": "diag",
        "titre": "Lecture des données (Memory Roll)",
        "action": "F 51 charge les données de la Memory Roll dans la carte mère (0 = désactivée, 1 = activée). La fonction n'apparaît que si la Memory Roll est insérée. Sert à restaurer les configurations précédentes."
      }
    ],
    "bornier": {
      "groupes": [
        {
          "nom": "Alimentation",
          "bornes": [
            {
              "n": "L · N",
              "label": "Secteur",
              "desc": "230 V AC 50/60 Hz",
              "t": "alim"
            },
            {
              "n": "10 · 11",
              "label": "24 V accessoires",
              "desc": "24 V DC",
              "t": "alim"
            }
          ]
        },
        {
          "nom": "Moteurs",
          "bornes": [
            {
              "n": "M1 · N1 · ENC1 · EB1",
              "label": "Moteur 1 STYLO ME",
              "desc": "24 V DC, retard à l'ouverture",
              "t": "moteur"
            },
            {
              "n": "M2 · N2 · ENC2 · EB2",
              "label": "Moteur 2 STYLO ME",
              "desc": "24 V DC, retard à la fermeture",
              "t": "moteur"
            },
            {
              "n": "M1 · N1 · ENC1",
              "label": "Moteur 1 (AMICO, FROG J, MYTO ME, STYLO RME)",
              "desc": "24 V DC, retard à l'ouverture",
              "t": "moteur"
            },
            {
              "n": "M2 · N2 · ENC2",
              "label": "Moteur 2 (mêmes gammes)",
              "desc": "24 V DC, retard à la fermeture",
              "t": "moteur"
            }
          ]
        },
        {
          "nom": "Sorties",
          "bornes": [
            {
              "n": "10 · E",
              "label": "Lampe cycle / clignotant",
              "desc": "24 V, 25 W max",
              "t": "sortie"
            },
            {
              "n": "10 · 5",
              "label": "Voyant portail ouvert",
              "desc": "24 V, 3 W max",
              "t": "sortie"
            },
            {
              "n": "EB2 · V2",
              "label": "Électro-serrure",
              "desc": "12 V, 15 W max",
              "t": "sortie"
            },
            {
              "n": "B1 · B2",
              "label": "2e canal radio",
              "desc": "Contact NO, 500 mA 24 V DC",
              "t": "sortie"
            }
          ]
        },
        {
          "nom": "Commandes",
          "bornes": [
            {
              "n": "1 · 2",
              "label": "STOP",
              "desc": "Bouton d'arrêt, NF",
              "t": "nf"
            },
            {
              "n": "2 · 3",
              "label": "Ouverture",
              "desc": "Bouton NO",
              "t": "no"
            },
            {
              "n": "2 · 4",
              "label": "Fermeture",
              "desc": "Bouton NO",
              "t": "no"
            },
            {
              "n": "2 · 3P",
              "label": "Ouverture partielle",
              "desc": "Sélecteur à clé et / ou bouton, NO",
              "t": "no"
            },
            {
              "n": "2 · 7",
              "label": "Commande",
              "desc": "Sélecteur à clé et / ou bouton, NO",
              "t": "no"
            }
          ]
        },
        {
          "nom": "Sécurités et accessoires",
          "bornes": [
            {
              "n": "2 · CX · CY · CZ",
              "label": "Sécurités",
              "desc": "Contact NF : réouverture pendant la fermeture, refermeture pendant l'ouverture, stop partiel ou attente obstacle",
              "t": "nf"
            },
            {
              "n": "TS",
              "label": "Test photocellules",
              "desc": "Raccordement de l'émetteur des photocellules pour le test de sécurité (voir dessin)",
              "t": "sortie"
            },
            {
              "n": "A · B · S1 · GND",
              "label": "Capteurs",
              "desc": "Raccordement TSP00 (transpondeur), LT001 (lecteur de cartes), S7000 (clavier à code), décodage R700 / R800",
              "t": "bus"
            }
          ]
        }
      ],
      "fusibles": "Non indiqués dans les pages françaises lues.",
      "notes": [
        "Photocellules DIR / DELTA S (émetteur) et DOC / DELTA (récepteur) : le test de sécurité exige le raccordement TS comme sur le dessin et la sélection de F 5.",
        "Le menu de fonctions détaillé (F 1…) n'est pas repris dans les pages françaises de la notice : voir le manuel de l'armoire."
      ]
    },
    "parametres": {
      "intro": "Les pages françaises de cette notice ne donnent que deux fonctions du menu : F 5 (test de sécurité) et F 51 (lecture de la Memory Roll). Le reste du menu est dans le manuel de l'armoire.",
      "navigation": [
        "Navigation : voir le manuel de l'armoire (les pages françaises montrent seulement ENTER / ESC sur le dessin de F 51).",
        "Valeur d'usine non indiquée."
      ],
      "groupes": [
        {
          "nom": "Fonctions citées dans la notice",
          "items": [
            {
              "code": "F 5",
              "def": "—",
              "titre": "Entrées où le test de sécurité est actif",
              "valeurs": [
                [
                  "—",
                  "Choisir sur quelles entrées le test est activé (le dessin de la notice ne montre que CX et CY)"
                ]
              ],
              "note": "La liste des valeurs de F 5 n'est pas donnée dans les pages françaises."
            },
            {
              "code": "F 51",
              "def": "—",
              "titre": "Lecture des données",
              "valeurs": [
                [
                  "0",
                  "Désactivée"
                ],
                [
                  "1",
                  "Activée : charge les données de la Memory Roll dans la carte"
                ]
              ],
              "note": "Visible seulement avec la Memory Roll insérée."
            }
          ]
        }
      ]
    },
    "apprentissage": {
      "avant": [
        "Restaurer des configurations : insérer la carte mémoire Memory Roll et lire les données (F 51).",
        "Si les configurations n'ont pas été sauvegardées sur la Memory Roll, les réafficher comme indiqué dans le manuel de l'armoire ; le service après-vente Came peut en fournir une copie."
      ],
      "etapes": [
        "Introduire la carte Memory Roll sur la carte mère.",
        "Aller sur F 51 (visible seulement avec la Memory Roll) : 1 = activée, charge les données dans la carte (lecture des données, comme sur le dessin de la notice)."
      ],
      "apres": [
        "L'apprentissage de la course n'est pas décrit dans les pages françaises de cette notice."
      ]
    }
  },
  {
    "id": "came-zbx10",
    "nom": "ZBX10",
    "modeles": "Coulissant 230 V — moteur 230 V AC avec encodeur et fins de course",
    "type": "Coulissant 230 V — menu à afficheur, encodeur",
    "source": "Notice Came 319LR21 (28 p., FR p. 11-13)",
    "codes": [
      {
        "code": "Test sécurité",
        "type": "test",
        "titre": "Test de contrôle de sécurité des photocellules",
        "action": "Émetteur et récepteur à connecter comme sur le dessin ; dans le menu FONCTIONS, choisir « test de sécurité » et l'entrée ou les entrées parmi CX-CY pour activer le test."
      },
      {
        "code": "Memory Roll",
        "type": "diag",
        "titre": "Chargement mémoire",
        "action": "Pour restaurer les configurations précédentes, introduire la Memory Roll et lancer « Charg.memoire » puis « Lecture » (charge dans la carte les données sauvegardées ; chemin dans l'onglet Apprentissage)."
      }
    ],
    "bornier": {
      "groupes": [
        {
          "nom": "Alimentation",
          "bornes": [
            {
              "n": "L · N",
              "label": "Secteur",
              "desc": "230 V AC 50/60 Hz",
              "t": "alim"
            },
            {
              "n": "10 · 11",
              "label": "24 V accessoires",
              "desc": "24 V AC",
              "t": "alim"
            }
          ]
        },
        {
          "nom": "Moteur, encodeur, fins de course",
          "bornes": [
            {
              "n": "U · V · W",
              "label": "Moteur",
              "desc": "Motoréducteur 230 V AC",
              "t": "moteur"
            },
            {
              "n": "+ · E · D",
              "label": "Encodeur",
              "desc": "E = noir, D = rouge",
              "t": "bus"
            },
            {
              "n": "F · FA",
              "label": "Fin de course ouverture",
              "desc": "Type de contact non précisé dans la notice",
              "t": "autre"
            },
            {
              "n": "F · FC",
              "label": "Fin de course fermeture",
              "desc": "Type de contact non précisé dans la notice",
              "t": "autre"
            }
          ]
        },
        {
          "nom": "Sorties",
          "bornes": [
            {
              "n": "W · E1",
              "label": "Clignotant",
              "desc": "230 V, 25 W max",
              "t": "sortie"
            },
            {
              "n": "EX · E1",
              "label": "Lampe cycle",
              "desc": "230 V, 60 W max",
              "t": "sortie"
            },
            {
              "n": "10 · 5",
              "label": "Voyant portail ouvert",
              "desc": "24 V, 3 W max",
              "t": "sortie"
            }
          ]
        },
        {
          "nom": "Commandes",
          "bornes": [
            {
              "n": "1 · 2",
              "label": "STOP",
              "desc": "Bouton d'arrêt, NF",
              "t": "nf"
            },
            {
              "n": "2 · 3",
              "label": "Ouverture",
              "desc": "Bouton NO",
              "t": "no"
            },
            {
              "n": "2 · 4",
              "label": "Fermeture",
              "desc": "Bouton NO",
              "t": "no"
            },
            {
              "n": "2 · 3P",
              "label": "Ouverture partielle",
              "desc": "Bouton NO",
              "t": "no"
            },
            {
              "n": "2 · 7",
              "label": "Commandes",
              "desc": "Sélecteur à clé et / ou bouton, NO",
              "t": "no"
            },
            {
              "n": "2 · A · B",
              "label": "Ad. Réseau",
              "desc": "Fonction configurée lors de la connexion de deux automatismes couplés",
              "t": "bus"
            }
          ]
        },
        {
          "nom": "Sécurités",
          "bornes": [
            {
              "n": "2 · CX · CY",
              "label": "Sécurités",
              "desc": "NF : réouverture pendant la fermeture, refermeture pendant l'ouverture, stop partiel ou attente obstacle",
              "t": "nf"
            },
            {
              "n": "2 · C7 · C8",
              "label": "Bords sensibles",
              "desc": "NF : mêmes fonctions pour les bords sensibles",
              "t": "nf"
            }
          ]
        }
      ],
      "fusibles": "Non indiqués dans les pages françaises lues.",
      "notes": [
        "Le menu de la carte contient : LANGUE, FONCTIONS, RÉGL. DURÉES, RADIO UTILISATEURS, ÉTALONNAGE, INFO (affichage « Francais »).",
        "Photocellules DIR / DOC : test de sécurité à raccorder comme sur le dessin de la notice."
      ]
    },
    "parametres": {
      "intro": "Le menu à afficheur n'est pas détaillé dans les pages françaises de cette notice (rubriques FONCTIONS, RÉGL. DURÉES, RADIO UTILISATEURS, ÉTALONNAGE, INFO). Voir le manuel de l'armoire.",
      "navigation": [
        "Rubriques du menu : LANGUE (Francais), FONCTIONS, RÉGL. DURÉES, RADIO UTILISATEURS, ÉTALONNAGE, INFO.",
        "Si les configurations n'ont pas été sauvegardées sur la Memory Roll, il faut tout réafficher comme indiqué dans le manuel de l'armoire ; le service après-vente peut en fournir une copie."
      ],
      "groupes": [
        {
          "nom": "Fonctions citées dans la notice",
          "items": [
            {
              "code": "Test de sécurité",
              "def": "—",
              "titre": "Test de contrôle de sécurité des photocellules",
              "valeurs": [
                [
                  "CX · CY",
                  "Choisir l'entrée ou les entrées où le test est actif"
                ]
              ]
            },
            {
              "code": "Charg.memoire",
              "def": "—",
              "titre": "Restauration depuis la Memory Roll",
              "valeurs": [
                [
                  "Lecture",
                  "Charge dans la carte les données sauvegardées (Memory Roll insérée)"
                ]
              ],
              "note": "Chemin d'après le schéma : ligne « RADIO UTILISA » du menu, ENTER, 4 fois « > », « Charg.memoire », ENTER, « Lecture »."
            }
          ]
        }
      ]
    },
    "apprentissage": {
      "avant": [
        "Câbler l'encodeur (E noir, D rouge) et les fins de course (F-FA, F-FC)."
      ],
      "etapes": [
        "Dans le menu, partir de la ligne « RADIO UTILISA », appuyer sur ENTER puis 4 fois sur « > » jusqu'à « Charg.memoire », ENTER, puis « Lecture » (schéma de la notice) : les données sauvegardées sont chargées dans la carte.",
        "Memory Roll insérée dans son connecteur avant la lecture."
      ],
      "apres": [
        "L'étalonnage de la course (rubrique ÉTALONNAGE du menu) n'est pas détaillé dans les pages françaises lues : voir le manuel de l'armoire."
      ]
    }
  },
  {
    "id": "came-za3",
    "nom": "ZA3",
    "modeles": "Carte ZA3 (319LR23) — battant 230 V, 2 motoréducteurs à action retardée (M1 / M2)",
    "type": "Battant 230 V — 10 dip-switch, 3 trimmers",
    "source": "Notice Came 319LR23 (28 p., FR p. 11-14)",
    "codes": [
      {
        "code": "LED mémo.",
        "type": "led",
        "titre": "LED de mémorisation clignote",
        "action": "En maintenant la touche CH1 : la carte attend le code de l'émetteur. La LED reste allumée quand la mémorisation est faite."
      },
      {
        "code": "Dips 8 / 9",
        "type": "diag",
        "titre": "Entrées 2-CX et 2-C1 non utilisées",
        "action": "Si le dispositif sur 2-CX n'est pas utilisé, placer le dip 8 sur ON. Si celui sur 2-C1 n'est pas utilisé, placer le dip 9 sur ON (contacts NF)."
      },
      {
        "code": "Serrure",
        "type": "symptome",
        "titre": "Électro-serrure qui ne se libère pas",
        "action": "Dip 7 sur ON : coup de bélier (les portes appuient une seconde sur la butée de fermeture avant l'ouverture), uniquement si les portes sont fermées et en fin de service, ou à la 1re manœuvre après la mise sous tension."
      }
    ],
    "bornier": {
      "groupes": [
        {
          "nom": "Alimentation",
          "bornes": [
            {
              "n": "L1 · L2",
              "label": "Secteur",
              "desc": "230 V AC 50/60 Hz",
              "t": "alim"
            },
            {
              "n": "10 · 11",
              "label": "24 V accessoires",
              "desc": "24 V AC",
              "t": "alim"
            }
          ]
        },
        {
          "nom": "Moteurs",
          "bornes": [
            {
              "n": "U · V · W",
              "label": "Moteur M1",
              "desc": "Retard à l'ouverture",
              "t": "moteur"
            },
            {
              "n": "X · Y · W",
              "label": "Moteur M2",
              "desc": "Retard à la fermeture",
              "t": "moteur"
            }
          ]
        },
        {
          "nom": "Sorties",
          "bornes": [
            {
              "n": "W · E",
              "label": "Clignotant",
              "desc": "230 V, 25 W max",
              "t": "sortie"
            },
            {
              "n": "E · E3",
              "label": "Lampe cycle",
              "desc": "230 V, 60 W max",
              "t": "sortie"
            },
            {
              "n": "10 · 5",
              "label": "Voyant portail ouvert",
              "desc": "24 V, 3 W max",
              "t": "sortie"
            },
            {
              "n": "11 · S",
              "label": "Électro-serrure",
              "desc": "12 V, 15 W max",
              "t": "sortie"
            },
            {
              "n": "B1 · B2",
              "label": "2e canal radio",
              "desc": "Contact NO, 5 A 24 V DC",
              "t": "sortie"
            }
          ]
        },
        {
          "nom": "Commandes",
          "bornes": [
            {
              "n": "1 · 2",
              "label": "STOP",
              "desc": "Bouton d'arrêt, NF",
              "t": "nf"
            },
            {
              "n": "2 · 3",
              "label": "Ouverture",
              "desc": "Sélecteur à clé et / ou bouton, NO",
              "t": "no"
            },
            {
              "n": "2 · 3P",
              "label": "Ouverture partielle",
              "desc": "Sélecteur à clé et / ou bouton, NO",
              "t": "no"
            },
            {
              "n": "2 · 4",
              "label": "Fermeture",
              "desc": "Sélecteur à clé et / ou bouton, NO",
              "t": "no"
            },
            {
              "n": "2 · 7",
              "label": "Commandes",
              "desc": "Sélecteur à clé et / ou bouton, NO",
              "t": "no"
            }
          ]
        },
        {
          "nom": "Sécurités",
          "bornes": [
            {
              "n": "2 · C1",
              "label": "Réouverture pendant la fermeture",
              "desc": "Contact NF (dip 9)",
              "t": "nf"
            },
            {
              "n": "2 · CX",
              "label": "Stop partiel ou refermeture",
              "desc": "Contact NF : stop partiel si dip 10 sur ON ; fermeture pendant l'ouverture si dip 10 sur OFF",
              "t": "nf"
            }
          ]
        }
      ],
      "fusibles": "Non indiqués dans les pages françaises lues.",
      "notes": [
        "Limiteur de couple moteur : déplacer le connecteur (faston) sur l'une des 4 positions, 1 = minimum, 4 = maximum.",
        "Antenne : câble RG58 sur le bornier de l'antenne. Carte radio enfichable AF : la brancher hors tension (ou batteries débranchées) ; la carte mère ne la reconnaît qu'alimentée.",
        "Mémoriser un émetteur : maintenir la touche « CH1 » de la carte (la LED clignote), appuyer sur la touche de l'émetteur, la LED reste allumée.",
        "CH1 : commande directe d'une fonction de la carte (ouvre seulement, ouvre-ferme-inversion ou ouvre-stop-ferme-stop selon les dips 2 et 3) ; CH2 : commande directe d'un accessoire branché sur B1-B2."
      ]
    },
    "parametres": {
      "intro": "10 dip-switch et 3 trimmers. Valeurs d'usine non indiquées dans la notice. Le dip 6 est en logique inverse : OFF = action continue hors service.",
      "navigation": [
        "Trimmers : régler en tournant avec un petit tournevis."
      ],
      "groupes": [
        {
          "nom": "Dip-switch",
          "items": [
            {
              "code": "DIP 1",
              "def": "—",
              "titre": "Fermeture automatique",
              "valeurs": [
                [
                  "ON",
                  "En service"
                ],
                [
                  "OFF",
                  "Hors service"
                ]
              ]
            },
            {
              "code": "DIP 2",
              "def": "—",
              "titre": "Mode du bouton 2-7 et de la radio",
              "valeurs": [
                [
                  "ON",
                  "Ouvre-stop-ferme-stop"
                ],
                [
                  "OFF",
                  "Ouvre-ferme"
                ]
              ],
              "note": "Carte AF branchée."
            },
            {
              "code": "DIP 3",
              "def": "—",
              "titre": "Ouverture seulement (radio)",
              "valeurs": [
                [
                  "ON",
                  "En service"
                ],
                [
                  "OFF",
                  "Hors service"
                ]
              ]
            },
            {
              "code": "DIP 4",
              "def": "—",
              "titre": "Préclignotement",
              "valeurs": [
                [
                  "ON",
                  "En service à l'ouverture et à la fermeture"
                ],
                [
                  "OFF",
                  "Hors service"
                ]
              ]
            },
            {
              "code": "DIP 5",
              "def": "—",
              "titre": "Détection de présence d'obstacle",
              "valeurs": [
                [
                  "ON",
                  "En service"
                ],
                [
                  "OFF",
                  "Hors service"
                ]
              ]
            },
            {
              "code": "DIP 6",
              "def": "—",
              "titre": "Action continue",
              "valeurs": [
                [
                  "OFF",
                  "Hors service"
                ],
                [
                  "ON",
                  "En service : exclut le fonctionnement de l'émetteur"
                ]
              ]
            },
            {
              "code": "DIP 7",
              "def": "—",
              "titre": "Coup de bélier",
              "valeurs": [
                [
                  "ON",
                  "En service : les portes appuient une seconde sur la butée de fermeture avant l'ouverture (aide la serrure sur 11-S)"
                ],
                [
                  "OFF",
                  "Hors service"
                ]
              ]
            },
            {
              "code": "DIP 8",
              "def": "—",
              "titre": "Entrée 2-CX",
              "valeurs": [
                [
                  "OFF",
                  "Fonction active sur 2-CX (voir dip 10)"
                ],
                [
                  "ON",
                  "À mettre si 2-CX n'est pas utilisé"
                ]
              ]
            },
            {
              "code": "DIP 9",
              "def": "—",
              "titre": "Réouverture pendant la fermeture (2-C1)",
              "valeurs": [
                [
                  "OFF",
                  "Active : dispositif sur 2-C1"
                ],
                [
                  "ON",
                  "À mettre si 2-C1 n'est pas utilisé"
                ]
              ]
            },
            {
              "code": "DIP 10",
              "def": "—",
              "titre": "Fonction de 2-CX (avec dip 8 sur OFF)",
              "valeurs": [
                [
                  "OFF",
                  "Fermeture pendant l'ouverture"
                ],
                [
                  "ON",
                  "Stop partiel"
                ]
              ]
            }
          ]
        },
        {
          "nom": "Trimmers",
          "items": [
            {
              "code": "T.L.",
              "def": "—",
              "titre": "Temps de travail",
              "valeurs": [
                [
                  "0 > 120 s",
                  "Durée de la manœuvre"
                ]
              ]
            },
            {
              "code": "T.C.A.",
              "def": "—",
              "titre": "Temps de fermeture automatique",
              "valeurs": [
                [
                  "1 > 120 s",
                  "Pause avant la fermeture automatique"
                ]
              ]
            },
            {
              "code": "TR2M",
              "def": "—",
              "titre": "Retard du moteur M2 à la fermeture et ouverture partielle",
              "valeurs": [
                [
                  "0 > 15 s",
                  "Retard en fermeture du moteur M2"
                ],
                [
                  "0 > 30 s",
                  "Ouverture partielle (réglage simultané)"
                ]
              ]
            }
          ]
        }
      ]
    },
    "apprentissage": {
      "avant": [
        "Enficher la carte radio AF après avoir coupé le courant (ou débranché les batteries).",
        "Brancher le câble d'antenne RG58."
      ],
      "etapes": [
        "Enficher la carte AF courant coupé, remettre sous tension (la carte ne la reconnaît qu'alimentée).",
        "Maintenir la touche CH1 de la carte : la LED clignote.",
        "Appuyer sur la touche de l'émetteur à mémoriser : la LED reste allumée.",
        "Répéter avec CH2 pour le canal accessoire (B1-B2)."
      ],
      "apres": [
        "Pas d'apprentissage de course : réglages par trimmers (T.L., T.C.A., TR2M).",
        "Limiteur de couple moteur : déplacer le connecteur (faston) sur l'une des 4 positions, 1 = minimum, 4 = maximum."
      ]
    }
  },
  {
    "id": "came-za3p",
    "nom": "ZA3P (88003-0183)",
    "modeles": "Carte 88003-0183 (ZA3P) — remplacement de carte sur colonne de barrière (dessins old / new)",
    "type": "Barrière 230 V — 10 + 2 dip-switch, 2 trimmers",
    "source": "Notice Came FA02020M4A (11/2023), pages FR 13 à 18",
    "codes": [
      {
        "code": "Remplacement",
        "type": "diag",
        "titre": "Remplacement de la carte (old → new)",
        "action": "Les dessins de la notice (sans texte) montrent : retirer le dôme et la tôle de la colonne, déposer le capot de l'armoire, remplacer l'ancienne carte (old) par la nouvelle (new), remonter. Ils portent un avertissement (WARNING). Couper l'armoire avant toute intervention."
      },
      {
        "code": "DIP 5",
        "type": "symptome",
        "titre": "Le portail / la barrière ne répond pas alors qu'un obstacle est détecté",
        "action": "DIP 5 ON : à l'arrêt (passage ouvert, fermé ou après un arrêt total), la commande n'est pas exécutée si les sécurités détectent un obstacle."
      },
      {
        "code": "DIP 6",
        "type": "symptome",
        "titre": "Les autres commandes ne marchent plus",
        "action": "DIP 6 ON (action maintenue) désactive tous les autres dispositifs de commande."
      },
      {
        "code": "PROG fixe",
        "type": "led",
        "titre": "LED PROG allumée en permanence",
        "action": "Après la suppression de tous les utilisateurs (CH1 + CH2 maintenus plus de 5 s) : la LED reste allumée en permanence."
      }
    ],
    "bornier": {
      "groupes": [
        {
          "nom": "Alimentation",
          "bornes": [
            {
              "n": "L1T · L2T · CT",
              "label": "Transformateur",
              "desc": "Bornier de connexion du transformateur (prises 0 · 12 · 24)",
              "t": "alim"
            },
            {
              "n": "L · N",
              "label": "Alimentation de la carte",
              "desc": "Bornier pour l'alimentation de la carte électronique",
              "t": "alim"
            }
          ]
        },
        {
          "nom": "Moteur et fins de course",
          "bornes": [
            {
              "n": "U · V · W · X · Y",
              "label": "Moteur et signalisation",
              "desc": "Bornier pour l'alimentation du moteur et des dispositifs de signalisation",
              "t": "moteur"
            },
            {
              "n": "FA1 · FC1 · FA2 · FC2",
              "label": "Fins de course",
              "desc": "Micro-interrupteurs de fin de course, contact NF",
              "t": "nf"
            }
          ]
        },
        {
          "nom": "Commandes et sécurités",
          "bornes": [
            {
              "n": "1 · 2 · 3 · 3P",
              "label": "Commandes",
              "desc": "Bornier des dispositifs de commande (bornes 1, 2, 3, 3P, 4, 5, 7 ; voir dips 2 et 3)",
              "t": "no"
            },
            {
              "n": "2 · C1 · CX",
              "label": "Sécurités",
              "desc": "Bornier des dispositifs de sécurité (CX : dip 8 et dip 2 du 2e groupe ; test sur borne TS, dip 10)",
              "t": "nf"
            }
          ]
        }
      ],
      "fusibles": "Un fusible pour la carte électronique et un fusible pour les accessoires (valeurs non indiquées dans les pages lues).",
      "notes": [
        "Carte livrée en rechange : les connecteurs 17 permettent le branchement au condensateur.",
        "Capacité de la mémoire radio : jusqu'à 25 utilisateurs.",
        "Limiteur de couple moteur : déplacer le connecteur (faston) sur l'une des 4 positions, 1 = minimum, 4 = maximum.",
        "Antenne : câble RG58 sur le bornier de l'antenne. Carte radio enfichable AF : la brancher hors tension (ou batteries débranchées) ; la carte mère ne la reconnaît qu'alimentée.",
        "Mémoriser un émetteur : maintenir la touche « CH1 » de la carte (la LED clignote), appuyer sur la touche de l'émetteur, la LED reste allumée."
      ]
    },
    "parametres": {
      "intro": "Deux groupes de dip-switch : 10 dips (fonctions) et 2 dips (entrée CX), plus 2 trimmers (T.L. et T.F.A.). Valeur d'usine : seule celle de T.F.A. est indiquée (20 s).",
      "navigation": [
        "Les DIP ON / OFF sont repérés par le dessin du boîtier (ON en haut).",
        "Dips 7 et 9 (1er groupe) et dip 1 (2e groupe) : non utilisés, laisser sur OFF."
      ],
      "groupes": [
        {
          "nom": "Dip-switch (10)",
          "items": [
            {
              "code": "DIP 1",
              "def": "—",
              "titre": "Fermeture automatique",
              "valeurs": [
                [
                  "ON",
                  "Activée"
                ],
                [
                  "OFF",
                  "Désactivée"
                ]
              ],
              "note": "La fonction n'est pas activée quand les sécurités détectent un obstacle, après un arrêt total ou à défaut de tension. Régler le temps avec T.F.A."
            },
            {
              "code": "DIP 2",
              "def": "—",
              "titre": "Commande 2-7",
              "valeurs": [
                [
                  "ON",
                  "Séquentielle (ouverture-arrêt-fermeture-arrêt)"
                ],
                [
                  "OFF",
                  "Pas-à-pas (ouverture-fermeture)"
                ]
              ]
            },
            {
              "code": "DIP 3",
              "def": "—",
              "titre": "Commande ouverture (émetteur)",
              "valeurs": [
                [
                  "ON",
                  "Activée"
                ],
                [
                  "OFF",
                  "Désactivée"
                ]
              ]
            },
            {
              "code": "DIP 4",
              "def": "—",
              "titre": "Préclignotement",
              "valeurs": [
                [
                  "ON",
                  "Activé : le clignotant démarre 5 s avant toute manœuvre"
                ],
                [
                  "OFF",
                  "Désactivé"
                ]
              ]
            },
            {
              "code": "DIP 5",
              "def": "—",
              "titre": "Obstacle avec moteur arrêté",
              "valeurs": [
                [
                  "ON",
                  "Activée"
                ],
                [
                  "OFF",
                  "Désactivée"
                ]
              ]
            },
            {
              "code": "DIP 6",
              "def": "—",
              "titre": "Action maintenue",
              "valeurs": [
                [
                  "ON",
                  "Activée : le mouvement s'arrête au relâchement ; désactive tous les autres dispositifs de commande"
                ],
                [
                  "OFF",
                  "Désactivée"
                ]
              ]
            },
            {
              "code": "DIP 7",
              "def": "—",
              "titre": "Non utilisé",
              "valeurs": [
                [
                  "OFF",
                  "Laisser sur OFF"
                ]
              ]
            },
            {
              "code": "DIP 8",
              "def": "—",
              "titre": "Entrée CX",
              "valeurs": [
                [
                  "ON",
                  "Borne CX activée"
                ],
                [
                  "OFF",
                  "Désactivée"
                ]
              ]
            },
            {
              "code": "DIP 9",
              "def": "—",
              "titre": "Non utilisé",
              "valeurs": [
                [
                  "OFF",
                  "Laisser sur OFF"
                ]
              ]
            },
            {
              "code": "DIP 10",
              "def": "—",
              "titre": "Test sécurité",
              "valeurs": [
                [
                  "ON",
                  "Contrôle des photocellules (entrées 2-CX) après chaque commande ; photocellules à brancher sur la borne TS"
                ],
                [
                  "OFF",
                  "Désactivé"
                ]
              ]
            }
          ]
        },
        {
          "nom": "Dip-switch (2)",
          "items": [
            {
              "code": "2e groupe · DIP 1",
              "def": "—",
              "titre": "Non utilisé",
              "valeurs": [
                [
                  "OFF",
                  "Laisser sur OFF"
                ]
              ]
            },
            {
              "code": "2e groupe · DIP 2",
              "def": "—",
              "titre": "Fonction de l'entrée CX",
              "valeurs": [
                [
                  "ON",
                  "Arrêt partiel"
                ],
                [
                  "OFF",
                  "Réouverture durant la fermeture"
                ]
              ]
            }
          ]
        },
        {
          "nom": "Trimmers",
          "items": [
            {
              "code": "T.L.",
              "def": "—",
              "titre": "Temps de fonctionnement",
              "valeurs": [
                [
                  "5 > 30 s",
                  "Durée de la manœuvre d'ouverture ou de fermeture"
                ]
              ]
            },
            {
              "code": "T.F.A.",
              "def": "20 s",
              "titre": "Temps de fermeture automatique",
              "valeurs": [
                [
                  "1 > 120 s",
                  "Pause avant la fermeture, une fois la fin de course atteinte à l'ouverture ou après l'intervention des photocellules en arrêt partiel (20 s en usine)"
                ]
              ]
            }
          ]
        }
      ]
    },
    "apprentissage": {
      "avant": [
        "Mettre l'armoire hors tension avant toute intervention.",
        "Enficher la carte AF sur son connecteur et connecter le câble d'antenne RG58."
      ],
      "etapes": [
        "Maintenir la touche CH1 de la carte : le voyant clignote.",
        "Appuyer sur une touche de l'émetteur à mémoriser : le voyant reste allumé, la mémorisation est faite.",
        "Le canal CH1 est dédié aux commandes d'ouverture / fermeture de la barrière (selon dips 2 et 3)."
      ],
      "apres": [
        "Jusqu'à 25 utilisateurs en mémoire.",
        "Suppression de tous les utilisateurs : maintenir CH1 et CH2 ensemble plus de 5 s jusqu'à l'allumage permanent de la LED PROG.",
        "Pas d'apprentissage de course : fins de course à micro-interrupteurs et trimmer T.L."
      ]
    }
  },
  {
    "id": "came-za4",
    "nom": "ZA4",
    "modeles": "Carte ZA4 (319LR24) — battant 230 V, 2 moteurs monophasés 600 W max",
    "type": "Battant 230 V — 2 dip-switch, 3 trimmers",
    "source": "Notice Came 319LR24 v1.0 (12/2007), pages FR 11 à 14",
    "codes": [
      {
        "code": "Un moteur",
        "type": "symptome",
        "titre": "Un seul moteur installé",
        "action": "Brancher uniquement le moteur n° 2 sur la sortie X-W-Y."
      },
      {
        "code": "Série FROG",
        "type": "symptome",
        "titre": "Moteurs de la série FROG",
        "action": "Connecter les fils noirs qui sortent de la carte sur les connecteurs du condensateur du 1er moteur et les fils rouges sur le condensateur du 2e moteur."
      }
    ],
    "bornier": {
      "groupes": [
        {
          "nom": "Alimentation",
          "bornes": [
            {
              "n": "L1 · L2",
              "label": "Secteur",
              "desc": "230 V AC 50/60 Hz",
              "t": "alim"
            },
            {
              "n": "10 · 11",
              "label": "24 V accessoires",
              "desc": "24 V AC",
              "t": "alim"
            }
          ]
        },
        {
          "nom": "Moteurs",
          "bornes": [
            {
              "n": "U · V · W",
              "label": "Moteur 1",
              "desc": "Monophasé 230 V AC, 600 W max",
              "t": "moteur"
            },
            {
              "n": "X · Y · W",
              "label": "Moteur 2",
              "desc": "Monophasé 230 V AC, 600 W max",
              "t": "moteur"
            }
          ]
        },
        {
          "nom": "Sorties",
          "bornes": [
            {
              "n": "W · E1",
              "label": "Clignotant",
              "desc": "230 V, 25 W max",
              "t": "sortie"
            },
            {
              "n": "10 · 5",
              "label": "Voyant portail ouvert",
              "desc": "24 V, 3 W max",
              "t": "sortie"
            }
          ]
        },
        {
          "nom": "Commandes et sécurités",
          "bornes": [
            {
              "n": "1 · 2",
              "label": "STOP",
              "desc": "Bouton d'arrêt, NF",
              "t": "nf"
            },
            {
              "n": "2 · 3",
              "label": "Ouverture",
              "desc": "Sélecteur à clé et / ou bouton, NO",
              "t": "no"
            },
            {
              "n": "2 · 7",
              "label": "Commandes",
              "desc": "Sélecteur à clé et / ou bouton, NO",
              "t": "no"
            },
            {
              "n": "2 · C1",
              "label": "Réouverture pendant la fermeture",
              "desc": "Contact NF",
              "t": "nf"
            }
          ]
        }
      ],
      "fusibles": "Inscriptions lues sur le dessin de la notice : fusible centrale 1 A et fusible de ligne 5 A.",
      "notes": [
        "Limiteur de couple moteur : déplacer le connecteur (faston) sur l'une des 4 positions, 1 = minimum, 4 = maximum.",
        "Antenne : câble RG58 sur le bornier de l'antenne. Carte radio enfichable AF : la brancher hors tension (ou batteries débranchées) ; la carte mère ne la reconnaît qu'alimentée.",
        "Mémoriser un émetteur : maintenir la touche « CH1 » de la carte (la LED clignote), appuyer sur la touche de l'émetteur, la LED reste allumée."
      ]
    },
    "parametres": {
      "intro": "2 dip-switch et 3 trimmers. Dans la notice, le texte de la sélection est ambigu pour le dip 1 (voir note).",
      "navigation": [
        "La notice écrit « 1 OFF : homme mort … éteinte ; (1 ON – activé) » : il faut comprendre dip 1 sur ON = homme mort activé, sur OFF = désactivé."
      ],
      "groupes": [
        {
          "nom": "Dip-switch",
          "items": [
            {
              "code": "DIP 1",
              "def": "—",
              "titre": "« Homme mort » (action maintenue)",
              "valeurs": [
                [
                  "ON",
                  "Activé : le portail bouge tant qu'on appuie sur le bouton ; exclut la radiocommande"
                ],
                [
                  "OFF",
                  "Désactivé"
                ]
              ],
              "note": "Interprétation du texte FR de la notice, qui est mal formulé."
            },
            {
              "code": "DIP 2",
              "def": "—",
              "titre": "Fermeture automatique",
              "valeurs": [
                [
                  "ON",
                  "Activée"
                ],
                [
                  "OFF",
                  "Éteinte"
                ]
              ]
            }
          ]
        },
        {
          "nom": "Trimmers",
          "items": [
            {
              "code": "T.L.",
              "def": "—",
              "titre": "Temps de travail",
              "valeurs": [
                [
                  "5 > 50 s",
                  "Durée de la manœuvre"
                ]
              ]
            },
            {
              "code": "TR2M",
              "def": "—",
              "titre": "Retard de fermeture du 2e moteur",
              "valeurs": [
                [
                  "1 > 10 s",
                  "Retard du moteur M2 à la fermeture"
                ]
              ]
            },
            {
              "code": "T.C.A.",
              "def": "—",
              "titre": "Temps de fermeture automatique",
              "valeurs": [
                [
                  "3 > 130 s",
                  "Pause avant la fermeture automatique"
                ]
              ]
            }
          ]
        }
      ]
    },
    "apprentissage": {
      "avant": [
        "Enficher la carte radio après avoir coupé le courant (ou débranché les batteries).",
        "Un seul moteur : brancher sur X-W-Y."
      ],
      "etapes": [
        "Enficher la carte radio AF hors tension, remettre sous tension.",
        "Maintenir CH1 : la LED clignote.",
        "Appuyer sur la touche de l'émetteur : la LED reste allumée."
      ],
      "apres": [
        "Pas d'apprentissage de course : réglages par trimmers.",
        "Limiteur de couple moteur : déplacer le connecteur (faston) sur l'une des 4 positions, 1 = minimum, 4 = maximum."
      ]
    }
  },
  {
    "id": "came-za5",
    "nom": "ZA5",
    "modeles": "Carte ZA5 (319LR25) — battant 230 V, 1 moteur monophasé 600 W max",
    "type": "Battant 230 V — 2 dip-switch, 2 trimmers",
    "source": "Notice Came 319LR25 (12/2007), pages FR 11 à 14",
    "codes": [
      {
        "code": "Série FROG",
        "type": "symptome",
        "titre": "Moteur de la série FROG",
        "action": "Connecter les fils noirs qui sortent de la carte sur les connecteurs du condensateur."
      },
      {
        "code": "PROG",
        "type": "led",
        "titre": "LED de mémorisation",
        "action": "Avec la touche PROG maintenue, la LED clignote ; elle reste allumée quand l'émetteur est mémorisé."
      }
    ],
    "bornier": {
      "groupes": [
        {
          "nom": "Alimentation",
          "bornes": [
            {
              "n": "L1 · L2",
              "label": "Secteur",
              "desc": "230 V AC 50/60 Hz",
              "t": "alim"
            },
            {
              "n": "10 · 11",
              "label": "24 V accessoires",
              "desc": "24 V AC",
              "t": "alim"
            }
          ]
        },
        {
          "nom": "Moteur",
          "bornes": [
            {
              "n": "U · V · W",
              "label": "Moteur",
              "desc": "Monophasé 230 V AC, 600 W max",
              "t": "moteur"
            }
          ]
        },
        {
          "nom": "Sorties",
          "bornes": [
            {
              "n": "W · E1",
              "label": "Clignotant",
              "desc": "230 V, 25 W max",
              "t": "sortie"
            },
            {
              "n": "10 · 5",
              "label": "Voyant portail ouvert",
              "desc": "24 V, 3 W max",
              "t": "sortie"
            },
            {
              "n": "11 · ES",
              "label": "Électro-serrure",
              "desc": "12 V, 15 W max",
              "t": "sortie"
            }
          ]
        },
        {
          "nom": "Commandes et sécurités",
          "bornes": [
            {
              "n": "1 · 2",
              "label": "STOP",
              "desc": "Bouton d'arrêt, NF",
              "t": "nf"
            },
            {
              "n": "2 · 3",
              "label": "Ouverture",
              "desc": "Sélecteur à clé et / ou bouton, NO",
              "t": "no"
            },
            {
              "n": "2 · 7",
              "label": "Commandes",
              "desc": "Sélecteur à clé et / ou bouton, NO",
              "t": "no"
            },
            {
              "n": "2 · C1",
              "label": "Réouverture pendant la fermeture",
              "desc": "Contact NF",
              "t": "nf"
            }
          ]
        }
      ],
      "fusibles": "Inscriptions lues sur le dessin de la notice : fusible centrale 1 A et fusible de ligne 5 A.",
      "notes": [
        "Limiteur de couple moteur : déplacer le connecteur (faston) sur l'une des 4 positions, 1 = minimum, 4 = maximum.",
        "Le dessin de la notice ZA5 porte l'inscription « ZA4 » : même dessin que la notice ZA4.",
        "Antenne : câble RG58 sur le bornier de l'antenne. Carte radio enfichable AF : la brancher hors tension (ou batteries débranchées) ; la carte mère ne la reconnaît qu'alimentée.",
        "Mémoriser un émetteur : maintenir la touche « PROG » de la carte (la LED clignote), appuyer sur la touche de l'émetteur, la LED reste allumée."
      ]
    },
    "parametres": {
      "intro": "2 dip-switch et 2 trimmers. Dans la notice, le texte de la sélection est ambigu pour le dip 1 (voir note).",
      "navigation": [
        "La notice écrit « 1 OFF : homme mort … éteinte ; (1 ON – activé) » : il faut comprendre dip 1 sur ON = homme mort activé, sur OFF = désactivé."
      ],
      "groupes": [
        {
          "nom": "Dip-switch",
          "items": [
            {
              "code": "DIP 1",
              "def": "—",
              "titre": "« Homme mort » (action maintenue)",
              "valeurs": [
                [
                  "ON",
                  "Activé : le portail bouge tant qu'on appuie sur le bouton ; exclut la radiocommande"
                ],
                [
                  "OFF",
                  "Désactivé"
                ]
              ],
              "note": "Interprétation du texte FR de la notice, qui est mal formulé."
            },
            {
              "code": "DIP 2",
              "def": "—",
              "titre": "Fermeture automatique",
              "valeurs": [
                [
                  "ON",
                  "Activée"
                ],
                [
                  "OFF",
                  "Éteinte"
                ]
              ]
            }
          ]
        },
        {
          "nom": "Trimmers",
          "items": [
            {
              "code": "T.L.",
              "def": "—",
              "titre": "Temps de travail",
              "valeurs": [
                [
                  "5 > 50 s",
                  "Durée de la manœuvre"
                ]
              ]
            },
            {
              "code": "T.C.A.",
              "def": "—",
              "titre": "Temps de fermeture automatique",
              "valeurs": [
                [
                  "3 > 130 s",
                  "Pause avant la fermeture automatique"
                ]
              ]
            }
          ]
        }
      ]
    },
    "apprentissage": {
      "avant": [
        "Enficher la carte radio après avoir coupé le courant (ou débranché les batteries)."
      ],
      "etapes": [
        "Enficher la carte radio AF hors tension, remettre sous tension.",
        "Maintenir la touche PROG de la carte : la LED clignote.",
        "Appuyer sur la touche de l'émetteur : la LED reste allumée."
      ],
      "apres": [
        "Pas d'apprentissage de course : réglages par trimmers.",
        "Limiteur de couple moteur : déplacer le connecteur (faston) sur l'une des 4 positions, 1 = minimum, 4 = maximum."
      ]
    }
  },
  {
    "id": "came-88003-0184",
    "nom": "Carte 88003-0184 (barrière CAT1DAGS)",
    "modeles": "Carte 88003-0184 — notice renvoyant au fascicule technique des barrières CAT1DAGS",
    "type": "Barrière — afficheur et touches ESC / < > / ENTER",
    "source": "Notice Came FA02006M4A (09/2023), pages FR 9 à 12",
    "codes": [
      {
        "code": "E4",
        "type": "erreur",
        "titre": "Erreur : test des services échoué",
        "action": "Le test des services a échoué (libellé de la notice, sans autre précision) : contrôler les dispositifs de sécurité raccordés et leur câblage."
      },
      {
        "code": "E11",
        "type": "erreur",
        "titre": "Dépassement du nombre maximum d'obstacles détectés consécutivement",
        "action": "Le nombre maximum d'obstacles détectés à la suite a été dépassé : chercher la cause de ces détections avant de remettre en service."
      },
      {
        "code": "E13",
        "type": "erreur",
        "titre": "Erreur sur les entrées de fin de course, ou les deux butées de fin de course ouvertes",
        "action": "Contrôler les entrées de fin de course : erreur sur une entrée, ou les deux butées de fin de course sont ouvertes en même temps."
      },
      {
        "code": "E15",
        "type": "erreur",
        "titre": "Erreur : émetteur incompatible",
        "action": "L'émetteur utilisé est signalé incompatible avec la carte."
      },
      {
        "code": "C0",
        "type": "diag",
        "titre": "Avertissement : contact filaire 1-2 (NF) ouvert",
        "action": "Le contact filaire 1-2 (NF) est ouvert : vérifier le dispositif branché sur 1-2 et son câblage."
      },
      {
        "code": "C7",
        "type": "diag",
        "titre": "Avertissement : contact filaire 2-CX (NF) ouvert",
        "action": "Le contact filaire 2-CX (NF) est ouvert : vérifier le dispositif branché sur 2-CX."
      },
      {
        "code": "C1 C4 C5",
        "type": "diag",
        "titre": "Avertissement : contact filaire 2-CY (NF) des photocellules ouvert",
        "action": "Le contact filaire 2-CY (NF) des photocellules est ouvert : vérifier les photocellules branchées sur 2-CY."
      }
    ],
    "bornier": {
      "groupes": [
        {
          "nom": "Description des bornes de la carte",
          "bornes": [
            {
              "n": "1",
              "label": "Alimentation du moteur",
              "desc": "Bornier pour l'alimentation du moteur",
              "t": "moteur"
            },
            {
              "n": "2",
              "label": "Fins de course",
              "desc": "Bornier de connexion des butées de fin de course",
              "t": "nf"
            },
            {
              "n": "3",
              "label": "Sécurités",
              "desc": "Bornier de connexion des dispositifs de sécurité",
              "t": "nf"
            },
            {
              "n": "4",
              "label": "Commandes",
              "desc": "Bornier de connexion des dispositifs de commande",
              "t": "no"
            },
            {
              "n": "5",
              "label": "Antenne",
              "desc": "Bornier de connexion de l'antenne",
              "t": "bus"
            },
            {
              "n": "11",
              "label": "CRP",
              "desc": "Bornier de connexion CRP",
              "t": "bus"
            },
            {
              "n": "12",
              "label": "Clavier à code",
              "desc": "Bornier de connexion du clavier à code",
              "t": "bus"
            },
            {
              "n": "13",
              "label": "Transpondeur",
              "desc": "Bornier de connexion du sélecteur transpondeur",
              "t": "bus"
            },
            {
              "n": "14",
              "label": "Signalisation",
              "desc": "Bornier de connexion des dispositifs de signalisation",
              "t": "sortie"
            },
            {
              "n": "16",
              "label": "Alimentation de la carte",
              "desc": "Bornier pour l'alimentation de la carte électronique",
              "t": "alim"
            }
          ]
        },
        {
          "nom": "Connecteurs et accessoires",
          "bornes": [
            {
              "n": "6",
              "label": "Carte radio AF",
              "desc": "Connecteur de la carte radiofréquence enfichable (AF)",
              "t": "bus"
            },
            {
              "n": "7",
              "label": "Memory Roll",
              "desc": "Connecteur de la carte Memory Roll",
              "t": "bus"
            },
            {
              "n": "8",
              "label": "R700 / R800",
              "desc": "Connecteur de la carte de décodage R700 ou R800",
              "t": "bus"
            },
            {
              "n": "9",
              "label": "Carte RSE",
              "desc": "Connecteur pour la carte RSE",
              "t": "bus"
            },
            {
              "n": "10",
              "label": "Touches",
              "desc": "Touches de programmation",
              "t": "autre"
            },
            {
              "n": "15",
              "label": "Fusible accessoires",
              "desc": "Fusible pour les accessoires",
              "t": "alim"
            }
          ]
        }
      ],
      "fusibles": "Fusible pour les accessoires (repère 15), valeur non indiquée dans les pages lues.",
      "notes": [
        "Les numéros sont ceux du dessin « Description des composants de la carte » de la notice (borne n° 1 à 16).",
        "Pour la programmation complète : fascicule technique des barrières CAT1DAGS (docs.came.com).",
        "Carte MEMORY ROLL : avant de l'installer ou de l'extraire, mettre HORS TENSION (obligatoire). Il est conseillé de l'enlever après le téléchargement des données."
      ]
    },
    "parametres": {
      "intro": "La notice de rechange ne décrit que les touches et l'export / import des données. La programmation complète est dans le fascicule technique des barrières CAT1DAGS.",
      "navigation": [
        "ENTER : entrer dans les menus, confirmer le choix.",
        "Touches < > : naviguer dans les options du menu, augmenter ou diminuer une valeur.",
        "ESC : sortir du menu, annuler les modifications, revenir à la page-écran précédente.",
        "En mouvement, hors du menu : ESC arrête la barrière ; les touches < > donnent l'ouverture et la fermeture."
      ],
      "groupes": [
        {
          "nom": "Export / import des données",
          "items": [
            {
              "code": "F50",
              "def": "—",
              "titre": "Sauvegarde des données",
              "valeurs": [
                [
                  "—",
                  "Sauvegarde les données des utilisateurs, de synchronisation et de configuration sur la mémoire (Memory Roll ou clé USB)"
                ]
              ],
              "note": "La fonction n'apparaît que si une clé est insérée dans le port USB ou une Memory Roll sur la carte."
            },
            {
              "code": "F51",
              "def": "—",
              "titre": "Lecture des données",
              "valeurs": [
                [
                  "—",
                  "Télécharge les données des utilisateurs, de synchronisation et de configuration sur la carte"
                ]
              ],
              "note": "Mettre HORS TENSION avant d'installer ou d'extraire la Memory Roll."
            }
          ]
        }
      ]
    },
    "apprentissage": {
      "avant": [
        "Mettre hors tension avant d'insérer ou d'extraire la carte MEMORY ROLL.",
        "Insérer la MEMORY ROLL sur le connecteur de la carte."
      ],
      "etapes": [
        "Appuyer sur ENTER pour accéder à la programmation.",
        "Choisir la fonction avec les flèches : F50 (sauvegarde) ou F51 (lecture).",
        "Confirmer avec ENTER."
      ],
      "apres": [
        "Retirer la MEMORY ROLL (hors tension) après le téléchargement des données.",
        "L'apprentissage de la course et la programmation complète sont dans le fascicule technique CAT1DAGS."
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
  },
  {
    "id": "nice-run",
    "nom": "RUN (RUN1800 / RUN2500)",
    "modeles": "RUN1800 · RUN1800P · RUN1800/V1 (120 V 60 Hz) · RUN2500 · RUN2500P · RUN2500/V1. Le P désigne la version à fin de course de proximité inductif, les autres ont un fin de course électromécanique.",
    "type": "Portail coulissant 230 V (120 V en /V1) — logique intégrée, BlueBUS, 8 LED L1…L8",
    "source": "Notice Nice IS0307A01MMD (RUN1800 / RUN1800P / RUN2500 / RUN2500P), version française",
    "codes": [
      {
        "code": "1 clignot.",
        "type": "flash",
        "titre": "Erreur BlueBUS",
        "action": "Au début de la manœuvre, les dispositifs BlueBUS ne correspondent pas à ceux mémorisés. Chercher le dispositif en panne et le remplacer. Si on a ajouté ou retiré un dispositif, refaire la reconnaissance (onglet Apprentissage)."
      },
      {
        "code": "2 clignot.",
        "type": "flash",
        "titre": "Photocellule",
        "action": "Au début de la manœuvre, une ou plusieurs photocellules refusent le départ : chercher un obstacle sur le faisceau. Pendant le mouvement, il est normal qu'un obstacle soit présent."
      },
      {
        "code": "3 clignot.",
        "type": "flash",
        "titre": "Détection d'obstacles",
        "action": "Pendant le mouvement, le portail a rencontré une friction plus forte : en vérifier la cause."
      },
      {
        "code": "4 clignot.",
        "type": "flash",
        "titre": "Entrée STOP",
        "action": "L'entrée STOP est intervenue au départ ou pendant le mouvement : en vérifier la cause."
      },
      {
        "code": "5 clignot.",
        "type": "flash",
        "titre": "Paramètres internes de la logique",
        "action": "Attendre au moins 30 s puis redonner une commande. Si ça persiste : panne, carte à remplacer. (Le texte français de la notice répète ici, par erreur, l'action du STOP ; la version anglaise donne celle-ci.)"
      },
      {
        "code": "6 clignot.",
        "type": "flash",
        "titre": "Trop de manœuvres par heure",
        "action": "La limite maximale de manœuvres par heure est dépassée : attendre quelques minutes que le limiteur repasse sous la limite."
      },
      {
        "code": "7 clignot.",
        "type": "flash",
        "titre": "Circuits électriques internes",
        "action": "Couper toutes les alimentations quelques secondes puis redonner une commande. Si ça persiste : panne grave, carte à remplacer."
      },
      {
        "code": "8 clignot.",
        "type": "flash",
        "titre": "Une commande est déjà présente",
        "action": "Une commande reste active et empêche les autres (par exemple une horloge sur l'entrée ouverture) : vérifier laquelle."
      },
      {
        "code": "Flash 2 s",
        "type": "flash",
        "titre": "Demande de maintenance (81 à 100 % de la limite)",
        "action": "Au début de la manœuvre, le clignotant reste allumé 2 s puis clignote normalement. Faire la maintenance puis remettre le compteur de manœuvres à zéro (onglet Paramètres)."
      },
      {
        "code": "Voyant maint.",
        "type": "led",
        "titre": "Voyant de maintenance sur S.C.A. (si 2·L4 = L7)",
        "action": "Moins de 80 % de la limite : allumé 2 s au début de l'ouverture. Entre 81 et 100 % : il clignote pendant toute la manœuvre. Au-delà de 100 % : il clignote en permanence. Faire la maintenance puis remettre le compteur de manœuvres à zéro (onglet Paramètres). Le clignotant reste normal (0,5 s allumé, 0,5 s éteint) sous 80 %."
      },
      {
        "code": "Flash 2 s ×2",
        "type": "flash",
        "titre": "Maintenance dépassée (plus de 100 % de la limite)",
        "action": "Le clignotant reste allumé 2 s au début et à la fin de la manœuvre. Faire la maintenance et remettre le compteur à zéro."
      },
      {
        "code": "BLUEBUS éteinte",
        "type": "led",
        "titre": "LED BLUEBUS éteinte",
        "action": "Anomalie : vérifier l'alimentation et si les fusibles sont intervenus. Si oui, chercher la cause avant de les remplacer par des fusibles de mêmes caractéristiques."
      },
      {
        "code": "BLUEBUS fixe",
        "type": "led",
        "titre": "LED BLUEBUS allumée fixe",
        "action": "Anomalie grave : éteindre la logique quelques secondes. Si ça persiste, panne et carte à remplacer."
      },
      {
        "code": "BLUEBUS 1/s",
        "type": "led",
        "titre": "1 clignotement par seconde",
        "action": "Fonctionnement normal de la logique."
      },
      {
        "code": "BLUEBUS ×2",
        "type": "led",
        "titre": "2 clignotements rapides",
        "action": "Normal quand une entrée change d'état : PP, STOP, OPEN, CLOSE, intervention des photocellules ou émetteur radio utilisé."
      },
      {
        "code": "BLUEBUS série",
        "type": "led",
        "titre": "Série de clignotements séparés par une pause d'1 s",
        "action": "Même signalisation que le clignotant : voir les codes « 1 à 8 clignot. »."
      },
      {
        "code": "STOP éteinte",
        "type": "led",
        "titre": "LED STOP éteinte",
        "action": "L'entrée STOP est intervenue : vérifier les dispositifs branchés sur STOP. Au repos la LED est allumée."
      },
      {
        "code": "P.P. allumée",
        "type": "led",
        "titre": "LED P.P. / OPEN / CLOSE allumée",
        "action": "Intervention de l'entrée correspondante : c'est normal si le dispositif branché sur cette entrée est effectivement actif. Éteinte = entrée non active."
      },
      {
        "code": "L1+L2",
        "type": "led",
        "titre": "L1 et L2 clignotent ensemble",
        "action": "La reconnaissance des dispositifs BlueBUS et STOP est à faire (onglet Apprentissage)."
      },
      {
        "code": "L3+L4",
        "type": "led",
        "titre": "L3 et L4 clignotent ensemble",
        "action": "La reconnaissance de la longueur du tablier est à faire (onglet Apprentissage)."
      },
      {
        "code": "Radio",
        "type": "symptome",
        "titre": "L'émetteur ne commande pas, sa LED ne s'allume pas",
        "action": "Vérifier si les piles de l'émetteur sont déchargées et les remplacer si besoin."
      },
      {
        "code": "Radio",
        "type": "symptome",
        "titre": "L'émetteur ne commande pas, mais sa LED s'allume",
        "action": "Vérifier que l'émetteur est correctement mémorisé dans le récepteur radio."
      },
      {
        "code": "Aucune manœuvre",
        "type": "symptome",
        "titre": "Rien ne bouge et la LED BLUEBUS ne clignote pas",
        "action": "Vérifier que RUN est alimenté en secteur et que les fusibles ne sont pas interrompus. Si c'est le cas, chercher la cause avant de les remplacer par d'autres de même valeur et mêmes caractéristiques."
      },
      {
        "code": "Aucune manœuvre",
        "type": "symptome",
        "titre": "Rien ne bouge et le clignotant est éteint",
        "action": "Vérifier que la commande est bien reçue : avec l'entrée PP, la LED « PP » doit s'allumer ; avec l'émetteur radio, la LED BLUEBUS doit faire 2 clignotements rapides."
      },
      {
        "code": "Aucune manœuvre",
        "type": "symptome",
        "titre": "Rien ne bouge et le clignotant émet quelques clignotements",
        "action": "Compter les clignotements et se reporter aux codes « 1 à 8 clignot. »."
      },
      {
        "code": "Inversion",
        "type": "symptome",
        "titre": "La manœuvre démarre puis s'inverse aussitôt",
        "action": "La sensibilité de détection des obstacles est peut-être trop élevée pour ce portail. Chercher d'abord un obstacle, sinon choisir une sensibilité plus basse (2e niveau, L3)."
      },
      {
        "code": "Clignotant",
        "type": "symptome",
        "titre": "Le portail manœuvre normalement mais le clignotant ne fonctionne pas",
        "action": "Pendant la manœuvre, mesurer la tension à la borne FLASH (elle est intermittente, environ 10 à 30 Vcc, la valeur n'est pas significative). Si elle arrive : remplacer l'ampoule par une identique. Si elle n'arrive pas : surcharge possible sur la sortie FLASH, chercher un court-circuit sur le câble."
      },
      {
        "code": "Voyant S.C.A.",
        "type": "symptome",
        "titre": "Le portail manœuvre normalement mais le voyant S.C.A. ne fonctionne pas",
        "action": "Vérifier la fonction programmée pour la sortie S.C.A. (2e niveau, L4). Si le voyant doit être allumé, vérifier qu'environ 24 Vcc arrivent à la borne S.C.A. : si oui, remplacer le voyant par un identique ; sinon, surcharge possible, chercher un court-circuit sur le câble."
      },
      {
        "code": "Sécurités HS",
        "type": "symptome",
        "titre": "Un dispositif de sécurité est en panne : comment manœuvrer quand même ?",
        "action": "Donner la commande : si les sécurités refusent, le clignotant fait quelques clignotements et la manœuvre ne part pas. Dans les 3 s, donner de nouveau la commande et la maintenir : au bout d'environ 2 s le portail bouge en « action maintenue », il s'arrête dès qu'on relâche. À réparer au plus tôt."
      }
    ],
    "afficheur": {
      "intro": "RUN n'a pas d'afficheur à segments : la logique a 8 LED (L1…L8), 3 touches et 5 LED d'état sur les bornes. Les LED L1…L8 montrent l'état des fonctions ON-OFF en marche normale et servent aux réglages.",
      "ecrans": [],
      "reperes": {},
      "regles": [],
      "autres": [
        {
          "titre": "Touches",
          "texte": "Open ▲ : commande l'ouverture, ou monte vers le haut dans la programmation. Stop/Set : arrête la manœuvre ; maintenu, entre en programmation et valide. Close ▼ : commande la fermeture, ou descend dans la programmation. La notice annonce « plus de 5 s » pour entrer en programmation à la section 7.1, mais ses procédures disent environ 3 s (tableaux 8 et 10)."
        },
        {
          "titre": "LED L1…L8 en marche normale",
          "texte": "L1 allumée : fermeture automatique active. L2 : refermeture après passage devant la photocellule. L3 : ferme toujours. L4 : ralentissement. L5 : démarrage. L6 : préclignotement. L7 : « fermeture » devient ouverture partielle. L8 : RUN configuré en Slave (éteinte = Master). Éteinte = fonction non active. (Dans le tableau 23 de la notice, la LED L4 est appelée « stand-by » au lieu de « ralentissement ».)"
        },
        {
          "titre": "LED qui clignotent en marche normale",
          "texte": "L1 + L2 ensemble : reconnaissance des dispositifs à faire. L3 + L4 ensemble : reconnaissance de la longueur du tablier à faire. Une seule LED qui clignote : programmation en cours."
        },
        {
          "titre": "LED sur les bornes",
          "texte": "BLUEBUS : 1 clignotement par seconde = tout est normal ; 2 rapides = changement d'état d'une entrée ; éteinte ou allumée fixe = anomalie. STOP : allumée au repos, éteinte = entrée STOP intervenue. P.P., OPEN, CLOSE : allumées quand l'entrée correspondante est activée."
        },
        {
          "titre": "Historique des anomalies",
          "texte": "Pour voir les anomalies des 8 dernières manœuvres : Stop/Set 3 s, aller sur L8, maintenir Stop/Set. La LED de chaque manœuvre avec anomalie s'allume (L1 = la plus récente, L8 = la huitième). Pour choisir la manœuvre, la notice dit « presser les touches ▲ et ▼ » (sans préciser si c'est l'une ou l'autre) : la LED fait alors autant de clignotements que le clignotant après cette anomalie."
        }
      ]
    },
    "parametres": {
      "intro": "Deux niveaux de réglage, sur les LED L1…L8. 1er niveau : 8 fonctions ON-OFF (LED allumée = active, tout est sur OFF en usine). 2e niveau : 8 paramètres à 8 valeurs chacun. Maximum 10 s entre deux appuis, sinon la procédure se termine en mémorisant ce qui a été fait.",
      "navigation": [
        "1er niveau : maintenir Stop/Set environ 3 s, relâcher quand L1 clignote. ▲ / ▼ pour aller sur la LED de la fonction. Stop/Set une fois pour changer l'état (clignotement bref = OFF, long = ON). Attendre 10 s pour sortir.",
        "2e niveau : maintenir Stop/Set environ 3 s, relâcher quand L1 clignote. ▲ / ▼ pour aller sur la LED d'entrée du paramètre. Maintenir Stop/Set (pendant toute la suite), attendre environ 3 s : la LED du niveau actuel s'allume. ▲ / ▼ pour aller sur la nouvelle valeur, relâcher Stop/Set. Attendre 10 s pour sortir.",
        "Vérifier le compteur de manœuvres : entrer en programmation, aller sur L7, maintenir Stop/Set (environ 3 s, la LED du niveau s'allume), puis appuyer brièvement sur ▲ et ▼ ensemble. La LED du niveau clignote : chaque clignotement vaut 10 % de la limite (par exemple 4 clignotements avec L5 = 10 000 manœuvres : 40 % atteint, soit entre 4 000 et 4 999). Aucun clignotement : moins de 10 %.",
        "Remise à zéro du compteur après maintenance : même chemin jusqu'à la LED du niveau (sur L7), puis maintenir ▲ et ▼ ensemble au moins 5 s. La LED fait une série de clignotements rapides pour confirmer. Relâcher Stop/Set."
      ],
      "groupes": [
        {
          "nom": "1er niveau — fonctions ON-OFF (toutes sur OFF en usine)",
          "items": [
            {
              "code": "L1",
              "def": "OFF",
              "titre": "Fermeture automatique",
              "valeurs": [
                [
                  "ON",
                  "Fermeture automatique du portail après le temps de pause (30 s en usine, réglable avec le paramètre L1 du 2e niveau)."
                ],
                [
                  "OFF",
                  "Fonctionnement semi-automatique."
                ]
              ]
            },
            {
              "code": "L2",
              "def": "OFF",
              "titre": "Refermeture après passage devant la photocellule",
              "valeurs": [
                [
                  "ON",
                  "Garde le portail ouvert le temps du passage : l'intervention d'une « Photo » provoque toujours une refermeture avec une pause de 5 s, quelle que soit la valeur programmée. Si la fermeture automatique (L1) est inactive, le portail va toujours en ouverture totale (même si la photocellule est libérée avant) et la libération de la photocellule provoque la refermeture au bout de 5 s. Si elle est active, la manœuvre s'arrête juste après libération des photocellules et la refermeture démarre 5 s plus tard. Fonction toujours désactivée dans les manœuvres interrompues par une commande de Stop."
                ],
                [
                  "OFF",
                  "Le temps de pause est celui qui est programmé ; pas de refermeture automatique si la fermeture automatique (L1) est inactive."
                ]
              ]
            },
            {
              "code": "L3",
              "def": "OFF",
              "titre": "Ferme toujours",
              "valeurs": [
                [
                  "ON",
                  "Si, au retour de l'alimentation, la logique détecte le portail ouvert, elle provoque une fermeture précédée de 5 s de préclignotement."
                ],
                [
                  "OFF",
                  "Au retour de l'alimentation, le portail reste immobile."
                ]
              ]
            },
            {
              "code": "L4",
              "def": "OFF",
              "titre": "Ralentissement",
              "valeurs": [
                [
                  "ON",
                  "Phase de ralentissement en fin d'ouverture et de fermeture, à environ 60 % de la vitesse nominale. Attention : le moteur ne développe alors que la moitié du couple nominal, à éviter sur les portails lourds ou qui demandent beaucoup de couple."
                ],
                [
                  "OFF",
                  "Vitesse constante pendant toute la manœuvre."
                ]
              ]
            },
            {
              "code": "L5",
              "def": "OFF",
              "titre": "Démarrage",
              "valeurs": [
                [
                  "ON",
                  "L'accélération progressive du début de chaque manœuvre est désactivée : force de démarrage maximale, utile en cas de frictions statiques élevées (neige, givre)."
                ],
                [
                  "OFF",
                  "La manœuvre démarre avec une accélération progressive."
                ]
              ]
            },
            {
              "code": "L6",
              "def": "OFF",
              "titre": "Préclignotement",
              "valeurs": [
                [
                  "ON",
                  "Pause de 3 s entre l'allumage du clignotant et le début de la manœuvre."
                ],
                [
                  "OFF",
                  "Le clignotant s'allume en même temps que le début de la manœuvre."
                ]
              ]
            },
            {
              "code": "L7",
              "def": "OFF",
              "titre": "« Fermeture » devient ouverture partielle",
              "valeurs": [
                [
                  "ON",
                  "Toutes les commandes de « fermeture » (entrée CLOSE ou commande radio « fermeture ») activent une ouverture partielle, d'une longueur réglée avec le paramètre L6 du 2e niveau."
                ],
                [
                  "OFF",
                  "L'entrée CLOSE commande la fermeture."
                ]
              ]
            },
            {
              "code": "L8",
              "def": "OFF",
              "titre": "Mode Slave (esclave)",
              "valeurs": [
                [
                  "ON",
                  "RUN devient Slave : il synchronise 2 moteurs sur des parties mobiles opposées. Les autres réglages du Slave sont ignorés, sauf Stand-by, Démarrage, Mode Slave et, au 2e niveau, sensibilité d'obstacles, sortie S.C.A., contrôle de force et liste des anomalies."
                ],
                [
                  "OFF",
                  "RUN est Master (réglage d'usine)."
                ]
              ]
            }
          ]
        },
        {
          "nom": "2e niveau — paramètres réglables (LED d'entrée L1…L8, 8 valeurs chacun)",
          "items": [
            {
              "code": "2·L1",
              "def": "L3 · 30 s",
              "titre": "Temps de pause",
              "valeurs": [
                [
                  "L1",
                  "5 s"
                ],
                [
                  "L2",
                  "15 s"
                ],
                [
                  "L3",
                  "30 s (usine)"
                ],
                [
                  "L4",
                  "45 s"
                ],
                [
                  "L5",
                  "60 s"
                ],
                [
                  "L6",
                  "80 s"
                ],
                [
                  "L7",
                  "120 s"
                ],
                [
                  "L8",
                  "180 s"
                ]
              ],
              "note": "Temps avant la refermeture automatique. N'a d'effet que si la fermeture automatique (1er niveau, L1) est active."
            },
            {
              "code": "2·L2",
              "def": "L2",
              "titre": "Fonction P.P.",
              "valeurs": [
                [
                  "L1",
                  "Ouverture – stop – fermeture – stop"
                ],
                [
                  "L2",
                  "Ouverture – stop – fermeture – ouverture (usine)"
                ],
                [
                  "L3",
                  "Ouverture – fermeture – ouverture – fermeture"
                ],
                [
                  "L4",
                  "Fonctionnement collectif"
                ],
                [
                  "L5",
                  "Fonctionnement collectif 2 (plus de 2 s = arrêt)"
                ],
                [
                  "L6",
                  "Pas à pas 2 (moins de 2 s = ouverture partielle)"
                ],
                [
                  "L7",
                  "Commande « par action maintenue »"
                ],
                [
                  "L8",
                  "Ouverture en semi-automatique, fermeture par action maintenue"
                ]
              ],
              "note": "Séquence des commandes associées à l'entrée P.P. et à la première commande radio. Une commande P.P. de plus de 2 s provoque toujours une ouverture (fonction « ouvre toujours », utile avec une horloge), sauf en fonctionnement collectif."
            },
            {
              "code": "2·L3",
              "def": "L4",
              "titre": "Sensibilité de détection des obstacles",
              "valeurs": [
                [
                  "L1",
                  "Extrêmement élevée (portails légers)"
                ],
                [
                  "L2",
                  "Très élevée"
                ],
                [
                  "L3",
                  "Élevée"
                ],
                [
                  "L4",
                  "Moyenne (usine)"
                ],
                [
                  "L5",
                  "Moyenne à basse"
                ],
                [
                  "L6",
                  "Basse"
                ],
                [
                  "L7",
                  "Très basse"
                ],
                [
                  "L8",
                  "Extrêmement basse (portails lourds)"
                ]
              ],
              "note": "Elle dépend aussi de la force du moteur (2·L5) : régler la force d'abord, la sensibilité ensuite. Si elle sert à réduire la force d'impact, refaire la mesure selon EN 12445 après chaque réglage."
            },
            {
              "code": "2·L4",
              "def": "L1",
              "titre": "Sortie S.C.A.",
              "valeurs": [
                [
                  "L1",
                  "Voyant « portail ouvert » (usine)"
                ],
                [
                  "L2",
                  "Active si le tablier est fermé"
                ],
                [
                  "L3",
                  "Active si le tablier est ouvert"
                ],
                [
                  "L4",
                  "Active avec la sortie radio n° 2"
                ],
                [
                  "L5",
                  "Active avec la sortie radio n° 3"
                ],
                [
                  "L6",
                  "Active avec la sortie radio n° 4"
                ],
                [
                  "L7",
                  "Voyant de maintenance"
                ],
                [
                  "L8",
                  "Serrure électrique"
                ]
              ],
              "note": "Quand elle est active, la sortie fournit 24 V (−30 / +50 %), 4 W maximum."
            },
            {
              "code": "2·L5",
              "def": "L8",
              "titre": "Contrôle de la force du moteur",
              "valeurs": [
                [
                  "L1",
                  "Fixe à 40 %"
                ],
                [
                  "L2",
                  "Fixe à 50 %"
                ],
                [
                  "L3",
                  "Fixe à 60 %"
                ],
                [
                  "L4",
                  "Fixe à 80 %"
                ],
                [
                  "L5",
                  "Fixe à 100 %"
                ],
                [
                  "L6",
                  "Semi-automatique 1 : 40 à 100 %"
                ],
                [
                  "L7",
                  "Semi-automatique 2 : 60 à 100 %"
                ],
                [
                  "L8",
                  "Automatique : 0 à 100 % (usine)"
                ]
              ],
              "note": "Règle la force après le démarrage pour l'adapter au poids du portail ; elle augmente aussi automatiquement par grand froid. Semi-automatique : réglage automatique en gardant un minimum de force garanti. Ne pas compenser des frictions anormales avec une force élevée : cela peut compromettre la sécurité ou abîmer le portail."
            },
            {
              "code": "2·L6",
              "def": "L2",
              "titre": "Ouverture partielle",
              "valeurs": [
                [
                  "L1",
                  "0,5 m"
                ],
                [
                  "L2",
                  "1 m (usine)"
                ],
                [
                  "L3",
                  "1,5 m"
                ],
                [
                  "L4",
                  "2 m"
                ],
                [
                  "L5",
                  "2,5 m"
                ],
                [
                  "L6",
                  "3 m"
                ],
                [
                  "L7",
                  "3,4 m"
                ],
                [
                  "L8",
                  "4 m"
                ]
              ],
              "note": "Se commande avec la 2e commande radio, ou avec « fermeture » si le 1er niveau L7 est actif."
            },
            {
              "code": "2·L7",
              "def": "L1 · auto",
              "titre": "Avis de maintenance",
              "valeurs": [
                [
                  "L1",
                  "Automatique, selon la charge de travail des manœuvres (usine)"
                ],
                [
                  "L2",
                  "2 000 manœuvres"
                ],
                [
                  "L3",
                  "4 000"
                ],
                [
                  "L4",
                  "7 000"
                ],
                [
                  "L5",
                  "10 000"
                ],
                [
                  "L6",
                  "15 000"
                ],
                [
                  "L7",
                  "20 000"
                ],
                [
                  "L8",
                  "30 000"
                ]
              ],
              "note": "Nombre de manœuvres avant la demande de maintenance (signalée par le clignotant, ou par le voyant sur S.C.A. s'il est réglé en « voyant maintenance »). Le niveau automatique tient compte de l'effort et de la durée des manœuvres. Maintenance conseillée au plus tard tous les 6 mois ou 20 000 manœuvres."
            },
            {
              "code": "2·L8",
              "def": "lecture",
              "titre": "Liste des anomalies",
              "valeurs": [
                [
                  "L1",
                  "Résultat de la manœuvre la plus récente"
                ],
                [
                  "L2",
                  "2e manœuvre"
                ],
                [
                  "L3",
                  "3e manœuvre"
                ],
                [
                  "L4",
                  "4e manœuvre"
                ],
                [
                  "L5",
                  "5e manœuvre"
                ],
                [
                  "L6",
                  "6e manœuvre"
                ],
                [
                  "L7",
                  "7e manœuvre"
                ],
                [
                  "L8",
                  "8e manœuvre"
                ]
              ],
              "note": "Lecture seule : permet de voir le type d'anomalie des 8 dernières manœuvres (voir l'onglet Écran)."
            }
          ]
        }
      ]
    },
    "bornier": {
      "groupes": [
        {
          "nom": "Alimentation",
          "bornes": [
            {
              "n": "L · terre · N",
              "label": "Secteur",
              "desc": "230-250 V ±10 % 50/60 Hz (version /V1 : 120 V +10 % −15 % 60 Hz). Câble 3 × 1,5 mm², 30 m maximum, seul dans le petit passage de câble. Mise à la terre obligatoire (classe 1). Protéger par un disjoncteur magnétothermique avec différentiel et prévoir un sectionneur (3,5 mm entre contacts).",
              "t": "alim"
            },
            {
              "n": "24 V accessoires",
              "label": "24 Vcc, 100 mA",
              "desc": "Pour alimenter un lecteur de proximité ou l'éclairage d'un sélecteur à clé : prélever 24 Vcc (−30 / +50 %), 100 mA maximum, comme sur la fig. 27 : « − » sur la 2e borne du bloc STOP (celle qui touche le bloc P.P.), « + » sur la 1re borne du bloc P.P.",
              "t": "alim"
            }
          ]
        },
        {
          "nom": "Sorties",
          "bornes": [
            {
              "n": "FLASH",
              "label": "Clignotant",
              "desc": "Clignotant type LUCYB ou similaire, ampoule 12 V 21 W maximum (le tableau p. 76 parle de « 2 clignotants LUCYB », la section 3.6 d'une seule ampoule). Câble 2 × 0,5 mm², 20 m. L'antenne est incorporée au LUCY B.",
              "t": "sortie"
            },
            {
              "n": "S.C.A.",
              "label": "Voyant portail ouvert",
              "desc": "Voyant 24 V 4 W maximum, fonction réglable (2e niveau, L4) : L1 voyant portail ouvert, L2 active si fermé, L3 active si ouvert, L4 à L6 sorties radio 2 à 4, L7 voyant de maintenance, L8 serrure électrique.",
              "t": "sortie"
            },
            {
              "n": "BLUEBUS",
              "label": "BlueBUS",
              "desc": "2 fils sans polarité (alimentation et signaux) pour photocellules, boutons, voyants et dispositifs compatibles, 15 unités BlueBUS au maximum. 30 m, jusqu'à 50 m avec un câble 2 × 1 mm². Chaque dispositif a une adresse (cavaliers).",
              "t": "bus"
            }
          ]
        },
        {
          "nom": "Entrées",
          "bornes": [
            {
              "n": "STOP",
              "label": "STOP",
              "desc": "Arrêt immédiat suivi d'une brève inversion. Contact NO, NF ou résistance constante 8,2 kΩ, type reconnu à la reconnaissance des dispositifs. Seule la résistance 8,2 kΩ garantit la catégorie 3 (EN 954-1).",
              "t": "nf"
            },
            {
              "n": "P.P.",
              "label": "Pas à pas",
              "desc": "Contact normalement ouvert ; la fermeture commande P.P. Sa séquence se règle avec 2·L2.",
              "t": "no"
            },
            {
              "n": "OPEN",
              "label": "Ouverture",
              "desc": "Contact normalement ouvert : commande l'ouverture uniquement.",
              "t": "no"
            },
            {
              "n": "CLOSE",
              "label": "Fermeture",
              "desc": "Contact normalement ouvert : commande la fermeture uniquement (ou l'ouverture partielle si le 1er niveau L7 est actif).",
              "t": "no"
            },
            {
              "n": "ANTENNE",
              "label": "Antenne radio",
              "desc": "Entrée 52 Ω pour câble RG58 ou analogue, 20 m maximum (moins de 5 m conseillé).",
              "t": "autre"
            }
          ]
        },
        {
          "nom": "Connecteurs et sélecteur",
          "bornes": [
            {
              "n": "Sélecteur de sens",
              "label": "Sens d'ouverture",
              "desc": "Si le tablier s'ouvre vers la gauche, mettre le sélecteur à gauche (fig. 17) ; vers la droite, le mettre à droite (fig. 18).",
              "t": "autre"
            },
            {
              "n": "SM",
              "label": "Récepteur radio",
              "desc": "Connecteur pour récepteur SMXI, SMXIS ou ONEXI (433,92 MHz, rolling code), à embrocher hors tension. Sorties SMXI / SMXIS : n° 1 = P.P., n° 2 = ouverture partielle, n° 3 = ouverture, n° 4 = fermeture.",
              "t": "bus"
            },
            {
              "n": "BusT4",
              "label": "Programmateur Oview",
              "desc": "Connecteur pour l'unité de programmation à distance Oview (jusqu'à 100 m de câble, 4 conducteurs). Couper la membrane pour y accéder. Permet aussi la mise à jour du micrologiciel et, entre autres, d'activer le chauffage du moteur.",
              "t": "bus"
            },
            {
              "n": "Bords sensibles",
              "label": "Bords mobiles",
              "desc": "Sur un tablier coulissant, un bord mobile se connecte avec un dispositif qui accepte le tablier en mouvement, par exemple le photodétecteur FT210B (limitation de force type C et détecteur de présence type D, EN 12453). Émetteur alimenté par batterie, jusqu'à 15 ans.",
              "t": "autre"
            }
          ]
        }
      ],
      "fusibles": "F1 et F2 (fig. 28) — la notice ne donne pas leurs valeurs : si l'un a sauté, chercher la cause puis le remplacer par un fusible de même valeur et mêmes caractéristiques",
      "notes": [
        "Après tout ajout ou retrait de dispositif sur BlueBUS ou STOP : refaire la reconnaissance des dispositifs (onglet Apprentissage), puis refaire l'essai de l'automatisme.",
        "STOP : 2 dispositifs à résistance 8,2 kΩ peuvent aller en parallèle ; au-delà de 2, tous en cascade avec une seule résistance terminale de 8,2 kΩ. Plusieurs NO se montent en parallèle, plusieurs NF en série. NO et NF peuvent être combinés en parallèle en mettant 8,2 kΩ en série avec le NF.",
        "Photocellules BlueBUS : mêmes cavaliers sur TX et RX, une adresse par paire. Adresses : PHOTO (extérieure h = 50, intervention en fermeture) · PHOTO II (extérieure h = 100, fermeture) · PHOTO 1 (intérieure h = 50, fermeture) · PHOTO 1 II (intérieure h = 100, fermeture) · PHOTO 2 (extérieure, intervention en ouverture) · PHOTO 2 II (intérieure, ouverture) · PHOTO 3 (une seule paire pour tout l'automatisme).",
        "Câbles (tableau 5) : alimentation 3 × 1,5 mm² 30 m · clignotant 2 × 0,5 mm² 20 m · antenne RG58 20 m · photocellules 2 × 0,5 mm² 30 m (50 m en 2 × 1 mm²) · sélecteur à clé 2 câbles 2 × 0,5 mm² (ou 1 câble 4 × 0,5) 50 m · connexion entre les deux bords mobiles 2 × 0,5 mm² 20 m · connexion des bords mobiles 2 × 0,5 mm² 30 m. Au-delà de 30 m d'alimentation : section plus grande (3 × 2,5 mm²) et mise à la terre près de l'automatisme.",
        "Deux RUN sur des parties mobiles opposées (Master / Slave), dans cet ordre : installer les 2 moteurs (fig. 25) · relier les deux RUN par BlueBUS en respectant la polarité (fig. 26) · choisir le sens d'ouverture de chacun · alimenter les 2 moteurs · activer « mode Slave » sur le Slave (1er niveau, L8) · reconnaissance des dispositifs sur le Slave, puis sur le Master · reconnaissance de la longueur sur le Master seulement. Le choix du Master dépend de la commodité des connexions. Tous les dispositifs, récepteur radio compris, se branchent sur le Master. Sur le Slave on peut brancher un clignotant, un voyant S.C.A. et un bord sensible (STOP) spécifiques, et un P.P. qui ouvre en totalité seulement la partie commandée par le Slave ; OPEN et CLOSE du Slave ne servent pas.",
        "Caractéristiques : couple maximum au démarrage 40 Nm (RUN1800) ou 50 Nm (RUN2500) ; couple nominal 20 ou 30 Nm ; vitesse 0,17 m/s à vide en 50 Hz (0,20 m/s en /V1 60 Hz), 0,14 m/s au couple nominal ; tablier jusqu'à 15 m / 1 800 kg (RUN1800) ou 18 m / 2 500 kg (RUN2500) ; pignon 18 dents module 4 ; IP 44 ; −20 à +50 °C ; poids 24,5 kg ; puissance au démarrage 700 W (RUN1800) ou 870 W (RUN2500).",
        "Limites : la force pour mettre le tablier en mouvement doit rester sous la moitié du couple maximum et la force pour le maintenir en mouvement sous la moitié du couple nominal (la section 2.1 ne parle que du couple nominal). La logique limite les manœuvres selon l'effort, la durée et la température (jusqu'à 42 cycles/heure pour un tablier de moins de 6 m ; réduction selon le poids)."
      ]
    },
    "apprentissage": {
      "avant": [
        "Mettre le tablier à mi-course environ pour qu'il puisse bouger dans les deux sens.",
        "Choisir le sens d'ouverture avec le sélecteur de la logique (fig. 17 gauche, fig. 18 droite).",
        "Fin de course électromécanique (RUN1800, RUN2500) : ouvrir le portail à la main en s'arrêtant à 2-3 cm au moins de la butée, faire glisser la patte sur la crémaillère dans le sens d'ouverture jusqu'à l'intervention du fin de course, puis avancer d'au moins 2 cm et bloquer avec les goujons. Même opération en fermeture.",
        "Fin de course inductif (RUN1800P, RUN2500P) : faire glisser la patte jusqu'à l'extinction de la LED correspondante, puis avancer d'au moins 2 cm et bloquer. Distance entre la patte et le capteur : 3 à 8 mm.",
        "Jeu de 1 à 2 mm entre pignon et crémaillère sur toute la longueur, désalignement de 5 mm au maximum.",
        "Mettre sous tension : la LED BLUEBUS doit clignoter 1 fois par seconde, les LED des photocellules clignotent aussi (TX et RX), clignotant et voyant S.C.A. éteints. Sinon, couper aussitôt l'alimentation et revoir les connexions."
      ],
      "etapes": [
        "Reconnaissance des dispositifs : maintenir ▲ (Open) et Stop/Set. Avant cette étape, L1 et L2 clignotent pour la réclamer.",
        "Relâcher quand L1 et L2 clignotent très vite (environ 3 s) et attendre quelques secondes.",
        "Fin : la LED STOP reste allumée, L1 et L2 s'éteignent, puis L3 et L4 se mettent éventuellement à clignoter.",
        "Reconnaissance de la longueur du tablier : maintenir ▼ (Close) et Stop/Set.",
        "Relâcher quand la manœuvre démarre (environ 3 s). Ce doit être une ouverture : sinon appuyer sur Stop et revoir le sélecteur de sens, puis recommencer.",
        "Laisser finir l'ouverture jusqu'au fin de course d'ouverture ; la fermeture commence juste après, attendre qu'elle se termine."
      ],
      "apres": [
        "Contrôle avec Open, puis Close : manœuvre régulière sans changement de vitesse ; ralentissement 70 à 50 cm avant le fin de course, arrêt à 2-3 cm de la butée mécanique.",
        "Pendant la manœuvre le clignotant clignote toutes les 0,5 s ; le voyant S.C.A. s'il est présent clignote lentement en ouverture et vite en fermeture.",
        "Chaque fois qu'un dispositif de sécurité intervient, la LED BLUEBUS fait 2 clignotements rapides.",
        "Essai (EN 12445) : débrayer et vérifier que le tablier se manœuvre à la main avec au plus 390 N (environ 40 kg), rebloquer, puis tester un par un tous les dispositifs de sécurité.",
        "Débrayage : faire coulisser le cache de la serrure, introduire la clé et la tourner dans le sens des aiguilles d'une montre, tirer la poignée de débrayage, puis déplacer le tablier à la main. Possible uniquement tablier à l'arrêt. Pour bloquer : même chose en sens inverse.",
        "Maintenance : au plus tard tous les 6 mois ou 20 000 manœuvres. Après maintenance, remettre le compteur de manœuvres à zéro (onglet Paramètres).",
        "Après tout ajout ou retrait de dispositif : refaire la reconnaissance des dispositifs (▲ + Stop/Set), les LED L1…L8 se rallument ensuite selon l'état des fonctions."
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
    afficheur: {
      intro: "Afficheur 4 caractères à 7 segments avec 3 touches (+, −, OK). La notice ne donne pas de signification segment par segment : l'afficheur sert aux menus, aux diagnostics d'entrées et aux codes d'erreur (onglet Codes). Deux signes particuliers : le point et les lettres C / O.",
      ecrans: [],
      reperes: {},
      regles: [],
      autres: [
        { titre: "Touches", texte: "+ monter · − descendre · OK confirmer / allumer l'afficheur. + et − ensemble : sortir (ESC). Afficheur éteint : + (moins de 2 s) = OPEN / STOP, − (moins de 2 s) = CLOSE / STOP. Un mot de passe (usine 1234) est demandé si le niveau de protection est de 1 à 4 ; après 10 essais faux : BLOC pendant 3 minutes." },
        { titre: "Menus", texte: "OK une fois : menu simplifié (langue, dir, preset, autoset, radio). OK deux fois : menu avancé : PARAM, LOGIC, RADIO, DEFAULT, LANGUE, AUTOSET, STAT, PASSWORD. Langues : itA, FrA, dEu, EnG, ESP." },
        { titre: "Point au dernier chiffre", texte: "Un point allumé après le dernier chiffre indique le mode basse consommation (PSAVE 1) : 10 s après l'arrêt du moteur, les bornes 50-51 ne sont plus alimentées. Pour régler des accessoires (alignement des photocellules) ou si un accessoire exige une alimentation continue (récepteur radio, bord actif) : mettre PSAVE à 0." },
        { titre: "Lettres C et O", texte: "Un « C » seul à l'écran : entrée de fin de course fermeture (SWC) activée, portail fermé. Un « O » seul : fin de course ouverture (SWO) activée, portail ouvert. Rien d'affiché : portail à mi-course." },
        { titre: "Pendant l'utilisation", texte: "« 35.40 » : force instantanée du moteur / force réglée par l'autoset (figure de la notice). « SET » : la carte attend une manœuvre complète d'ouverture-fermeture sans interruption, détection d'obstacle inactive. « .... .... .... » : autoset en cours (1 à 3 manœuvres), ne pas toucher aux commandes ; à la fin, ok ou KO. « STRE, STRI, OPEN, CLS, PED, TIME, STOP, PHOT, PHOP, PHCL, BAR, BARO, BARC » : entrée activée (diagnostic, voir Codes)." },
        { titre: "Menu STAT", texte: "Version du logiciel, nombre de manœuvres (en centaines), nombre de radiocommandes, 30 dernières erreurs. Chaque erreur s'affiche sous la forme 01.33 : 2 premiers chiffres = rang (01 = la plus récente), 2 derniers = code." },
        { titre: "Retour usine", texte: "rSt s'affiche : confirmer par OK (YES / ok). Procédure : secteur coupé, entrée STOP ouverte (pont 70-71 retiré), maintenir − et OK, remettre sous tension. Efface aussi toutes les radiocommandes : refaire un autoset." }
      ]
    },
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
    afficheur: {
      intro: "Afficheur 4 caractères à 7 segments avec 3 touches (+, −, OK). Contrairement aux cartes Roger, la notice ne donne pas de signification segment par segment : l'afficheur sert aux menus, aux diagnostics d'entrées et aux codes d'erreur. Les codes d'erreur et de diagnostic sont dans l'onglet Codes.",
      ecrans: [],
      reperes: {},
      regles: [],
      autres: [
        { titre: "Touches", texte: "+ monter · − descendre · OK confirmer / allumer l'afficheur. Pour sortir d'un menu : appuyer sur + et − ensemble. Un mot de passe (usine 1234) est demandé si le niveau de protection est de 1 à 4 ; après 10 essais faux l'afficheur indique BLOC pendant 3 minutes." },
        { titre: "Menus affichés (OK pour entrer)", texte: "PARAM (paramètres, tableau A) · LOGIC (logiques, tableau B) · RADIO (tableau C) · DEFAULT (retour usine) · LANGUE (itA, FrA, dEu, EnG, ESP) · AUTOSET (autoconfiguration, LEO B CBB 3 230 L02 uniquement) · STAT (statistiques) · PASSWORD (mot de passe). Une pression sur OK à partir de l'afficheur éteint donne accès au menu simplifié (langue, dIr, PrESEt, AutoSEt, mémorisation radio)." },
        { titre: "Menu STAT", texte: "Version du logiciel · nombre de manœuvres (en centaines) · nombre de radiocommandes mémorisées · liste des 30 dernières erreurs. Chaque erreur s'affiche sous la forme 01.33 : 2 premiers chiffres = rang (01 = la plus récente), 2 derniers = code de l'erreur." },
        { titre: "Pendant l'utilisation", texte: "« 35.40 » : seuil d'obstacle (avant le point) et force instantanée du moteur (après), sur LEO B CBB 3 230 L02 seulement. « SEt » : la carte attend une manœuvre complète d'ouverture-fermeture sans interruption, la détection d'obstacle n'est pas active. « .... .... .... » : autoconfiguration en cours (1 à 3 manœuvres), ne pas toucher aux commandes ; à la fin, ok ou ko. « StrE, Str I, oPEn, cLS, PEd, t IME, StoP, Phot, PhoP, PhcL, bAr, bAr 2, SwC, SwO » : entrée activée (diagnostic, voir Codes)." },
        { titre: "Mémorisation radio", texte: "Menu simplifié, MEN TELEC : touche cachée de l'émetteur, relâcher, touche à mémoriser, puis ok 01 s'affiche et F in à la fin. Menu RADIO : AdJ StArt, AdJ 2ch, EFFAcEr 64 (efface toute la mémoire), cod rH (code récepteur), uk (W LINK)." },
        { titre: "Retour usine", texte: "RST s'affiche : confirmer par OK dans les 3 secondes (procédure Fig. H : hors tension, entrée STOP ouverte, appui sur − et OK, remise sous tension). Efface toutes les radiocommandes et rétablit les valeurs d'usine : refaire l'autoconfiguration." }
      ]
    },
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
    "id": "roger-b70-1dchp",
    "nom": "B70/1DCHP",
    "modeles": "Coulissant brushless 36 V BG30 : /1600 · /1603 · /1604 · /2200 · /2203 · /2204 · /1003/HS · /1004/HS · /803/HS · /804/HS · /1504/HS · /1804/HS · /1404/R (versions 115 V : /115)",
    "type": "Coulissant brushless 36 V — afficheur 4 chiffres, touches UP / DOWN / + / − / PROG / TEST",
    "source": "Notice Roger IS142 Rev.23 (02/09/2026), B70/1DCHP, firmware P3.10",
    "codes": [
      {
        "code": "P3.10",
        "type": "afficheur",
        "titre": "Version du firmware",
        "action": "Affichée quelques secondes à la mise sous tension. Ensuite : état des commandes et sécurités (onglet Écran). Carte neuve ou de rechange : l'écran affiche dAtA et demande l'apprentissage de la course."
      },
      {
        "code": "FUSE",
        "type": "afficheur",
        "titre": "Fusible F1 grillé",
        "action": "Remplacer le fusible, de préférence en l'extrayant et en le réinsérant uniquement hors tension secteur. Si la centrale fonctionne sur batteries, le message n'est pas visible."
      },
      {
        "code": "dAtA",
        "type": "afficheur",
        "titre": "Erreur de saisie de données de course",
        "action": "Carte neuve ou course non apprise : faire l'apprentissage. Sinon : vérifier le réglage des fins de course, appuyer sur TEST et contrôler les sécurités en alarme, refaire l'apprentissage. Peut aussi venir d'un étalonnage échoué : bien attendre que PHAS clignote avant de refermer la poignée de déverrouillage."
      },
      {
        "code": "OFSt",
        "type": "afficheur",
        "titre": "Anomalie de tension d'alimentation / initialisation échouée",
        "action": "Couper l'alimentation, attendre 10 s, remettre. Si ça persiste : remplacer la centrale. TEST masque temporairement l'erreur pour consulter les paramètres."
      },
      {
        "code": "PrOt",
        "type": "afficheur",
        "titre": "Surintensité dans l'onduleur",
        "action": "Appuyer deux fois sur TEST ou donner 3 commandes de suite."
      },
      {
        "code": "SEC0",
        "type": "afficheur",
        "titre": "Mauvais raccordement SEC1 / SEC2 du transformateur",
        "action": "Échanger la connexion entre SEC1 et SEC2."
      },
      {
        "code": "Mot",
        "type": "afficheur",
        "titre": "Moteur non raccordé",
        "action": "Vérifier le câble moteur (bornier X-Y-Z)."
      },
      {
        "code": "FE",
        "type": "afficheur",
        "titre": "Les deux fins de course sont actifs",
        "action": "Vérifier le raccordement des fins de course ou la présence d'objets dans le verrouillage fin de course. Avec des fins de course magnétiques : le fusible F3 de protection de l'alimentation des accessoires est peut-être grillé, le remplacer."
      },
      {
        "code": "xx EE",
        "type": "afficheur",
        "titre": "Erreur de paramètre (ex. 15EE, 21EE)",
        "action": "Le paramètre indiqué a une valeur incorrecte : la corriger et enregistrer."
      },
      {
        "code": "EnE1",
        "type": "afficheur",
        "titre": "Encodeur non branché",
        "action": "Vérifier le raccordement de l'encodeur. Si ça persiste : remplacer l'encodeur."
      },
      {
        "code": "EnE3",
        "type": "afficheur",
        "titre": "Grave dysfonctionnement de l'encodeur",
        "action": "TEST. Si l'erreur revient : éteindre la centrale 5 s puis rallumer. Si ça persiste : remplacer l'encodeur."
      },
      {
        "code": "EnE5",
        "type": "afficheur",
        "titre": "Dysfonctionnement encodeur / alimentation insuffisante / batteries",
        "action": "TEST ; si ça persiste, remplacer l'encodeur. Saleté, humidité ou insectes : couper la tension et nettoyer carte et encodeur. En fonctionnement sur batteries : batteries presque déchargées."
      },
      {
        "code": "EnE8",
        "type": "afficheur",
        "titre": "Erreur de calcul de l'encodeur",
        "action": "Refaire l'apprentissage de la course."
      },
      {
        "code": "tEMP",
        "type": "afficheur",
        "titre": "Protection thermique de l'onduleur",
        "action": "Le fonctionnement reprend tout seul dans les 2 minutes."
      },
      {
        "code": "btLO",
        "type": "afficheur",
        "titre": "Batteries déchargées (btLO)",
        "action": "Attendre le retour de la tension secteur. La centrale n'accepte plus de commande."
      },
      {
        "code": "bNod",
        "type": "afficheur",
        "titre": "Type de batterie mal sélectionné",
        "action": "Modifier la valeur du paramètre 87."
      },
      {
        "code": "HbUS",
        "type": "afficheur",
        "titre": "Tension secteur trop élevée",
        "action": "Vérifier la tension du réseau et la tension du BUS (mode INFO, valeur bUS). Contacter le service après-vente. Un appui sur TEST fait disparaître le message 7 s après la dernière action sur les touches."
      },
      {
        "code": "bAtt",
        "type": "afficheur",
        "titre": "Fonctionnement sur batteries (kit B71/BCHP)",
        "action": "Coupure secteur : la centrale tourne sur batteries et le clignotant s'active par intermittence, jusqu'au retour du réseau ou jusqu'au seuil de sécurité (btLO). Le seuil se règle avec le paramètre 85."
      },
      {
        "code": "COM1",
        "type": "afficheur",
        "titre": "Communication RS485 MASTER / SLAVE absente",
        "action": "Vérifier les bornes COM-LNA-LNB, le paramètre A0 et la présence du kit batteries sur les deux centrales."
      },
      {
        "code": "COM2",
        "type": "afficheur",
        "titre": "Deux centrales MASTER détectées",
        "action": "Vérifier le paramètre A0."
      },
      {
        "code": "COM3",
        "type": "afficheur",
        "titre": "Erreur de transfert des paramètres MASTER / SLAVE",
        "action": "Vérifier le branchement COM-LNA-LNB."
      },
      {
        "code": "COM4",
        "type": "afficheur",
        "titre": "Firmwares MASTER / SLAVE incompatibles",
        "action": "Vérifier le paramètre n7 : les deux centrales doivent avoir la même version de communication RS485. Sinon : assistance Roger."
      },
      {
        "code": "StoP",
        "type": "afficheur",
        "titre": "« StoP » clignotant : déblocage ouvert",
        "action": "Refermer la poignée de déverrouillage et tourner la clé en position fermée. Vérifier le raccordement au contact de déverrouillage (SB)."
      },
      {
        "code": "noPH",
        "type": "afficheur",
        "titre": "Anomalie commande moteur / réglage moteur échoué",
        "action": "Vérifier le câble encodeur-moteur, couper et rétablir l'alimentation, refaire l'apprentissage. Vérifier que la poignée de déverrouillage était bien ouverte, que le moteur tourne librement et que la tension secteur est correcte. Si ça persiste : assistance."
      },
      {
        "code": "APPE",
        "type": "afficheur",
        "titre": "Erreur d'apprentissage",
        "action": "TEST appuyé par erreur, sécurité en alarme, chute de tension ou paramètres 30 / 31 mal réglés : TEST pour annuler, contrôler les sécurités, la tension secteur et 30 / 31 selon le poids et la vitesse du vantail, puis refaire l'apprentissage."
      },
      {
        "code": "APPL",
        "type": "afficheur",
        "titre": "Erreur de longueur de course",
        "action": "Portail en fermeture complète (fin de course FC actif) et refaire la procédure. Vérifier le câblage des fins de course. Si la course est inférieure au minimum : l'augmenter. Au besoin : retour aux réglages usine puis apprentissage."
      },
      {
        "code": "APPM",
        "type": "afficheur",
        "titre": "Longueur de course maximale dépassée",
        "action": "Réduire la course ; sinon contacter l'assistance Roger."
      },
      {
        "code": "noLP",
        "type": "afficheur",
        "titre": "Mode « low power » non activé",
        "action": "B70/MODLP endommagé ou contact de relais bloqué : contrôler le récepteur H93/RX2LP/I et le câblage avec le B70/MODLP."
      },
      {
        "code": "SELF",
        "type": "afficheur",
        "titre": "BG30/1400/R réversible : moteur manipulé à la main sans alimentation",
        "action": "Sur le moteur réversible, l'écran s'allume et affiche SELF quand on déplace le portail à la main sans secteur. Manipuler le portail à la main avec modération. Si la force de freinage ne suffit pas et que le portail bouge de plus de 3 cm, une récupération de position démarre."
      },
      {
        "code": "notr",
        "type": "afficheur",
        "titre": "Transformateur éteint par erreur par le B70/MODLP",
        "action": "Même contrôle que noLP (H93/RX2LP/I, câblage, B70/MODLP)."
      },
      {
        "code": "StbY",
        "type": "afficheur",
        "titre": "Passage en veille « low power »",
        "action": "Normal : la centrale passe en veille (afficheur éteint, sorties SC, LAM et COR coupées). Une commande ou une touche la réveille."
      },
      {
        "code": "00",
        "type": "test",
        "titre": "TEST : aucune sécurité en alarme",
        "action": "Aucune sécurité en alarme et aucun fin de course actif."
      },
      {
        "code": "Sb",
        "type": "test",
        "titre": "TEST : poignée de déverrouillage ouverte",
        "action": "Refermer la poignée, clé en position fermée, vérifier le raccordement au contact de déverrouillage. Sans interrupteur, ponter le contact (selon le tableau p. 125 ; la p. 143 ne le dit pas)."
      },
      {
        "code": "17",
        "type": "test",
        "titre": "TEST : contact STOP ouvert",
        "action": "Installer un bouton STOP (NF) ou ponter ST (17) avec COM (16)."
      },
      {
        "code": "15",
        "type": "test",
        "titre": "TEST : bord sensible COS1 ouvert",
        "action": "Vérifier le raccordement. Bord absent : régler 73 00 ou ponter COS1 (15) avec COM (16)."
      },
      {
        "code": "14",
        "type": "test",
        "titre": "TEST : bord sensible COS2 ouvert",
        "action": "Vérifier le raccordement. Bord absent : régler 74 00 ou ponter COS2 (14) avec COM (16)."
      },
      {
        "code": "13",
        "type": "test",
        "titre": "TEST : photocellule FT1 ouverte",
        "action": "Vérifier la cellule et le câblage. Absente : régler 50 00 et 51 00 ou ponter FT1 (13) avec COM (30)."
      },
      {
        "code": "12",
        "type": "test",
        "titre": "TEST : photocellule FT2 ouverte",
        "action": "Vérifier la cellule et le câblage. Absente : régler 53 00 et 54 00 ou ponter FT2 (12) avec COM (30)."
      },
      {
        "code": "FE (TEST)",
        "type": "test",
        "titre": "TEST : les deux fins de course ont le contact ouvert ou ne sont pas raccordés",
        "action": "Les deux fins de course ont le contact ouvert ou ne sont pas raccordés : vérifier les raccordements et le réglage. Fins de course magnétiques : le fusible F3 est peut-être grillé, le remplacer."
      },
      {
        "code": "FA",
        "type": "test",
        "titre": "TEST : fin de course d'ouverture actif",
        "action": "Normal si le portail est ouvert. Indication fausse : vérifier le paramètre 71 (position du moteur), ou le câblage si le fin de course est absent."
      },
      {
        "code": "FC",
        "type": "test",
        "titre": "TEST : fin de course de fermeture actif",
        "action": "Normal si le portail est fermé. Indication fausse : vérifier le paramètre 71, ou le câblage si le fin de course est absent."
      },
      {
        "code": "nC",
        "type": "test",
        "titre": "TEST : pas de communication MASTER / SLAVE",
        "action": "A0 différent de 00 (RS485 activée) et aucune communication : voir la gestion MASTER / SLAVE."
      },
      {
        "code": "PP · CH · AP · PE · Or",
        "type": "test",
        "titre": "TEST : commande active sans action",
        "action": "Contact NO défectueux ou bouton mal raccordé : vérifier le contact correspondant avec COM (23) : PP 27, CH 26, AP 25, PED 28, ORO 24. ORO ne doit jamais être shunté s'il n'est pas utilisé."
      },
      {
        "code": "POWER éteinte",
        "type": "led",
        "titre": "LED POWER éteinte",
        "action": "Absence d'alimentation : vérifier le câble. Ou fusible grillé : le remplacer, de préférence hors tension secteur. Si F3 grille de nouveau alors que la centrale commande un moteur High Speed : débrancher le B72/CL (ou le chargeur B71/BCHP HW 02) du connecteur chargeur de batterie et revérifier ; s'il revient, remplacer l'appareil endommagé."
      },
      {
        "code": "POWER clignote",
        "type": "led",
        "titre": "LED POWER clignote, afficheur éteint",
        "action": "Veille après 30 min d'inactivité (L1 00) : appuyer sur une touche."
      },
      {
        "code": "Radio faible",
        "type": "symptome",
        "titre": "La radiocommande a peu de portée ou ne fonctionne pas avec l'automatisme en mouvement",
        "action": "Structures métalliques ou béton armé qui gênent l'émission : installer l'antenne à l'extérieur. Vérifier aussi les piles de l'émetteur."
      },
      {
        "code": "Clignotant HS",
        "type": "symptome",
        "titre": "Le flash clignotant ne fonctionne pas",
        "action": "Ampoule ou LED grillée, ou fils débranchés : vérifier le circuit à LED et les fils (bornes 31-30)."
      },
      {
        "code": "Voyant HS",
        "type": "symptome",
        "titre": "Le voyant portail ouvert ne marche pas",
        "action": "Ampoule grillée ou fils débranchés : vérifier l'ampoule et les fils (bornes 10-11). Utilisable seulement si le low power est désactivé (L1 00)."
      },
      {
        "code": "Mauvaise course",
        "type": "symptome",
        "titre": "Le portail n'effectue pas la manœuvre souhaitée",
        "action": "Configuration incorrecte du paramètre 71 : sélectionner la position d'installation du moteur."
      },
      {
        "code": "Ne s'ouvre pas",
        "type": "symptome",
        "titre": "Le portail ne s'ouvre pas ou ne se ferme pas",
        "action": "Consulter les codes de l'écran (dAtA, OFSt, Mot, FE, EnE…, noPH). Sans code : TEST pour voir la sécurité en alarme (ST 17, COS1 15, COS2 14, FT1 13, FT2 12, Sb déblocage)."
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
              "dp": "SB"
            },
            {
              "seg": {
                "a": "FT2",
                "e": "FA",
                "c": "FC"
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
          "detail": "S'allume à la réception d'une commande d'ouverture (borne 25)."
        },
        "PP": {
          "g": "commande",
          "nom": "Pas-à-pas",
          "repos": "Éteint",
          "detail": "S'allume à la réception d'une commande pas-à-pas (borne 27 ou radio PR1)."
        },
        "CH": {
          "g": "commande",
          "nom": "Fermeture",
          "repos": "Éteint",
          "detail": "S'allume à la réception d'une commande de fermeture (borne 26)."
        },
        "PED": {
          "g": "commande",
          "nom": "Ouverture partielle",
          "repos": "Éteint",
          "detail": "S'allume à la réception d'une commande piéton (borne 28 ou radio PR2)."
        },
        "ORO": {
          "g": "commande",
          "nom": "Horloge",
          "repos": "Éteint",
          "detail": "Allumé tant que le contact horloge (borne 24) est fermé."
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
          "detail": "Éteint = faisceau coupé ou non raccordé (bornes 13-30). Clignotant = désactivé par paramètre."
        },
        "FT2": {
          "g": "securite",
          "nom": "Photocellules FT2",
          "repos": "Allumé",
          "detail": "Éteint = faisceau coupé ou non raccordé (bornes 12-30). Clignotant = désactivé par paramètre."
        },
        "COS1": {
          "g": "securite",
          "nom": "Bord sensible COS1",
          "repos": "Allumé",
          "detail": "Éteint = bord actionné ou non raccordé (bornes 15-16). Clignotant = désactivé (73 00, réglage usine)."
        },
        "COS2": {
          "g": "securite",
          "nom": "Bord sensible COS2",
          "repos": "Allumé",
          "detail": "Éteint = bord actionné ou non raccordé (bornes 14-16). Clignotant = désactivé (74 00, réglage usine)."
        },
        "FA": {
          "g": "securite",
          "nom": "Fin de course d'ouverture",
          "repos": "Allumé",
          "detail": "S'éteint quand le portail est sur le fin de course d'ouverture."
        },
        "FC": {
          "g": "securite",
          "nom": "Fin de course de fermeture",
          "repos": "Allumé",
          "detail": "S'éteint quand le portail est sur le fin de course de fermeture."
        },
        "SB": {
          "g": "securite",
          "nom": "Poignée de déverrouillage",
          "repos": "Allumé",
          "detail": "Éteint = poignée de déverrouillage ouverte."
        },
        "STOP": {
          "g": "securite",
          "nom": "STOP",
          "repos": "Allumé",
          "detail": "Éteint = contact STOP ouvert (bornes 17-16)."
        }
      },
      "regles": [
        "Commandes : segments normalement ÉTEINTS, ils s'allument quand la commande arrive.",
        "Sécurités : segments normalement ALLUMÉS. Éteint = en alarme ou non raccordé. Clignotant = désactivé par son paramètre.",
        "Les segments sans nom ne servent pas dans ce mode."
      ],
      "autres": [
        {
          "titre": "Mode paramètres",
          "texte": "UP / DOWN font défiler : les 2 chiffres de gauche = numéro du paramètre, les 2 de droite = sa valeur. + / − pour modifier ; la valeur clignote, puis l'afficheur clignote vite quand elle est enregistrée. Modification possible seulement moteur à l'arrêt."
        },
        {
          "titre": "Mode TEST (touche TEST, moteur à l'arrêt)",
          "texte": "À gauche pendant 5 s : la commande reçue, seulement si elle est active (AP, CH, PP, PE, Or). À droite : le numéro de la borne de la sécurité en alarme, qui clignote (17 STOP, 15 COS1, 14 COS2, 13 FT1, 12 FT2, Sb déblocage ; FE les deux fins de course). Portail en fin de course : FA ou FC. Flash et voyant portail ouvert s'allument 1 s à chaque commande ou sécurité. Si plusieurs sécurités sont en alarme, la suivante s'affiche quand la première est réglée. TEST pour sortir (sinon retour automatique après 10 s). En MASTER / SLAVE, une sécurité active sur la centrale distante s'affiche avec les points décimaux allumés."
        },
        {
          "titre": "Mode INFO (TEST 5 s, moteur à l'arrêt)",
          "texte": "Défile avec + / − : P3.10 version · Cnt position du moteur en tours par rapport à la longueur totale · Lun longueur de course programmée · rPM vitesse · AMP courant moteur (001.1 = 1,1 A) · bUS bon état de l'installation (230 V : 37.6 · 207 V : 33.6 · 253 V : 41.6) · CMP courant de compensation · ASC seuil de courant de l'anti-écrasement (AMP doit rester inférieur) · tIn temps de détection d'obstacle (doit rester supérieur à 0,3 s) · UP position connue (UP ..) ou en récupération (UP 1.) · OC état (OC OP ouverture, OC CL fermeture, OC -O ouvert à l'arrêt, OC -C fermé à l'arrêt) · UF sous-tension (U) ou surintensité (H) · nPtE interventions de la protection thermique · ErrL erreurs RS485 · ErrC erreurs de protocole (LNA / LNB / COM). Quitter : TEST quelques secondes."
        },
        {
          "titre": "Veille (stand-by)",
          "texte": "Deux cas. 1) L'afficheur seul s'éteint après 30 min d'inactivité, la LED POWER clignote (possible si le low power L1 est à 00). 2) Mode « low power » (L1 01 à 04, avec le B70/MODLP) : la consommation descend à 0,5 W ou moins, le transformateur n'est plus alimenté, les accessoires non plus (photocellules, récepteur externe). L'afficheur indique StbY puis s'éteint 1,5 s après. Réveil : commande du bornier (AP, CH, PP, PE, OR), commande radio ou touche PROG / TEST. Pour les automatismes High Speed et réversibles, le low power est désactivé automatiquement (L1 n'est plus affiché)."
        },
        {
          "titre": "Récupération de position",
          "texte": "Après une coupure ou un déblocage en position intermédiaire : manœuvre lente, clignotant 3 s allumé / 1,5 s éteint. Ne rien commander avant qu'un fin de course soit atteint."
        },
        {
          "titre": "B74/BCONNECT (WIFI)",
          "texte": "Activer avec L0 01 (low power désactivé, L1 00). Écran : ASCC = assistance à distance activée ; L-ES = mode urgence résidentiel actif ; L-EM = mode urgence condominium actif. TEST fait disparaître le message 10 s."
        },
        {
          "titre": "Nouveautés P3.10 (selon la notice)",
          "texte": "Meilleure gestion du freinage lors d'une inversion due au bord sensible ou aux photocellules · protection électronique du variateur renforcée · amélioration de la gestion du B74/BCONNECT, notamment l'activation automatique (par. L0 = 01) pour les automatismes High Speed et réversibles, qui ne peuvent pas activer le low power (L1 non visible) · signalisation par le relais COR améliorée quand le paramètre 20 = 01 (signale, en plus du déverrouillage, d'autres situations empêchant le démarrage du moteur) · inversion accélérée à l'activation de la bande sensible."
        }
      ]
    },
    "parametres": {
      "intro": "Firmware P3.10. Valeur en usine = « usine ». Les paramètres se lisent à tout moment mais ne se modifient que moteur arrêté. Les réglages High Speed (HS) et réversible (R) sont signalés dans chaque paramètre.",
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
              "code": "A0",
              "def": "00",
              "titre": "Communication RS485 MASTER / SLAVE",
              "valeurs": [
                [
                  "00",
                  "Standard (centrale seule)."
                ],
                [
                  "01",
                  "MASTER."
                ],
                [
                  "02",
                  "SLAVE avec copie des paramètres du MASTER. A0 non modifié ; 50 à 55 réglés pour désactiver les photocellules du SLAVE ; 71 opposé au MASTER."
                ],
                [
                  "03",
                  "SLAVE avec paramètres indépendants."
                ]
              ],
              "note": "Paramètres modifiables à la main sur le SLAVE (les deux automatismes peuvent avoir des caractéristiques différentes) : 11, 12, 20, 30, 31, 33, 34, 40, 41, 42, 50 à 55, 71, 73, 74. Avec A0 02, le SLAVE copie la MASTER sauf A0, 50 à 55 (désactivation des photocellules du côté SLAVE si elles sont toutes raccordées à la MASTER) et 71 (valeur opposée à celle de la MASTER)."
            },
            {
              "code": "A1",
              "def": "selon moteur",
              "titre": "Modèle d'automatisme",
              "valeurs": [
                [
                  "01",
                  "BG30/1600 : irréversible, vantail 1600 kg max."
                ],
                [
                  "02",
                  "BG30/2200 : irréversible, vantail 2200 kg max."
                ],
                [
                  "03",
                  "BG30/1000/HS : irréversible High Speed, vantail 1000 kg max."
                ],
                [
                  "04",
                  "BG30/1400/R : réversible (moteur débrayable à la main), vantail 1400 kg max."
                ],
                [
                  "05",
                  "BG30/1800/HS : irréversible High Speed, vantail 1800 kg max."
                ],
                [
                  "06",
                  "BG30/1504/HS : irréversible High Speed, vantail 1500 kg max."
                ],
                [
                  "07",
                  "BG30/804/HS : irréversible High Speed, vantail 800 kg max (la notice écrit 1500 kg à la p. 131 et 800 kg aux pp. 127 et 141)."
                ]
              ],
              "note": "Réglé en usine par Roger pour le moteur. Si la valeur est changée, toutes les caractéristiques High Speed ou réversible sont perdues et le moteur ne fonctionne plus correctement. Après un retour aux valeurs usine : à vérifier (pp. 131 et 139 se contredisent). Choisir 03 à 07 désactive le mode low power : L1 n'est plus affiché. Un mauvais réglage provoque des erreurs de fonctionnement."
            },
            {
              "code": "71",
              "def": "01",
              "titre": "Position du moteur (vue de l'intérieur)",
              "valeurs": [
                [
                  "00",
                  "Moteur installé à gauche (vue de l'intérieur)."
                ],
                [
                  "01",
                  "Moteur installé à droite."
                ]
              ],
              "note": "Après un retour aux valeurs usine : la p. 139 dit que 71 est conservé, la p. 136 dit de le reconfigurer à la main, donc à vérifier."
            },
            {
              "code": "70",
              "def": "00",
              "titre": "Longueur maximale de la course",
              "valeurs": [
                [
                  "00",
                  "Longueur maximale 20 m."
                ],
                [
                  "01",
                  "Longueur maximale 25 m."
                ]
              ],
              "note": "Pour les applications certifiées avec un portail standard de moins de 20 m, utiliser 00."
            },
            {
              "code": "60",
              "def": "01",
              "titre": "Type de fin de course",
              "valeurs": [
                [
                  "00",
                  "Micro-interrupteurs (contact sec)."
                ],
                [
                  "01",
                  "Magnétiques (capteurs à effet Hall)."
                ]
              ],
              "note": "Seul 00 (micro-interrupteurs) permet de surveiller les fins de course en veille : les magnétiques (01) ne sont pas alimentés en stand-by. Un choix correct aide la centrale à gérer les changements d'état (par ex. déplacement manuel après déverrouillage)."
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
                  "Nombre de tentatives de refermeture après passage dans la photocellule."
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
                  "Au retour du courant, ferme après 5 s de préclignotement, en mode récupération de position."
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
                  "Ouvre – stop – ferme – stop."
                ],
                [
                  "01",
                  "Copropriété, temporisation renouvelée (PP ignoré pendant l'ouverture)."
                ],
                [
                  "02",
                  "Copropriété, temporisation non renouvelée (PP ignoré pendant l'ouverture)."
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
              "note": "En 01 / 02 avec A2 00, la copropriété force une tentative de refermeture (comme A2 01)."
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
                  "Préclignotement de 1 à 10 s avant chaque manœuvre."
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
                  "PED en pas-à-pas."
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
                  "Activé : maintenir AP / CH pendant la manœuvre."
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
                  "Voyant : éteint portail fermé, allumé fixe pendant les manœuvres et portail ouvert."
                ],
                [
                  "01",
                  "Voyant : clignote lent en ouverture, fixe ouvert, clignote vite en fermeture, s'éteint 2 fois toutes les 15 s si arrêté à mi-course."
                ],
                [
                  "02",
                  "Sortie SC utilisée pour le test des photocellules."
                ],
                [
                  "03",
                  "Sortie SC utilisée pour le battery saving."
                ],
                [
                  "04",
                  "Battery saving + test photocellules."
                ]
              ],
              "note": "Voyant utilisable seulement si L1 00."
            },
            {
              "code": "15",
              "def": "50",
              "titre": "Ouverture partielle",
              "valeurs": [
                [
                  "10–99",
                  "Pourcentage de la course totale."
                ]
              ]
            },
            {
              "code": "16",
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
              ]
            },
            {
              "code": "21",
              "def": "30",
              "titre": "Temps de fermeture automatique",
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
              "note": "L'intervention des photocellules relance le décompte."
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
                  "Idem avec PED."
                ]
              ]
            },
            {
              "code": "80",
              "def": "00",
              "titre": "Contact horloge",
              "valeurs": [
                [
                  "00",
                  "Horloge active : le portail s'ouvre et reste ouvert, toute commande est ignorée. Fin d'horloge : il se ferme."
                ],
                [
                  "01",
                  "Horloge active : s'ouvre et reste ouvert, les commandes sont acceptées. Revenu complètement ouvert, la fonction horloge reprend."
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
              "note": "Ne s'active pas si : commande d'arrêt reçue ; bord sensible détecte un obstacle dans le même sens ; tentatives A2 épuisées ; position perdue (récupération de position)."
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
              ],
              "note": "Visible seulement si 81 est différent de 00 (01 ou 02)."
            }
          ]
        },
        {
          "nom": "Course : vitesse, ralentissement, accélération",
          "items": [
            {
              "code": "11",
              "def": "04",
              "titre": "Ralentissement en ouverture (et fermeture pour BG30/1600 et BG30/2200)",
              "valeurs": [
                [
                  "01–05",
                  "01 = ralentit près du fin de course … 05 = ralentit bien avant."
                ]
              ],
              "note": "High Speed et réversible : 12 règle la fermeture séparément."
            },
            {
              "code": "12",
              "def": "04",
              "titre": "Ralentissement en fermeture (High Speed et réversible)",
              "valeurs": [
                [
                  "01–05",
                  "01 = ralentit près du fin de course … 05 = ralentit bien avant."
                ]
              ]
            },
            {
              "code": "13",
              "def": "02",
              "titre": "Espace d'approche à vitesse constante, ouverture",
              "valeurs": [
                [
                  "01–40",
                  "01 = les 3 derniers cm … 02 = 6 cm … 40 = 120 cm. Exemple : 100 cm ≈ valeur 35. Vitesse réglée par 42."
                ]
              ]
            },
            {
              "code": "14",
              "def": "02",
              "titre": "Espace d'approche à vitesse constante, fermeture",
              "valeurs": [
                [
                  "01–40",
                  "01 = les 3 derniers cm … 02 = 6 cm … 40 = 120 cm. Vitesse réglée par 42."
                ]
              ]
            },
            {
              "code": "33",
              "def": "04",
              "titre": "Accélération au départ, ouverture (et fermeture pour BG30/1600 et BG30/2200)",
              "valeurs": [
                [
                  "01–05",
                  "01 = démarrage rapide … 05 = démarrage lent et progressif."
                ]
              ]
            },
            {
              "code": "34",
              "def": "04",
              "titre": "Accélération au départ, fermeture (High Speed et réversible)",
              "valeurs": [
                [
                  "01–05",
                  "01 = démarrage rapide … 05 = démarrage lent et progressif."
                ]
              ]
            },
            {
              "code": "40",
              "def": "08",
              "titre": "Vitesse en ouverture (et fermeture pour BG30/1600 et BG30/2200)",
              "valeurs": [
                [
                  "01–10",
                  "01 = 6 m/min … 10 = vitesse maximale."
                ]
              ],
              "note": "Le réglage de la vitesse est réparti automatiquement en 10 niveaux égaux selon le modèle de moteur installé."
            },
            {
              "code": "41",
              "def": "08",
              "titre": "Vitesse en fermeture (High Speed et réversible)",
              "valeurs": [
                [
                  "01–10",
                  "01 = 6 m/min … 10 = vitesse maximale."
                ]
              ],
              "note": "Même répartition en 10 niveaux selon le modèle."
            },
            {
              "code": "42",
              "def": "03",
              "titre": "Vitesse d'approche constante en fin de manœuvre",
              "valeurs": [
                [
                  "01–10",
                  "01 = 2 m/min, 02 = 2,5 m/min, 03 = 3 m/min, 04 = 3,5 m/min, 05 = 4 m/min (la notice ne détaille pas les valeurs 06 à 10 ; plage imprimée 01–10 p. 134, probablement 01–05)."
                ]
              ],
              "note": "Après le ralentissement, le portail continue à vitesse constante jusqu'au fin de course. L'espace est réglé par 13 et 14."
            },
            {
              "code": "36",
              "def": "00",
              "titre": "Couple max d'aide au démarrage (boost)",
              "valeurs": [
                [
                  "00",
                  "Désactivé."
                ],
                [
                  "01",
                  "Seulement à l'ouverture, y compris en récupération de position (en fermeture seulement si position connue et portail à plus de 2 m de la fermeture)."
                ],
                [
                  "02",
                  "À chaque démarrage."
                ]
              ],
              "note": "Couple maxi pendant 5 s ou environ 65 cm. Sur les High Speed, l'accélération est fixe : 2 s à chaque démarrage, indépendamment de 36."
            }
          ]
        },
        {
          "nom": "Couple et détection d'obstacle",
          "items": [
            {
              "code": "30",
              "def": "05",
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
                  "Réglage usine."
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
              "note": "Moins de couple = détection plus sensible. En dessous de 03 : installations légères uniquement."
            },
            {
              "code": "31",
              "def": "15",
              "titre": "Sensibilité à la force d'impact (anti-écrasement)",
              "valeurs": [
                [
                  "01–10",
                  "Couple faible (seulement si le niveau moyen ne convient pas)."
                ],
                [
                  "11–16",
                  "Couple moyen, conseillé."
                ],
                [
                  "17",
                  "Couple 70 %, 1 s."
                ],
                [
                  "18",
                  "Couple 80 %, 2 s."
                ],
                [
                  "19",
                  "Couple maxi, 3 s."
                ],
                [
                  "20",
                  "Couple maxi, 5 s."
                ]
              ],
              "note": "17 à 20 : bord sensible obligatoire. Réaction trop lente → baisser 31. Force trop élevée → baisser 30."
            },
            {
              "code": "37",
              "def": "01",
              "titre": "Couple pendant la récupération de position",
              "valeurs": [
                [
                  "00",
                  "Uniquement selon 30 / 31."
                ],
                [
                  "01",
                  "30 / 31 + courant maxi relevé à l'apprentissage."
                ],
                [
                  "02",
                  "70 %, 1 s."
                ],
                [
                  "03",
                  "80 %, 2 s."
                ],
                [
                  "04",
                  "100 %, 3 s."
                ],
                [
                  "05",
                  "100 %, 5 s."
                ]
              ]
            },
            {
              "code": "27",
              "def": "03",
              "titre": "Temps d'inversion après bord sensible / détection d'obstacle",
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
                  "1 à 3 tentatives (≤ A2 ; seulement si portail complètement ouvert)."
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
              "note": "Non visible si A8 02, 03 ou 04."
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
                  "Sur FT1."
                ],
                [
                  "02",
                  "Sur FT2."
                ]
              ],
              "note": "Non visible si A8 03 ou 04 ; non géré en stand-by."
            },
            {
              "code": "73",
              "def": "00",
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
                  "Lumière de courtoisie (sortie COR) tant que la télécommande est active ; 79 ignoré."
                ],
                [
                  "06",
                  "Lumière de courtoisie pas-à-pas : allume / éteint ; 79 ignoré."
                ],
                [
                  "07",
                  "PAS avec confirmation de sécurité."
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
              "note": "Confirmation : la touche doit être confirmée dans les 2 s par une 2e touche (ex. 76 07 et 77 01 : CHA puis CHB → ouverture partielle). Évite les manœuvres involontaires."
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
                  "Intermittence gérée par le clignotant lui-même."
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
              "code": "20",
              "def": "00",
              "titre": "Mode de la sortie COR",
              "valeurs": [
                [
                  "00",
                  "Lumière de courtoisie standard, gérée par 79."
                ],
                [
                  "01",
                  "Fermée si centrale OK, ouverte en alarme."
                ],
                [
                  "02",
                  "Fermée sur secteur ou batterie chargée ; ouverte si anomalie batterie (seuil 85 ou alarme btLO)."
                ],
                [
                  "03",
                  "Fermée sans anomalie 1 ni 2 ; ouverte si l'une des deux."
                ],
                [
                  "04",
                  "Fermée si portail pas complètement ouvert ; ouverte quand complètement ouvert."
                ],
                [
                  "05",
                  "Fermée si portail pas complètement fermé ; ouverte quand complètement fermé."
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
              "note": "Avec 20 = 00, la sortie COR est gérée par le paramètre 79."
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
                  "Accepte les commandes jusqu'à épuisement de la batterie. À la tension minimum, btLO s'affiche (20 V avec chargeur B71/BCHP ; 23,7 V avec chargeur externe B71/PBX) ; la centrale n'accepte plus de commande."
                ],
                [
                  "01",
                  "Seuil minimum : 22 V (batterie 2×12 V) ; 36,4 V (batterie 3×12 V)."
                ],
                [
                  "02",
                  "Seuil intermédiaire : 23 V (2×12 V) ; 36,8 V (3×12 V)."
                ],
                [
                  "03",
                  "Seuil maximum : 24 V (2×12 V) ; 37,2 V (3×12 V)."
                ]
              ],
              "note": "Quand une valeur autre que 00 est réglée, une commande s'active au niveau de tension de la batterie ; le comportement se règle avec 86 et la signalisation par la sortie COR (20)."
            },
            {
              "code": "86",
              "def": "00",
              "titre": "Limitations sur batterie (au seuil 85, pendant plus de 30 s)",
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
                  "Préclignote 5 s, ouvre et n'accepte plus que l'ouverture."
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
              "code": "87",
              "def": "00",
              "titre": "Type de batterie et réduction de consommation",
              "valeurs": [
                [
                  "00",
                  "Batterie 24 V (2×12 V) avec B71/BCHP : accélérations, décélérations et vitesse réduites pour prolonger la batterie."
                ],
                [
                  "01",
                  "Batterie 36 V (3×12 V) avec chargeur externe B71/PBX : accélérations / décélérations / vitesse réduites."
                ],
                [
                  "02",
                  "Batterie 36 V (3×12 V) avec chargeur externe B71/PBX : aucune réduction, consommation maximale."
                ]
              ],
              "note": "Réglage inapproprié = en l'absence de secteur, blocage des fonctions et message btLO (réglage 01 ou 02 avec batterie 2×12 V), ou signalisation bNod."
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
              "note": "Pas de veille portail ouvert en attente de refermeture (A2, 21), ni pendant le décompte de la fermeture garantie (81, 82), ni tant que la sortie COR est active, ni quand un accessoire est branché sur l'afficheur. Sur les High Speed et réversibles, le low power est désactivé automatiquement : L1 n'est pas visible. Pour activer le stand-by sans attendre : appuyer sur UP, DOWN, + et − ensemble ; l'écran affiche StbY."
            }
          ]
        },
        {
          "nom": "Communication, test et maintenance",
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
              ]
            },
            {
              "code": "89",
              "def": "00",
              "titre": "Gestion des paramètres du SLAVE via B74/BCONNECT sur le MASTER",
              "valeurs": [
                [
                  "00",
                  "Désactivée."
                ],
                [
                  "01",
                  "Le MASTER permet de voir et modifier les paramètres du SLAVE et de sauvegarder ceux du SLAVE sur B-CONNECT."
                ]
              ],
              "note": "Remettre 00 une fois terminé."
            },
            {
              "code": "88",
              "def": "00",
              "titre": "Manœuvres cycliques (modes de test uniquement)",
              "valeurs": [
                [
                  "00",
                  "Désactivées."
                ],
                [
                  "01–90",
                  "Ouverture toutes les 1 à 90 s."
                ],
                [
                  "91–99",
                  "Ouverture toutes les 1 à 9 min."
                ]
              ],
              "note": "Régler aussi A2 et 21. Le cycle complet (ouverture-pause-fermeture) est toujours mené à terme avant le suivant."
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
              "note": "Impossible si un mot de passe est actif : le débloquer avec P1–P4 (CP 00 s'affiche). La restauration élimine toute sélection précédente, sauf A0, A1, 60, 71, 86, 87, 89, L0 et L1 : vérifier que tous les paramètres sont adaptés à l'installation."
            },
            {
              "code": "n0–n7",
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
                ],
                [
                  "n7",
                  "Version communication MASTER/SLAVE RS485."
                ]
              ]
            },
            {
              "code": "oN–o1",
              "def": "lecture",
              "titre": "Compteur de manœuvres",
              "valeurs": [
                [
                  "oN o0 o1",
                  "Lire à la suite × 100. Ex. 01 23 45 → 1 234 500 manœuvres."
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
          "nom": "Puissance (câblé usine)",
          "bornes": [
            {
              "n": "N · terre · L",
              "label": "Secteur",
              "desc": "230 V~ ±10 % 50/60 Hz (115 V~ ±10 % sur B70/1DCHP/115), fusible 5x20 T2A. Câble H07RN-F 3G1,5 : L marron, N bleu, terre jaune/vert. En dehors de la plage de tension, le brushless ne fonctionne pas correctement.",
              "t": "alim"
            },
            {
              "n": "SEC2 · SEC1",
              "label": "Transformateur",
              "desc": "Secondaire : SEC1 = 26 V~ alimentation du moteur ; SEC2 = 19 V~ logique et périphériques. Câblé en usine.",
              "t": "alim"
            },
            {
              "n": "X · Y · Z",
              "label": "Moteur",
              "desc": "Moteur ROGER Brushless. High Speed (BG30) : ajouter le B72/BRAKE/2 (fig. 13). Si les fils ont été débranchés, refaire l'apprentissage de la course.",
              "t": "moteur"
            },
            {
              "n": "BATTERY − / +",
              "label": "Batteries",
              "desc": "Kit batteries B71/BCHP : 2 × 12 V 4,5 Ah, type AGM seulement (voir B71/BCHP).",
              "t": "alim"
            }
          ]
        },
        {
          "nom": "Sorties",
          "bornes": [
            {
              "n": "8 · 9",
              "label": "COR",
              "desc": "Contact libre : éclairage de courtoisie 230 V~ 100 W / 24 V 40 W (prévoir un fusible), ou signalisation (contact fermé / ouvert selon le paramètre 20 : anomalie, batterie, portail ouvert ou fermé).",
              "t": "sortie"
            },
            {
              "n": "10 · 11",
              "label": "+SC · COM",
              "desc": "Voyant portail ouvert 24 V 3 W (A8). Ou alimentation des TX pour le test des photocellules (A8 02) / économie de batterie (A8 03 ou 04) : plus de voyant dans ce cas.",
              "t": "sortie"
            },
            {
              "n": "31 · 30",
              "label": "LAM",
              "desc": "Clignotant 24 V, intermittence 50 %. Préclignotement : A5, mode : 78.",
              "t": "sortie"
            }
          ]
        },
        {
          "nom": "Sécurités NF",
          "bornes": [
            {
              "n": "12 · 30",
              "label": "FT2",
              "desc": "Photocellules FT2. Usine : 53 00, 54 00 (désactivée), 55 01. Absente : ponter 12-30 ou 53 00 + 54 00. Séries F4ES ou F4S conseillées.",
              "t": "nf"
            },
            {
              "n": "13 · 30",
              "label": "FT1",
              "desc": "Photocellules FT1. Usine : 50 00, 51 02 (inversion en fermeture), 52 01. Absente : ponter 13-30 ou 50 00 + 51 00. Séries F4ES ou F4S conseillées.",
              "t": "nf"
            },
            {
              "n": "14 · 16",
              "label": "COS2",
              "desc": "Bord sensible 2, NF ou 8,2 kΩ. Désactivé d'usine (74 00). Absent : ponter 14-16 ou 74 00.",
              "t": "nf"
            },
            {
              "n": "15 · 16",
              "label": "COS1",
              "desc": "Bord sensible 1, NF ou 8,2 kΩ. Désactivé d'usine (73 00). Absent : ponter 15-16 ou 73 00.",
              "t": "nf"
            },
            {
              "n": "17 · 16",
              "label": "ST",
              "desc": "STOP NF — shunté d'usine. L'ouverture du contact arrête le mouvement.",
              "t": "nf"
            }
          ]
        },
        {
          "nom": "Commandes NO (commun 23)",
          "bornes": [
            {
              "n": "24",
              "label": "ORO",
              "desc": "Horloge (paramètre 80). Ne jamais ponter si inutilisée.",
              "t": "no"
            },
            {
              "n": "25",
              "label": "AP",
              "desc": "Ouverture. Maintenue : pas de fermeture automatique, le décompte reprend au relâchement.",
              "t": "no"
            },
            {
              "n": "26",
              "label": "CH",
              "desc": "Fermeture.",
              "t": "no"
            },
            {
              "n": "27",
              "label": "PP",
              "desc": "Pas-à-pas (fonctionnement réglé par le paramètre A4).",
              "t": "no"
            },
            {
              "n": "28",
              "label": "PED",
              "desc": "Ouverture partielle, 50 % d'usine (paramètre 15).",
              "t": "no"
            }
          ]
        },
        {
          "nom": "Alimentation, bus, antenne",
          "bornes": [
            {
              "n": "29 · 30",
              "label": "+24 V · COM",
              "desc": "Alimentation des accessoires extérieurs (puissance max : voir caractéristiques). Pour les BG30 High Speed : alimentation du B72/BRAKE/2.",
              "t": "alim"
            },
            {
              "n": "18 · 19 · 20",
              "label": "COM LNA LNB",
              "desc": "Liaison RS485 MASTER / SLAVE (vantaux opposés), câble 3 x 0,5 mm², 30 m max. L'alignement n'est pas possible avec l'homme présent actif (A7 01).",
              "t": "bus"
            },
            {
              "n": "22 · 21",
              "label": "ANT",
              "desc": "Antenne : câble RG58 50 Ω, 10 m max, sans raccord.",
              "t": "autre"
            }
          ]
        },
        {
          "nom": "Connecteurs (câblés usine)",
          "bornes": [
            {
              "n": "ENC",
              "label": "Encodeur",
              "desc": "Débrancher / rebrancher uniquement hors tension. Débrancher uniquement hors tension.",
              "t": "moteur"
            },
            {
              "n": "FC",
              "label": "Fins de course",
              "desc": "Contacts NC, mécaniques (fig. 14) ou magnétiques (fig. 15). Régler pour que le portail s'arrête un peu avant la butée. Refaire l'apprentissage après chaque modification.",
              "t": "moteur"
            },
            {
              "n": "SB",
              "label": "Déverrouillage",
              "desc": "Contact NC de la poignée de déverrouillage : si on lève la poignée, le portail s'arrête et ignore les commandes. Si le portail est en position intermédiaire à la refermeture, une récupération de position démarre.",
              "t": "moteur"
            },
            {
              "n": "RECEIVER",
              "label": "Récepteur",
              "desc": "H93/RX2LP/I : PR1 pas-à-pas (paramètre 76), PR2 partielle (paramètre 77). Boutons PR1 et PR2 accessibles sur la carte. Relié au B70/MODLP en 3 fils. Ne pas remplacer par un autre récepteur.",
              "t": "autre"
            },
            {
              "n": "WIFI",
              "label": "B74/BCONNECT",
              "desc": "Module IP Wi-Fi (activer avec L0 01, low power désactivé L1 00).",
              "t": "autre"
            }
          ]
        }
      ],
      "fusibles": "F1 20 A (ATO257) circuit de puissance des moteurs · F2 T2A (ATO257) primaire du transformateur · F3 3 A (5x20) alimentation des accessoires",
      "notes": [
        "Sécurités absentes : shunter sur COM (30 pour FT1 / FT2, 16 pour COS1 / COS2 / ST) ou les désactiver par les paramètres 50, 51, 53, 54, 73, 74. La carte ne se déplace pas avec une sécurité ouverte.",
        "Puissance absorbée nominale : BG30/1603-1604 185 W · 2203-2204 150 W · 1003-1004/HS 180 W · 1404/R 160 W · 1804/HS 150 W · 1504/HS 155 W · 803-804/HS 185 W. Puissance de démarrage de 470 W à 650 W selon le modèle.",
        "Puissances max : clignotant 25 W, courtoisie 100 W (230 V~) / 40 W (24 V), voyant portail ouvert 3 W, accessoires 20 W. Température de fonctionnement −20 à +55 °C.",
        "Câbles : clignotant FIFTHY/24 2 x 1 mm² (10 m max) ; lumière de courtoisie 2 x 1 mm² (20 m max) ; antenne RG58 (10 m max).",
        "Limiteur de tension B72/CL : obligatoire sur les BG30/804/HS, 1004/HS, 1504/HS, 1804/HS et 1404/R achetés avant novembre 2023. Il absorbe l'énergie de freinage brusque (STOP, bord sensible, inversion) notamment quand le paramètre 65 est sur 01. Si la LED CLAMP reste allumée en permanence, il est endommagé : le remplacer. Ne pas l'enlever, sauf avec le chargeur B71/BCHP HW 02 qui le remplace.",
        "Déblocage mécanique : le message StoP clignote à l'écran. À la refermeture, si le portail n'est pas complètement ouvert ou fermé, la carte lance une récupération de position (manœuvre lente) à la première commande."
      ]
    },
    "apprentissage": {
      "avant": [
        "A1 — modèle : 01 BG30/1600 · 02 BG30/2200 · 03 BG30/1000/HS · 04 BG30/1400/R (réversible) · 05 BG30/1800/HS · 06 BG30/1504/HS · 07 BG30/804/HS. Réglé en usine. Après un retour aux valeurs usine : la p. 139 dit que A1 est conservé, les pp. 131 et 136 disent de le reconfigurer à la main, donc à vérifier.",
        "71 — position : 71 00 moteur à gauche, 71 01 moteur à droite (vue de l'intérieur).",
        "Fins de course réglés pour que le portail s'arrête un peu avant la butée mécanique.",
        "Homme présent désactivé : A7 00. Portail en position fermée.",
        "TEST : contrôler commandes et sécurités ; shunter ou désactiver celles qui ne sont pas installées (50, 51, 53, 54, 73, 74).",
        "Si TEST affiche FC : prêt. S'il affiche dAtA : TEST 1 clic puis apprentissage. S'il affiche un n° de borne : régler la sécurité d'abord."
      ],
      "etapes": [
        "Maintenir PROG 4 s : AP P- s'affiche.",
        "Ouvrir la poignée de déverrouillage : après quelques secondes PH AS s'affiche, la centrale règle le moteur.",
        "Attendre que PH AS clignote (réglage réussi).",
        "Refermer la poignée de déverrouillage : l'apprentissage démarre.",
        "FOtO s'affiche (si une photocellule est active) : s'écarter du faisceau dans les 5 s.",
        "Auto : ouverture à faible vitesse jusqu'au fin de course d'ouverture, court arrêt, Auto clignote.",
        "Fermeture jusqu'au fin de course de fermeture. Réussi : retour à l'état des commandes et sécurités."
      ],
      "apres": [
        "Erreurs : noPH (réglage moteur échoué), APPE (TEST ou sécurité), APPL (longueur) → voir l'onglet Codes et recommencer.",
        "Garder au moins 3 cm entre le point d'arrêt et la butée mécanique ; sinon déplacer le fin de course et refaire l'apprentissage.",
        "Contrôle final : StoP doit clignoter quand on ouvre la poignée de déverrouillage.",
        "Essai (notice, ch. 21) : vérifier la course et les ralentissements, les forces d'impact (EN 12453 et EN 12445), l'intervention des sécurités, la reprise après coupure du secteur et des batteries (portail en position intermédiaire), et le réglage des fins de course.",
        "Moteur réversible BG30/1400/R : après un déplacement à la main de plus de 3 cm (1400/R seulement) ou une coupure en position intermédiaire, la centrale lance une récupération de position à la première commande."
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
},
/* ------------------------------------------------------------------ */
{
  id: "afca", nom: "AFCA", alias: "ABLE V2", couleur: "#2a7a4b",
  cartes: [
    {
      "id": "afca-starteco3-contacteurs",
      "nom": "Startéco 3",
      "modeles": "Armoire Startéco 3 (versions contacteurs et contacts secs) — moteur monophasé ou triphasé 230/400 V, V1.6",
      "type": "Portes et portails à fins de course — moteur mono ou triphasé, 20 switchs",
      "source": "Notice AFCA Startéco 3 V1.6 (Doc 19.1.a, indice 162, 18 p.)",
      "codes": [
        {
          "code": "Po",
          "type": "afficheur",
          "titre": "Préavis ouverture",
          "action": "Le clignotant précède l'ouverture (durée : voir switchs 3 et 4)."
        },
        {
          "code": "o",
          "type": "afficheur",
          "titre": "Ouverture en cours",
          "action": "Cycle normal."
        },
        {
          "code": "tAF",
          "type": "afficheur",
          "titre": "Temps de pause avant fermeture",
          "action": "Mode automatique : décompte avant la refermeture (réglable, voir temporisations)."
        },
        {
          "code": "PF",
          "type": "afficheur",
          "titre": "Préavis fermeture",
          "action": "Cycle normal."
        },
        {
          "code": "F",
          "type": "afficheur",
          "titre": "Fermeture en cours",
          "action": "Cycle normal."
        },
        {
          "code": "oP / FP",
          "type": "afficheur",
          "titre": "Ouverture piéton / fermeture piéton en cours",
          "action": "Ouverture / fermeture piéton en cours."
        },
        {
          "code": "Att",
          "type": "afficheur",
          "titre": "Attente de commande (porte non fermée)",
          "action": "Porte arrêtée ailleurs qu'en position fermée, l'armoire attend un ordre."
        },
        {
          "code": "FF / oF",
          "type": "afficheur",
          "titre": "Fermeture forcée / ouverture forcée en cours",
          "action": "Commandes maintenues, sécurités ignorées (homme mort)."
        },
        {
          "code": "hor",
          "type": "afficheur",
          "titre": "Contact « Horloge » présent",
          "action": "En mode automatique, un contact d'ouverture permanent maintient la porte ouverte."
        },
        {
          "code": "C1 · C2 · H · b",
          "type": "afficheur",
          "titre": "Sécurités actives",
          "action": "C1 / C2 : cellules 1 et 2 ; H : barre palpeuse haute (ouverture) ; b : barre palpeuse basse (fermeture). Jusqu'à 4 affichées ensemble."
        },
        {
          "code": "StoP",
          "type": "afficheur",
          "titre": "Entrée STOP active",
          "action": "Prioritaire sur l'affichage des autres sécurités. Vérifier le contact NF du STOP (borne 21) ou le ponter."
        },
        {
          "code": "AU",
          "type": "erreur",
          "titre": "Arrêt d'urgence enclenché ou fusible 24 V HS",
          "action": "Contrôler le contact sur les bornes 1-2 (à ponter si inutilisé) et le fusible du circuit 24 V. F2 2 A retardé. Led d'état : 4 clignotements rapides."
        },
        {
          "code": "Fdcnd",
          "type": "erreur",
          "titre": "Fin de course non détecté (antipatinage)",
          "action": "Mode avec fins de course (SW9 sur ON) : la fin de course n'a pas été atteinte avant la fin du temps d'antipatinage. Led d'état : 3 clignotements. Seule une coupure de courant ou un arrêt d'urgence débloque l'armoire."
        },
        {
          "code": "FdcoF",
          "type": "erreur",
          "titre": "Fins de course ouverture et fermeture actifs en même temps",
          "action": "Contrôler le câblage et le type de contacts des fins de course (bornes 24-26). Led d'état : 2 clignotements rapides."
        },
        {
          "code": "dEF C1 / dEF C2",
          "type": "erreur",
          "titre": "Défaut d'autotest cellule 1 / cellule 2",
          "action": "Le contact de la cellule reste fermé pendant l'autotest : vérifier l'alimentation de l'émetteur (borne 7/8 selon J1), l'alignement et le câblage. L'armoire s'arrête comme sur un STOP."
        },
        {
          "code": "dEF Sb / dEF SH",
          "type": "erreur",
          "titre": "Défaut d'autotest barre palpeuse basse / haute",
          "action": "Sb = barre palpeuse basse (sécurité fermeture), SH = haute (sécurité ouverture). Vérifier l'alimentation 12 V du TX (bornes 32-33), le câblage et la sensibilité (R1 / R2)."
        },
        {
          "code": "SP",
          "type": "erreur",
          "titre": "Défaut superviseur",
          "action": "Mauvais fonctionnement du microprocesseur : couper puis remettre sous tension ; si le défaut revient, la carte est à contrôler."
        },
        {
          "code": "LED état allumée",
          "type": "led",
          "titre": "Armoire en attente d'un ordre",
          "action": "Led éteinte : porte ouverte / cycle à l'arrêt. Clignotement lent : porte en cycle."
        },
        {
          "code": "LED état : 2 / 3 / 4 clignotements",
          "type": "led",
          "titre": "Défauts signalés par la Led d'état",
          "action": "2 rapides : fins de course ouverture et fermeture actifs ensemble. 3 rapides : défaut antipatinage (fin de course non détecté, SW9 sur ON). 4 rapides : arrêt d'urgence enclenché ou fusible 24 V HS."
        },
        {
          "code": "LEDs d'entrées",
          "type": "led",
          "titre": "Voyants L1 à L13 : état des entrées",
          "action": "Led allumée = contact fermé. Les LEDs rouges (numéro entouré) = sécurités : elles doivent être allumées. Les vertes = commandes : toutes éteintes sauf si une commande est maintenue. L11 et L13 existent uniquement sur la version 2 moteurs (pas sur cette carte)."
        },
        {
          "code": "Moteur ne part pas",
          "type": "symptome",
          "titre": "La porte ne bouge pas",
          "action": "Vérifier d'abord l'afficheur (AU, StoP, C1/C2/H/b), puis les LEDs des entrées (notice : diagnostic, LEDs, afficheur p. 16, 17, 18), les fusibles et le pontage des sécurités non utilisées."
        },
        {
          "code": "Switchs sans effet",
          "type": "symptome",
          "titre": "Un switch modifié ne change rien",
          "action": "Les modifications de switchs ne sont prises en compte qu'après coupure de l'alimentation ou après action sur l'arrêt d'urgence. Les valeurs réglées par P1-P3 sont prises en compte immédiatement."
        }
      ],
      "afficheur": {
        "intro": "Afficheur 7 segments (compteur de cycles). Porte fermée : le nombre de cycles s'affiche 10 s puis s'éteint. Tout ce qui suit est lu sur le même afficheur.",
        "autres": [
          {
            "titre": "Étapes du cycle",
            "texte": "Po : préavis ouverture · o : ouverture en cours · tAF : temps de pause avant fermeture · PF : préavis fermeture · F : fermeture en cours · oP : ouverture piéton en cours · FP : fermeture piéton en cours · Att : attente de commande (porte non fermée) · FF : fermeture forcée en cours · oF : ouverture forcée en cours · hor : contact « Horloge » présent (en mode automatique, un contact d'ouverture permanent maintient la porte ouverte)."
          },
          {
            "titre": "Sécurités actives",
            "texte": "Jusqu'à 4 sécurités s'affichent en même temps : C1 (cellule 1), C2 (cellule 2), H (barre palpeuse haute), b (barre palpeuse basse), par exemple « C1.2. Hb » = quatre sécurités actives. StoP : arrêt actif (l'affichage du STOP est prioritaire et masque les autres)."
          },
          {
            "titre": "Défauts bloquants",
            "texte": "AU : arrêt d'urgence enclenché ou fusible 24 V HS · Fdcnd : fin de course ouverture ou fermeture non détecté (antipatinage, mode avec fins de course seulement) · FdcoF : fins de course ouverture et fermeture ouverts en même temps · dEF C1 / dEF C2 : défaut d'autotest cellule 1 / 2 · dEF Sb : défaut d'autotest barre palpeuse basse (sécurité fermeture) · dEF SH : défaut d'autotest barre palpeuse haute (sécurité ouverture) · SP : défaut superviseur (mauvais fonctionnement du microprocesseur)."
          }
        ]
      },
      "bornier": {
        "groupes": [
          {
            "nom": "Alimentation et moteur",
            "bornes": [
              {
                "n": "42-43",
                "label": "230 V",
                "desc": "Pont 42-43 si alimentation 230 V (mono ou tri). Ne pas amener de tension sur ces bornes.",
                "t": "alim"
              },
              {
                "n": "42-44",
                "label": "400 V",
                "desc": "Pont 42-44 si alimentation 400 V. Ne pas amener de tension sur ces bornes.",
                "t": "alim"
              },
              {
                "n": "L1 L2 L3",
                "label": "Alimentation générale",
                "desc": "Version contacts secs (sans contacteurs) : raccordée sur L1-L2-L3 à l'emplacement du contacteur de gauche. Version contacteurs : sur les contacteurs.",
                "t": "alim"
              },
              {
                "n": "47 · 48 · 49",
                "label": "Sorties pour contacteurs",
                "desc": "COM / ouverture / fermeture : bornes présentes uniquement sur la version sans contacteur (47 commun, 48 ouverture, 49 fermeture).",
                "t": "moteur"
              },
              {
                "n": "1-2",
                "label": "Arrêt d'urgence",
                "desc": "Coupe le circuit 24 V ; à ponter si inutilisé. Ne pas le câbler avec les autres sécurités.",
                "t": "nf"
              },
              {
                "n": "3-4 · 5-6",
                "label": "Sorties 0 V · 24 V",
                "desc": "Alimentation des accessoires (24 V AC, 40 VA maxi).",
                "t": "alim"
              }
            ]
          },
          {
            "nom": "Sorties",
            "bornes": [
              {
                "n": "7-8",
                "label": "Autotest 24 V ou contact sec",
                "desc": "Choix avec le cavalier J1. Contact sec NO actif 500 ms avant le départ, ou 24 V AC coupé pendant 500 ms.",
                "t": "sortie"
              },
              {
                "n": "9 · 10 · 11",
                "label": "Feux clignotants",
                "desc": "9 = 0 V commun ; 10 = 24 V feu n°1 ; 11 = 24 V feu n°2 ; 15 W maxi par feu, sans clignoteur propre.",
                "t": "sortie"
              },
              {
                "n": "12-13",
                "label": "Contact sec option 1",
                "desc": "Programmable avec les switchs 10 à 13 (5 A maxi).",
                "t": "sortie"
              },
              {
                "n": "14-15",
                "label": "Contact sec option 2",
                "desc": "Programmable avec les switchs 14 à 17 (5 A maxi).",
                "t": "sortie"
              },
              {
                "n": "16-17",
                "label": "Éclairage de zone",
                "desc": "Contact sec : pas de tension sur ces bornes (phase sur 16, neutre sur la lampe).",
                "t": "sortie"
              },
              {
                "n": "32 · 33",
                "label": "TX test (0 V · 12 V)",
                "desc": "Alimentation de l'émetteur NPN 12 V (barre palpeuse AFCA), coupée 500 ms avant le départ pour l'autotest.",
                "t": "sortie"
              },
              {
                "n": "34 · 35",
                "label": "RX (0 V · 12 V)",
                "desc": "Alimentation du récepteur NPN 12 V.",
                "t": "sortie"
              }
            ]
          },
          {
            "nom": "Commandes (contacts NO)",
            "bornes": [
              {
                "n": "18",
                "label": "COM commandes",
                "desc": "Commun des commandes.",
                "t": "autre"
              },
              {
                "n": "19",
                "label": "OUV",
                "desc": "Commande d'ouverture (ouverture automatique).",
                "t": "no"
              },
              {
                "n": "20",
                "label": "FERM",
                "desc": "Commande impulsionnelle de fermeture.",
                "t": "no"
              },
              {
                "n": "21",
                "label": "STOP",
                "desc": "Commande de stop, contact NF.",
                "t": "nf"
              },
              {
                "n": "22",
                "label": "OUV F / OUV P",
                "desc": "Ouverture forcée (SW20 sur OFF) ou partielle (SW20 sur ON).",
                "t": "no"
              },
              {
                "n": "23",
                "label": "FERM F",
                "desc": "Fermeture forcée (homme mort).",
                "t": "no"
              },
              {
                "n": "24 · 25 · 26",
                "label": "Fins de course",
                "desc": "24 commun ; 25 fin de course ouverture ; 26 fin de course fermeture.",
                "t": "nf"
              }
            ]
          },
          {
            "nom": "Cellules et barres palpeuses",
            "bornes": [
              {
                "n": "30 · 31",
                "label": "R1 · R2",
                "desc": "Réglage de la sensibilité n°1 et n°2 pour barre palpeuse avec cellules PB18 NPN (fil noir MUTE).",
                "t": "autre"
              },
              {
                "n": "36",
                "label": "COM cellules",
                "desc": "Commun des contacts de cellules.",
                "t": "autre"
              },
              {
                "n": "37",
                "label": "C1",
                "desc": "Contact de la cellule de sécurité n°1.",
                "t": "nf"
              },
              {
                "n": "38",
                "label": "C2",
                "desc": "Contact de la cellule de sécurité n°2.",
                "t": "nf"
              },
              {
                "n": "39",
                "label": "COM barres",
                "desc": "Commun des barres palpeuses.",
                "t": "autre"
              },
              {
                "n": "40",
                "label": "SH",
                "desc": "Barre palpeuse haute (active en ouverture).",
                "t": "nf"
              },
              {
                "n": "41",
                "label": "SB",
                "desc": "Barre palpeuse basse (active en fermeture).",
                "t": "nf"
              }
            ]
          }
        ],
        "fusibles": "F1 0,5 A retardé (alimentation générale, 5x20 corps céramique, haut pouvoir de coupure) · F2 2 A retardé (circuit 24 V). Charge maxi moteur : 1,5 kW en 400 V, 1,1 kW en 220 V.",
        "notes": [
          "Les entrées de sécurité non utilisées doivent être pontées. L'arrêt d'urgence ne doit pas être raccordé avec les autres sécurités.",
          "La platine doit toujours être fixée sur une plaque de fond métallique et reliée à la terre. Ne jamais faire passer de fil entre la carte électronique et la plaque de fond.",
          "Les contacteurs sont remplacés par 3 bornes sur la version contacts secs (Startéco 3 « contacts secs ») : en monophasé, alimentation sur L1 et L2 seulement, à l'emplacement du contacteur de gauche.",
          "Notice : la borne 15 y est citée deux fois (sortie option 2 et « ouverture automatique ») : l'ouverture est la borne 19 ; en cas de doute, vérifier avec le schéma de la notice.",
          "Autotest : J1 sur 24 V AC = l'émetteur est alimenté par la borne 7 dans le texte de la notice (p. 5), mais le schéma dit « borne 8 » : vérifier sur site. J1 sur contact sec = commande de test d'un amplificateur par 7-8 (le schéma p. 6 dit au contraire « J1 sur 24 V » et « bornes 3 et 8 sur l'entrée test »). Les entrées cellule 1, cellule 2 et sécurité basse sont testées avant la fermeture ; avant l'ouverture la notice écrit « sécurité basse », probablement « haute » (à vérifier).",
          "Raccordement type cellules PE12 sans ampli : fil noir de la cellule réceptrice sur 37 (barrage n°1) ou 38 (barrage n°2).",
          "Barre palpeuse PB18 : fil noir du récepteur sur 41 (basse) ou 40 (haute). Pour augmenter la sensibilité, fil noir de l'émetteur sur R1 / R2 puis potentiomètre ; ne jamais raccorder deux fils MUTE sur la même borne."
        ]
      },
      "parametres": {
        "intro": "Switchs SW1 à SW20 puis réglages par boutons P1 / P2 / P3 (temporisations, autotests). Les valeurs d'usine ne sont pas données dans la notice (—). Les switchs ne sont lus qu'après coupure d'alimentation ou arrêt d'urgence.",
        "navigation": [
          "Entrer en programmation : appuyer sur P3 (VALID) pendant 2 s. L'afficheur indique « Prog ».",
          "P1 / P2 font défiler : « Prog » (temporisations), puis « test » (autotests) puis « diag » (diagnostic des entrées).",
          "P3 sur le paramètre : son numéro clignote ; P1 / P2 changent la valeur ; P3 valide. Aller à « End » puis P3 pour sortir. Pris en compte immédiatement, sans couper."
        ],
        "groupes": [
          {
            "nom": "Switchs : mode, préavis, cellules, fins de course",
            "items": [
              {
                "code": "SW1 · SW2",
                "def": "—",
                "titre": "Mode de fonctionnement",
                "valeurs": [
                  [
                    "OFF · OFF",
                    "Semi-automatique 2 BP : impulsion OUV = ouvre, impulsion FERM = ferme"
                  ],
                  [
                    "OFF · ON",
                    "Automatique avec réarmement : fermeture après temporisation ; la tempo est relancée par une impulsion OUV ou un passage devant les cellules"
                  ],
                  [
                    "ON · OFF",
                    "Séquentiel 1 BP : OUV = ouverture, arrêt, refermeture ; impulsion pendant la fermeture = réouverture"
                  ],
                  [
                    "ON · ON",
                    "Automatique avec blocage : après un passage devant la cellule 1, refermeture immédiate sans temporisation"
                  ]
                ]
              },
              {
                "code": "SW3 · SW4",
                "def": "—",
                "titre": "Préavis (2 s)",
                "valeurs": [
                  [
                    "OFF · OFF",
                    "Pas de préavis"
                  ],
                  [
                    "OFF · ON",
                    "Préavis de 2 s avant l'ouverture"
                  ],
                  [
                    "ON · OFF",
                    "Préavis de 2 s avant la fermeture"
                  ],
                  [
                    "ON · ON",
                    "Préavis de 2 s à l'ouverture et à la fermeture"
                  ]
                ]
              },
              {
                "code": "SW5",
                "def": "—",
                "titre": "Fonctionnement des cellules",
                "valeurs": [
                  [
                    "OFF",
                    "Réouverture sur cellules (passage pendant la fermeture)"
                  ],
                  [
                    "ON",
                    "Arrêt sur cellules : la porte repart en fermeture à la libération ; clignotants et éclairage de zone restent actifs tant que la cellule est occultée"
                  ]
                ]
              },
              {
                "code": "SW6",
                "def": "—",
                "titre": "Cellule 1 en ADMAP",
                "valeurs": [
                  [
                    "OFF",
                    "Normal : la cellule 1 n'agit qu'à la fermeture"
                  ],
                  [
                    "ON",
                    "ADMAP : porte à l'arrêt et cellule 1 active, la porte ne part en ouverture qu'après libération de la cellule ; pendant la fermeture la cellule inverse le mouvement"
                  ]
                ]
              },
              {
                "code": "SW7",
                "def": "—",
                "titre": "Sécurités haute et basse",
                "valeurs": [
                  [
                    "OFF",
                    "Inversion totale (basse en fermeture : réouverture complète ; haute en ouverture : refermeture complète)"
                  ],
                  [
                    "ON",
                    "Inversion 3 s, arrêt 1 s, puis reprise ; après 3 essais infructueux la porte inverse 3 s puis s'arrête"
                  ]
                ]
              },
              {
                "code": "SW8",
                "def": "—",
                "titre": "Fermeture à la mise sous tension",
                "valeurs": [
                  [
                    "OFF",
                    "Attend un ordre après coupure ou arrêt d'urgence"
                  ],
                  [
                    "ON",
                    "Lance une fermeture automatique après coupure ou arrêt d'urgence"
                  ]
                ]
              },
              {
                "code": "SW9",
                "def": "—",
                "titre": "Fins de course",
                "valeurs": [
                  [
                    "OFF",
                    "Sans fins de course : régler les temps d'ouverture et de fermeture avec les boutons de programmation (fins de course quand même actifs : les ponter si inutilisés)"
                  ],
                  [
                    "ON",
                    "Avec fins de course : régler le temps d'antipatinage ; si la fin de course n'est pas atteinte, la porte s'arrête, la Led d'état clignote 3 fois et seule une coupure de courant ou un arrêt d'urgence débloque"
                  ]
                ]
              }
            ]
          },
          {
            "nom": "Switchs : sorties option 1 et option 2",
            "items": [
              {
                "code": "SW10",
                "def": "—",
                "titre": "Contact option 1 : NO / NF",
                "valeurs": [
                  [
                    "OFF",
                    "Sortie contact sec NO"
                  ],
                  [
                    "ON",
                    "Sortie contact sec NF"
                  ]
                ]
              },
              {
                "code": "SW11 · SW12 · SW13",
                "def": "—",
                "titre": "Fonction du contact option 1 (bornes 12-13)",
                "valeurs": [
                  [
                    "OFF · OFF · OFF",
                    "Option 1 = option 2 (actif en même temps)"
                  ],
                  [
                    "OFF · OFF · ON",
                    "Porte ouverte (fin de course ouverture, ou fin de tempo sans fins de course)"
                  ],
                  [
                    "OFF · ON · OFF",
                    "Réception radio (version récepteur embrochable)"
                  ],
                  [
                    "OFF · ON · ON",
                    "Ouverture (en même temps que le contacteur ouverture)"
                  ],
                  [
                    "ON · OFF · OFF",
                    "Frein synchronisé (ouverture et fermeture)"
                  ],
                  [
                    "ON · OFF · ON",
                    "Frein retardé à l'ouverture (ouverture + 500 ms, et fermeture)"
                  ],
                  [
                    "ON · ON · OFF",
                    "Frein retardé à l'ouverture et à la fermeture (désactivé 500 ms après l'arrêt)"
                  ],
                  [
                    "ON · ON · ON",
                    "Frein retardé à l'ouverture et avancé à la fermeture (500 ms avant le départ en fermeture)"
                  ]
                ]
              },
              {
                "code": "SW14",
                "def": "—",
                "titre": "Contact option 2 : NO / NF",
                "valeurs": [
                  [
                    "OFF",
                    "Sortie contact sec NO"
                  ],
                  [
                    "ON",
                    "Sortie contact sec NF"
                  ]
                ]
              },
              {
                "code": "SW15 · SW16 · SW17",
                "def": "—",
                "titre": "Fonction du contact option 2 (bornes 14-15)",
                "valeurs": [
                  [
                    "OFF · OFF · OFF",
                    "Option 2 = option 1"
                  ],
                  [
                    "OFF · OFF · ON",
                    "Porte fermée"
                  ],
                  [
                    "OFF · ON · OFF",
                    "Sécurité : activé quand une cellule ou une barre palpeuse est détectée"
                  ],
                  [
                    "OFF · ON · ON",
                    "Alarme : défaut bloquant (fin de course non détecté dans le temps, ou les deux fins de course actifs)"
                  ],
                  [
                    "ON · OFF · OFF",
                    "Fermeture (en même temps que le contacteur fermeture)"
                  ],
                  [
                    "ON · OFF · ON",
                    "Vanne : actif quand la porte n'est pas fermée ou en cours de fermeture"
                  ],
                  [
                    "ON · ON · OFF",
                    "Feux oranges : en même temps que l'éclairage de zone (pilotage de feux avec clignoteur 24 ou 230 V)"
                  ],
                  [
                    "ON · ON · ON",
                    "Gâche / ventouse : actif 2 s avant l'ouverture, désactivé 1 s après le départ"
                  ]
                ]
              }
            ]
          },
          {
            "nom": "Switchs : commandes",
            "items": [
              {
                "code": "SW18",
                "def": "—",
                "titre": "Commande en marche forcée avec BP + et −",
                "valeurs": [
                  [
                    "—",
                    "Intitulé du tableau p. 8 de la notice ; aucun paragraphe détaillé n'existe dans la notice V1.6."
                  ]
                ]
              },
              {
                "code": "SW19",
                "def": "—",
                "titre": "Changement d'état du contact frein (option 1)",
                "valeurs": [
                  [
                    "OFF",
                    "Le contact frein ne change pas d'état pendant le temps avant inversion suite à une sécurité"
                  ],
                  [
                    "ON",
                    "Le contact frein change d'état pendant ce temps"
                  ]
                ]
              },
              {
                "code": "SW20",
                "def": "—",
                "titre": "Borne 22 : ouverture forcée ou partielle",
                "valeurs": [
                  [
                    "OFF",
                    "Tout contact sur 22 = ouverture forcée"
                  ],
                  [
                    "ON",
                    "Tout contact sur 22 = ouverture partielle (temps 03)"
                  ]
                ]
              }
            ]
          },
          {
            "nom": "Temporisations (P1 / P2 / P3)",
            "items": [
              {
                "code": "01",
                "def": "—",
                "titre": "Temps d'antipatinage (ou de fonctionnement)",
                "valeurs": [
                  [
                    "0 > 360 s",
                    "Sans fins de course : temps de manœuvre. Avec fins de course : temps de sécurité"
                  ]
                ]
              },
              {
                "code": "02",
                "def": "—",
                "titre": "Temps avant fermeture",
                "valeurs": [
                  [
                    "0 > 360 s",
                    "Pause avant refermeture automatique"
                  ]
                ]
              },
              {
                "code": "03",
                "def": "—",
                "titre": "Temps d'ouverture partielle",
                "valeurs": [
                  [
                    "0 > 360 s",
                    "Utilisé quand SW20 est sur ON"
                  ]
                ]
              },
              {
                "code": "04",
                "def": "—",
                "titre": "Temps de retard du contact frein",
                "valeurs": [
                  [
                    "0 > 2 s",
                    "En mode frein décalé"
                  ]
                ]
              },
              {
                "code": "05",
                "def": "—",
                "titre": "Temps avant inversion de mouvement",
                "valeurs": [
                  [
                    "0 > 2 s",
                    "Délai avant l'inversion suite à une sécurité"
                  ]
                ]
              }
            ]
          },
          {
            "nom": "Autotests (P3 2 s, P2, P3 puis code)",
            "items": [
              {
                "code": "Code d'accès",
                "def": "0000",
                "titre": "Code pour modifier les autotests",
                "valeurs": [
                  [
                    "0000",
                    "Code usine ; saisir 4 chiffres avec P1 / P2 / P3"
                  ]
                ],
                "note": "Pour changer le code : saisir 2 fois le nouveau code dans le paramètre 11."
              },
              {
                "code": "06",
                "def": "—",
                "titre": "Autotest cellule n°1",
                "valeurs": [
                  [
                    "0",
                    "Non"
                  ],
                  [
                    "1",
                    "Oui"
                  ]
                ]
              },
              {
                "code": "07",
                "def": "—",
                "titre": "Autotest cellule n°2",
                "valeurs": [
                  [
                    "0",
                    "Non"
                  ],
                  [
                    "1",
                    "Oui"
                  ]
                ]
              },
              {
                "code": "08",
                "def": "—",
                "titre": "Autotest barre palpeuse ouverture",
                "valeurs": [
                  [
                    "0",
                    "Non"
                  ],
                  [
                    "1",
                    "Oui"
                  ]
                ]
              },
              {
                "code": "09",
                "def": "—",
                "titre": "Autotest barre palpeuse fermeture",
                "valeurs": [
                  [
                    "0",
                    "Non"
                  ],
                  [
                    "1",
                    "Oui"
                  ]
                ]
              },
              {
                "code": "10",
                "def": "—",
                "titre": "Réglage de la temporisation de l'autotest",
                "valeurs": [
                  [
                    "0,0 > 1 s",
                    "Durée du test"
                  ]
                ]
              },
              {
                "code": "11",
                "def": "—",
                "titre": "Nouveau mot de passe",
                "valeurs": [
                  [
                    "4 chiffres",
                    "À saisir deux fois (confirmation)"
                  ]
                ]
              }
            ]
          },
          {
            "nom": "Diagnostic des entrées (P3 2 s, P2 ×2 : « diag »)",
            "items": [
              {
                "code": "Compteur de cycles",
                "def": "—",
                "titre": "Entrées actives affichées en nombres",
                "valeurs": [
                  [
                    "Gauche = commandes",
                    "1 ouverture · 2 fermeture · 4 STOP · 8 ouverture forcée/partielle · 16 fermeture forcée"
                  ],
                  [
                    "Droite = sécurités",
                    "1 FDC ouverture · 2 FDC fermeture · 4 cellule 1 · 8 cellule 2 · 16 sécurité haute · 32 sécurité basse"
                  ]
                ],
                "note": "Les numéros s'additionnent. Exemple : 22 à droite = 16 + 4 + 2 = sécurité haute + cellule 1 + fin de course fermeture. Actives : commandes contact fermé, sécurités contact ouvert."
              }
            ]
          }
        ]
      },
      "apprentissage": {
        "avant": [
          "Couper l'alimentation avant tout raccordement.",
          "Choisir la tension : pont 42-43 (230 V) ou 42-44 (400 V).",
          "Fixer la platine sur une plaque métallique reliée à la terre."
        ],
        "etapes": [
          "Raccorder alimentation et moteur (voir le bornier) ; fins de course sur 24, 25, 26 ; ponter les sécurités non utilisées et 1-2 si pas d'arrêt d'urgence.",
          "Régler les switchs (mode, préavis, cellules, fins de course) puis couper / remettre sous tension.",
          "Avec fins de course (SW9 ON) : entrer en programmation, régler 01 = temps d'antipatinage ; sans fins de course : 01 = temps de manœuvre.",
          "Régler 02 (pause), 03 (partielle) puis, si besoin, les autotests.",
          "Contrôler le sens du moteur et les LEDs d'entrées (diagnostic)."
        ],
        "apres": [
          "Pas d'apprentissage automatique de course : temps réglés par P1-P3.",
          "En cas d'antipatinage (« Fdcnd », 3 clignotements) : couper l'alimentation ou arrêt d'urgence pour débloquer.",
          "La notice ne fournit pas les valeurs d'usine : noter les réglages relevés sur site."
        ]
      }
    },
    {
      "id": "afca-starteco3-2moteurs",
      "nom": "Startéco 3 · 2 moteurs",
      "modeles": "Armoire Startéco 3 version 2 moteurs 230 V mono (2 × 750 W maxi), V4.1",
      "type": "Portail battant 230 V — 2 moteurs M1 / M2, grande et petite vitesse, détection d'obstacle",
      "source": "Notice AFCA Startéco 3 2 moteurs V4.1 (Doc 19.1.a, indice 229, 20 p.)",
      "codes": [
        {
          "code": "Po",
          "type": "afficheur",
          "titre": "Préavis ouverture",
          "action": "Le clignotant précède l'ouverture (durée : voir switchs 3 et 4)."
        },
        {
          "code": "o",
          "type": "afficheur",
          "titre": "Ouverture en cours",
          "action": "Cycle normal."
        },
        {
          "code": "tAF",
          "type": "afficheur",
          "titre": "Temps de pause avant fermeture",
          "action": "Mode automatique : décompte avant la refermeture (réglable, voir temporisations)."
        },
        {
          "code": "PF",
          "type": "afficheur",
          "titre": "Préavis fermeture",
          "action": "Cycle normal."
        },
        {
          "code": "F",
          "type": "afficheur",
          "titre": "Fermeture en cours",
          "action": "Cycle normal."
        },
        {
          "code": "oP / FP",
          "type": "afficheur",
          "titre": "Ouverture piéton / fermeture piéton en cours",
          "action": "Ouverture / fermeture piéton en cours."
        },
        {
          "code": "Att",
          "type": "afficheur",
          "titre": "Attente de commande (porte non fermée)",
          "action": "Porte arrêtée ailleurs qu'en position fermée, l'armoire attend un ordre."
        },
        {
          "code": "FF / oF",
          "type": "afficheur",
          "titre": "Fermeture forcée / ouverture forcée en cours",
          "action": "Commandes maintenues, sécurités ignorées (homme mort)."
        },
        {
          "code": "hor",
          "type": "afficheur",
          "titre": "Contact « Horloge » présent",
          "action": "En mode automatique, un contact d'ouverture permanent maintient la porte ouverte."
        },
        {
          "code": "C1 · C2 · H · b",
          "type": "afficheur",
          "titre": "Sécurités actives",
          "action": "C1 / C2 : cellules 1 et 2 ; H : barre palpeuse haute (ouverture) ; b : barre palpeuse basse (fermeture). Jusqu'à 4 affichées ensemble."
        },
        {
          "code": "StoP",
          "type": "afficheur",
          "titre": "Entrée STOP active",
          "action": "Prioritaire sur l'affichage des autres sécurités. Vérifier le contact NF du STOP (borne 21) ou le ponter."
        },
        {
          "code": "AU",
          "type": "erreur",
          "titre": "Arrêt d'urgence enclenché ou fusible 24 V HS",
          "action": "Contrôler le contact sur les bornes 1-2 (à ponter si inutilisé) et le fusible du circuit 24 V. F3 2 A retardé. Led d'état : 4 clignotements rapides."
        },
        {
          "code": "Fdcnd",
          "type": "erreur",
          "titre": "Fin de course non détecté (antipatinage)",
          "action": "Mode avec fins de course (SW9 sur ON) : la fin de course n'a pas été atteinte avant la fin du temps d'antipatinage. Led d'état : 3 clignotements. Seule une coupure de courant ou un arrêt d'urgence débloque l'armoire."
        },
        {
          "code": "FdcoF",
          "type": "erreur",
          "titre": "Fins de course ouverture et fermeture actifs en même temps",
          "action": "Contrôler le câblage et le type de contacts des fins de course (bornes 24-26 et 27-29). Led d'état : 2 clignotements rapides."
        },
        {
          "code": "dEF C1 / dEF C2",
          "type": "erreur",
          "titre": "Défaut d'autotest cellule 1 / cellule 2",
          "action": "Le contact de la cellule reste fermé pendant l'autotest : vérifier l'alimentation de l'émetteur (borne 7/8 selon J1), l'alignement et le câblage. L'armoire s'arrête comme sur un STOP."
        },
        {
          "code": "dEF Sb / dEF SH",
          "type": "erreur",
          "titre": "Défaut d'autotest barre palpeuse basse / haute",
          "action": "Sb = barre palpeuse basse (sécurité fermeture), SH = haute (sécurité ouverture). Vérifier l'alimentation 12 V du TX (bornes 32-33), le câblage et la sensibilité (R1 / R2)."
        },
        {
          "code": "SP",
          "type": "erreur",
          "titre": "Défaut superviseur",
          "action": "Mauvais fonctionnement du microprocesseur : couper puis remettre sous tension ; si le défaut revient, la carte est à contrôler."
        },
        {
          "code": "LED état allumée",
          "type": "led",
          "titre": "Armoire en attente d'un ordre",
          "action": "Led éteinte : porte ouverte / cycle à l'arrêt. Clignotement lent : porte en cycle."
        },
        {
          "code": "LED état : 2 / 3 / 4 clignotements",
          "type": "led",
          "titre": "Défauts signalés par la Led d'état",
          "action": "2 rapides : fins de course ouverture et fermeture actifs ensemble. 3 rapides : défaut antipatinage (fin de course non détecté, SW9 sur ON). 4 rapides : arrêt d'urgence enclenché ou fusible 24 V HS."
        },
        {
          "code": "LEDs d'entrées",
          "type": "led",
          "titre": "Voyants L1 à L13 : état des entrées",
          "action": "Led allumée = contact fermé. Les LEDs rouges (numéro entouré) = sécurités : elles doivent être allumées. Les vertes = commandes : toutes éteintes sauf si une commande est maintenue. L11 et L13 existent uniquement sur la version 2 moteurs."
        },
        {
          "code": "Moteur ne part pas",
          "type": "symptome",
          "titre": "La porte ne bouge pas",
          "action": "Vérifier d'abord l'afficheur (AU, StoP, C1/C2/H/b), puis les LEDs des entrées (notice : diagnostic, LEDs, afficheur p. 18, 19, 20), les fusibles et le pontage des sécurités non utilisées."
        },
        {
          "code": "Switchs sans effet",
          "type": "symptome",
          "titre": "Un switch modifié ne change rien",
          "action": "Les modifications de switchs ne sont prises en compte qu'après coupure de l'alimentation ou après action sur l'arrêt d'urgence. Les valeurs réglées par P1-P3 sont prises en compte immédiatement."
        },
        {
          "code": "Obstacle",
          "type": "symptome",
          "titre": "Le portail inverse ou s'arrête sans obstacle",
          "action": "Sensibilité trop basse : augmenter légèrement la valeur de détection d'obstacle (paramètres 05/06 et 10/11 en 2 moteurs ; ouverture / fermeture, par moteur et par vitesse). Après toute modification, faire un cycle complet (ouverture + fermeture) avant de tester. Pendant le décalage des moteurs la détection est inactive."
        }
      ],
      "afficheur": {
        "intro": "Afficheur 7 segments (compteur de cycles). Porte fermée : le nombre de cycles s'affiche 10 s puis s'éteint. Tout ce qui suit est lu sur le même afficheur. Notice 2 moteurs V4.1 : mêmes affichages.",
        "autres": [
          {
            "titre": "Étapes du cycle",
            "texte": "Po : préavis ouverture · o : ouverture en cours · tAF : temps de pause avant fermeture · PF : préavis fermeture · F : fermeture en cours · oP : ouverture piéton en cours · FP : fermeture piéton en cours · Att : attente de commande (porte non fermée) · FF : fermeture forcée en cours · oF : ouverture forcée en cours · hor : contact « Horloge » présent (en mode automatique, un contact d'ouverture permanent maintient la porte ouverte)."
          },
          {
            "titre": "Sécurités actives",
            "texte": "Jusqu'à 4 sécurités s'affichent en même temps : C1 (cellule 1), C2 (cellule 2), H (barre palpeuse haute), b (barre palpeuse basse), par exemple « C1.2. Hb » = quatre sécurités actives. StoP : arrêt actif (l'affichage du STOP est prioritaire et masque les autres)."
          },
          {
            "titre": "Défauts bloquants",
            "texte": "AU : arrêt d'urgence enclenché ou fusible 24 V HS · Fdcnd : fin de course ouverture ou fermeture non détecté (antipatinage, mode avec fins de course seulement) · FdcoF : fins de course ouverture et fermeture ouverts en même temps · dEF C1 / dEF C2 : défaut d'autotest cellule 1 / 2 · dEF Sb : défaut d'autotest barre palpeuse basse (sécurité fermeture) · dEF SH : défaut d'autotest barre palpeuse haute (sécurité ouverture) · SP : défaut superviseur (mauvais fonctionnement du microprocesseur)."
          }
        ]
      },
      "bornier": {
        "groupes": [
          {
            "nom": "Alimentation et moteurs (220 V mono uniquement)",
            "bornes": [
              {
                "n": "42 · 43 · 44",
                "label": "Alimentation 230 V",
                "desc": "42 terre, 43 neutre (N), 44 phase (Ph).",
                "t": "alim"
              },
              {
                "n": "45 · 46 · 47 · 48",
                "label": "Moteur 1",
                "desc": "45 terre ; 46 commun ; 47 ouverture ; 48 fermeture (+ condensateur).",
                "t": "moteur"
              },
              {
                "n": "49 · 50 · 51 · 52",
                "label": "Moteur 2",
                "desc": "49 terre ; 50 commun ; 51 ouverture ; 52 fermeture (+ condensateur).",
                "t": "moteur"
              },
              {
                "n": "1-2",
                "label": "Arrêt d'urgence",
                "desc": "Coupe le circuit 24 V ; à ponter si inutilisé.",
                "t": "nf"
              },
              {
                "n": "3-4 · 5-6",
                "label": "Sorties 0 V · 24 V",
                "desc": "Accessoires 24 V AC (45 VA maxi).",
                "t": "alim"
              }
            ]
          },
          {
            "nom": "Sorties",
            "bornes": [
              {
                "n": "7-8",
                "label": "Autotest 24 V ou contact sec",
                "desc": "Choix avec J1.",
                "t": "sortie"
              },
              {
                "n": "9 · 10 · 11",
                "label": "Feux clignotants",
                "desc": "9 = 0 V ; 10 = 24 V feu n°1 ; 11 = 24 V feu n°2 ; 15 W maxi par feu.",
                "t": "sortie"
              },
              {
                "n": "12-13",
                "label": "Contact sec option 1",
                "desc": "Switchs 10 à 13.",
                "t": "sortie"
              },
              {
                "n": "14-15",
                "label": "Contact sec option 2",
                "desc": "Switchs 14 à 17.",
                "t": "sortie"
              },
              {
                "n": "16-17",
                "label": "Éclairage de zone",
                "desc": "Contact sec.",
                "t": "sortie"
              },
              {
                "n": "32 · 33 · 34 · 35",
                "label": "TX test / RX",
                "desc": "Alimentation 12 V des émetteurs et récepteurs NPN (barre palpeuse AFCA).",
                "t": "sortie"
              }
            ]
          },
          {
            "nom": "Commandes et fins de course",
            "bornes": [
              {
                "n": "18",
                "label": "COM",
                "desc": "Commun des commandes.",
                "t": "autre"
              },
              {
                "n": "19",
                "label": "OUV",
                "desc": "Ouverture.",
                "t": "no"
              },
              {
                "n": "20",
                "label": "FERM",
                "desc": "Fermeture impulsionnelle.",
                "t": "no"
              },
              {
                "n": "21",
                "label": "STOP",
                "desc": "Stop, contact NF.",
                "t": "nf"
              },
              {
                "n": "22",
                "label": "OUV F / OUV P",
                "desc": "Ouverture forcée (SW20 OFF) ou partielle (SW20 ON).",
                "t": "no"
              },
              {
                "n": "23",
                "label": "FERM F",
                "desc": "Fermeture forcée.",
                "t": "no"
              },
              {
                "n": "24 · 25 · 26",
                "label": "Fins de course moteur 1",
                "desc": "24 commun ; 25 ouverture ; 26 fermeture.",
                "t": "nf"
              },
              {
                "n": "27 · 28 · 29",
                "label": "Fins de course moteur 2",
                "desc": "27 commun ; 28 ouverture ; 29 fermeture.",
                "t": "nf"
              }
            ]
          },
          {
            "nom": "Cellules et barres palpeuses",
            "bornes": [
              {
                "n": "30 · 31",
                "label": "R1 · R2",
                "desc": "Réglage de la sensibilité (PB18).",
                "t": "autre"
              },
              {
                "n": "36",
                "label": "COM cellules",
                "desc": "Commun.",
                "t": "autre"
              },
              {
                "n": "37",
                "label": "C1",
                "desc": "Cellule 1.",
                "t": "nf"
              },
              {
                "n": "38",
                "label": "C2",
                "desc": "Cellule 2.",
                "t": "nf"
              },
              {
                "n": "39",
                "label": "COM barres",
                "desc": "Commun.",
                "t": "autre"
              },
              {
                "n": "40",
                "label": "SH",
                "desc": "Barre palpeuse haute.",
                "t": "nf"
              },
              {
                "n": "41",
                "label": "SB",
                "desc": "Barre palpeuse basse.",
                "t": "nf"
              }
            ]
          }
        ],
        "fusibles": "F1 0,5 A retardé (alimentation générale, 5x20 céramique) · F2 10 A temporisé (alimentation moteurs) · F3 2 A retardé (circuit 24 V). Charge maxi : 750 W par moteur, 45 VA sur le 24 V, 200 mA sur le 12 V TX/RX.",
        "notes": [
          "Les entrées de sécurité non utilisées doivent être pontées. L'arrêt d'urgence ne doit pas être raccordé avec les autres sécurités.",
          "Raccorder uniquement des moteurs 220 V monophasés de 750 W maxi ; ne pas raccorder de contacteurs sur les bornes moteur. Moteur hydraulique : régler la puissance à 100 % et désactiver la petite vitesse.",
          "Décalages : M1 part en ouverture avant M2 ; M2 part en fermeture avant M1 (0 à 240 s). En mode « 1 moteur », les deux sorties moteur sont alimentées en même temps.",
          "Autotest : J1 sur 24 V AC = émetteur alimenté par la borne 7 ; J1 sur contact sec = test sur amplificateur par 7-8. L'entrée sécurité haute est testée avant l'ouverture.",
          "La notice cite la borne 15 deux fois (option 2 et ouverture automatique) : l'ouverture est la borne 19."
        ]
      },
      "parametres": {
        "intro": "Switchs SW1 à SW20 puis réglages par P1 / P2 / P3. Les numéros de paramètres diffèrent entre 1 et 2 moteurs (tableaux séparés). Valeurs d'usine non données dans la notice (—). Switchs lus après coupure d'alimentation ou arrêt d'urgence.",
        "navigation": [
          "P3 (VALID) pendant 2 s : « Prog » ; P3 de nouveau : paramètre 01 (nombre de moteurs).",
          "P1 / P2 font défiler les paramètres ; P3 : le numéro clignote ; P1 / P2 modifient ; P3 valide ; « End » puis P3 pour sortir.",
          "Détection d'obstacle : P1 règle la grande vitesse, P2 la petite. Plage 0,0 à 9,9 dans les tableaux, « 1 à 9 » dans le texte ; 0 désactive la détection."
        ],
        "groupes": [
          {
            "nom": "Switchs (tous réglages sauf temps)",
            "items": [
              {
                "code": "SW1 · SW2",
                "def": "—",
                "titre": "Mode de fonctionnement",
                "valeurs": [
                  [
                    "OFF · OFF",
                    "Semi-automatique 2 BP : impulsion OUV = ouvre, impulsion FERM = ferme"
                  ],
                  [
                    "OFF · ON",
                    "Automatique avec réarmement : fermeture après temporisation ; la tempo est relancée par une impulsion OUV ou un passage devant les cellules"
                  ],
                  [
                    "ON · OFF",
                    "Séquentiel 1 BP : OUV = ouverture, arrêt, refermeture ; impulsion pendant la fermeture = réouverture"
                  ],
                  [
                    "ON · ON",
                    "Automatique avec blocage : après un passage devant la cellule 1, refermeture immédiate sans temporisation"
                  ]
                ]
              },
              {
                "code": "SW3 · SW4",
                "def": "—",
                "titre": "Préavis (2 s)",
                "valeurs": [
                  [
                    "OFF · OFF",
                    "Pas de préavis"
                  ],
                  [
                    "OFF · ON",
                    "Préavis de 2 s avant l'ouverture"
                  ],
                  [
                    "ON · OFF",
                    "Préavis de 2 s avant la fermeture"
                  ],
                  [
                    "ON · ON",
                    "Préavis de 2 s à l'ouverture et à la fermeture"
                  ]
                ]
              },
              {
                "code": "SW5",
                "def": "—",
                "titre": "Fonctionnement des cellules",
                "valeurs": [
                  [
                    "OFF",
                    "Réouverture sur cellules (passage pendant la fermeture)"
                  ],
                  [
                    "ON",
                    "Arrêt sur cellules : la porte repart en fermeture à la libération ; clignotants et éclairage de zone restent actifs tant que la cellule est occultée"
                  ]
                ]
              },
              {
                "code": "SW6",
                "def": "—",
                "titre": "Cellule 1 en ADMAP",
                "valeurs": [
                  [
                    "OFF",
                    "Normal : la cellule 1 n'agit qu'à la fermeture"
                  ],
                  [
                    "ON",
                    "ADMAP : porte à l'arrêt et cellule 1 active, la porte ne part en ouverture qu'après libération de la cellule ; pendant la fermeture la cellule inverse le mouvement"
                  ]
                ]
              },
              {
                "code": "SW7",
                "def": "—",
                "titre": "Sécurités haute et basse",
                "valeurs": [
                  [
                    "OFF",
                    "Inversion totale (basse en fermeture : réouverture complète ; haute en ouverture : refermeture complète)"
                  ],
                  [
                    "ON",
                    "Inversion 3 s, arrêt 1 s, puis reprise ; après 3 essais infructueux la porte inverse 3 s puis s'arrête"
                  ]
                ]
              },
              {
                "code": "SW8",
                "def": "—",
                "titre": "Non utilisé",
                "valeurs": [
                  [
                    "—",
                    "Switch 8 non utilisé sur la version 2 moteurs"
                  ]
                ]
              },
              {
                "code": "SW9",
                "def": "—",
                "titre": "Fins de course",
                "valeurs": [
                  [
                    "OFF",
                    "Sans fins de course : régler les temps d'ouverture et de fermeture avec les boutons de programmation (fins de course quand même actifs : les ponter si inutilisés)"
                  ],
                  [
                    "ON",
                    "Avec fins de course : régler le temps d'antipatinage ; si la fin de course n'est pas atteinte, la porte s'arrête, la Led d'état clignote 3 fois et seule une coupure de courant ou un arrêt d'urgence débloque"
                  ]
                ]
              },
              {
                "code": "SW10",
                "def": "—",
                "titre": "Contact option 1 : NO / NF",
                "valeurs": [
                  [
                    "OFF",
                    "Sortie contact sec NO"
                  ],
                  [
                    "ON",
                    "Sortie contact sec NF"
                  ]
                ]
              },
              {
                "code": "SW11 · SW12 · SW13",
                "def": "—",
                "titre": "Fonction du contact option 1 (bornes 12-13)",
                "valeurs": [
                  [
                    "OFF · OFF · OFF",
                    "Option 1 = option 2 (actif en même temps)"
                  ],
                  [
                    "OFF · OFF · ON",
                    "Porte ouverte (fin de course ouverture, ou fin de tempo sans fins de course)"
                  ],
                  [
                    "OFF · ON · OFF",
                    "Réception radio (version récepteur embrochable)"
                  ],
                  [
                    "OFF · ON · ON",
                    "Ouverture (en même temps que le contacteur ouverture)"
                  ],
                  [
                    "ON · OFF · OFF",
                    "Frein synchronisé (ouverture et fermeture)"
                  ],
                  [
                    "ON · OFF · ON",
                    "Frein retardé à l'ouverture (ouverture + 500 ms, et fermeture)"
                  ],
                  [
                    "ON · ON · OFF",
                    "Frein retardé à l'ouverture et à la fermeture (désactivé 500 ms après l'arrêt)"
                  ],
                  [
                    "ON · ON · ON",
                    "Frein retardé à l'ouverture et avancé à la fermeture (500 ms avant le départ en fermeture)"
                  ]
                ],
                "note": "Si l'option 1 est programmée sur « FREIN », les 2 contacts option pilotent séparément les 2 freins (option 1 = frein moteur 1, option 2 = frein moteur 2)."
              },
              {
                "code": "SW14",
                "def": "—",
                "titre": "Contact option 2 : NO / NF",
                "valeurs": [
                  [
                    "OFF",
                    "Sortie contact sec NO"
                  ],
                  [
                    "ON",
                    "Sortie contact sec NF"
                  ]
                ]
              },
              {
                "code": "SW15 · SW16 · SW17",
                "def": "—",
                "titre": "Fonction du contact option 2 (bornes 14-15)",
                "valeurs": [
                  [
                    "OFF · OFF · OFF",
                    "Option 2 = option 1"
                  ],
                  [
                    "OFF · OFF · ON",
                    "Porte fermée"
                  ],
                  [
                    "OFF · ON · OFF",
                    "Sécurité : activé quand une cellule ou une barre palpeuse est détectée"
                  ],
                  [
                    "OFF · ON · ON",
                    "Alarme : défaut bloquant (fin de course non détecté dans le temps, ou les deux fins de course actifs)"
                  ],
                  [
                    "ON · OFF · OFF",
                    "Fermeture (en même temps que le contacteur fermeture)"
                  ],
                  [
                    "ON · OFF · ON",
                    "Vanne : actif quand la porte n'est pas fermée ou en cours de fermeture"
                  ],
                  [
                    "ON · ON · OFF",
                    "Feux oranges : en même temps que l'éclairage de zone (pilotage de feux avec clignoteur 24 ou 230 V)"
                  ],
                  [
                    "ON · ON · ON",
                    "Gâche / ventouse : actif 2 s avant l'ouverture, désactivé 1 s après le départ"
                  ]
                ]
              },
              {
                "code": "SW18",
                "def": "—",
                "titre": "Boutons P1 et P2 = marche forcée",
                "valeurs": [
                  [
                    "ON",
                    "P1 = ouverture forcée, P2 = fermeture forcée des moteurs (sans couper l'alimentation)"
                  ],
                  [
                    "OFF",
                    "Fonction inactive"
                  ]
                ]
              },
              {
                "code": "SW19",
                "def": "—",
                "titre": "Changement d'état du contact frein (option 1)",
                "valeurs": [
                  [
                    "OFF",
                    "Le contact frein ne change pas d'état pendant le temps avant inversion de mouvement suite à une sécurité"
                  ],
                  [
                    "ON",
                    "Il change d'état pendant ce temps"
                  ]
                ]
              },
              {
                "code": "SW20",
                "def": "—",
                "titre": "Borne 22 : ouverture forcée ou partielle",
                "valeurs": [
                  [
                    "OFF",
                    "Tout contact sur 22 = ouverture forcée"
                  ],
                  [
                    "ON",
                    "Tout contact sur 22 = ouverture partielle (temps d'ouverture piéton)"
                  ]
                ],
                "note": "La notice écrit « borne 18 » dans ce paragraphe, mais la borne OUV F / OUV P est la 22 sur le bornier."
              }
            ]
          },
          {
            "nom": "Temporisations — installation 1 moteur",
            "items": [
              {
                "code": "01",
                "def": "—",
                "titre": "Nombre de moteurs",
                "valeurs": [
                  [
                    "1",
                    "Un seul moteur : numéros de paramètres de ce tableau"
                  ],
                  [
                    "2",
                    "Deux moteurs : voir le tableau 2 moteurs"
                  ]
                ],
                "note": "Avec « 1 moteur », les deux sorties moteur sont alimentées en même temps et avec la même tension. Les numéros de paramètres changent selon 1 ou 2 moteurs."
              },
              {
                "code": "02 (1 mot.)",
                "def": "—",
                "titre": "Temps de fonctionnement moteur 1, grande vitesse",
                "valeurs": [
                  [
                    "0 > 360 s",
                    "Temps de manœuvre à puissance réglée"
                  ]
                ]
              },
              {
                "code": "03 (1 mot.)",
                "def": "—",
                "titre": "Temps de petite vitesse moteur 1",
                "valeurs": [
                  [
                    "0 > 360 s",
                    "0 s si moteur hydraulique"
                  ]
                ]
              },
              {
                "code": "04 (1 mot.)",
                "def": "—",
                "titre": "Puissance moteur en grande vitesse",
                "valeurs": [
                  [
                    "40 > 100 %",
                    "100 % si moteur hydraulique"
                  ]
                ]
              },
              {
                "code": "05 (1 mot.)",
                "def": "—",
                "titre": "Détection d'obstacle à l'ouverture",
                "valeurs": [
                  [
                    "0,0 > 9,9",
                    "Chiffre de gauche = grande vitesse (P1), de droite = petite vitesse (P2) ; 0 = détection désactivée"
                  ]
                ]
              },
              {
                "code": "06 (1 mot.)",
                "def": "—",
                "titre": "Détection d'obstacle à la fermeture",
                "valeurs": [
                  [
                    "0,0 > 9,9",
                    "Même principe que 05"
                  ]
                ]
              },
              {
                "code": "07 (1 mot.)",
                "def": "—",
                "titre": "Temps avant fermeture (mode automatique)",
                "valeurs": [
                  [
                    "0 > 240 s",
                    "Pause avant refermeture"
                  ]
                ]
              },
              {
                "code": "08 (1 mot.)",
                "def": "—",
                "titre": "Temps avant fermeture piéton",
                "valeurs": [
                  [
                    "0 > 240 s",
                    "Pause après ouverture piétonne"
                  ]
                ]
              },
              {
                "code": "09 (1 mot.)",
                "def": "—",
                "titre": "Temps d'ouverture piéton",
                "valeurs": [
                  [
                    "0 > 360 s",
                    "Si switch 20 sur ON"
                  ]
                ]
              },
              {
                "code": "10 (1 mot.)",
                "def": "—",
                "titre": "Temps de retard du contact frein",
                "valeurs": [
                  [
                    "0 > 0,5 s",
                    "Retard du frein"
                  ]
                ]
              },
              {
                "code": "11 (1 mot.)",
                "def": "—",
                "titre": "Temps avant inversion de mouvement",
                "valeurs": [
                  [
                    "0 > 0,5 s",
                    "Délai avant inversion"
                  ]
                ]
              },
              {
                "code": "12 (1 mot.)",
                "def": "—",
                "titre": "Temps d'action sur la commande d'ouverture pour déblocage du frein",
                "valeurs": [
                  [
                    "0 > 10 s",
                    "Contact option 1"
                  ]
                ]
              },
              {
                "code": "13 (1 mot.)",
                "def": "—",
                "titre": "Temps de déblocage du frein en cas de défaut bloquant + commande d'ouverture",
                "valeurs": [
                  [
                    "0 > 240 s",
                    "Déblocage manuel du portail"
                  ]
                ]
              },
              {
                "code": "14 (1 mot.)",
                "def": "—",
                "titre": "Temps de petite vitesse supplémentaire",
                "valeurs": [
                  [
                    "0 > 240 s",
                    "0 si moteur hydraulique"
                  ]
                ]
              },
              {
                "code": "15",
                "def": "—",
                "titre": "End (sortie de programmation)",
                "valeurs": [
                  [
                    "Valider",
                    "Sort de la programmation"
                  ]
                ]
              }
            ]
          },
          {
            "nom": "Temporisations — installation 2 moteurs",
            "items": [
              {
                "code": "02",
                "def": "—",
                "titre": "Temps de fonctionnement moteur 1",
                "valeurs": [
                  [
                    "0 > 360 s",
                    "Grande vitesse"
                  ]
                ]
              },
              {
                "code": "03",
                "def": "—",
                "titre": "Temps de petite vitesse moteur 1",
                "valeurs": [
                  [
                    "0 > 360 s",
                    "0 si moteur hydraulique"
                  ]
                ]
              },
              {
                "code": "04",
                "def": "—",
                "titre": "Puissance moteur 1 en grande vitesse",
                "valeurs": [
                  [
                    "40 > 100 %",
                    "100 % si moteur hydraulique"
                  ]
                ]
              },
              {
                "code": "05",
                "def": "—",
                "titre": "Détection d'obstacle moteur 1 à l'ouverture",
                "valeurs": [
                  [
                    "0,0 > 9,9",
                    "GV avec P1, PV avec P2 ; 0 = désactivée"
                  ]
                ]
              },
              {
                "code": "06",
                "def": "—",
                "titre": "Détection d'obstacle moteur 1 à la fermeture",
                "valeurs": [
                  [
                    "0,0 > 9,9",
                    "GV avec P1, PV avec P2"
                  ]
                ]
              },
              {
                "code": "07",
                "def": "—",
                "titre": "Temps de fonctionnement moteur 2",
                "valeurs": [
                  [
                    "0 > 360 s",
                    "Grande vitesse"
                  ]
                ]
              },
              {
                "code": "08",
                "def": "—",
                "titre": "Temps de petite vitesse moteur 2",
                "valeurs": [
                  [
                    "0 > 360 s",
                    "0 si moteur hydraulique"
                  ]
                ]
              },
              {
                "code": "09",
                "def": "—",
                "titre": "Puissance moteur 2 en grande vitesse",
                "valeurs": [
                  [
                    "40 > 100 %",
                    "100 % si moteur hydraulique"
                  ]
                ]
              },
              {
                "code": "10",
                "def": "—",
                "titre": "Détection d'obstacle moteur 2 à l'ouverture",
                "valeurs": [
                  [
                    "0,0 > 9,9",
                    "GV avec P1, PV avec P2"
                  ]
                ]
              },
              {
                "code": "11",
                "def": "—",
                "titre": "Détection d'obstacle moteur 2 à la fermeture",
                "valeurs": [
                  [
                    "0,0 > 9,9",
                    "GV avec P1, PV avec P2"
                  ]
                ]
              },
              {
                "code": "12",
                "def": "—",
                "titre": "Décalage des moteurs à l'ouverture",
                "valeurs": [
                  [
                    "0 > 240 s",
                    "M1 part en ouverture avant M2"
                  ]
                ]
              },
              {
                "code": "13",
                "def": "—",
                "titre": "Décalage des moteurs à la fermeture",
                "valeurs": [
                  [
                    "0 > 240 s",
                    "M2 part en fermeture avant M1"
                  ]
                ]
              },
              {
                "code": "14",
                "def": "—",
                "titre": "Temps avant fermeture (mode automatique)",
                "valeurs": [
                  [
                    "0 > 240 s",
                    "Pause avant refermeture"
                  ]
                ]
              },
              {
                "code": "15",
                "def": "—",
                "titre": "Temps avant fermeture piéton",
                "valeurs": [
                  [
                    "0 > 240 s",
                    "Pause après ouverture piétonne"
                  ]
                ]
              },
              {
                "code": "16",
                "def": "—",
                "titre": "Temps d'ouverture piéton",
                "valeurs": [
                  [
                    "0 > 360 s",
                    "Si switch 20 sur ON"
                  ]
                ]
              },
              {
                "code": "17",
                "def": "—",
                "titre": "Temps de retard du contact frein",
                "valeurs": [
                  [
                    "0 > 0,5 s",
                    "Retard du frein"
                  ]
                ]
              },
              {
                "code": "18",
                "def": "—",
                "titre": "Temps avant inversion de mouvement",
                "valeurs": [
                  [
                    "0 > 0,5 s",
                    "Délai avant inversion"
                  ]
                ]
              },
              {
                "code": "19",
                "def": "—",
                "titre": "Temps d'action sur la commande d'ouverture pour déblocage du frein",
                "valeurs": [
                  [
                    "0 > 10 s",
                    "Contact option 1"
                  ]
                ]
              },
              {
                "code": "20",
                "def": "—",
                "titre": "Temps de déblocage du frein en cas de défaut bloquant + commande d'ouverture",
                "valeurs": [
                  [
                    "0 > 240 s",
                    "Déblocage manuel"
                  ]
                ]
              },
              {
                "code": "21",
                "def": "—",
                "titre": "Temps de petite vitesse supplémentaire",
                "valeurs": [
                  [
                    "0 > 240 s",
                    "0 si moteur hydraulique"
                  ]
                ]
              },
              {
                "code": "22",
                "def": "—",
                "titre": "Temps de coup de bélier pour déblocage serrure",
                "valeurs": [
                  [
                    "0 > 5 s",
                    "Poussée avant l'ouverture"
                  ]
                ]
              },
              {
                "code": "End",
                "def": "—",
                "titre": "Sortie de programmation",
                "valeurs": [
                  [
                    "Valider",
                    "Sort de la programmation"
                  ]
                ]
              }
            ]
          },
          {
            "nom": "Autotests (code usine 0000)",
            "items": [
              {
                "code": "26 (2 mot.) · 18 (1 mot.)",
                "def": "—",
                "titre": "Autotest cellule n°1",
                "valeurs": [
                  [
                    "0",
                    "Non"
                  ],
                  [
                    "1",
                    "Oui"
                  ]
                ]
              },
              {
                "code": "27 (2 mot.) · 19 (1 mot.)",
                "def": "—",
                "titre": "Autotest cellule n°2",
                "valeurs": [
                  [
                    "0",
                    "Non"
                  ],
                  [
                    "1",
                    "Oui"
                  ]
                ]
              },
              {
                "code": "28 (2 mot.) · 20 (1 mot.)",
                "def": "—",
                "titre": "Autotest barre palpeuse ouverture",
                "valeurs": [
                  [
                    "0",
                    "Non"
                  ],
                  [
                    "1",
                    "Oui"
                  ]
                ]
              },
              {
                "code": "29 (2 mot.) · 21 (1 mot.)",
                "def": "—",
                "titre": "Autotest barre palpeuse fermeture",
                "valeurs": [
                  [
                    "0",
                    "Non"
                  ],
                  [
                    "1",
                    "Oui"
                  ]
                ]
              },
              {
                "code": "30 (2 mot.) · 22 (1 mot.)",
                "def": "—",
                "titre": "Temporisation de l'autotest",
                "valeurs": [
                  [
                    "0,0 > 1 s",
                    "Durée du test"
                  ]
                ]
              },
              {
                "code": "31 (2 mot.) · 23 (1 mot.)",
                "def": "—",
                "titre": "Nouveau mot de passe",
                "valeurs": [
                  [
                    "4 chiffres",
                    "Saisir 2 fois"
                  ]
                ],
                "note": "Le tableau donne 31 (2 moteurs) / 23 (1 moteur), mais l'encadré rouge de la notice parle des paramètres 22 ou 29 : se fier aux numéros du tableau et vérifier à l'afficheur."
              }
            ]
          },
          {
            "nom": "Diagnostic des entrées (P3 2 s, P2 ×2 : « diag »)",
            "items": [
              {
                "code": "Compteur de cycles",
                "def": "—",
                "titre": "Entrées actives affichées en nombres",
                "valeurs": [
                  [
                    "Sécurités",
                    "1 FDC ouverture M1 · 2 FDC fermeture M1 · 4 cellule 1 · 8 cellule 2 · 16 sécurité haute · 64 FDC ouverture M2 · 128 FDC fermeture M2"
                  ],
                  [
                    "Commandes",
                    "1 ouverture · 2 fermeture · 4 STOP · 8 ouverture forcée/partielle · 16 fermeture forcée"
                  ]
                ],
                "note": "Les numéros s'additionnent. Attention : l'exemple d'affichage de cette notice place les sécurités à gauche et les commandes à droite, alors que la notice 3 contacteurs fait l'inverse : se fier au texte de l'afficheur et vérifier."
              }
            ]
          }
        ]
      },
      "apprentissage": {
        "avant": [
          "Couper l'alimentation avant tout raccordement.",
          "Alimentation 230 V mono sur 43 (N) / 44 (Ph), terre sur 42.",
          "Moteurs 220 V mono ≤ 750 W chacun : M1 sur 45-48, M2 sur 49-52."
        ],
        "etapes": [
          "Raccorder fins de course (24-26 moteur 1, 27-29 moteur 2), commandes et sécurités ; ponter 1-2 et les sécurités non utilisées.",
          "Régler les switchs puis couper / remettre sous tension.",
          "P3 2 s (« Prog »), P3 de nouveau : paramètre 01 = nombre de moteurs (1 ou 2).",
          "Régler les temps de fonctionnement, la puissance (40 à 100 %), les décalages et la sensibilité d'obstacle par moteur.",
          "Faire un cycle complet (ouverture + fermeture) avant de tester la détection d'obstacle."
        ],
        "apres": [
          "Si le portail s'arrête sans obstacle : augmenter un peu la sensibilité ; si la sécurité réagit trop tard : la diminuer. Obstacle en petite vitesse = le moteur s'arrête (comme une fin de course).",
          "Pas d'apprentissage de course : réglages par temps et puissance.",
          "Sensibilité 1 à 9 : plus la valeur est haute, plus le moteur force avant l'inversion. 0 = désactivée."
        ]
      }
    },
    {
      "id": "afca-starteco4-contacteurs",
      "nom": "Startéco 4",
      "modeles": "Armoire Startéco 4 (versions contacteurs et contact sec) — moteur mono ou triphasé 230/400 V, afficheur LCD, 47 paramètres",
      "type": "Portes et portails — afficheur LCD à menus, fins de course ou codeur électronique (moteur AFM / AFCA)",
      "source": "Notice AFCA Startéco 4 (Doc 19.1.a n° 363, 14-03-16, 37 p.)",
      "codes": [
        {
          "code": "Attente commande",
          "type": "afficheur",
          "titre": "Porte fermée / entrouverte / ouverte + Cycles",
          "action": "Écran de veille en cours d'utilisation : position de la porte et nombre de cycles. L'afficheur s'éteint 2 minutes après la fermeture : appuyer sur un bouton ou donner un ordre pour le réveiller."
        },
        {
          "code": "Préavis ouverture",
          "type": "afficheur",
          "titre": "Préavis avant ouverture",
          "action": "Étape du cycle en texte clair."
        },
        {
          "code": "Ouv. en cours",
          "type": "afficheur",
          "titre": "Ouverture en cours",
          "action": "Étape du cycle en texte clair."
        },
        {
          "code": "Ferm. en cours",
          "type": "afficheur",
          "titre": "Fermeture en cours",
          "action": "Étape du cycle en texte clair."
        },
        {
          "code": "S0.1234 · C.1234 · SF.1234",
          "type": "afficheur",
          "titre": "Sécurités activées",
          "action": "S0 = sécurités d'ouverture 1 à 4 ; C = cellules 1 à 4 ; SF = barres palpeuses de fermeture 1 à 4 ; « Stop actif » = sécurités stop actif."
        },
        {
          "code": "Mot de passe incorrect",
          "type": "afficheur",
          "titre": "Mot de passe refusé",
          "action": "Retour à l'écran d'accueil des menus. Mot de passe par défaut : 0000 (modifiable dans le menu USINE)."
        },
        {
          "code": "ARRET D'URGENCE ACTIF – Défaut FU1",
          "type": "erreur",
          "titre": "Arrêt d'urgence enclenché ou fusible F1 défectueux",
          "action": "Les sorties 12 et 24 V sont coupées. Contrôler le contact d'arrêt d'urgence (bornes 1-2, à ponter si inutilisé) et le fusible F1 (1,25 A rapide, circuit 24 V)."
        },
        {
          "code": "DEFAUT FDC – FDC Ouverture et Fermeture Actifs",
          "type": "erreur",
          "titre": "Défaut de fin de course",
          "action": "Absence ou mauvais raccordement des fins de course : vérifier le câblage (24-25-26) ou les désactiver dans le menu PARAMETRAGE (paramètre 2). Menu USINE, paramètre 2 : « Bloquant » = seul une coupure ou l'arrêt d'urgence réarme ; « Non bloquant » = un nouvel ordre relance le cycle."
        },
        {
          "code": "Historique : DEF. superviseur",
          "type": "diag",
          "titre": "Défaut superviseur",
          "action": "Entrée du menu USINE > Historique défauts (10 derniers défauts, avec date et heure). La notice ne donne que les libellés : les pistes ci-dessous sont des déductions."
        },
        {
          "code": "Historique : Présence AU",
          "type": "diag",
          "titre": "Arrêt d'urgence présent",
          "action": "Idem."
        },
        {
          "code": "Historique : Stop + de 5 mn",
          "type": "diag",
          "titre": "STOP actif depuis plus de 5 minutes",
          "action": "Idem : un contact resté actif plus de 5 min est mémorisé."
        },
        {
          "code": "Historique : C1 à C4 active +5mn",
          "type": "diag",
          "titre": "Cellule 1 / 2 / 3 / 4 active depuis plus de 5 min",
          "action": "Piste (déduite) : cellule occultée ou mal alignée."
        },
        {
          "code": "Historique : SF1 à SF4 active +5mn",
          "type": "diag",
          "titre": "Barre palpeuse fermeture active depuis plus de 5 min",
          "action": "Piste (déduite) : barre palpeuse écrasée ou mal câblée."
        },
        {
          "code": "Historique : SO1 à SO4 active +5mn",
          "type": "diag",
          "titre": "Sécurité ouverture active depuis plus de 5 min",
          "action": "Contrôler le contact et le câblage."
        },
        {
          "code": "Historique : Sécu portillon +5mn",
          "type": "diag",
          "titre": "Sécurité portillon active depuis plus de 5 min",
          "action": "Contrôler le portillon / son contact."
        },
        {
          "code": "Historique : FDCO / FDCF non détecté",
          "type": "diag",
          "titre": "Fin de course ouverture / fermeture non détecté",
          "action": "Le fin de course n'a pas été atteint dans le temps de mouvement (paramètre 6)."
        },
        {
          "code": "Historique : FDC ouv et ferm actifs",
          "type": "diag",
          "titre": "Les deux fins de course actifs ensemble",
          "action": "Contrôler le câblage."
        },
        {
          "code": "Historique : DEF auto test C1 à C4",
          "type": "diag",
          "titre": "Défaut d'autotest cellule 1 à 4",
          "action": "Le contact reste fermé pendant l'autotest : alimentation de l'émetteur (borne 7/8 selon J1), alignement, câblage."
        },
        {
          "code": "Historique : DEF auto test SF1 à SF4",
          "type": "diag",
          "titre": "Défaut d'autotest barre palpeuse 1 à 4",
          "action": "Vérifier l'alimentation 12 V TX (32-33) et la sensibilité."
        },
        {
          "code": "Entrée inactive",
          "type": "symptome",
          "titre": "Une entrée ne répond plus",
          "action": "Si une entrée est défectueuse, on peut la désactiver dans le menu INPUTS et déplacer le contact sur une entrée libre. Le menu INFO CARTE indique combien d'entrées ont été réaffectées ou désactivées."
        },
        {
          "code": "Fonction ouv. piéton",
          "type": "symptome",
          "titre": "L'ouverture piétonne ne marche pas",
          "action": "Affecter obligatoirement une entrée à « Cde ouv piéton » dans le menu INPUTS (par exemple IN4 pour la borne 22) ; paramètre 12 différent de « Non » ; la commande n'est prise en compte que porte fermée."
        },
        {
          "code": "Mode manoeuvre",
          "type": "symptome",
          "titre": "Moteur à tester ou fins de course à régler",
          "action": "MANOEUVRES : pilotage en homme mort, sécurités ignorées, fins de course et sorties toujours actifs. Sens des boutons : la notice dit « + ouvre, − ferme » (p. 12 et 22) mais « BP1 ouverture, BP2 fermeture » (p. 37) : se fier à l'afficheur (Ouverture forcée / Fermeture forcée). Sortie par VALID (3 s maintenu en règle générale)."
        }
      ],
      "afficheur": {
        "intro": "Afficheur LCD à menus : UTILISATION, PARAMETRAGE (mot de passe 0000), MANOEUVRES, DIAGNOSTIC, INPUTS, MENU USINE, HORLOGE, INFO CARTE, et FDC ELECTRONIQUE (visible seulement si fin de course électronique choisi et encodeur raccordé). Toucher VALID pour entrer, + / − pour défiler, VALID 3 s pour sortir en mémorisant.",
        "autres": [
          {
            "titre": "Écrans en utilisation",
            "texte": "Ligne 1 : « Attente commande » ou l'étape du cycle (Préavis ouverture, Ouv. en cours, Ferm. en cours). Ligne 2 : position de la porte (Porte Fermée / Entrouverte / Ouverte). Ligne 3 : « Cycles : N » ou les sécurités actives (C.1234, SF.1234, S0.234, « Stop actif »)."
          },
          {
            "titre": "Menu DIAGNOSTIC",
            "texte": "Affiche en temps réel l'état de toutes les entrées de la carte par un pictogramme : contact fermé / ouvert, entrée active / inactive (une entrée de sécurité active = contact ouvert). Sortie : descendre jusqu'à RETOUR et valider, ou VALID 3 s."
          },
          {
            "titre": "Menu MANOEUVRES",
            "texte": "Commande de la porte en marche forcée avec les boutons (voir la contradiction + / BP1 notée dans l'onglet Codes). Les sécurités ne sont pas prises en compte ; les fins de course et les sorties restent actifs. Sert au réglage des fins de course et à manœuvrer en cas de défaut de sécurité."
          },
          {
            "titre": "INFO CARTE",
            "texte": "Version du programme (par ex. 1.07), numéro de série, nombre de jours et d'heures de fonctionnement, nombre d'entrées réaffectées ou désactivées."
          }
        ]
      },
      "bornier": {
        "groupes": [
          {
            "nom": "Alimentation et moteur",
            "bornes": [
              {
                "n": "42-43",
                "label": "Alimentation 230 V",
                "desc": "Pont 42-43 si 230 V mono ou tri. Ne pas amener de tension sur ces bornes.",
                "t": "alim"
              },
              {
                "n": "42-44",
                "label": "Alimentation 400 V",
                "desc": "Pont 42-44 si 400 V. Ne pas amener de tension sur ces bornes.",
                "t": "alim"
              },
              {
                "n": "L1 L2 L3 (50-52)",
                "label": "Alimentation générale",
                "desc": "Version contacts secs : sur L1-L2-L3. Version contacteurs : sur les contacteurs. Raccordement possible quel que soit le régime de neutre ; toujours relier à la terre.",
                "t": "alim"
              },
              {
                "n": "U · V · W",
                "label": "Moteur",
                "desc": "Moteur mono : commun sur U, ouverture sur V, fermeture sur W ; condensateur déporté en parallèle sur V et W.",
                "t": "moteur"
              },
              {
                "n": "47 · 48 · 49",
                "label": "Sorties pour contacteurs",
                "desc": "COM / ouverture / fermeture : version contact sec seulement (47 commun, 48 ouverture, 49 fermeture).",
                "t": "moteur"
              },
              {
                "n": "45 · 46",
                "label": "Terre",
                "desc": "Symboles de terre sur le schéma de la notice (bornier vertical).",
                "t": "alim"
              },
              {
                "n": "1-2",
                "label": "Arrêt d'urgence",
                "desc": "Coupe le circuit 24 V ; ponter 1-2 si inutilisé. Avec un fin de course électronique AFME : raccorder obligatoirement la sortie SECU OUT de la carte encodeur sur 1-2 (fils 0,5 mm² mini).",
                "t": "nf"
              },
              {
                "n": "3-4 · 5-6",
                "label": "Sorties 0 V · 24 V",
                "desc": "Alimentation des organes de commande : somme ≤ 25 W (40 W si aucun feu orange).",
                "t": "alim"
              }
            ]
          },
          {
            "nom": "Sorties",
            "bornes": [
              {
                "n": "7-8",
                "label": "Autotest 24 V ou contact sec",
                "desc": "Choix avec J1 : contact sec NO 500 ms avant le départ, ou 24 V AC coupé 500 ms. Le texte p. 7 parle de la borne 7, les schémas p. 7 et 36 de la borne 8 pour l'émetteur : vérifier sur site.",
                "t": "sortie"
              },
              {
                "n": "9 · 10 · 11",
                "label": "Feux oranges 24 V",
                "desc": "9 = 0 V ; 10 = feu extérieur ; 11 = feu intérieur ; 15 W maxi, sans clignoteur propre (CL1 / CL2 réservés aux feux oranges).",
                "t": "sortie"
              },
              {
                "n": "12-13",
                "label": "Option 1",
                "desc": "Contact sec programmable (paramètres 40-41), 5 A maxi. Défaut : frein synchronisé.",
                "t": "sortie"
              },
              {
                "n": "14-15",
                "label": "Option 2",
                "desc": "Contact sec programmable (paramètres 42-43), 5 A maxi. Défaut : sécurité.",
                "t": "sortie"
              },
              {
                "n": "16-17",
                "label": "Éclairage de zone",
                "desc": "Contact sec : aucune tension sur ces bornes. Phase sur 16, lampe entre la borne 17 et le neutre ; en 400 V tri, le neutre est indispensable.",
                "t": "sortie"
              },
              {
                "n": "32 · 33 · 34 · 35",
                "label": "TX test / RX",
                "desc": "0 V / 12 V émetteur et récepteur NPN 12 V (barre palpeuse AFCA), 12 VA maxi.",
                "t": "sortie"
              }
            ]
          },
          {
            "nom": "Entrées de commande (affectables par le menu INPUTS)",
            "bornes": [
              {
                "n": "18",
                "label": "COM",
                "desc": "Commun des commandes (toutes les bornes COM sont reliées).",
                "t": "autre"
              },
              {
                "n": "19",
                "label": "OUV",
                "desc": "Ouverture par impulsion.",
                "t": "no"
              },
              {
                "n": "20",
                "label": "FERM",
                "desc": "Fermeture par impulsion.",
                "t": "no"
              },
              {
                "n": "21",
                "label": "STOP",
                "desc": "Stop ; entrée désactivée d'origine (paramètre 38). La notice dit « NF » p. 5 et « normalement ouvert » p. 34 : vérifier à l'afficheur (menu DIAGNOSTIC).",
                "t": "nf"
              },
              {
                "n": "22",
                "label": "OUV F / OUV P (IN4)",
                "desc": "Ouverture forcée par défaut, ou ouverture partielle si IN4 est configurée en piéton dans le menu INPUTS.",
                "t": "no"
              },
              {
                "n": "23",
                "label": "FERM F",
                "desc": "Fermeture forcée (homme mort).",
                "t": "no"
              },
              {
                "n": "24 · 25 · 26",
                "label": "Fins de course",
                "desc": "24 commun ; 25 fin de course ouverture ; 26 fin de course fermeture. Si pas de fins de course : paramètre 2 sur « Non ».",
                "t": "nf"
              }
            ]
          },
          {
            "nom": "Cellules et barres palpeuses",
            "bornes": [
              {
                "n": "30 · 31",
                "label": "R1 · R2",
                "desc": "Réglage de la sensibilité n°1 et n°2 pour cellules PB18 (barre palpeuse AFCA).",
                "t": "autre"
              },
              {
                "n": "36",
                "label": "COM",
                "desc": "Commun des cellules.",
                "t": "autre"
              },
              {
                "n": "37",
                "label": "C1",
                "desc": "Contact de la cellule de sécurité n°1.",
                "t": "nf"
              },
              {
                "n": "38",
                "label": "C2",
                "desc": "Contact de la cellule de sécurité n°2.",
                "t": "nf"
              },
              {
                "n": "39",
                "label": "COM",
                "desc": "Commun des barres palpeuses.",
                "t": "autre"
              },
              {
                "n": "40",
                "label": "SO1",
                "desc": "Sécurité ouverture / barre palpeuse d'ouverture.",
                "t": "nf"
              },
              {
                "n": "41",
                "label": "SF1",
                "desc": "Barre palpeuse fermeture.",
                "t": "nf"
              }
            ]
          },
          {
            "nom": "Connecteurs de la carte",
            "bornes": [
              {
                "n": "H1",
                "label": "Clavier déporté",
                "desc": "Connecteur pour BP clavier déporté (option clavier sensitif AUTO / MANU : STOP, MARCHE FORCÉE, AUTO, MANU).",
                "t": "bus"
              },
              {
                "n": "H2",
                "label": "Fin de course électronique",
                "desc": "Raccordement du fin de course électronique de moteur AFM / AFCA (RS485 : 12 V, GND, 5 V, A, B).",
                "t": "bus"
              },
              {
                "n": "REC1",
                "label": "Récepteur embrochable",
                "desc": "Connecteur du récepteur V2 (MR).",
                "t": "bus"
              },
              {
                "n": "P1",
                "label": "Contraste",
                "desc": "Potentiomètre de contraste de l'afficheur (réglé en usine).",
                "t": "autre"
              }
            ]
          }
        ],
        "fusibles": "F1 1,25 A rapide (circuit 24 V) · F2 0,25 A retardé (alimentation générale). 5x20 corps céramique, pouvoir de coupure > 1500 A. Charge maxi moteur : 2,2 kW en 400 V, 1,5 kW en 230 V ; 24 V et 12 V : 30 VA au total.",
        "notes": [
          "Les entrées de sécurité non utilisées doivent être pontées. L'arrêt d'urgence ne doit pas être raccordé avec les autres sécurités. Ou les désactiver dans le menu PARAMETRAGE.",
          "Le STOP, si utilisé, doit être activé en programmation (paramètre 38). Si 1-2 (arrêt d'urgence) est inutilisé : ponter.",
          "Les commandes d'ouverture et de fermeture forcées fonctionnent en pression maintenue : cellules, barres palpeuses et STOP inactifs.",
          "Détecteur de boucle LDP1 230 V ou boucle magnétique + ZPD11 : raccordés sur les entrées de commande (18-23) pour ouverture, fermeture, stop.",
          "Bornes 40 et 41 : barre palpeuse d'ouverture (SO1) et de fermeture (SF1).",
          "Les entrées IN1 à IN11 se réaffectent dans le menu INPUTS : consulter INFO CARTE pour savoir si la configuration par défaut a été modifiée.",
          "Récepteur embrochable MR (versions « récepteur embrochable ») : 433 MHz, 1008 codes. Canal 1 = ouverture totale (START), canal 2 = ouverture partielle (START.P), canal 3 = STOP, canal 4 = pilotage option 1 si relayage R1 activé (Startéco 4).",
          "Mémoriser un émetteur : appuyer X fois sur BP1 selon le canal voulu (la LED L1 clignote autant de fois que le numéro de fonction), puis dans les 7 s émettre avec la touche à programmer ; la LED s'éteint puis se rallume : code enregistré.",
          "Ajouter des émetteurs à distance : avec un émetteur déjà mémorisé, appuyer ensemble sur 1 et 2 pendant 8 s ; dans les 5 s, appuyer 3 s sur la touche de chaque nouvel émetteur (2 s d'attente entre chaque). Sortie automatique après 10 s.",
          "Vider toute la mémoire du MR1 : couper l'alimentation, maintenir BP1 en remettant sous tension (la LED 1 clignote), relâcher BP1. Un effacement partiel demande le programmateur PROG2 ou le logiciel WINPPCL."
        ]
      },
      "parametres": {
        "intro": "Menu PARAMETRAGE : 47 paramètres selon la notice, numérotés 1 à 38 et 40 à 47 (pas de 39) (mot de passe 0000). Plages divergentes entre le texte et les tableaux de la notice (paramètres 6, 13, 14, 35, 37, 38) : la fiche suit les tableaux. Seuls les paramètres principaux sont visibles : les optionnels apparaissent quand leur fonction est activée (par exemple, cellules 2 à 4 seulement si les entrées sont affectées dans INPUTS). Valeurs d'usine reprises des tableaux de la notice.",
        "navigation": [
          "Carte au repos : VALID donne accès aux menus ; + / − pour choisir (UTILISATION, PARAMETRAGE, MANOEUVRES, DIAGNOSTIC, INPUTS, MENU USINE, HORLOGE, INFO CARTE). VALID pour entrer.",
          "Dans un menu : VALID choisit le paramètre à modifier et valide ; + / − défilent et changent la valeur. Maintenir VALID 3 s : sortir en mémorisant.",
          "Mot de passe : curseur sur le chiffre, +/− pour la valeur, VALID pour passer au suivant."
        ],
        "groupes": [
          {
            "nom": "Fonctionnement, temps",
            "items": [
              {
                "code": "1",
                "def": "Semi auto 2bp",
                "titre": "Mode de fonctionnement",
                "valeurs": [
                  [
                    "Semi auto 2bp",
                    "OUV ouvre, FERM ferme"
                  ],
                  [
                    "Auto réarm",
                    "Fermeture automatique après la pause ; tempo relancée par OUV ou passage cellule"
                  ],
                  [
                    "Séquentiel 1bp",
                    "OUV : ouverture, arrêt, fermeture"
                  ],
                  [
                    "Auto blocage",
                    "Refermeture immédiate si passage devant la cellule 1"
                  ],
                  [
                    "Mixte",
                    "Ouverture impulsionnelle, fermeture en homme mort (commande maintenue sur FERM)"
                  ],
                  [
                    "Maintenue",
                    "Homme mort 2BP : OUV et FERM maintenus"
                  ]
                ],
                "note": "En mode auto, le paramètre 3 (temps de pause) apparaît."
              },
              {
                "code": "2",
                "def": "Oui",
                "titre": "Fins de course",
                "valeurs": [
                  [
                    "Non",
                    "Sans fins de course : le moteur travaille le temps du paramètre 6"
                  ],
                  [
                    "Oui",
                    "Arrêt par les fins de course (paramètre 6 reste à saisir)"
                  ],
                  [
                    "Électronique",
                    "Codeur du moteur AFM / AFCA : réglage dans le menu FDC ELECTRONIQUE"
                  ]
                ],
                "note": "Sans fins de course ou si elles coupent les phases moteur : ne pas les ponter mais mettre « Non »."
              },
              {
                "code": "3",
                "def": "1 s",
                "titre": "Temps de pause automatique",
                "valeurs": [
                  [
                    "1 > 360 s",
                    "Pause avant la fermeture automatique"
                  ]
                ],
                "note": "Non visible si le mode automatique est désactivé."
              },
              {
                "code": "4",
                "def": "Non",
                "titre": "Fonction haut trafic",
                "valeurs": [
                  [
                    "Non",
                    "Désactivée"
                  ],
                  [
                    "Oui",
                    "Après 5 passages devant la cellule C1 avant l'ouverture totale, la pause passe à la valeur du paramètre 5"
                  ]
                ],
                "note": "Visible si « Auto réarm » actif."
              },
              {
                "code": "5",
                "def": "1 mn",
                "titre": "Temps de pause haut trafic",
                "valeurs": [
                  [
                    "1 > 5 min",
                    "Évite des démarrages inutiles du moteur"
                  ]
                ],
                "note": "Visible si haut trafic actif."
              },
              {
                "code": "6",
                "def": "10 s",
                "titre": "Temps de mouvement (travail ou antipatinage)",
                "valeurs": [
                  [
                    "1 > 360 s",
                    "Durée d'une ouverture totale + 10 % de marge"
                  ]
                ]
              },
              {
                "code": "7",
                "def": "Attente",
                "titre": "Mise sous tension",
                "valeurs": [
                  [
                    "Attente",
                    "Attend un ordre après coupure ou arrêt d'urgence"
                  ],
                  [
                    "Fermeture",
                    "Lance une fermeture"
                  ]
                ]
              },
              {
                "code": "8",
                "def": "2 s",
                "titre": "Préavis ouverture",
                "valeurs": [
                  [
                    "1 > 60 s",
                    "Tableau : 1 à 60 s"
                  ]
                ],
                "note": "Le texte de la notice dit 0 à 360 s ; le tableau 1 à 60 s : vérifier à l'afficheur."
              },
              {
                "code": "9",
                "def": "2 s",
                "titre": "Préavis fermeture",
                "valeurs": [
                  [
                    "1 > 60 s",
                    "Tableau : 1 à 60 s"
                  ]
                ],
                "note": "Idem paramètre 8."
              },
              {
                "code": "10",
                "def": "Non",
                "titre": "Éclairage de zone pendant la pause",
                "valeurs": [
                  [
                    "Non",
                    "S'éteint"
                  ],
                  [
                    "Permanent",
                    "Reste allumé porte ouverte"
                  ],
                  [
                    "Temporisé",
                    "Durée du paramètre 11"
                  ]
                ]
              },
              {
                "code": "11",
                "def": "0 s",
                "titre": "Temps éclairage pendant la pause",
                "valeurs": [
                  [
                    "1 > 360 s",
                    "Visible si paramètre 10 = temporisé"
                  ]
                ]
              }
            ]
          },
          {
            "nom": "Piéton et frein",
            "items": [
              {
                "code": "12",
                "def": "Non",
                "titre": "Temps d'ouverture piéton",
                "valeurs": [
                  [
                    "Non",
                    "Ouverture piétonne désactivée"
                  ],
                  [
                    "FDC piéton",
                    "Fin de course piéton (entrée à affecter)"
                  ],
                  [
                    "0,1 > 360 s",
                    "Ouverture pendant le temps réglé"
                  ]
                ],
                "note": "Il faut affecter une entrée « Cde ouv piéton » dans INPUTS. Tableau : « 1 s à temps P4 », commentaire « en 10ièmes de seconde » : vérifier à l'afficheur."
              },
              {
                "code": "13",
                "def": "5 s",
                "titre": "Temps de pause piéton",
                "valeurs": [
                  [
                    "1 > 360 s",
                    "Avant refermeture après une commande partielle (mode automatique)"
                  ]
                ]
              },
              {
                "code": "14",
                "def": "0,5 s",
                "titre": "Temps de décalage du frein",
                "valeurs": [
                  [
                    "0,1 > 5,0 s",
                    "Avance ou retard du contact frein"
                  ]
                ]
              },
              {
                "code": "15",
                "def": "0",
                "titre": "Temps d'action sur la commande d'ouverture pour déblocage du frein (écran « Tps.débloc.Frein »)",
                "valeurs": [
                  [
                    "0 > 360",
                    "Si une sécurité est active"
                  ]
                ],
                "note": "Les libellés écran des paramètres 15 et 16 semblent inversés par rapport au tableau de la notice : se fier à l'écran."
              },
              {
                "code": "16",
                "def": "1",
                "titre": "Temps de déblocage du frein (écran « Tps.act.débloc.Fr »)",
                "valeurs": [
                  [
                    "1 > 10",
                    "Durée du déblocage du frein par la commande"
                  ]
                ],
                "note": "Permet aux utilisateurs de manœuvrer le portail à la main en cas de panne (motorisation réversible)."
              },
              {
                "code": "17",
                "def": "Non",
                "titre": "Frein pendant les inversions de mouvement",
                "valeurs": [
                  [
                    "Non",
                    "Frein non activé avant une inversion"
                  ],
                  [
                    "Oui",
                    "Frein activé avant une inversion"
                  ]
                ]
              }
            ]
          },
          {
            "nom": "Sécurités",
            "items": [
              {
                "code": "18",
                "def": "Oui",
                "titre": "Sécu. fermeture 1 (palpeur SF1)",
                "valeurs": [
                  [
                    "Non",
                    "Entrée désactivée (inutile de la ponter)"
                  ],
                  [
                    "Oui",
                    "Prise en compte"
                  ],
                  [
                    "Autotest",
                    "Prise en compte et testée avant chaque départ (fermeture pour palpeurs SF et cellules C, ouverture pour sécurités SO) ; contact resté fermé = arrêt comme un STOP"
                  ]
                ],
                "note": "Si autotest : accès direct au temps d'autotest."
              },
              {
                "code": "19 · 20 · 21",
                "def": "Non",
                "titre": "Sécu. fermeture 2 · 3 · 4 (SF2 à SF4)",
                "valeurs": [
                  [
                    "Non",
                    "Entrée désactivée (inutile de la ponter)"
                  ],
                  [
                    "Oui",
                    "Prise en compte"
                  ],
                  [
                    "Autotest",
                    "Prise en compte et testée avant chaque départ (fermeture pour palpeurs SF et cellules C, ouverture pour sécurités SO) ; contact resté fermé = arrêt comme un STOP"
                  ]
                ],
                "note": "Invisibles si SF2 / SF3 / SF4 non affectés dans INPUTS."
              },
              {
                "code": "22 à 25",
                "def": "Non",
                "titre": "Sécu. ouverture 1 à 4 (SO1 à SO4)",
                "valeurs": [
                  [
                    "Non",
                    "Entrée désactivée (inutile de la ponter)"
                  ],
                  [
                    "Oui",
                    "Prise en compte"
                  ],
                  [
                    "Autotest",
                    "Prise en compte et testée avant chaque départ (fermeture pour palpeurs SF et cellules C, ouverture pour sécurités SO) ; contact resté fermé = arrêt comme un STOP"
                  ]
                ],
                "note": "22 = palpeur 1 ouverture. Invisibles si SO2 à SO4 non affectés."
              },
              {
                "code": "26",
                "def": "Inversion totale",
                "titre": "Action sur sécurité (palpeurs / ouverture)",
                "valeurs": [
                  [
                    "Inversion totale",
                    "Le mouvement est inversé totalement"
                  ],
                  [
                    "Inversion 3s",
                    "Inversé 3 s puis reprise ; au 3e essai le cycle s'arrête et l'armoire attend un ordre"
                  ],
                  [
                    "StopOUV Inv.FERM 2s",
                    "Ouverture : inversé 2 s puis arrêt ; fermeture : inversion"
                  ]
                ],
                "note": "Actif sur SF1 à SF4 et SO1 à SO4."
              },
              {
                "code": "27",
                "def": "Oui",
                "titre": "Activation cellule 1 (C1)",
                "valeurs": [
                  [
                    "Non",
                    "Entrée désactivée (inutile de la ponter)"
                  ],
                  [
                    "Oui",
                    "Prise en compte"
                  ],
                  [
                    "Autotest",
                    "Prise en compte et testée avant chaque départ (fermeture pour palpeurs SF et cellules C, ouverture pour sécurités SO) ; contact resté fermé = arrêt comme un STOP"
                  ]
                ]
              },
              {
                "code": "28",
                "def": "Non",
                "titre": "Activation cellule 2 (C2)",
                "valeurs": [
                  [
                    "Non",
                    "Entrée désactivée (inutile de la ponter)"
                  ],
                  [
                    "Oui",
                    "Prise en compte"
                  ],
                  [
                    "Autotest",
                    "Prise en compte et testée avant chaque départ (fermeture pour palpeurs SF et cellules C, ouverture pour sécurités SO) ; contact resté fermé = arrêt comme un STOP"
                  ]
                ]
              },
              {
                "code": "29 · 30",
                "def": "Non",
                "titre": "Activation cellules 3 · 4 (C3, C4)",
                "valeurs": [
                  [
                    "Non",
                    "Entrée désactivée (inutile de la ponter)"
                  ],
                  [
                    "Oui",
                    "Prise en compte"
                  ],
                  [
                    "Autotest",
                    "Prise en compte et testée avant chaque départ (fermeture pour palpeurs SF et cellules C, ouverture pour sécurités SO) ; contact resté fermé = arrêt comme un STOP"
                  ]
                ],
                "note": "Invisibles si C3 / C4 non affectées dans INPUTS."
              },
              {
                "code": "31 à 34",
                "def": "Réouv. sur cellules",
                "titre": "Fonction cellule 1 à 4",
                "valeurs": [
                  [
                    "Réouv. sur cellules",
                    "Inversion totale du mouvement"
                  ],
                  [
                    "Arrêt sur cellules",
                    "Arrêt, puis reprise dans le sens initial à la libération"
                  ]
                ],
                "note": "31 et 32 pour C1 et C2 ; 33 et 34 invisibles si C3 / C4 non affectées."
              },
              {
                "code": "35",
                "def": "Normal",
                "titre": "C1 en ADMAP",
                "valeurs": [
                  [
                    "Normal",
                    "Fonctionnement normal"
                  ],
                  [
                    "Admap",
                    "Si C1 est activée lors d'une commande d'ouverture, la porte ne part que quand C1 est libérée"
                  ]
                ]
              },
              {
                "code": "36",
                "def": "0,4 s",
                "titre": "Temps d'autotest",
                "valeurs": [
                  [
                    "0,1 > 2,0 s",
                    "Durée de vérification du signal de sortie des sécurités"
                  ]
                ]
              },
              {
                "code": "37",
                "def": "0,5 s",
                "titre": "Temps avant inversion de mouvement",
                "valeurs": [
                  [
                    "0,0 > 2,0 s",
                    "Sur sécurité ouverture et palpeur, pas sur cellule"
                  ]
                ]
              },
              {
                "code": "38",
                "def": "Non",
                "titre": "BP STOP",
                "valeurs": [
                  [
                    "Non",
                    "Entrée STOP ignorée (inutile de la ponter)"
                  ],
                  [
                    "Oui",
                    "Entrée STOP prise en compte"
                  ]
                ],
                "note": "Si l'entrée STOP n'est pas utilisée, laisser sur « Non » pour éviter de la ponter."
              }
            ]
          },
          {
            "nom": "Contacts option 1 et 2, relayage",
            "items": [
              {
                "code": "40",
                "def": "Fr. synchro",
                "titre": "Option 1 (bornes 12-13)",
                "valeurs": [
                  [
                    "Mode Manu Actif",
                    "Indique que le mode homme mort est actif"
                  ],
                  [
                    "Porte ouverte",
                    "Actif porte sur fin de course ouverture (ou fin de tempo sans fins de course)"
                  ],
                  [
                    "Porte fermée",
                    "Actif porte sur fin de course fermeture (ou fin de tempo)"
                  ],
                  [
                    "Ouverture",
                    "Actif pendant l'ouverture"
                  ],
                  [
                    "Fermeture",
                    "Actif pendant la fermeture"
                  ],
                  [
                    "Fr. synchro",
                    "Actif en même temps que le moteur (frein)"
                  ],
                  [
                    "Rtrd.Fr.Ouv",
                    "Frein retardé à l'ouverture : activé avec le contacteur ouverture + temps du paramètre 14"
                  ],
                  [
                    "Rtrd.Fr.Ouv.Ferm",
                    "Frein retardé à l'ouverture et à la fermeture (désactivation après l'arrêt moteur, selon le paramètre 14)"
                  ],
                  [
                    "Rtrd.Fr.Ouv.Av.Ferm",
                    "Frein retardé à l'ouverture et avancé à la fermeture"
                  ],
                  [
                    "Relayage R1",
                    "Piloté par le canal 4 du récepteur ou par une entrée affectée (monostable, bistable, tempo)"
                  ],
                  [
                    "Vanne",
                    "Option 2 : actif quand la porte n'est pas fermée ou en fermeture"
                  ],
                  [
                    "Gâche / ventouse",
                    "Actif 2 s avant l'ouverture et 1 s après le départ moteur"
                  ],
                  [
                    "Cde PV variateur",
                    "Actif après 2 activations de l'entrée FdC petite vitesse (mémorise l'info petite vitesse)"
                  ],
                  [
                    "Feux oranges clign.",
                    "En même temps que la sortie clignotante (pilotage de feux avec clignoteur 24 ou 230 V)"
                  ],
                  [
                    "Ecl. zone fixe",
                    "En même temps que la sortie éclairage de zone"
                  ],
                  [
                    "Sécurité",
                    "Actif tant qu'une sécurité est détectée"
                  ]
                ]
              },
              {
                "code": "41",
                "def": "NO",
                "titre": "Option 1 : NO / NF",
                "valeurs": [
                  [
                    "NO",
                    "Ouvert au repos"
                  ],
                  [
                    "NF",
                    "Fermé au repos"
                  ]
                ],
                "note": "Les 2 contacts option sont ouverts hors tension ou arrêt d'urgence actionné, quelle que soit la programmation."
              },
              {
                "code": "42",
                "def": "Sécurité",
                "titre": "Option 2 (bornes 14-15)",
                "valeurs": [
                  [
                    "Mode Manu Actif",
                    "Indique que le mode homme mort est actif"
                  ],
                  [
                    "Porte ouverte",
                    "Actif porte sur fin de course ouverture (ou fin de tempo sans fins de course)"
                  ],
                  [
                    "Porte fermée",
                    "Actif porte sur fin de course fermeture (ou fin de tempo)"
                  ],
                  [
                    "Ouverture",
                    "Actif pendant l'ouverture"
                  ],
                  [
                    "Fermeture",
                    "Actif pendant la fermeture"
                  ],
                  [
                    "Fr. synchro",
                    "Actif en même temps que le moteur (frein)"
                  ],
                  [
                    "Rtrd.Fr.Ouv",
                    "Frein retardé à l'ouverture : activé avec le contacteur ouverture + temps du paramètre 14"
                  ],
                  [
                    "Rtrd.Fr.Ouv.Ferm",
                    "Frein retardé à l'ouverture et à la fermeture (désactivation après l'arrêt moteur, selon le paramètre 14)"
                  ],
                  [
                    "Rtrd.Fr.Ouv.Av.Ferm",
                    "Frein retardé à l'ouverture et avancé à la fermeture"
                  ],
                  [
                    "Relayage R2",
                    "Piloté par le canal 4 du récepteur ou par une entrée affectée (monostable, bistable, tempo)"
                  ],
                  [
                    "Vanne",
                    "Option 2 : actif quand la porte n'est pas fermée ou en fermeture"
                  ],
                  [
                    "Gâche / ventouse",
                    "Actif 2 s avant l'ouverture et 1 s après le départ moteur"
                  ],
                  [
                    "Cde PV variateur",
                    "Actif après 2 activations de l'entrée FdC petite vitesse (mémorise l'info petite vitesse)"
                  ],
                  [
                    "Feux oranges clign.",
                    "En même temps que la sortie clignotante (pilotage de feux avec clignoteur 24 ou 230 V)"
                  ],
                  [
                    "Ecl. zone fixe",
                    "En même temps que la sortie éclairage de zone"
                  ],
                  [
                    "Sécurité",
                    "Actif tant qu'une sécurité est détectée"
                  ],
                  [
                    "Feux oranges",
                    "Actif pendant la manœuvre et le préavis (libellé « Éclairage » p. 21)"
                  ]
                ]
              },
              {
                "code": "43",
                "def": "NO",
                "titre": "Option 2 : NO / NF",
                "valeurs": [
                  [
                    "NO",
                    "Ouvert au repos"
                  ],
                  [
                    "NF",
                    "Fermé au repos"
                  ]
                ]
              },
              {
                "code": "44",
                "def": "Monostable",
                "titre": "Fonction relayage R1",
                "valeurs": [
                  [
                    "Monostable · Bistable · Tempo travail · Tempo repos",
                    "Fonction du relais du relayage"
                  ]
                ],
                "note": "Visible si relayage activé sur l'option 1."
              },
              {
                "code": "45",
                "def": "1 s",
                "titre": "Réglage temporisation R1",
                "valeurs": [
                  [
                    "1 s > 60 min",
                    "Selon tempo choisie"
                  ]
                ],
                "note": "Visible si tempo activée sur R1."
              },
              {
                "code": "46",
                "def": "Monostable",
                "titre": "Fonction relayage R2",
                "valeurs": [
                  [
                    "Monostable · Bistable · Tempo travail · Tempo repos",
                    "Fonction du relais du relayage"
                  ]
                ],
                "note": "Visible si relayage activé sur l'option 2."
              },
              {
                "code": "47",
                "def": "1 s",
                "titre": "Réglage temporisation R2",
                "valeurs": [
                  [
                    "1 s > 60 min",
                    "Selon tempo choisie"
                  ]
                ],
                "note": "Visible si tempo activée sur R2."
              }
            ]
          },
          {
            "nom": "MENU USINE",
            "items": [
              {
                "code": "U1",
                "def": "Français",
                "titre": "Choix langue",
                "valeurs": [
                  [
                    "Français",
                    "Langue des textes de l'afficheur"
                  ]
                ]
              },
              {
                "code": "U2",
                "def": "Bloquant",
                "titre": "Traitement FDC",
                "valeurs": [
                  [
                    "Bloquant",
                    "En cas de défaut fin de course, la carte se bloque : coupure d'alimentation ou arrêt d'urgence pour réarmer"
                  ],
                  [
                    "Non bloquant",
                    "Le cycle s'arrête, mais un nouvel ordre relance un cycle"
                  ]
                ]
              },
              {
                "code": "U3",
                "def": "Normal",
                "titre": "Rotation moteur ouverture",
                "valeurs": [
                  [
                    "Normal",
                    "Sens du câblage"
                  ],
                  [
                    "Inverse",
                    "Inverse le sens moteur sans changer le câblage"
                  ]
                ]
              },
              {
                "code": "U4",
                "def": "Non",
                "titre": "Modifier le mot de passe",
                "valeurs": [
                  [
                    "Oui",
                    "Saisir et confirmer le nouveau mot de passe"
                  ]
                ]
              },
              {
                "code": "U5",
                "def": "Non",
                "titre": "Reset Eeprom",
                "valeurs": [
                  [
                    "Oui",
                    "Réinitialise la carte : tous les paramètres reviennent aux valeurs par défaut"
                  ]
                ]
              },
              {
                "code": "U6",
                "def": "Non",
                "titre": "Reset cycles",
                "valeurs": [
                  [
                    "Oui",
                    "Remet le compteur de cycles à zéro"
                  ]
                ]
              },
              {
                "code": "U7",
                "def": "Non",
                "titre": "Reset défauts",
                "valeurs": [
                  [
                    "Oui",
                    "Efface les défauts mémorisés"
                  ]
                ]
              },
              {
                "code": "U8",
                "def": "—",
                "titre": "Historique défauts",
                "valeurs": [
                  [
                    "VALID puis +/−",
                    "Défile les 10 derniers défauts mémorisés, le dernier d'abord, avec date et heure"
                  ]
                ]
              }
            ]
          },
          {
            "nom": "FDC ÉLECTRONIQUE (si fin de course électronique)",
            "items": [
              {
                "code": "Rotation codeur",
                "def": "—",
                "titre": "Sens du codeur",
                "valeurs": [
                  [
                    "Standard",
                    "À régler sur « standard »"
                  ],
                  [
                    "Inversé",
                    "Sens inverse du codeur"
                  ]
                ]
              },
              {
                "code": "Inhib Sécu FERM",
                "def": "Non",
                "titre": "Inhibition de la barre palpeuse dans les 50 derniers mm",
                "valeurs": [
                  [
                    "Non",
                    "Barre palpeuse active sur toute la course"
                  ],
                  [
                    "Oui",
                    "Utile si le seuil n'est pas droit et que la barre palpeuse déclenche avant la fin de course fermeture"
                  ]
                ]
              },
              {
                "code": "Réglage FDC OUV",
                "def": "—",
                "titre": "Position fin de course ouverture",
                "valeurs": [
                  [
                    "+ / − puis VALID",
                    "Ouvrir la porte à la position souhaitée, puis « Mémoriser »"
                  ]
                ]
              },
              {
                "code": "Réglage FDC piét.",
                "def": "—",
                "titre": "Position fin de course piéton",
                "valeurs": [
                  [
                    "+ / − puis VALID",
                    "Positionner la porte à la position piéton puis « Mémoriser »"
                  ]
                ],
                "note": "La notice p. 27 écrit ici « fermer totalement la porte » (probable copier-coller de FDC FERM)."
              },
              {
                "code": "Réglage FDC FERM",
                "def": "—",
                "titre": "Position fin de course fermeture",
                "valeurs": [
                  [
                    "+ / − puis VALID",
                    "Fermer totalement la porte puis « Mémoriser »"
                  ]
                ]
              }
            ]
          },
          {
            "nom": "HORLOGE intégrée",
            "items": [
              {
                "code": "Date / heure",
                "def": "—",
                "titre": "Régler date et heure",
                "valeurs": [
                  [
                    "Oui",
                    "Choisir oui pour changer la date et l'heure"
                  ]
                ]
              },
              {
                "code": "Mode horloge",
                "def": "—",
                "titre": "Type de fonctionnement",
                "valeurs": [
                  [
                    "Horloge",
                    "Standard"
                  ],
                  [
                    "Horloge + Ouv",
                    "Plage 8 h-14 h : la 1re commande donnée ouvre, la porte ne se referme qu'à 14 h sauf commande de fermeture avant"
                  ]
                ]
              },
              {
                "code": "Plages",
                "def": "—",
                "titre": "3 plages horaires journalières",
                "valeurs": [
                  [
                    "Plage 1 / 2 / 3",
                    "Choix ouverture totale ou partielle, valable pour toutes les plages"
                  ]
                ]
              }
            ]
          },
          {
            "nom": "INPUTS : affecter les entrées",
            "items": [
              {
                "code": "IN1 à IN11",
                "def": "—",
                "titre": "Fonction affectée à chaque entrée",
                "valeurs": [
                  [
                    "Commandes",
                    "Non affectée · Cde ouverture · Cde ouv ext · Cde ouv forcée · Cde ouv piéton · Cde fermeture · Cde fermeture forcée · Cde horloge · Cde horloge et ouv · Activ relayage R1 / R2 · Stop · Auto/man clavier · Cde ouv clavier · Cde ferm clavier · SAS manu"
                  ],
                  [
                    "Fins de course",
                    "Fdc ouv · Fdc ferm · Fdc piéton · Fdc PV variateur"
                  ],
                  [
                    "Sécurités",
                    "Cellule 1 à 4 · Sécu ferm 1 à 4 · Sécu ouv 1 à 4 · Sécu portillon"
                  ]
                ],
                "note": "Par défaut les entrées gardent la fonction sérigraphiée ; le signe < > indique la fonction par défaut. Seules les fonctions de commande sont affectables au récepteur et au clavier."
              }
            ]
          }
        ]
      },
      "apprentissage": {
        "avant": [
          "Toutes les étapes de raccordement hors tension.",
          "1. Pont 42-43 (230 V) ou 42-44 (400 V).",
          "2. Alimentation sur L1 L2 L3 ; 3. moteur sur U V W (moteur mono : commun U, ouverture V, fermeture W).",
          "4. Fins de course sur 24-25-26 (puis paramètre 2) ou ne pas les ponter et paramètre 2 sur « Non ».",
          "5. Accessoires 24 V ≤ 25 W (40 W sans feu orange). 6. Commandes NO libres de potentiel."
        ],
        "etapes": [
          "7. Feux oranges 24 V sur 9-10 et 9-11 (15 W max, sans clignoteur) ; 8. éclairage de zone 230 V sur 16-17 (contact sec).",
          "9. Cellules de sécurité (J1, autotest), 10. barres palpeuses, 11. ponter les entrées de sécurité non utilisées (ou les désactiver) et 1-2 si pas d'arrêt d'urgence.",
          "12. Mettre sous tension ; 13. programmer dans le menu PARAMETRAGE.",
          "14. Menu MANOEUVRES : manœuvrer le moteur en maintenu (BP1 ouverture, BP2 fermeture) pour vérifier le sens et régler les fins de course.",
          "Fin de course électronique : menu FDC ELECTRONIQUE : sens du codeur (standard), puis réglage FDC OUV, FDC piét., FDC FERM, chacun avec + / − puis « Mémoriser ».",
          "15. Régler les temporisations (antipatinage, pause, partielle) ; 16. activer les autotests des sécurités concernées ; 17. vérifier tout."
        ],
        "apres": [
          "Menu INFO CARTE : version du programme (ex. 1.07), N° de série, durée de fonctionnement.",
          "Reset EEPROM (menu USINE) : remet tous les paramètres à leurs valeurs par défaut.",
          "Rotation moteur inversée : menu USINE > « Rotation Mot Ouv » sur Inverse (pas besoin de changer le câblage)."
        ]
      }
    }
  ]
}
];
