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
    ]) },
  /* ---------- Barrières levantes : réponses tirées des notices ELKA, LBA et ONE-C ---------- */
  { id: "b-ouvre", groupe: "b", titre: "La barrière ne s'ouvre pas", sous: "ELKA, LBA, ONE-C",
    arbre: Q("Quelle commande équipe la barrière ?", [
      ["ELKA (logique MO 24, afficheur 4 chiffres)", Q("L'afficheur montre-t-il un code eR.. ?", [
        ["Oui, un code eR..", R("Code d'erreur de la logique MO 24", "La logique signale elle-même sa panne.", [
          "Relever le code et l'ouvrir dans l'onglet Codes de la fiche ELKA.",
          "Exemples de la notice : eR15 = tension 24 V hors plage ou accu déchargé ; eR14 = partie puissance trop chaude (attendre le refroidissement) ; eR16 = lisse manœuvrée à la main sur plus de 50 % (PROG, coupure secteur ou remise de la lisse en place pour effacer)."
        ], [["Fiche ELKA P 2500 – P 5000 : codes", "#/c/elka-p2500-5000/codes"], ["Fiche ELKA T 3000 – T 3500 : codes", "#/c/elka-t3000-3500/codes"]])],
        ["Non, rien d'affiché ou pas de réaction", R("Logique à l'arrêt ou commande non reçue", "Pas de code : vérifier le mode de service, l'alimentation et les entrées.", [
          "Commutateur de service sur RUN : en SERVICE, radio, BUS, boucles et commandes externes sont ignorés (seul le joystick agit).",
          "LED Vp (jaune) allumée ? Sinon contrôler l'alimentation (interrupteur principal, bloc 24 V).",
          "LED BTS allumée ? BTS (43-44) est un contact à ouverture : sans bouton STOP, un pont est obligatoire.",
          "Donner l'ordre et regarder la LED de l'entrée (BTA1, BTA2, BT*, RADIO) : si elle ne s'allume pas, le défaut est sur la commande ou son câblage.",
          "En position fermée, BTZ1A / BTZ1B maintenu fermé empêche l'ouverture (verrouillage)."
        ], [["Fiche ELKA P : bornier", "#/c/elka-p2500-5000/bornier"], ["Fiche ELKA T : bornier", "#/c/elka-t3000-3500/bornier"]])]
      ])],
      ["LBA 6 / 7 ou LBA 12 (automate Siemens LOGO)", R("Commande non reçue, variateur en défaut ou mécanique", "Tableau « Pannes et réglages fréquents » de la notice LBA 4/6/7. La notice LBA 12 n'a pas de tableau de pannes, mais utilise le même automate et le même principe de manivelle.", [
        "Regarder l'état des entrées de l'automate (flèches gauche / droite depuis l'écran date et heure) : la commande d'ouverture arrive-t-elle ?",
        "Vérifier le câblage de la commande d'ouverture (ou de la boucle d'ouverture libre).",
        "Un message s'affiche sur le variateur ? Le lire dans l'onglet Codes de la fiche (FAN.F, It.Ac, O.Ld1…).",
        "Manivelle bien remise à sa place sur le côté de la platine : son contacteur coupe l'alimentation de la carte.",
        "Impossible d'ouvrir même hors tension : réducteur cassé, contacter le SAV LBA (remplacement de l'ensemble motoréducteur)."
      ], [["Fiche LBA 6 / 7 : codes", "#/c/lba-67/codes"], ["Fiche LBA 12 : codes", "#/c/lba-12/codes"]])],
      ["LBA 4 (platine ENPC001652)", R("Contrôle par les LED de la platine", "Notice LBA 4, §9.7 et §12.3.", [
        "LED Cde1 : elle doit s'allumer à l'ordre d'ouverture (contact 3-4 ou radio). Sinon, défaut sur la commande ou son câblage.",
        "LED Tension électronique éteinte : contrôler l'alimentation 230 V et le fusible F1 (1 A temporisé HPC).",
        "LED Alarme allumée : temps de manœuvre trop long (anti-patinage), transformateur en surcharge ou sécurité active plus de 2 minutes.",
        "Message sur le variateur : voir l'onglet Codes. Vérifier aussi que la manivelle est remise en place."
      ], [["Fiche LBA 4 : codes et LED", "#/c/lba-4/codes"]])],
      ["Carte ONE-C (écran 4 lignes)", R("Lire le message de la dernière ligne", "Messages d'état et de mise en sécurité de la notice ONE-C.", [
        "« MANIVELLE ABSENTE » : remettre la manivelle dans son logement (le moteur est coupé).",
        "« Temps de manœuvre dépassé » : le pilotage moteur est coupé, un reset de la barrière est nécessaire (temps réglé par T_manoeuvre, 30 s par défaut).",
        "« Moteur en défaut », code 106 : moteur débranché, court-circuit sur les phases ou mauvaise configuration du moteur. Code 107 : surchauffe du module IGBT. Autre code : SAV.",
        "Rien de particulier : ENTER maintenu 2 s affiche les entrées ; l'entrée I1 (ouverture) doit passer à 1 à l'ordre. Commande locale : touche ▲."
      ], [["Fiche ONE-C : codes", "#/c/lba-one-c/codes"]])],
      ["Autre armoire", R("Utiliser le diagnostic général", "Les étapes d'alimentation, de commande et de sécurités sont les mêmes que pour un portail.", [
        "Suivre « Le portail ne s'ouvre pas » et ouvrir la fiche de l'armoire (par exemple DEA NET230N type 03 barrière)."
      ], [["Diagnostic : ne s'ouvre pas", "#/d/ouvre"], FICHES])]
    ]) },
  { id: "b-ferme", groupe: "b", titre: "La barrière ne se ferme pas", sous: "Ou reste ouverte sans refermer seule",
    arbre: Q("Quelle commande équipe la barrière ?", [
      ["ELKA (logique MO 24)", Q("Elle ne se ferme pas du tout, ou elle ne se referme pas seule ?", [
        ["Pas du tout, même sur ordre", R("Une sécurité ou une commande bloque la fermeture", "La MO 24 ne ferme pas tant qu'une sécurité signale ou qu'un ordre d'ouverture est maintenu.", [
          "LED SLZ (rouge) allumée : tranche de sécurité activée (21-22, résistance 8,2 kΩ).",
          "LED LS allumée : contact des cellules ouvert (obstacle, alignement, câblage).",
          "LED IL-A / IL-B / IL-C allumée : boucle occupée ; si elle clignote, erreur de boucle (voir eR04 à eR06).",
          "LED BTA1 ou BTA2 allumée en permanence : commande d'ouverture maintenue.",
          "Code eR07 ou eR08 : test des cellules ou de la tranche de sécurité en échec."
        ], [["Fiche ELKA P : codes", "#/c/elka-p2500-5000/codes"], ["Fiche ELKA T : codes", "#/c/elka-t3000-3500/codes"]])],
        ["Elle ne se referme pas seule", R("Fermeture automatique non réglée", "Paramètres de la notice MO 24.", [
          "P301 = 0,0 s : fermeture automatique désactivée. Régler une durée de maintien à l'ouverture.",
          "Après un STOP, la fermeture automatique reste bloquée jusqu'à la commande suivante.",
          "Fermeture par les cellules : P543 = 1. Par les boucles : « fermer à la libération » P703 / P713 / P723 = 1."
        ], [["Fiche ELKA P : paramètres", "#/c/elka-p2500-5000/param"], ["Fiche ELKA T : paramètres", "#/c/elka-t3000-3500/param"]])]
      ])],
      ["LBA 4 / 6 / 7 / 12", Q("Elle ne se ferme pas du tout, ou elle ne se referme pas seule ?", [
        ["Pas du tout, même sur ordre", R("Commande, ouverture active ou sécurité", "Tableau « Pannes et réglages fréquents » de la notice LBA.", [
          "Vérifier que la commande de fermeture arrive à l'automate (état des entrées) et son câblage.",
          "Une commande d'ouverture active (maintenue) empêche la fermeture : la désactiver.",
          "Une sécurité est active (boucle de sécurité, cellule IR, ultrason) : retirer le véhicule ou l'objet, vérifier l'orientation des cellules.",
          "Sans cellule IR ni ultrason, un shunt doit être en place sur l'entrée de sécurité (la notice cite les bornes 42 et 44 : vérifier sur le schéma).",
          "Variateur en défaut : lire son message. Réducteur cassé ou manivelle mal rangée : voir « ne s'ouvre pas »."
        ], [["Fiche LBA 6 / 7 : codes", "#/c/lba-67/codes"], ["Fiche LBA 4 : codes", "#/c/lba-4/codes"], ["Fiche LBA 12 : codes", "#/c/lba-12/codes"]])],
        ["Elle ne se referme pas seule", R("Fermetures automatiques non validées", "Bornier façade LBA 6 / 7 (LBA 12 : shunts FAP / FAT).", [
          "Mode automatique : shunt entre 5 et 6 (sans shunt = manuel, aucune fermeture automatique).",
          "Fermeture après passage : shunt entre 7 et 8. Fermeture après temporisation : shunt entre 9 et 10 (T. Ferm auto, 15 s par défaut).",
          "LBA 4 : programme choisi sur SW1 (FAAP) et temporisation P2, puis RESET pour valider."
        ], [["Fiche LBA 6 / 7 : bornier", "#/c/lba-67/bornier"], ["Fiche LBA 4 : paramètres SW1", "#/c/lba-4/param"]])]
      ])],
      ["Carte ONE-C", R("Message d'état ou fermetures automatiques", "Messages et paramètres de la notice ONE-C.", [
        "« DETECTION BOUCLE » ou « DETECTION CELLULE » : un véhicule ou un obstacle est détecté, la fermeture est impossible.",
        "« BARRIERE DEGONDEE » : fermeture impossible si le regondage automatique est activé.",
        "« BARRIERE OUVERTE 15S » qui reste à 15 s : un ordre d'ouverture et / ou une sécurité est actif.",
        "Pas de fermeture automatique : FAT et FAP à TRUE, et mode automatique sur I7 (1 = auto)."
      ], [["Fiche ONE-C : codes", "#/c/lba-one-c/codes"], ["Fiche ONE-C : paramètres", "#/c/lba-one-c/param"]])],
      ["Autre armoire", R("Utiliser le diagnostic général", "Les étapes de commande et de sécurités sont les mêmes que pour un portail.", [
        "Suivre « Le portail ne se ferme pas » et ouvrir la fiche de l'armoire."
      ], [["Diagnostic : ne se ferme pas", "#/d/ferme"], FICHES])]
    ]) },
  { id: "b-lisse", groupe: "b", titre: "Lisse mal positionnée ou dégondée", sous: "Horizontale, équilibre, relevage, lisse tombée",
    arbre: Q("Que constatez-vous ?", [
      ["Elle n'atteint pas l'horizontale", Q("Quelle barrière ?", [
        ["LBA 4 / 6 / 7 / 12 (irréversibles)", R("Fin de fermeture en petite vitesse trop courte", "Notices LBA 4/6/7 et LBA 12.", [
          "Augmenter 00.022 du variateur (toujours une valeur négative, ex. −2,0 s) : c'est ce temps de petite vitesse qui amène la lisse à l'horizontale.",
          "Le capteur de fermeture doit couper environ 10 cm avant l'horizontale ; s'il est trop bas sur son équerre, le remonter légèrement (LBA 4/6/7).",
          "Vérifier que la butée de fermeture n'est pas trop haute par rapport au reposoir ou à la béquille (ou l'inverse)."
        ], [["Fiche LBA 6 / 7 : paramètres", "#/c/lba-67/param"], ["Fiche LBA 12 : paramètres", "#/c/lba-12/param"]])],
        ["LBA 6R / 63PK / 7R / 74 (réversibles)", R("Compensation ou maintien de couple", "Notice LBA 4/6/7, §12.3.", [
          "Compensation trop forte : la diminuer (hors tension, écrou de la tige du ressort).",
          "Retarder légèrement le maintien de couple : augmenter 00.022 du variateur."
        ], [["Fiche LBA 6 / 7", "#/c/lba-67/param"]])],
        ["ELKA", R("Équilibre et fin de course", "Notice ELKA, partie Installation.", [
          "Contrôler l'équilibre : lisse déverrouillée et placée à 45°, elle doit rester en place. Corriger la tension des ressorts (en position OUVERT).",
          "Si un ressort est cassé, changer tous les ressorts.",
          "Vérifier P570 (modèle) après un échange de logique."
        ], [["Fiche ELKA P : apprentissage", "#/c/elka-p2500-5000/appr"]])]
      ])],
      ["Elle ne se relève pas sur coupure de courant", R("Relevage automatique (réversibles) ou détection de panne réseau", "Notices LBA et ELKA.", [
        "LBA réversibles (6R / 63PK / 7R / 74) : compensation pas assez forte, l'augmenter (hors tension). Le relevage doit rester lent ; il peut être limité par la longueur de la lisse et ses accessoires.",
        "LBA irréversibles (4 / 6 / 7 / 12) : pas de relevage automatique, lever à la manivelle (clé 405, sens horaire pour lever).",
        "ELKA : l'ouverture sur coupure suppose P103 = 1 et le module ANAE (LED NAE allumée) ; la barrière s'ouvre alors par ses ressorts (« Poff »)."
      ], [["Fiche LBA 6 / 7", "#/c/lba-67/appr"], ["Fiche ELKA P : paramètres", "#/c/elka-p2500-5000/param"]])],
      ["Lisse dégondée ou tombée", R("Contact de dégondage", "Notices ELKA et ONE-C.", [
        "ELKA : code eR01, contact lisse dégondée (25-26) ouvert. Remettre la lisse, contrôler le contact. P548 décide si la barrière stoppe (1) ou continue (0).",
        "ONE-C : message « BARRIERE DEGONDEE », entrée I8 (NC) ; regondage automatique possible sur LBA 63PG (paramètre Regondage_auto).",
        "LBA 6 / 7 : report « lisse tombée » sur 19-20 (option, NC)."
      ], [["Fiche ELKA P : codes", "#/c/elka-p2500-5000/codes"], ["Fiche ONE-C : codes", "#/c/lba-one-c/codes"]])]
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
    let h = TEST + `<div class="q">Quel est le problème ?</div><h2>Portail</h2><div class="list">` + DIAG.filter(t => !t.groupe).map(t =>
      `<button class="row" onclick="go('#/d/${t.id}')"><b>${esc(t.titre)}</b><br><span class="muted">${esc(t.sous)}</span></button>`).join("") + `</div>
      <h2>Barrière levante</h2><div class="list">` + DIAG.filter(t => t.groupe === "b").map(t =>
      `<button class="row" onclick="go('#/d/${t.id}')"><b>${esc(t.titre)}</b><br><span class="muted">${esc(t.sous)}</span></button>`).join("") + `</div>
      <p class="note">Portails : aide établie à partir des pratiques courantes, pas d'une notice. Barrières : réponses tirées des notices ELKA, La Barrière Automatique et ONE-C. Pour les valeurs précises, ouvrir la fiche de la carte.</p>`;
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
