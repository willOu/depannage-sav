/* Onglet « Schéma » : pages de notice en image (tirées des PDF fournis) avec visionneuse zoomable.
   SCHEMAS[idFiche] = [{ f: fichier, t: titre, p: page de la notice, d: légende }]. */
(function () {
  const S = (f, t, p, d) => ({ f: "schemas/" + f + ".webp", t, p, d });
  window.SCHEMAS = {
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
