/* Onglet « Schéma » : pages de notice en image (tirées des PDF fournis) avec visionneuse zoomable.
   SCHEMAS[idFiche] = [{ f: fichier, t: titre, p: page de la notice, d: légende }]. */
(function () {
  const S = (f, t, p, d) => ({ f: "schemas/" + f + ".webp", t, p, d });
  window.SCHEMAS = {
    "casit-eq2000": [
      S("casit-eq2000-p6", "Schéma de câblage barres palpeuses et cellules", 6, "Dessin du fascicule technique (08/01/2006) : barres palpeuses TO / TF sur 14-15 / 14-16, cellules en série sur 17-19 alimentées en 24 V permanent. Le dessin cite une ASO ISK 76, hors notice CASIT.")
    ],
    "casit-eq2006": [
      S("casit-eq2006-p2", "Implantation de la carte et bornier", 2, "Vue de la carte (dip S1 à S3, trimmers, poussoirs PS1-PS3, LED) et tableau des bornes.")
    ],
    "casit-eq2009": [
      S("casit-eq2009-p2", "Implantation de la carte et LED", 2, "Vue de la carte (dip S1 à S4, trimmers P1-P6, poussoirs PS1-PS3, bornes M1 à M15) et tableau des LED.")
    ],
    "casit-eq212": [
      S("casit-eq212-p2", "LED, bornes et implantation", 2, "Page de la notice avec la carte, les LED L1 à L9 et le tableau des bornes.")
    ],
    "casit-keq013": [
      S("casit-keq013-p4", "Schéma de la carte et branchements", 4, "Vue de la carte : bornes 1 à 34, afficheur, poussoirs P1-P3, pile CR2032, état normal des LED."),
      S("casit-keq013-p17", "Photocellule A : raccordement et test", 17, "Branchement de la photocellule A en fermeture, avec et sans test (bornes 28-29)."),
      S("casit-keq013-p18", "Photocellule B : raccordement et test", 18, "Branchement de la photocellule B en ouverture et fermeture, avec et sans test.")
    ],
    "casit-keq405": [
      S("casit-keq405-p1", "Implantation de la carte", 1, "Vue de la carte : bornes M1 à M11, SW1 / SW2, trimmers P1-P3, fusibles F1 à F6, LED DL1 à DL14.")
    ],
    "casit-keqs08": [
      S("casit-keqs08-p1", "Schéma de raccordement", 1, "Bornes 1 à 28 avec lampe, moteur, entrées N.F. / N.O., cellules TX / RX, serrure et encoder."),
      S("casit-keqs08-p4", "Implantation de la carte", 4, "Position des dip A / B, trimmers FORZA / V.RALL / BLOCK, boutons CODICI / TEMPI / P, JP1, cavalier AC/DC."),
      S("casit-keqs08-p8", "Raccordement des cellules 24 V", 8, "Cellules 24 V AC et 24 V DC, avec et sans test.")
    ],
    "bircher-rfgate": [
      S("bircher-rfgate-p2", "Dip, émetteur et câblage du récepteur", 2, "Dip de l'émetteur selon le détecteur, passage NC / NO, bornier du récepteur (VCC, COM, OUT, SOUT, TST) et dip 1 à 5 du récepteur."),
      S("bircher-rfgate-p3", "Mise en service et états", 3, "Étapes de mise en service, appairage des émetteurs, tableau des états de contact.")
    ],
    "bircher-xrf1": [
      S("bircher-xrf1-p2", "Câblage et appairage", 2, "Dip de l'émetteur, pile CR2450N, bornier du récepteur (1-2 alimentation, 3-6 sorties, 7-8 test) et appairage."),
      S("bircher-xrf1-p3", "États, dépannage et caractéristiques", 3, "Effacement des appairages, test, tableau de la sortie d'état et des LED, avertissements pile et erreur.")
    ],
    "sewosy-k1000": [
      S("sewosy-k1000-p02", "Caractéristiques et raccordement", 2, "Tableau des caractéristiques, couleurs des fils (relais 1 et 2, boutons poussoirs, contact magnétique) et signification des bips.")
    ],
    "roger-smarty": [
      S("roger-smarty-p05", "Dimensions et abaques poids / longueur", 5, "Cotes du vérin et diagrammes d'utilisation des cinq modèles (limites réduites en zone de fortes rafales)."),
      S("roger-smarty-p11", "Raccordements électriques", 11, "Câble 3 × 2,5 mm² vers l'EDGE1, terre non nécessaire."),
      S("roger-smarty-p12", "Bornier X · Y · Z et encodeur absolu", 12, "Raccordement du moteur et montage de l'encodeur sur les modèles irréversibles.")
    ],
    "roger-be20": [
      S("roger-be20-p05", "Dimensions et abaques poids / longueur", 5, "Cotes et diagrammes d'utilisation BE20/200, BE20/200/HS et BE20/400."),
      S("roger-be20-p11", "Raccordements électriques", 11, "Bornier X · Y · Z, câble 3 × 2,5 mm² vers B70/2ML ou EDGE1.")
    ],
    "roger-dld": [
      S("roger-dld-p13", "Détecteur : bornes et affichage", 13, "Bornes A1-A2, boucles, relais 11-12-14, 21-22-24, alarme 31-32-34 ; LED."),
      S("roger-dld-p14", "Fonctions et temporisations", 14, "Fonctions de base, temps, sensibilité, ASB, fréquence, direction, sécurité secteur."),
      S("roger-dld-p15", "Paramètres (tableau 4.11)", 15, "Mode configuration : toutes les valeurs."),
      S("roger-dld-p16", "Simulation, défauts, caractéristiques", 16, "Mode simulation, codes E, reset, caractéristiques techniques."),
      S("roger-dld-boucle-p04", "Pose de la boucle", 4, "Spires selon le périmètre, inductance, distances, coupe de la rainure."),
      S("roger-dld-boucle-p06", "Fraisage et géométries", 6, "Fraisage de la rainure, géométries selon les véhicules.")
    ],
    "roger-bconnect": [
      S("roger-bconnect-p02", "Module et LED", 2, "LED rouge / verte, bouton reset, centrales compatibles et firmwares minimaux."),
      S("roger-bconnect-p03", "Connexion au smartphone", 3, "Réseau ROGER-BCON, 192.168.10.1, login installateur, étiquette (clé WPA).")
    ],
    "roger-h70el": [
      S("roger-h70el-p05", "Schéma H70/EL", 5, "Raccordement à la H70/200AC, électroserrure 12 V~ et clignotant 230 V.")
    ],
    "roger-bionik": [
      S("roger-bionik4-p06", "Caractéristiques BI/004", 6, "Tableau technique BIONIK4."),
      S("roger-bionik4-p05", "Dimensions BI/004", 5, "Encombrement et longueur de lisse."),
      S("roger-bionik4-p25", "Choix du ressort BI/004", 25, "Ressort selon la lisse BA/68 et les accessoires."),
      S("roger-bionik4-p26", "Choix du ressort BI/004 (suite)", 26, "Ressort SP/72/01 avec grille, appuis."),
      S("roger-bionik-p07", "Caractéristiques BI/001PE, BI/004HP, BI/006", 7, "Tableau technique."),
      S("roger-bionik-p06", "Dimensions BI/001PE, BI/004HP, BI/006", 6, "Encombrements et longueurs de lisse."),
      S("roger-bionik-p22", "Tension des ressorts", 22, "Trous A-1 / B-2 / C-3 du balancier selon le côté."),
      S("roger-bionik-p23", "Choix du ressort BI/001PE, BI/004HP, BI/006", 23, "Ressort selon le modèle et les accessoires."),
      S("roger-bionik8-p06", "Caractéristiques BI/008", 6, "Tableau technique BIONIK8."),
      S("roger-bionik8-p05", "Dimensions BI/008", 5, "Encombrement et longueur de lisse."),
      S("roger-bionik8-p25", "Groupe ressorts BI/008", 25, "Montage du jeu SP/85/AS/02 et du curseur."),
      S("roger-kt240-p1", "Plaque de fondation KT240 (BI/004)", 1, "Cotes et pose de la plaque.")
    ],
    "roger-lisses-aled": [
      S("roger-ba68-p1", "Lisse BA/68/3 – /4", 1, "Montage sur BI/004 (1 mm maxi entre support et armoire)."),
      S("roger-ba90-p10", "Lisses BA/90 – BA/91", 10, "Compatibilité des raccords, préparation et montage."),
      S("roger-ba128-p1", "Lisse BA/128/4 (BI/008)", 1, "Préparation et assemblage des deux lisses."),
      S("roger-aled-p03", "Compatibilité ALED", 3, "Tableau ALED / barrières / lisses, coupe de la bande.")
    ],
    "roger-way": [
      S("roger-way-p05", "Dimensions WAY/004 – /005", 5, "Encombrement de l'armoire et longueur de lisse."),
      S("roger-way-p06", "Caractéristiques WAY/004 – /005", 6, "Tableau technique."),
      S("roger-way-p09", "Références et accessoires", 9, "Lisses, ressorts, appuis, plaque KT251, ALED, chargeur."),
      S("roger-way-p21", "Choix du ressort WAY/004 – /005", 21, "Ressort selon la lisse (coupée ou non) et les accessoires ; appui fixe obligatoire repéré « 1 »."),
      S("roger-way-p23", "Butées mécaniques", 23, "Réglage des butées d'ouverture et de fermeture (barrière à gauche)."),
      S("roger-way-p28", "Déblocage", 28, "Clé 230°, avertissements sur l'équilibrage."),
      S("roger-way006-p05", "Dimensions WAY/006", 5, "Encombrement de l'armoire et longueur de lisse."),
      S("roger-way006-p06", "Caractéristiques WAY/006", 6, "Tableau technique."),
      S("roger-way006-p21", "Choix du ressort WAY/006", 21, "BA/91/6 ou 2 × BA/91/3 + JNT/BA/91, ressorts SP/51 ou SP/56/AS/G12."),
      S("roger-way006-p22", "Tension des ressorts WAY/006", 22, "Trous de fixation du balancier selon la lisse et les accessoires."),
      S("roger-kt252-p1", "Plaque de fondation KT252 (WAY/006)", 1, "Cotes de la plaque et sens de pose.")
    ],
    "roger-ayron": [
      S("roger-ayron-p14", "Installation type et abaque", 14, "Câbles conseillés, dimensions et poids maxi selon la longueur."),
      S("roger-ayron-p15", "Caractéristiques", 15, "Tableau AY/250/M et AY/250/S, étiquette."),
      S("roger-ayron-p17", "Cotes d'installation", 17, "Bras LT336, LT337, LT338 et plaques KT218 / KT249."),
      S("roger-ayron-p20", "Arrêts mécaniques", 20, "Réglage des butées en ouverture et fermeture."),
      S("roger-ayron-p22", "Raccordement B70/2ML", 22, "Secteur, moteurs X · Y · Z et bornier accessoires.")
    ],
    "roger-bh23": [
      S("roger-bh23-p04", "Caractéristiques et abaque", 4, "Tableau technique, dimensions et poids maxi selon la longueur."),
      S("roger-bh23-p05", "Installation type", 5, "Câbles conseillés."),
      S("roger-bh23-p06", "Cotes d'installation", 6, "Bras court LT302 (tableau 1) et bras à glissière LT338 (tableau 2)."),
      S("roger-bh23-p11", "Arrêts mécaniques et raccordement", 11, "Réglage des arrêts (moteur à gauche) et passage du câble.")
    ],
    "roger-monos4": [
      S("roger-monos4-p05", "Dimensions et abaque", 5, "Encombrement et poids maxi selon la longueur du vantail."),
      S("roger-monos4-p06", "Installation type", 6, "Câbles conseillés."),
      S("roger-monos4-p07", "Cotes d'installation", 7, "Tableau A, B, C, D, E, F et angle maxi (course 400 mm)."),
      S("roger-monos4-p10", "Raccordement", 10, "Passage et branchement du câble 3 × 2,5 mm².")
    ],
    "roger-br21": [
      S("roger-br21-p09", "Dimensions", 9, "Caisse de fondation et motoréducteur BR21 / R21."),
      S("roger-br21-p10", "Abaque poids / longueur", 10, "Poids maxi selon la longueur du vantail, avec et sans leviers LT300."),
      S("roger-br21-p12", "Pose de la caisse", 12, "Caisse de fondation : cotes et mise en place."),
      S("roger-br21-p16", "Arrêts mécaniques", 16, "Excentrique hexagonal en ouverture, boulon en fermeture."),
      S("roger-br21-p17", "Raccordement BR21 → EDGE1", 17, "Blanc Z, vert Y, rouge X."),
      S("roger-br21-p19", "Raccordement R21 → H70/200AC et déblocage", 19, "Commun gris au neutre, condensateur ; déblocages RL650 / RL651.")
    ],
    "roger-bm30": [
      S("roger-bm30-p05", "Dimensions et installation type", 5, "Cotes du BM30 et tableau des câbles conseillés."),
      S("roger-bm30-p06", "Plaque de fondation", 6, "Contrôles préliminaires et pose de la plaque de fondation."),
      S("roger-bm30-p09", "Fixation de la crémaillère", 9, "Crémaillère module 4 et jeu pignon / crémaillère."),
      S("roger-bm30-p10", "Fins de course", 10, "Brides R / L, fins de course magnétiques (8 mm, 10 mm maxi) et arrêt 40 à 80 mm avant la butée.")
    ],
    "roger-bg30": [
      S("roger-bg30-p06", "Dimensions et installation type", 6, "Cotes du BG30 et tableau des câbles conseillés."),
      S("roger-bg30-p10", "Crémaillère et fins de course", 10, "Fixation de la crémaillère module 4 et des brides de fin de course mécaniques / magnétiques."),
      S("roger-bg30-p11", "Fins de course magnétiques", 11, "Distances aimant / capteur et arrêt 40 à 80 mm avant la butée.")
    ],
    "roger-bh30": [
      S("roger-bh30-p05", "Dimensions et installation type", 5, "Cotes du BH30 et tableau des câbles conseillés."),
      S("roger-bh30-p09", "Crémaillère et fins de course", 9, "Fixation de la crémaillère module 4 et des brides de fin de course mécaniques / magnétiques."),
      S("roger-bh30-p10", "Fins de course magnétiques", 10, "Distances aimant / capteur et arrêt 40 à 80 mm avant la butée."),
      S("roger-kt214-p1", "Base de fixation KT214", 1, "Plaque 320 × 174 mm pour séries H30 et BH30 (notice IS151 Rev.01).")
    ],
    "roger-master-slave": [
      S("roger-ms-p03", "Raccordement MASTER / SLAVE", 3, "Liaison RS485 COM · LNA · LNB, commandes sur la MASTER, STOP et photocellules des deux côtés."),
      S("roger-ms-p04", "Partage à distance et photocellules", 4, "Affichages SLAV / MAST, point de communication RS485, répartition des photocellules (détails A, B, C).")
    ],
    "roger-cs": [
      S("roger-cs-p02", "Dimensions des profils", 2, "CS/PAS, CS/STD/MC, CS/STD/RS, CS/STD/RSTX-RX : profil 61 × 37 mm."),
      S("roger-cs-p03", "Montage CS/PAS et CS/STD/MC", 3, "Coupe (400 mm maxi pour le MC), brides, raccordement COM – COS1."),
      S("roger-cs-p04", "Montage CS/STD/RS et RSTX", 4, "Coupe du caoutchouc et de la barre résistive, réassemblage."),
      S("roger-cs-p05", "Émetteur RSTX et récepteur CS/RX", 5, "Cartes, boutons P1 / P2, LED et raccordement du récepteur.")
    ],
    "prastel-easyka": [
      S("prastel-easyka-p02", "Raccordement et programmation", 2, "Notice simplifiée EASYBKA/R : câblage et procédure de programmation.")
    ],
    "prastel-easyka#notice": [
      S("prastel-easybk-s1", "Notice simplifiée, page 1 : câblage et codes par défaut", 1, "EASYBKA/R : couleurs des fils, relais principal et auxiliaire, codes d'usine."),
      S("prastel-easybk-s2", "Notice simplifiée, page 2 : programmation et retour usine", 2, "Modification des codes (programmation, relais 1, relais 2) et retour aux paramètres d'usine.")
    ],
    "prastel-febo-light": [
      S("prastel-febo-p1", "Notice FEBO-LIGHT", 1, "Bornes 1-2 (230 V), 3-4 (12 V), 3-5 (24 V) et position du cavalier JP1.")
    ],
    "casit-cs2": [
      S("casit-cs2-p8", "Platine EQDW24", 8, "Câblage de la barre palpeuse sur la platine EQDW24 : bornes 6-7, 1-5 et 2-3, résistance de 8,2 kΩ.")
    ],
    "theben-tr64x-top3": [
      S("theben-top3-p1", "Montage et raccordement", 1, "Versions TR 641 / 642 / 644 top3, montage sur rail DIN et schémas de raccordement.")
    ],
    "theben-tr64x-top2": [
      S("theben-top2-p4", "Écran et touches", 4, "Affichage de l'horloge top2, touches MENU, flèches et OK, principe de fonctionnement.")
    ],
    "opera-28800": [
      S("opera-28800-p6", "Version avec chauffage", 6, "Câblage de la 28800 : fils 1 à 6, LED de la carte, alimentation 24 V."),
      S("opera-28800-p7", "Version sans chauffage", 7, "Câblage de la 28800LC et position du pêne (contact C).")
    ],
    "locinox-electradrop": [
      S("locinox-electradrop-p2", "Câblage ELECTRADROP-E / E-P", 2, "Fils signal, alimentation et sortie de position, relais externe, chronogrammes (signal continu ou impulsionnel).")
    ],
    "cardin-s504": [
      S("cardin-s504-p14", "Récepteur sous coffret", 14, "Bornier, cavaliers, boutons MEMO / DEL et LED."),
      S("cardin-s504-p15", "Récepteur à carte", 15, "Récepteur à carte 2 canaux, cavaliers J1 et SEL CH1 / CH2."),
      S("cardin-s504-p16", "Mini récepteur", 16, "Mini récepteur IP20, bornier à 10 voies.")
    ],
    "cardin-slx": [
      S("cardin-slx-p17", "Contrôles et encombrements", 17, "Contrôles avant pose et dimensions SLX3024, SLX1524 / 1024REV / 824, SLX24DRACO."),
      S("cardin-slx-p18", "Ancrage SLX24DRACO", 18, "Fig. 6 à 8 : plaque, plot, crémaillère, déverrouillage à levier."),
      S("cardin-slx-p19", "Ancrage SLX3024 – 1524 – 1024REV – 824", 19, "Fig. 9 à 11 : plaque, crémaillère, déverrouillage SLX3024."),
      S("cardin-slx-p20", "Déverrouillage SLX1524 / SLX824, branchement", 20, "Fig. 12 : déverrouillage à vis ; alimentation 230 Vac ; maintenance."),
      S("cardin-slx-p05", "Schéma électrique (ZVL607.01)", 5, "Carte de la notice ZVL607.01 (fusibles 15 A / 4 A, J1 à J5, M1)."),
    ],
    "cardin-slx1524": [
      S("cardin-slx1524-p05", "Schéma électrique de la carte", 5, "Bornier 1 à 31, fusibles F1 à F4, J1 à J3, MM, R1, P1 à P3 ; raccordement LP, LS, photocellules, sélecteur, TB, bord, antenne."),
      S("cardin-slx1524-p27", "Menus, codes radio et alarmes", 27, "Menus CALENDRIER et CODES RADIO, signalisations de fonctionnement et d'alarme."),
    ],
    "came-bxv": [
      S("came-bxv-p07", "Carte électronique BXV", 7, "Repères 1 à 22 : borniers, connecteurs AF / R700-R800 / RSE / RIOCN8WS, fusibles."),
      S("came-bxv-p19", "Signalisation et commandes", 19, "10-E, 10-5, bornes 1-2-3P-7, clavier et transpondeur."),
      S("came-bxv-p20", "Dispositifs de sécurité", 20, "Photocellules DELTA et DIR / DELTA-S (avec ou sans test TS), bord DFWN sur CX / CY.")
    ],
    "came-zn8": [
      S("came-zn8-p18", "Carte ZN8", 18, "Repères 1 à 26, fusibles ligne / carte / accessoires."),
      S("came-zn8-p20", "Alimentation et signalisation", 20, "L-N, 10-11, 10-E, 10-E3, 10-5."),
      S("came-zn8-p21", "Dispositifs de commande", 21, "1-2 à 2-7, S1-GND, A-B, R700 / R800, AF, antenne."),
      S("came-zn8-p22", "Photocellules", 22, "C1 à C4 et C13, avec ou sans test."),
      S("came-zn8-p23", "Bords sensibles", 23, "Bord seul ou paire de bords, en série ou en parallèle.")
    ],
    "cardin-sl4024": [
      S("cardin-sl4024-p07", "Descriptif de la carte (fig. 12)", 7, "Bornier 1 à 30, fusibles F1 à F3, LED L1 à L8, touches PROG / SEL / MEMO / DEL."),
      S("cardin-sl4024-p13", "Schéma de l'installation type", 13, "Câblage des accessoires sur le bornier.")
    ],
    "fadini-elpro37": [
      S("fadini-elpro37-p16", "Carte Elpro 37", 16, "Bornier 1 à 39, fusibles F1 à F6, LED, dip A / B, trimmers, sélecteur 230 / 400 V."),
      S("fadini-elpro37-p17", "Raccordements et dip-switchs", 17, "Photocellules, boutons, radio, fins de course, voyant, dip A."),
      S("fadini-elpro37-p18", "Listeaux de sécurité", 18, "Cavaliers JA / JB, listeaux NF ou 8,2 kΩ sur 32-33-34.")
    ],
    "fadini-elpro13exp": [
      S("fadini-elpro13-p42", "Carte Elpro 13 exp", 42, "Bornier 1 à 25, fusibles F1 à F5, LED, dip, trimmers."),
      S("fadini-elpro13-p44", "Puissance et fonctions", 44, "Moteurs, clignotant, alimentation (16 à 25) ; automatique, piéton, coup de bélier, pas à pas, horloge.")
    ],
    "fadini-elpro-s40": [
      S("fadini-s40-p10", "Carte Elpro S40", 10, "Bornier 1 à 66, fusibles, LED L1 à L15, dip, T1 / T2."),
      S("fadini-s40-p11", "LED et dip-switchs", 11, "Diagnostic, voyant, radio, photocellules ou boucle."),
      S("fadini-s40-p12", "Branchements électriques", 12, "Fins de course, feux, clignotant, électrovanne, moteurs M1 à M4.")
    ],
    "tousek-pull-t": [
      S("tousek-pullt-p09", "Raccordement bornes", 9, "Bornier 1-2, 10-11, 30 à 52, moteur 84-85-86."),
      S("tousek-pullt-p11", "Plan du menu", 11, "Menus M1 à M6 et valeurs d'usine.")
    ],
    "tousek-pull-t24": [
      S("tousek-pullt24-p09", "Raccordement bornes", 9, "Bornier 1-2, 10-11, 14-17, 18-19 batterie, 30 à 52, moteur 84-85."),
      S("tousek-pullt24-p11", "Plan du menu", 11, "Menus M1 à M6 et valeurs d'usine.")
    ],
    "fadini-combi740": [
      S("fadini-combi740-p34", "Composants du Combi 740", 34, "Vérin, centrale, déverrouillage, caisson (fig. 1 et 2)."),
      S("fadini-combi740-p45", "Schéma Combi 740 + Elpro 13 exp", 45, "Fig. 22 : moteurs, photocellules, sélecteur, radio, clignotant."),
      S("fadini-combi740-p46", "Réglages", 46, "Force de poussée (vis rouge / verte), frein, régulateur d'écoulement (fig. 23 à 25).")
    ],
    "fadini-talos": [
      S("fadini-talos-p11", "Bornier de la boîte de dérivation", 11, "Fig. 14 : moteur, fins de course, LED, clignotant / beeper, pressostat, électrovanne vers l'Elpro S40."),
      S("fadini-talos-p12", "Premières manœuvres", 12, "Fig. 15-16 : fins de course 11-12-13, stabilisateur sur 22-23, contrôle L8 / L9.")
    ],
    "cardin-cdr842": [
      S("cardin-cdr842-p06", "Figures CDR842A / CDR852A", 6, "Dimensions, montage, centrage (test point), exemples d'installation, fig. 6 : bornier récepteur (6 C, 5 NA, 4 NC, 3 0V, 2 12V, 1 24V) et émetteur (4 24V, 3 12V, 2-1 0V)."),
    ],
    "cardin-s449": [
      S("cardin-s449-p49", "Récepteur sous coffret", 49, "Récepteur RCQ449 : bornier à 14 voies, boutons P1 / P2, cavaliers."),
      S("cardin-s449-p50", "Récepteur à carte", 50, "Récepteur à carte RSQ449, connexions et cavaliers."),
      S("cardin-s449-p51", "Mini récepteur", 51, "Mini récepteur RQM449 : bornier à 8 voies, cavaliers J1.")
    ],
    "intratone-centrale-1-porte": [
      S("intratone-c1-p05", "Carte et switches", 5, "Position de la mémoire, de la pile et des LED, tableau des switches S1 à S6."),
      S("intratone-c1-p06", "Schéma de câblage", 6, "Câblage de la centrale 03-0102 avec les appareils, la ventouse ou la gâche et le câble de liaison.")
    ],
    "intratone-centrale-2-portes": [
      S("intratone-c2-p03", "Câblage", 3, "Alimentation et connecteurs de la centrale 2 portes."),
      S("intratone-c2-p06", "Bouton poussoir, ventouse et gâche", 6, "Câblage du bouton poussoir avec ventouse ou gâche."),
      S("intratone-c2-p07", "Menu de configuration", 7, "Écrans du menu de configuration de la centrale.")
    ],
    "intratone-only-one": [
      S("intratone-onlyone-p06", "Schéma de câblage", 6, "Câblage de l'interphone ONLY-ONE sur la centrale 03-0102.")
    ],
    "intratone-carte-relais": [
      S("intratone-relais-p3", "Câblage", 3, "Câblage des modules 17-0102, 03-0102 et des cartes relais des portes 2, 3 et 4."),
      S("intratone-relais-p6", "Réglages", 6, "Potentiomètres P1 et P2 et switches S1 / S2 de numéro de porte.")
    ],
    "intratone-clavier-mini": [
      S("intratone-mini-kp-p4", "Câblage et pose", 4, "Bus 3-4 et fixation du clavier."),
      S("intratone-mini-kp-p5", "Second clavier", 5, "Ajout ou remplacement d'un second clavier.")
    ],
    "intratone-mini-hf": [
      S("intratone-minihf-p06", "Schéma de câblage", 6, "Câblage du module Mini HF avec le clavier 04-0107."),
      S("intratone-minihf-p07", "Schéma produit et réseau", 7, "Bornier, switch antenne, impulsion et LED de réception réseau.")
    ],
    "optex-ovs02gt": [
      S("optex-ovs02-p5", "Voyant et bornier", 5, "Tableau des couleurs du voyant, bornier 1 (alimentation et sortie 1) et bornier 2 (sortie 2 et entrée), bouton reset d'usine."),
      S("optex-ovs02-p37", "Spécifications et zone de détection", 37, "Tableau des spécifications du OVS-02GT et diagramme de zone de détection (portée 1 m, 3 m, 8 m).")
    ],
    "afca-starteco3-contacteurs": [
      S("afca-c3-p03", "Vue générale de la carte", 3, "Position des fusibles F1 / F2, boutons P1-P3, switchs, LEDs, cavalier J1, potentiomètres R1 / R2 et bornes d'alimentation."),
      S("afca-c3-p04", "Raccordement de la platine", 4, "Tous les borniers : arrêt d'urgence, sorties 24 V, clignotants, options, commandes, fins de course, cellules et barres palpeuses, avec la liste des bornes."),
      S("afca-c3-p06", "Autotest : cellule émettrice / réceptrice", 6, "Cavalier J1, alimentation de la cellule émettrice par la borne 8 (la notice dit 7 dans son texte)."),
      S("afca-c3-p07", "Autotest : cellules amplifiées", 7, "Amplificateur MPF3-912RSL, bornes 3 et 8 sur l'entrée test."),
      S("afca-c3-p08", "Barre palpeuse AFCA et cellules PE12", 8, "Raccordement des cellules PB18 (barre palpeuse) et PE12, réglage de sensibilité R1 / R2.")
    ],
    "afca-starteco3-2moteurs": [
      S("afca-c3m-p03", "Alimentation et moteurs", 3, "Alimentation 230 V (bornes 42 à 44), moteurs M1 (45 à 48) et M2 (49 à 52) avec condensateurs."),
      S("afca-c3m-p04", "Raccordement de la platine", 4, "Bornier complet, fins de course des deux moteurs (24-26 et 27-29), cellules et barres palpeuses."),
      S("afca-c3m-p06", "Autotest des sécurités", 6, "Raccordement des cellules et amplificateurs avec autotest.")
    ],
    "v2-pd19": [
      S("v2-pd19-p66", "Raccordements électriques PD19", 66, "Bornier de la PD19 (Ayros 400-1200 / Forteco 1200-2200) : alimentation, moteur, fin de course, photocellules, barres palpeuses, 24 V~, antenne, ADI. Manuel ZIS371."),
      S("v2-ev-forteco-1", "Vue éclatée Forteco", 1, "Éclaté des pièces détachées Forteco (fichier « Vue éclatée Forteco »)."),
      S("v2-ev-forteco-2", "Vue éclatée Forteco : nomenclature", 2, "Codes pièces par modèle (coffrets PD19, moteurs, condensateurs, carte)."),
      S("v2-ev-ayros230-1", "Vue éclatée Ayros 230 V", 1, "Éclaté des pièces détachées Ayros 230 V (fichier « Vue éclatée Ayros 230V »)."),
      S("v2-ev-ayros230-2", "Vue éclatée Ayros 230 V : nomenclature", 2, "Codes pièces par modèle (moteurs, condensateurs, coffrets PD19 / PD20).")
    ],
    "v2-ayros1500": [
      S("v2-ev-ayros230-1", "Vue éclatée Ayros 230 V (dont Ayros 1500-I)", 1, "Éclaté des pièces détachées : la vue présente aussi l'Ayros 1500-I (fichier « Vue éclatée Ayros 230V »)."),
      S("v2-ev-ayros230-2", "Vue éclatée Ayros 230 V : nomenclature", 2, "Codes pièces par modèle, dont l'Ayros 1500-I (moteur, condensateur, coffret PD20).")
    ],
    "v2-ayros24v": [
      S("v2-pd14-p72", "Interface ADI et raccordements PD14", 72, "Description de l'interface ADI et bornes J1 à J9, E1 à E5 de la PD14. Manuel ZIS334."),
      S("v2-pd14-p73", "Schéma de raccordement PD14", 73, "Schéma de la carte : moteur, encodeur, fin de course, batterie 24 V, récepteur, accessoires."),
      S("v2-ev-ayros24-1", "Vue éclatée Ayros 24 V", 1, "Éclaté des pièces détachées Ayros 24 V (fichier « Vue éclatée Ayros 24V »)."),
      S("v2-ev-ayros24-2", "Vue éclatée Ayros 24 V : nomenclature", 2, "Codes pièces par modèle.")
    ],
    "v2-heavy1": [
      S("v2-heavy1-p58", "Branchements électriques HEAVY1", 58, "Branchements de la carte supérieure et de la carte inférieure : bornes, moteur, frein, sorties, alimentation. Notice ZIS354 (fichier ZIS355)."),
      S("v2-heavy1-p59", "Implantation des cartes HEAVY1", 59, "Vue de la carte logique, de la carte puissance et de la façade.")
    ],
    "afca-forteco-pass": [
      S("afca-fpass-p10", "Schéma armoire de commande PD19", 8, "Caractéristiques de la PD19 et schéma de la carte avec ses borniers (page imprimée 8)."),
      S("afca-fpass-p21", "Raccordement feu orange, antenne, cellules, éclairage", 19, "Exemple de cellule SENSIVA, feu LUMOS M avec antenne, éclairage 230 V (page imprimée 19).")
    ],
    "afca-startindus": [
      S("afca-si-p03", "Alimentation de la carte", 3, "Alimentation 230 / 400 V et raccordement moteur."),
      S("afca-si-p04", "Raccordements", 4, "Bornier complet 1 à 31, entrées, alimentations, options."),
      S("afca-si-p13", "Affectation des entrées", 13, "Entrées IN1 à IN10 et fonctions affectables.")
    ],
    "afca-startone": [
      S("afca-st1-p03", "Implantation de la carte", 3, "Caractéristiques techniques, fusibles, connecteurs H3 / H4, boutons de programmation et borniers."),
      S("afca-st1-p04", "Alimentation platine et moteurs", 4, "Alimentation 230 V mono et moteurs M1 / M2 (bornes 46 à 56 d'après le schéma)."),
      S("afca-st1-p05", "Raccordement de la platine et propriétés des bornes", 5, "Bornes 1 à 41 et 57-58 (antenne), liste des bornes."),
      S("afca-st1-p07", "Affectation des entrées de la carte", 7, "Entrées IN1 à IN13 par défaut, clavier et canaux du récepteur MR2."),
      S("afca-st1-p08", "Autotest des entrées de sécurité", 8, "Cavalier J1, sortie 7-8, alimentation 12 V autotest.")
    ],
    "v2-city1evo": [
      S("v2-city1-p67", "Schéma de câblage et bornier", 65, "Implantation de la platine : bornes L1-L11, E1-E5, Z1-Z6, H1-H8, L / N, touches DOWN / MENU / UP, connecteurs RM, ADI, USB, J1-J3, fusible F1."),
      S("v2-city1-p66", "Tableau des bornes", 64, "Fonction de chaque borne (communs, NO / NF), LED MAINS / OVERLOAD et fusible F1."),
      S("v2-city1-p72", "Encodeurs et fins de course", 70, "Raccordement de 1 ou 2 moteurs avec encodeur, fins de course, clignotant."),
      S("v2-city1-p75", "Panneau de contrôle", 73, "Afficheur, flèches, segments des entrées et menus -Pr.S, -Pr.F, -Cnt, -APP, -dEF."),
      S("v2-city1-p80", "Tableau des événements", 78, "Codes E001 à E242 avec niveau et message affiché.")
    ],
    "v2-city4evo": [
      S("v2-city4-p63", "Schéma de câblage CITY4-EVO", 61, "Borniers L1-L11, Z1-Z6, G1-G7, N / L, touches DOWN / MENU / UP, LED MAINS / OVERLOAD, fusible F1, connecteurs RM, ADI, USB, J1-J3."),
      S("v2-city4-p62", "Description des bornes", 60, "Légende des borniers L, Z, G et des LED, fusible F1 et cavaliers du module LOW ENERGY."),
      S("v2-city4-p69", "Panneau de contrôle (afficheur)", 67, "Segments d'état des entrées, points des touches, flèches d'état du portail, alarmes ADI."),
      S("v2-city4-p72", "Compteurs de cycles", 70, "Lecture du total, de SErv et programmation de l'entretien."),
      S("v2-city4-p71", "Auto-apprentissage des temps de travail", 69, "Procédure -APP / t.LAv avec ou sans fin de course et capteur d'obstacles.")
    ],
    "v2-city11": [
      S("v2-city11-p18", "Branchements électriques", 16, "Bornier L1-L11, K1-K10, N / L, antenne, récepteur MR, dip-switchs, trimmers et LED."),
      S("v2-city11-p19", "Trimmers et LED", 17, "Plages des trimmers POWER / WORK / PAUSE / DELAY et état des LED au repos."),
      S("v2-city11-p20", "Dip-switchs 1 à 12", 18, "Tableau des fonctions de la logique de fonctionnement."),
      S("v2-city11-p15", "Caractéristiques techniques", 13, "Alimentation, charges, fusible F1 et dimensions.")
    ],
    "afca-city5": [
      S("afca-city5-p03", "Présentation de la platine", 3, "Borniers G1-G7, Z1-Z6, M1-M12, récepteur MR1, feux extérieurs / intérieurs, repères de l'afficheur."),
      S("afca-city5-p05", "Tableau des fonctions paramétrables", 5, "Paramètres riP.E à FinE avec valeurs possibles et valeurs d'usine.")
    ],
    "afca-flexy2": [
      S("afca-flexy2-p03", "Raccordement aux borniers", 3, "Bornes L1-L11, K1-K10, N / L, détail des entrées de commande et de sécurité, éclairage, feux orange, fins de course."),
      S("afca-flexy2-p05", "Dip-switchs 1 à 12", 5, "Tableau des fonctions programmables par dip-switch.")
    ],
    "jcm-rb3-868": [
      S("jcm-rb3-p05", "Récepteur RB3 R868", 5, "LED R1 / R2 / R3, bouton PROG, pont MR, sélecteurs SW1 à SW4, entrée ATEST, sorties R1 / R2 / R3."),
      S("jcm-rb3-p06", "Émetteur RB3 T868", 6, "Entrées IN1 / IN2, LED d'état, piles, sélecteurs d'options selon le type de bande."),
      S("jcm-rb3-p09", "Raccordement à l'armoire", 9, "Sorties de sécurité vers une entrée contact de sécurité ou bande 8k2."),
      S("jcm-rb3-p13", "Raccordement de la bande à l'émetteur", 13, "Bande résistive, contact mécanique, bandes optiques OSE-S7502 / OSE-S7502B.")
    ],
    "jcm-radioband": [
      S("jcm-radioband-p1", "Émetteur TBX et récepteur RU", 1, "Implantation des cartes : entrée B1, connecteur piles, bouton PROG, cavaliers CS1 / BS1 / CS2 / BS2, bornes d'alimentation, R1, R2 et ATEST."),
      S("jcm-radioband-p3", "Autotest, voyants, programmation", 3, "Polarité de l'autotest, voyants, programmation du TBX / RU / RC-RCS et fonction CHECK.")
    ],
    "afca-startrm": [
      S("afca-srm-p04", "Raccordement de la platine et propriétés des bornes", 4, "Bornier J1 (1 à 18), J3 (19 à 32), J2 fins de course (33 à 37), J4 terre, liste des bornes.")
    ],
    "v2-forteco2500": [
      S("v2-forteco-p66", "Raccordements électriques PD20", 66, "Bornier L N, B1-B2 clignotant, B3-B4 courtoisie, M1 à M12 (START, START P., STOP, photocellules, barres palpeuses, 24 V~), A1-A2 antenne, connecteurs ADI et récepteur."),
      S("v2-forteco-p68", "Panneau de contrôle (afficheur)", 68, "Signification des segments, flèches et points de l'afficheur et des touches.")
,
      S("v2-ev-forteco-1", "Vue éclatée Forteco", 1, "Éclaté des pièces détachées Forteco (fichier « Vue éclatée Forteco ») : repères 1 à 22 et A à D."),
      S("v2-ev-forteco-2", "Vue éclatée Forteco : nomenclature", 2, "Codes pièces de la vue éclatée, dont les coffrets de commande PD19 et PD20 (Forteco 2500-I) et la carte inverter.")
    ],
    "afca-starteco4-2m-revers": [
      S("afca-c4r-p03", "Moteur et électrofrein", 3, "Bornes 42-44 alimentation, moteur 1 (45-48) et moteur 2 (49-52), condensateur, frein sur l'option 1 (12-13), déblocage."),
      S("afca-c4r-p05", "Fins de course inductifs", 5, "Fins de course NPN 12 V sur 24-26, inversion des fils 25-26 selon le sens d'ouverture."),
      S("afca-c4r-p06", "Implantation de la platine", 6, "Fusibles F1 F2 F3, connecteurs REC1 H1 H2 H3, boutons BP1 à BP3, potentiomètre P1."),
      S("afca-c4r-p07", "Raccordement des accessoires", 7, "Bornier complet 1 à 41, propriétés des bornes, cellules, barres palpeuses, commandes.")
    ],
    "faac-780d": [
      S("faac-780d-p40", "Platine 780D : composants et bornier J1", 40, "Implantation de la platine (afficheur, touches F / + / −, connecteurs J1 à J8, fusibles F1 / F2), caractéristiques et liste des bornes de J1.")
    ],
    "faac-455d": [
      S("faac-455d-p24", "Platine 455 D : implantation et connexions", 24, "Vue de la platine (afficheur, touches, J1 à J6, F1 / F2), caractéristiques, connexions moteurs, clignotant, accessoires et fins de course."),
      S("faac-455d-p25", "Photocellules et dispositifs de sécurité", 25, "Schémas de raccordement des photocellules et sécurités en ouverture / fermeture (fig. 3 à 7).")
    ],
    "faac-e024s": [
      S("faac-e024s-p04", "E024S : implantation et connexions", 4, "Vue de la platine : touches SW1 à SW3, LED LD4 à LD8, dip DS1, connecteurs J1 à J11, câblage moteurs."),
      S("faac-e024s-p06", "Caractéristiques et description des bornes", 6, "Tableau technique, liste des composants et description des borniers J5, J10, J2, J3, J4, J7, J8.")
    ],
    "nice-robus-r10": [
      S("nice-robus-r10-p10", "Types de câbles et description des branchements", 10, "Tableaux des câbles électriques (longueurs maxi) et description des bornes FLASH, OGI, BLUEBUS, STOP, Sbs, OPEN, CLOSE, AUX_IN, AERIAL."),
      S("nice-robus-r10-p11", "Schéma des branchements (fig. 7)", 11, "Implantation de la logique : bornes, LED, touches L1…L8, fusible 1,6 AT, récepteur radio et sélecteur.")
    ],
    "doitrand-lf82": [
      S("doitrand-lf82-p1", "Carte LF82 : bornier et raccordements", 1, "Plan 1-1 (21/11/2005) : alimentation, feux, contacts secs, cellules, palpeur, antenne, fins de course, commande d'ouverture, alimentations 24 V."),
      S("doitrand-lf82-p5", "Raccordement des cellules intérieure et extérieure", 5, "Plan du 27/05/2005 : bornier J3, cellules Carlo Gavazzi."),
      S("doitrand-lf82-p6", "Câblage du variateur Telemecanique", 6, "Plan du 21/11/2005 : alimentation, variateur, bornier moteur, relais 12 V et carte LF82.")
    ],
    "dea-net230n": [
      S("dea-net230n-p72", "Schéma de base NET230N", 72, "Implantation de la carte : bornes 1 à 34, entrées IN_1 à IN_6, connecteurs CON 1 (NET-EXP) et CON 2 (NET-NODE / MEMONET), jumper FL / WL, et numérotation des segments de l'afficheur pour P013 (page FR-6)."),
      S("dea-net230n-p73", "Câblage TYPE 00 (coulissant)", 73, "Page FR-7 : alimentation, moteur, encodeur, photocellule, START, PED., SAFETY, fins de course, clignotant et lampe témoin."),
      S("dea-net230n-p74", "Câblage TYPE 01 (battant)", 74, "Page FR-8 : deux moteurs (encodeurs en pointillé, seulement s'ils sont présents ; le TYPE 01 est sans encodeur par défaut), photocellules 1 et 2, commandes et sécurités."),
      S("dea-net230n-p75", "Câblage TYPE 02 (basculante)", 75, "Page FR-9."),
      S("dea-net230n-p76", "Câblage TYPE 03 (barrière)", 76, "Page FR-10 : moteur M1, encodeur, électro-aimant, photocellule 1, START."),
      S("dea-net230n-p77", "Câblage TYPE 04 (sectionnelle)", 77, "Page FR-11 : moteur, encodeur, STOP, FCA1, FCC1, photocellule 1."),
      S("dea-net230n-p78", "Câblage TYPE 05 (bollard)", 78, "Page FR-12.")
    ],
    "dea-net24n": [
      S("dea-net24n-p08", "Schéma de base NET24N", 8, "Implantation de la carte : bornes, entrées IN_1 à IN_6, jumpers J5 / J9 des encodeurs, connecteurs NET-NODE / MEMONET et NET-EXP (page FR-6)."),
      S("dea-net24n-p09", "Câblage TYPE 00 (coulissant)", 9, "Page FR-7 : transformateur 230 / 22 V, moteurs (séries REV et LIVI N), photocellule, commandes, fins de course, lampe témoin."),
      S("dea-net24n-p10", "Câblage TYPE 01 (battant)", 10, "Page FR-8 : deux moteurs avec encodeurs, photocellules 1 et 2, START, PED., SAFETY, STOP, électro-serrure."),
      S("dea-net24n-p11", "Câblage TYPE 02 (basculante)", 11, "Page FR-9."),
      S("dea-net24n-p12", "Câblage TYPE 03 (barrière)", 12, "Page FR-10.")
    ],
    "elka-p2500-5000": [
      S("elka-p-p41", "Connecteur de la logique MO 24", 41, "Figure 33 : emplacement des bornes et tableau des contacts à ouverture ou ponts obligatoires à la mise en service."),
      S("elka-mo24-p05", "Platine MO 24 : toutes les bornes", 5, "Figure 1 de la partie 2 : platine, bornes 1 à 48, joystick, LED, DIP-switch, commutateur de service."),
      S("elka-p-p43", "Alimentation 230 V / bloc RSP320-24", 43, "Figure 34 : interrupteur principal, bloc d'alimentation RSP320-24 et détection de panne de courant ANAE (option)."),
      S("elka-p-p44", "Sorties 12 V / 24 V", 44, "Figure 35 : sorties X1/1 à X1/8 (12 V et 24 V)."),
      S("elka-p-p45", "Moteur BLDC", 45, "Figure 36 : raccordement du moteur BLDC sur les bornes U V W HA HB HC."),
      S("elka-p-p46", "Boucles d'induction A / B / C", 46, "Figure 37 : raccordement des boucles LOOP-A, LOOP-B, LOOP-C."),
      S("elka-p-p47", "Entrées : touches et sécurités", 47, "Figure 38 : SLZ, LS, Bm, BT*, BTA1, BTA2, ANT, BTZ1A, BTZ2, BTS, NAE."),
      S("elka-p-p48", "Relais multifonctions 7 à 14 (option)", 48, "Figure 39 : platine d'extension et exemple de câblage.")
    ],
    "elka-t3000-3500": [
      S("elka-t-p33", "Connecteur de la logique MO 24", 33, "Figure 23 : emplacement des bornes et tableau des contacts à ouverture ou ponts obligatoires."),
      S("elka-t-p36", "Alimentation 230 V / bloc RSP320-24", 36, "Figure 24 : interrupteur principal, bloc d'alimentation RSP320-24 et détection de panne de courant ANAE (option)."),
      S("elka-t-p37", "Sorties 12 V / 24 V", 37, "Figure 25 : sorties X1/1 à X1/8 (12 V et 24 V)."),
      S("elka-t-p38", "Moteur BLDC", 38, "Figure 26."),
      S("elka-t-p39", "Boucles d'induction A / B / C", 39, "Figure 27."),
      S("elka-t-p40", "Entrées : touches et sécurités", 40, "Figure 28.")
    ],
    "lba-67": [
      S("lba67-p24", "Bornier façade 1 à 29", 24, "Page 24 : bornier en bas de la platine, commandes, modes, reports, feux et alimentation."),
      S("lba67-p61", "Schéma électrique : irréversibles (LBA 6 / 7)", 61, "Page 61 : automate LOGO, variateur, bornes 002BN, boucles et accessoires."),
      S("lba67-p62", "Borniers 002BN et tables", 62, "Page 62 : numérotation du bornier interne 002BN et tableaux d'options."),
      S("lba67-p60", "Implantation LBA 6 / 7", 60, "Page 60 : implantation des composants de la platine."),
      S("lba67-p63", "Implantation : réversibles", 63, "Page 63."),
      S("lba67-p64", "Schéma électrique : réversibles (6R / 63PK / 7R / 74)", 64, "Page 64 : automate, variateur Unidrive M200 0,25 kW, moteur, capteurs et accessoires."),
      S("lba67-p65", "Borniers : réversibles", 65, "Page 65.")
    ],
    "lba-4": [
      S("lba4-p41", "Tableau de programmation SW1", 41, "Page 41 : positions des dip-switches SW1-1 à SW1-8 et fonctions."),
      S("lba4-p59", "Schéma électrique LBA 4", 59, "Page 59 : platine ENPC001652, variateur, moteur, capteurs.")
    ],
    "afca-starteco4-contacteurs": [
      S("afca-c4-p03", "Alimentation de la carte", 3, "Alimentation 400 V tri ou 230 V, moteur sur U V W, condensateur, pont de sélection de tension."),
      S("afca-c4-p05", "Raccordement de la platine", 5, "Bornier complet avec les entrées IN1 à IN11 et la liste des bornes."),
      S("afca-c4-p07", "Autotest des entrées de sécurité", 7, "Cavalier J1 : 24 V AC ou contact sec, cellule émettrice / réceptrice avec autotest."),
      S("afca-c4-p09", "Barre palpeuse et cellules PE12", 9, "Cellules PB18 (barre palpeuse) et PE12 sans ampli, réglage de sensibilité."),
      S("afca-c4-p11", "Commandes externes", 11, "Récepteur WALLY 2, détecteur de boucle LDP1, boucle magnétique avec ZPD11 sur les entrées 18 à 23.")
    ],
    "came-zl90": [
      S("came-zl90-p15", "Branchements électriques", 15, "Liste des bornes (alimentation, accessoires, clignotant, moteurs M1 / M2 avec encodeur, boutons, stop, antenne). Pas de dessin de carte dans cette notice.")
    ],
    "came-zbx241": [
      S("came-zbx241-p09", "Carte ZBX241 : composants, batteries, fins de course", 9, "Description technique de la carte, branchement des batteries d'urgence (carte BN1) et des fins de course selon le moteur."),
      S("came-zbx241-p11", "Branchements électriques", 11, "Tableau des bornes avec symboles : alimentation 230 V, moteur, clignotant, boutons, contacts de sécurité, fins de course, antenne, polarité des photocellules.")
    ],
    "came-zbx10": [
      S("came-zbx10-p11", "Branchements électriques et test des sécurités", 11, "Liste des bornes (moteur 230 V, encodeur, fins de course, clignotant) et raccordement du test de contrôle des photocellules DOC / DIR.")
    ],
    "came-za3": [
      S("came-za3-p11", "Branchements électriques", 11, "Liste des bornes : alimentation, moteurs, clignotant, serrure, lampe cycle, boutons, contacts de sécurité, antenne.")
    ],
    "came-za4": [
      S("came-za4-p11", "Branchements électriques", 11, "Liste des bornes de la carte ZA4 (alimentation, moteur, accessoires, boutons, sécurités, antenne).")
    ],
    "came-za5": [
      S("came-za5-p11", "Branchements électriques", 11, "Liste des bornes de la carte ZA5 (alimentation, moteurs, accessoires, boutons, sécurités, antenne).")
    ],
    "came-zl92": [
      S("came-zl92-p11", "Branchements électriques", 11, "Dessin de la carte avec lecteur, capteur transpondeur et sélecteur à clavier, plus la liste des bornes."),
      S("came-zl92-p12", "Test de contrôle des photocellules", 12, "Raccordement des photocellules DOC / DELTA et DIR / DELTA S avec test de fonctionnement.")
    ],
    "came-88003-0184": [
      S("came-88003-0184-p09", "Description des composants de la carte", 9, "Dessin de la carte numéroté (borniers moteur, fins de course, sécurités, commandes, antenne, connecteurs) avec légende.")
    ],
    "came-za3p": [
      S("came-za3p-p13", "Description des composants de la carte", 13, "Dessin de la carte numéroté (borniers, trimmers TL / TFA, dip-switchs, fusibles) avec légende."),
      S("came-za3p-fa01883-p05", "Autre notice (FA01883) : description des parties", 5, "Notice ZA3P d'une édition antérieure (FA01883-FR) : dessin de la carte numéroté. Vérifier que la carte est la même que sur la notice FA02020."),
      S("came-za3p-fa01883-p07", "Autre notice (FA01883) : branchements électriques", 7, "Alimentation 230 V, transformateur, moteurs M1 / M2 et contacts de fin de course dessinés sur la carte."),
      S("came-za3p-fa01883-p08", "Autre notice (FA01883) : signalisation et commandes", 8, "Raccordement du clignotant, voyant, lampe de cycle et des boutons de commande (ouverture, fermeture, stop)."),
      S("came-za3p-fa01883-p09", "Autre notice (FA01883) : dispositifs de sécurité", 9, "Raccordement des photocellules DELTA et DIR / DELTA S, avec ou sans test de contrôle.")
    ],
    "roger-b70-1dc": [
      S("roger-b70-1dc-p126", "Installation type et câbles conseillés", 126, "Dessin de l'installation complète avec repères et tableau des câbles conseillés (section, longueur maxi)."),
      S("roger-b70-1dc-p127", "Raccordements électriques", 127, "Alimentation, transformateur, moteur et batteries : dessins de câblage de la carte."),
      S("roger-b70-1dc-p128", "Commandes et accessoires", 128, "Début du tableau des contacts : alimentation accessoires, lampe, sécurités, photocellules."),
      S("roger-b70-1dc-p129", "Commandes et accessoires : bornes", 129, "Tableau des contacts avec le détail de chaque borne et de ses paramètres."),
      S("roger-b70-1dc-p130", "Commandes et accessoires : bornes (suite)", 130, "Suite du tableau des contacts : sécurités, lampes, serrures, récepteur radio, chargeur de batterie.")
    ],
    "roger-b70-1dchp": [
      S("roger-b70-1dchp-p119", "Installation type et câbles conseillés", 119, "Dessin de l'installation complète avec repères et tableau des câbles conseillés (section, longueur maxi)."),
      S("roger-b70-1dchp-p120", "Raccordements électriques", 120, "Alimentation, transformateur, moteur et batteries : dessins de câblage de la carte."),
      S("roger-b70-1dchp-p121", "Commandes et accessoires", 121, "Début du tableau des contacts."),
      S("roger-b70-1dchp-p122", "Commandes et accessoires : bornes", 122, "Tableau des contacts avec le détail de chaque borne et de ses paramètres.")
    ],
    "roger-b70-2ml": [
      S("roger-b70-2ml-p102", "Installation type et câbles conseillés", 102, "Dessin de l'installation complète avec repères et tableau des câbles conseillés (section, longueur maxi)."),
      S("roger-b70-2ml-p103", "Raccordements électriques", 103, "Alimentation, transformateur, moteur et batteries : dessins de câblage de la carte."),
      S("roger-b70-2ml-p104", "Commandes et accessoires", 104, "Début du tableau des contacts."),
      S("roger-b70-2ml-p105", "Commandes et accessoires : bornes", 105, "Tableau des contacts avec le détail de chaque borne et de ses paramètres.")
    ],
    "roger-edge1": [
      S("roger-edge1-p115", "Installation type et câbles conseillés", 115, "Dessin de l'installation complète avec repères et tableau des câbles conseillés (section, longueur maxi)."),
      S("roger-edge1-p116", "Raccordements électriques", 116, "Alimentation, transformateur, moteur et batteries : dessins de câblage de la carte."),
      S("roger-edge1-p117", "Commandes et accessoires", 117, "Début du tableau des contacts."),
      S("roger-edge1-p118", "Commandes et accessoires : bornes", 118, "Tableau des contacts avec le détail de chaque borne et de ses paramètres."),
      S("roger-edge1-p119", "Commandes et accessoires : bornes (suite)", 119, "Suite du tableau des contacts : sécurités, lampes, serrures, récepteur radio, chargeur de batterie.")
    ],
    "roger-f70-ipu36": [
      S("roger-f70-p005", "F70/IPU36/BOX", 5, "Fig. 1 : boîtier, transformateur, fusibles F1 à F4, raccordement des 2 moteurs."),
      S("roger-f70-p007", "Raccordements et sortie COR", 7, "Fig. 2 et 3 : clignotant, électroserrure, commandes, antenne ; usages de la sortie COR."),
      S("roger-f70-p008", "Photocellules F4ES / F4S", 8, "Fig. 4 : 1 paire de photocellules synchronisées (cavaliers A / B)."),
      S("roger-f70-p015", "Onduleur F70/INV36/1", 15, "Fig. 8 : bornier +36V / 0V / LNA / LNB, LED L1M / L2M, fins de course, électrobloc, phases du moteur.")
    ],
    "roger-h70-104ac": [
      S("roger-h70-104ac-p092", "Installation type et câbles conseillés", 92, "Dessin de l'installation et tableau des câbles conseillés."),
      S("roger-h70-104ac-p006", "Carte H70/104AC", 6, "Fig. 1 : secteur, moteur, condensateur, bornier 11 à 28, connecteurs SB, FC, ENC."),
      S("roger-h70-104ac-p007", "Carte H70/105AC", 7, "Fig. 2 : bornier, fins de course et encodeur 29 à 35."),
      S("roger-h70-104ac-p008", "Clignotant, courtoisie, électroserrure", 8, "Fig. 3 à 5 : FIFTHY/230, éclairage 230 V, électroserrure H70/EL (79 99)."),
      S("roger-h70-104ac-p014", "Remplacement H70/101AC – 103AC", 14, "Fig. 11 : remplacement dans la série H30.")
    ],
    "roger-h70-200ac": [
      S("roger-h70-200ac-p105", "Installation type et câbles conseillés", 105, "Dessin de l'installation et tableau des câbles conseillés."),
      S("roger-h70-200ac-p008", "Carte et moteurs", 8, "Fig. 1 : secteur, fusible F1, moteurs 1 et 2 avec condensateurs, bornier."),
      S("roger-h70-200ac-p009", "Bornier commandes et sécurités, électroserrure", 9, "Fig. 2 et 3 : numérotation des bornes 27 à 43, électroserrure H70/EL."),
      S("roger-h70-200ac-p012", "Fins de course magnétiques et encodeur optique", 12, "Fig. 6 : fins de course magnétiques ; fig. 7 : encodeurs optiques (75 01) et fins de course."),
      S("roger-h70-200ac-p014", "Encodeur magnétique R21", 14, "Fig. 9 : série R21 à partir de V.1, 75 03 ; gris ENC, noir COM, marron +5V.")
    ],
    "roger-b70-2b": [
      S("roger-b70-2b-p086", "Installation type et câbles conseillés", 86, "Dessin de l'installation et tableau des câbles conseillés."),
      S("roger-b70-2b-p006", "Carte B70/2B", 6, "Fig. 1 : secteur, fusibles, moteurs M1 / M2, récepteur."),
      S("roger-b70-2b-p007", "Bornier commandes, sécurités et fins de course", 7, "Fig. 2 : ORO = fin de course d'ouverture, COS2 = fin de course de fermeture."),
      S("roger-b70-2b-p008", "Fins de course du moteur 1", 8, "Fig. 3 : raccordement des fins de course du moteur 1."),
      S("roger-b70-2b-p009", "Fins de course de fermeture des 2 moteurs", 9, "Fig. 4 : fins de course de fermeture des moteurs 1 et 2 en série.")
    ],
    "roger-b70-1t": [
      S("roger-b70-1t-p135", "Installation type TW90 et câbles conseillés", 135, "Dessin de l'installation TW90 et tableau des câbles conseillés."),
      S("roger-b70-1t-p136", "Installation type WAY et câbles conseillés", 136, "Dessin de l'installation de la barrière WAY et tableau des câbles conseillés."),
      S("roger-b70-1t-p010", "Câblage de la carte dans la WAY", 10, "Fig. 4 : secteur, fusibles, moteur, encodeur, SB, récepteur, B74/BCONNECT et lumières de lisse ALED sur SC / COM."),
      S("roger-b70-1t-p015", "Bornier commandes et sécurités", 15, "Fig. 7 et 8 : bornier complet avec numérotation du schéma, éclairage de courtoisie et sortie COR."),
      S("roger-b70-1t-p138", "Commandes et accessoires : bornes", 138, "Tableau des contacts : COR, SC, photocellules, bords sensibles, STOP, antenne, horloge."),
      S("roger-b70-1t-p139", "Commandes et accessoires : bornes (suite)", 139, "Suite : commandes, clignotant, encodeur, fins de course, SB, récepteur, chargeur de batteries, WiFi.")
    ],
    "roger-ctrl": [
      S("roger-ctrl-p132", "Installation type et câbles conseillés", 132, "Dessin de l'installation complète avec repères et tableau des câbles conseillés (section, longueur maxi)."),
      S("roger-ctrl-p133", "Raccordements électriques", 133, "Alimentation, transformateur, moteur et batteries : dessins de câblage de la carte."),
      S("roger-ctrl-p134", "Commandes et accessoires", 134, "Début du tableau des contacts."),
      S("roger-ctrl-p135", "Commandes et accessoires : bornes", 135, "Tableau des contacts avec le détail de chaque borne et de ses paramètres."),
      S("roger-ctrl-p136", "Commandes et accessoires : bornes (suite)", 136, "Suite du tableau des contacts : sécurités, lampes, serrures, récepteur radio, chargeur de batterie.")
    ],
    "bft-thalia-a80-a160": [
      S("thalia-p03", "Platine et bornier", 3, "Figure B : platine THALIA, afficheur, touches S1 S2 S3, bornes 10 à 73, exemples AUX 2 et alimentation DUO / FLAT."),
      S("thalia-p04", "Afficheur et touches de programmation", 4, "Diagnostics, afficheur 8888 et fonction des touches + − OK (commandes radio, navigation, autoset)."),
      S("thalia-p10", "Compatibilité des moteurs", 10, "Moteurs compatibles avec la THALIA BT A80 / A160 et dates de fabrication minimales."),
      S("thalia-p11", "Raccordement moteur : IGEA BT", 11, "Figure E : branchement du moteur IGEA BT, valeur de la logique TYPE DE MOTEUR et cycles maximums.")
    ],
    "bft-merak-deimos-ultra": [
      S("deimos-p03", "Platine et bornier", 3, "Figure G : platine MERAK, afficheur, touches S1 S2 S3, bornes 10 à 75, AUX 0 et AUX 3, entrées FAULT."),
      S("deimos-p04", "Menu simplifié", 4, "Figure 1 : langue, dir, preset, autoset et mémorisation radio."),
      S("deimos-p09", "Menus avancés et diagnostics", 9, "Accès aux menus (figure 1), menu radio, menu stat et tableau des codes de diagnostic.")
    ],
    "bft-merak": [
      S("bft-merak-p052", "Configuration des sorties AUX", 52, "Fonctions des sorties AUX et des entrées de la carte, selon la logique choisie."),
      S("bft-merak-p053", "Bornier et configuration", 53, "Tableau des bornes : alimentation, moteur, entrées de commande et de sécurité, antenne.")
    ],
    "bft-leo-b-cbb": [
      S("bft-leo-b-cbb-p032", "Données techniques et bornier", 32, "Caractéristiques de la carte, préparation de l'installation et tableau des bornes."),
      S("bft-leo-b-cbb-p033", "Bornier et configuration", 33, "Tableau des bornes et configuration des entrées et sorties.")
    ],
    "nice-run": [
      S("nice-run-p61", "Connexions électriques et installation des dispositifs", 61, "Raccordement du clignotant LUCYB (S.C.A.), des photocellules MOFB (TX / RX), du sélecteur à clé MOSE et des commandes ouverture / fermeture (fig. 14 à 16), avec la liste des bornes.")
    ],
    "v2-lumos-m": [
      S("v2-lumos-p03", "Fixation du feu", 3, "Fig. 1 : sur plan horizontal avec la base A. Fig. 2 : sur paroi verticale avec la pièce B. Position verticale uniquement.")
    ]
  };
  window.hasSchema = id => !!(window.SCHEMAS && SCHEMAS[id] && SCHEMAS[id].length);

  let zoom = 1, cur = null;
  function viewer(list, i) {
    cur = { list, i };
    let o = document.getElementById("schv");
    if (!o) {
      o = document.createElement("div"); o.id = "schv"; o.className = "schv";
      o.innerHTML = `<div class="schb"><button id="schp" aria-label="Précédent">‹</button><span id="scht"></span><button id="schn" aria-label="Suivant">›</button><button id="schm" aria-label="Zoom moins">−</button><button id="schz" aria-label="Zoom plus">+</button><button id="schx" aria-label="Fermer">✕</button></div><div class="schc" id="schc"><img id="schi" alt=""></div>`;
      document.body.appendChild(o);
      const setZ = z => { zoom = Math.max(1, Math.min(4, z)); document.getElementById("schi").style.width = (zoom * 100) + "%"; };
      o.querySelector("#schz").onclick = () => setZ(zoom + 0.5);
      o.querySelector("#schm").onclick = () => setZ(zoom - 0.5);
      const closeV = () => { o.hidden = true; document.body.style.overflow = ""; };
      o.querySelector("#schx").onclick = () => { if (history.state && history.state.schv) history.back(); else closeV(); };
      addEventListener("popstate", () => { if (!o.hidden) closeV(); });
      o.onclick = e => { if (e.target === o) o.querySelector("#schx").click(); };
      o.querySelector("#schp").onclick = () => show(cur.i - 1);
      o.querySelector("#schn").onclick = () => show(cur.i + 1);
      o.querySelector("#schi").ondblclick = () => setZ(zoom >= 2 ? 1 : 2.5);
      addEventListener("keydown", e => { if (!o.hidden && e.key === "Escape") o.querySelector("#schx").click(); });
    }
    o.hidden = false; document.body.style.overflow = "hidden";
    try { history.pushState({ schv: 1 }, "", location.href); } catch (e) {}
    show(i);
  }
  function show(i) {
    const { list } = cur; if (i < 0 || i >= list.length) return; cur.i = i;
    zoom = 1; const img = document.getElementById("schi"); img.style.width = "100%"; img.src = list[i].f;
    document.getElementById("scht").textContent = `${i + 1} / ${list.length}`;
    document.getElementById("schc").scrollTo(0, 0);
  }
  window.schemaOpen = (id, i) => viewer(SCHEMAS[id], i);
  window.schemaPane = function (id) {
    const l = SCHEMAS[id] || [];
    return `<p class="note">Pages de la notice en image. Touchez une image pour l'agrandir (boutons + / − ou pincement, double-touche pour zoomer).</p>` +
      l.map((s, i) => `<figure class="sch" onclick="schemaOpen('${id}',${i})"><img src="${s.f}" loading="lazy" alt="${esc(s.t)}"><figcaption><b>${esc(s.t)}</b> <span class="p">notice p. ${s.p}</span><br>${esc(s.d)}</figcaption></figure>`).join("");
  };
})();
/* garde l'onglet actif visible quand la barre d'onglets défile (6 onglets sur téléphone) */
(function () {
  const f = () => setTimeout(() => { const b = document.querySelector('.tabs [aria-selected="true"]'); if (b && b.scrollIntoView) b.scrollIntoView({ inline: "center", block: "nearest" }); }, 0);
  addEventListener("hashchange", f); addEventListener("load", f);
})();
