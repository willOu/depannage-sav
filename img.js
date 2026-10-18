/* Onglet « Schéma » : pages de notice en image (tirées des PDF fournis) avec visionneuse zoomable.
   SCHEMAS[idFiche] = [{ f: fichier, t: titre, p: page de la notice, d: légende }]. */
(function () {
  const S = (f, t, p, d) => ({ f: "schemas/" + f + ".webp", t, p, d });
  window.SCHEMAS = {
    "casit-eq2000": [
      S("casit-eq2000-p6", "Schéma de câblage barres palpeuses et cellules", 6, "Dessin du fascicule technique Espacs (08/01/2006) : barres palpeuses TO / TF sur 14-15 / 14-16, cellules en série sur 17-19 alimentées en 24 V permanent. Le dessin cite une ASO ISK 76, hors notice CASIT.")
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
    "roger-ctrl": [
      S("roger-ctrl-p132", "Installation type et câbles conseillés", 132, "Dessin de l'installation complète avec repères et tableau des câbles conseillés (section, longueur maxi)."),
      S("roger-ctrl-p133", "Raccordements électriques", 133, "Alimentation, transformateur, moteur et batteries : dessins de câblage de la carte."),
      S("roger-ctrl-p134", "Commandes et accessoires", 134, "Début du tableau des contacts."),
      S("roger-ctrl-p135", "Commandes et accessoires : bornes", 135, "Tableau des contacts avec le détail de chaque borne et de ses paramètres."),
      S("roger-ctrl-p136", "Commandes et accessoires : bornes (suite)", 136, "Suite du tableau des contacts : sécurités, lampes, serrures, récepteur radio, chargeur de batterie.")
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
