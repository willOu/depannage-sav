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
    modeles: "Deimos Ultra BT A400 · A600",
    type: "Coulissant 24 V — afficheur, touches + − OK",
    source: "Notice BFT D811980 00100_01",
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
      { code: "BAR", type: "diag", titre: "Bord sensible activé", action: "Bord actionné ou pont 70-74 retiré." },
      { code: "BAR 2", type: "diag", titre: "Bord sur moteur slave", action: "Vantaux opposés : bord du moteur slave." },
      { code: "SWC", type: "diag", titre: "Fin de course fermeture", action: "Diagnostic fin de course." },
      { code: "SWO", type: "diag", titre: "Fin de course ouverture", action: "Diagnostic fin de course." },
      { code: "SET", type: "diag", titre: "Attente d'une manœuvre complète", action: "La carte attend une ouverture-fermeture complète sans arrêt pour apprendre le couple. Détection d'obstacle INACTIVE pendant ce temps." },
      { code: "ER01", type: "erreur", titre: "Test photocellules échoué", action: "Vérifier le branchement des photocellules et la configuration (SAFE 1/2, FAULT)." },
      { code: "ER02", type: "erreur", titre: "Test bord échoué", action: "Vérifier le branchement du bord et la configuration." },
      { code: "ER03", type: "erreur", titre: "Test photocellules ouverture échoué", action: "Vérifier branchement et paramètres / logiques." },
      { code: "ER04", type: "erreur", titre: "Test photocellules fermeture échoué", action: "Vérifier branchement et paramètres / logiques." },
      { code: "ER05", type: "erreur", titre: "Test bord moteur slave échoué", action: "Vantaux opposés : vérifier le bord et sa configuration." },
      { code: "ER06", type: "erreur", titre: "Test bord 8K2 échoué", action: "Vérifier le bord résistif 8,2 kΩ et sa configuration." },
      { code: "ER1x", type: "erreur", titre: "Erreur test matériel de la carte", action: "Vérifier les connexions moteur. Si ça persiste : problème carte, assistance technique." },
      { code: "ER3x", type: "erreur", titre: "Inversion sur obstacle (ampérostop)", action: "Rechercher un obstacle ou point dur sur la course." },
      { code: "ER4x", type: "erreur", titre: "Protection thermique", action: "Laisser refroidir l'automatisme." },
      { code: "ER5x", type: "erreur", titre: "Communication avec dispositifs distants", action: "Vérifier la liaison série avec les cartes d'extension et accessoires." },
      { code: "ER7x", type: "erreur", titre: "Erreur interne de supervision", action: "Couper puis rallumer la carte. Si ça persiste : assistance technique." },
      { code: "ErFx", type: "erreur", titre: "Erreur fin de course", action: "Vérifier les connexions des fins de course (connecteur JP10)." },
      { code: "KO", type: "afficheur", titre: "Autoset interrompu", action: "Appui simultané sur + et − pendant l'autoset : relancer." },
      { code: "BLOC", type: "afficheur", titre: "Accès bloqué", action: "10 mots de passe faux consécutifs : attendre 3 minutes. Mot de passe par défaut : 1234." }
    ],
    bornier: {
      groupes: [
        { nom: "Puissance", bornes: [
          { n: "L · N", label: "Secteur", desc: "220-230 V 50/60 Hz (versions 120 V)", t: "alim" },
          { n: "10 · 11", label: "Moteur", desc: "MOT + / MOT −", t: "moteur" }
        ]},
        { nom: "Sorties AUX", bornes: [
          { n: "20 · 21", label: "AUX 0", desc: "Contact alimenté 24 V NO, 1 A max. Défaut : clignotant", t: "sortie" },
          { n: "26 · 27", label: "AUX 3", desc: "Contact libre NO, 24 V 1 A max. Défaut : 2e canal radio", t: "sortie" }
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
          { n: "72", label: "SAFE 1", desc: "NF configurable. Défaut : PHOT. Inutilisé → pont usine 70-72", t: "nf" },
          { n: "73", label: "FAULT 1", desc: "Entrée de test des sécurités sur SAFE 1", t: "autre" },
          { n: "74", label: "SAFE 2", desc: "NF configurable. Défaut : BAR. Inutilisé → pont usine 70-74", t: "nf" },
          { n: "75", label: "FAULT 2", desc: "Entrée de test des sécurités sur SAFE 2", t: "autre" }
        ]},
        { nom: "Antenne", bornes: [
          { n: "Y · #", label: "Antenne", desc: "Antenne accordée 433 MHz, câble RG58 (# = blindage)", t: "autre" }
        ]}
      ],
      fusibles: "F1 0,63 A T (220-230 V) / 1,6 A T (120 V) · F3 1,25 A T",
      notes: [
        "Ponts précâblés d'usine : 70-71, 70-72, 70-74 — les retirer seulement si la borne est utilisée.",
        "Changement de sens : ne pas intervertir les étriers de fin de course, utiliser la logique d'inversion de direction (dir).",
        "Afficheur éteint : + = ouverture, − = fermeture, un nouvel appui pendant le mouvement = STOP."
      ]
    },
    apprentissage: {
      avant: [
        "Faire l'autoset avec le moteur froid (pas après une série de manœuvres).",
        "Menu simplifié : régler la langue, dir (gch / drt selon le côté moteur) et éventuellement le preset (ar, sr, ac, sc, ind)."
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
        "Après un menu DEFAULT, refaire un AUTOSET."
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
  }
  ]
}
];
