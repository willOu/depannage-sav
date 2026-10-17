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
    modeles: "Brushless BH30/600 · BH30/800 · BH30/500/HS",
    type: "Coulissant brushless 24 V — afficheur, touches PROG / TEST",
    source: "Notice Roger IS117 Rev.07 (22/06/2016), firmware 1.40 — vérifier la version affichée à la mise sous tension",
    codes: [
      { code: "OF St", type: "afficheur", titre: "Tension secteur en défaut / initialisation échouée", action: "Couper le secteur, attendre 10 s, remettre sous tension. Si ça persiste : remplacer la carte." },
      { code: "Pr Ot", type: "afficheur", titre: "Surintensité dans l'onduleur", action: "Appuyer 2 fois sur TEST ou donner 3 commandes de suite." },
      { code: "dA tA", type: "afficheur", titre: "Valeurs de course incorrectes / moteur non connecté", action: "Refaire l'apprentissage de la course. Vérifier le câble moteur." },
      { code: "FE", type: "afficheur", titre: "Les deux fins de course actifs", action: "Vérifier les connexions des fins de course et l'absence de corps étranger dans les blocs." },
      { code: "xx EE", type: "afficheur", titre: "Erreur de paramètre de configuration", action: "Le paramètre affiché a une valeur incorrecte : la corriger et enregistrer." },
      { code: "Ene", type: "afficheur", titre: "Encodeur non connecté", action: "Vérifier la connexion de l'encodeur. Si ça persiste : remplacer l'encodeur." },
      { code: "enE", type: "afficheur", titre: "Défaut grave encodeur", action: "TEST. Si le code revient : couper 5 s puis rallumer. Si ça persiste : remplacer l'encodeur." },
      { code: "EnE", type: "afficheur", titre: "Erreur de calcul encodeur", action: "Refaire l'apprentissage de la course." },
      { code: "btLO", type: "afficheur", titre: "Batteries à plat", action: "Attendre le retour du secteur. En mode batterie, la carte n'accepte plus de commande." },
      { code: "StoP", type: "afficheur", titre: "« StoP » clignote : déblocage ouvert", action: "Refermer le levier de déblocage et tourner la clé en position fermée. Vérifier le contact de déblocage (SB)." },
      { code: "no PH", type: "afficheur", titre: "Calibrage moteur échoué", action: "Refaire l'apprentissage. Vérifier le câble encodeur-moteur, le levier de déblocage, et que le moteur tourne librement." },
      { code: "AP PE", type: "afficheur", titre: "Erreur d'acquisition", action: "TEST appuyé par erreur, sécurité en alarme ou chute de tension : TEST pour effacer, contrôler les sécurités et la tension secteur, refaire l'apprentissage." },
      { code: "AP PL", type: "afficheur", titre: "Erreur de longueur de course", action: "Portail en position fermée (fin de course FC actif), vérifier le câble des fins de course, refaire l'apprentissage (au besoin après retour aux réglages usine)." },
      { code: "FA", type: "afficheur", titre: "Fin de course ouverture atteint", action: "Information (mode TEST)." },
      { code: "FC", type: "afficheur", titre: "Fin de course fermeture atteint", action: "Information (mode TEST). Si l'état affiché ne correspond pas à la réalité : vérifier le paramètre de position du moteur." },
      { code: "Sb", type: "afficheur", titre: "Levier de déblocage ouvert (mode TEST)", action: "Refermer le levier, clé en position fermée, vérifier le contact de déblocage." },
      { code: "POWER éteinte", type: "led", titre: "LED POWER éteinte", action: "Pas de secteur ou fusibles grillés : contrôler le câble, remplacer les fusibles hors tension." },
      { code: "POWER lente", type: "led", titre: "LED POWER clignote lentement", action: "Veille après 30 min sans action : appuyer sur une touche pour réveiller." }
    ],
    bornier: {
      groupes: [
        { nom: "Sorties", bornes: [
          { n: "6 · 7", label: "COR", desc: "Éclairage de courtoisie, contact libre : 230 V 100 W / 24 V 40 W", t: "sortie" },
          { n: "8 · 9", label: "+SC / COM", desc: "Voyant portail ouvert 24 V DC 3 W — ou alimentation TX pour test photocellules / économie batterie (selon paramètre)", t: "sortie" },
          { n: "29 · 28", label: "LAM", desc: "Clignotant 24 V DC (25 W max sur BH30/800 et 500/HS, 13 W sur 600)", t: "sortie" }
        ]},
        { nom: "Sécurités (contacts NF)", bornes: [
          { n: "10 · 28", label: "FT2", desc: "Photocellules FT2. Inutilisé → ponter 10-28 ou désactiver par paramètre", t: "nf" },
          { n: "11 · 28", label: "FT1", desc: "Photocellules FT1. Inutilisé → ponter 11-28 ou désactiver par paramètre", t: "nf" },
          { n: "12 · 14", label: "COS2", desc: "Bord sensible 2, NF ou 8,2 kΩ", t: "nf" },
          { n: "13 · 14", label: "COS1", desc: "Bord sensible 1, NF ou 8,2 kΩ", t: "nf" },
          { n: "15 · 14", label: "ST", desc: "STOP, NF — ponter si inutilisé", t: "nf" }
        ]},
        { nom: "Commandes (contacts NO, commun 21)", bornes: [
          { n: "22", label: "ORO", desc: "Horloge : ouvre et maintient ouvert. Ne pas ponter si inutilisé", t: "no" },
          { n: "23", label: "AP", desc: "Ouverture", t: "no" },
          { n: "24", label: "CH", desc: "Fermeture", t: "no" },
          { n: "25", label: "PP", desc: "Pas à pas", t: "no" },
          { n: "26", label: "PED", desc: "Ouverture partielle (50 % par défaut)", t: "no" }
        ]},
        { nom: "Alimentation / antenne", bornes: [
          { n: "27 · 28", label: "+24 V", desc: "Alimentation accessoires", t: "alim" },
          { n: "20 · 19", label: "ANT", desc: "Antenne, câble RG58 10 m max, sans raccord", t: "autre" },
          { n: "L · N", label: "Secteur", desc: "230 V AC ±10 % — mesurer : en dessous, le brushless peut mal fonctionner", t: "alim" }
        ]},
        { nom: "Connecteurs usine", bornes: [
          { n: "X Y Z", label: "Moteur", desc: "Brushless, câblé usine. Si débranché : refaire l'apprentissage", t: "moteur" },
          { n: "ENC", label: "Encodeur", desc: "Toujours couper le secteur avant de le débrancher", t: "moteur" },
          { n: "FC", label: "Fins de course", desc: "Mécaniques ou magnétiques, contacts NF", t: "moteur" },
          { n: "SB", label: "Déblocage", desc: "Contact NF du levier de déblocage", t: "moteur" }
        ]}
      ],
      fusibles: "F1 15 A (circuit moteur) · F2 2 A (accessoires) · F3 T1 A ligne (T2 A sur BH30/500/HS/115V)",
      notes: [
        "Photocellules conseillées : séries R90/F4ES, G90/F4ES ou T90/F4S.",
        "Récepteur embrochable (H93/RX…) : PR1 = pas à pas, PR2 = ouverture partielle par défaut.",
        "Si +SC (8) sert au test photocellules ou à l'économie batterie, on ne peut plus y brancher le voyant."
      ]
    },
    apprentissage: {
      avant: [
        "Régler le paramètre de position du moteur (gauche / droite, vu de l'intérieur) et le modèle de moteur (BH30/600, /800, /500/HS).",
        "Homme mort désactivé (A7 = 00).",
        "Portail en position fermée.",
        "TEST : contrôler commandes et sécurités ; ponter ou désactiver les sécurités absentes."
      ],
      etapes: [
        "Maintenir PROG 4 s : « AP P… » s'affiche.",
        "Ouvrir le levier de déblocage : « PH AS » s'affiche, la carte calibre le moteur.",
        "Quand le calibrage est réussi, le message de fin clignote.",
        "Refermer le levier de déblocage : l'acquisition démarre.",
        "« FOtO » (si photocellules actives) : s'écarter du faisceau dans les 5 s.",
        "« AUto » : ouverture lente jusqu'au fin de course d'ouverture (court arrêt, « AUto » clignote), puis fermeture jusqu'au fin de course de fermeture.",
        "Réussi : l'afficheur revient à l'état des commandes et sécurités."
      ],
      apres: [
        "Erreurs possibles : no PH, AP PE, AP PL → voir l'onglet Codes et refaire l'acquisition.",
        "Mode INFO : maintenir TEST 5 s moteur à l'arrêt (version, position, courant, seuil d'obstacle…).",
        "Après coupure ou déblocage en position intermédiaire : récupération de position lente, clignotant 3 s allumé / 1,5 s éteint ; ne rien commander avant un fin de course."
      ]
    }
  }
  ]
}
];
