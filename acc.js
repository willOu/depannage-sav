/* Rubrique « Accessoires » : gyrophares, radio, photocellules, claviers…
   Une fiche = { id, nom, marque, couleur, categorie, modeles, source, resume, specs:[[label, valeur]],
   raccordement:[{n, label, desc}], installation:[étapes], notes:[…], codes?:[[code, signification]] }
   Les onglets vides ne sont pas affichés. */
(function () {
  const ACCESSOIRES = [
    {
      "id": "faac-c720-c721",
      "nom": "C720 / C721",
      "marque": "FAAC",
      "couleur": "#c4161c",
      "categorie": "Motoréducteur coulissant (opérateur seul)",
      "modeles": "FAAC C720 (portails jusqu'à 400 kg) et C721 (jusqu'à 800 kg) — opérateurs électromécaniques 230 V~ 50 Hz ou 115 V~ 60 Hz, pignon Z28 module 4, fin de course magnétique sur la platine",
      "source": "Notice FAAC 732568 Rev. E (C720-C721), français, traduction de la notice originale, 13 p. avec guide de l'usager",
      "resume": "Opérateur de portail coulissant à blocage mécanique direct sur le moteur (pas d'électroserrure nécessaire) et déverrouillage manuel. La notice ne décrit pas la platine : le branchement, la programmation et les codes sont dans la notice de la platine livrée avec l'opérateur.",
      "specs": [
        [
          "Alimentation",
          "230 V~ 50 Hz, ou 115 V~ 60 Hz (version 115 V)"
        ],
        [
          "Puissance absorbée maxi",
          "C720 : 170 W · C721 : 290 W"
        ],
        [
          "Poussée sur le pignon",
          "C720 : 320 N · C721 : 530 N"
        ],
        [
          "Couple maxi",
          "C720 : 18 Nm · C721 : 30 Nm"
        ],
        [
          "Pignon",
          "Z28 module 4 (matériaux différents selon le modèle)"
        ],
        [
          "Poids maxi du battant",
          "C720 : 400 kg · C721 : 800 kg"
        ],
        [
          "Longueur maxi recommandée du portail",
          "15 m"
        ],
        [
          "Vitesse du portail",
          "8 à 18 m/min"
        ],
        [
          "Fin de course",
          "Magnétique (capteur sur la platine, aimants sur la crémaillère)"
        ],
        [
          "Embrayage",
          "Électronique"
        ],
        [
          "Température de fonctionnement",
          "−20 à +55 °C"
        ],
        [
          "Poids du motoréducteur",
          "C720 : 6 kg · C721 : 10 kg"
        ],
        [
          "Protection",
          "IP44"
        ],
        [
          "Fréquence d'utilisation",
          "Domestique (tableau p. 3) ; « fréquence moyenne de transit » dans le guide de l'usager (p. 11)"
        ]
      ],
      "installation": [
        "Vérifications préalables : structure adaptée, roues proportionnées au poids, guide supérieur et butées mécaniques de fin de course, voie de coulissement linéaire et horizontale, manœuvre manuelle facile sur toute la course, prise de terre efficace, pas de conduite ni de câble dans la zone de la fondation.",
        "Plaque de fondation : positionnement différent pour fermeture à droite ou à gauche (pièce marquée orientée vers le portail), scellée de niveau avec une ou plusieurs gaines pour les câbles. Laisser sortir les câbles d'au moins 30 cm.",
        "Fixer le motoréducteur sur la plaque avec les écrous et rondelles fournis ; régler hauteur et distance au portail (cotes de la fig. 10) ; le portail ne doit pas toucher le support du pignon pendant sa manœuvre.",
        "Crémaillère (acier à souder, acier à visser ou nylon à visser) : ne jamais souder les éléments entre eux ni aux entretoises ; vérifier qu'aucun élément ne sort du pignon pendant la course. Abaisser le motoréducteur de 1,5 à 2 mm une fois la crémaillère posée. Pas de graisse ni de lubrifiant entre le pignon et la crémaillère.",
        "Mise à la terre : brancher le câble de terre comme à la fig. 17. Séparer les câbles d'alimentation des câbles de commande et de sécurité.",
        "Fins de course : le capteur magnétique est sur la platine ; l'arrêt se fait quand l'aimant polarisé fixé sur le haut de la crémaillère l'active. Assembler les deux aimants (fig. 19). Laisser environ 40 mm après les butées mécaniques. Positionner les aimants avec l'automatisme en mode manuel puis alimenté, selon la notice de la platine.",
        "Essai : vérification fonctionnelle de tous les accessoires et sécurités, pose des bouchons de vis (flèche vers le portail) et du carter (2 vis latérales), remise du guide de l'usager."
      ],
      "notes": [
        "Déverrouillage : tourner la clé de déverrouillage dans le sens horaire, le levier s'écarte du corps de l'opérateur, l'abaisser à fond jusqu'à la butée mécanique, puis manœuvrer à la main. Verrouillage : lever le levier à fond, tourner la clé dans le sens anti-horaire. Éviter toute impulsion avant de remettre le verrouillage ; avant de rétablir le fonctionnement normal après un fonctionnement manuel, couper l'alimentation électrique de l'installation (guide de l'usager, p. 11). Abaisser le levier agit aussi sur un micro-interrupteur de sécurité qui force l'automatisme en STOP.",
        "Entretien conseillé tous les 6 mois : fonctionnement de l'installation, efficacité des sécurités (dont la force de poussée) et du déverrouillage. Réparation : centres agréés.",
        "Accessoires : kit batterie (logement dans l'opérateur, branché sur le connecteur de la platine) et module radio (fig. 25).",
        "L'électronique de commande est fixée sur un support sous un couvercle transparent, avec les poussoirs de programmation accessibles sans retirer le couvercle. La notice ne nomme pas la platine : voir la notice livrée avec elle.",
        "La notice ne contient ni code d'erreur ni tableau de paramètres pour cet opérateur."
      ]
    },
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
    },
    {
      "id": "prastel-febo-light",
      "nom": "FEBO-LIGHT",
      "marque": "PRASTEL",
      "couleur": "#1a6fb5",
      "categorie": "Feu clignotant",
      "modeles": "Feu à LED blanches, 12 / 24 V AC/DC ou 230 V AC, fixe ou clignotant (cavalier JP1)",
      "source": "Notice Prastel FEBO-LIGHT (ISFEBO-LIGHT-EU_11_17), colonne française",
      "resume": "Feu blanc à 24 LED haute luminosité, deux modes au choix par un cavalier : fixe ou clignotant (0,6 s). Trois tensions d'alimentation selon les bornes utilisées. Aucun entretien ni intervention dans l'appareil.",
      "specs": [
        [
          "Alimentation",
          "12 ou 24 V AC/DC (±10 %) ou 230 V AC (±10 %)"
        ],
        [
          "Source lumineuse",
          "24 LED blanches haute luminosité"
        ],
        [
          "Puissance lampe",
          "25 W"
        ],
        [
          "Intermittence",
          "0,6 s ou fixe (sélectionnable)"
        ],
        [
          "Consommation",
          "< 1 W"
        ],
        [
          "Dimensions / poids",
          "77 × 102 × 170 mm / 150 g"
        ],
        [
          "Accessoires",
          "FLIGHT-SUP (support), FLIGHT-ANT (antenne 433 MHz / 868 MHz)"
        ]
      ],
      "raccordement": [
        {
          "n": "1 · 2",
          "label": "230 V AC (±10 %)",
          "desc": "Alimentation secteur. Le produit est relié directement au secteur : ne pas toucher aux composants électroniques sous tension, refermer le boîtier avant la mise sous tension."
        },
        {
          "n": "3 · 4",
          "label": "12 V AC/DC (±10 %)",
          "desc": "Alimentation basse tension 12 V."
        },
        {
          "n": "3 · 5",
          "label": "24 V AC/DC (±10 %)",
          "desc": "Alimentation basse tension 24 V."
        },
        {
          "n": "JP1",
          "label": "Mode de fonctionnement",
          "desc": "Cavalier à gauche (fig. 2) : feu fixe, allumé en permanence. Cavalier à droite (fig. 3) : feu clignotant par intermittence."
        }
      ],
      "installation": [
        "Choisir la tension d'alimentation et utiliser les bornes correspondantes (1-2 : 230 V, 3-4 : 12 V, 3-5 : 24 V).",
        "Placer le cavalier JP1 selon le mode voulu : à gauche = fixe, à droite = clignotant.",
        "Fermer le boîtier à l'aide des clips de fermeture (ou des trous à vis).",
        "Raccorder l'équipement sur une installation électrique conforme à la normalisation du pays (EN 55015 en France), équipée de protections contre les surintensités et les surtensions."
      ],
      "notes": [
        "Aucun entretien spécifique, aucune intervention dans l'appareil. Éviter la poussière et l'humidité excessive.",
        "Pas de menu ni de code d'erreur sur ce produit.",
        "Prastel France, ZI Athélia II, La Ciotat, tél. 04 42 98 06 06 (adresse et numéro indiqués sur la notice)."
      ]
    },
    {
      "id": "casit-cs2",
      "nom": "CS2 (micro N.F. / N.O.)",
      "marque": "CASIT",
      "couleur": "#c7511f",
      "categorie": "Bord sensible (barre palpeuse à microrupteurs)",
      "modeles": "Barre palpeuse CS2 / CS4 (caoutchouc standard ou haut, 2 m ou 4 m) à microrupteurs, kit CS/KIT, platine de contrôle EQDW24",
      "source": "Notice Casit CS2 micro NC-NO (rév. 01 du 08/10/2018), colonne française (traduction approximative)",
      "resume": "Bord sensible à microrupteurs : les contacts N.F. des microrupteurs sont montés en série et câblés sur l'entrée de sécurité de la platine. Une pression sur le caoutchouc ouvre le contact. Avec la platine EQDW24, la ligne est contrôlée par une résistance 8,2 kΩ.",
      "specs": [
        [
          "Norme",
          "EN 12978 (EN 954-1)"
        ],
        [
          "Course",
          "Maximum 34 mm : précourse 31 mm, course utile 3 mm"
        ],
        [
          "Température de service",
          "−20 à +60 °C"
        ],
        [
          "Degré de protection",
          "IP 54"
        ],
        [
          "Tension maxi au contact",
          "24 V AC / 24 V DC, 500 mA, source sûre SELV ou PELV (sans la platine EQDW24, la barre ne doit pas être alimentée)"
        ],
        [
          "Microrupteurs",
          "3 fils sortants : contact N.F. et contact N.O. (la notice se contredit : gris-noir = N.F. et bleu-noir = N.O. au tableau p. 4 et en p. 9 ; seule une ligne française de la p. 10 écrit l'inverse)"
        ],
        [
          "Pose des microrupteurs",
          "Premier et dernier à 300 mm du bout du profil, 850 mm maximum entre deux. Nombre N = (L − 600) / 850 + 1 arrondi au supérieur (L = longueur de la barre ; minimum 2)"
        ],
        [
          "Platine EQDW24",
          "Boîte Sarel IP55 ou équivalent fournie, avec presse-étoupe PG9 pour câbles 4 × 1 ; protection minimale IP54"
        ]
      ],
      "raccordement": [
        {
          "n": "Microrupteurs N.F.",
          "label": "Contacts N.F. en série",
          "desc": "Brancher en série les contacts N.F. de tous les microrupteurs avec les connecteurs thermorétractables EA/CP3 fournis, puis sortir un seul câble du profil fixe (fixé avec le serre-câble AF125F). L'ouverture d'un contact provoque l'arrêt. Isoler ou couper le fil du contact N.O. non utilisé (vérifier sa couleur sur la barre : la notice se contredit sur bleu / gris)."
        },
        {
          "n": "EQDW24 : 6 · 7",
          "label": "Entrée de la barre",
          "desc": "Ligne de la barre palpeuse. Une résistance 8,2 kΩ est à brancher en série avec le microrupteur de bout de barre. Barre pressée, court-circuit ou câbles débranchés : le contact N.F. 1-5 de la platine passe en N.O."
        },
        {
          "n": "EQDW24 : 1 · 5",
          "label": "Contact de sortie",
          "desc": "Contact N.F. vers la commande du portail (platine CASIT). Il s'ouvre sur ouverture ou court-circuit de la résistance de ligne."
        },
        {
          "n": "EQDW24 : 2 · 3",
          "label": "Alimentation 24 V AC/DC",
          "desc": "Alimentation de la platine. Si elle est en courant continu, le +24 V doit être branché à la borne 2 ; la borne 4 n'est pas branchée."
        },
        {
          "n": "Protection des câbles",
          "label": "Câbles de sortie",
          "desc": "Protéger les câbles de liaison contre les dommages mécaniques sur toute leur longueur (par exemple dans un conduit PVC fermé)."
        }
      ],
      "installation": [
        "Installation par du personnel qualifié. La CS2 se monte sur la partie mobile et / ou fixe ; fixer par la partie aluminium, le caoutchouc tourné vers le danger.",
        "Retirer la plaque de tête (A) et séparer les deux profils (B fixe, C mobile).",
        "Brancher en série les contacts N.F. des microrupteurs (D) avec les connecteurs EA/CP3 et relier à la platine de commande selon le schéma.",
        "Enfiler le profil mobile (C) dans le profil fixe (B) sans déchausser les ressorts (E) ni les leviers des microrupteurs ; vérifier que les microrupteurs sont actionnés. Remonter la plaque de tête (A).",
        "Fixer les plaques en U où la barre sera montée, en soignant l'alignement, puis fixer la barre dessus (vis autoforeuses, ou pré-perçage et vis autotaraudeuses).",
        "Montage à partir du CS/KIT : couper le profil de base B à la longueur voulue, le profil mobile C 15 mm plus court, couper le caoutchouc R à la même longueur ; insérer les goupilles élastiques 2 × 12, monter les leviers en dernière opération ; bloquer chaque microrupteur avec la boucle de retenue AF111F, une avant et une après."
      ],
      "notes": [
        "Entretien périodique tous les 6 mois par du personnel compétent : profils aluminium et plaques en U intacts, caoutchouc non déchiré, serrage des bornes, absence d'humidité, étiquette lisible. Test au multimètre en ohms à la place de la platine : barre pressée le circuit s'ouvre (N.F. vers N.O.), relâchée il se rétablit. Vérifier aussi la platine EQDW24 (barre pressée ou bornes 6-7 court-circuitées : contacts 1-5 de N.F. vers N.O.).",
        "Pour utiliser les contacts N.O. à la place des N.F., la notice renvoie à une instruction dédiée qui n'est pas dans ce document.",
        "La notice française est une traduction approximative de l'italien (« microswitch », « côte » pour la barre) ; en cas de doute, la version italienne et la version anglaise sont dans le même PDF.",
        "Ne modifier aucun élément de l'appareil sans consulter Casit (tél. +39 011 9688230)."
      ]
    },
    {
      "id": "theben-tr64x-top3",
      "nom": "TR 641 / 642 / 644 top3 BLE RC",
      "marque": "THEBEN",
      "couleur": "#0a5da8",
      "categorie": "Horloge programmable (rail DIN)",
      "modeles": "TR 641 top3 BLE RC (6410330, 1 canal) · TR 642 top3 BLE RC (6420330, 2 canaux) · TR 644 top3 BLE RC (6440330, 4 canaux) · TR 642 top3 12–24V RC (6424330, 2 canaux 12–24 V)",
      "source": "Notice Theben 307658 01 du 20.03.2025 (TR 64x top3), pages françaises",
      "resume": "Horloge digitale à programme annuel et astronomique, avec Bluetooth intégré (appli et logiciel OBELISK top3), 800 emplacements mémoire, 16 programmes spéciaux et une entrée externe par canal. Pour éclairage, sonneries, ventilation, etc., en local fermé et sec ; jamais pour des dispositifs de protection (portes de secours, anti-incendie).",
      "specs": [
        [
          "Tension de service",
          "110–240 V AC (+10 % / −15 %), 50–60 Hz · 6424330 : 12–24 V AC/DC (+10 % / −15 %)"
        ],
        [
          "Puissance en veille",
          "0,5 W · 6424330 : 0,4 W"
        ],
        [
          "Pouvoir de coupure maxi",
          "16 A à 250 V (cos φ = 1) · 10 A à 250 V (cos φ = 0,6) · 6424330 : 2 A à 250 V (cos φ = 0,6)"
        ],
        [
          "Courant et température",
          "6410330 : 16 A à 50 °C (câble rigide) ou 13 A à 40 °C (souple) · 6420330 : 2 × 16 A / 2 × 13 A · 6440330 : 4 × 16 A à 45 °C ou 4 × 13 A à 40 °C · 6424330 : 2 × 16 A à 50 °C ou 2 × 13 A à 45 °C"
        ],
        [
          "Pouvoir de coupure mini",
          "10 mA / 230 V AC · 100 mA / 12 V AC/DC"
        ],
        [
          "Entrées externes (RC)",
          "Une par canal (1, 2 ou 4). 6424330 : entrées en 12–24 V AC/DC, pas pour 230 V"
        ],
        [
          "Programmes",
          "1 programme standard P0 + 16 programmes spéciaux (P1 à P14 hebdomadaires avec plages de dates, P15 marche permanente, P16 arrêt permanent) · 800 emplacements mémoire"
        ],
        [
          "Précision",
          "À la seconde près, ≤ ± 0,25 s/jour (25 °C) · réserve de marche 10 ans à 20 °C (sans BLE) · période de commutation minimale 1 s"
        ],
        [
          "Bluetooth",
          "BLE 2402–2480 MHz, 2,2 dBm, portée 15 à 20 m en champ libre"
        ],
        [
          "Protection",
          "IP 20 · classe II si montage conforme · température ambiante −30 à +50 °C (6440330 : −30 à +45 °C) · écran pleinement fonctionnel de +5 à +55 °C"
        ],
        [
          "Sortie",
          "Contact inverseur ; commutation de n'importe quel conducteur externe (6424330 : SELV et réseau autorisés)"
        ],
        [
          "Accessoires",
          "Kit PC OBELISK top2/3 (9070409), carte mémoire OBELISK top2/3 (9070407), OBELISK top3 (9070130), antennes RC-GNSS R (9070807), RC GNSS (9070823), RC-DCF (9070410)"
        ]
      ],
      "raccordement": [
        {
          "n": "L · N",
          "label": "Alimentation",
          "desc": "110–240 V AC (6424330 : 12–24 V AC/DC). Sécuriser par un disjoncteur de type B ou C (EN 60898-1) de 16 A maxi en amont. Un raccordement correct est nécessaire à la commutation au passage par zéro."
        },
        {
          "n": "C1 … C4",
          "label": "Sorties de commutation",
          "desc": "Contacts inverseurs, un par canal. TR 641 : C1 · TR 642 : C1, C2 · TR 644 : C1 à C4."
        },
        {
          "n": "Ext1 … Ext4",
          "label": "Entrées externes (RC)",
          "desc": "Une entrée par canal : bouton-poussoir ou interrupteur (voir l'onglet Notes). 6424330 : en 12–24 V seulement."
        },
        {
          "n": "RC GNSS / RC DCF / Data",
          "label": "Antenne de synchronisation",
          "desc": "Antenne DCF ou GPS/GNSS externe (câble 100 m maxi) pour synchroniser l'heure ; le GPS/GNSS donne aussi la position pour le programme astronomique."
        },
        {
          "n": "Bornes à ressort DuoFix",
          "label": "Câblage",
          "desc": "Dénuder 8 mm (9 max.), enfoncer le câble à 45° dans la borne ouverte avec un tournevis. 2 câbles possibles par position. Retrait : pousser le contact à ouverture vers le bas avec un tournevis."
        }
      ],
      "installation": [
        "Couper la tension réseau et la sécuriser avant le montage. Montage et raccordement réservés à un électricien.",
        "Monter l'horloge sur rail DIN (EN 60715).",
        "Raccorder alimentation, sorties C1 à C4, entrées externes et éventuelle antenne (voir l'onglet Raccord.).",
        "Première mise en service : après mise sous tension, appuyer sur OK ; l'horloge doit être connectée en Bluetooth dans les 30 s. Sans Bluetooth, appuyer sur MENU et suivre l'écran. Date et heure sont préréglées ; régler la langue et l'heure d'été / d'hiver.",
        "Programmer un horaire : MENU › PROGRAMME › canal › STANDARD P0 › CRÉER › COMMUTAT › ON (ou OFF) › heure › TOUS LES JOURS, puis sélectionner un jour et COPIER pour les autres jours › ENREGIST. Répéter pour l'heure d'arrêt avec OFF.",
        "Modifier : PROGRAMME › canal › STANDARD P0 › VÉRIFIER-MODIFIER-EFFACER › COMMUTAT › MODIFIER (heure et minutes), pour un bloc de jours ou un seul jour. Effacer : même chemin, EFFACER, puis EFFACER BLOC ou un seul jour."
      ],
      "notes": [
        "Entrée externe (menu OPTIONS › ENTR EXT) : INACTIF, BOUTON-POUSSOIR (manuel, temporisé, minuterie d'escalier) ou INTERRUPTEUR (marche permanente, arrêt permanent, programme spécial, arrêt central). L'arrêt central désactive tous les canaux. EXTERNE s'affiche à l'écran quand une fonction est activée par l'entrée.",
        "Priorités : 1 arrêt permanent centralisé · 2 marche/arrêt permanent et interrupteurs externes · 3 programme vacances · 4 commutations manuelles · 5 programme spécial par interrupteurs externes · 6 programme spécial P1 à P16 (plus le numéro est haut, plus la priorité l'est) · 7 Une heure pour la Planète · 8 cycle / impulsion / aléatoire.",
        "TR 644 : chaque relais C1–C4 se commande par sa touche : appui long de 2 s = commutation permanente, appui bref = commutation manuelle ; nouvel appui de 2 s = fin de la commutation permanente, puis de la commutation manuelle.",
        "Code PIN : réglé dans OPTIONS › PIN (nouveau PIN 0000 par défaut). En cas d'oubli, contacter l'assistance Theben avec le numéro de série.",
        "Compteur d'heures : OPTIONS affiche et efface les heures de fonctionnement par canal ; au-delà de la valeur du menu Service, SERVICE s'affiche (exemple de la notice : remplacement d'une lampe après 5000 h).",
        "Réinitialisation : appuyer simultanément sur les 4 touches, puis choisir GARDER PROGRAMMES ou EFFACER PROGRAMMES. Langue, format de l'heure, etc. sont conservés ; date et heure sont supprimées.",
        "Carte mémoire OBELISK : copier OBELISK → HORLOGE, copier HEURE → OBELISK, ou ACTIVER OBELISK (reprend les horaires de la carte tant qu'elle est insérée). Appli et logiciel PC OBELISK top3 : connexion Bluetooth, fermer l'application dans les 30 s après OK sur l'horloge ; BLUETOOTH ACTIF s'affiche.",
        "Assistance Theben : tél. +49 7474 692-369, hotline@theben.de (numéro indiqué sur la notice, peut avoir changé)."
      ]
    },
    {
      "id": "theben-tr64x-top2",
      "nom": "TR 641 / 642 / 644 top2 (et RC)",
      "marque": "THEBEN",
      "couleur": "#0a5da8",
      "categorie": "Horloge programmable (rail DIN)",
      "modeles": "TR 641 top2 (641 0 100) · TR 641 top2 RC (641 0 300) · TR 642 top2 (642 0 100) · TR 642 top2 RC (642 0 300) · TR 644 top2 (644 0 100) · TR 644 top2 RC (644 0 300)",
      "source": "Notice Theben TR 641 / 642 / 644 top2 (36 p., confort-electrique.fr), en français",
      "resume": "Horloge digitale à 1, 2 ou 4 canaux, programme hebdomadaire et astronomique, 16 programmes spéciaux, sortie en 110–240 V. Les versions RC ont une sortie de données (module d'extension 4 canaux EM4) et reçoivent les antennes RC-DCF ou RC-GPS top2. Fonctionne sur secteur avec pile lithium de sauvegarde.",
      "specs": [
        [
          "Tension de service",
          "110–240 V AC (−15 % / +10 %), 50–60 Hz"
        ],
        [
          "Consommation propre (typ.)",
          "641 : 1,3 W (RC 2,0 W) · 642 : 1,7 W (RC 2,5 W) · 644 : 2,6 W (RC 3,6 W) · mode éco 0,6 / 1,2 / 0,6 / 1,2 / 0,5 / 1,3 W"
        ],
        [
          "Contact",
          "Inverseur, ouverture < 3 mm, AgSnO₂, sortie indépendante des phases (ne convient pas à la commutation de TBTS)"
        ],
        [
          "Pouvoir de coupure",
          "16 A 250 V (cos φ = 1) · 10 A 250 V (cos φ = 0,6). Sur TR 644 : C1 et C3 10 A 250 V, C2 et C4 16 A 250 V · mini 10 mA / 230 V AC ou 100 mA / 12 V AC/DC"
        ],
        [
          "Charge lampes (C1+C3 / C2+C4)",
          "Incandescence / halogène 230 V : 2300 W (C1+C3), 2600 W (C2+C4) · tubes fluo non compensés ou compensés en série 2300 VA · compensés en parallèle 1200 VA, 130 µF"
        ],
        [
          "Programmes",
          "1 programme par défaut P0 + 16 programmes spéciaux (P1 à P14 avec plages de dates, P15 et P16), horaire de commutation, impulsion et cycle ; programme astronomique au choix par canal"
        ],
        [
          "Précision et réserve de marche",
          "± 0,5 s/jour à 20 °C · réserve de marche 8 ans (pile lithium) ; diminue si la carte mémoire est branchée en fonctionnement sur piles"
        ],
        [
          "Protection et température",
          "IP 20 · classe II si montage conforme · −30 à +55 °C (typique −30 à +45 °C)"
        ],
        [
          "Sortie de données (RC)",
          "Très basse tension de sécurité, 100 mA, bus de données 500 mA maxi"
        ]
      ],
      "raccordement": [
        {
          "n": "L · N",
          "label": "Alimentation",
          "desc": "110–240 V~ 50–60 Hz."
        },
        {
          "n": "1 · 2 · 3",
          "label": "Sortie C1",
          "desc": "Contact inverseur du canal 1 (TR 644 : C1 / C3 en 10 A, C2 / C4 en 16 A)."
        },
        {
          "n": "4 · 5 · 6",
          "label": "Sortie C2",
          "desc": "Contact inverseur du canal 2 (TR 642 et 644)."
        },
        {
          "n": "7 · 8 · 9",
          "label": "Sortie C3",
          "desc": "Contact inverseur du canal 3 (TR 644)."
        },
        {
          "n": "10 · 11 · 12",
          "label": "Sortie C4",
          "desc": "Contact inverseur du canal 4 (TR 644)."
        },
        {
          "n": "Ext1 … Ext4",
          "label": "Entrées externes",
          "desc": "Une entrée par canal, câble 100 m maxi (voir l'onglet Notes)."
        },
        {
          "n": "Data / antenne",
          "label": "Versions RC",
          "desc": "Antenne top2 RC-DCF (907 0 410) ou RC-GPS (907 0 610) pour synchroniser l'heure ; module d'extension EM4 (4 canaux, C5 à C8). Montage de l'antenne en extérieur."
        }
      ],
      "installation": [
        "Montage sur rail DIN (EN 60715), par un électricien, avec la tension coupée. Locaux fermés et secs seulement (l'antenne se monte en extérieur).",
        "Première mise en service : après une pression sur une touche, régler la langue, la date, l'heure et la règle d'heure d'été / d'hiver (Europe de l'Ouest ou de l'Est, Canada, USA, Nouvelle-Zélande, règle propre ou aucune).",
        "Programmer un horaire par défaut (exemple : éclairage du lundi au vendredi de 7:30 à 12:00) : MENU › PROGRAMME › CANAL › PROGRAMME STANDARD P0 › NOUVEAU › HEURE DE COMMUTATION › MARCHE › 07:30 › LUNDI › COPIER › mardi à vendredi › MÉMORISER. Répéter avec ARRÊT et 12:00.",
        "Afficher, modifier ou supprimer : MENU › PROGRAMME › canal › STANDARD P0 › VÉRIFIER-MODIFIER-EFFACER › HEURE DE COMMUTATION.",
        "Simulation, heure et date : menus SIMULATION et HEURE/DATE ; réglage manuel et permanent : menu MANUEL (permanent on / off, manuel, temporisation courte, vacances, aléatoire, activation d'un programme spécial)."
      ],
      "notes": [
        "Menu OPTIONS : ASTRO (réglages astronomiques), ENTRÉE EXTERNE (inactif, bouton-poussoir ou interrupteur), COMPTEUR D'HEURES DE FONCTIONNEMENT, LANGUE, PIN (sans / avec PIN), RÉTROÉCLAIRAGE (off après 1 minute ou toujours on), MODULE D'EXTENSION EM4 (RC seulement), RÉGLAGES D'USINE, INFO.",
        "Interruptions et décalages du mode aléatoire : plusieurs activations ou désactivations fortuites dans une phase d'activation programmée ; décalage fortuit d'un point d'activation / de désactivation.",
        "Autres accessoires de la notice : carte mémoire OBELISK top2, module LAN. Détail des procédures et du programme astronomique aux pages 26 à 35 de la notice.",
        "Les références (641 0 100, 641 0 300, etc.) sont celles imprimées sur la notice avec des espaces."
      ]
    },
    {
      "id": "sewosy-k1000",
      "nom": "K1000 / KR1000 / KRN1000",
      "marque": "SEWOSY",
      "couleur": "#2b6cb0",
      "categorie": "Clavier à code et lecteur de badge (contrôle d'accès autonome)",
      "modeles": "K1000 (clavier) · KR1000 (clavier + lecteur de badge 125 kHz EM4200) · KRN1000 (lecteur compact, 151 × 43,5 × 24 mm)",
      "source": "Notice Sewosy K1000_NTALL (version vG_25/11/04), français p. 1 à 10",
      "resume": "Clavier autonome à 2 relais (C/NO/NC), 1000 utilisateurs sur le relais 1 et 10 sur le relais 2, programmé au clavier avec un code maître. Code maître d'usine 1234 1234 ; temporisation d'usine 1 seconde. Se programme par séquences du type : code maître deux fois, étoile, fonction, valeurs, deux fois dièse.",
      "specs": [
        [
          "Alimentation",
          "12–24 V AC/DC · consommation 110 mA"
        ],
        [
          "Pouvoir de coupure",
          "30 V DC 2 A · 125 V AC 0,5 A"
        ],
        [
          "Relais",
          "2 relais (C / NO / NC) · relais 1 : 1000 utilisateurs, relais 2 : 10 utilisateurs · temporisation 0 à 99 s (00 = bistable)"
        ],
        [
          "Raccordement",
          "Filaire, câble de 3 m"
        ],
        [
          "Badges",
          "Technologie 125 kHz EM4200 (KR1000, KRN1000)"
        ],
        [
          "Protection",
          "IP 65 · −10 à +60 °C · poids 0,7 kg · 120 × 76 × 28 mm (K1000, KR1000)"
        ],
        [
          "LED",
          "Verte (gauche) : relais 1 activé · orange : relais 2 activé · LED verte : sous tension · LED orange : mode programmation"
        ]
      ],
      "raccordement": [
        {
          "n": "Rouge / Noir",
          "label": "Alimentation",
          "desc": "Rouge : +, noir : − (12–24 V AC/DC)."
        },
        {
          "n": "Relais 1",
          "label": "Blanc NO1 · Rose COM1 · Vert clair NC1",
          "desc": "Gâche à émission de courant (fail secure) : COM1 et NO1. Portail motorisé : COM1 et NO1. Ventouse à rupture de courant (fail safe) : COM1 et NC1."
        },
        {
          "n": "Bouton poussoir 1",
          "label": "Vert GND · Orange BP1",
          "desc": "Entrée bouton poussoir du relais 1."
        },
        {
          "n": "Relais 2",
          "label": "Bleu NO2 · Violet COM2 · Gris NC2",
          "desc": "Second relais."
        },
        {
          "n": "Bouton poussoir 2",
          "label": "Vert GND · Jaune BP2",
          "desc": "Entrée bouton poussoir du relais 2."
        },
        {
          "n": "Brun",
          "label": "Contact magnétique CM",
          "desc": "Contact magnétique de porte : si une temporisation est assignée à l'accès, elle s'annule quand la porte est refermée."
        }
      ],
      "installation": [
        "Raccorder l'alimentation 12–24 V AC/DC, puis le relais (gâche, portail ou ventouse) selon le type de verrouillage (voir l'onglet Raccord.).",
        "Programmation du relais 1 : taper le code maître deux fois (1234 1234 par défaut), puis * 001 (position du code ou badge), saisir le code ou passer le badge, taper # deux fois. Les positions suivantes sont 002, 003, etc.",
        "Temporisation du relais 1 : code maître deux fois, * 1, durée de 01 à 99 s (00 = bistable), ## ; par défaut 1 s.",
        "Programmation du relais 2 : code maître deux fois, * 4, position 01, code ou badge, ##. Temporisation : * 5, durée 01 à 99 (00 = bistable), ##. Les codes ou badges du relais 1 et du relais 2 doivent être différents.",
        "Modifier le code maître (recommandé) : code maître deux fois, * 3, nouveau code maître deux fois, ##. Le code maître ne permet pas d'ouvrir l'accès.",
        "Supprimer un code ou badge : code maître deux fois, position du code (001 pour le n°1), * deux fois, ##. Relais 2 : * 4, position 01, * deux fois, ##."
      ],
      "codes": [
        [
          "Bip long",
          "Confirmation / validation."
        ],
        [
          "Bip continu",
          "Saisie de 3 mauvais codes consécutifs, passage de 3 badges non programmés, ou déclenchement de l'autoprotection."
        ],
        [
          "Quatre bips consécutifs",
          "Erreur dans la programmation ou dans l'utilisation."
        ],
        [
          "Clavier bloqué",
          "Attendre 1 minute ou couper puis remettre l'alimentation."
        ],
        [
          "Buzzer désactivé",
          "La LED orange de gauche remplace le buzzer."
        ]
      ],
      "notes": [
        "Programmation en série de badges : code maître deux fois, * 901, position du premier badge (001), position du dernier (010 pour 10 badges), passer les badges un à un, ##.",
        "Badges seulement (aucun code utilisateur disponible) : code maître deux fois, * 000, position 001, passer le badge, ##. Double authentification badge + code (relais 2 inactif) : * 002, position 001, passer le badge puis taper le code, ##.",
        "Code unique à usage unique (supprimé après saisie) : code maître deux fois, * 907, position 00 à 05 (6 codes), code, ##.",
        "Nombre de chiffres des codes (4 par défaut) : * 904, nombre entre 2 et 6, ##. À régler avant toute programmation : la modification efface tous les codes. Le code maître est alors 12 12, 123 123, 1234 1234, 12345 12345 ou 123456 123456.",
        "Réglages : veille du clavier (touches éteintes après 30 s) : * 201 active, * 202 désactive (désactivée par défaut : touches éclairées en permanence). Buzzer : * 203 active (par défaut), * 204 désactive. Autoprotection (buzzer en cas d'arrachement) : * 602 active, * 601 désactive.",
        "Carte maître (permet d'entrer uniquement en programmation) : code maître deux fois, * 7, passer le badge, ##. Remplacer une carte maître : * 7, * 2 fois, passer le nouveau badge, ##.",
        "Code maître oublié : couper l'alimentation, appuyer sur # et le maintenir 5 secondes à la remise sous tension : le code maître d'origine 1234 1234 est restauré.",
        "Supprimer tous les codes et badges (réglages du clavier conservés) : code maître deux fois, * 888, attendre le bip long, ##. Retour aux paramètres d'usine (codes, badges, réglages effacés, code maître 1234 1234) : * 899, attendre le bip long, ##.",
        "La notice ne donne pas d'autre code de dépannage. Version anglaise dans le même PDF (p. 11 à 20)."
      ]
    },
    {
      "id": "prastel-easyka",
      "nom": "EASYKA / EASYBKA",
      "marque": "PRASTEL",
      "couleur": "#1a6fb5",
      "categorie": "Clavier à code autonome (contrôle d'accès)",
      "modeles": "EASYKA (clavier à code) · EASYBKA (avec rétroéclairage) · EASYBKR (notice de programmation simplifiée)",
      "source": "Notice EASYKA – EASYBKA (20 p., française) et notice de programmation simplifiée Prastel ISEASYBK_FR_S_07_18",
      "resume": "Clavier à code anti-vandalisme pour l'extérieur : 500 utilisateurs, deux relais (verrouillage et auxiliaire), entrée REX, entrée auxiliaire, radiateur intégré. Trois modes (normal, contourné, sécurisé) signalés par un voyant vert, orange ou rouge. Code de programmation d'usine 1234.",
      "specs": [
        [
          "Alimentation",
          "12–24 V AC/DC"
        ],
        [
          "Courant maxi sans périphériques",
          "Chauffage désactivé : 20 mA (veille) – 115 mA (maxi) · avec rétroéclairage (EASYBKA) : 50 – 145 mA · chauffage à 12 V DC : 520 – 615 mA · à 24 V DC : 350 – 465 mA"
        ],
        [
          "Relais",
          "Relais de verrouillage 2 A · relais auxiliaire 2 A"
        ],
        [
          "Entrées",
          "REX : N.O., contact sec · entrée auxiliaire (In / Moniteur) : N.C. en mode moniteur, N.O. en mode entrée"
        ],
        [
          "Température de fonctionnement",
          "Radiateur activé : −20 à 63 °C · radiateur désactivé : 0 à 63 °C"
        ],
        [
          "Protection et dimensions",
          "IP 65 · 120 × 76 × 21 mm · 410 g · câble 10 conducteurs de 1 m"
        ],
        [
          "Codes d'usine",
          "Programmation 1234 · ouverture 2580 · auxiliaire 0852 · normal / sécurisé 3838 · normal / contourné : aucun (N/A)"
        ]
      ],
      "raccordement": [
        {
          "n": "Rouge",
          "label": "V INPUT",
          "desc": "Alimentation +12–24 V."
        },
        {
          "n": "Noir",
          "label": "GROUND",
          "desc": "Masse."
        },
        {
          "n": "Vert",
          "label": "REX / BL",
          "desc": "Entrée bouton de demande de sortie (REX), à placer à l'intérieur des locaux."
        },
        {
          "n": "Blanc",
          "label": "IN / MONITOR",
          "desc": "Entrée auxiliaire."
        },
        {
          "n": "Violet · Gris · Marron",
          "label": "Relais de verrouillage",
          "desc": "Violet : COM, gris : N.O., marron : N.C. Gâche fail safe ou fail secure, 12–24 V AC/DC, varistance optionnelle."
        },
        {
          "n": "Bleu · Jaune · Orange",
          "label": "Relais auxiliaire",
          "desc": "Bleu : COM, jaune : N.O., orange : N.C."
        },
        {
          "n": "Conducteurs inutilisés",
          "label": "Isolation",
          "desc": "Couper et couvrir tous les conducteurs non utilisés."
        }
      ],
      "installation": [
        "Choisir la position à hauteur d'épaule, du côté de la poignée de la porte. Percer les 2 points A pour la fixation et C pour le passage des câbles ; ne pas percer en face de la lentille du tamper.",
        "Raccorder le clavier (câble de 1 m à 10 fils), fixer le fond, remettre le couvercle et le visser avec la vis de sécurité et la clé en L fournies.",
        "Accès à la programmation : le clavier doit être en mode normal (voyant vert). Appuyer 2 fois sur #, saisir le code de programmation (1234 par défaut) : le voyant de la porte passe au vert. Sans saisie sous 5 s, retour en mode normal.",
        "Sortir de la programmation : appuyer une fois sur # (bip long). Retour automatique en mode normal après 1 minute sans touche.",
        "Changer le code de programmation : menu 3 (touche 3 après l'entrée en programmation), nouveau code à 4 chiffres, 3 bips. Le code 0000 n'est pas valide.",
        "Créer un utilisateur : menu 7, numéro d'emplacement à 3 chiffres (001 à 500), puis le code à 4 chiffres. Emplacement vide : voyant vert (code principal) ; code principal déjà présent : voyant rouge (code secondaire). # passe à l'emplacement suivant, # deux fois pour finir.",
        "Délai de libération de la serrure et sécurité relative / absolue : menu 6, code à 4 chiffres : premier chiffre 0 = sécurité relative, 1 = sécurité absolue ; deuxième chiffre 0 ; deux derniers chiffres = délai de 01 à 99 s. Exemple : 0012 = fail secure, 12 s."
      ],
      "codes": [
        [
          "Voyant mode vert",
          "Mode normal (par défaut) : la porte reste verrouillée jusqu'à la saisie d'un code principal."
        ],
        [
          "Voyant mode orange",
          "Mode contourné. En sécurité relative, la porte reste verrouillée jusqu'à ce qu'un utilisateur appuie sur la sonnette ; en sécurité absolue, elle reste verrouillée en permanence (version française, p. 3 ; la version anglaise du même PDF, p. 14, dit l'inverse : en fail safe la porte est constamment déverrouillée)."
        ],
        [
          "Voyant mode rouge",
          "Mode sécurisé : seuls les utilisateurs sécurisés et principaux entrent. Après le code principal, le voyant passe au vert 10 s pour saisir le code secondaire."
        ],
        [
          "Voyant porte vert (programmation)",
          "Le clavier est en mode programmation."
        ],
        [
          "Bip long",
          "Code invalide (ou emplacement vide à la suppression, ou emplacement déjà occupé à la création)."
        ],
        [
          "3 bips",
          "Opération validée (puis retour en mode normal)."
        ]
      ],
      "notes": [
        "Utilisateurs : normal (code principal seul, accès en modes normal et contourné), sécurisé (code principal et code secondaire différents, accès dans tous les modes), principal (même code dans les deux emplacements, accès dans tous les modes, moins sûr). Le code principal doit être unique et différent des codes système ; un code secondaire peut être partagé.",
        "Changer de mode : normal vers sécurisé = saisir le code normal / sécurisé (3838 par défaut) puis # (voyant rouge) ; l'inverse de même (voyant vert). Normal vers contourné = code normal / contourné puis # (voyant orange), à définir au menu 5 (0000 le désactive). L'entrée auxiliaire peut aussi basculer normal / sécurisé.",
        "Menus (après entrée en programmation) : 1 code d'ouverture (2580, sert à tester le relais ; ne fonctionne pas en mode sécurisé ; 0000 l'efface) · 2 code auxiliaire (0852, testé le relais auxiliaire ; 0000 l'efface) · 3 code de programmation · 4 code normal / sécurisé · 5 code normal / contourné · 6 entrées / sorties auxiliaires, délai de verrouillage, radiateur · 7 création de codes · 8 suppression · 9 attribution aux relais · 0 retour aux réglages d'usine. À l'ajout du premier utilisateur, les codes d'ouverture et auxiliaire d'usine sont supprimés.",
        "Menu 6 : code à 4 chiffres, le mode auxiliaire est le premier chiffre : 0 REX-2 (code valide pour REX-2) · 1 relais activé par un code valide (normal / sécurisé) · 2 touche sonnette * · 3 activation du tamper · 4 dérivation directe · 5 contact de porte : dérivation · 6 contact de porte : manumission (retard) · 7 contact de porte : porte non refermée après le temps maxi · 8 LED Ctrl rouge · 9 LED Ctrl vert. Les deux derniers chiffres : 01 à 99 = temps en secondes ; 00 = bistable seulement pour les modes 0, 1, 2, 3, 8 et 9 (pour les modes 4 à 7, 00-99 est un délai : dérivation, retard, porte ouverte). Défaut 2004 pour les entrées / sorties auxiliaires et 0004 pour le délai de libération.",
        "Menu 9 : attribution de chaque emplacement utilisateur : 1 = relais de verrouillage seul, 2 = relais auxiliaire seul, 3 = les deux. Suppression d'un utilisateur (menu 8) : emplacement à 3 chiffres puis code de programmation ; méthode de recherche avec 000 puis code principal de l'utilisateur ; le code principal et le secondaire sont effacés.",
        "Radiateur intégré : menu 6, saisir 300 puis 0 (désactivé, réglage d'usine) ou 1 (activé). Il démarre entre 5 et 3 °C et s'arrête vers 5 à 8 °C ; à −20 °C minimum seulement s'il est activé.",
        "Code de programmation perdu (clavier en mode normal, voyant vert) : couper l'alimentation, appuyer sur REX, remettre l'alimentation avec REX appuyé, relâcher REX ; dans les 15 secondes, # deux fois puis 1234, puis 3 et le nouveau code. Code normal / sécurisé perdu (clavier en mode sécurisé, voyant rouge) : même manœuvre, puis saisir 3838 dans les 15 s pour revenir en mode normal.",
        "Retour aux réglages d'usine : menu 0 puis code de programmation (efface toute la mémoire, codes spéciaux et utilisateurs compris, 3 bips). Variante de la notice simplifiée : couper l'alimentation, relier ensemble les fils vert et noir, remettre sous tension (code de programmation 1234 pendant 15 s), # deux fois, code, 0 deux fois, code ; 3 bips ; débrancher le fil vert. Les deux notices décrivent donc deux procédures différentes.",
        "Notice simplifiée (EASYBKA / EASYBKR) : modifier le code de programmation (# deux fois, code maître, touche 3, nouveau code) ; code du relais 1 (touche 1, usine 2580) ; code du relais 2 (touche 2, usine 0852). Les noms de menu 1 et 2 de la notice complète sont appelés « code utilisateur unique » dans la simplifiée.",
        "Prastel France, tél. 04 42 98 06 06 (numéro indiqué sur la notice, peut avoir changé)."
      ]
    },
    {
      "id": "opera-28800",
      "nom": "GATE BOLT 28800 / 28800LC",
      "marque": "OPERA",
      "couleur": "#8a5a00",
      "categorie": "Électroverrou de portail (verrou électrique)",
      "modeles": "28800 (avec chauffage) · 28800LC (sans chauffage) · versions 12 V : 28800-12 / 28800LC-12 · kit optionnel Art. 02288 (sur 28800LC)",
      "source": "Notice Opera s.r.l. « Gate Bolt Art. 28800 – 28800LC », instructions d'installation IT/FR/EN, rév. 03/24, colonne française",
      "resume": "Électroverrou de portail à cylindre (cylindre non fourni), alimenté en 24 V DC (5 A mini) ou, pour les versions -12, en 12 V DC (10 A mini). Un relais indique l'état du pêne. La version 28800 possède un chauffage antigel (fil marron).",
      "specs": [
        [
          "Alimentation",
          "28800 / 28800LC : 24 V DC, 5 A mini · 28800-12 / 28800LC-12 : 12 V DC, 10 A mini"
        ],
        [
          "Attention",
          "Alimenter en 24 V DC une version -12 peut l'endommager de façon irréparable"
        ],
        [
          "Relais d'état du pêne",
          "Contacts N.O. / N.C. / COM (fils gris, jaune, vert)"
        ],
        [
          "Chauffage antigel",
          "Sur la 28800 : fil marron. Sur la 28800LC : chauffage non installé"
        ],
        [
          "Cylindre",
          "Type DIN, non fourni. Came : 0 à 27° maximum ; ne pas utiliser de came dépassant 27° clé retirée"
        ],
        [
          "Fixation",
          "2 vis M6x6 et 2 vis M6x50 ; carter acier fixé latéralement"
        ]
      ],
      "raccordement": [
        {
          "n": "1 · Blanc",
          "label": "Alimentation +",
          "desc": "+24 V DC (28800 / 28800LC) ou +12 V DC (28800-12 / 28800LC-12)."
        },
        {
          "n": "2 · Rose",
          "label": "GND (masse)",
          "desc": "Masse de l'alimentation."
        },
        {
          "n": "3 · Gris",
          "label": "Relais état du pêne : N.O.",
          "desc": "Contact du relais d'état du pêne."
        },
        {
          "n": "4 · Jaune",
          "label": "Relais état du pêne : N.C.",
          "desc": "Contact du relais d'état du pêne."
        },
        {
          "n": "5 · Vert",
          "label": "Relais état du pêne : COM.",
          "desc": "Commun du relais d'état du pêne."
        },
        {
          "n": "6 · Marron",
          "label": "Chauffage",
          "desc": "Réchauffeur antigel (version 28800 uniquement)."
        }
      ],
      "installation": [
        "Fixer (souder ou visser) la base de l'électroverrou sur le portail, puis visser le corps du verrou avec les 2 vis M6x6 et les 2 vis M6x50.",
        "Insérer le cylindre dans son logement et le fixer avec la vis fournie. Le cylindre n'est pas fourni.",
        "Poser le carter en acier et le fixer latéralement avec les vis prévues.",
        "Prévoir une alimentation de 5 A mini en 24 V (10 A mini en 12 V pour les versions -12). Vérifier la bonne mise à la terre en cas de raccordement au réseau.",
        "Pêne sorti = porte bloquée ; pêne rentré = porte débloquée (position du contact C sur le schéma de la notice)."
      ],
      "codes": [
        [
          "LED rouge",
          "Alimentation du circuit."
        ],
        [
          "LED verte",
          "Commande d'ouverture activée."
        ],
        [
          "LED bleue",
          "Seul le chauffage est actif."
        ]
      ],
      "notes": [
        "La notice ne décrit pas par un texte la façon de commander l'ouverture (contact C sur le schéma) : se reporter au schéma de la notice (pages 6 et 7) et au manuel d'utilisation, qui n'est pas dans ce PDF.",
        "Incohérence de la notice : les pages 6 et 7 sont intitulées « 28800-28800LCW » (version avec chauffage) et « 28800LC » (sans chauffage) ; « LCW » semble être une coquille pour « LC », la notice ne l'explique pas.",
        "Opera s.r.l., via Portogallo 43, 41122 Modena (Italie), tél. +39 059 451708, www.opera-italy.com (indiqués sur la notice)."
      ]
    },
    {
      "id": "locinox-electradrop",
      "nom": "ELECTRADROP-E / E-P",
      "marque": "LOCINOX",
      "couleur": "#0a6a4a",
      "categorie": "Verrou de sol électrique (électroverrou de portail)",
      "modeles": "ELECTRADROP-E (câble 5 m, 4 × 0,5 mm²) · ELECTRADROP-E-P (câble 5 m, 7 × 0,5 mm², avec sortie de position) · mêmes schémas sur la feuille pour les versions à piles ELECTRADROP-R / R-P",
      "source": "Notice rapide Locinox ELECTRADROP-E / E-P (D00000086, rév. 1 du 22/10/2024, schémas) et manuel utilisateur ELECTRADROP MANU-000100 (colonne française)",
      "resume": "Verrou de sol électrique pour portails motorisés, commandé par le signal du feu clignotant de l'automatisme (pré-clignotement de 3 s mini). Course 115 mm, détection d'obstacle, ouverture de secours par retrait du cylindre. Alimentation 24 V DC.",
      "specs": [
        [
          "Alimentation",
          "24 V DC (polarité protégée) · 25 W · 0,2 W au repos · alimentation Locinox DC-POWER-24V/25W (manuel)"
        ],
        [
          "Course / secours",
          "Course 115 mm · ouverture de secours : coulissement sur 120 mm après retrait du cylindre"
        ],
        [
          "Force",
          "18 kg pendant la descente · arrêt automatique devant un obstacle"
        ],
        [
          "Cylindre",
          "Européen 27/10, réf. Locinox 3012G21Z"
        ],
        [
          "Entrée signal (feuille)",
          "12–24 V AC/DC ±20 %, 50/60 Hz · 5 mA · impulsions 0,25 à 5 Hz (largeur > 100 ms) · cycle 1 / 60 s"
        ],
        [
          "Sortie de position (manuel)",
          "Contact bornes 3-4 : 200 V (DC ou crête AC) · 1 A · 20 W maxi"
        ],
        [
          "Sortie de position (feuille, E-P)",
          "UMAX 30 V DC · IMAX 2 A · PMAX 60 W (fils 5-6-7)"
        ],
        [
          "Alimentation maxi (feuille)",
          "24 V DC ±20 % · IMAX 3 A · 20 mW / 72 W maxi (E / E-P)"
        ]
      ],
      "raccordement": [
        {
          "n": "1 · Blanc (signal)",
          "label": "Signal du feu clignotant",
          "desc": "Feuille : fils « signal » blanc et orange (1 et 2). Feu en 12-24 V AC/DC (cas A) : branchés directement sur les bornes du feu clignotant. Feu en 110 / 230 V AC (cas B) : passer par un relais externe dont la bobine a la tension du feu et dont le contact commute plus de 24 V AC/DC et plus de 5 mA (SPST-NO)."
        },
        {
          "n": "2 · Orange (signal)",
          "label": "Signal du feu clignotant",
          "desc": "Voir ci-dessus. Le signal doit être actif au moins 3 s avant l'ouverture du portail."
        },
        {
          "n": "3 · Noir",
          "label": "Alimentation DC",
          "desc": "Feuille : fils « DC POWER » noir et rouge (3 et 4) vers les bornes « 24 V DC AUX » de l'alimentation Powerstone (24 V ±20 %, 3 A maxi). La polarité des deux fils n'est pas indiquée sur la feuille."
        },
        {
          "n": "4 · Rouge",
          "label": "Alimentation DC",
          "desc": "Voir ci-dessus."
        },
        {
          "n": "E-P : 5 · Rose / 6 · Vert / 7 · Gris",
          "label": "Sortie de position",
          "desc": "Feuille : rose = DOWN, vert = UP, gris = COM (sortie de position du verrou, UMAX 30 V DC, 2 A, 60 W)."
        }
      ],
      "installation": [
        "Préparer le portail : 2 perçages Ø 15 mm (entraxe indiqué sur la feuille : 540 mm), puis déverrouiller l'ELECTRADROP et retirer le cylindre.",
        "Passer le câble dans le profil du portail, fixer l'ELECTRADROP, puis remettre le cylindre (le trou de la vis de fixation du cylindre reçoit le bouchon polyamide fourni).",
        "Utilisation possible avec la butée de sol Locinox OGS. Le signal du feu clignotant doit être actif au moins 3 s avant la séquence d'ouverture.",
        "Signal impulsionnel : le verrou descend 2 s après la fin des impulsions. Signal continu : il descend immédiatement à la fin du signal."
      ],
      "notes": [
        "Contradiction entre les deux documents sur les couleurs de fils : le manuel utilisateur (MANU-000100) décrit 5 fils (marron + 24 V, gris = lampe, noir ×2 = sortie de position bornes 3-4, bleu = moins de l'alimentation 0 V DC) alors que la feuille rapide de 10/2024 décrit un câble 4 fils (blanc, orange, noir, rouge) ou 7 fils (E-P : + rose, vert, gris). Suivre la feuille la plus récente, repérer les fils sur le câble réel et le signaler en cas de doute.",
        "FAQ du manuel : obstacle (sable, cailloux) dans la butée : la tige s'arrête à sa position. Câble d'alimentation coupé : le verrou reste dans sa dernière position. Coupure de courant : déverrouiller avec la clé puis faire coulisser l'ELECTRADROP vers le haut.",
        "Les versions ELECTRADROP-R / R-P (à piles) figurent sur la même feuille : changement des piles avec 2 piles lithium 9 V type E (Li/MnO2, ANSI 1604LC) ; IMAX 2,2 A / 55 W maxi pour la version à alimentation.",
        "Locinox NV, Brabantstraat 107, 8790 Waregem (Belgique) ; assistance : +32 56 77 27 66, help@locinox.com (indiqués sur la feuille)."
      ]
    },
    {
      "id": "cardin-s449",
      "nom": "S449 : RQM449 / RSQ449 / RCQ449",
      "marque": "CARDIN",
      "couleur": "#b3122b",
      "categorie": "Récepteur radio rolling code",
      "modeles": "RQM449200 (mini 2 canaux IP20) · RSQ449200 (carte 2 canaux) · RSQ449OC2 (carte open collector) · RCQ449100 (sous coffret IP55, 4 canaux) · versions 868 MHz : RQM486200, RSQ486200, RSQ486OC2, RCQ486100 · émetteurs TXQ449… / TXQ486…",
      "source": "Notice Cardin S449 / S486 (ZVL614.00 du 10.01.2017), pages françaises 16 à 22",
      "resume": "Radiocommande FM à rolling code. Les récepteurs mémorisent les émetteurs par canal (A à D) avec les boutons P1 (MEMO) et P2 (DELETE) ; mémorisation par radio possible si le cavalier J3 est connecté. Antenne conseillée : ANS400 / ANQ800-1 en câble RG58 de 15 m maxi.",
      "specs": [
        [
          "Fréquence",
          "433,92 MHz (S449) / 868,3 MHz (S486) · modulation FSK"
        ],
        [
          "Alimentation récepteur",
          "12/24 V ac/dc · open collector : 5 V DC"
        ],
        [
          "Consommation",
          "20 mA au repos · 40 mA avec 1 relais activé"
        ],
        [
          "Contacts de relais",
          "60 VA / 24 W maxi, 30 V ac/dc maxi · retard à l'excitation 80 à 100 ms"
        ],
        [
          "Température récepteur",
          "−20 à +75 °C"
        ],
        [
          "Mémoire",
          "Module ZGB24LC16-I/P (EEPROM)"
        ],
        [
          "Émetteur",
          "Pile lithium 3 V CR2032 · 4 fonctions · portée 100–150 m (poche), 200 m (industriel), 700 m (industriel avec antenne)"
        ]
      ],
      "raccordement": [
        {
          "n": "RCQ449100 (coffret IP55)",
          "label": "Bornier 14 voies",
          "desc": "12 V ac/dc entre les bornes 1-2 ; 24 V ac/dc entre les bornes 1-3."
        },
        {
          "n": "RSQ449200 (carte)",
          "label": "Alimentation et relais",
          "desc": "24 V ac/dc entre les bornes 3-4. Relais CH1 (N.O. seulement) et CH2 (N.O. et N.F.). Cavaliers pour associer A/B/C/D à CH1 et CH2."
        },
        {
          "n": "RQM449200 (mini IP20)",
          "label": "Bornier 8 voies",
          "desc": "12 V ac/dc entre les bornes 7-8 ; 24 V ac/dc entre les bornes 6-8. Relais CH1 et CH2 (N.O. seulement), cavaliers J1 pour choisir les fonctions A/B/C/D."
        },
        {
          "n": "RSQ449OC2 (open collector)",
          "label": "Broches 7-8",
          "desc": "5 V DC entre les broches 7-8, deux sorties open collector. Pour affecter A/B/C/D aux sorties 1 et 2, connecter le cavalier J1."
        },
        {
          "n": "Antenne",
          "label": "RG58 (50 Ω)",
          "desc": "Antenne accordée ANS400 / ANQ800-1 reliée au récepteur par un câble RG58 de 15 m maxi."
        }
      ],
      "installation": [
        "Avant la première mémorisation, effacer entièrement la mémoire. Le module mémoire doit être retiré ou inséré récepteur éteint, sous peine de corrompre les données.",
        "Mémoriser un canal : appuyer sur P1 (MEMO) et le maintenir, la LED L1 clignote lentement ; activer l'émetteur sur le canal à mémoriser ; maintenir P1 jusqu'à ce que L1 se remette à clignoter ; activer une seconde fois le même canal du même émetteur ; L1 reste allumée 2 s et la mémorisation est faite. Sortie automatique après 15 s sans seconde activation.",
        "Effacer un canal : appuyer sur P2 (DELETE) et le maintenir (L1 clignote vite), activer l'émetteur sur le canal à effacer, L1 reste allumée 2 s.",
        "Effacement total de la mémoire : appuyer sur P1 + P2 plus de 4 s ; L1 reste allumée environ 8 s, son extinction indique la fin.",
        "Mémorisation par radio (J3 connecté) : activer la touche MR d'un émetteur déjà mémorisé (les récepteurs concernés bipent), appuyer sur une touche de cet émetteur, puis sur une touche de l'émetteur à mémoriser : 2 bips d'une demi-seconde. Sortie après 5 s sans mémorisation (bip de 5 s)."
      ],
      "codes": [
        [
          "L1 clignotement lent",
          "Mémorisation d'un usager."
        ],
        [
          "L1 clignotement rapide",
          "Effacement d'un usager."
        ],
        [
          "L1 allumée fixe",
          "Mémoire saturée."
        ],
        [
          "Bip 10 coups très courts",
          "Mémoire saturée pendant la mémorisation par radio (sortie du procédé, L1 reste allumée)."
        ],
        [
          "Bip de 5 s puis bip 1 s",
          "Mémorisation par radio : bip 5 s = récepteur qui ne contient pas le code (désactivé) ; bip 1 s = récepteur qui contient le code et entre dans le procédé."
        ]
      ],
      "notes": [
        "Contradiction dans la notice : la description indique que le récepteur peut mémoriser « jusqu'à 3000 codes » (page 16) alors que le module mémoire ZGB24LC16-I/P est donné pour 300 codes (page 17) ; la version allemande indique aussi 300. Ne pas retenir de chiffre sans vérifier le module monté.",
        "Verrouillage des touches de l'émetteur : maintenir MR 8 s jusqu'au clignotement de la LED rouge ; il faut ensuite appuyer 3 fois de suite sur la touche pour envoyer une commande. Même manœuvre pour revenir au mode normal. Extinction automatique de l'émetteur : « au moins 20 secondes » (page 18) mais « au moins 25 secondes » dans les caractéristiques techniques de la même notice.",
        "Si la mémoire est presque saturée, la recherche de l'usager peut durer 1 s au plus. Un usager déjà mémorisé ne peut pas être mémorisé de nouveau.",
        "Cardin Elettronica S.p.A., Via del Lavoro 73, 31013 Codognè (TV), Italie, tél. +39 0438 404011 (indiqué sur la notice). La déclaration de conformité cite aussi RCQ449D00 et RCQ449W00, sans les détailler ; RCQ449N100 n'apparaît que dans le nom du fichier fourni."
      ]
    },
    {
      "id": "cardin-s504",
      "nom": "S504 : RQM504 / RSQ504 / RCQ504",
      "marque": "CARDIN",
      "couleur": "#b3122b",
      "categorie": "Récepteur radio rolling code",
      "modeles": "RQM504C2 (mini 2 canaux IP20) · RSQ504C2 (carte 2 canaux) · RSQ504OC2 (carte open collector) · RCQ504C1 (sous coffret 4 canaux) · versions 868 MHz : RQM508C2, RSQ508C2, RSQ508OC2, RCQ508C1 · émetteurs TXQ504C2/C4, TXQPRO504-4/4A (868 MHz : TXQ508…)",
      "source": "Notice Cardin S504 / S508 (ZVL544.02 du 28.07.2016), pages françaises 18 à 25",
      "resume": "Radiocommande FM à rolling code, 1000 codes en mémoire EEPROM (module ZGB24LC64-I/P). Boutons MEMO et DEL sur le récepteur, LED rouge LGC (gestion usagers) et LED verte LS (état). Mémorisation rapide à distance si le cavalier R.MEMO est connecté.",
      "specs": [
        [
          "Fréquence",
          "433,92 MHz (S504) / 868,3 MHz (S508) · modulation FSK"
        ],
        [
          "Alimentation récepteur",
          "12/24 V ac-dc · open collector : 5 V DC"
        ],
        [
          "Consommation",
          "20 mA au repos · 40 mA avec 1 relais activé"
        ],
        [
          "Contacts de relais",
          "60 VA / 24 W maxi, 30 V ac-dc maxi · retard à l'excitation 80 à 100 ms"
        ],
        [
          "Température récepteur",
          "−20 à +75 °C"
        ],
        [
          "Mémoire",
          "1000 codes · module ZGB24LC64-I/P"
        ],
        [
          "Émetteur",
          "Pile lithium 3 V CR2032 · 4 fonctions · rolling code 128 bits · portée 100–150 m (poche), 200 m (industriel), 700 m (industriel avec antenne extérieure)"
        ]
      ],
      "raccordement": [
        {
          "n": "Mini IP20 (RQM504)",
          "label": "Bornier 10 voies",
          "desc": "12/24 V ac-dc entre les bornes 7 et 8. Relais CH1 (N.O. – N.F.) et CH2 (N.O. – N.F.). Cavaliers J1 pour associer CHA à CHD aux relais ; cavaliers SEL CH1 / SEL CH2 : connecté = relais ON/OFF, déconnecté = impulsionnel. Changer de mode oblige à éteindre puis rallumer le récepteur."
        },
        {
          "n": "Carte (RSQ504)",
          "label": "Alimentation et relais",
          "desc": "24 V ac-dc entre les bornes 3-4. CH1 (N.O. seulement) et CH2 (N.O. – N.F.), cavaliers J1 et SEL CH1 / SEL CH2 comme ci-dessus."
        },
        {
          "n": "Coffret IP55 (RCQ504)",
          "label": "Bornier 13 voies",
          "desc": "12/24 V ac-dc entre les bornes 1 et 2. Modules de canal interchangeables MCCMORPHM0, dip-switches : Dip1 = CHA, Dip2 = CHB, Dip3 = CHC, Dip4 = CHD ; OFF = impulsif, ON = ON/OFF."
        },
        {
          "n": "Open collector (RSQ504OC)",
          "label": "Broches 7-8",
          "desc": "5 V DC entre les broches 7-8, deux sorties open collector. Affecter A/B/C/D : connecter J1, LED L1 = canal (1 à 4 clignotements = CHA à CHD, bouton P1 pour changer), LED L2 = sortie (fixe = 1, clignotante = 2, éteinte = aucune, bouton P2). Réglage usine : CHA sortie 1, CHB sortie 2, CHC et CHD aucune. Déconnecter J1 à la fin, sinon le récepteur ne fonctionne pas."
        },
        {
          "n": "Antenne",
          "label": "RG58 (50 Ω)",
          "desc": "Antenne accordée ANS400 / ANQ800-1 par câble RG58 de 15 m maxi."
        }
      ],
      "installation": [
        "Avant la première mémorisation, effacer toute la mémoire. Retirer ou insérer le module mémoire récepteur éteint.",
        "Mémoriser un canal : émetteur près du récepteur ; appuyer sur MEMO et le maintenir (LGC clignote lentement) ; appuyer une première fois sur la touche à mémoriser (LGC clignote vite) ; appuyer une seconde fois (LGC fixe puis s'éteint) ; relâcher MEMO.",
        "Effacer un canal : appuyer sur DEL et le maintenir (LGC clignote vite) ; appuyer sur la touche à effacer ; LGC passe au rouge fixe puis s'éteint ; relâcher DEL.",
        "Effacement total : appuyer en même temps sur MEMO et DEL plus de 4 s ; LGC reste allumée environ 3 s puis clignote avant de s'éteindre.",
        "Mémorisation à distance avec un émetteur déjà mémorisé (R.MEMO connecté = validée, déconnecté = invalidée) : ouvrir les deux émetteurs, les placer côte à côte, appuyer sur MR des deux (LED orange lente), puis appuyer sur une touche de canal déjà activée sur le récepteur : la LED du nouvel émetteur reste allumée 3 s."
      ],
      "codes": [
        [
          "LGC (rouge) clignotement lent",
          "Mémorisation d'un usager."
        ],
        [
          "LGC (rouge) clignotement rapide",
          "Effacement d'un usager."
        ],
        [
          "LGC (rouge) fixe",
          "Mémoire pleine."
        ],
        [
          "LS (verte) fixe",
          "Appareil sous tension."
        ],
        [
          "LS (verte) clignotante",
          "Module de mémoire absent."
        ]
      ],
      "notes": [
        "Verrouillage des touches de l'émetteur : maintenir MR 8 s jusqu'au clignotement de la LED orange ; il faut ensuite appuyer 3 fois de suite sur la touche. Même manœuvre pour revenir au mode normal. Extinction automatique de l'émetteur au bout d'au moins 20 s.",
        "Le fichier fourni s'intitule « RQM504 » mais la notice couvre toute la série S504 / S508 (mini, carte, open collector, coffret).",
        "Cardin Elettronica S.p.A., Via del Lavoro 73, Z.I. Cimavilla, 31013 Codognè (TV), Italie, tél. +39 0438 404011 (indiqué sur la notice)."
      ]
    },
    {
      "id": "intratone-centrale-1-porte",
      "nom": "Centrale 1 porte 03-0102",
      "marque": "INTRATONE",
      "couleur": "#e2007a",
      "categorie": "Contrôle d'accès – centrale 1 porte",
      "modeles": "Centrale 1 porte 03-0102 (modèle FCL00341, schéma produit 03-0103-PLUS) · carte relais 12-0110",
      "source": "Notice technique Intratone V233-6019-AA « Centrale 1 porte », pages françaises 3 à 13",
      "resume": "Centrale de contrôle d'accès d'un seul accès, reliée aux lecteurs, claviers et interphones par le bus DATA (D+ / D−). Les réglages se font par les 6 switches de la carte, depuis l'interphone, ou sur www.intratone.info.",
      "specs": [
        [
          "Alimentation",
          "12–24 V DC (alimentation mini 12 V / 5 A, maxi 24 V / 2,5 A) · consommation 0,25 W mini, 0,6 W maxi"
        ],
        [
          "Température / indice",
          "Fonctionnement −10 à +45 °C · stockage 0 à +35 °C · IP40 · humidité relative 70 % maxi"
        ],
        [
          "Pile",
          "CR2032 3 V (mémoire débrochable)"
        ],
        [
          "Câble bus",
          "Ø 8/10e, 100 m maxi"
        ],
        [
          "Montage",
          "Respecter le sens Haut / Bas indiqué sur la centrale"
        ]
      ],
      "raccordement": [
        {
          "n": "Bornes centrale",
          "label": "+ · − · D+ · D− · BP · Alt · terre · C R T",
          "desc": "Alimentation + / −, bus DATA D+ / D−, entrée bouton poussoir BP, entrée alerte Alt, relais C / NC / NO (repéré C R T)."
        },
        {
          "n": "Interphone / lecteurs",
          "label": "ALIM · DATA · AUDIO · VIDEO",
          "desc": "Les appareils (DEVICE 1, 2…) se raccordent en parallèle sur + / − et D+ / D− ; interphones vidéo : A+ / A− (audio) et V+ / V− (vidéo)."
        },
        {
          "n": "Ventouse",
          "label": "Relais C / NC",
          "desc": "Ventouse avec varistance sur le relais ; alimentation séparée de la ventouse."
        },
        {
          "n": "Gâche",
          "label": "Relais C / NO",
          "desc": "Gâche électrique avec varistance sur le relais ; alimentation séparée."
        },
        {
          "n": "Câble de liaison",
          "label": "Ø 8/10e",
          "desc": "Paire D+ / D− et paire + / − torsadées entre deux appareils, 100 m maxi."
        }
      ],
      "installation": [
        "Câbler l'alimentation, le bus D+ / D−, le bouton poussoir BP et le relais (ventouse ou gâche, avec varistance) selon le schéma de câblage.",
        "Switches de la carte : S1 à S3 non activés ; S4 et S5 : tempo de porte 5 s (S4 ON, S5 ON) ou 10 s (S4 ON, S5 OFF) ; S4, S5 et S6 tous sur OFF = mode configuration, seuls les réglages faits sur l'application sont pris en compte. S6 ON = bouton poussoir NO, S6 OFF = bouton poussoir NF.",
        "Configuration via l'interphone (équipé d'un clavier alphanumérique, pas avec claviers à code, BP ou lecteurs) : appuyer 10 s pour afficher le menu, saisir le numéro de série de la centrale (7XXXXXX3), puis régler horloge (été / hiver), paramètres de porte (tempo, NO / NF), volume (1 à 4) et mise à jour. Vérification de l'installation : saisir son numéro de téléphone, la touche étoile (*) ouvre la porte.",
        "Sur www.intratone.info, déclarer la centrale (type de centrale, numéro de série), cocher « carte porte » 1, 2 ou 3 pour activer une carte relais et paramétrer les alertes de chaque connecteur.",
        "Vérifier l'installation : faire un pont entre la borne BP et la masse (BP configuré en NO) : le relais doit ouvrir la porte. Avant la première mise à jour, la centrale ouvre à tous les badges Intratone, ce qui permet de tester avec un badge non programmé."
      ],
      "codes": [
        [
          "LED 1 clignotement lent",
          "Fonctionnement normal (la notice indique de revoir l'alimentation si la LED est éteinte)."
        ],
        [
          "LED 1 éteinte",
          "Revoir l'alimentation."
        ],
        [
          "LED 3 éteinte",
          "Sortie d'usine (page 9)."
        ],
        [
          "LED 3 clignotement rapide",
          "Problème de sauvegarde (page 9)."
        ],
        [
          "LED 4",
          "Clignotement lent = état correct ; éteinte = échec (page 9)."
        ]
      ],
      "notes": [
        "Incohérence de la notice : la page 3 s'intitule « Centrale 1 porte 01-0201 » alors que les schémas et le reste du document donnent la référence 03-0102 (et 03-0103-PLUS pour le schéma produit).",
        "Le tableau de la notice relatif aux LED 1 à 4 est un schéma : l'association exacte état / LED est à lire sur la page 9 de la notice.",
        "Matériels compatibles VIGIK+ : centrales 1 porte dont le numéro de série commence par 76 ou 78 ; centrales 2 portes à partir du numéro 0002 ; modules 4G et Data dont le numéro de série commence par 2091 / 2102 / 2108 / 2110. La notice de l'interphone ONLY-ONE ajoute 75 pour les centrales 1 porte.",
        "Pile : remplacer uniquement par une CR2032 (risque d'explosion), ne pas incinérer ni démonter.",
        "Intratone (COGELEC), 370 rue de Maunit, 85290 Mortagne-sur-Sèvre (indiqué sur la notice)."
      ]
    },
    {
      "id": "intratone-centrale-2-portes",
      "nom": "Centrale de gestion 2 portes 03-0101",
      "marque": "INTRATONE",
      "couleur": "#e2007a",
      "categorie": "Contrôle d'accès – centrale 2 portes",
      "modeles": "Centrale 2 portes 03-0101 · carte d'extension 12-0109 (4 portes au total) · notice V233-5001-BA",
      "source": "Notice Intratone « Centrale de gestion 2 portes » V233-5001-BA, pages françaises 1 à 11",
      "resume": "Centrale à afficheur et clavier gérant 2 portes (4 avec la carte d'extension 12-0109), compatible VIGIK. Configuration locale par le clavier (mot de passe = numéro de série) et déclaration obligatoire sur www.intratone.info avant utilisation. Gère anti-passback, alertes par contact et contrôle d'installation.",
      "specs": [
        [
          "Alimentation",
          "12 V DC 5 A ou 24 V DC 2,5 A (une alimentation par connecteur sur le schéma)"
        ],
        [
          "Température",
          "−20 à +60 °C (indiqué sur la première page)"
        ],
        [
          "Relais",
          "Un relais par porte, bouton poussoir BP entre BP (X7) et GND (X8) (X = numéro du connecteur)"
        ],
        [
          "Ventouse",
          "Tension d'alimentation inférieure à 42 V AC ou 60 V DC ; au-delà, relais intermédiaire"
        ],
        [
          "VIGIK",
          "Distance mini 2 m entre la tête de lecture et la centrale pour respecter le standard VIGIK"
        ],
        [
          "Écran",
          "Contraste réglable de 1 à 9 par les flèches ; volume des platines de 1 à 4"
        ]
      ],
      "raccordement": [
        {
          "n": "Alimentation",
          "label": "+ / − de chaque connecteur",
          "desc": "Alimenter la centrale et chaque connecteur en 12 V DC 5 A ou 24 V DC 2,5 A."
        },
        {
          "n": "Bouton poussoir",
          "label": "BP (X7) – GND (X8)",
          "desc": "Le BP doit être configuré en NO (défaut) ou en NF dans le menu de la centrale selon le câblage."
        },
        {
          "n": "Ventouse",
          "label": "Relais coupant l'alimentation",
          "desc": "Le relais coupe l'alimentation de la ventouse pendant la durée réglée. Si la centrale est hors-service, le contact NF du BP coupe aussi l'alimentation de la ventouse. Varistance (pastille bleue) indispensable, calibrée pour 12 V."
        },
        {
          "n": "Gâche",
          "label": "Relais alimentant la gâche",
          "desc": "Le relais alimente la gâche pendant la durée réglée. Si la centrale est hors-service, le contact NO du BP alimente aussi la gâche (prévoir une alimentation secourue)."
        },
        {
          "n": "Alertes",
          "label": "X8 – X9",
          "desc": "Contact d'alerte NO ou NF entre les bornes X8 et X9 du connecteur ; une alerte est envoyée par mail après la durée avant envoi, paramétrage sur le site (menu « centrale », « gérer les alertes »)."
        },
        {
          "n": "Centrale option",
          "label": "Bus 1-2-3 (bornier du haut)",
          "desc": "Carte d'extension 12-0109 (2 portes de plus). Brancher hors tension : risque de court-circuit et de dégradation hors garantie."
        }
      ],
      "installation": [
        "Avant de quitter l'installation, vérifier le câblage : date et heure exactes sur la première ligne de l'afficheur ; le relais ouvre la porte quand on fait un pont entre BP X7 et X8 ; la seconde ligne liste les appareils reliés (Initialisation, Réseau X/5, Plat., Clav., Lect., HF, CAC, Libre).",
        "Menu de configuration : appuyer sur une touche, saisir le mot de passe = numéro de série de la centrale (000XXXXX). Écrans : réglage horloge (date, jour, heure, été / hiver, accepter heure distante), paramètres de porte (BP NO / NF, tempo de 0 à 99 s, portes 1 à 4), volume des platines, anti-passback, demande de mise à jour Internet, vérification de l'installation (numéro de test). La touche X annule et quitte.",
        "Déclarer la centrale sur www.intratone.info (numéro de série 00XXXXXX, numéro de contrat si solution GSM, emplacement de chaque accès).",
        "Vérification du fonctionnement : menu « vérification de l'installation » (4 écrans après la saisie du numéro de série) : saisir son numéro de téléphone (si une platine est reliée), option « Visio » en 3G, V pour lancer. Procédure active 15 min : ouverture par tout badge Mifare ou toute télécommande Intratone, appel du numéro de test depuis la platine, la touche * ouvre la porte de la platine.",
        "Sécurité : l'accès doit pouvoir s'ouvrir de l'intérieur en cas de coupure de courant (barre anti-panique, bouton poussoir à alimentation secourue ou tout système équivalent)."
      ],
      "codes": [
        [
          "Écran éteint",
          "Vérifier l'alimentation sur + et − ainsi que celle de chaque connecteur."
        ],
        [
          "Seconde ligne qui ne défile pas",
          "Vérifier D+ et D− de chaque connecteur."
        ],
        [
          "Matériel non vu (« PX : libre »)",
          "Vérifier +, −, D+ et D− du connecteur concerné."
        ],
        [
          "Porte fermée, lecteur vert",
          "Contrôler à l'ohmmètre le relais avec un pont entre X7 et X8, puis la commande de la porte sans la centrale (pont sur le relais)."
        ],
        [
          "Aucun son de la platine",
          "Vérifier A+ / A− du connecteur ; si les messages vocaux passent mais pas la conversation, vérifier A+ / A− du module audio / vidéo ou de la platine."
        ],
        [
          "Centrale option sans mise à jour",
          "Vérifier le câblage du bus 1-2-3 (bornier du haut)."
        ]
      ],
      "notes": [
        "Anti-passback (centrales de numéro de série supérieur à 00020000, reliées à un module Data / Audio / Vidéo) : de 1 à 3 entrées / sorties par centrale, boucles de présence conseillées. « Sortie libre » : sortie toujours permise, entrée seulement après la durée (5 à 240 min, ou « permanent » = après une sortie). « Dépose-minute » : séjour limité (5 à 240 min), au-delà le badge est suspendu et seule une réactivation sur le site l'annule. Les télécommandes doivent avoir l'option anti-passback activée sur le site, sinon aucune restriction.",
        "Services VIGIK gérés par le logiciel Intra79, fourni sur demande au support technique.",
        "Des renvois de la notice (« voir page 12 », « cf. page 7 ») correspondent à la pagination de la version complète multilingue.",
        "Intratone, ZI de Maunit, 370 rue de Maunit, 85290 Mortagne-sur-Sèvre (indiqué sur la notice)."
      ]
    },
    {
      "id": "intratone-only-one",
      "nom": "Interphone vidéo ONLY-ONE",
      "marque": "INTRATONE",
      "couleur": "#e2007a",
      "categorie": "Contrôle d'accès – interphone vidéo",
      "modeles": "02-0317 / 02-0318 (versions PLUS et EU) · centrale associée 03-0102 · antenne déportée 12-0114",
      "source": "Notice technique Intratone V233-6031-AA « Interphone vidéo ONLY-ONE » (Vigik), pages françaises 3 à 14",
      "resume": "Interphone vidéo à écran et lecteur de proximité Vigik+, relié à la centrale 1 porte 03-0102 par le bus (alimentation, DATA, audio, vidéo). Connexion réseau mobile 4G / 3G / GSM par antenne interne ou déportée 12-0114. Configuration sur www.intratone.info.",
      "specs": [
        [
          "Alimentation",
          "12–24 V DC (alimentation recommandée 12 V 5 A / 24 V 2,5 A)"
        ],
        [
          "Consommation",
          "3,5 W mini, 16 W maxi"
        ],
        [
          "Protection",
          "IP54 · IK07"
        ],
        [
          "Température",
          "−10 à +55 °C en fonctionnement et en stockage · humidité relative 70 % maxi"
        ],
        [
          "Modèle",
          "FPL00117"
        ],
        [
          "Réseau",
          "2G / 3G / 4G, Wi-Fi 2,4 et 5 GHz, BLE, RFID 125 kHz, NFC 13,56 MHz (caractéristiques radio sur la notice)"
        ],
        [
          "Câblage",
          "Ø 8/10e, 100 m maxi entre appareil et centrale"
        ]
      ],
      "raccordement": [
        {
          "n": "Interphone",
          "label": "ALIM · DATA · AUDIO · VIDEO",
          "desc": "Bornes + − (alimentation), D+ D− (data), A+ A− (audio), V+ V− (vidéo) à relier aux bornes correspondantes de la centrale 03-0102. AUX+ / AUX− : non fonctionnel (indiqué sur le schéma)."
        },
        {
          "n": "Centrale 03-0102",
          "label": "Relais C / R / T",
          "desc": "Relais vers ventouse ou gâche, avec varistance ; alimentation de la centrale 12 V 5 A / 24 V 2,5 A."
        },
        {
          "n": "Antenne déportée 12-0114",
          "label": "Optionnelle",
          "desc": "Retirer le cache et dévisser, puis positionner les switches comme indiqué sur le schéma de la notice (antenne interne / antenne déportée) ; antenne à commander séparément."
        },
        {
          "n": "Réseau",
          "label": "Affichage RES / NIV",
          "desc": "Appuyer simultanément sur deux touches pour afficher le type de réseau (4G / 3G / GSM) et le niveau de signal (RES : 4G NIV : 17 par exemple)."
        }
      ],
      "installation": [
        "Montage sur béton ou acier avec la visserie fournie uniquement ; respecter le sens Haut / Bas. Certaines installations demandent un joint silicone supplémentaire en haut et sur les côtés.",
        "Câbler l'interphone à la centrale selon le schéma, vérifier la réception réseau (type et niveau de signal). Si la réception est mauvaise, poser l'antenne déportée 12-0114.",
        "Sur www.intratone.info : créer la résidence (choisir le département pour VIGIK+), créer l'accès, « configurer la centrale », choisir le type de centrale (03-0102), numéro de série (étiquette de la centrale) et numéro de contrat, choisir la plage d'accès libre et le type d'accès VIGIK+, ajouter appartements, résidents, badges, codes, puis « Mettre à jour » la résidence.",
        "Les services VIGIK+ ne sont pas activés par défaut : affecter un type d'accès avec les droits souhaités à chaque accès."
      ],
      "codes": [
        [
          "LED rouge du lecteur Vigik+ allumée en continu",
          "Normal dès que le lecteur est sous tension ; si elle reste éteinte, vérifier l'alimentation."
        ],
        [
          "Seul le logo Intratone s'affiche",
          "Vérifier le câblage entre l'interphone et la centrale ; l'afficheur doit indiquer le message d'accueil."
        ],
        [
          "Touches ou afficheur non rétro-éclairés",
          "Mauvais câblage sur les borniers + et / ou −."
        ],
        [
          "Touches éclairées mais pas l'afficheur (ou l'inverse)",
          "Contacter le service technique Intratone."
        ],
        [
          "Badge : LED verte mais la porte ne s'ouvre pas",
          "Relais de la centrale : vérifier le câblage entre la centrale et la porte."
        ],
        [
          "Écran figé",
          "Vérifier le câblage avec la centrale."
        ],
        [
          "« Appel impossible » sans tonalité",
          "Réseau téléphonique non disponible."
        ]
      ],
      "notes": [
        "Compatibilité VIGIK+ : la notice ONLY-ONE cite les centrales 1 porte dont le numéro de série commence par 75, 76 ou 78, la notice de la centrale 1 porte seulement 76 ou 78 : vérifier le numéro de série sur la centrale.",
        "Ne pas installer à l'extérieur en cas de températures extrêmes (Finlande, Suède, Norvège). Installation par du personnel qualifié.",
        "Logo de l'écran modifiable sur le site (menu « gestion du compte », « mes logos », formats jpeg et png).",
        "Intratone (COGELEC), 370 rue de Maunit, 85290 Mortagne-sur-Sèvre (indiqué sur la notice)."
      ]
    },
    {
      "id": "intratone-carte-relais",
      "nom": "Carte relais 12-0110",
      "marque": "INTRATONE",
      "couleur": "#e2007a",
      "categorie": "Contrôle d'accès – carte relais",
      "modeles": "Carte relais 12-0110 · associée aux centrales 03-0102 / 02-0102 et au module 17-0102 · module Mini HF GPRS 17-0199 (même notice V233-0006-BB)",
      "source": "Notice Intratone « Carte relais / module de transmission GPRS Mini HF » V233-0006-BB, pages 1 à 7 (multilingue)",
      "resume": "Carte relais déportée sur le bus DATA, un relais par porte supplémentaire (portes 2, 3 et 4 de la centrale). Réglages par deux potentiomètres (retard et durée de déverrouillage) et deux switches pour le numéro de porte.",
      "specs": [
        [
          "Alimentation",
          "12–24 V DC (ES1), moins de 100 W (PS2)"
        ],
        [
          "Câblage",
          "Ø 5/10e : 100 m maxi · Ø 8/10e : 200 m maxi (schéma de la notice)"
        ],
        [
          "Température / humidité",
          "−20 à +60 °C · 70 % d'humidité relative maxi"
        ],
        [
          "Montage",
          "Respecter le sens Haut / Bas ; relier le point repéré à la terre (pas pour la sécurité) sans fil vert / jaune"
        ]
      ],
      "raccordement": [
        {
          "n": "Carte relais",
          "label": "+ · − · D+ · D− · BP · terre · C · NC · NO",
          "desc": "Alimentation et bus DATA repris depuis la centrale 03-0102 ou le module 17-0102, bouton poussoir BP, relais C / NC / NO."
        },
        {
          "n": "Numéro de porte",
          "label": "Switch 1 / Switch 2",
          "desc": "Porte 2 : S1 ON, S2 OFF · porte 3 : S1 OFF, S2 ON · porte 4 : S1 ON, S2 ON · porte 1 : S1 OFF, S2 OFF (centrale)."
        },
        {
          "n": "Alertes",
          "label": "Contacts Alt / GND",
          "desc": "La notice renvoie à « gérer les alertes » sur le site Intratone."
        },
        {
          "n": "Ventouse / gâche",
          "label": "Relais C / NC / NO",
          "desc": "Obligation de sécurité : l'accès doit pouvoir s'ouvrir de l'intérieur en cas de coupure de courant (barre anti-panique, bouton poussoir à alimentation secourue, ou tout système de sortie d'urgence)."
        }
      ],
      "installation": [
        "Câbler la carte sur le bus de la centrale (alimentation, D+ / D−), puis choisir le numéro de porte avec les switches S1 / S2.",
        "Régler le retard entre l'appui et l'ouverture (potentiomètre P1) et le temps d'ouverture de la porte (P2). Molettes graduées (valeurs lues sur le schéma : 0,2 · 5 · 10 · 20 · 30 · 40 · 60 s).",
        "Sur www.intratone.info, activer la carte en cochant « carte porte » 1, 2 ou 3 dans la configuration de la centrale."
      ],
      "notes": [
        "Les valeurs des potentiomètres P1 et P2 sont données uniquement sous forme de cadran sur la notice : lire l'échelle sur la carte.",
        "Les pages 3 et 4 montrent le câblage des modules 17-0102, 17-0199 et 03-0102 sous forme de schémas sans texte explicatif.",
        "Intratone (COGELEC), ZI de Maunit, 370 rue de Maunit, 85290 Mortagne-sur-Sèvre (indiqué sur la notice)."
      ]
    },
    {
      "id": "intratone-clavier-mini",
      "nom": "Clavier codé Mini 04-0107",
      "marque": "INTRATONE",
      "couleur": "#e2007a",
      "categorie": "Clavier codé (contrôle d'accès Mini HF)",
      "modeles": "Clavier codé Mini 04-0107 · module Mini HF 17-0104 (GPRS) · second clavier possible",
      "source": "Notice Intratone « Clavier codé Mini » V233-5022-BD, pages 1 à 8 (multilingue)",
      "resume": "Clavier à codes pour l'accès Mini HF d'Intratone, raccordé sur le bus (bornes 3-4) du module 17-0104. 80 codes maxi, 2 claviers maxi, sans gestion d'alerte. Test d'ouverture du relais 1 avec le code 2580 avant la première mise à jour.",
      "specs": [
        [
          "Capacité",
          "80 codes maxi · 2 claviers maxi (avec le module 17-0104 GPRS seulement)"
        ],
        [
          "Fonctions",
          "Pas de gestion d'alerte · plages horaires et accès libre"
        ],
        [
          "Température / humidité",
          "−20 à +60 °C · moins de 70 %"
        ],
        [
          "Dimensions",
          "137 × 85 × 16 mm · entraxe de fixation 80 mm × 63 mm (schéma)"
        ],
        [
          "Câble",
          "Mini Ø 5/10e, maxi Ø 1 mm, 100 m maxi"
        ]
      ],
      "raccordement": [
        {
          "n": "BUS 3 · 4",
          "label": "Liaison au module 17-0104",
          "desc": "Deux fils du bus du module Mini HF vers les bornes 3 et 4 du clavier (câble Mini Ø 5/10e, 100 m maxi)."
        }
      ],
      "installation": [
        "Câbler les bornes 3 et 4 du bus, fixer la platine arrière avec les 4 vis fournies, clipser le clavier puis le verrouiller avec la vis.",
        "Testez l'ouverture du relais 1 avec le code 2580 avant la première mise à jour (code d'usine de test).",
        "Ajouter ou remplacer un second clavier (les deux claviers sont en parallèle sur le bus 3-4) : couper puis remettre l'alimentation, puis (60 secondes maxi) saisir sur le clavier 1 la séquence A 759 426 103 B 701 ; couper puis remettre l'alimentation, puis (60 secondes maxi) saisir sur le clavier 2 la séquence A 759 426 103 B 702 (séquences lues sur le schéma de la notice).",
        "Sur www.intratone.info : aller dans la résidence, entrer dans l'accès Mini HF existant, ligne « Clavier code » cliquer « Ajouter », menu « Codes » pour créer les codes clavier, puis toujours mettre à jour la résidence."
      ],
      "notes": [
        "La séquence du second clavier n'est donnée que sous forme d'image (page 5) : vérifier sur la notice avant de la reproduire.",
        "Intratone (COGELEC), ZI de Maunit, 370 rue de Maunit, 85290 Mortagne-sur-Sèvre (indiqué sur la notice)."
      ]
    },
    {
      "id": "intratone-mini-hf",
      "nom": "Module Mini HF 17-0104",
      "marque": "INTRATONE",
      "couleur": "#e2007a",
      "categorie": "Contrôle d'accès – module de transmission Mini HF",
      "modeles": "Module de transmission Data Mini HF 17-0104 (modèle FBC0018) · clavier codé Mini 04-0107 · Monibox 17-0273 · antenne déportée 12-0114",
      "source": "Notice technique Intratone V233-6049-AA « Module de transmission Data Mini HF », pages françaises 3 à 11",
      "resume": "Module GPRS / 4G à deux relais (télécommandes 1 et 2), pour accès Mini HF : reçoit les télécommandes en UHF 868,2 MHz et gère le clavier Mini. Alimenté en 12 V AC/DC (1 A mini) ou 24 V AC/DC (0,5 A mini). Réserve d'énergie pour envoyer une alerte en cas de coupure (numéros de série > 2117).",
      "specs": [
        [
          "Alimentation",
          "12 V AC/DC 1 A mini ou 24 V AC/DC 0,5 A mini (ES1, < 100 W PS2)"
        ],
        [
          "Consommation",
          "2 W mini (module seul), 5 W maxi"
        ],
        [
          "Fréquences",
          "GSM900, DCS1800, 4G (I, III, VII, VIII, XX) · UHF 868,2 MHz"
        ],
        [
          "Température / protection",
          "−10 à +55 °C (fonctionnement et stockage) · IP54 · IK07"
        ],
        [
          "Switch impulsion",
          "Deux positions : impulsion de 0,2 s ou temporisation de 5 s (sortie relais)"
        ]
      ],
      "raccordement": [
        {
          "n": "ALIM / PS",
          "label": "~+ · ~−",
          "desc": "Alimentation 12 V AC/DC (1 A mini) ou 24 V AC/DC (0,5 A mini)."
        },
        {
          "n": "BUS 3 · 4",
          "label": "Clavier",
          "desc": "Vers le clavier codé Mini 04-0107 ou Monibox 17-0273."
        },
        {
          "n": "RELAIS 1 · RELAIS 2",
          "label": "C · T",
          "desc": "Sorties relais de la télécommande 1 et 2. Il faut ajouter un relais pour piloter une gâche ou une ventouse (varistance sur la gâche ou la ventouse)."
        },
        {
          "n": "ANT",
          "label": "Antenne",
          "desc": "Option A = antenne interne ; option B = antenne déportée 12-0114 (switch antenne, connecteur antenne déportée)."
        },
        {
          "n": "Implantation",
          "label": "Extérieur",
          "desc": "Module à l'extérieur, jamais à l'intérieur."
        }
      ],
      "installation": [
        "Fixer le module (2 vis fournies, visserie fournie uniquement), le placer à l'extérieur en hauteur de préférence, dans une zone à accès limité au personnel qualifié.",
        "Câbler l'alimentation, le bus 3-4 et les relais ; vérifier la réception réseau (5 LED au démarrage ; LED 5 clignote pendant la recherche ; LED 1 donne le type de réseau ; le nombre de LED allumées donne le niveau de signal).",
        "Mode test : composer 2580 sur le clavier puis appuyer sur le bouton 1 et / ou 2 de la télécommande pour ouvrir les accès. Après la première mise à jour, le mode test s'arrête : seules les télécommandes autorisées sur intratone.info ouvrent.",
        "Sur intratone.info : « créer » pour déclarer le matériel, saisir le numéro de module à 12 chiffres, nommer l'accès, « configurer la centrale » puis « configurez-moi », définir la plage d'accès libre « par défaut », puis « Mettre à jour » la résidence."
      ],
      "notes": [
        "Réserve d'énergie : le module envoie une alerte au gestionnaire ou à l'administrateur du compte en cas de coupure de courant ; concerne les numéros de série dont les 4 premiers chiffres sont supérieurs à 2117.",
        "Ne pas installer à l'extérieur en cas de températures extrêmes (Finlande, Suède, Norvège).",
        "Intratone (COGELEC), 370 rue de Maunit, 85290 Mortagne-sur-Sèvre (indiqué sur la notice)."
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

  /* Familles (déduites de la catégorie de chaque fiche) */
  const FAMILLES = [
    ["motor", "Motorisations", /motor|op[ée]rateur|moteur/i],
    ["feu", "Feux et signalisation", /feu|clignotant|gyrophare|voyant/i],
    ["secu", "Sécurités (bords sensibles, cellules)", /bord|palpeu|cellule|radio de bords|s[ée]curit/i],
    ["detect", "Détection de véhicule", /d[ée]tect|boucle/i],
    ["acces", "Contrôle d'accès et interphones", /contr[ôo]le d.acc[èe]s|clavier|interphone|lecteur de badge/i],
    ["cmd", "Commandes radio", /radiocommande|t[ée]l[ée]commande|r[ée]cepteur|transpondeur/i],
    ["verrou", "Verrouillage (électroverrous)", /verrou|serrure|g[aâ]che/i],
    ["horloge", "Horloges programmables", /horloge|programmateur/i]
  ];
  const familleOf = a => (FAMILLES.find(f => f[2].test(a.categorie)) || ["autre", "Autres"])[0];
  const familleNom = k => (FAMILLES.find(f => f[0] === k) || [0, "Autres"])[1];
  let accFam = "";
  window.setAccFam = function (k) { accFam = k; viewAccList(); };

  window.viewAccList = function () {
    setHead("Accessoires", true);
    const fams = [...new Set(ACCESSOIRES.map(familleOf))];
    if (accFam && !fams.includes(accFam)) accFam = "";
    const chips = `<div class="bchips"><button class="bchip${accFam ? "" : " on"}" aria-pressed="${!accFam}" onclick="setAccFam('')">Toutes (${ACCESSOIRES.length})</button>` +
      fams.map(k => `<button class="bchip${accFam === k ? " on" : ""}" aria-pressed="${accFam === k}" onclick="setAccFam('${k}')">${esc(familleNom(k))} (${ACCESSOIRES.filter(x => familleOf(x) === k).length})</button>`).join("") + `</div>`;
    const show = fams.filter(k => !accFam || k === accFam);
    app.innerHTML = `<p class="note"><b>Accessoires</b> : fiches issues des notices fabricant (raccordement, installation, réglages). Rubrique en construction : elle s'enrichit au fil des notices reçues.</p>${chips}` +
      show.map(k => `<h2>${esc(familleNom(k))}</h2><div class="list">${ACCESSOIRES.filter(x => familleOf(x) === k).map(rowAcc).join("")}</div>`).join("");
  };


  /* Marques d'accessoires : slug = nom normalisé ; les marques déjà présentes dans MARQUES (cartes) y sont rattachées */
  const slugM = n => norm(n).replace(/ /g, "-");
  const accOf = nom => ACCESSOIRES.filter(a => norm(a.marque) === norm(nom));
  window.accBrandsOnly = function () {
    const seen = new Set(), out = [];
    ACCESSOIRES.forEach(a => {
      const k = norm(a.marque);
      if (seen.has(k) || MARQUES.some(m => norm(m.nom) === k)) return;
      seen.add(k); out.push({ slug: slugM(a.marque), nom: a.marque, couleur: a.couleur });
    });
    return out.sort((x, y) => x.nom.localeCompare(y.nom));
  };
  window.accBrandHtml = function (nom) {
    const l = accOf(nom);
    return l.length ? `<h2>Accessoires ${esc(nom)}</h2><div class="list">${l.map(rowAcc).join("")}</div>` : "";
  };
  window.viewAccBrand = function (slug) {
    const b = ACCESSOIRES.find(a => slugM(a.marque) === slug);
    if (!b) return viewHome();
    setHead(b.marque, true);
    app.innerHTML = `<p class="note">Accessoires ${esc(b.marque)} : fiches issues des notices fabricant.</p><div class="list">${accOf(b.marque).map(rowAcc).join("")}</div>`;
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
