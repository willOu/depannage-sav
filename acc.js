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
          "desc": "Entrée bouton de demande de sortie (REX), à placer à l'intérieur des locaux. Notice simplifiée : REX1, commande du relais principal ; le fil noir (masse) sert de commun au bouton poussoir."
        },
        {
          "n": "Blanc",
          "label": "IN / MONITOR",
          "desc": "Entrée auxiliaire. La notice simplifiée l'appelle REX2 (commande du relais auxiliaire, avec un second fil noir en masse) : voir les notes."
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
        "Notice simplifiée, voyants lors de la programmation : après # deux fois, le voyant de gauche s'éteint et celui de droite devient rouge ; après le code maître, celui de droite devient vert. Touche 3 : les deux voyants verts. Touche 1 (relais 1) : voyant de gauche rouge. Touche 2 (relais 2) : voyant de gauche orange. Après le nouveau code : 3 bips et voyant de droite éteint.",
        "Contradiction à noter : la notice simplifiée nomme le fil blanc « REX2 » (commande du relais auxiliaire), alors que la notice complète le nomme « IN / MONITOR » (entrée auxiliaire). Les deux textes sont conservés, rien n'est tranché ici.",
        "Notice simplifiée, retour aux réglages d'usine : dans l'étape « 0 deux fois », les deux voyants clignotent en rouge, puis 3 bips, voyant de gauche vert et celui de droite éteint. Le code à saisir est « à 4 chiffres » (le code de programmation, 1234 pendant les 15 s).",
        "L'intégralité de la notice simplifiée (ISEASYBK_FR_S_07_18, 2 pages) est dans l'onglet Notice.",
        "Prastel France, tél. 04 42 98 06 06 (numéro indiqué sur la notice, peut avoir changé)."
      ]
      ,"notice": {
        "ref": "ISEASYBK_FR_S_07_18 · EASYBKA/R · Programmation simplifiée · Contrôle d'accès · Prastel France",
        "blocs": [
          { "h": "Page 1 · 1) Câblage — EASYBKA / EASYBKR", "l": [
            ["Câble rouge / +", "+VCC (12-24 VAC/CC)"],
            ["Câble noir / -", "Masse (12-24 VAC/CC)"],
            ["Câble violet / COM", "Commun (contact relais principal)"],
            ["Câble gris / NO", "Contact NO (contact relais principal)"],
            ["Câble marron / NC", "Contact NC (contact relais principal)"],
            ["Câble vert / REX1", "Commande du relais principal (bouton poussoir)"],
            ["Câble noir / -", "Masse (bouton poussoir, relais principal)"],
            ["Câble blanc / REX2", "Commande du relais auxiliaire (bouton poussoir)"],
            ["Câble noir / -", "Masse (bouton poussoir, relais auxiliaire)"],
            ["Câble bleu / COM", "Commun (contact relais auxiliaire)"],
            ["Câble jaune / NO", "Contact NO (contact relais auxiliaire)"],
            ["Câble orange / NC", "Contact NC (contact relais auxiliaire)"]
          ]},
          { "h": "Page 1 · 2) Programmation — codes par défaut", "l": [
            ["Code de programmation", "1234"],
            ["Code utilisateur unique (relais de verrouillage)", "2580"],
            ["Code utilisateur unique (relais auxiliaire)", "0852"]
          ]},
          { "h": "Page 2 · A) Modification du code de programmation", "p": [
            "Appuyer la touche # deux fois : « l'indicateur de gauche s'éteint et celui de droite s'allume en rouge ».",
            "Entrer le code maître : 1 2 3 4 : « l'indicateur de droite devient vert ».",
            "Appuyer sur la touche 3 : « les deux indicateurs s'allument en vert ».",
            "Entrer le nouveau code maître à 4 chiffres : « le clavier émet 3 bips sonores, l'indicateur de droite s'éteint »."
          ]},
          { "h": "Page 2 · B) Modification du code du RELAIS 1", "p": [
            "Appuyer la touche # deux fois : « l'indicateur de gauche s'éteint et celui de droite s'allume en rouge ».",
            "Entrer le code maître : 1 2 3 4 : « l'indicateur de droite devient vert ».",
            "Appuyer sur la touche 1 : « l'indicateur de gauche s'allume en rouge ».",
            "Entrer le nouveau code utilisateur unique à 4 chiffres : « le clavier émet 3 bips sonores et l'indicateur de droite s'éteint »."
          ]},
          { "h": "Page 2 · C) Modification du code du RELAIS 2", "p": [
            "Appuyer la touche # deux fois : « l'indicateur de gauche s'éteint et celui de droite s'allume en rouge ».",
            "Entrer le code maître : 1 2 3 4 : « l'indicateur de droite devient vert ».",
            "Appuyer sur la touche 2 : « l'indicateur de gauche s'allume en orange ».",
            "Entrer le nouveau code utilisateur unique à 4 chiffres : « le clavier émet 3 bips sonores et l'indicateur de droite s'éteint »."
          ]},
          { "h": "Page 2 · Retour aux paramètres d'usine par défaut", "p": [
            "Déconnecter l'alimentation.",
            "Connecter ensemble les 2 câbles vert et noir.",
            "Remise sous tension. Pendant 15 secondes le code de programmation est 1234.",
            "Appuyer deux fois sur la touche #, l'indicateur de droite s'allume en rouge.",
            "Entrer le code de programmation à 4 chiffres, l'indicateur de droite s'allume en vert.",
            "Appuyer deux fois sur la touche 0, les deux indicateurs clignotent en rouge.",
            "Entrer le code de programmation à 4 chiffres : « Le clavier émet 3 bips sonores, l'indicateur de gauche s'allume en vert et celui de droite s'éteint ».",
            "Déconnecter le câble vert."
          ]}
        ],
        "pied": "Prastel France, ZI Athélia II, 225 impasse du Serpolet, 13704 La Ciotat Cedex, tél. +33 04 42 98 06 06, www.prastel.com. Transcription fidèle, orthographe de la notice corrigée ; les pages d'origine sont ci-dessous."
      }
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
    },
    {
      "id": "afca-securis-bc-bi",
      "nom": "Barre palpeuse Sécuris BC² / BI²",
      "marque": "AFCA",
      "alias": "ABLE V2",
      "couleur": "#c7511f",
      "categorie": "Bord sensible (barre palpeuse optique PB18)",
      "modeles": "Barre palpeuse de sécurité AFCA Sécuris, profils caoutchouc BC² ou BI² sur rail aluminium, cellules IR PB18 (émettrice + réceptrice, câble 8 m), interface 1 voie",
      "source": "Notice AFCA Barre palpeuse Sécuris profil BC² et BI² (version 21-06-05), 4 p., avec déclaration de conformité du 15-03-05",
      "resume": "Barre palpeuse optique : deux cellules infrarouges NPN PB18 aux extrémités d'un profil caoutchouc ; l'écrasement du profil coupe le faisceau. Se raccorde soit par une interface 1 voie (sortie contact sec NF, réglage de sensibilité, autotest), soit directement sur les bornes cellules d'une armoire Startéco 3. La force d'impact doit être annulée en moins de 750 ms (EN 12453).",
      "specs": [
        [
          "Composition",
          "1 cellule émettrice PB18 (câble 8 m) · 1 cellule réceptrice PB18 (câble 8 m) · bouchons droit et gauche · 1 profil caoutchouc BI² ou BC² · rail support aluminium"
        ],
        [
          "Cellules PB18",
          "IR NPN protégées contre les courts-circuits · 10 à 30 Vdc · 40 mA maxi · IP 67 · faisceau ±5°"
        ],
        [
          "Distance de détection",
          "15 m (12 m dans le palpeur)"
        ],
        [
          "Température",
          "-20 °C à +50 °C"
        ],
        [
          "Interface 1 voie — alimentation",
          "24 V ac-dc"
        ],
        [
          "Interface — sortie alimentation cellules",
          "12 Vdc, 600 mA maxi"
        ],
        [
          "Interface — sortie",
          "Contact sec NF, 1 A / 48 Vcc maxi"
        ],
        [
          "Interface — entrée test",
          "Contact sec NO"
        ],
        [
          "Interface — voyants",
          "LED rouge : sous tension · LED verte : signal barre palpeuse"
        ],
        [
          "Interface — réglage",
          "Potentiomètre de sensibilité (livrée au maximum)"
        ]
      ],
      "raccordement": [
        {
          "n": "~",
          "label": "Interface — alimentation",
          "desc": "24 V ac-dc (repère ~ sur le schéma)."
        },
        {
          "n": "NC",
          "label": "Interface — sortie contact sec",
          "desc": "Contact NF vers l'entrée sécurité de l'armoire de commande. Il s'ouvre quand le profil est écrasé et pendant l'autotest."
        },
        {
          "n": "T",
          "label": "Interface — entrée test",
          "desc": "Contact sec NO venant de l'armoire de commande : doit se fermer au moins 0,2 s en début de cycle."
        },
        {
          "n": "- + S (émettrice)",
          "label": "Cellule émettrice",
          "desc": "Fil bleu (-), marron (+), noir (réglage). Le fil noir n'est pas raccordé si le réglage de sensibilité n'est pas nécessaire."
        },
        {
          "n": "- + S (réceptrice)",
          "label": "Cellule réceptrice",
          "desc": "Fil bleu (-), marron (+), noir (-) signal."
        },
        {
          "n": "Startéco 3 : 32 · 33",
          "label": "Sans interface — alimentation émettrice (TX test)",
          "desc": "0V / 12V : fils bleu (-) et marron (+) de l'émettrice. Le fil noir de l'émettrice est marqué « réglage / facultatif / MUTE » sur le schéma et n'est pas raccordé."
        },
        {
          "n": "Startéco 3 : 34 · 35 · 41",
          "label": "Sans interface — réceptrice",
          "desc": "0V (34) / 12V (35) (RX) : fils bleu (-) et marron (+) ; fil noir (signal) sur la borne SB (41), barre basse, du bornier inférieur « cellules et barres palpeuses »."
        },
        {
          "n": "Startéco 3 : 40 (SH)",
          "label": "Barre haute (active en ouverture)",
          "desc": "Raccorder le fil noir de la cellule réceptrice sur la borne 40 au lieu de 41."
        }
      ],
      "installation": [
        "Fixer le rail aluminium avec des vis autoforeuses.",
        "Détacher les parties caoutchouc « A » sur toute la longueur.",
        "Clipper un des côtés du caoutchouc sur le rail.",
        "Enfoncer les cellules à chaque extrémité du caoutchouc.",
        "Faire passer le câble de la cellule réceptrice dans la partie « C » pour le faire ressortir à l'autre extrémité. Ne pas couper le caoutchouc pour faire ressortir les câbles.",
        "Clipper l'autre côté du caoutchouc.",
        "Coller les bouchons aux deux extrémités.",
        "Réglage de sensibilité : la norme EN 12453 impose d'annuler la force d'impact en moins de 750 ms. L'interface est livrée au maximum ; si besoin, retirer la fenêtre supérieure avec un tournevis, mettre le potentiomètre au minimum (la LED signal doit s'éteindre), puis l'augmenter jusqu'à l'allumage de la LED signal, et refermer la fenêtre.",
        "Autotest : raccorder la commande de test (contact sec NO se fermant 0,2 s minimum en début de cycle). Le relais de sortie reste ouvert pendant le test et ne se referme que si le test est concluant."
      ],
      "notes": [
        "Défaut d'autotest : l'interface reste bloquée et la LED verte clignote. Pour la réinitialiser, couper son alimentation.",
        "Moins de conducteurs : on peut relier les 2 fils bleus des cellules sur une seule borne (-) de l'interface.",
        "Le schéma de raccordement direct est donné uniquement pour l'armoire Startéco 3.",
        "La déclaration de conformité (AFCA, Genas, signée le 15-03-05) cite les normes EN 13241-1, EN 12453, EN 12978, EN 60204-1 et EN 954-1."
      ]
    },
    {
      "id": "ist-bs10",
      "nom": "BS10",
      "marque": "IST",
      "couleur": "#4a5560",
      "categorie": "Bord sensible de sécurité (barre palpeuse mécanique à micro-interrupteurs)",
      "modeles": "Bord sensible BS10 — caoutchouc TPE sur profil aluminium, 2 micro-interrupteurs, pour portails coulissants et battants ; électronique de contrôle BS02-E02/E04 ou similaire",
      "source": "Notice d'installation IST MDI BS10 (Rev. 14-01), italien / français / anglais, 5 p. — fichier fourni : fyese1.pdf. La notice ne comporte pas le tableau de dépannage (g.2) qu'elle cite en page 1.",
      "resume": "Bord sensible à profil caoutchouc extrudé et aluminium, fixé sur la colonne ou la grille du portail : la déformation du caoutchouc agit sur 2 micro-interrupteurs en partie haute. Sortie en contact NC ou en contact résistif 8,2 kΩ (cavalier J1). Câble acier précontraint avec réglage de sensibilité par vis. Doit être monté à la verticale, par un installateur qualifié.",
      "specs": [
        [
          "Matériaux",
          "Extrudé souple TPE · extrudé rigide aluminium · pièces rigides nylon"
        ],
        [
          "Pré-course",
          "18 mm"
        ],
        [
          "Après-course",
          "24 mm"
        ],
        [
          "Vitesse maxi de relevé",
          "12 m/min"
        ],
        [
          "Temps de réponse",
          "> 0,15 s à 12 m/min · > 2 s à 0,6 m/min (valeurs telles qu'imprimées, avec le signe >)"
        ],
        [
          "Temps de recouvrement de la déformation",
          "< 2 s"
        ],
        [
          "Sortie",
          "J1 NC : contact NC · J1 R : contact résistif 8,2 kΩ"
        ],
        [
          "Température d'exercice",
          "-10 °C / +60 °C"
        ],
        [
          "Humidité relative à 40 °C",
          "93 %"
        ],
        [
          "Degré de protection",
          "IP54"
        ],
        [
          "Catégorie avec électronique de contrôle BS02-E02/E04 ou similaire",
          "2/3 selon EN 954-1 (valeur imprimée « 2/3 »)"
        ],
        [
          "Hauteur des trous de fixation, par longueur de bord (MBS)",
          "1000 mm : clip H1.2 = 500 · 1500 : H1.1 = 200, H1.3 = 1300 · 1700 : H1.1 = 200, H1.3 = 1500 · 2000 : H1.1 = 200, H1.2 = 1000, H1.3 = 1800 · 2500 : H1.1 = 200, H1.2 = 1250, H1.3 = 2300 · 3000 : H1.1 = 200, H1.2 = 1500, H1.3 = 2800 · 4000 : H1.1 = 200, H1.2 = 2000, H1.3 = 3800"
        ],
        [
          "Hauteur des trous des supports (H2.1 / H2.2)",
          "H2.1 = 22 mm pour toutes les longueurs · H2.2 : 1000 → 978 · 1500 → 1478 · 1700 → 1678 · 2000 → 1978 · 2500 → 2478 · 3000 → 2978 · 4000 → 3978 (tableau TAB. 1, mm)"
        ]
      ],
      "raccordement": [
        {
          "n": "J1 NC",
          "label": "Sortie contact NC",
          "desc": "Cavalier J1 sur NC : le bord délivre un contact normalement fermé vers l'électronique de contrôle."
        },
        {
          "n": "J1 R",
          "label": "Sortie contact résistif",
          "desc": "Cavalier J1 sur R : le bord délivre un contact résistif 8,2 kΩ."
        },
        {
          "n": "Bornier",
          "label": "Liens du bord",
          "desc": "Une fois le bord assemblé sur la colonne ou la grille, faire les liens selon le schéma de la notice (DIS. 2 part. 1) ; le câble entre par l'ouverture « entrée câbles » sous le bornier (DIS. 2 part. 2)."
        }
      ],
      "installation": [
        "Montage par des installateurs qualifiés. Toute modification du système ou de sa configuration non autorisée par le fabricant peut créer des situations dangereuses.",
        "Fixer le CLIP (DIS. 1 part. 1) à la colonne ou à la grille en se référant au tableau TAB. 1 (H 1.1 / H 1.2 / H 1.3).",
        "Placer la barre dans les clips et la fixer par les trous à la colonne ou à la grille (DIS. 1 part. 2), voir TAB. 1 (H 2.1 / H 2.2). Le bord doit être placé à la verticale, la carte avec les micros dans la partie supérieure.",
        "Raccorder le bord (cavalier J1 sur NC ou R) selon le schéma DIS. 2.",
        "Tension du câble et tarage : la barre est livrée avec le câble précontraint ; ajuster la barre en tournant la vis (DIS. 3 part. 1) sur le bras de la partie supérieure. Vers la droite la sensibilité augmente (+), vers la gauche elle diminue (−).",
        "Le fonctionnement optimal est obtenu lorsque l'intervention électrique se produit avec une déformation au centre de la barre d'environ 20 mm (DIS. 4).",
        "Encastrement des capuchons : placer le capuchon souple face à la plaque de support, faire glisser les extrémités libres dans leurs sièges, accrocher les deux crochets latéraux de blocage dans les fentes (DIS. 5 part. 1 et 2), appuyer légèrement jusqu'au déclic, puis fixer avec la vis fournie (DIS. 5 part. 3). Pour retirer : même opération en sens inverse, enlever la vis puis dégager le capuchon avec un outil dans les fentes en poussant les crochets vers l'intérieur.",
        "Changer la hauteur — démontage : insérer l'arrêt de rotation fourni pour bloquer le mouvement de la came (DIS. 6 part. 1) ; dévisser la goupille de verrouillage du câble venant de la partie inférieure de la barre (DIS. 6 part. 2) ; débrancher le câble du raccord jusqu'au support inférieur (DIS. 7 part. 1) ; enlever le support supérieur du profil aluminium (DIS. 7 part. 2) ; retirer complètement le caoutchouc de l'aluminium (DIS. 7 part. 3).",
        "Changer la hauteur — longueur : couper l'aluminium et le caoutchouc à la même taille pour la hauteur voulue ; le caoutchouc doit être 40 mm plus long que le profil aluminium. Exemple de la notice, MBS = 1800 mm : caoutchouc = MBS − 245 = 1555 mm ; aluminium = MBS − 285 = 1515 mm.",
        "Changer la hauteur — remontage : glisser le caoutchouc dans l'aluminium (DIS. 8), il doit déborder de 20 mm par rapport au profil (DIS. 9 part. 1) ; remonter le support supérieur (DIS. 9 part. 2) ; repasser le câble acier dans le conduit du caoutchouc (DIS. 9 part. 3) ; brancher le câble dans le raccord en le sortant par le trou oblique (DIS. 9 part. 4) ; en maintenant la tension sur le câble, serrer la goupille de verrouillage (DIS. 10 part. 2) ; retirer l'arrêt de rotation (DIS. 10 part. 1) ; refaire connexion, tension du câble et tarage, encastrement des capuchons."
      ],
      "notes": [
        "Ne pas desserrer la goupille de verrouillage qui bloque le câble de la came pendant le démontage (avertissement de la notice).",
        "Pour améliorer l'évacuation des sédiments qui peuvent se former dans le capuchon inférieur, la notice conseille de percer un trou de Ø 5 mm dans le capuchon inférieur (DIS. 5 part. 4).",
        "Pas de réinitialisation à faire après une alarme : la récupération est automatique. Si un défaut maintient le dispositif en alarme, la notice renvoie à un tableau de dépannage (g.2) qui n'est pas dans le document fourni.",
        "L'installateur doit informer l'utilisateur final des dispositifs de sécurité, de leurs caractéristiques, et que les zones d'accès aux dispositifs doivent rester libres de tout obstacle.",
        "Le texte imprimé nomme le fabricant « IST » dans l'en-tête (« IST MDI BS10 ») ; aucune adresse ni déclaration de conformité n'est jointe."
      ]
    },
    {
      "id": "jcm-rb3-868",
      "nom": "RB3 R868 / T868 (RadioBand 3)",
      "marque": "JCM Technologies",
      "couleur": "#e2711d",
      "categorie": "Transmission radio de bande de sécurité (récepteur + émetteurs 868 MHz)",
      "modeles": "Récepteur RB3 R868 / RB3 R868W et émetteurs RB3 T868 / RB3 T868W — jusqu'à 6 bandes de sécurité par récepteur (3 par relais)",
      "source": "Manuel de l'utilisateur JCM Technologies RB3 R868, RB3 T868, RB3 T868W & RB3 R868W (réf. pied de page UM_3201473_RB3S SYSTEM_FR_Rev01), 28 p., fichier UM_3201473_RB3W-SYSTEM_FR.pdf",
      "resume": "Système sans fil qui remplace le câble spiralé d'une bande de sécurité : l'émetteur fixé sur le vantail transmet par radio l'état de la bande (résistive 8,2 kΩ, optique, contact NC) au récepteur, qui ouvre ou ferme un relais vers l'armoire de commande. Le récepteur vérifie en permanence les émetteurs. Catégorie 2, PLd (EN ISO 13849-1:2015), certifié TÜV NORD.",
      "specs": [
        [
          "Fréquence",
          "Multifréquence 868 MHz auto-réglable : canal 1 : 868,700 – 869,200 MHz ; canal 2 : 868,000 – 868,600 MHz ; canal 3 : 869,400 – 869,650 MHz ; canal 4 : 869,400 – 869,650 MHz"
        ],
        [
          "Alimentation récepteur",
          "12 / 24 V ac/dc (9 – 35 Vdc, 8 – 28 Vac)"
        ],
        [
          "Alimentation émetteur",
          "2 piles 3,6 Vdc type ER14505 (AA), durée environ 2 ans (dépend du mode et du nombre de manœuvres avec les bandes optiques standard)"
        ],
        [
          "Consommation maxi",
          "Récepteur 255 mA · émetteur 12 mA"
        ],
        [
          "Mémoire du récepteur",
          "6 bandes de sécurité (3 sur le relais 1, 3 sur le relais 2)"
        ],
        [
          "Puissance rayonnée",
          "< 25 mW"
        ],
        [
          "Portée en champ libre",
          "50 m"
        ],
        [
          "Temps de réaction",
          "35 ms typique ; maximum 265 ms en cas d'interférences (SW1 = OFF)"
        ],
        [
          "Indice de protection",
          "IP65 avec presse-étoupes montés (remplacer par un bouchon les entrées de câble non utilisées)"
        ],
        [
          "Sécurité",
          "EN ISO 13849-1:2015, catégorie 2, PLd ; norme produit EN 12978:2003+A1:2009"
        ],
        [
          "Équipements compatibles",
          "RB3 T868, RB3 T868W, RB3 TGL868 et RB3 TGLA868 (avec les récepteurs RB3 R868 / R868W) ; RSEC3"
        ]
      ],
      "raccordement": [
        {
          "n": "12/24Vac/dc",
          "label": "Récepteur : alimentation",
          "desc": "Entrée d'alimentation 9-35 Vdc ou 8-28 Vac."
        },
        {
          "n": "R1 · R2",
          "label": "Récepteur : sorties relais",
          "desc": "Contact normalement fermé (CS) ou 8,2 kΩ (BS) pour chaque relais, selon l'entrée de l'armoire : entrée bande 8k2 ou entrée contact de sécurité / STOP. Repos (sans détection) : fermé, ou 8,2 kΩ ; bande active : ouvert, ou 0 Ω ; LED R1 / R2 allumée = bande activée ou débranchée."
        },
        {
          "n": "R3",
          "label": "Récepteur : sortie indicatrice",
          "desc": "Batterie faible ou élément actif selon SW3."
        },
        {
          "n": "ATEST",
          "label": "Récepteur : entrée de test",
          "desc": "Entrée 12/24 V ac/dc 5 mA pour le test du système (polarité selon SW4) et / ou l'activation de la bande (SW2). Le signal ATEST est à connecter avant chaque cycle pour respecter l'EN ISO 13849-1:2015."
        },
        {
          "n": "IN1 · IN2",
          "label": "Émetteur : entrées bandes",
          "desc": "IN1 : bande optique toujours active (OSE-S7502B, OSE-S7502), optique standard, résistive 8,2 kΩ ou contact NC. IN2 : seulement résistive 8,2 kΩ ou contact mécanique. Position des sélecteurs de l'émetteur : voir installation."
        }
      ],
      "installation": [
        "Sélecteurs du récepteur (toute modification impose de reprogrammer le système) : SW1 détecteur d'interférence : ON = état de sécurité après 7 s ; OFF = après 265 ms. SW2 : ON = bandes optiques toujours actives uniquement (OSE-S7502B et OSE-S7502, le texte écrit deux fois OSE-S7502) ; WORK = les éléments optiques s'éteignent (il faut alors désactiver ATEST pendant le mouvement de la porte). SW3 : ON = R3 indique batterie faible ; OFF = R3 comme R1 / R2 (tableau p. 5) ou « ALARME » avec contact qui se ferme quand une bande est active (texte p. 10) : la notice se contredit, non tranché. SW4 : polarité ATEST, négatif (signal fixe 12 ou 24 V que l'unité met à 0 V) ou positif (sans tension, l'unité envoie 12 ou 24 V ; position à utiliser aussi sans ATEST).",
        "Sélecteurs de l'émetteur IN1 (SW1 / SW2) : bande optique toujours active (OSE-S7502B et OSE-S7502) = OFF / OFF ; bande optique standard = ON / OFF ; bande résistive 8k2 = OFF / ON ; contact NC = ON / ON. IN2 (SW3) : contact NC = ON ; bande résistive 8k2 = OFF. La position doit correspondre au type de bande ; le SW3 n'a pas d'effet si rien n'est connecté à IN2.",
        "Mode WORK obligatoire avec des bandes optiques standard (forte consommation). Les deux modes sont possibles avec les OSE-S7502B et OSE-S7502 toujours actives : ON = universel pour toutes les armoires ; WORK = piles plus durables. Si le cycle de la porte est inférieur à 7 s, travailler uniquement en mode WORK.",
        "Ne pas transporter l'équipement avec les piles connectées. Brancher le connecteur des piles pour faire fonctionner l'émetteur.",
        "Programmation : régler d'abord tous les sélecteurs. Appuyer sur PROG du récepteur et le maintenir jusqu'au mode voulu. Le récepteur reste en programmation 60 s avant le 1er émetteur, puis 20 s de plus par émetteur suivant.",
        "Mode 1 (IN1 → R1, mémoire = 1 émetteur) : maintenir PROG du récepteur jusqu'à ce que la LED R1 s'allume, puis appuyer sur PROG de l'émetteur : un bip confirme. Sortie : attendre 10 s ou appuyer sur PROG du récepteur (2 bips).",
        "Mode 2 (IN1 → R2, mémoire = 1 émetteur) : LED R2 allumée, même suite.",
        "Mode 3 (IN1 → R1 et R2, mémoire = 2 émetteurs) : LED R1 et R2 allumées, même suite.",
        "Mode 4 (IN1 → R1 et IN2 → R2, mémoire = 2 émetteurs) : LED R1 et R2 clignotantes, même suite ; sur IN2 bande mécanique, contact ou 8k2.",
        "Contrôle : une fois câblée et programmée, R1 / R2 sont éteintes au repos, de même que IN1 / IN2 de l'émetteur. Les voyants IN1 / IN2 de l'émetteur s'éteignent 5 min après un appui sur PROG de l'émetteur (économie de pile) et se rallument par un nouvel appui.",
        "Fonction CHECK (couverture radio) : appuyer au moins 1 s sur CHECK du récepteur : voyant allumé et 4 bips. Faire une manœuvre complète : 1 bip toutes les 1,5 s ; aucun autre bip en fin de manœuvre = correct. Trois bips consécutifs = défaut ou mauvaise communication ; appuyer sur chaque bande pour trouver celle qui ne marche pas. Sortie : touche CHECK ou 5 min ; 7 bips à la sortie, voyant clignotant en continu en cas de panne. À faire en fin d'installation."
      ],
      "notes": [
        "Reset total du récepteur : maintenir PROG jusqu'à ce que R1 s'allume, garder PROG appuyé et faire un pont sur le jumper « MR » : 10 bips d'avertissement puis d'autres plus rapides = fait. Sortie : attendre 10 s ou PROG (2 bips).",
        "Sans bande programmée sur R1 / R2, le relais se met en sécurité (ouvert, LED allumée).",
        "Dépannage (tableau p. 22, les symboles de LED et de bips ne sont pas tous lisibles) : détection de la bande → vérifier que la LED IN1 / IN2 de l'émetteur passe ON à l'appui sur PROG ; récepteur avec un autre émetteur en mémoire → vérifier IN1 / IN2 de tous les RB3 T, remettre à zéro et reprogrammer ; panne de communication → fonction CHECK ; bande mal détectée (non connectée, non programmée ou sélecteur incorrect) → remettre à zéro, câbler, vérifier le sélecteur, reprogrammer l'émetteur ; batterie faible ou perte de radio (interférences) → vérifier les piles ; récepteur en mode WORK en attente d'un signal ATEST → attendre le signal de l'armoire ; mémoire pleine (indication lors de la mémorisation d'un nouvel émetteur) → remettre à zéro et reprogrammer, 6 bandes maximum (3 par relais) ; changement de mode de travail avec des émetteurs déjà mémorisés → remettre à zéro, changer SW2, reprogrammer.",
        "Piles au lithium : stocker au frais (30 °C maxi conseillé, jamais plus de 100 °C), au sec, dans leur emballage ; ne pas mélanger neuves et anciennes ; ne pas court-circuiter, démonter, percer, chauffer ni mouiller. Retirer les piles avant la mise au rebut.",
        "Contradiction dans la notice : la page 3 écrit que la fréquence de travail du récepteur n'interfère pas avec les systèmes de télécommande 868 MHz alors que le système travaille lui-même en 868 MHz.",
        "La notice couvre aussi les références RB3 R868W / T868W ; le pied de page de la notice porte la référence « RB3S SYSTEM » alors que le fichier fourni s'appelle « RB3W-SYSTEM ».",
        "Fabricant : JCM TECHNOLOGIES, S.A., C/ Costa d'en Paratge 6B, 08500 Vic (Barcelone), Espagne. Déclaration UE : directive RED 2014/53/UE, machines 2006/42/CE, RoHS 2011/65/UE."
      ]
    },
    {
      "id": "jcm-radioband",
      "nom": "RADIOBAND TBX / RU / RC-RCS",
      "marque": "JCM Technologies",
      "couleur": "#e2711d",
      "categorie": "Transmission radio de barre palpeuse (émetteur + récepteur 868,90 MHz)",
      "modeles": "Émetteur RADIOBAND/TBX, récepteurs RADIOBAND/RU (boîtier 82×190×40 mm, 2 sorties relais) et RADIOBAND/RC-RCS (module embrochable)",
      "source": "Notice JCM Technologies RADIOBAND (français, 4 p., fichier Notice_FR.pdf, sans référence ni date)",
      "resume": "Système radio pour barres palpeuses de portes de garage : l'émetteur TBX, relié à la barre palpeuse, transmet son état au récepteur RU qui commande deux relais de sortie vers l'armoire (entrée bande 8,2 kΩ ou contact de sécurité). Le récepteur vérifie toutes les 20 s que les émetteurs fonctionnent et bloque la manœuvre sinon.",
      "specs": [
        [
          "Fréquence",
          "868,90 MHz"
        ],
        [
          "Émetteur RADIOBAND/TBX",
          "3 V DC (2 × 1,5 V LR6 AA) · 12 mA · < 25 mW · -20 / +55 °C · IP65 · 85×53×36 mm · portée garantie 10 m · piles environ 2 ans · 7 min mini entre deux activations (directive R&TTE)"
        ],
        [
          "Récepteur RADIOBAND/RU",
          "Mémoire : 6 TBX (3 pour le relais 1, 3 pour le relais 2) · 2 relais de sortie · alimentation 12 / 24 Vac/dc (9-35 Vdc, 8-28 Vac) · contacts 1 A · 18 mA repos / 80 mA fonctionnement · 2 entrées autotest 0 / 12 ou 24 Vac/dc à polarité sélectionnable · IP54 (IP65 avec presse-étoupe) · 82×190×40 mm"
        ],
        [
          "Récepteur RADIOBAND/RC-RCS",
          "Mémoire 6 TBX · alimentation à brancher (connecteur dispositifs de sécurité) · 18 mA · autotest incorporé · IP20 · 50×20×17 mm"
        ],
        [
          "Conformité",
          "Directive machines selon EN-954-1, catégorie 2 ; FCC partie 15"
        ]
      ],
      "raccordement": [
        {
          "n": "B1 (TBX)",
          "label": "Émetteur : entrée barre palpeuse",
          "desc": "Connecter la barre palpeuse à la borne B1 (s'assurer que la barre est étanche). Pour un élément non résistif (contact NF), court-circuiter le jumper JP1 : application non conforme à la norme EN 12453 car la connexion de l'élément non résistif n'est pas vérifiée."
        },
        {
          "n": "1 · 2 (RU)",
          "label": "Alimentation",
          "desc": "12 ou 24 Vac/dc : borne 1 (+), borne 2 (−)."
        },
        {
          "n": "3 · 4 (RU)",
          "label": "R1 : sortie relais 1",
          "desc": "Vers l'armoire : entrée bande de sécurité (résistive 8,2 kΩ) selon le cavalier BS1 (figure 1), ou entrée contact de sécurité selon le cavalier CS1 (figure 2)."
        },
        {
          "n": "5 · 6 (RU)",
          "label": "R2 : sortie relais 2",
          "desc": "Même principe que R1, selon les cavaliers BS2 / CS2 (schéma p. 1) ; le texte p. 2 cite BS1 / CS1 pour R2 : non tranché."
        },
        {
          "n": "7 (RU)",
          "label": "AUTOTEST commun",
          "desc": "Commun (−) des entrées autotest des sécurités."
        },
        {
          "n": "8 (RU)",
          "label": "AUTOTEST relais 1",
          "desc": "Entrée autotest pour le relais 1."
        },
        {
          "n": "9 (RU)",
          "label": "AUTOTEST relais 2",
          "desc": "Entrée autotest pour le relais 2."
        }
      ],
      "installation": [
        "TBX : fixer le fond du boîtier sur le tablier de la porte, sans surfaces métalliques entre le récepteur et l'émetteur ; passer les câbles par la partie inférieure ; connecter la barre palpeuse sur B1 ; fermer le couvercle avec les vis fournies.",
        "RU : fixer le boîtier avec vis et chevilles, le plus près possible du tablier de la porte, sans surfaces métalliques entre récepteur et émetteur ; câbler l'alimentation selon le schéma, puis enregistrer les TBX.",
        "Autotest polarisé : vérifier sur l'armoire si la sortie autotest, à l'état d'attente, est à polarité négative (0 V) ou positive (12 ou 24 Vac/dc). Avec autotest : sortie 0 V au repos / 12-24 V activée = polarité positive, pont ATEST POL OFF ; sortie 12/24 V au repos / 0 V activée = négative, pont ATEST POL ON ; ATEST1 et ATEST2 connectés. Sans équipement autotest : pont OFF, ATEST1 et ATEST2 non connectés. Ne connecter que la sortie d'autotest à utiliser. Activer le signal d'autotest de l'armoire (durée maximale 3 s). Sans autotest, il n'y a pas de vérification du système en début de manœuvre : non conforme à l'EN 12453.",
        "Programmation du TBX (RU) : appuyer 1 s sur PROG du récepteur (bip, la LED B1 s'allume = relais 1) ; un nouvel appui passe au relais 2 (LED B2). Envoyer le code du TBX (appui sur son poussoir de programmation) : un bip de 0,5 s confirme. Après 10 s sans nouvel émetteur, 2 bips lents et sortie. Mémoire pleine : 7 bips rapides + 2 lents (6 TBX déjà programmés).",
        "Programmation RC-RCS : appui 1 s sur PROG ; le récepteur entre en programmation de la bande de sécurité fermeture (BSC) ; un nouvel appui passe à la bande ouverture (BSO) ; envoyer le code du TBX. Seul l'émetteur peut être programmé dans un récepteur.",
        "Remplacement d'un TBX : reset du système (effacement total) puis reprogrammation de tous les TBX de l'installation.",
        "Vérification (CHECK) : appui d'au moins 1 s sur CHECK : voyant allumé, 4 bips. Manœuvre complète : 1 bip toutes les 1,5 s. Aucun autre bip = correct ; appuyer à nouveau sur CHECK ou attendre 5 min (2 bips). Trois bips consécutifs = erreur de communication : appuyer sur les barres pour trouver celle qui ne marche pas (1 bip à l'appui = elle fonctionne, 3 bips = anomalie). Remède : changer l'orientation des antennes ou installer une antenne extérieure AED-868 ou FLAT-868. À la sortie : 7 bips et voyant clignotant en continu."
      ],
      "notes": [
        "Voyants du récepteur : LED relais 1 / 2 normalement éteintes, elles indiquent l'état de la sortie du relais ; allumée = R1 / R2 non connecté ; en programmation, allumée = canal à programmer.",
        "Couverture du signal (scintillements du voyant CHECK à l'appui sur une barre) : 1 = très faible, erreur de barre ; 2 = faible, OK ; 3 = normale, OK ; 4 = bonne, OK ; 5 = très bonne, OK.",
        "Effacement total : en mode programmation, laisser PROG appuyé et faire un pont entre les bornes « MR » pendant 3 s : 10 bips puis des bips plus rapides ; sortie après 10 s sans programmation (2 bips lents).",
        "Piles faibles du TBX : le récepteur émet 4 bips courts avec les LED B1 ou B2 toutes les 20 s ; avec plusieurs TBX, activer chaque bande et vérifier si B1 ou B2 clignote 4 fois : il faut alors remplacer les piles de ce TBX. Remplacement : retirer le couvercle, piles à l'arrière, respecter la polarité, même plage de température.",
        "Câbles d'alimentation : section maxi 3,8 mm². Installer le matériel en position verticale, fermement fixé à la structure. Un signal centré sur 868,9 MHz pourrait retarder la réaction du système.",
        "La notice indique le même temps de 7 min entre deux activations pour le TBX et pour l'autotest (« directive R&TTE »).",
        "Fabricant cité dans la notice : JCM Technologies, S.A."
      ]
    },
    {
      "id": "roger-smarty",
      "nom": "SMARTY (série)",
      "marque": "Roger",
      "couleur": "#5b4aa8",
      "categorie": "Motoréducteur battant brushless à vérin (motorisation)",
      "modeles": "SMARTY5 · SMARTY5R5 (réversible) · SMARTY7 · SMARTY7R (réversible) · SMARTY4/HS (High Speed) — centrale EDGE1",
      "source": "Notice Roger SMARTY IS131 Rev.12 (version française)",
      "resume": "Vérin électromécanique brushless basse tension (36 V) pour portail battant, usage super intensif, encodeur absolu (d'usine sur les réversibles, à ajouter sur les irréversibles). Vantaux jusqu'à 4, 5 ou 7 m selon le modèle. Se commande avec la centrale EDGE1.",
      "specs": [
        [
          "Alimentation moteur",
          "36 V~ (brushless), tous modèles"
        ],
        [
          "Type",
          "SMARTY5, SMARTY7, SMARTY4/HS : irréversibles · SMARTY5R5, SMARTY7R : réversibles (déverrouillage présent même en réversible)"
        ],
        [
          "Poids maxi du vantail",
          "SMARTY5 600 kg · SMARTY5R5 500 kg · SMARTY7 1400 kg · SMARTY7R 1000 kg · SMARTY4/HS 400 kg"
        ],
        [
          "Longueur maxi du vantail",
          "SMARTY5 / 5R5 : 5 m · SMARTY7 / 7R : 7 m · SMARTY4/HS : 4 m"
        ],
        [
          "Puissance nominale",
          "200 W"
        ],
        [
          "Poussée",
          "SMARTY5 600 – 7000 N · 5R5 600 – 6500 N · 7 600 – 7000 N · 7R 600 – 6500 N · 4/HS 600 – 4500 N"
        ],
        [
          "Vitesse / temps d'ouverture",
          "SMARTY5 1,6 – 1 cm/s, 25 – 40 s · 5R5 1,8 – 1,2 cm/s, 20 – 40 s · 7 et 7R 1,6 – 1 cm/s, 35 – 50 s · 4/HS 2 – 1 cm/s, 15 – 25 s"
        ],
        [
          "Course",
          "SMARTY5, 5R5 et 4/HS : max 370 · SMARTY7 et 7R : max 520 (unité non précisée dans le tableau)"
        ],
        [
          "Usage",
          "Intensif, 1000 cycles par jour (24 h sans arrêt)"
        ],
        [
          "Protection, température",
          "IP44 · −20 °C à +55 °C"
        ],
        [
          "Poids de l'opérateur",
          "SMARTY5 11,7 kg · 5R5 11,7 kg · 7 12,2 kg · 7R 13,2 kg · 4/HS 11,7 kg"
        ]
      ],
      "raccordement": [
        {
          "n": "X · Y · Z",
          "label": "Moteur → centrale EDGE1",
          "desc": "Câble 3 × 2,5 mm² (jusqu'à 10 m) ou 3 × 4 mm² (jusqu'à 30 m). Bornier X, Y, Z dans le moteur. Le raccordement à la terre N'EST PAS nécessaire pour le SMARTY."
        },
        {
          "n": "Encodeur",
          "label": "Encodeur absolu",
          "desc": "Réversibles (5R5, 7R) : installé en usine. Irréversibles : fixer l'encodeur sur le moteur, passer et bloquer son câble, le brancher en parallèle aux phases du moteur, puis l'activer au paramètre 71 01 et refaire l'apprentissage de la course."
        },
        {
          "n": "EDGE1",
          "label": "Alimentation de la centrale",
          "desc": "H07RN-F 2 × 1,5 mm² (installation type de la notice). Interrupteur omnipolaire (ouverture des contacts ≥ 3 mm) et différentiel 0,03 A en amont."
        },
        {
          "n": "Accessoires",
          "label": "Câbles conseillés (installation type)",
          "desc": "Photocellules F4ES / F4S : TX 3 × 0,5 mm², RX 5 × 0,5 mm² (20 m max) · clignotant FIFTHY/24 2 × 1 mm² (10 m max) · antenne 50 Ω RG58 (10 m max) · sélecteur R85/60 3 × 0,5 mm² (20 m max) · clavier H85/TTD – H85/TDS 2 × 0,5 mm² (30 m max)."
        }
      ],
      "installation": [
        "Contrôles : portail robuste, gonds graissés, mouvement fluide et régulier sur toute la course. Butées mécaniques du portail en ouverture et en fermeture obligatoires.",
        "Étrier arrière : le placer sur le pilier selon le modèle, la place disponible et l'angle d'ouverture voulu, en respectant les cotes du tableau de la notice (onglet Schéma). [A] et [B] doivent rester compatibles avec la course utile du piston ; si [A] + [B] dépasse la course maxi, raccourcir l'étrier arrière (réduire [B]).",
        "Pour un mouvement régulier, [A] et [B] doivent dépasser la cote [G] d'au moins 20 à 30 mm ([G] calculée pour un vantail de 60 mm d'épaisseur).",
        "Piliers en maçonnerie : étriers adaptés avec chevilles et vis ; piliers en fer : souder l'étrier. Le piston se monte à droite comme à gauche, sa pointe converge vers le vantail ; vérifier en ouvrant à la main qu'il ne heurte ni le vantail ni le pilier.",
        "Portail fermé : placer l'étrier avant en respectant les cotes [D] et [E] et le fixer à niveau sur le vantail.",
        "Fixer le piston aux deux étriers en graissant les points de rotation ; manœuvrer à la main et vérifier une course régulière sans frottement.",
        "Arrêts mécaniques internes (sécurité supplémentaire aux butées du portail) : retirer le bouchon [A] et le couvercle [B] de la vis de traction ; portail en ouverture maxi, régler le fermoir d'ouverture [C] ; même opération en fermeture avec [D]. Livrés desserrés : même non utilisés, ils doivent toujours être serrés (voir la notice).",
        "Raccorder le moteur à l'EDGE1 (bornes X, Y, Z) puis faire les réglages et l'essai selon le manuel de l'EDGE1 (onglet de la carte EDGE1)."
      ],
      "notes": [
        "Déblocage manuel (sans tension secteur, batteries débranchées, moteur arrêté) : tourner la trappe cache-serrure, introduire la clé et la tourner de 90° dans le sens horaire, ouvrir entièrement la trappe de déblocage, déplacer les vantaux à la main. Pour rebloquer : abaisser la trappe avec la clé introduite (attention aux doigts), tourner la clé de 90° en sens inverse, la retirer et refermer la trappe.",
        "Garder la poignée de déblocage fermée hors besoin : ouverte longtemps, elle laisse entrer eau, insectes et saletés.",
        "Entretien (au moins tous les 6 mois, sans tension ni batteries, portail déverrouillé) : état et oxydation des pièces, serrage des vis, nettoyage et graissage des axes, charnières et vis d'entraînement, glissement régulier, déverrouillage, sécurités, détection d'obstacles, forces conformes à l'EN 12445.",
        "Sécurité : la notice recommande une serrure électrique au-delà de 2,5 m de vantail normal, 2 m de vantail plein ou 2 m de hauteur, et indique qu'en zone de fortes rafales de vent les limites d'utilisation peuvent être réduites (abaques poids / longueur de la notice, onglet Schéma).",
        "Étiquette : IN = numéro progressif dans l'année ; BC = année (2 premiers chiffres) et semaine (2 derniers) de fabrication.",
        "Photocellules : le tableau de l'installation type indique TX 3 × 0,5 mm² et RX 5 × 0,5 mm², mais le schéma de la même page porte « 5x0.5-TX » et « 3x0.5-RX » ; la fiche de la centrale B70/1DC indique RX 4 × 0,5 mm² et TX 2 × 0,5 mm². Valeurs reprises sans être tranchées."
      ]
    },
    {
      "id": "roger-be20",
      "nom": "BE20 (série)",
      "marque": "Roger",
      "couleur": "#5b4aa8",
      "categorie": "Motoréducteur battant brushless à vérin (motorisation)",
      "modeles": "BE20/200 (centrale B70/2ML) · BE20/210/HS, High Speed (EDGE1) · BE20/400 (EDGE1), selon le tableau technique ; la page Raccordements cite « B70/2ML ou EDGE1 »",
      "source": "Notice Roger BE20 IS121 Rev.15 (version française)",
      "resume": "Vérin électromécanique brushless basse tension, irréversible, avec encodeur natif, usage super intensif, pour portail battant. Vantaux jusqu'à 2,8 m (BE20/200), 2,5 m (BE20/210/HS) ou 4 m (BE20/400). Centrale B70/2ML pour le BE20/200, EDGE1 pour les deux autres (tableau technique).",
      "specs": [
        [
          "Alimentation moteur",
          "BE20/200 : 24 V~ · BE20/210/HS : 36 V~ · BE20/400 : 36 V~"
        ],
        [
          "Type",
          "Irréversible, encodeur natif à bord"
        ],
        [
          "Poids maxi du vantail",
          "BE20/200 300 kg · BE20/210/HS 300 kg · BE20/400 400 kg"
        ],
        [
          "Longueur maxi du vantail",
          "BE20/200 2,8 m · BE20/210/HS 2,5 m · BE20/400 4 m"
        ],
        [
          "Puissance nominale",
          "200 W"
        ],
        [
          "Poussée",
          "BE20/200 et 210/HS : 100 – 2200 N · BE20/400 : 100 – 2800 N"
        ],
        [
          "Vitesse / temps d'ouverture",
          "BE20/200 1 – 1,66 cm/s, 15 – 25 s · 210/HS 3 cm/s, 10 – 15 s · 400 1 – 1,66 cm/s, 17 – 26 s"
        ],
        [
          "Course (arrêts mécaniques intégrés)",
          "BE20/200 et 210/HS : 400 mm · BE20/400 : 550 mm"
        ],
        [
          "Usage",
          "Intensif (au couple nominal) · 1000 cycles par jour (200, 210/HS), 800 (400)"
        ],
        [
          "Protection, température",
          "IP44 · −20 °C à +55 °C"
        ],
        [
          "Poids de l'opérateur",
          "5,5 kg (200, 210/HS) · 6,2 kg (400)"
        ]
      ],
      "raccordement": [
        {
          "n": "X · Y · Z",
          "label": "Moteur → centrale",
          "desc": "Câble 3 × 2,5 mm² (jusqu'à 10 m) ou 3 × 4 mm² (jusqu'à 30 m) vers la B70/2ML ou l'EDGE1. Le raccordement à la terre N'EST PAS nécessaire."
        },
        {
          "n": "Centrale",
          "label": "Alimentation",
          "desc": "H07RN-F 2 × 1,5 mm² (installation type de la notice)."
        },
        {
          "n": "Accessoires",
          "label": "Câbles conseillés (installation type)",
          "desc": "Photocellules F4ES / F4S : TX 3 × 0,5 mm², RX 5 × 0,5 mm² (20 m max) · clignotant FIFTHY/24 2 × 1 mm² (10 m max) · antenne RG58 (10 m max) · sélecteur R85/60 3 × 0,5 mm² (20 m max) · clavier H85/TTD – H85/TDS 2 × 0,5 mm² (30 m max)."
        }
      ],
      "installation": [
        "Contrôles : portail robuste, gonds graissés, mouvement fluide sur toute la course ; butées mécaniques du portail en ouverture et en fermeture obligatoires.",
        "Étrier arrière sur le pilier selon le modèle et l'angle voulu, cotes du tableau de la notice (calculées pour un vantail de 40 mm d'épaisseur). [A] et [B] compatibles avec la course utile du piston ; si [A] + [B] dépasse la course maxi, raccourcir l'étrier arrière (réduire [B]).",
        "Maçonnerie : étriers et chevilles adaptés ; fer : souder l'étrier. Le piston se monte à droite ou à gauche, pointe vers le vantail.",
        "Portail fermé : étrier avant aux cotes [D] et [E], fixé à niveau sur le vantail. Fixer le piston aux étriers en graissant les points de rotation et vérifier à la main une course sans frottement.",
        "Arrêts mécaniques internes : retirer le bouchon [A], dévisser les vis [B], retirer le couvercle [C] ; régler le fermoir d'ouverture [D] portail ouvert au maxi, puis celui de fermeture [E]. Livrés desserrés : ils doivent toujours être serrés.",
        "Raccordement et essai : voir le manuel de la B70/2ML ou de l'EDGE1 (onglets des cartes)."
      ],
      "notes": [
        "Longueur maxi BE20/200 : 2,8 m dans cette notice (et sur le site Roger) ; la notice de la centrale B70/2ML indique « vantaux jusqu'à 3 m ». Les deux valeurs sont reprises sans être tranchées.",
        "Déblocage manuel (sans tension, batteries débranchées, moteur arrêté) : trappe cache-serrure, clé 90° sens horaire, ouvrir entièrement la trappe de déblocage, déplacer les vantaux. Rebloquer : abaisser la trappe avec la clé (attention aux doigts), clé 90° sens inverse, retirer, refermer.",
        "Entretien : structure et fixations, oxydation, serrage des vis, graissage des axes et gonds, mouvement régulier, sécurités, détection d'obstacles, forces conformes à l'EN 12445.",
        "Abaques poids / longueur des trois modèles : onglet Schéma (page « Dimensions et diagramme d'utilisation »). Le tableau technique nomme le modèle rapide « BE20/210/HS » et l'abaque « BE20/200/HS » : les deux noms sont repris tels quels."
      ]
    },
    {
      "id": "roger-bh30",
      "nom": "BH30 (série)",
      "marque": "Roger",
      "couleur": "#5b4aa8",
      "categorie": "Motoréducteur coulissant brushless (motorisation)",
      "modeles": "BH30/803 · BH30/804 · BH30/803/115 · BH30/603/HS · BH30/604/HS · BH30/603/HS/115 · BH30/804/R (réversible) — centrale B70/1DC ; base de fixation KT214",
      "source": "Notice Roger BH30 IS118 Rev.17 (version française) ; base de fixation KT214 : notice IS151 Rev.01",
      "resume": "Motoréducteur brushless basse tension pour portail coulissant, encodeur natif, centrale numérique à bord (B70/1DC). Vantail jusqu'à 1000 kg (803/804), 600 kg (603/604 HS) ou 800 kg (804/R réversible), course jusqu'à 20 m.",
      "specs": [
        [
          "Alimentation réseau",
          "230 V~ 50/60 Hz ; versions /115 : 115 V~ 50/60 Hz ; BH30/804/R : 230 V~"
        ],
        [
          "Tension fournie au moteur",
          "24 V~, fréquence variable (commande FOC avec encodeur haute résolution)"
        ],
        [
          "Type",
          "803 / 804 / 603/HS / 604/HS : irréversibles · 804/R : réversible"
        ],
        [
          "Poids maxi du vantail",
          "803 / 804 : 1000 kg · 603/HS / 604/HS : 600 kg · 804/R : 800 kg"
        ],
        [
          "Longueur de course maxi",
          "20 m"
        ],
        [
          "Puissance absorbée nominale / démarrage",
          "110 / 340 W (803-804) · 100 / 310 W (HS) · 105 / 315 W (804/R)"
        ],
        [
          "Force",
          "Démarrage 880 / 400 / 610 N · maxi (S3 40 %) 420 / 170 / 270 N · nominale (S1 100 %) 190 / 210 / 135 N (803-804 / HS / 804/R)"
        ],
        [
          "Vitesse de coulissement",
          "7,4 – 12 m/min (803-804) · 10 – 25 m/min (HS) · 7,4 – 18 m/min (804/R)"
        ],
        [
          "Consommation en veille",
          "≤ 0,5 W"
        ],
        [
          "Usage",
          "Intensif (à la force nominale) · 300 000 cycles testés en interne (essai sur portail de 5 m à 20 °C, ce n'est pas la valeur maxi)"
        ],
        [
          "Protection, température",
          "IP44 · −20 °C à +55 °C"
        ],
        [
          "Poids de l'opérateur, déblocage",
          "803 : 12,3 kg · 804 : 12,5 kg · 603/HS : 12,1 kg · 604/HS : 12,6 kg · 804/R : 12,6 kg · force à appliquer au déblocage : 130 N"
        ]
      ],
      "raccordement": [
        {
          "n": "L · N · ⏚",
          "label": "Alimentation secteur",
          "desc": "Câble H07RN-F 3G1,5 mm² : L (marron), N (bleu), terre (jaune / vert). Dégainer seulement au niveau de la borne et bloquer avec le serre-câble. Interrupteur omnipolaire (≥ 3 mm) et différentiel 0,03 A en amont."
        },
        {
          "n": "Tension",
          "label": "Contrôle au voltmètre",
          "desc": "La tension secteur doit être de 230 V~ (115 V~) ± 10 % ; sinon l'automatisme ne peut pas fonctionner correctement."
        },
        {
          "n": "Séparation",
          "label": "Câblage",
          "desc": "Secteur 230 V~ et accessoires 24 V (SELV) sur des parcours séparés ; câbles à double isolement ; passer les câbles par le passe-câble fourni (eau, humidité, insectes)."
        },
        {
          "n": "Accessoires",
          "label": "Câbles conseillés (installation type)",
          "desc": "Photocellules F4ES / F4S : TX 3 × 0,5 mm², RX 5 × 0,5 mm² (20 m max) · clignotant FIFTHY/24 2 × 1 mm² (10 m max) · antenne RG58 (10 m max) · R85/60 3 × 0,5 mm² (20 m max) · H85/TTD – H85/TDS 2 × 0,5 mm² (30 m max) · bord sensible · récepteur radio CS/RX. Raccordements et essai : manuel de la B70/1DC."
        }
      ],
      "installation": [
        "Contrôles : structure solide, vantail stable (pas de déraillement ni de chute latérale), rail fixé au sol sans irrégularités, roues en bon état et graissées ; moteur déverrouillé, le portail ne doit pas bouger seul quelle que soit sa position.",
        "Plaque de fondation : plateforme béton avec plaque noyée, à niveau et propre, aux cotes de la figure ; respecter les cotes entre plaque [B] et crémaillère [A]. Visser les 4 écrous 10MA sur les tirants, les passer dans la plaque et les bloquer. Gaines électriques par le trou de droite (vue face interne). Base de fixation KT214 : 320 × 174 mm, entraxe 85 / 150 / 85 mm (onglet Schéma).",
        "Motoréducteur : retirer le couvercle (vis puis tirer vers le haut), vérifier que les 6 pieds de réglage ne dépassent pas ; joints O-Ring sur les vis M10 × 40 dans les angles, écrous M10 ; poser le BH30 sur les 4 tirants, régler horizontalement (glissement sur la plaque) et verticalement (6 pieds) en tenant compte de la crémaillère ; remettre le couvercle.",
        "Crémaillère module 4 : moteur débloqué, portail ouvert, poser la crémaillère sur le pignon et la fixer sur toute la longueur en faisant coulisser le portail ; vérifier à la main un coulissement sans frottement, puis rebloquer le moteur.",
        "Fins de course : portail en ouverture complète puis en fermeture complète, fixer les brides sur la crémaillère. Mécaniques : R = droit, L = gauche. Magnétiques : flèches vers le centre de la crémaillère ; l'aimant se règle de 8 mm maxi ; 10 mm au maximum entre aimant et brides de fin de course.",
        "Après quelques manœuvres, ajuster les brides pour que le portail s'arrête 40 à 80 mm avant la butée mécanique (variable selon poids, frottements, centrale, météo). Ne jamais laisser le portail aller en butée.",
        "Raccordements et apprentissage : voir la fiche de la carte B70/1DC."
      ],
      "notes": [
        "Déblocage manuel (sans tension secteur, batteries débranchées, moteur arrêté) : trappe cache-serrure, clé 90° sens horaire, ouvrir entièrement la trappe de déblocage, déplacer le vantail. Rebloquer : abaisser la trappe avec la clé (attention aux doigts), clé 90° sens inverse, retirer, refermer.",
        "Deux portails coulissants opposés : voir la fiche « MASTER / SLAVE (B70/1DC, B70/1DCHP) ».",
        "Versions 115 V : l'en-tête du tableau technique indique « BH30/803/115 » et « BH30/603/HS/115 », la note (*) du même tableau « BH30/803/HS/115 – BH30/603/HS/115 ». Repris tels quels.",
        "Déblocage : la version française est suivie ici ; la version italienne décrit la rotation de la clé autrement (refermer la trappe en tournant la clé de 90° dans le sens horaire, puis antihoraire). À vérifier sur l'appareil.",
        "Étiquette : IN = numéro progressif dans l'année ; BC = année (2 premiers chiffres) et semaine (2 derniers) de fabrication.",
        "Photocellules : cette notice indique TX 3 × 0,5 mm² et RX 5 × 0,5 mm² ; la fiche de la centrale B70/1DC indique RX 4 × 0,5 mm² et TX 2 × 0,5 mm². Les deux valeurs sont reprises sans être tranchées."
      ]
    },
    {
      "id": "roger-master-slave",
      "nom": "MASTER / SLAVE (B70/1DC, B70/1DCHP)",
      "marque": "Roger",
      "couleur": "#5b4aa8",
      "categorie": "Mode MASTER / SLAVE : deux portails coulissants opposés (liaison RS485)",
      "modeles": "Centrales B70/1DC (BH30, BM30) et B70/1DCHP (BG30) à partir du firmware P3.00 ; gestion n7 = 13",
      "source": "Notice Roger MASTER/SLAVE IS305 Rev.00 (19/03/2026), version française",
      "resume": "Pour deux portails coulissants opposés, chacun avec sa centrale : commandes et sécurités centralisées sur la MASTER (un seul récepteur radio, embroché sur la MASTER), réglages et apprentissage des deux centrales depuis la MASTER (mode PARTAGE À DISTANCE). Liaison RS485 COM · LNA · LNB entre les deux centrales.",
      "specs": [
        [
          "Centrales compatibles",
          "B70/1DC (BH30, BM30) et B70/1DCHP (BG30), firmware P3.00 ou plus. En P2.30 / P2.35 : mise à jour par B74/BCONNECT, puis vérifier L0 = 01 et L1 = 00."
        ],
        [
          "Paramètres à contrôler",
          "60, 88 et 89 sur 00 ; A0 selon le rôle (ci-dessous)"
        ],
        [
          "A0 (liaison RS485)",
          "00 fonctionnement seul · 01 MASTER · 02 SLAVE avec copie des paramètres de la MASTER · 03 SLAVE avec paramètres indépendants"
        ],
        [
          "Appairage",
          "Même série (ex. BG30 + BG30, même de modèles différents) ou séries différentes (ex. BG30 + BH30) si firmwares identiques ou compatibles ; entre séries différentes : SLAVE obligatoirement en A0 = 03, réglages faits sur la SLAVE, pas de modification de paramètres ni d'INFO en partage à distance"
        ],
        [
          "88 (activation cyclique, tests)",
          "00 désactivée · 01 – 90 : commande d'ouverture toutes les 1 à 90 s (après un cycle complet) · 91 – 99 : toutes les 1 à 9 min. Régler la fermeture automatique (A2 et 21)."
        ],
        [
          "89 (B74/BCONNECT)",
          "00 désactivé · 01 : sur la MASTER, affichage / modification des paramètres SLAVE et sauvegarde des paramètres SLAVE dans le B-CONNECT. Remettre 89 = 00 ensuite."
        ]
      ],
      "raccordement": [
        {
          "n": "COM · LNA · LNB",
          "label": "Liaison RS485",
          "desc": "Relier COM, LNA et LNB de la MASTER à COM, LNA et LNB de la SLAVE (schéma de la notice, onglet Schéma)."
        },
        {
          "n": "Commandes",
          "label": "Sur la MASTER seulement",
          "desc": "PED, PP, CH, AP, ORO et le récepteur radio embrochable : uniquement sur la MASTER (bornes barrées sur la SLAVE dans le schéma de la notice). La commande PED n'actionne que la MASTER (selon le paramètre 15)."
        },
        {
          "n": "ST",
          "label": "STOP",
          "desc": "Un STOP sur chaque centrale : celui de la MASTER bloque les deux automatismes, celui de la SLAVE ne bloque que la SLAVE."
        },
        {
          "n": "FT1 / FT2",
          "label": "Photocellules",
          "desc": "Photocellules du passage : sur la MASTER. Celles du côté aveugle de la SLAVE peuvent aller sur la SLAVE (activées par ses paramètres 50 à 52) ; dans ce cas, brancher aussi celles du côté aveugle de la MASTER sur la même entrée (FT1 ou FT2) de la MASTER."
        },
        {
          "n": "Sur la SLAVE",
          "label": "Raccordés localement",
          "desc": "Le clignotant de l'automatisme SLAVE et ses bords sensibles."
        }
      ],
      "installation": [
        "Mettre les deux centrales au firmware P3.00 ou plus ; régler 60, 88 et 89 sur 00 ; A0 = 01 sur la MASTER, A0 = 02 (copie) ou 03 (indépendante) sur la SLAVE.",
        "Avec A0 = 02, chaque réglage de la MASTER est recopié sur la SLAVE, sauf A0, les paramètres 50 à 55 (photocellules SLAVE désactivées) et 71 (mis à l'opposé de la MASTER). Ces paramètres restent réglables sur la SLAVE : 11, 12, 20, 30, 31, 33, 34, 40, 41, 42, 50 à 55, 71, 73, 74. Conseil de la notice : après la première installation, passer la SLAVE en A0 = 03 pour éviter les recopies par erreur.",
        "PARTAGE À DISTANCE : sur la MASTER, appuyer brièvement sur ▲ et ▼ ensemble, « SLAV » s'affiche 2 s ; le nom du paramètre clignote et les valeurs modifiées sont enregistrées sur la SLAVE. Même appui pour revenir (« MAST »). Désactivation automatique après 5 min sans modification.",
        "Apprentissage de la SLAVE (séparé de celui de la MASTER) depuis la MASTER : SLAVE en fermeture complète, activer le partage (« SLAV »), maintenir PROG 4 s sur la MASTER.",
        "Automatismes avec fin de course, SLAVE pas complètement fermée (fin de course de fermeture non atteint) : rAPL sur la MASTER, APP.L sur la SLAVE. Fermée : rAPP (MASTER) / APP- (SLAVE).",
        "Actionner le déverrouillage de la SLAVE : rPHA / PHAS. Échec : rnoP / noPh. Réussite : l'écran clignote vite, refermer la poignée de la SLAVE et tourner la clé, l'ouverture démarre (rA t / A to), puis la fermeture.",
        "Fin réussie : rdon sur la MASTER, la SLAVE revient à l'état des entrées. Échec : rAPE, rAPL, rAP ou rAPS (MASTER) / APP.E, APP.L, APP. ou APP.S (SLAVE). En cas de blocage, sortir par TEST ou STOP et recommencer au début."
      ],
      "codes": [
        [
          "SrcH",
          "Mise sous tension : la MASTER cherche la SLAVE sur la ligne RS485 (environ 2 s), en alternance avec COM1 jusqu'à la connexion. Avec A0 = 02 sur la SLAVE, la MASTER lui envoie alors ses paramètres."
        ],
        [
          "COM1",
          "Pas de communication MASTER / SLAVE : automatismes arrêtés en STOP ; si la coupure ne dure que quelques secondes, ils repartent seuls au retour de la communication."
        ],
        [
          "COM2",
          "A0 mal réglé : la centrale est en MASTER alors que l'autre l'est déjà. Affiché 5 s, puis A0 est forcé à 00 (mode désactivé) : régler A0 à 02 ou 03."
        ],
        [
          "COM3",
          "Firmwares différents : le partage à distance n'est pas utilisable (mettre les deux à la même version) ; la commande centralisée du mouvement et des sécurités reste active."
        ],
        [
          "nC",
          "TEST : pas de communication RS485 entre les deux centrales."
        ],
        [
          "Point décimal",
          "2e chiffre en partant de la gauche allumé (affichage commandes / sécurités) : communication présente. Éteint avec celui de ST : communication absente (STOP forcé)."
        ],
        [
          "StA · rStA",
          "INFO : état de la centrale MASTER / SLAVE (assistance technique, affiché sur la MASTER)."
        ],
        [
          "ErrL · ErrC",
          "INFO : nombre d'interruptions / d'erreurs de communication RS485 (câblage critique, trop long ou près de câbles de puissance). Remis à zéro à la mise sous tension ou par ▼ pendant l'affichage."
        ]
      ],
      "notes": [
        "Comportement : une sécurité de la MASTER agit aussi sur la SLAVE ; une sécurité de la SLAVE (si activée) agit aussi sur la MASTER. La fermeture automatique ne démarre que lorsque les deux sont en ouverture complète. Le vantail SLAVE suit toujours la MASTER : pas de commande manuelle séparée.",
        "Déverrouillage : seul l'automatisme déverrouillé perd sa position. Déverrouiller la MASTER bloque aussi la SLAVE ; déverrouiller la SLAVE laisse la MASTER fonctionner (si aucune photocellule n'est raccordée et activée sur la SLAVE).",
        "TEST : les commandes ne s'affichent que sur la MASTER ; une sécurité en alarme raccordée à l'autre centrale s'affiche avec les points décimaux allumés.",
        "INFO et compteurs (o, o0, o1, H0, H1, d0, d1) de la SLAVE consultables sur la MASTER en partage à distance (TEST 4 s pour INFO).",
        "Mot de passe : à enregistrer sur la MASTER, il protège aussi la SLAVE.",
        "B74/BCONNECT sur la MASTER : pas de retour usine, de restauration, d'INFO, d'alarmes ni de mise à jour firmware de la SLAVE (il faut un B-CONNECT sur la SLAVE pour cela).",
        "Codes COM2 et COM3 : la fiche de la carte B70/1DC (notice IS117) les décrit autrement (« deux centrales MASTER » et « erreur de transfert des paramètres ») que cette notice IS305. Les deux versions sont reprises sans être tranchées."
      ]
    },
    {
      "id": "roger-cs",
      "nom": "Série CS (bords sensibles)",
      "marque": "Roger",
      "couleur": "#5b4aa8",
      "categorie": "Bord sensible (barres palpeuses filaires et radio, récepteur CS/RX)",
      "modeles": "CS/PAS (passif) · CS/STD/MC (mécanique, contact N.F.) · CS/STD/RS (résistif 8,2 kΩ, filaire) · CS/STD/RSTX (résistif 8,2 kΩ, radio) + récepteur CS/RX ; longueurs 1600, 2000, 2500 mm",
      "source": "Notice Roger Série CS IS310 Rev.00 (11/03/2026), version française",
      "resume": "Bords sensibles de sécurité Roger pour portes et portails automatiques : filaires (mécanique N.F. ou résistif 8,2 kΩ) ou radio (émetteur résistif à piles + récepteur CS/RX 868 MHz, jusqu'à 4 émetteurs). Raccordement sur COM – COS1 / COS2 des centrales Roger.",
      "specs": [
        [
          "Alimentation",
          "CS/STD/MC et CS/STD/RS : 24 Vdc · CS/STD/RSTX : 2 piles AA 1,5 V · CS/RX : 12 – 24 V ac/dc (SELV)"
        ],
        [
          "Contact",
          "CS/STD/MC : N.F. · CS/STD/RS : 8,2 kΩ (N.O.) (valeurs du tableau technique)"
        ],
        [
          "Radio",
          "868 MHz (RSTX et RX) · portée 12 m (colonne RSTX) · classe radio 3 et cycle d'utilisation < 1 % (colonne CS/RX)"
        ],
        [
          "CS/RX",
          "Courant maxi 150 mA · contact relais 1 A · jusqu'à 4 émetteurs CS/STD/RSTX (2 canaux COS1 / COS2)"
        ],
        [
          "Température",
          "CS/STD/RSTX : −20 °C à +55 °C · CS/RX : −10 °C à +55 °C"
        ],
        [
          "Protection",
          "CS/STD/RS et RSTX : IP65 · CS/RX : IP55"
        ],
        [
          "Dimensions",
          "Profil 61 × 37 mm, longueurs 1600, 2000, 2500 mm · CS/RX : 159 × 41,4 × 28,7 mm"
        ]
      ],
      "raccordement": [
        {
          "n": "COM · COS1 (COS2)",
          "label": "CS/STD/MC et CS/STD/RS",
          "desc": "Raccorder le bord aux bornes COM – COS1 (ou COS2) de la centrale. À la détection d'un obstacle, l'automatisme inverse la manœuvre : voir les paramètres 73 et 74 de la centrale."
        },
        {
          "n": "1 · 2 (émetteur)",
          "label": "CS/STD/RSTX",
          "desc": "Barre résistive raccordée aux bornes 1 et 2 de la carte de l'émetteur."
        },
        {
          "n": "CS/RX 1 · 2",
          "label": "Alimentation du récepteur",
          "desc": "Vers COM et 24V de la centrale Roger (12 – 24 V ac/dc SELV)."
        },
        {
          "n": "CS/RX 3 · 4",
          "label": "Sortie bord 1",
          "desc": "Vers COM et COS1 de la centrale."
        },
        {
          "n": "CS/RX 5 · 6",
          "label": "Sortie bord 2",
          "desc": "Si besoin, vers COM et COS2 de la centrale."
        }
      ],
      "installation": [
        "CS/PAS : couper le bord par le bas à la longueur voulue, surface de fixation plane et propre, fixer les brides (vis non fournies), installer le bord sur les brides.",
        "CS/STD/MC : couper le bord par le bas (400 mm maximum), fixer les brides, installer le bord en faisant attention à la sortie des câbles.",
        "CS/STD/RS et CS/STD/RSTX : ouvrir la tête supérieure et retirer la barre résistive ; couper le caoutchouc par le bas et la barre résistive (longueur L − L1) ; retirer le circuit résistif, éliminer les chutes, réassembler (attention au sens de la barre résistive) ; fixer les brides et installer le bord. RSTX : retirer la pellicule de protection des piles (n'utiliser que le type de piles indiqué).",
        "CS/RX : le fixer sur la structure de l'automatisme (vis non fournies).",
        "Appairage d'un émetteur : alimenter le CS/RX (LD3 verte allumée). Bord COS1 : appuyer sur P1 du récepteur (LD5 clignote, bip bref), puis maintenir P1 de l'émetteur : LD1 rouge s'allume puis s'éteint et LD2 verte s'allume ; relâcher : LD2 clignote, LD5 s'allume sur le récepteur avec un bip. Bord COS2 : même chose avec P2 du récepteur (LD4). Répéter pour d'autres émetteurs (4 maximum).",
        "Effacement : maintenir P1 (canal COS1) ou P2 (canal COS2) du récepteur jusqu'au bip long, un canal à la fois. Pour remplacer un émetteur, n'effacer que son canal puis refaire l'appairage.",
        "Contrôle : forces du vantail conformes aux normes EN 12453 et EN 12445 ; vérifier régulièrement la sécurité en appuyant sur le bord pendant une ouverture et une fermeture."
      ],
      "codes": [
        [
          "LD3 verte allumée",
          "Récepteur CS/RX alimenté."
        ],
        [
          "LD5 verte allumée",
          "Bord COS1 actif."
        ],
        [
          "LD4 verte allumée",
          "Bord COS2 actif."
        ],
        [
          "LD2 verte clignotante",
          "Mémorisation d'un émetteur en cours."
        ],
        [
          "LD1 rouge clignotante + buzzer intermittent",
          "Piles faibles."
        ],
        [
          "LD1 rouge allumée, LD4 et LD5 éteintes",
          "Intervention du bord sensible."
        ],
        [
          "LD1, LD4 et LD5 clignotantes",
          "Défaut de transmission."
        ]
      ],
      "notes": [
        "N'utiliser les bords CS et le récepteur CS/RX qu'avec des produits Roger Technology.",
        "Déclaration de conformité (04/05/2016) : EN 12978:2003+A1:2009 cat. 2 PL « d », EN ISO 13849-1 et 13849-2.",
        "Fin de vie : à désinstaller par un technicien qualifié ; ne pas jeter avec les déchets ménagers.",
        "Coupe de la barre résistive (RS, RSTX) : la version italienne dit « par la partie supérieure », une phrase de la version française dit « par la partie inférieure ». Repris sans être tranché : suivre le schéma (onglet Schéma)."
      ]
    },
  {
    "id": "roger-bg30",
    "nom": "BG30 (série)",
    "marque": "Roger",
    "couleur": "#5b4aa8",
    "categorie": "Motoréducteur coulissant brushless (motorisation)",
    "modeles": "BG30/1603 · BG30/1604 · BG30/2203 · BG30/2204 · BG30/1003/HS · BG30/1004/HS · BG30/1404/R (réversible) · BG30/1804/HS · BG30/1504/HS · BG30/803/HS · BG30/804/HS (+ versions /115) — centrale B70/1DCHP",
    "source": "Notice Roger BG30 IS141 Rev.19 (version française)",
    "resume": "Motoréducteur brushless basse tension (36 V) pour portail coulissant lourd, encodeur natif, centrale numérique B70/1DCHP à bord. Vantail de 800 à 2200 kg selon le modèle, course jusqu'à 25 m. Modèles en …03 : fin de course mécanique à microrupteur ; en …04 : fin de course magnétique.",
    "specs": [
      [
        "Alimentation réseau",
        "230 V~ 50/60 Hz ; 115 V~ 50/60 Hz pour les versions /115"
      ],
      [
        "Tension fournie au moteur",
        "36 V~, fréquence variable (commande FOC avec encodeur haute résolution)"
      ],
      [
        "Type",
        "Irréversibles, sauf BG30/1404/R réversible · HS = High Speed"
      ],
      [
        "Fin de course",
        "…03 (1603, 2203, 1003/HS, 803/HS) : mécanique à microrupteur · …04 (1604, 2204, 1004/HS, 1404/R, 1804/HS, 1504/HS, 804/HS) : magnétique"
      ],
      [
        "Poids maxi du vantail",
        "1603/1604 : 1600 kg · 2203/2204 : 2200 kg · 1003/1004 HS : 1000 kg · 1404/R : 1400 kg · 1804/HS : 1800 kg · 1504/HS : 1500 kg · 803/804 HS : 800 kg"
      ],
      [
        "Longueur de course maxi",
        "25 m"
      ],
      [
        "Vitesse de coulissement",
        "1603/1604 et 2203/2204 : 5,7 – 12 m/min · 1003/1004 HS : 5,7 – 20 · 1404/R : 5,7 – 17 · 1804/HS : 5,7 – 20 · 1504/HS : 5,7 – 25 · 803/804 HS : 5,7 – 30 m/min"
      ],
      [
        "Puissance absorbée nominale / démarrage",
        "1603-1604 185 / 530 W · 2203-2204 150 / 570 W · 1003-1004 HS 180 / 590 W · 1404/R 160 / 540 W · 1804/HS 150 / 600 W · 1504/HS 155 / 550 W · 803-804 HS 185 / 620 W"
      ],
      [
        "Force de démarrage",
        "1770 / 2400 / 1170 / 1150 / 1540 / 1190 / 1080 N (même ordre)"
      ],
      [
        "Force maxi (S3 40 %) / nominale (S1 100 %)",
        "650 / 340 N · 850 / 310 N · 350 / 210 N · 460 / 290 N · 440 / 210 N · 380 / 250 N · 300 / 230 N (même ordre)"
      ],
      [
        "Pignon de sortie",
        "Z17 module 4 (1603-1604, 2203-2204, 1003-1004 HS, 1404/R, 1804/HS) · Z20 module 4 (1504/HS, 803-804 HS), d'après la disposition du tableau"
      ],
      [
        "Pente maximale admissible",
        "0,5 %"
      ],
      [
        "Usage, cycles",
        "Intensif (à la force nominale) · 500 000 cycles testés en interne (portail de 5 m à 20 °C, ce n'est pas la valeur maxi)"
      ],
      [
        "Consommation en veille, protection, température",
        "≤ 0,5 W · IP44 · −20 °C à +55 °C · < 70 dB(A)"
      ],
      [
        "Poids de l'opérateur",
        "1603 13,6 · 1604 13,8 · 2203 14 · 2204 14,3 · 1003/HS 13,8 · 1004/HS 13,3 · 1404/R 14,3 · 1804/HS 14,4 · 1504/HS 14,5 · 803/HS 14,7 · 804/HS 14,2 kg"
      ],
      [
        "Déblocage",
        "Force à appliquer : 155 N"
      ]
    ],
    "raccordement": [
      {
        "n": "L · N · ⏚",
        "label": "Alimentation secteur",
        "desc": "Câble H07RN-F 3G1,5 mm² : L (marron), N (bleu), terre (jaune / vert). Dégainer seulement au niveau de la borne et bloquer avec le serre-câble. Interrupteur omnipolaire (≥ 3 mm) et différentiel 0,03 A en amont."
      },
      {
        "n": "Tension",
        "label": "Contrôle au voltmètre",
        "desc": "La tension secteur doit être de 230 V~ (115 V~) ± 10 % ; sinon l'automatisme ne peut pas fonctionner correctement."
      },
      {
        "n": "Séparation",
        "label": "Câblage",
        "desc": "Secteur 230 V~ et accessoires 24 V (SELV) sur des parcours séparés ; câbles à double isolement ; passer les câbles par le passe-câble fourni."
      },
      {
        "n": "Accessoires",
        "label": "Câbles conseillés (installation type)",
        "desc": "Photocellules F4ES / F4S : TX 3 × 0,5 mm², RX 5 × 0,5 mm² (20 m max) · clignotant FIFTHY/24 2 × 1 mm² (10 m max) · antenne RG58 (10 m max) · R85/60 3 × 0,5 mm² (20 m max) · H85/TTD – H85/TDS 2 × 0,5 mm² (30 m max) · bord sensible · récepteur radio CS/RX. Raccordements et essai : manuel de la B70/1DCHP."
      }
    ],
    "installation": [
      "Contrôles : structure solide, vantail stable (pas de déraillement ni de chute latérale), rail fixé au sol sans irrégularités, roues en bon état et graissées ; moteur déverrouillé, le portail ne doit pas bouger seul quelle que soit sa position. Pente maximale admissible : 0,5 %.",
      "Plaque de fondation : plateforme béton avec plaque noyée, à niveau et propre, aux cotes de la figure ; respecter les cotes entre plaque [B] et crémaillère [A]. Visser les 4 écrous 12MA sur les tirants, les passer dans la plaque et les bloquer. Gaines électriques par le trou de droite (vue face interne). L'automatisme se monte à droite ou à gauche.",
      "Motoréducteur : retirer le couvercle (vis puis tirer vers le haut), vérifier que les 6 pieds de réglage ne dépassent pas ; joints O-Ring sur les vis M10 × 40 dans les angles, écrous M10 ; poser le BG30 sur les 4 tirants, régler horizontalement (glissement sur la plaque) et verticalement (6 pieds) en tenant compte de la crémaillère ; serrer les écrous M12 (clé fixe de 19) ; remettre le couvercle.",
      "Crémaillère module 4 : moteur débloqué, portail ouvert, poser la crémaillère sur le pignon et la fixer sur toute la longueur en faisant coulisser le portail ; vérifier à la main un coulissement sans frottement, puis rebloquer le moteur.",
      "Fins de course : portail en ouverture complète puis en fermeture complète, fixer les brides sur la crémaillère dans le bon sens. Mécaniques : R = droit, L = gauche. Magnétiques : flèches vers le centre de la crémaillère ; l'aimant se règle de 8 mm maxi ; 10 mm au maximum entre aimant et brides.",
      "Après quelques manœuvres, ajuster les brides pour que le portail s'arrête 40 à 80 mm avant la butée mécanique (variable selon poids, frottements, centrale, météo). Ne jamais laisser le portail aller en butée.",
      "Raccordements et apprentissage : voir la fiche de la carte B70/1DCHP."
    ],
    "notes": [
      "Déblocage manuel (sans tension secteur, batteries débranchées, moteur arrêté) : tourner la trappe cache-serrure, introduire la clé et la tourner de 90° sens horaire, ouvrir entièrement la trappe de déblocage, déplacer le vantail. Rebloquer : abaisser la trappe avec la clé introduite (attention aux doigts), clé 90° sens inverse, la retirer et refermer la trappe.",
      "Noms des modèles : cette notice utilise BG30/1603, 1604, 2203, 2204, 1003/HS, 1004/HS, 1404/R, 1804/HS, 1504/HS, 803/HS, 804/HS ; la notice de la centrale B70/1DCHP (IS142) parle de BG30/1600, 2200, 1000/HS, 1400/R, 1800/HS, 1500/HS (ou 1504/HS) et 804/HS. Repris tels quels.",
      "Versions 115 V citées par la note (*) du tableau : BG30/1603/HS/115, 2203/HS/115, 1003/HS/115, 803/HS/115, 804/HS/115.",
      "Deux portails coulissants opposés : voir la fiche « MASTER / SLAVE (B70/1DC, B70/1DCHP) ».",
      "Étiquette : IN = numéro progressif dans l'année ; BC = année (2 premiers chiffres) et semaine (2 derniers) de fabrication."
    ]
  },
  {
    "id": "roger-bm30",
    "nom": "BM30 (série)",
    "marque": "Roger",
    "couleur": "#5b4aa8",
    "categorie": "Motoréducteur coulissant brushless (motorisation)",
    "modeles": "BM30/403 · BM30/303/HS · BM30/304/HS (+ versions /115) — centrale B70/1DC",
    "source": "Notice Roger BM30 IS169 Rev.13 (version française)",
    "resume": "Motoréducteur brushless basse tension (24 V) irréversible pour portail coulissant jusqu'à 500 kg (BM30/403) ou 400 kg en High Speed (BM30/303/HS, /304/HS), encodeur natif, centrale numérique B70/1DC à bord, course jusqu'à 12 m.",
    "specs": [
      [
        "Alimentation réseau",
        "230 V~ 50/60 Hz ; 115 V~ 50/60 Hz pour BM30/403/115 et BM30/303/HS/115"
      ],
      [
        "Tension fournie au moteur",
        "24 V~, fréquence variable (commande FOC avec encodeur haute résolution)"
      ],
      [
        "Type",
        "Irréversible (les trois modèles) · HS = High Speed"
      ],
      [
        "Fin de course",
        "BM30/403 et BM30/303/HS : mécanique · BM30/304/HS : magnétique (voir Notes, la description varie selon la langue)"
      ],
      [
        "Poids maxi du vantail",
        "BM30/403 : 500 kg · BM30/303/HS et /304/HS : 400 kg"
      ],
      [
        "Longueur de course maxi",
        "12 m"
      ],
      [
        "Vitesse de coulissement",
        "BM30/403 : 7,4 – 12 m/min · BM30/303/HS et /304/HS : 10 – 20 m/min"
      ],
      [
        "Puissance maxi absorbée / de démarrage",
        "BM30/403 : 140 / 240 W · HS : 140 / 210 W"
      ],
      [
        "Force de démarrage",
        "BM30/403 : 610 N · HS : 280 N"
      ],
      [
        "Force maxi (S3 40 %)",
        "BM30/403 : 300 N (à 1200 tr/min) · HS : 120 N (à 1100 tr/min)"
      ],
      [
        "Force nominale (S1 100 %)",
        "BM30/403 : 135 N (à 1200 tr/min) · HS : 145 N (à 750 tr/min)"
      ],
      [
        "Pignon de sortie",
        "Z15 module 4"
      ],
      [
        "Pente maximale admissible",
        "0,5 %"
      ],
      [
        "Usage, cycles",
        "Intensif (à la force nominale) · 200 000 cycles testés en interne (portail de 5 m à 20 °C, ce n'est pas la valeur maxi)"
      ],
      [
        "Consommation en veille, protection, température",
        "≤ 0,5 W · IP44 · −20 °C à +55 °C · < 70 dB(A)"
      ],
      [
        "Dimensions",
        "290 (H) × 250 (L) × 165 (P) mm"
      ],
      [
        "Poids de l'opérateur",
        "BM30/403 : 11,3 kg · HS : 10,8 kg"
      ],
      [
        "Déblocage",
        "Force à appliquer : 130 N"
      ]
    ],
    "raccordement": [
      {
        "n": "L · N · ⏚",
        "label": "Alimentation secteur",
        "desc": "Câble H07RN-F 3G1,5 mm² : L (marron), N (bleu), terre (jaune / vert). Dégainer seulement au niveau de la borne et bloquer avec le serre-câble. Interrupteur omnipolaire (≥ 3 mm) et différentiel 0,03 A en amont."
      },
      {
        "n": "Tension",
        "label": "Contrôle au voltmètre",
        "desc": "La tension secteur doit être de 230 V~ (115 V~) ± 10 % ; sinon l'automatisme ne peut pas fonctionner de manière efficace."
      },
      {
        "n": "Séparation",
        "label": "Câblage",
        "desc": "Secteur 230 V~ et accessoires 24 V (SELV) sur des parcours séparés ; câbles à double isolement, bloqués par des colliers (non fournis) ; passer les câbles par le passe-câble fourni."
      },
      {
        "n": "Accessoires",
        "label": "Câbles conseillés (installation type)",
        "desc": "Photocellules F4ES / F4S : TX 3 × 0,5 mm², RX 5 × 0,5 mm² (20 m max) · clignotant FIFTHY/24 2 × 1 mm² (10 m max) · antenne 50 Ω RG58 (10 m max) · R85/60 3 × 0,5 mm² (20 m max) · H85/TTD – H85/TDS 2 × 0,5 mm² (30 m max) · bord sensible · récepteur radio CS/RX. Raccordements et essai : manuel de la B70/1DC."
      }
    ],
    "installation": [
      "Contrôles : structure solide, vantail stable (pas de déraillement ni de chute latérale), rail solidement fixé au sol sans irrégularités et pente ≤ 0,5 %, roues en bon état et lubrifiées ; butées mécaniques d'arrêt en ouverture et fermeture fixées au sol avec élément élastique (caoutchouc) ; moteur déverrouillé, le portail ne doit pas bouger seul quelle que soit sa position.",
      "Plaque de fondation : visser les 4 écrous 10MA sur les tirants fournis sur toute la longueur du filetage, introduire les tirants dans les 4 trous de la plaque et les bloquer. Plateforme béton avec plaque noyée, à niveau et propre, aux cotes de la figure ; respecter les cotes entre plaque [B] et crémaillère [A]. Gaines électriques par le trou de droite (vue face interne). L'automatisme se monte à droite ou à gauche.",
      "Motoréducteur : dévisser les vis du couvercle et le retirer vers le haut ; vérifier que les 6 pieds de réglage ne dépassent pas de la base ; joints O-Ring sur les vis M8 × 40 dans les angles, bloquées par écrous M8 ; poser le BM30 sur les 4 tirants (desserrer les écrous de la plaque si besoin) ; réglage horizontal en le faisant coulisser sur les ouvertures de la plaque, réglage vertical selon la crémaillère ; serrer les écrous surélevés M8.",
      "Crémaillère module 4 : moteur débloqué, portail en ouverture, poser la crémaillère sur le pignon et la fixer sur toute la longueur en faisant coulisser le portail (élément de raccord conseillé entre deux pièces). Jeu entre pignon et crémaillère : « au moins 1/2 mm » dans le texte français, 1 – 2 mm dans les autres langues et sur la figure 5 ; régler la hauteur du moteur ou de la crémaillère si besoin. Vérifier à la main un coulissement sans frottement, puis bloquer définitivement le moteur.",
      "Fins de course : portail en ouverture complète puis en fermeture complète, fixer les brides sur la crémaillère dans le bon sens. Mécaniques : R = droit, L = gauche. Magnétiques : flèches vers le centre de la crémaillère ; l'aimant se règle de 8 mm maxi en desserrant les deux vis ; 10 mm au maximum entre aimant et brides.",
      "Après quelques manœuvres, ajuster les brides pour que le portail s'arrête 40 à 80 mm avant la butée mécanique (variable selon poids, frottements, centrale, météo). Ne jamais laisser le portail aller en butée.",
      "Raccordements et apprentissage : voir la fiche de la carte B70/1DC."
    ],
    "notes": [
      "Déblocage manuel (sans tension secteur, batteries débranchées, moteur arrêté) : tourner la trappe cache-serrure, introduire la clé et la tourner de 90° sens horaire, ouvrir entièrement la trappe de déblocage, déplacer le vantail. Rebloquer : abaisser la trappe avec la clé introduite (attention aux doigts), clé 90° sens inverse, la retirer et refermer la trappe.",
      "Type de fin de course, la notice se contredit selon la langue : BM30/403 « fin de course magnétique » en italien mais « mécanique » en anglais, allemand, français, espagnol et portugais ; BM30/304/HS « finecorsa meccanico » en italien, « magnétique » dans les autres langues (le français dit « magnétique à microrupteur »). La fiche suit la version française.",
      "Noms des modèles : cette notice utilise BM30/403, /303/HS et /304/HS ; la notice de la centrale B70/1DC parle de BM30/400 et BM30/300/HS (paramètre A1 = 04 / 05).",
      "Vitesse High Speed : la notice BM30 donne 10 – 20 m/min ; le paramètre 40 de la B70/1DC indique 10 → 24 m/min pour le High Speed. Repris tels quels.",
      "Deux portails coulissants opposés : voir la fiche « MASTER / SLAVE (B70/1DC, B70/1DCHP) ».",
      "Étiquette : IN = numéro progressif dans l'année ; BC = année (2 premiers chiffres) et semaine (2 derniers) de fabrication."
    ]
  },
  {
    "id": "roger-br21",
    "nom": "BR21 / R21 (série, enterré)",
    "marque": "Roger",
    "couleur": "#5b4aa8",
    "categorie": "Motoréducteur enterré pour portail battant (motorisation)",
    "modeles": "Brushless 36 V : BR21/351 · BR21/351/HS · BR21/361 · BR21/361/HS · BR21/362 (centrale EDGE1) — 230 V : R21/351 · R21/351SUB · R21/361 · R21/362 · R21/362SUB (centrale H70/200AC) — caisses FU100 à FU103",
    "source": "Notice Roger BR21 / R21 / FU IS301 Rev.03 (version française)",
    "resume": "Motoréducteur enterré irréversible pour portail battant, posé dans une caisse de fondation FU. BR21 : brushless 36 V avec encodeur, centrale EDGE1. R21 : 230 V~, centrale H70/200AC. 351 = câble de 2 m, 361/362 = câble de 10 m, 362 = version tandem à double roulement, SUB = résistant à l'eau.",
    "specs": [
      [
        "Alimentation réseau",
        "BR21 : 230 V~ 50 Hz ; 115 V~ 60 Hz · R21 : 230 V~ 50 Hz"
      ],
      [
        "Tension moteur",
        "BR21 : 36 V~ fréquence variable (FOC, sensorless) · R21 : 230 V~ avec régulation de tension (TRIAC)"
      ],
      [
        "Type",
        "Irréversible (toutes versions)"
      ],
      [
        "Longueur maxi du vantail",
        "BR21/351 et /361 : 4,5 m · BR21/351/HS et /361/HS : 3 m · BR21/362 : 5 m · R21 (toutes) : 3,5 m"
      ],
      [
        "Poids maxi du vantail",
        "BR21/351 et /361 : 800 kg · BR21 HS : 400 kg · BR21/362 : 1000 kg · R21 : non indiqué dans le tableau (voir l'abaque poids / longueur)"
      ],
      [
        "Temps d'ouverture",
        "BR21 standard et 362 : 19 – 29 s · BR21 HS : 10 – 25 s · R21 : 18 s (90° en 18 s)"
      ],
      [
        "Couple de démarrage",
        "BR21 standard et 362 : 350 Nm · BR21 HS : 280 Nm · R21 : 450 Nm"
      ],
      [
        "Couple maxi (S3)",
        "BR21 standard et 362 : 315 Nm (S3 60 %, 3,5 °/s) · BR21 HS : 190 Nm (S3 70 %, 6,3 °/s)"
      ],
      [
        "Couple nominal",
        "BR21 standard et 362 : 160 Nm (5,2 °/s) · BR21 HS : 140 Nm (7,3 °/s) · R21 : 300 Nm (S2 240 s et S3 25 %)"
      ],
      [
        "Puissance",
        "BR21 : démarrage 265 W (HS 295 W), nominale 150 W (HS 160 W) · R21 : démarrage 690 W, nominale absorbée 520 W"
      ],
      [
        "Ouverture standard",
        "R21 : 105° · leviers en option : LT300 125°, LT301 / LT301/R 360°, LT300/90SX – /90DX 103°"
      ],
      [
        "Cycles",
        "BR21 : 500 000 testés (vantail 2,5 m, 20 °C), 1300 cycles / jour, usage intensif · R21 : 30 000 testés (vantail 3,5 m, 20 °C) · ce ne sont pas des valeurs maxi"
      ],
      [
        "Protection, température, bruit",
        "IP67 · −20 °C à +55 °C · < 70 dB(A) · R21 : thermoprotection moteur 150 °C"
      ],
      [
        "Poids de l'opérateur",
        "BR21/351 12,1 · 351/HS 12,3 · 361 13,7 · 361/HS 13,9 · 362 14,4 kg · R21/351 13,1 · 351SUB 13,6 · 361 14 · 362 14,9 · 362SUB 15,1 kg"
      ],
      [
        "Déblocage",
        "Force 130 N · système RL650 (levier) ou RL651 (clé personnalisée) à acheter séparément ; levier long RL663"
      ],
      [
        "Dimensions",
        "Moteur 354 × 224 × 144 mm (entraxe fixations 238 × 200) · caisse 415 × 340 mm, hauteur 166 mm (221 avec le levier)"
      ]
    ],
    "raccordement": [
      {
        "n": "Z · Y · X",
        "label": "BR21 → EDGE1 (moteur brushless)",
        "desc": "Fil blanc → Z, vert → Y, rouge → X. La notice indique qu'il n'est pas nécessaire de raccorder la terre."
      },
      {
        "n": "COM · F1 · F2",
        "label": "R21 → H70/200AC (230 V)",
        "desc": "Gris = commun (COM), noir = phase 1, marron = phase 2, jaune / vert = terre, condensateur entre les deux phases. Le commun (gris) doit être relié au neutre de l'alimentation."
      },
      {
        "n": "Câble",
        "label": "Câble moteur",
        "desc": "Interdit de couper le câble du moteur (risque d'humidité) : le raccorder dans une boîte de dérivation extérieure, connexion étanche obligatoire si elle est enterrée. Câble non remplaçable (voir pièces détachées). Le protéger sur toute sa longueur, de la caisse jusqu'à la centrale ; fixer les conducteurs près des bornes et ne les dénuder qu'au niveau des bornes."
      },
      {
        "n": "Encodeur",
        "label": "R21 avec encodeur R21/ENC/2 ou /10",
        "desc": "Voir la notice de l'encodeur ; deux conduits séparés, un pour le 230 V et un pour la très basse tension (SELV) de l'encodeur."
      }
    ],
    "installation": [
      "Contrôles : structure solide, gonds bien graissés, mouvement fluide sans frottements ; toujours une butée mécanique d'arrêt en ouverture et en fermeture fixée au sol, avec élément élastique (caoutchouc).",
      "Caisse de fondation (droite ou gauche indifféremment) : préparer l'excavation ; axe de la caisse aligné sur la charnière du portail ; prévoir l'évacuation d'eau (un mauvais drainage peut endommager le moteur) et un conduit pour les câbles ; noyer la caisse dans le béton parfaitement à niveau, bord supérieur 5 à 6 mm au-dessus du sol ; respecter les cotes entre caisse et pilier.",
      "Portail : souder soigneusement le levier [3] au vantail, aligné sur la charnière supérieure (pas près des trous filetés du support de déverrouillage [4]) ; graisser les axes de rotation de la caisse ; monter le levier d'entraînement [1], la bille [2] puis la bride [3] soudée au portail.",
      "Moteur : nettoyer le fond de la caisse (terre, ciment), dévisser écrous et rondelles des axes, poser le motoréducteur en respectant le sens et le type d'installation, le fixer avec écrous et rondelles.",
      "Arrêts mécaniques obligatoires : en ouverture, tourner l'excentrique hexagonal [1] dans l'une des 6 positions et bloquer avec la vis [2] ; en fermeture, visser / dévisser le boulon [3].",
      "Vent fort : les limites d'utilisation peuvent être réduites. Avec le groupe leviers LT300 (125°), les limites de poids sont plus basses (zone * de l'abaque).",
      "Électroserrure conseillée si le vantail dépasse 2,5 m (vantail normal), 2 m (vantail plein) ou 2 m de hauteur.",
      "Raccordements et apprentissage : fiche EDGE1 (BR21) ou fiche H70/200AC (R21, encodeur réglé 75 03)."
    ],
    "notes": [
      "Déblocage (sans tension, batteries débranchées, moteur arrêté). RL650 : retirer le bouchon, introduire le levier, le tourner d'environ 120° vers le centre du portail, déplacer le portail ; pour rebloquer, portail ouvert, ramener le levier vers les gonds en position initiale et refermer le bouchon. RL651 : introduire la clé, la tourner d'environ 90° vers le centre du portail sans la retirer, tirer le levier jusqu'à l'ouverture complète, déplacer le portail ; pour rebloquer, ramener le levier, clé 90° vers les gonds, refermer. Le raccrochage se fait seul aux manœuvres suivantes.",
      "Centrale EDGE1 : paramètre A1 = 04 pour BR21/351-361-362, 10 pour BR21/351-361/HS (voir la fiche EDGE1).",
      "BR21 : la notice dit qu'il n'est pas nécessaire de raccorder la terre, mais le schéma montre un repère de terre (TERRA / GROUND) sur le moteur. Repris tel quel.",
      "Un code R21/351SC est cité (cotes et montage du portail « à ne pas considérer pour R21/351SC ») mais n'apparaît pas dans la liste des produits.",
      "Poids maxi : les abaques montrent un poids admissible qui baisse avec la longueur du vantail (ex. BR21/351 : 800 kg jusqu'à environ 1,5 m) ; se référer au schéma « Abaque » plutôt qu'au seul maximum.",
      "Accessoires compatibles BR21 et R21 : caisses FU100 (acier zingué à froid), FU101 (zingué à chaud), FU102 (zingué à chaud + couvercle inox AISI 304), FU103 (tout inox AISI 304) ; LT327/SC pignon ¾ Z13 d'adaptation avec pignon ¾ Z16 ; RL650/R déblocage levier renforcé.",
      "Étiquette : IN = numéro progressif dans l'année ; BC = année et semaine de fabrication."
    ]
  },
  {
    "id": "roger-bh23",
    "nom": "BH23 (bras articulé)",
    "marque": "Roger",
    "couleur": "#5b4aa8",
    "categorie": "Motoréducteur à bras articulé pour portail battant (motorisation)",
    "modeles": "BH23/282 · BH23/252/HS — centrale EDGE1",
    "source": "Notice Roger BH23 IS106 Rev.10 (version française)",
    "resume": "Motoréducteur brushless 36 V à bras articulé, irréversible, encodeur natif, pour portail battant jusqu'à 2,8 m (BH23/282) ou 2,5 m en High Speed (BH23/252/HS), arrêts mécaniques réglables en ouverture et en fermeture, bras courts en version standard.",
    "specs": [
      [
        "Alimentation moteur",
        "36 V~ (centrale EDGE1)"
      ],
      [
        "Type",
        "Irréversible"
      ],
      [
        "Longueur maxi du vantail",
        "BH23/282 : 2,8 m · BH23/252/HS : 2,5 m"
      ],
      [
        "Poids maxi du vantail",
        "BH23/282 : 300 kg · BH23/252/HS : 250 kg (baisse avec la longueur, voir l'abaque)"
      ],
      [
        "Puissance nominale",
        "160 W"
      ],
      [
        "Couple de démarrage / nominal",
        "BH23/282 : 280 / 150 Nm · BH23/252/HS : 230 / 120 Nm"
      ],
      [
        "Vitesse",
        "BH23/282 : 1,9 – 1 cm/s · BH23/252/HS : 4 – 1,5 cm/s (valeurs telles qu'écrites)"
      ],
      [
        "Temps d'ouverture",
        "BH23/282 : 12 – 20 s · BH23/252/HS : 10 – 18 s"
      ],
      [
        "Cycles testés",
        "BH23/282 : 1900 · BH23/252/HS : 1200 (portail de 2,5 m à +25 °C, ce n'est pas la valeur maxi)"
      ],
      [
        "Usage, protection, température",
        "Intensif (au couple nominal) · IP44 · −20 °C à +55 °C · < 70 dB(A)"
      ],
      [
        "Dimensions, poids",
        "284 (H) × 230 × 190 mm · BH23/282 12,1 kg · BH23/252/HS 12 kg"
      ],
      [
        "Déblocage",
        "Force 130 N · déblocage extérieur par cordon RL671 en option"
      ]
    ],
    "raccordement": [
      {
        "n": "Moteur",
        "label": "Câble BH23 → EDGE1",
        "desc": "3 × 2,5 mm² (10 m maxi) ou 3 × 4 mm² (30 m maxi) d'après le tableau ; le schéma de raccordement (fig. 8) indique « 4x2.5 ». Raccordement et essai : voir la fiche EDGE1. Poser le bouchon fourni sur le trou opposé au passage des câbles."
      },
      {
        "n": "⏚",
        "label": "Terre",
        "desc": "La notice indique qu'il n'est pas nécessaire de raccorder la terre."
      },
      {
        "n": "EDGE1",
        "label": "Alimentation de la centrale",
        "desc": "H07RN-F 2 × 1,5 mm²."
      },
      {
        "n": "Accessoires",
        "label": "Câbles conseillés (installation type)",
        "desc": "Photocellules F4ES / F4S : TX 3 × 0,5 mm², RX 5 × 0,5 mm² (20 m max) · FIFTHY/24 2 × 1 mm² (10 m max) · antenne 50 Ω RG58 (10 m max) · R85/60 3 × 0,5 mm² (20 m max) · H85/TTD – H85/TDS 2 × 0,5 mm² (30 m max) · bord sensible · récepteur CS/RX."
      }
    ],
    "installation": [
      "Étrier arrière KT209 : à niveau, aux cotes des tableaux ; chevilles et vis adaptées sur pilier maçonné, soudé sur pilier en fer.",
      "Étrier avant KT218 : portail entièrement fermé, en respectant les cotes, si possible au centre du portail et au niveau d'une traverse solide, à niveau avec le vantail.",
      "Ne pas souder les étriers avec l'actionneur monté (les courants de soudage peuvent l'endommager).",
      "Bras court LT302 (tableau 1) : A 130 / B 50 → 90° … A 300 / B 250 → 110°, 350 à 450 mm entre pilier et fixation, ouverture maxi 170°. Bras à glissière LT338 (tableau 2) : non compatible avec le BH23/252/HS, voir sa notice. Voir le schéma « Cotes d'installation ».",
      "Moteur : montage à droite ou à gauche (orientation fig. 4), fixé sur KT209 avec les vis fournies ; assembler les bras articulés et les fixer sur KT218 en lubrifiant les points de rotation ; vérifier à la main une course régulière sans frottements.",
      "Arrêts mécaniques : retirer le carter, portail en ouverture maxi, régler l'arrêt d'ouverture contre la butée intérieure [A] ; idem en fermeture ; serrer fortement les vis et vérifier que le portail fonctionne librement. Les butées au sol en ouverture et fermeture doivent toujours être présentes.",
      "Raccordements et apprentissage : fiche EDGE1 (paramètre A1 = 03 pour BH23/282, 09 pour BH23/252/HS)."
    ],
    "notes": [
      "Déblocage manuel (sans tension secteur, batteries débranchées, moteur arrêté) : tourner la trappe cache-serrure, introduire la clé et la tourner de 90° sens horaire, ouvrir entièrement la trappe de déblocage, déplacer le vantail à la main. Rebloquer : abaisser la trappe avec la clé introduite (attention aux doigts), clé 90° sens inverse, la retirer et refermer la trappe.",
      "Déblocage extérieur RL671 (option) : passer le cordon métallique gainé dans l'anneau de l'axe de déverrouillage, le sortir par le trou opposé au câble d'alimentation et le relier à une poignée (non fournie).",
      "Le paragraphe « Arrêts mécaniques » parle de « fermoirs mécaniques intérieurs au piston » alors que le BH23 est un moteur à bras articulé. Repris tel quel.",
      "Cycles testés 1900 / 1200 : valeurs telles qu'indiquées dans le tableau."
    ]
  },
  {
    "id": "roger-monos4",
    "nom": "MONOS4 (vérin)",
    "marque": "Roger",
    "couleur": "#5b4aa8",
    "categorie": "Vérin brushless pour portail battant (motorisation)",
    "modeles": "MONOS4 — centrale B70/2ML",
    "source": "Notice Roger MONOS4 IS201 Rev.11 (version française)",
    "resume": "Vérin brushless basse tension (24 V) irréversible, encodeur natif, pour portail battant jusqu'à 4 m et 450 kg (poids admissible décroissant avec la longueur), course 400 mm. Sans fins de course ni butées internes : butées au sol obligatoires.",
    "specs": [
      [
        "Alimentation",
        "Réseau 230 V~ · moteur brushless 24 V~"
      ],
      [
        "Type",
        "Irréversible"
      ],
      [
        "Longueur / poids maxi du vantail",
        "4 m · 450 kg (abaque : environ 450 kg à 1 m, 300 kg à 2,5 m, 200 kg à 4 m)"
      ],
      [
        "Puissance nominale",
        "200 W"
      ],
      [
        "Poussée",
        "2200 N"
      ],
      [
        "Vitesse",
        "2,10 – 1,14 cm/s"
      ],
      [
        "Temps d'ouverture",
        "19 – 35 s (indicatif, dépend de l'installation)"
      ],
      [
        "Course",
        "400 mm (« arrêts mécaniques intégrés » d'après le tableau, voir Notes)"
      ],
      [
        "Cycles testés",
        "700"
      ],
      [
        "Usage, protection, température",
        "Intensif (au couple nominal) · IP44 · −20 °C à +55 °C · < 70 dB(A)"
      ],
      [
        "Dimensions, poids",
        "Fermé 818 mm (entraxe 775), ouvert 1207 mm (entraxe 1165) · hauteur 178 mm · largeur 111 mm · 5,1 kg"
      ]
    ],
    "raccordement": [
      {
        "n": "Moteur",
        "label": "Câble MONOS4 → B70/2ML",
        "desc": "3 × 2,5 mm² (10 m maxi) ou 3 × 4 mm² (30 m maxi). Dévisser les 4 vis inférieures et retirer le couvercle, dévisser le passe-câble, passer le câble et le brancher au connecteur sous la coque supérieure."
      },
      {
        "n": "⏚",
        "label": "Terre",
        "desc": "La notice dit qu'il n'est pas nécessaire de brancher la terre pour la mise en marche du MONOS4, et aussi « si nécessaire, raccorder l'automatisme à une installation de terre efficace »."
      },
      {
        "n": "B70/2ML",
        "label": "Alimentation de la centrale",
        "desc": "H07RN-F 2 × 1,5 mm² ; interrupteur omnipolaire (≥ 3 mm) et différentiel 0,03 A en amont."
      },
      {
        "n": "Accessoires",
        "label": "Câbles conseillés (installation type)",
        "desc": "Photocellules F4ES / F4S : TX 3 × 0,5 mm², RX 5 × 0,5 mm² (20 m max) · FIFTHY/24 2 × 1 mm² (10 m max) · R85/60 3 × 0,5 mm² (20 m max) · H85/TTD – H85/TDS 2 × 0,5 mm² (30 m max) · bord sensible · récepteur CS/RX. Raccordements et essai : manuel B70/2ML."
      }
    ],
    "installation": [
      "Contrôles : portail robuste, gonds graissés, mouvement fluide sans frottements. Butée mécanique d'arrêt au sol en ouverture et en fermeture obligatoire, avec élément élastique (caoutchouc).",
      "Cotes (course maxi 400 mm, vantail de 60 mm d'épaisseur pour la cote F) : A 110 / B 180 → 95° … A 160 / B 150 → 110° ; E 50, F 80 ; voir le schéma « Cotes d'installation ». A + B compatibles avec la course (sinon raccourcir l'étrier arrière, donc B) ; A et B supérieures à F d'au moins 20 à 30 mm.",
      "Hauteur de fixation définie, étrier arrière à niveau (chevilles sur maçonnerie, soudé sur fer) ; piston débloqué, portail fermé, poser l'étrier avant aux cotes D et E, à niveau avec le vantail.",
      "Laisser une réserve de course de 30 mm en fermeture et 15 mm en ouverture pour que la tige ne vienne pas en butée dans le tube.",
      "Montage à droite ou à gauche ; fixer le piston aux étriers en lubrifiant les points de rotation, vis serrées en laissant le jeu nécessaire (0,3 à 0,5 mm sur le schéma) ; la pointe du piston converge vers le vantail ; vérifier à la main qu'il ne heurte ni le vantail ni le pilier et que la course est régulière.",
      "Raccordements et apprentissage : fiche B70/2ML."
    ],
    "notes": [
      "Déblocage manuel (sans tension secteur, batteries débranchées, moteur arrêté) : tourner la trappe cache-serrure, introduire la clé et la tourner de 90° sens horaire, ouvrir entièrement la trappe de déblocage, déplacer le vantail à la main. Rebloquer : abaisser la trappe avec la clé introduite (attention aux doigts), clé 90° sens inverse, la retirer et refermer la trappe.",
      "Centrale : la notice MONOS4 indique la B70/2ML ; la notice de l'EDGE1 cite aussi le MONOS4 (paramètre A1 = 11 « BE20/400 ou MONOS4 »). Les deux sont repris tels quels.",
      "Butées : la notice dit que le MONOS4 n'a ni fins de course électriques ni butées mécaniques internes, mais le tableau indique « Course (arrêts mécaniques intégré) 400 mm ». Prévoir de toute façon les butées au sol.",
      "Électroserrure conseillée si le vantail dépasse 2,5 m (vantail normal), 2 m (vantail plein) ou 2 m de hauteur.",
      "Entretien périodique : vérifier portail, fixations, oxydation, serrage des vis, lubrifier axes et gonds, contrôler sécurités, détection d'obstacles et limitation des forces (EN 12445)."
    ]
  },
  {
    "id": "roger-ayron",
    "nom": "AYRON (bras articulé)",
    "marque": "Roger",
    "couleur": "#5b4aa8",
    "categorie": "Motoréducteur à bras articulé pour portail battant (motorisation)",
    "modeles": "AY/250/M (avec centrale B70/2ML intégrée) · AY/250/S (sans centrale) — bras vendus à part : LT336 court, LT337 long, LT338 à glissière",
    "source": "Notice Roger AYRON IS239 Rev.01 (version française)",
    "resume": "Motoréducteur brushless High Speed 24 V à bras articulé, irréversible, encodeur natif, pour portail battant jusqu'à 2,5 m, arrêts mécaniques en ouverture et en fermeture. Le AY/250/M contient la centrale B70/2ML (il pilote le AY/250/S du 2e vantail). Livrés sans bras articulés.",
    "specs": [
      [
        "Alimentation moteur",
        "24 V (centrale B70/2ML intégrée au AY/250/M, réseau 230 V)"
      ],
      [
        "Type",
        "Irréversible, High Speed"
      ],
      [
        "Longueur maxi du vantail",
        "2,5 m"
      ],
      [
        "Poids maxi du vantail",
        "Non indiqué dans le tableau ; abaque : environ 250 kg jusqu'à 1 m, environ 120 kg à 2,5 m"
      ],
      [
        "Puissance maxi absorbée / démarrage",
        "150 W / 350 W"
      ],
      [
        "Couple",
        "50 – 200 Nm"
      ],
      [
        "Vitesse",
        "4 – 1,5 tr/min"
      ],
      [
        "Temps d'ouverture à 90°",
        "10 à 18 s"
      ],
      [
        "Cycles par jour",
        "800 (24 h sans arrêt) · usage intensif"
      ],
      [
        "Protection, température, bruit",
        "IP43 · −20 °C à +55 °C · < 70 dB(A)"
      ],
      [
        "Dimensions, poids",
        "270 (H, + 60 mm sous le moteur) × 245 × 189 mm · AY/250/M 11,1 kg · AY/250/S 8,4 kg"
      ],
      [
        "Déblocage extérieur",
        "Kit à cordon RL673 en option"
      ]
    ],
    "raccordement": [
      {
        "n": "L · N · ⏚",
        "label": "Secteur (dans le AY/250/M)",
        "desc": "Câble 3 × 1,5 mm² 230 V vers le bornier secteur avec fusible F3. Voir Notes pour la terre."
      },
      {
        "n": "X · Y · Z",
        "label": "Moteurs sur la B70/2ML",
        "desc": "Moteur du AY/250/M et moteur du AY/250/S (2e vantail) sur les deux borniers X · Y · Z de la carte ; câble 3 × 2,5 mm² vers le AY/250/S."
      },
      {
        "n": "Bouchon",
        "label": "Passage des câbles",
        "desc": "Poser le bouchon fourni sur le trou opposé à celui du passage des câbles."
      },
      {
        "n": "Accessoires",
        "label": "Câbles conseillés (installation type)",
        "desc": "Photocellules TX 3 × 0,5 mm², RX 5 × 0,5 mm² · clignotant LED 2 × 1 mm² + antenne RG58 · sélecteur à clé 3 × 0,5 mm². Raccordements et essai : fiche B70/2ML."
      }
    ],
    "installation": [
      "Contrôles : portail robuste, gonds graissés, mouvement fluide sans frottements ; butée mécanique au sol en ouverture et en fermeture avec élément élastique (caoutchouc).",
      "Étrier arrière KT249 à niveau aux cotes des tableaux (chevilles et vis sur maçonnerie ; soudé ou chevillé sur acier). Portail fermé, étrier avant KT218 à niveau, si possible au centre du portail et sur une traverse solide.",
      "Ne pas souder les étriers avec l'actionneur monté.",
      "Cotes : bras court LT336 (350 à 450 mm, A 130 / B 50 – 120 → 90° … A 250 / B 250 → 105°), bras long LT337 (650 à 900 mm, jusqu'à 120° avec A 250 / B 0), bras à glissière LT338 (C 300 à 440). Ouverture maxi 170° pour les bras articulés. Voir le schéma « Cotes d'installation ».",
      "Moteur : montage à droite ou à gauche (fig. 4), fixé sur KT249 avec les vis fournies ; assembler les bras articulés et les fixer sur KT218 en lubrifiant les points de rotation ; vérifier à la main une course régulière.",
      "Arrêts mécaniques (exemple moteur GAUCHE) : portail en ouverture maxi, visser la butée (A) à gauche du levier dans les trous les plus proches du KT249, réglage fin par les vis (B1) du levier qui doit toucher la butée ; idem en fermeture avec la butée (C) à droite du levier ; vérifier, serrer les grains (D) qui bloquent les vis (B1-B2), revisser le couvercle (E) et l'enjoliveur (F).",
      "Raccordements et apprentissage : fiche B70/2ML (paramètre A1 = 01 série AYRON)."
    ],
    "notes": [
      "Mise à la terre : la version française est écrite « il n'est nécessaire effectuer la liaison à la terre » (phrase ambiguë) ; les versions italienne, anglaise, allemande, espagnole et portugaise disent qu'elle est nécessaire avec la B70/2ML. Repris tels quels.",
      "L'étiquette d'exemple (AY/250/M) indique 160 W et S3 35 %, le tableau 150 W et usage intensif.",
      "Déblocage extérieur RL673 (option) : ouvrir le couvercle, passer le cordon métallique gainé dans la fente rectangulaire du KT249 et les guide-câbles, assembler selon la notice de l'accessoire, relier à une poignée existante (non fournie), vérifier et refermer.",
      "La notice ne décrit pas la manœuvre de déblocage manuel à la clé."
    ]
  },
  {
    "id": "roger-way",
    "nom": "WAY (barrière)",
    "marque": "Roger",
    "couleur": "#5b4aa8",
    "categorie": "Barrière levante brushless (motorisation)",
    "modeles": "WAY/004 · WAY/005 · WAY/006 (+ versions /115) — centrale B70/1T — lisses BA/68/3, BA/68/4, BA/75/5 (WAY/004 – /005), BA/91/6 ou 2 × BA/91/3 + JNT/BA/91 (WAY/006)",
    "source": "Notices Roger WAY/004 – WAY/005 IS266 Rev.04, WAY/006 IS291 Rev.02, plaque KT252 IS283 Rev.00 (versions françaises)",
    "resume": "Barrière brushless 24 V irréversible avec centrale B70/1T et encodeur magnétique 4096 PPR, usage intensif. WAY/004 : lisse jusqu'à 4 m · WAY/005 : jusqu'à 5 m · WAY/006 : jusqu'à 6 m. Livrée pour une installation à DROITE (vue côté trappe d'inspection).",
    "specs": [
      [
        "Alimentation",
        "230 V~ 50/60 Hz ; 115 V~ 50/60 Hz (versions /115) · moteur 24 V~ fréquence variable (FOC avec encodeur)"
      ],
      [
        "Puissance maxi / de démarrage",
        "180 W / 305 W"
      ],
      [
        "Couple",
        "Démarrage 140 Nm · maxi 56 Nm (S3 70 %, à 1500 tr/min) · nominal 49 Nm (S1, à 1500 tr/min)"
      ],
      [
        "Temps de manœuvre",
        "WAY/004 : 4 – 11 s · WAY/005 : 5 – 17 s · WAY/006 : 6 – 18 s"
      ],
      [
        "Lisse",
        "WAY/004 : jusqu'à 4 m · WAY/005 : jusqu'à 5 m · WAY/006 : jusqu'à 6 m"
      ],
      [
        "Cycles",
        "500 000 testés (lisses 4 et 5 m, ou 6 m, à 20 °C ; pas la valeur maxi) · par jour : WAY/004 4500, WAY/005 2800, WAY/006 2400 · usage intensif"
      ],
      [
        "Protection, température, bruit",
        "IP44 · −20 °C à +55 °C · < 70 dB(A)"
      ],
      [
        "Poids",
        "WAY/004 40 kg · WAY/005 44 kg · WAY/006 50 kg"
      ],
      [
        "Déblocage",
        "Clé trilobée, 230° · force 10 N"
      ],
      [
        "Dimensions",
        "Hauteur 1010 mm (axe de lisse à 870 mm) · WAY/004 – /005 : 325 × 211 mm, profondeur avec moyeu 347 mm, lisse ≤ 2870 / 3870 / 5000 mm · WAY/006 : 428 × 212 mm, lisse ≤ 5850 mm"
      ],
      [
        "Ressorts",
        "WAY/004 – /005 : SP/48/G10 (marron, Ø48), SP/51/G10 (orange, Ø51), SP/56/G10 (violet, Ø56) · WAY/006 : SP/51/AS/G12 (orange) ou SP/56/AS/G12 (violet), jeux de 2 ressorts"
      ],
      [
        "Plaque de fondation",
        "KT251 (WAY/004 – /005) · KT252 (WAY/006)"
      ]
    ],
    "raccordement": [
      {
        "n": "L · N · ⏚",
        "label": "Alimentation",
        "desc": "Câble à double isolation 3 × 2,5 mm² d'après la notice de la barrière (la notice B70/1T conseille H07RN-F 3 × 1,5 mm²). Passer par le presse-câble caoutchouc à gauche du boîtier de centrale : L marron, N bleu, terre jaune / vert ; bloquer avec les serre-câbles fournis. Interrupteur omnipolaire (≥ 3 mm), disjoncteur et protection contre la surintensité en amont."
      },
      {
        "n": "Trappe",
        "label": "Terre de la trappe",
        "desc": "Ne pas débrancher le câble de terre de la trappe d'inspection ; la remettre en place câble de terre branché."
      },
      {
        "n": "SC · COM",
        "label": "Lumières de lisse ALED/4C – ALED/6C",
        "desc": "Sur la B70/1T : rouge (ou marron) sur SC, noir (ou bleu) sur COM ; mode d'allumage par le paramètre A8 (05 à 09)."
      },
      {
        "n": "Centrale",
        "label": "B70/1T",
        "desc": "Commandes, sécurités, paramètres et apprentissage : voir la fiche de la carte B70/1T (A1 = 04 WAY/004, 05 WAY/005 – /006)."
      }
    ],
    "installation": [
      "Contrôles : matériel en bon état, limites d'emploi respectées, encombrement libre, socle béton fait dans les règles, à niveau et propre.",
      "Plaque de fondation : fouille 1 m × 1 m × 0,4 m remplie de béton armé ; monter les 4 pattes d'ancrage (écrou inférieur vissé jusqu'au bout du filetage, cote minimale Z 40 mm) ; noyer la plaque au ras de la surface, parfaitement à niveau, gaines sortant de quelques cm au centre. Attention au sens de pose : le côté inspection doit être accessible depuis l'intérieur du site. Sur surface existante : 4 chevilles à expansion (non fournies). Trous supplémentaires A pour plus d'adhérence (2 sur KT251, 5 sur KT252).",
      "Armoire : retirer rondelles et écrous des pattes, ouvrir la trappe (clé 90° sens horaire) sans débrancher son câble de terre, poser l'armoire sur la plaque (pattes dans les 4 trous), orienter, remettre rondelles et écrous et serrer fermement.",
      "Installation à gauche : débloquer, tourner le balancier (fig. 7), déplacer la butée mécanique, rebloquer ; changer aussi la position du ressort et de la centrale, et le paramètre 71.",
      "Lisse : débloquer, tourner le balancier jusqu'à la butée pour poser la lisse à l'horizontale, rebloquer ; couvercle d'arbre [B] dans le moyeu [A] jusqu'à la butée, graisser les vis M12 × 160 (M14 × 160 sur WAY/006) à la graisse EP lithium ; retirer capuchon [E], support [G], caoutchouc [H] et profilé [I] sur au moins 250 mm (WAY/004) ou 400 mm (WAY/005, /006) ; collier [M] dans la lisse, glisser la lisse dans le support et la fixer avec les vis M8 [O] ; couvercle plastique [P] et collier [M] avec vis 4,2 × 13 ; remonter profilé, caoutchouc, support (vis 2,9 × 19) et capuchon (vis 4,2 × 13).",
      "Ressort : débloquer, lisse verticale (ouverture totale), choisir le ressort selon le tableau (lisse, coupe, accessoires), partie colorée vers le haut, crochet sur la structure fixe, vis M10 × 40 dans l'œillet du tendeur et dans le trou adapté du balancier (rondelles, écrou autobloquant M10) ; graisser articulations et extrémités (EP lithium, RS/GR2/100).",
      "Équilibrage : amener la lisse à 45° à la main et la lâcher. Elle monte : réduire la tension ; elle descend : l'augmenter (desserrer les écrous [A], tourner le ressort [B] sens antihoraire pour diminuer, horaire pour augmenter), puis serrer fermement. Graisser légèrement le ressort contre la rouille ; siliconer le passage des câbles à la base.",
    "Appui fixe obligatoire (repère « 1 » du tableau des ressorts) pour la lisse seule et avec grille : BA/68/4, BA/75/5, BA/91/6 et 2 × BA/91/3 ; jamais avec l'appui mobile.",
      "Butées mécaniques : débloquer, régler l'ouverture [AP] et la fermeture [CH] complètes avec les butées, rebloquer (figure 13 = barrière à gauche ; à droite, faire symétrique).",
      "Raccordements et apprentissage : voir la fiche B70/1T."
    ],
    "notes": [
      "Déblocage (hors tension, barrière arrêtée, lisse en position FERMÉE, personne dans le rayon d'action) : tourner la trappe cache-serrure, introduire la clé et la tourner de 230° sens horaire, déplacer la lisse à la main. Rebloquer : clé 230° sens antihoraire, la retirer, refermer la trappe. Si la lisse a été modifiée ou mal équilibrée, elle peut monter ou descendre brusquement au déblocage.",
      "Ressorts WAY/006 : si l'un des deux ressorts casse, remplacer l'ensemble des deux.",
      "Entretien conseillé au moins tous les 6 mois : serrage des vis, verres des photocellules (chiffon humide, sans solvant), graissage EP lithium des articulations, raccordements, déblocage, lisse, végétation ; puis sécurités, détection d'obstacles, absence de risque de soulèvement, forces (EN 12445).",
      "Longueur de lisse : le chapitre « Limites d'emploi » dit « jusqu'à 5 m » dans les deux notices, y compris celle du WAY/006 (lisse jusqu'à 6 m).",
      "Temps de manœuvre WAY/006 : 6 – 18 s dans la notice de la barrière ; la notice B70/1T donne 90° en 5 à 17 s pour WAY/005 – /006 (paramètres 40 / 41).",
      "Le texte anglais des ressorts indique « purple – Ø65 » au lieu de Ø56.",
      "Accessoires : appuis fixes BAFS/01 à /04 (plaque KT231), appui mobile BAMS/01 (rallonge BAMS/01/EXT), grille BARK/02 (2 m), bandes réfléchissantes R99/BASB20, chargeur B71/BC, graisse RS/GR2/100."
    ]
  },
  {
    "id": "roger-bionik",
    "nom": "BIONIK (barrières)",
    "marque": "Roger",
    "couleur": "#5b4aa8",
    "categorie": "Barrière levante brushless (motorisation)",
    "modeles": "BI/004 (BIONIK4) · BI/001PE · BI/004HP · BI/006 · BI/008 (BIONIK8) — versions /115 et /IS (inox AISI 304) — centrale CTRL intégrée",
    "source": "Notices Roger BI/004 IS161 Rev.13, BI/004HP – BI/006 – BI/001PE IS185 Rev.13, BI/008 IS194 Rev.13, plaque KT240 IS171 Rev.04 (versions françaises)",
    "resume": "Barrières brushless 36 V avec centrale CTRL et encodeur absolu intégrés, livrées pour une installation à DROITE (vue côté trappe d'inspection). Lisse jusqu'à 3 m (BI/001PE), 4 m (BI/004, BI/004HP), 6 m (BI/006) ou 8 m (BI/008).",
    "specs": [
      [
        "Alimentation",
        "230 V~ 50/60 Hz ±10 % (115 V~ sur les versions /115) · moteur 36 V~ · accessoires 24 V="
      ],
      [
        "Puissance de démarrage",
        "BI/004 220 W · BI/001PE 450 W · BI/004HP 220 W · BI/006 220 W · BI/008 300 W"
      ],
      [
        "Courant moteur",
        "BI/004 0 – 15 A · BI/001PE, BI/004HP, BI/006 max 15 A · BI/008 0 – 18 A"
      ],
      [
        "Couple",
        "BI/004 0 – 200 Nm · BI/001PE et BI/004HP 10 – 200 Nm · BI/006 10 – 300 Nm · BI/008 10 – 400 Nm"
      ],
      [
        "Temps d'ouverture / fermeture",
        "BI/004 : 2 – 6 s (lisse 3 m), 3 – 6 s (lisse 4 m) · BI/001PE 2 – 4 s · BI/004HP 3 – 6 s · BI/006 4 – 8 s · BI/008 9 – 29 s"
      ],
      [
        "Cycles par jour (24 h)",
        "BI/004 5000 · BI/001PE 8000 · BI/004HP 5000 · BI/006 4000 · BI/008 2500 (essais internes à +25 °C avec la lisse maxi, pas des valeurs maxi)"
      ],
      [
        "Usage",
        "BI/004 continu · BI/001PE, BI/004HP, BI/006, BI/008 super intensif"
      ],
      [
        "Protection, température, bruit",
        "IP54 · −20 °C à +55 °C · < 70 dB(A)"
      ],
      [
        "Déblocage",
        "BI/004 : clé à cylindre standard, 90° · BI/001PE, /004HP, /006 : cylindre européen · BI/008 : cylindre DIN ; ces trois-là : 2 tours complets · force < 1,6 Nm"
      ],
      [
        "Centrale",
        "CTRL (BI/004 à partir du firmware r3.25 ; BI/001PE : CTRL/P)"
      ],
      [
        "Batteries",
        "Kit BI/BAT/KIT avec chargeur BI/BCHP en option"
      ],
      [
        "Dimensions",
        "BI/004 : hauteur 1203 mm (axe de lisse 890 mm), 280 × 210 mm, lisse ≤ 3000 / 4000 mm · BI/001PE, /004HP, /006 : hauteur 1237 mm (axe 900, lisse à 845 mm du sol), 380 × 270 mm, lisse ≤ 2850 / 3850 / 5850 mm · BI/008 : hauteur 1237 mm, 492 × 270 mm, lisse ≤ 8000 mm"
      ],
      [
        "Ressorts",
        "BI/004 : SP/48/G14 (marron), SP/48/01 (vert), SP/61/01 (bleu), SP/72/01 (rouge) · BI/001PE, /004HP, /006 : SP/61/01 (bleu), SP/72/01 (rouge), SP/83/01 (jaune), SP/85/01 (gris) · BI/008 : jeu SP/85/AS/02"
      ],
      [
        "Lisses",
        "BI/004 : BA/68/3, BA/68/4 · BI/001PE, /004HP, /006 : BA/91/3, BA/91/4, BA/91/6 (anciennes BA/90/…) · BI/008 : BA/128/4 (2 × 4,1 m assemblées = 8,2 m)"
      ]
    ],
    "raccordement": [
      {
        "n": "L · N · ⏚",
        "label": "Alimentation",
        "desc": "Câble à double isolation 3 × 2,5 mm² par le passe-câble caoutchouc à gauche du boîtier de centrale : L marron, N bleu, terre jaune / vert ; bloquer avec les serre-câbles fournis. Gaine entrant d'au moins 50 mm par les trous de la plaque. Interrupteur omnipolaire (≥ 3 mm), disjoncteur et protection contre la surintensité en amont."
      },
      {
        "n": "FT1 / FT2",
        "label": "Photocellules",
        "desc": "F4ES (G90/F4ES sur BI/001PE, /004HP, /006, /008) des deux côtés de l'armoire, à 50 ou 100 cm ; bornes COM-FT1 / FT2 de la centrale."
      },
      {
        "n": "LIGHT",
        "label": "Clignotant de tête",
        "desc": "BI/BLED (BI/004), BI/BLED/6, BI/BLED/8 : préinstallé dans la tête, connecteur sur la borne LIGHT de la centrale."
      },
      {
        "n": "±BATTERY",
        "label": "Kit batteries",
        "desc": "Fils rouge, noir et bleu sur les batteries ; +BATTERY fil rouge, −BATTERY fil noir ; carte BI/BCHP dans son connecteur."
      },
      {
        "n": "Centrale",
        "label": "CTRL",
        "desc": "Commandes, sécurités, paramètres et apprentissage : voir la fiche de la carte CTRL."
      }
    ],
    "installation": [
      "Contrôles : matériel en bon état, limites d'emploi respectées, encombrement libre, socle béton fait dans les règles, à niveau et propre.",
      "Plaque de fondation : fouille 1 m × 1 m × 0,4 m (BI/008 : 1,5 m × 1 m × 0,5 m) remplie de béton armé ; pattes d'ancrage montées (écrou inférieur jusqu'au bout du filetage, cote Z mini 40 mm) ; plaque au ras du sol, parfaitement à niveau, gaines sortant de quelques cm au centre ; côté inspection accessible depuis l'intérieur du site. Sur surface existante : 4 chevilles à expansion (6 sur BI/008). BI/004 : plaque KT240.",
      "Armoire : retirer rondelles et écrous, ouvrir la trappe (clé 90° sens horaire), poser l'armoire (pattes dans les trous à anneau), orienter, remettre rondelles et écrous et serrer fermement.",
      "Installation à gauche : débloquer, tourner le balancier, déplacer la butée mécanique, rebloquer ; ressort et paramètre 71 à adapter.",
      "Lisse BI/004 (BA/68) : balancier en butée pour lisse horizontale ; support de lisse [C] sur le vilebrequin [D] avec 1 mm maxi entre support et armoire ; vis TCEI M8 × 35 [E1-E3] serrées fort ; lisse fixée par vis M8 × 20 [P] (profil N retiré d'au moins 200 mm).",
      "Lisse BI/001PE – /004HP – /006 (BA/91) : base de support [A] sur la bride [C] (vis M10 × 35), joint M2 entièrement dans la lisse, bague [L], lisse dans son logement, bandes de jonction [F] avec vis M10 × 20, couvercle alu [G] avec vis M8 inox [H].",
      "Lisse BI/008 (BA/128/4) : voir la fiche « Lisses et lumières ALED ».",
      "Ressort (BI/004, BI/001PE, /004HP, /006) : lisse verticale, ressort choisi selon le tableau, partie colorée en haut, fixé au balancier (BI/004 : trous SX1 / SX2 ouverture à gauche, DX2 / DX3 à droite ; HP / 006 : trous A-1 = plus tendu, C-3 = moins tendu) et à la traverse ; graisser au lithium (RS/GR2/100).",
      "Ressorts BI/008 (SP/85/AS/02) : curseur CU1 ou CU2 (pas 26 / 24 mm) sur le balancier, plus à l'extérieur si la lisse est plus lourde ; ressorts sur la traverse (trou A pour lisse lourde). Ne pas démonter le roulement [S] (3 éléments).",
      "Équilibrage : lisse à 45°, la lâcher. Elle monte : réduire la tension ; elle descend : l'augmenter (écrous [A], tourner le ressort ; BI/008 : traverse [B] vers le haut = plus tendu). Serrer, graisser légèrement le ressort, siliconer le passage des câbles.",
      "Lisse ≥ 4 m : appui fixe BAFS ou appui mobile BAMS obligatoire (BI/004HP, /006, /008) ; certaines configurations imposent l'appui BAFS/05 à aimant (voir tableaux des ressorts).",
      "Butées mécaniques : débloquer, régler ouverture [AP] et fermeture [CH] complètes, rebloquer.",
      "Déblocage côté opposé (BI/001PE, /004HP, /006, /008) : déplaçable ; à barrière bloquée, le bouchon VERT des goupilles doit être tourné vers la trappe d'inspection, sinon il est mal monté."
    ],
    "notes": [
      "Déblocage (hors tension, lisse FERMÉE, personne dans le rayon d'action). BI/004 : ouvrir la trappe cache-serrure, clé 90° sens horaire, ouvrir entièrement la trappe de déverrouillage, déplacer la lisse ; rebloquer en refermant la trappe (clé 90° sens horaire, attention aux doigts), puis clé 90° sens antihoraire, retirer, refermer. BI/001PE, /004HP, /006, /008 : clé 2 tours complets sens antihoraire pour débloquer, 2 tours sens horaire pour rebloquer. Lisse modifiée ou mal équilibrée : elle peut monter ou descendre brusquement.",
      "BI/006 : en zone très ventée ou en usage super intensif avec accessoires (grille, appui mobile, aimant) ou sans accessoires au-delà de 500 cycles / jour, utiliser l'articulation JNT/BA/91.",
      "BI/008 : la description des modèles parle de « barrière jusqu'à 4 m » alors que les limites d'emploi et le tableau indiquent jusqu'à 8 m. Repris tels quels.",
      "BI/004 : le texte du réglage de tension indique le sens horaire pour réduire la tension avec les ressorts /01, mais le sens antihoraire pour réduire avec le ressort SP/48/G14.",
      "Le modèle BI/001PE n'apparaît pas dans le paramètre A1 de la fiche CTRL (notice IS88) ; il utilise la centrale CTRL/P.",
      "Entretien au moins tous les 6 mois : serrage, graissage EP lithium, raccordements, déblocage, lisse ; puis sécurités, détection d'obstacles, absence de risque de soulèvement, forces (EN 12445).",
      "Accessoires : appuis fixes BAFS/01 à /05, appui mobile BAMS/01 (rallonge /EXT), grille BARK/02, bandes R99/BASB20, lumières ALED, barre DIN KT239 (BI/008)."
    ]
  },
  {
    "id": "roger-lisses-aled",
    "nom": "Lisses BA et lumières ALED",
    "marque": "Roger",
    "couleur": "#5b4aa8",
    "categorie": "Accessoires de barrière (lisses, lumières)",
    "modeles": "BA/68/3 · BA/68/4 (BI/004, WAY/004) · BA/90/3 – /4 – /6 et BA/91/3 – /4 – /6 (BIONIK, WAY/006) · BA/128/4 (BI/008) · ALED/4C, /6C, /8C, /12C (+ /RGB)",
    "source": "Notices Roger BA/68 IS168 Rev.02, BA/90 – BA/91 IS93 Rev.07, BA/128/4 IS197 Rev.00, ALED IS92 Rev.09 (versions françaises)",
    "resume": "Montage des lisses elliptiques en aluminium sur les barrières BIONIK et WAY, et des bandes LED de lisse ALED (rouges ou RGB).",
    "specs": [
      [
        "BA/68/3 – /4",
        "Lisse elliptique aluminium 90 × 39,6 mm, pour BI/004 et WAY/004"
      ],
      [
        "BA/90 / BA/91",
        "Anciens codes BA/90/3, /4, /6 (BIONIK seulement), nouveaux BA/91/3, /4, /6 (BIONIK et WAY) ; raccords de support différents (tableau de compatibilité) ; WAY/006 : lisse à partir de la version V2"
      ],
      [
        "BA/128/4",
        "Deux lisses de 4,1 m (D1, D2) assemblées par le joint M1 : 8,2 m, pour BI/008"
      ],
      [
        "ALED",
        "24 V ±10 % · IP54 · −20 °C à +55 °C · coupe possible tous les 1000 mm"
      ],
      [
        "Puissance ALED",
        "4C 4 W (RGB 14 W) · 6C 5 W (RGB 21 W) · 8C 7 W (RGB 28 W) · 12C 10 W (RGB 42 W) ; RGB = 3 couleurs allumées ensemble, diviser par 3 pour le rouge ou le vert seul"
      ],
      [
        "Longueur / poids ALED",
        "4C 4500 mm, 0,22 kg (RGB 0,32) · 6C 7500 mm, 0,29 kg (0,39) · 8C 9500 mm, 0,37 kg (0,47) · 12C 13500 mm, 0,52 kg (0,62)"
      ]
    ],
    "raccordement": [
      {
        "n": "+LUCI · COM",
        "label": "ALED sur BIONIK (CTRL)",
        "desc": "Fil marron (ou rouge) sur +LUCI, bleu (ou noir) sur COM ; mode d'allumage par le paramètre 79 de la centrale."
      },
      {
        "n": "SC · COM",
        "label": "ALED sur WAY (B70/1T)",
        "desc": "Fil marron (ou rouge) sur SC, bleu (ou noir) sur COM ; mode d'allumage par le paramètre A8."
      },
      {
        "n": "RGB",
        "label": "ALED/…/RGB",
        "desc": "Raccordement par le module B73/LTM (voir sa notice)."
      }
    ],
    "installation": [
      "Toujours débloquer la barrière, tourner le balancier pour mettre la lisse à l'horizontale, puis rebloquer avant de monter la lisse.",
      "Recoupe BA/90 (BIONIK) : dévisser les 3 vis [A], retirer les bouchons [B], la goupille [C] et le caoutchouc [D] ; raccourcir lisse, caoutchouc et protection LED côté support ; remonter. BA/91 : raccourcir la protection LED N1 et le caoutchouc P1 de 265 mm côté support (après avoir retiré bouchon et bride) ; recoupe : vis [A], bouchon [B], 4 vis [C] et couvercle [D], protection LED [E] et caoutchouc [F] à raccourcir côté support.",
      "BA/128/4 : retirer bouchon Q1 et bride R1 (à ne plus utiliser), raccourcir la protection LED N1 et le caoutchouc P1 de 285 mm côté support et couper l'excédent de caoutchouc à l'autre bout ; N2 et P2 ne se coupent pas. Joint M1 enfoncé de 375 mm dans D1, 10 vis autotaraudeuses (5 dessus, 5 dessous, tous les 60 mm), D2 sur l'autre moitié, même fixation. Socle [A] sur la bride [C] (8 vis M12 × 30), joint M2 entièrement dans la lisse + 10 vis, bague [I], lisse dans le support, bride acier [F] (8 vis M10 × 20 + 4 vis autotaraudeuses), N1 puis N2, P1 puis P2, couvercle alu [G] (6 vis M8 inox), bride R2 et bouchon Q2.",
      "ALED : raccourcir si besoin (retirer le terminal noir [A], couper sur les contacts +24V / GND, jamais sur A – B, recoller le terminal au silicone). BIONIK4 / WAY : enfiler la bande dans le profilé PVC, plier l'excédent dans le profilé alu (collier [G]), passer le câble par le trou central du support et ressortir côté opposé au moteur. BIONIK1 / 4HP / 6 : LED orientées vers l'extérieur dans les deux profilés transparents, caoutchouc adhésif au coude. BA/75/5 : retirer la partie du rabat côté plaque de recouvrement.",
      "Test : barrière débloquée, manœuvrer la lisse à la main et vérifier que le câble ne se tend pas ; contrôler toutes les LED en mouvement. Entretien tous les 6 mois."
    ],
    "notes": [
      "Compatibilité ALED (tableau de la notice) : ALED/4C avec BI/004, BI/004HP, BI/001PE, WAY/004 et lisses BA/68/3, BA/68/4, BA/91/3, BA/91/4 ; ALED/6C avec BI/006, BI/001PE, WAY/005, WAY/006 et BA/75/5, BA/90/3, BA/91/6 ; ALED/8C avec BI/004, BI/004HP, BI/008 et BA/90/4, BA/128/4 ; ALED/12C avec BI/006 et BA/90/6. Voir le schéma pour le détail RGB.",
      "Le tableau ALED indique l'ALED/4C pour BI/001PE et l'ALED/6C pour BI/001PE également. Repris tel quel.",
      "Deux colliers de support de lisse existent (ancien / nouveau code) : identifier le bon raccord avec le tableau de compatibilité de la notice BA/90 – BA/91."
    ]
  },
  {
    "id": "roger-dld",
    "nom": "DLD1/24 · DLD2/24 (détecteur de boucle)",
    "marque": "Roger",
    "couleur": "#5b4aa8",
    "categorie": "Détecteur de boucle magnétique (rail DIN)",
    "modeles": "DLD1/24 (1 boucle) · DLD2/24 (2 boucles) — boucles d'induction",
    "source": "Notice Roger DLD1/24 – DLD2/24 IS130 Rev.00 (version française) et « Pose de boucles » IS130 Rev.00 FR",
    "resume": "Détecteur de boucle inductive sur rail DIN pour portails industriels, barrières et parkings : une boucle posée dans le sol détecte les véhicules (masses métalliques), pas les personnes. Écran LCD, touches Mode (Sim1) et Data (Sim2), mode simulation avec mesure de l'inductance.",
    "specs": [
      [
        "Alimentation",
        "24 V AC/DC : 24 V AC −20 % à +10 % (2 VA max) ou 24 V DC −10 % à +20 % (1,5 W max) · version LVAC : 100 à 240 V AC ±10 % 50/60 Hz (2,9 VA max)"
      ],
      [
        "Inductance de boucle",
        "20 à 1000 µH maxi, idéal 80 à 300 µH"
      ],
      [
        "Câble boucle – détecteur",
        "20 à 40 µH : 100 m max en 1,5 mm² · > 40 µH : 200 m max en 1,5 mm² · torsadé au moins 20 fois par mètre"
      ],
      [
        "Résistance de boucle",
        "< 8 Ω câble d'alimentation compris"
      ],
      [
        "Relais",
        "Sortie boucle : 240 V AC 2 A / 30 V DC 1 A (AC-1) · alarme : 40 V AC/DC 0,3 A (AC-1)"
      ],
      [
        "Boîtier",
        "22,5 × 94 × 88 mm, rail DIN EN 50 022, bornes enfichables, IP20, −20 °C à +60 °C, humidité < 95 % sans condensation"
      ],
      [
        "Fréquence",
        "20 à 150 kHz selon la boucle ; 4 réglages F1 à F4 pour éviter la diaphonie"
      ],
      [
        "Boucle (spires)",
        "Périmètre 3–6 m : 5 spires · 6–10 m : 4 · 10–20 m : 3 · 20–25 m : 2 ; largeur ≥ 0,8 m ; rapport des côtés 1:1 à 4:1"
      ]
    ],
    "raccordement": [
      {
        "n": "A1 · A2",
        "label": "Alimentation",
        "desc": "Selon la tension indiquée sur le côté de l'appareil (24 V AC/DC ou 100–240 V AC)."
      },
      {
        "n": "L3 · L4",
        "label": "Boucle (DLD1/24)",
        "desc": "Câble torsadé au moins 20 fois par mètre. Sur DLD2/24 : boucle 1 sur L3-L4, boucle 2 sur L5-L6."
      },
      {
        "n": "11 · 12 · 14",
        "label": "Relais sortie 1",
        "desc": "11 commun, 12 NF, 14 NO."
      },
      {
        "n": "21 · 22 · 24",
        "label": "Relais sortie 2",
        "desc": "21 commun, 22 NF, 24 NO (sortie 2 activée par la fonction 8 sur l'appareil 1 boucle, sortie de la boucle 2 sur DLD2/24)."
      },
      {
        "n": "31 · 32 · 34",
        "label": "Relais d'alarme (option)",
        "desc": "31 commun, 32 NF, 34 NO."
      }
    ],
    "installation": [
      "Boucle : rainure de 5 à 8 mm de large et 30 à 55 mm de profondeur (toron 1,5 mm², gaine nylon si bitume chaud), coins fraisés à 45° ou percés, rainure propre et sèche ; poser le fil, mesurer l'inductance avec le détecteur (mode simulation) avant de sceller ; après séchage, résistance d'isolement > 10 MΩ sous 250 V.",
      "Distances : armatures béton ≥ 5 cm (le plus possible), objets métalliques mobiles ≥ 1 m, fixes ≥ 0,5 m ; câble d'alimentation blindé près d'autres câbles, de lignes haute tension ou sur grande distance (blindage à la terre d'un seul côté, la boucle elle-même n'est jamais blindée).",
      "Inductance approximative : L (µH) ≈ U × (N² + N), U = périmètre en m, N = spires ; ajouter environ 1 à 1,5 µH par mètre de câble d'alimentation.",
      "Géométrie : boucle aussi large ou un peu moins large que le véhicule le plus large à détecter ; deux-roues : trapèze ou parallélogramme peu profond ; espaces exigus (près d'une porte métallique) : boucle en 8 ; logique de direction : 2 boucles, distance entre boucles ≤ 0,5 × longueur du véhicule.",
      "Sous pavés : boucle préfabriquée dans un caniveau 15 × 15 mm dans le lit de sable, mesurer résistances et inductance, sceller, remettre sable et pavés (ne pas fraiser les pavés).",
      "Détecteur : rail DIN dans l'armoire ; « Mode » une fois pour entrer en configuration, « Data » pour changer la valeur (voir tableau 4.11)."
    ],
    "codes": [
      [
        "E001 / E002",
        "Coupure de la boucle 1 / boucle 2."
      ],
      [
        "E011 / E012",
        "Court-circuit de la boucle 1 / boucle 2."
      ],
      [
        "E101",
        "Sous-tension."
      ],
      [
        "E102",
        "Surtension."
      ],
      [
        "E201 / E202",
        "Erreur de mémoire."
      ],
      [
        "E301 / E302",
        "Boucle 1 / boucle 2 trop grande."
      ],
      [
        "E311 / E312",
        "Boucle 1 / boucle 2 trop petite."
      ],
      [
        "Journal",
        "Les 5 derniers défauts : appui bref sur « Data » pour les faire défiler (1 = le plus récent) ; « Data » 4 s efface le journal."
      ],
      [
        "LED",
        "Rouge + vert : démarrage · vert : en service · rouge + vert : configuration · vert clignotant : boucle occupée · rouge clignotant : défaut · rouge + vert clignotant : simulation."
      ],
      [
        "Reset 1",
        "« Mode » 2 s : réinitialisation de la ou des boucles."
      ],
      [
        "Reset 2",
        "« Mode » + « Data » 8 s : retour aux réglages d'usine (sauf le journal) et réinitialisation des boucles."
      ]
    ],
    "notes": [
      "Réglages (fonction : valeurs, usine *) : 0 fonction de base (1 portails*, 2 barrières, 3 courant de repos, 4 logique de direction, 0 boucle 2 désactivée) · 1 temps (∞* présence, temporisation de démarrage, de coupure, impulsion à l'occupation / à la libération, présence limitée) · 2 unité de temps (0,1 s, 1 s*, 1 min, 1 h) · 3 facteur 1* à 99 · 4 sensibilité 1 (faible) à 9 (forte), usine 4 · 5 ASB augmentation automatique de sensibilité (désactivée* / activée, utile pour les timons de remorque) · 6 fréquence F1 à F4* · 7 logique de direction (les deux*, 2 vers 1, 1 vers 2) · 8 sortie 2 (désactivée / activée) · 9 sécurité défaillance secteur (inactive* / places de parking ; avec 9 = 1 la sensibilité est limitée à 1–5). Détail : schéma « Paramètres ».",
      "Mode simulation : Sim1 et Sim2 ensemble 2 s ; permet de simuler l'occupation des boucles, d'activer les relais et l'alarme, et d'afficher l'inductance de chaque boucle en µH ; quitter : 2 s.",
      "Défauts fréquents : véhicules non détectés (sensibilité trop faible, pas assez de spires, câble enroulé au lieu d'être raccourci, diaphonie) ; détection sans véhicule (câble non torsadé ou non blindé, fil qui bouge, métal ou perturbations proches) ; défauts par temps de pluie (isolement ≤ 1 MΩ ou jonction non étanche : remplacer) ; diaphonie entre détecteurs : fréquences différentes ou nombre de spires différent, ou détecteur 2 canaux.",
      "Le document « Pose de boucles » écrit « 1 à 1,5 H par mètre » et « entre 80 et 300 H » (unité µH manquante) ; la notice du détecteur donne 80 à 300 µH."
    ]
  },
  {
    "id": "roger-bconnect",
    "nom": "B74/BCONNECT (module Wi-Fi)",
    "marque": "Roger",
    "couleur": "#5b4aa8",
    "categorie": "Module Wi-Fi de programmation des centrales Roger",
    "modeles": "B74/BCONNECT — pour B70/1DC (FW P2.30 et +), B70/1DCHP (P2.30), B70/1T (r1.00), B70/1THP (r1.00), B70/2ML (P1.05), EDGE1 (P4.30), F70/IPU36 (R1.50), CTRL (P4.30)",
    "source": "Notice Roger B74/BCONNECT IS231 Rev.01 (version française)",
    "resume": "Module Wi-Fi enfiché sur la centrale (connecteur EXP ou WIFI) : il crée un point d'accès Wi-Fi pour régler, diagnostiquer et mettre à jour la centrale depuis un smartphone, une tablette ou un PC (navigateur, 192.168.10.1), en direct ou par le cloud.",
    "specs": [
      [
        "Alimentation",
        "5 V DC (par la centrale), 80 mA"
      ],
      [
        "Wi-Fi",
        "802.11 b/g/n, 2412 à 2484 MHz, WPA / WPA2 / WEP / TKIP / AES"
      ],
      [
        "Température, dimensions",
        "−20 °C à +55 °C · 14 × 43 × 34 mm · 0,02 kg emballé"
      ],
      [
        "Réseau",
        "ROGER-BCON-[adresse MAC] · clé WPA au dos du module · adresse 192.168.10.1"
      ],
      [
        "Mot de passe installateur d'usine",
        "bconn1234 (à changer à la première occasion)"
      ]
    ],
    "raccordement": [
      {
        "n": "EXP / WIFI",
        "label": "Connecteur de la centrale",
        "desc": "Insérer le module dans le bon sens, centrale sous tension (pas besoin de couper). Attendre quelques secondes la création du point d'accès. Vérifier le firmware minimal de la centrale : la présence du connecteur ne suffit pas."
      },
      {
        "n": "Paramètre",
        "label": "Activation sur la centrale",
        "desc": "Selon la centrale (ex. B70/1T : L0 01 et veille low power désactivée L1 00)."
      }
    ],
    "installation": [
      "Connexion directe (P2P) : activer le Wi-Fi du téléphone, choisir le réseau ROGER-BCON-[MAC], saisir la clé WPA du dos du module, ouvrir un navigateur à l'adresse 192.168.10.1 : page « commande à distance » (ouvrir, fermer, piéton, état du portail, secteur ou batterie).",
      "Espace installateur : LOGIN en bas à droite, mot de passe (usine bconn1234). Changer le mot de passe : Connexion → modifier le mot de passe. Oublié : Connexion → modifier le mot de passe → mot de passe oublié → questions de sécurité.",
      "Réseau externe (cloud) : espace installateur → Configuration B-CONNECT → Recherche réseaux → choisir le Wi-Fi et saisir son mot de passe ; la LED verte fixe confirme la connexion au routeur et au cloud.",
      "Mot de passe de la centrale : Centre de contrôle → Gestion des mots de passe contrôleur → saisir → Enregistrer (paramètres visibles mais non modifiables) ; pour déverrouiller : saisir le mot de passe → DÉVERROUILLER LA CENTRALE (bouton vert). L'installateur est tenu de définir un mot de passe sur la centrale.",
      "Mise à jour d'une centrale : télécharger le fichier « .chx » depuis l'espace B2B Roger (B-CONNECT → Mise à jour centrale), se connecter en P2P, espace installateur → MISE À JOUR CENTRALE → choisir le fichier → Envoyer (il va dans la mémoire du module ; effacer d'anciens .chx si besoin) → le choisir dans la liste → Mettre à jour la centrale. La centrale est indisponible pendant la mise à jour puis redémarre.",
      "Mise à jour du module : module relié à Internet depuis au moins 60 s, Configuration B-CONNECT → « Version pouvant être mise à jour » → Mettre à jour ; le module redémarre.",
      "Mouvement d'urgence (depuis l'espace installateur) : homme présent, vitesse réduite, détection d'obstacles plus sensible, clignotement spécial ; L-ES résidentiel (fermé – ouverture – ouvert – fermeture – fermé), L-EM copropriété (ouverture seulement)."
    ],
    "codes": [
      [
        "LED rouge 0,5 s / 8 s",
        "Le module communique avec la centrale."
      ],
      [
        "LED rouge 0,5 s / 0,5 s",
        "Mise à jour du firmware de la centrale en cours."
      ],
      [
        "LED rouge 1 s / 1 s",
        "Transfert du fichier de mise à jour vers la mémoire du module."
      ],
      [
        "LED verte fixe",
        "Connecté au routeur et au cloud."
      ],
      [
        "LED verte 0,5 s / 8 s",
        "Connecté au routeur."
      ],
      [
        "LED verte 1 s / 1 s",
        "Mise à jour du module en cours."
      ],
      [
        "Bouton RESET",
        "Réinitialisation temporaire : coupe le point d'accès Wi-Fi et redémarre le module ; refaire la connexion P2P si besoin."
      ],
      [
        "Mot de passe réseau non reconnu",
        "Ressaisir la clé Wi-Fi (WPA-KEY)."
      ],
      [
        "Page incomplète",
        "Trop de rechargements : effacer l'historique et le cache du téléphone, se reconnecter."
      ],
      [
        "L-ES / L-EM",
        "Mouvement d'urgence résidentiel / copropriété actif."
      ]
    ],
    "notes": [
      "Le texte de la notice cite « BT70/1THP », la figure indique « B70/1THP ».",
      "Sur la B70/1T, avec A1 02 ou 03 (TW90 High Speed ou réversible), le B74/BCONNECT reste toujours actif (voir la fiche B70/1T)."
    ]
  },
  {
    "id": "roger-h70el",
    "nom": "H70/EL (alimentation électroserrure)",
    "marque": "Roger",
    "couleur": "#5b4aa8",
    "categorie": "Module d'alimentation d'électroserrure 12 V~",
    "modeles": "H70/EL — pour centrale H70/200AC (aussi utilisé avec H70/104AC – 105AC selon leur notice)",
    "source": "Notice Roger H70/EL IS74 Rev.00 (version anglaise, pas de version française)",
    "resume": "Module à fixer dans le boîtier de la H70/200AC : il alimente une électroserrure 12 V~ (16 VA max) et permet de raccorder et protéger un clignotant 230 V (R92/LR1, R92/LR2). Seulement en réseau 230 V.",
    "specs": [
      [
        "Alimentation",
        "230 V~ 50 Hz, 350 mA max"
      ],
      [
        "Électroserrure",
        "12 V~, 16 VA max"
      ],
      [
        "Clignotant",
        "230 V~ 50 Hz, 40 W max"
      ],
      [
        "Fusibles",
        "F1 T1A (transformateur et clignotant) · F2 T2A (électroserrure)"
      ],
      [
        "Température, protection, dimensions",
        "−20 °C à +60 °C · IP00 · 63 × 101 × 40 mm, 465 g"
      ]
    ],
    "raccordement": [
      {
        "n": "1 N · 2 L",
        "label": "Entrée 230 V",
        "desc": "Alimentation du module."
      },
      {
        "n": "3 · 4",
        "label": "Sortie 230 V~ (clignotant)",
        "desc": "OUTPUT 230 Vac vers le clignotant R92/LR1 ou R92/LR2, protégé par F1 (fig. 1)."
      },
      {
        "n": "5 · 6",
        "label": "Contact de commande du clignotant",
        "desc": "Reliées aux bornes 12-13 (contact COR) de la H70/200AC, qui commutent le clignotant ; sur la fig. 3, 4 est relié à 5 et le contact se trouve entre 5 et 6."
      },
      {
        "n": "7 à 10",
        "label": "Sortie 12 V~ (électroserrure)",
        "desc": "Électroserrure 12 V~ 16 VA, protégée par F2 ; commande par le contact ES (46-47) de la H70/200AC (voir schéma)."
      }
    ],
    "installation": [
      "Fixer le module avec les vis dans le boîtier de la H70/200AC à l'emplacement prévu (fig. 2).",
      "Raccorder la centrale, l'électroserrure et éventuellement le clignotant selon le schéma (fig. 1).",
      "Ne pas utiliser avec un automatisme alimenté en 115 V (notes des notices H70/200AC et H70/104AC)."
    ],
    "notes": [
      "Les numéros de bornes de sortie sont lus sur le schéma de la notice (pas de texte détaillé)."
    ]
  },
    {
      "id": "cardin-cdr842",
      "nom": "CDR842A · CDR852A",
      "marque": "CARDIN",
      "couleur": "#b3122b",
      "categorie": "Photocellules (barrière infrarouge modulé en applique)",
      "modeles": "CDR842A (portée 15 m extérieur / 30 m intérieur) · CDR852A (60 m, avec réglage de sensibilité) — boîtier aluminium IP66",
      "source": "Notice Cardin CDR842-852A ZVL448.03 (10-07-2003), partie française p. 3 et figures p. 6 ; fiche produit Cardin CDR842A",
      "resume": "Paire émetteur (projecteur) + récepteur à infrarouge modulé, sortie par double relais en série. Optique orientable sur rotule autobloquante. Alignée : LED de l'émetteur allumée et LED du récepteur éteinte ; désalignée ou faisceau coupé : LED du récepteur allumée.",
      "specs": [
        [
          "Alimentation",
          "12-24 V ac/dc"
        ],
        [
          "Consommation",
          "12 V : récepteur 45 mA + émetteur 50 mA · 24 V : récepteur 50 mA + émetteur 58 mA"
        ],
        [
          "Portée",
          "CDR842A : 30 m à l'intérieur, 15 m à l'extérieur · CDR852A : 60 m en toutes conditions"
        ],
        [
          "Sortie",
          "Double relais avec contacts en série · 28 W dc / 60 VA ac en charge résistive, 30 V ac/dc max"
        ],
        [
          "Émission",
          "Infrarouge 950 nm, modulation 6,75 kHz (CDR842A) / 6,10 kHz (CDR852A)"
        ],
        [
          "Câble TX ↔ RX",
          "0,2 mm² minimum (Ø 0,5 mm, AWG 24), 100 m maximum"
        ],
        [
          "Orientation",
          "Horizontale 90°, verticale ±30°"
        ],
        [
          "Température, protection",
          "−10 °C à +55 °C (notice) · IP66"
        ]
      ],
      "raccordement": [
        {
          "n": "RX 1 · 2 · 3",
          "label": "Récepteur : 24V · 12V · 0V",
          "desc": "Alimentation 24 V sur 1-3 ou 12 V sur 2-3."
        },
        {
          "n": "RX 4 · 5 · 6",
          "label": "Récepteur : NC · NA · C",
          "desc": "Contact du relais (fig. 6) : C = 6, NA = 5, NC = 4."
        },
        {
          "n": "TX 1 · 2 · 3 · 4",
          "label": "Émetteur : 0V · 0V · 12V · 24V",
          "desc": "Alimentation 24 V sur 4 et 0 V, ou 12 V sur 3 et 0 V."
        }
      ],
      "installation": [
        "Émetteur et récepteur face à face, même axe et même hauteur en principe ; désaxés ou à des hauteurs différentes possible grâce à la rotule (fig. 5).",
        "Plusieurs paires : deux récepteurs du même côté peuvent voir le même émetteur. Pour l'éviter, alterner émetteurs et récepteurs à bonne distance (600 mm minimum dans les parties italienne et anglaise).",
        "Percer avec le gabarit fourni, séparer le couvercle de la base, fixer la base (vis et chevilles), passer les câbles par le presse-étoupe (trou A, étanche IP66 avec le bon tube) ou par l'arrière (trou B défonçable + joint) ; câbler le bornier (fig. 6).",
        "Alimenter et centrer : orienter l'optique jusqu'à ce que la LED du récepteur s'éteigne. Les écrous de la rotule sont autobloquants : ni serrer ni desserrer.",
        "Centrage fin (CDR842A) : testeur calibre 2 V dc sur le TEST POINT du récepteur (polarité marquée sur la carte), orienter jusqu'à lire entre 0,9 et 1 V dc.",
        "CDR852A : sensibilité livrée au minimum (potentiomètre ; sens horaire = moins sensible). Mettre la sensibilité au minimum de lecture, orienter pour le signal maximal, puis corriger la sensibilité jusqu'à lire 1 à 1,5 V dc. Sensibilité élevée à courte distance = déclenchement retardé du relais.",
        "Vérifier le joint, accrocher le couvercle en haut de la base, le rabattre en tournant, serrer à fond les deux vis six pans creux."
      ],
      "notes": [
        "Distance entre paires : la partie française écrit « min. 600 m », les parties italienne et anglaise « 600 mm ».",
        "Exemples d'installation : la partie française renvoie à la fig. 3, les autres langues à la fig. 5.",
        "Température : −10…+55 °C dans la notice, −20…+55 °C dans la fiche produit Cardin.",
        "Fiche produit : orientation horizontale « ±90° », la notice dit « 90° ». La fiche cite aussi les CDR841 / CDR851 (boîtier IP55), non décrites dans cette notice.",
        "Repère du potentiomètre de sensibilité (CDR852A) : « C » au § réglages, « A » au § centrage (fig. 3)."
      ],
      "codes": [
        [
          "LED émetteur allumée",
          "Émetteur alimenté."
        ],
        [
          "LED récepteur éteinte",
          "Faisceau reçu, cellules alignées."
        ],
        [
          "LED récepteur allumée",
          "Cellules non alignées ou faisceau coupé."
        ],
        [
          "Test point 0,9 à 1 V (842A) / 1 à 1,5 V (852A)",
          "Centrage fin correct."
        ]
      ]
    },
    {
      "id": "cardin-slx",
      "nom": "SLX (série)",
      "marque": "CARDIN",
      "couleur": "#b3122b",
      "categorie": "Motoréducteur coulissant 24 Vdc (motorisation)",
      "modeles": "SLX824CB (800 kg) · SLX1024REV (1000 kg, réversible) · SLX1524CB (1500 kg) · SLX3024CB (3000 kg) · SLX24DRACO (1000 kg, rapide)",
      "source": "Notice Cardin SLX ZVL607.01 (01-02-2017, mod. 16-12-2020 ; pages françaises ZVE572 mod. 04-09-2017) : SLX3024 – SLX3024CB, SLX1524 – SLX1524CB, SLX1024REV, SLX824 – SLX824CB, SLX24DRACO ; pages françaises 16 à 20, caractéristiques p. 36, schéma p. 5",
      "resume": "Motoréducteurs 24 Vdc pour portails coulissants, avec programmateur électronique intégré (puissance, logique, chargeur de batterie, récepteur radio) alimenté par un transformateur toroïdal séparé. La programmation et le fonctionnement sur batterie sont dans la notice logicielle MULTI-ECU ZVL608 livrée avec l'automatisme (non fournie ici). Pour la carte décrite dans l'ancienne notice ZVL534, voir la carte CARDIN « Programmateur SLX1524 ».",
      "specs": [
        [
          "Modèles",
          "SLX824CB · SLX1024REV · SLX1524CB · SLX3024CB · SLX24DRACO"
        ],
        [
          "Alimentation",
          "230 Vac · courant 0,9 / 0,9 / 0,9 / 1,1 / 1,7 A · puissance 200 / 200 / 200 / 250 / 380 W"
        ],
        [
          "Moteur",
          "24 Vdc (37 Vdc maximum d'après la description technique) · 110 / 110 / 130 / 160 / 250 W · 3 / 3 / 3,5 / 4,5 / 10 A"
        ],
        [
          "Vitesse",
          "13 / 13 / 9,5 / 8 / 30 m/min"
        ],
        [
          "Couple maxi",
          "57 / 60 / 74 / 90 / 44 Nm"
        ],
        [
          "Facteur de marche",
          "70 % (SLX24DRACO : 50 %)"
        ],
        [
          "Poids de portail",
          "SLX824 800 kg · SLX1024REV 1000 kg · SLX1524 1500 kg · SLX3024 3000 kg · SLX24DRACO 1000 kg"
        ],
        [
          "Récepteur intégré",
          "433,92 / 868,3 MHz · 4 canaux · 8 fonctions · 300 / 1000 codes"
        ],
        [
          "Environnement",
          "−20 °C à +55 °C · IP44 · bruit ≤ 75 dB"
        ]
      ],
      "raccordement": [
        {
          "n": "N · ⏚ · L",
          "label": "Alimentation 230 Vac",
          "desc": "Bornier séparé à 3 voies, passage par le presse-étoupe en bas à droite du circuit. Câble caoutchouc 60245 IEC 57 (ex. 3 x 1,5 mm² H05RN-F), T min. 85 °C ; interrupteur omnipolaire (≥ 3 mm) en amont."
        },
        {
          "n": "MOT · ENCODER",
          "label": "Moteur et encodeur",
          "desc": "Câblés sur la carte (schéma p. 5) ; détails des bornes : notice MULTI-ECU ZVL608."
        }
      ],
      "installation": [
        "Contrôles avant pose : portail lisse jusqu'à 2,5 m ou protégé (photocellules, barre palpeuse), jeu ≤ 15 mm entre parties fixes et mobiles, rail stable et horizontal, espace libre de 50 mm devant le portail fermé, butée d'ouverture indispensable, butées anti-déraillement obligatoires.",
        "Moteur monté d'usine à gauche (vu de l'intérieur) ; pour la droite, régler « Montage Moteur » (notice MULTI-ECU ZVL608).",
        "Plot béton de 350 mm de profondeur, dépassant de 25 mm du sol ; pattes de scellement vissées à la plaque, dépassant de 50 mm (écrous M12) ; câbles par le trou B ; plaque de niveau et propre.",
        "Poser le moteur sur les 4 tiges, le fixer avec 4 écrous et rondelles, régler la hauteur avec les 4 vis sans tête.",
        "Crémaillère : moteur débrayé, poser chaque élément sur le pignon et le fixer ; jeu pignon-crémaillère 1-2 mm (le poids du portail ne doit pas reposer sur le moteur).",
        "Déverrouillage SLX1524 / SLX824 : abaisser la protection A, clé B 180° sens horaire, tourner la manette C de plusieurs tours (5-6) sens horaire jusqu'à la butée. Reverrouiller : manette D sens antihoraire, clé sens antihoraire.",
        "Déverrouillage SLX3024 : pivoter la plaquette, clé un demi-tour sens antihoraire, ouvrir le couvre-manette, manette plusieurs tours sens horaire. SLX24DRACO : clé un demi-tour sens antihoraire = moteur débrayé, commandes inhibées ; sens horaire = embrayé, repositionnement.",
        "SLX1024REV : réversible, ouverture à la main hors tension avec une poussée d'au moins 35 kg ; une serrure électrique est nécessaire pour verrouiller le vantail fermé.",
        "Après un déverrouillage manuel, la position encodeur est perdue : donner 3 commandes ou plus pour que le portail se recale sur les butées.",
        "Accès au coffret : couper l'interrupteur général, desserrer les 2 vis A sur les côtés du couvercle (fig. 11)."
      ],
      "notes": [
        "La description technique parle d'un « système de réduction irréversible avec déverrouillage par clé » pour toute la gamme, alors que le SLX1024REV est réversible.",
        "Crémaillère : la maintenance demande une section de 20 x 20 mm, les accessoires listés sont en 30 x 20 mm (nylon), 22 x 22 mm et 30 x 12 mm (acier).",
        "Accessoires : crémaillères nylon CRENY1 (600 kg), CRENY et CREMP (800 kg), acier SLOAC et SLOAC2 (DRACO et jusqu'à 3000 kg).",
        "Garantie 24 mois ou 50 000 manœuvres si l'entretien est documenté : crémaillère, jeu 1-2 mm, graissage (lubrifiant −20 à +70 °C), charge des batteries.",
        "Usage limité à 70 % (pas d'utilisation continue)."
      ]
    },
    {
      "id": "fadini-combi740",
      "nom": "Combi 740",
      "marque": "Fadini",
      "couleur": "#1b5e9e",
      "categorie": "Vérin hydraulique enterré pour portail battant (motorisation)",
      "modeles": "Combi 740 à 110° ou 175°, Droite (Dx) ou Gauche (Sx) ; versions Normale (N), avec Verrouillage bidirectionnel (BB), avec Frein, avec Régulateur d'écoulement ; caisson zingué ou inox",
      "source": "Notice Fadini Combi 740 (07-2012), pages françaises 33 à 48",
      "resume": "Automatisme hydraulique enterré sous le vantail (l'arbre remplace la charnière basse), centrale hydraulique intégrée, moteur 230 V monophasé. Programmateur conseillé : Elpro 13 exp (voir la carte Fadini).",
      "specs": [
        [
          "Moteur",
          "230 V ±10 % 50 Hz biphasé classe H · 0,18 kW (0,25 CV) rendus · 250 W absorbés · 1,2 A · condensateur 12,5 µF · 1350 tr/min · service S3"
        ],
        [
          "Hydraulique",
          "Pompe P3 0,85 l/min · pression moyenne 1 MPa (10 bar), max 3 MPa (30 bar) · huile Oil Fadini · −20 °C à +80 °C"
        ],
        [
          "Mouvement",
          "110° en 18 s ou 175° en 28 s · couple 250–400 Nm · piston Ø 75 mm, course 52 mm"
        ],
        [
          "Service (110°)",
          "Cycle 18 s ouverture – 30 s pause – 18 s fermeture – 30 s pause : 37 cycles/heure"
        ],
        [
          "Vantail",
          "700 kg à 1,0 m · 400 kg à 2,0 m · 300 kg à 3,0 m · 250 kg à 4,0 m (fig. 7) ; texte des données : 350 kg à 2,8 m"
        ],
        [
          "Divers",
          "IP67 · 27 kg avec accessoires · 475 x 305 x 130 mm · câble 4 x 1 mm² de 2,50 m"
        ]
      ],
      "raccordement": [
        {
          "n": "Câble 4 x 1 mm²",
          "label": "Moteur",
          "desc": "Rouge = phase, rouge = phase, bleu = commun, jaune-vert = terre (fig. 20). Essai direct : condensateur 12,5 µF entre les deux phases ; inverser les phases pour changer le sens."
        },
        {
          "n": "Elpro 13 exp",
          "label": "Programmateur",
          "desc": "M1 sur 16-17-18, M2 sur 19-20-21 (16 et 19 = communs) ; alimentation en câble 1 mm² jusqu'à 50 m."
        }
      ],
      "installation": [
        "Caisson enterré au niveau du sol fini, aligné avec la charnière supérieure (trou intérieur du caisson) ; deux caissons alignés au cordeau ; drainage vers l'extérieur ; gaine Ø 20–25 mm vers le programmateur.",
        "Retirer la charnière basse : l'arbre du Combi sert de pivot. Pivot bas préparatoire possible avant la pose du vérin.",
        "Souder sur le vantail, dans l'axe de la charnière haute, le déverrouillage d'urgence (cote A = 80 mm), la plaque avec bague carrée (A = 42 mm) ou la bague seule (A = 30 mm), l'arbre étant 5° à 10° avant sa fin de course.",
        "Butées au sol obligatoires en fermeture et en ouverture (environ 5° avant la fin de course de l'arbre), posées avant toute manœuvre.",
        "110° : Combi Droite avec déverrouillage Droite ; 175° : Combi Droite avec déverrouillage Gauche (et inversement). Fixation par 2 écrous E13, guidé par les fentes du caisson.",
        "Serrure électrique obligatoire au-delà de 2,0 m de vantail (Normal ou Verrouillage) ; version Normale à 110° : toujours avec serrure ; frein conseillé au-delà de 2,5 m ; régulateur d'écoulement pour les vantaux de 4 à 5 m.",
        "Force de poussée : retirer le carter des vannes. Vis rouge = fermeture, vis verte = ouverture ; sens horaire = plus de force.",
        "Frein (version avec frein) : ralentissement sur les ~40 derniers cm ; sens horaire = plus lent. Régulateur d'écoulement : vitesse du vantail dans les deux sens.",
        "Manœuvre manuelle : clé du déverrouillage d'urgence, ou levier de déverrouillage du vérin (toujours refermé en fonctionnement normal)."
      ],
      "notes": [
        "Étiquette : 180 W, 1,3 A, 30 atm, −25 °C à +80 °C ; tableau des données : 250 W absorbés, 1,2 A, −20 °C à +80 °C (contradiction de la notice).",
        "Entretien : automatisme hydraulique au moins tous les 6 mois, électronique et sécurités une fois par mois."
      ]
    },
    {
      "id": "fadini-talos",
      "nom": "Talos",
      "marque": "Fadini",
      "couleur": "#1b5e9e",
      "categorie": "Borne escamotable hydraulique (motorisation)",
      "modeles": "Talos 9450 / 9460 / 9470 / 9480 (cylindre 4 mm, 500 à 800 mm, 320 000 J ; HRC 420 000 J) · Talos 9651 / 9661 / 9671 / 9681 (12 mm, 450 000 J ; HRC 550 000 J) · inox 304 / 316 en 4 mm seulement",
      "source": "Notice Fadini Talos (partie française, pages 1 à 20)",
      "resume": "Borne cylindrique Ø 275 mm entièrement escamotable, centrale hydraulique intégrée 230 V, 9 LED jaune ambre. Programmateur Elpro S40 (voir la carte Fadini). Options : électrovanne (descente en cas de coupure), pressostat anti-obstacle, beeper, chauffage.",
      "specs": [
        [
          "Cylindre",
          "Acier Fe 360 Ø 275 mm, 4 ou 12 mm d'épaisseur ; HRC : 40 cm restent dans le coffrage (20 cm en standard)"
        ],
        [
          "Alimentation",
          "230 V 50 Hz ; électrovanne en 24 Vdc avec stabilisateur ; condensateur 30 µF déjà câblé dans la boîte de dérivation"
        ],
        [
          "Câble vers l'Elpro S40",
          "FG 70R 12 x 1,5 mm² (standard ou 2 options) ou 16 x 1,5 mm² (3 options), 50 m max ; terre séparée (16 mm² conseillé en lieu public)"
        ],
        [
          "Pressostat",
          "Réglé en usine à 15 kg minimum"
        ],
        [
          "Chauffage",
          "Se déclenche sous 5 °C"
        ]
      ],
      "raccordement": [
        {
          "n": "Boîte de dérivation",
          "label": "Bornier interne (IP66)",
          "desc": "Vers l'Elpro S40 (fig. 14) : moteur 16 (commun), 17 et 18 (phases) ; fins de course 11 (ouverture), 12 (fermeture), 13 (commun) ; pressostat 1-2 ; LED 53, commun 52, clignotant / beeper 51 ; stabilisateur de l'électrovanne sur 22-23."
        },
        {
          "n": "Elpro S40 22-23",
          "label": "Électrovanne",
          "desc": "Stabilisateur obligatoire entre la sortie électrovanne 22-23 et l'électrovanne, un par borne."
        },
        {
          "n": "Elpro S40 A-B",
          "label": "Condensateur",
          "desc": "Cylindre 4 mm : ne pas ajouter de condensateur. Cylindre 12 mm : ajouter 20 µF sur A-B."
        }
      ],
      "installation": [
        "Fouille selon fig. 5 ; gaine Ø 50 mm vers l'Elpro S40 ; drainage (50 l doivent s'écouler en moins de 30–40 min, sinon pompe immergée).",
        "Sortir la borne du coffrage perdu au treuil (débrancher d'abord la terre du coffrage), sceller le coffrage 1–2 cm au-dessus du revêtement, béton jusqu'à 5–10 cm de la surface, 7 jours de prise.",
        "Remettre la borne : la plaque de la centrale doit porter à plat sur le fond du coffrage ; centrer la plaque de couverture (vis M10 graissées).",
        "Mise en service borne baissée : L8 doit être ÉTEINTE et L9 ALLUMÉE (sinon inverser les fils 11 et 12 sur l'Elpro S40) ; à la première commande la borne doit monter, sinon couper et inverser les fils du moteur. Une borne à la fois.",
        "Pressostat : vis M5, clé hexagonale de 6 ; sens horaire = seuil plus élevé.",
        "Déverrouillage : clé à empreinte triangulaire, sens antihoraire, la borne descend sous la main ; resserrer en sens horaire. Elle ne remonte que sur commande avec le courant.",
        "Cylindre 4 mm (acier ou inox) avec électrovanne : finir la descente au pied jusqu'au sol."
      ],
      "notes": [
        "Photocellules à 80 cm minimum de la borne (fig. 11) ; boucles magnétiques pré-assemblées de 6 m ou 12 m avec détecteur deux canaux.",
        "Hauteur de fouille P de 1000 à 1500 mm selon hauteur et version (fig. 5)."
      ]
    },
    {
      "id": "bircher-proloop-lite",
      "nom": "ProLoop Lite",
      "marque": "BBC Bircher",
      "couleur": "#b3122f",
      "categorie": "Détecteur de boucle magnétique (rail DIN)",
      "modeles": "ProLoop Lite 1 boucle ou 2 boucles, alimentation 24 V DC ou 230 V AC",
      "source": "Notice BBC Bircher ProLoop Lite 354823C (11/18), français, 4 p.",
      "resume": "Détecteur de boucle inductive pour portails industriels, barrières et parkings : écran LCD, touches « Mode » et « Data », LED d'information, 1 ou 2 sorties relais.",
      "specs": [
        [
          "Alimentation",
          "24 V DC −10 % / +20 %, 1,5 W max · ou 230 V AC ±10 % 50 Hz, 2,9 VA max (selon la plaque signalétique)"
        ],
        [
          "Boucle",
          "20 à 1000 µH (idéal 80 à 300 µH) · câble 1,5 mm² : 100 m max à 20–40 µH, 200 m max au-delà de 40 µH · < 8 Ω"
        ],
        [
          "Relais de sortie",
          "240 V AC max 2 A · 30 V DC 1 A (AC-1)"
        ],
        [
          "Divers",
          "22,5 x 92 x 85 mm · IP20 · −20 à +60 °C (stockage −40 à +70 °C) · humidité < 95 % sans condensation"
        ]
      ],
      "raccordement": [
        {
          "n": "1 · 2",
          "label": "Alimentation",
          "desc": "A1 (~ / +) et A2 (~ / −), tension selon la plaque."
        },
        {
          "n": "L3 · L4",
          "label": "Boucle 1",
          "desc": "Fils torsadés."
        },
        {
          "n": "L5 · L6",
          "label": "Boucle 2",
          "desc": "Appareil à 2 boucles."
        },
        {
          "n": "11 · 12 · 14",
          "label": "Sortie 1",
          "desc": "11 commun, 12 NF, 14 NO."
        },
        {
          "n": "21 · 22 · 24",
          "label": "Sortie 2",
          "desc": "21 commun, 22 NF, 24 NO."
        }
      ],
      "installation": [
        "Montage sur rail DIN 35 mm (EN 50022), bornes enfichables codées.",
        "Fils de boucle torsadés au moins 20 fois par mètre ; résistance de boucle < 8 Ω câble compris.",
        "Mode configuration : taper une fois sur « Mode » (sur un appareil à 2 boucles, une 2e fois pour la boucle 2), « Data » change la valeur, « Mode » passe à la fonction suivante ; retour au mode travail : « Mode » maintenu 1 s.",
        "Reset 1 (réinitialisation des boucles) : « Mode » maintenu 2 s."
      ],
      "codes": [
        [
          "LED rouge + verte",
          "Phase de démarrage."
        ],
        [
          "LED verte fixe",
          "En marche."
        ],
        [
          "LED verte clignotante",
          "Sortie 1 et/ou 2 activée."
        ],
        [
          "LED rouge clignotante",
          "Dysfonctionnement ; l'écran alterne « A » (mode travail) et « E »."
        ]
      ],
      "notes": [
        "Paramètres (* = usine) : 0 fonction de base (1 portes et portails*, 2 barrières, 3 courant de repos) · 1 fonction temps (∞*, temporisation de démarrage, d'arrêt, impulsion à l'occupation, à la libération, présence maximale) · 2 unité (0,1 s, 1 s*, 1 min, 1 h) · 3 facteur 1–99 (1*) ; temps = unité x facteur · 4 sensibilité S1 (faible) à S9 (forte), S4* · 5 ASB (augmentation automatique de sensibilité, ex. timons de remorque) : désactivée* / activée · 6 fréquence F1 à F4, F4*.",
        "Plusieurs détecteurs proches : leur donner des fréquences différentes.",
        "La notice ne donne pas de codes d'erreur détaillés (affichage « E » seulement)."
      ]
    },
    {
      "id": "bircher-proloop2",
      "nom": "ProLoop2",
      "marque": "BBC Bircher",
      "couleur": "#b3122f",
      "categorie": "Détecteur de boucle magnétique (rail DIN)",
      "modeles": "ProLoop2 DIN 1 boucle ou 2 boucles, 1 ou 2 relais + relais d'alarme en option ; alimentation 24ACDC ou LVAC (100–240 V AC)",
      "source": "Notice BBC Bircher ProLoop2 265336K (02/21), français, 4 p.",
      "resume": "Détecteur de boucle inductive pour portails industriels, barrières, parkings et bornes escamotables : écran LCD, touches Mode / Data (Sim1 / Sim2), mode simulation avec mesure d'inductance, journal des 5 dernières erreurs.",
      "specs": [
        [
          "Alimentation",
          "24ACDC : 24 V AC −20 % / +10 % 50/60 Hz 2 W max, ou 24 V DC −10 % / +20 % 1,5 W max · LVAC : 100–240 V AC ±10 % 50/60 Hz, 2,9 W max"
        ],
        [
          "Boucle",
          "20 à 1000 µH (idéal 80 à 300 µH) · câble 1,5 mm² : 100 m max à 20–40 µH, 200 m max au-delà de 40 µH · < 8 Ω"
        ],
        [
          "Relais",
          "Boucle : AC-1 240 V AC 2 A, DC-1 30 V DC 1 A · alarme : 40 V AC 0,3 A / 40 V DC 0,3 A"
        ],
        [
          "Divers",
          "22,5 x 94 x 88 mm · IP20 · −20 à +60 °C · humidité < 95 % sans condensation"
        ]
      ],
      "raccordement": [
        {
          "n": "1 · 2",
          "label": "Alimentation",
          "desc": "A1 / A2, tension indiquée sur le côté de l'appareil. Version 24 V : très basse tension de sécurité (SELV)."
        },
        {
          "n": "L3 · L4",
          "label": "Boucle 1",
          "desc": "Fils torsadés."
        },
        {
          "n": "L5 · L6",
          "label": "Boucle 2",
          "desc": "Appareil à 2 boucles."
        },
        {
          "n": "11 · 12 · 14",
          "label": "Sortie 1",
          "desc": "11 commun, 12 NF, 14 NO."
        },
        {
          "n": "21 · 22 · 24",
          "label": "Sortie 2",
          "desc": "21 commun, 22 NF, 24 NO."
        },
        {
          "n": "31 · 32 · 34",
          "label": "Sortie alarme (option)",
          "desc": "31 commun, 32 NF, 34 NO."
        }
      ],
      "installation": [
        "Montage sur rail DIN 35 mm (EN 50022), bornes enfichables codées.",
        "Fils de boucle torsadés au moins 20 fois par mètre ; résistance de boucle < 8 Ω câble compris.",
        "Mode configuration : taper une fois sur « Mode » (sur un appareil à 2 boucles, une 2e fois pour la boucle 2), « Data » change la valeur, « Mode » passe à la fonction suivante ; retour au mode travail : « Mode » maintenu 1 s.",
        "Reset 1 (réinitialisation des boucles) : « Mode » maintenu 2 s.",
        "Reset 2 (configuration d'usine, sauf journal d'erreurs) : « Mode » + « Data » maintenus 8 s.",
        "Mode simulation : « Sim1 » + « Sim2 » 2 s (boucles raccordées obligatoires) : simuler boucle libre / occupée (L0 / L1), forcer les relais (00 / 01, A0 / A1), lire l'inductance de chaque boucle en µH. Sortie : « Sim1 » 2 s."
      ],
      "codes": [
        [
          "E001 / E002",
          "Interruption de la boucle 1 / 2."
        ],
        [
          "E011 / E012",
          "Court-circuit de la boucle 1 / 2."
        ],
        [
          "E101",
          "Sous-tension."
        ],
        [
          "E102",
          "Surtension."
        ],
        [
          "E201 / E202",
          "Erreur de mémoire."
        ],
        [
          "E301 / E302",
          "Boucle 1 / 2 trop grande."
        ],
        [
          "E311 / E312",
          "Boucle 1 / 2 trop petite."
        ],
        [
          "Journal",
          "5 dernières erreurs : appuis courts sur « Data » ; « Data » 4 s efface le journal."
        ],
        [
          "LED",
          "Rouge + vert : démarrage ou configuration · vert : en service · vert clignotant : boucle occupée · rouge clignotant : défaut · rouge + vert clignotant : simulation."
        ]
      ],
      "notes": [
        "Paramètres (* = usine) : 0 fonction de base (1 portails*, 2 barrières, 3 courant de repos, 4 logique de direction sur 2 boucles ; 0 désactive la boucle 2) · 1 fonction temps (∞*, temporisation de démarrage, de coupure, impulsion à l'occupation, à la libération, présence limitée) · 2 unité (0,1 s, 1 s*, 1 min, 1 h) · 3 facteur 1–99 (1*) · 4 sensibilité 1 à 9 (4*) · 5 ASB désactivée* / activée · 6 fréquence F1 à F4 (F4*) · 7 logique de direction (les deux*, boucle 2 vers 1, boucle 1 vers 2) · 8 sortie 2 · 9 sécurité défaillance secteur (inactive* / P1 parkings et bornes escamotables : sensibilité limitée de 1 à 5, et ASB doit être désactivée).",
        "En cas d'erreur : 1 portail → relais de sortie retombe ; 2 barrière → relais s'enclenche ; 3 courant de repos et 4 logique de direction → relais retombent. Le relais d'alarme retombe toujours.",
        "Sortie 2 (paramètre 8) : appareil 1 boucle 2 relais → active* ; appareil 2 boucles avec boucle 2 désactivée → inactive* (tableau 4.11b)."
      ]
    }
  ];
  window.ACCESSOIRES = ACCESSOIRES;
  const TABS = [["info", "Infos"], ["racc", "Raccord."], ["inst", "Installation"], ["sch", "Schéma"], ["notes", "Notes"], ["ntc", "Notice"]];
  const has = (a, t) => t === "info" ? true : t === "sch" ? hasSchema(a.id) : t === "ntc" ? !!a.notice : t === "racc" ? a.raccordement && a.raccordement.length : t === "inst" ? a.installation && a.installation.length : (a.notes && a.notes.length) || (a.codes && a.codes.length);
  const rowAcc = a => `<button class="row" onclick="go('#/a/${a.id}')"><span class="badge" style="--c:${a.couleur}">${esc(a.marque)}</span><b>${esc(a.nom)}</b> <span class="p">${esc(a.categorie)}</span><small>${esc(a.modeles)}</small></button>`;

  window.accList = function (q) {
    const words = norm(q || "").split(" ").filter(Boolean);
    return ACCESSOIRES.filter(a => { const t = norm(`${a.marque} ${a.alias || ""} ${a.nom} ${a.categorie} ${a.modeles} ${a.resume} gyrophare clignotant feu`); return words.every(w => t.includes(w)); }).map(rowAcc).join("");
  };

  /* Recherche dans le contenu des fiches (caractéristiques, bornes, installation, codes, notes) */
  window.accDeep = function (q) {
    const words = norm(q || "").split(" ").filter(Boolean);
    if (!words.length) return "";
    const ok = t => { const n = norm(t); return words.every(w => n.includes(w)); };
    const hits = [];
    ACCESSOIRES.forEach(a => {
      const ctx = `<span class="badge" style="--c:${a.couleur}">${esc(a.marque)}</span>${esc(a.nom)}`;
      const add = (tab, lab, txt) => hits.push({ id: a.id, tab, lab, txt, ctx });
      (a.specs || []).forEach(s => { if (ok(`${a.marque} ${a.nom} ${s[0]} ${s[1]}`)) add("info", s[0], s[1]); });
      (a.raccordement || []).forEach(r => { if (ok(`${a.marque} ${a.nom} ${r.n} ${r.label} ${r.desc}`)) add("racc", `${r.n} · ${r.label}`, r.desc); });
      (a.installation || []).forEach(t => { if (ok(`${a.marque} ${a.nom} ${t}`)) add("inst", "Installation", t); });
      (a.codes || []).forEach(c => { if (ok(`${a.marque} ${a.nom} ${c[0]} ${c[1]}`)) add("notes", c[0], c[1]); });
      (a.notes || []).forEach(t => { if (ok(`${a.marque} ${a.nom} ${t}`)) add("notes", "Note", t); });
    });
    if (!hits.length) return "";
    const TAB = { info: "Infos", racc: "Raccord.", inst: "Installation", notes: "Notes" };
    return `<h2>Dans les fiches accessoires (${hits.length})</h2><table>` + hits.slice(0, 40).map(r =>
      `<tr style="cursor:pointer" onclick="go('#/a/${r.id}/${r.tab}')"><td>${esc(TAB[r.tab])}</td><td>${r.ctx}<br><b>${highlight(r.lab, q)}</b> — ${highlight(r.txt.length > 220 ? r.txt.slice(0, 220) + "…" : r.txt, q)}</td></tr>`).join("") + `</table>`;
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
  const LOGOS = ["optex", "cardin", "intratone", "locinox", "prastel", "theben", "opera", "bbc-bircher", "sewosy", "jcm-technologies"];
  const slugM = n => norm(n).replace(/ /g, "-");
  const accOf = nom => ACCESSOIRES.filter(a => norm(a.marque) === norm(nom));
  window.accBrandsOnly = function () {
    const seen = new Set(), out = [];
    ACCESSOIRES.forEach(a => {
      const k = norm(a.marque);
      if (seen.has(k) || MARQUES.some(m => norm(m.nom) === k)) return;
      seen.add(k); out.push({ slug: slugM(a.marque), nom: a.marque, couleur: a.couleur, logo: LOGOS.includes(slugM(a.marque)) });
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

  /* Onglet « Notice » : transcription complète + pages d'origine en image */
  const noticePane = a => {
    const n = a.notice, k = a.id + "#notice";
    return `<p class="note"><b>Notice complète</b> : ${esc(n.ref)}</p>` + n.blocs.map(b => `<h2>${esc(b.h)}</h2>` + (b.l ? `<table>` + b.l.map(r => `<tr><td>${esc(r[0])}</td><td>${esc(r[1])}</td></tr>`).join("") + `</table>` : `<div class="note"><ol class="plain" style="padding-left:20px;margin:0">${b.p.map(x => `<li style="margin:6px 0">${esc(x)}</li>`).join("")}</ol></div>`)).join("") + `<p class="note">${esc(n.pied)}</p><h2>Pages d'origine</h2>` + schemaPane(k);
  };
  window.viewAcc = function (id, tab) {
    const a = ACCESSOIRES.find(x => x.id === id); if (!a) return viewAccList();
    setHead(`${a.marque} ${a.nom}`, true);
    const tabs = TABS.filter(t => has(a, t[0])); tab = tabs.some(t => t[0] === tab) ? tab : "info";
    let h = `<div class="boardhead" style="--c:${a.couleur}"><button class="favbtn" id="fav" aria-pressed="${isFav(a.id)}" aria-label="Ajouter aux favoris" title="Favori : enregistré dans ce navigateur seulement">${isFav(a.id) ? "★" : "☆"}</button><h3>${esc(a.nom)}</h3><p>${esc(a.marque)} · ${esc(a.categorie)}</p></div><p class="note">${esc(a.resume)}</p><div class="tabs" role="tablist">` + tabs.map(t => `<button role="tab" aria-selected="${t[0] === tab}" onclick="go('#/a/${a.id}/${t[0]}')">${t[1]}</button>`).join("") + `</div>`;
    if (tab === "info") h += `<div class="set">` + a.specs.map(s => `<div style="padding:11px 14px;border-top:1px solid var(--line)"><div style="font-size:12.5px;color:var(--muted);font-weight:600">${esc(s[0])}</div><div style="font-size:15.5px;margin-top:2px">${esc(s[1])}</div></div>`).join("") + `</div>`;
    if (tab === "sch") h += schemaPane(a.id);
    if (tab === "ntc") h += noticePane(a);
    if (tab === "racc") h += `<table>` + a.raccordement.map(r => `<tr><td>${esc(r.n)}</td><td><b>${esc(r.label)}</b><br>${esc(r.desc)}</td></tr>`).join("") + `</table>`;
    if (tab === "inst") h += `<div class="note"><ol class="plain" style="padding-left:20px;margin:0">${a.installation.map(s => `<li style="margin:6px 0">${esc(s)}</li>`).join("")}</ol></div>`;
    if (tab === "notes") h += (a.codes ? `<h2>Codes</h2><table>` + a.codes.map(c => `<tr><td>${esc(c[0])}</td><td>${esc(c[1])}</td></tr>`).join("") + `</table>` : "") + (a.notes ? `<div class="note"><ul class="plain">${a.notes.map(n => `<li>${esc(n)}</li>`).join("")}</ul></div>` : "");
    if (window.sigBouton) h += sigBouton("accessoire", a.id, tab); /* SIG */
    h += `<p class="foot">Source : ${esc(a.source)}.<br>En cas de doute, la notice livrée avec le matériel fait foi.</p>`;
    app.innerHTML = h;
    const fb = document.getElementById("fav");
    if (fb) fb.onclick = () => {
      const on = toggleFav(a.id);
      fb.setAttribute("aria-pressed", on); fb.textContent = on ? "★" : "☆";
      fb.setAttribute("aria-label", on ? "Retirer des favoris" : "Ajouter aux favoris");
      let t = document.getElementById("favnote"); if (!t) { t = document.createElement("div"); t.id = "favnote"; t.className = "hotn"; fb.parentNode.appendChild(t); }
      t.textContent = on ? "Ajoutée aux favoris. " + FAV_NOTE : "Retirée des favoris.";
    };
  };
  window.rowAccFav = id => { const a = ACCESSOIRES.find(x => x.id === id); return a ? rowAcc(a) : ""; };
})();
