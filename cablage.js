/* Atelier de câblage (formation) : #/cab (cartes), #/cab/<carte> (atelier).
   Le technicien pose des accessoires, les câble lui-même sur les borniers de la carte, met sous tension et teste.
   Le courant est calculé à partir du câblage (réseaux de fils et de contacts fermés) : un fil parcouru par le courant s'anime.
   La carte réagit d'après sa fiche (notices Roger IS142 pour la B70/1DCHP, IS117 pour la B70/1DC, IS240 pour la B70/2ML, IS160 pour l'EDGE1) : bornier, paramètres, afficheur d'état (§ 9.2), mode TEST (§ 9.3),
   codes d'erreur. Ce que la notice ne décrit pas n'est pas simulé et l'écran le dit.
   Disposition des borniers et des connecteurs : figure de la notice indiquée dans CFG.
   Les accessoires sont génériques (pas de modèle de marque) : cellule 24 V, digicode à contact sec, etc. */
(function () {
  /* une entrée par carte : disposition réelle des borniers (figure de la notice), rôle des bornes, connecteurs câblés en usine */
  const CFG = {
    "roger-b70-1dchp": { fig: "fig. 5 p. 9 et photo p. 5 de la notice IS142",
      haut: [[["31", "LAM"], ["30", "COM"], ["29", "+24V"], ["28", "PED"], ["27", "PP"], ["26", "CH"], ["25", "AP"], ["24", "ORO"], ["23", "COM"]], [["22", "ANT"], ["21", "ANT"]]],
      bas: [[["8", "COR"], ["9", "COR"]], [["10", "+SC"], ["11", "COM"], ["12", "FT2"], ["13", "FT1"], ["14", "COS2"], ["15", "COS1"], ["16", "COM"], ["17", "ST"]], [["18", "COM"], ["19", "LNA"], ["20", "LNB"]]],
      K: { p24: "29", com: "30", lam: "31", sc: "10", cor1: "8", cor2: "9", ft2: "12", ft1: "13", cos2: "14", cos1: "15", cosCom: "16", st: "17", cmdCom: "23", oro: "24", ap: "25", ch: "26", pp: "27", ped: "28" },
      coms: ["11", "16", "23", "30"], batt: true, alim: { lab: ["SEC2", "SEC1"], inv: ["SEC1", "SEC2"], nom: "Secondaire du transformateur SEC1 · SEC2", carte: "Transformateur", panne: "Inverser SEC1 et SEC2", code: "SEC0" },
      facc: { lab: "F3 3A", nom: "Fusible F3 3 A (alimentation des accessoires)", court: "F3" }, fmot: { lab: "F1 20A", nom: "Fusible F1 20 A (puissance moteur)", code: "FUSE" } },
    "roger-b70-1dc": { fig: "fig. 11 p. 15 et photo p. 5 de la notice IS117",
      haut: [[["29", "LAM"], ["28", "COM"], ["27", "+24V"], ["26", "PED"], ["25", "PP"], ["24", "CH"], ["23", "AP"], ["22", "ORO"], ["21", "COM"]], [["20", "ANT"], ["19", "ANT"]]],
      bas: [[["6", "COR"], ["7", "COR"]], [["8", "+SC"], ["9", "COM"], ["10", "FT2"], ["11", "FT1"], ["12", "COS2"], ["13", "COS1"], ["14", "COM"], ["15", "ST"]], [["16", "COM"], ["17", "LNA"], ["18", "LNB"]]],
      K: { p24: "27", com: "28", lam: "29", sc: "8", cor1: "6", cor2: "7", ft2: "10", ft1: "11", cos2: "12", cos1: "13", cosCom: "14", st: "15", cmdCom: "21", oro: "22", ap: "23", ch: "24", pp: "25", ped: "26" },
      coms: ["9", "14", "21", "28"], batt: false, alim: { lab: ["5+", "4−"], nom: "Alimentation de la carte POWER IN 5+ / 4−", carte: "Alim carte" },
      facc: { lab: "F2 2A", nom: "Fusible F2 2 A (accessoires)", court: "F2" }, fmot: { lab: "F1 15A", nom: "Fusible F1 15 A (circuit moteur)", code: null } }
  };
  /* B70/2ML : 2 moteurs brushless (battants), câblés par le technicien sur X · Y · Z (fig. 1 p. 6) ; borniers fig. 2 p. 7 ; un seul COM électrique */
  CFG["roger-b70-2ml"] = { fig: "fig. 1 p. 6 et fig. 2 p. 7 de la notice IS240", deux: true, isel: true, pCor: "18", affY: 74,
    blocs: [{ ns: [["9", "COR"], ["10", "COR"]], x: 34, y: 262, pas: 24, lab: "bas" }, { ns: [["11", "SC"], ["12", "COM"], ["13", "PED"], ["14", "PP"], ["15", "CH"], ["16", "AP"], ["17", "COM"]], x: 116, y: 262, pas: 24, lab: "bas" },
      { ns: [["22", "+ES"], ["21", "COM"], ["20", "LAM"], ["19", "COM"], ["18", "+24V"]], x: 164, y: 220, pas: 24, lab: "haut" },
      { ns: [["28", "ISEL"], ["27", "ST"], ["26", "COM"], ["25", "FT1"], ["24", "FT2"], ["23", "COM"]], x: 300, y: 162, pas: 24, lab: "droite", vertical: true },
      { ns: [["36", "ANT"], ["35", "ANT"]], x: 316, y: 24, pas: 24, lab: "bas" },
      { ns: [["2X", "X"], ["2Y", "Y"], ["2Z", "Z"]], x: 28, y: 92, pas: 20, lab: "droite", vertical: true, titre: "MOTEUR 2" },
      { ns: [["1X", "X"], ["1Y", "Y"], ["1Z", "Z"]], x: 28, y: 172, pas: 20, lab: "droite", vertical: true, titre: "MOTEUR 1" }],
    K: { p24: "18", com: "19", lam: "20", sc: "11", cor1: "9", cor2: "10", ft2: "24", ft1: "25", ftCom: "23", cos1: "28", cosCom: "26", st: "27", cmdCom: "17", ap: "16", ch: "15", pp: "14", ped: "13" },
    coms: ["12", "17", "19", "21", "23", "26"], batt: true, alim: { lab: ["+", "−"], nom: "Alimentation de la carte + / − (transformateur)", carte: "Alim carte" },
    facc: { lab: "F1 3,15A", nom: "Fusible F1 3,15 A (accessoires)", court: "F1" }, fmot: { lab: "F2 15A", nom: "Fusible F2 15 A (circuit de puissance des moteurs)", code: "notr" },
    params: ["70", "60", "A2", "21", "A4", "A5", "A6", "A7", "A8", "15", "25", "26", "27", "50", "51", "52", "53", "54", "55", "57", "73", "76", "77", "78", "18", "79", "80"],
    notes: "Deux vantaux : le MOTEUR 2 part après le retard 25 à l'ouverture, le MOTEUR 1 après le retard 26 à la fermeture. Ouverture partielle : vantail 1 seul, à la valeur de 15 (un seul vantail, 70 01 : 50 % d'usine d'après la notice). Après l'ouverture partielle, la refermeture automatique (A2) utilise le temps 21 : la notice ne la décrit qu'à partir du portail complètement ouvert (A2), mais le paramètre 22 indique qu'elle s'active après PED. Paramètre 15 : la fiche donne 99 d'usine ; pour un seul vantail la notice indique 50 %, l'atelier utilise 50 % tant que 15 n'est pas réglé (le tableau des paramètres affiche quand même 99). La notice écrit « 27 (ISEL) » dans le tableau des bornes (p. 104) mais le schéma fig. 2 et la carte donnent 28 (ISEL) et 27 (ST) : l'atelier suit le schéma. Non simulés en plus : électroserrure (22-21, 28, 29, 38), veille « low power » (L1), batteries, ralentissements, couple, détection d'obstacle ampèremétrique, essai des photocellules (58, 59, A8 02 à 04), fermeture garantie (81, 82), fonction d'ouverture avec exclusion de la fermeture automatique (22), récupération de position après une coupure de courant." };
  /* EDGE1 : 2 moteurs brushless 36 V (battants), câblés par le technicien (fig. 1 p. 6 de la notice IS160). Sur la carte, les bornes 15 à 37 forment une seule colonne : dessinées ici sur deux colonnes */
  CFG["roger-edge1"] = { fig: "fig. 1 p. 6 de la notice IS160", deux: true, pCor: "18", affY: 52, affDX: -122, hauteur: 330,
    pos: { titre: [24, 140], sec: [24, 14], facc: [22, 52], fmot: [22, 84], rec: [104, 162, 110], wifi: [150, 222], wifiLab: "EXP", batt: [24, 216] },
    blocs: [{ ns: [["37", "COM"], ["36", "PED"], ["35", "PP"], ["34", "CH"], ["33", "AP"], ["32", "ORO"], ["31", "COM"]], x: 250, y: 24, pas: 22, lab: "droite", vertical: true },
      { ns: [["30", "ANT"], ["29", "AUX"]], x: 250, y: 190, pas: 22, lab: "droite", vertical: true },
      { ns: [["27", "ST"], ["26", "COM"], ["25", "COS1"], ["24", "COS2"], ["23", "FT1"], ["22", "FT2"], ["21", "COM"], ["20", "SC"], ["19", "COM"], ["18", "+24V"]], x: 318, y: 24, pas: 22, lab: "droite", vertical: true },
      { ns: [["17", "+ES"], ["16", "LAM"], ["15", "COM"]], x: 318, y: 252, pas: 22, lab: "droite", vertical: true },
      { ns: [["1X", "X"], ["1Y", "Y"], ["1Z", "Z"]], x: 36, y: 292, pas: 22, lab: "haut", titre: "MOTEUR 1" },
      { ns: [["2X", "X"], ["2Y", "Y"], ["2Z", "Z"]], x: 120, y: 292, pas: 22, lab: "haut", titre: "MOTEUR 2" },
      { ns: [["13", "COR"], ["14", "COR"]], x: 196, y: 292, pas: 24, lab: "haut" }],
    K: { p24: "18", com: "15", lam: "16", sc: "20", cor1: "13", cor2: "14", ft2: "22", ft1: "23", ftCom: "21", cos2: "24", cos1: "25", cosCom: "26", st: "27", oro: "32", cmdCom: "37", ap: "33", ch: "34", pp: "35", ped: "36" },
    coms: ["15", "19", "21", "26", "31", "37"], batt: true, battNom: "Batteries (kit B71/BCHP)", alim: { lab: ["SEC1", "SEC2"], inv: ["SEC2", "SEC1"], nom: "Secondaire du transformateur SEC1 · SEC2", carte: "Transfo", panne: "Inverser SEC1 et SEC2", code: "SECO" },
    facc: { lab: "F3 3A", nom: "Fusible F3 3 A (accessoires)", court: "F3" }, fmot: { lab: "F1 20A", nom: "Fusible F1 20 A (puissance des moteurs)", code: "FUSE" },
    params: ["70", "A2", "21", "A4", "A5", "A6", "A7", "A8", "15", "25", "26", "27", "50", "51", "52", "53", "54", "55", "57", "73", "74", "76", "77", "78", "18", "79", "80"],
    notes: "Deux vantaux : le MOTEUR 2 part après le retard 25 à l'ouverture, le MOTEUR 1 après le retard 26 à la fermeture. Ouverture partielle : vantail 1 seul, à la valeur de 15 (un seul vantail, 70 01 : 50 % d'usine d'après la fiche, l'atelier l'utilise tant que 15 n'est pas réglé). Après l'ouverture partielle, la refermeture automatique (A2) utilise le temps 21. Non simulés en plus : encodeur absolu SMARTY/EMA (71, codes En11 à En25, POS1 / POS2), électroserrure (17-15, fusible F2, 28, 29, 38), veille « low power » (L1), batteries, ralentissements, couple, détection d'obstacle ampèremétrique, essai des photocellules (58, 59, A8 02 à 04), fermeture garantie (81, 82), fonction 22, récupération de position après une coupure de courant." };
  CFG["casit-eq2009"] = { modele: "eq2009", fig: "schéma p. 2 de la notice EQ2009 R1.0", coms: ["14", "17", "22", "28", "33", "35"] };
  CFG["casit-keqs08"] = { modele: "keqs08", fig: "schéma § 2.1 p. 4 de la notice KEQS08-R", coms: ["9", "10", "20"] };
  const CARTES = CFG;
  const NS = "http://www.w3.org/2000/svg";
  const st = { get(k, d) { try { const v = localStorage.getItem(k); return v === null ? d : JSON.parse(v); } catch (e) { return d; } }, set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} } };
  const board = id => (typeof BOARDS !== "undefined" ? BOARDS : []).find(x => x.c.id === id);
  window.cabDispo = id => !!(CARTES[id] && board(id) && board(id).c.parametres && board(id).c.bornier);

  /* ---------- carte : bornes (disposition réelle) ---------- */
  const DY = 330; /* haut de la carte dans le dessin */
  const P = 24;
  let M = null, F = null, RANGEES = [], BORNES = {}, COMS = [], ENTREES = {}, K = {}, USINE = {}; /* carte courante */
  const nB = k => K[k] ? K[k].slice(2) : "?"; /* numéro de borne d'un rôle (« ap » → 25) */
  function charger(id) {
    F = CFG[id]; M = F.modele ? (window.CABMOD || {})[F.modele] || null : null; BIBLIO = BIBLIO_R;
    if (M) { RANGEES = []; BORNES = M.bornes(DY); K = {}; Object.keys(M.K).forEach(k => K[k] = "b:" + M.K[k]); COMS = M.coms.map(n => "b:" + n); ENTREES = {}; Object.keys(M.entrees).forEach(n => ENTREES["b:" + n] = M.entrees[n]); USINE = M.usine; BIBLIO = M.biblio; return; }
    BORNES = {};
    if (F.blocs) { RANGEES = []; BIBLIO = BIBLIO_R.concat(["mbl"]); F.blocs.forEach(b => b.ns.forEach(([n, lab], i) => { BORNES["b:" + n] = { x: b.x + (b.vertical ? 0 : i * b.pas), y: DY + b.y + (b.vertical ? i * b.pas : 0), lab, n: n.length === 2 && /^[12][XYZ]$/.test(n) ? "M" + n[0] + " " + n[1] : n, dessus: b.lab === "haut" }; })); }
    else { RANGEES = [{ y: DY + 238, dessus: true, blocs: [[88, F.haut[0]], [318, F.haut[1]]] }, { y: DY + 266, dessus: false, blocs: [[32, F.bas[0]], [88, F.bas[1]], [306, F.bas[2]]] }];
      RANGEES.forEach(r => r.blocs.forEach(([x0, l]) => l.forEach(([n, lab], i) => { BORNES["b:" + n] = { x: x0 + i * P, y: r.y, lab, n, dessus: r.dessus }; }))); }
    K = {}; Object.keys(F.K).forEach(k => K[k] = "b:" + F.K[k]);
    COMS = F.coms.map(n => "b:" + n); /* bornes COM : 0 V commun des sécurités, des commandes et des sorties */
    ENTREES = {}; [["ft2", "FT2"], ["ft1", "FT1"], ["cos2", "COS2"], ["cos1", F.isel ? "ISEL" : "COS1"], ["st", "ST"], ["oro", "ORO"], ["ap", "AP"], ["ch", "CH"], ["pp", "PP"], ["ped", "PED"]].forEach(([k, n]) => { if (K[k]) ENTREES[K[k]] = n; });
    /* connecteurs câblés en usine : pannes que l'on peut provoquer (codes de la fiche) */
    USINE = { mot: { nom: "Moteur X · Y · Z", panne: "Débrancher le moteur", code: "Mot" }, enc: { nom: "Encodeur (ENC)", panne: "Débrancher l'encodeur", code: "EnE1" }, fc: { nom: "Fins de course (FC)" },
      sb: { nom: "Déverrouillage (SB)", panne: "Ouvrir la poignée de déverrouillage", code: "StoP" }, sec: { nom: F.alim.nom, panne: F.alim.panne, code: F.alim.code },
      fmot: { nom: F.fmot.nom, panne: F.fmot.code ? "Griller " + F.fmot.lab.split(" ")[0] : null, code: F.fmot.code }, facc: { nom: F.facc.nom },
      batt: { nom: F.battNom || (F.deux ? "Batteries (B71/BC/INT ou B71/BC/EXT)" : "Batteries (B71/BCHP)") }, cl: { nom: "Chargeur B72/CL" }, wifi: { nom: "Wi-Fi B74/BCONNECT" }, rec: { nom: "Récepteur radio" } };
  }

  /* ---------- bibliothèque d'accessoires (génériques) ---------- */
  const ACC = {
    pp: { nom: "Bouton poussoir", sous: "contact NO", ic: "⏺", b: [["1", "NO"], ["2", "NO"]], act: "maintenir" },
    cle: { nom: "Sélecteur à clé", sous: "2 contacts NO", ic: "🔑", b: [["C", "C"], ["1", "NO1"], ["2", "NO2"]], act: "cle" },
    digi: { nom: "Digicode", sous: "24 V · contact sec NO", ic: "⌨", b: [["+", "+"], ["-", "−"], ["C", "C"], ["NO", "NO"]], act: "code", charge: ["+", "-"] },
    cell: { nom: "Cellules", sous: "paire émetteur + récepteur 24 V", ic: "◉", paire: true },
    tx: { nom: "Cellule TX", sous: "émetteur 24 V", ic: "◉", b: [["+", "+"], ["-", "−"]], act: "faisceau", charge: ["+", "-"] },
    rx: { nom: "Cellule RX", sous: "récepteur 24 V", ic: "◉", b: [["+", "+"], ["-", "−"], ["C", "C"], ["NF", "NF"], ["NO", "NO"]], act: "faisceau", charge: ["+", "-"] },
    bnf: { nom: "Bord sensible", sous: "contact NF", ic: "▭", b: [["1", "NF"], ["2", "NF"]], act: "maintenir" },
    b8k: { nom: "Bord sensible", sous: "résistif 8,2 kΩ", ic: "▭", b: [["1", "8k2"], ["2", "8k2"]], act: "maintenir" },
    stop: { nom: "Bouton STOP", sous: "coup de poing NF", ic: "⛔", b: [["1", "NF"], ["2", "NF"]], act: "bascule" },
    lam: { nom: "Clignotant", sous: "24 V", ic: "💡", b: [["1", "~"], ["2", "~"]], charge: ["1", "2"] },
    voy: { nom: "Voyant", sous: "portail ouvert 24 V 3 W", ic: "🔆", b: [["1", "~"], ["2", "~"]], charge: ["1", "2"] },
    oro: { nom: "Horloge", sous: "contact NO", ic: "⏰", b: [["1", "NO"], ["2", "NO"]], act: "bascule" },
    sec: { nom: "Arrivée 230 V~", sous: "pour la lumière", ic: "⚡", b: [["L", "L"], ["N", "N"]] },
    lum: { nom: "Lumière", sous: "courtoisie 230 V~", ic: "💡", b: [["L", "L"], ["N", "N"]], charge: ["L", "N"], ac: true },
    radio: { nom: "Récepteur radio", sous: "H93/RX2LP enfiché + télécommande", ic: "📡", enfiche: true },
    mot: { nom: "Moteur 230 V~", sous: "condensateur inclus", ic: "⚙", b: [["C", "Com"], ["O", "Ouvre"], ["F", "Ferme"]] },
    fdc: { nom: "Fins de course", sous: "2 contacts NF du moteur", ic: "⇤", b: [["C", "C"], ["O", "FCO"], ["F", "FCF"]] },
    cellc: { nom: "Cellules", sous: "paire 24 V AC/DC", ic: "◉", paire: "c" },
    txc: { nom: "Cellule TX", sous: "émetteur 24 V AC/DC", ic: "◉", b: [["1", "~"], ["2", "~"]], act: "faisceau", charge: ["1", "2"], dom: "a24d24" },
    rxc: { nom: "Cellule RX", sous: "récepteur 24 V AC/DC", ic: "◉", b: [["1", "~"], ["2", "~"], ["C", "C"], ["NF", "NF"]], act: "faisceau", charge: ["1", "2"], dom: "a24d24" },
    fla: { nom: "Clignotant", sous: "230 V~ avec carte", ic: "💡", b: [["L", "~"], ["N", "~"]], charge: ["L", "N"], ac: true },
    voy24: { nom: "Voyant", sous: "24 V AC/DC", ic: "🔆", b: [["1", "~"], ["2", "~"]], charge: ["1", "2"], dom: "a24d24" },
    mbl: { nom: "Moteur", sous: "brushless 24 V · X Y Z", ic: "⚙", b: [["X", "X"], ["Y", "Y"], ["Z", "Z"]], w: 150 },
    pont: { nom: "Fil de pont", sous: "entre deux bornes", ic: "〰", fil: true }
  };
  const BIBLIO_R = ["cell", "pp", "cle", "digi", "bnf", "b8k", "stop", "lam", "voy", "oro", "sec", "lum", "radio", "pont"];
  const COULEURS = [["#e5484d", "rouge"], ["#1c1c1c", "noir"], ["#3e7bfa", "bleu"], ["#6fd0ff", "bleu ciel"], ["#f5f5f5", "blanc"], ["#f0b429", "jaune"], ["#ff8a1f", "orange"], ["#2fbf71", "vert"], ["#8b5a2b", "marron"], ["#8b8b8b", "gris"], ["#a46bff", "violet"], ["#ff7eb6", "rose"], ["vj", "vert/jaune (terre)"]];
  const TRAIT = c => c === "vj" ? "url(#cabvj)" : c;
  const FONCE = c => { if (!/^#[0-9a-f]{6}$/i.test(c)) return false; const n = parseInt(String(c).slice(1), 16); return ((n >> 16) * 299 + ((n >> 8) & 255) * 587 + (n & 255) * 114) / 1000 < 60; };
  let BIBLIO = BIBLIO_R;
  const largeur = t => Math.max(ACC[t].w || 92, ACC[t].b.length * 24 + 20);

  /* ---------- paramètres simulés (valeurs et réglages usine tirés de la fiche) ---------- */
  const PARAMS = ["A2", "21", "16", "A4", "A5", "A6", "A7", "A8", "15", "50", "51", "52", "53", "54", "55", "73", "74", "27", "76", "77", "78", "20", "79", "80"];
  let C = null, ITEMS = {}; /* carte courante */
  const pdef = code => { const x = ITEMS[code]; if (!x) return null; const L = window.SIM ? SIM.valeursRoger(x) : null; return L && L.some(o => o.v === x.def) ? x.def : null; }; /* réglage usine absent de la fiche (A1 « selon moteur ») : null, jamais inventé */
  const pval = code => (I && I.params && I.params[code] != null ? I.params[code] : pdef(code)); /* valeur affichée : null si inconnue */
  const par = code => (I && I.params && I.params[code] != null ? I.params[code] : pdef(code)) || "00";
  const pn = code => parseInt(par(code), 10) || 0;
  const duree = code => { const v = pn(code); return v >= 92 ? (v - 90) * 60 : v; }; /* 00–90 s, 92–99 = 2 à 9 min */
  const pdesc = (code, v) => { const x = ITEMS[code]; const L = x && SIM.valeursRoger(x); const o = L && L.find(o => o.v === (v == null ? par(code) : v)); return o ? o.d : ""; };

  /* ---------- état : installation (enregistrée) + simulation (en mémoire) ---------- */
  let I = null, cleI = "";
  let S = null; /* simulation */
  const neuf = () => ({ n: 1, acc: [], fils: M ? [] : [{ id: "w0", a: K.cosCom, b: K.st, c: "#f5f5f5", usine: 1 }], params: {} });
  /* historique : chaque modification enregistrée peut être annulée puis rétablie */
  let hist = [], futur = [], dernier = "";
  const sauver = () => { const j = JSON.stringify(I); if (j !== dernier) { if (dernier) { hist.push(dernier); if (hist.length > 60) hist.shift(); futur = []; } dernier = j; } st.set(cleI, I); outils(); };
  function outils() { const a = $("#cabund"), r = $("#cabred"), v = $("#cabvid"); if (a) a.disabled = !hist.length; if (r) r.disabled = !futur.length; if (v) v.disabled = !I || (!I.acc.length && I.fils.length <= 1 && !Object.keys(I.params).length); }
  function revenir(de, vers) { if (!de.length) return; vers.push(dernier); dernier = de.pop(); I = propre(JSON.parse(dernier)) || neuf(); st.set(cleI, I); S.sel = S.selFil = S.selAcc = null; S.mm = null; S.prog = null; rendre(); outils(); }
  /* installation relue depuis le téléphone : on ne garde que des valeurs attendues */
  function propre(x) {
    try {
      if (!x || !Array.isArray(x.acc) || !Array.isArray(x.fils)) return null;
      const acc = x.acc.filter(a => a && /^a\d{1,5}$/.test(a.id) && ACC[a.t] && !ACC[a.t].paire && !ACC[a.t].fil && Number.isFinite(a.x) && Number.isFinite(a.y)).map(a => ({ id: a.id, t: a.t, x: Math.round(a.x), y: Math.round(a.y), paire: Number.isInteger(a.paire) ? a.paire : undefined, num: Number.isInteger(a.num) ? a.num : undefined }));
      const ok = k => { if (typeof k !== "string") return false; if (BORNES[k]) return true; const i = k.indexOf(":"), a = acc.find(x => x.id === k.slice(0, i)); return !!(a && ACC[a.t].b && ACC[a.t].b.some(b => b[0] === k.slice(i + 1))); };
      const fils = x.fils.filter(w => w && /^w\d{1,5}$/.test(w.id) && ok(w.a) && ok(w.b) && (/^#[0-9a-f]{6}$/i.test(w.c) || w.c === "vj")).map(w => ({ id: w.id, a: w.a, b: w.b, c: w.c, usine: w.usine ? 1 : undefined, p: Array.isArray(w.p) && w.p.length === 2 && w.p.every(Number.isFinite) ? [Math.max(0, Math.min(W, Math.round(w.p[0]))), Math.max(0, Math.min(H, Math.round(w.p[1])))] : undefined }));
      const params = {}; Object.keys(x.params || {}).forEach(k => { if ((ITEMS[k] && /^[0-9A-Za-z]{2}$/.test(x.params[k])) || (M && /^(A\d{1,2}|B\d|S[1-4]\d{1,2}|JP1|ACDC)$/.test(k) && /^(ON|OFF|AC|DC)$/.test(x.params[k]))) params[k] = x.params[k]; });
      return { n: Math.max(1, parseInt(x.n, 10) || 1, ...acc.map(a => +a.id.slice(1) + 1), ...fils.map(w => +w.id.slice(1) + 1)), acc, fils, params };
    } catch (e) { return null; }
  }
  function simNeuve() {
    return { secteur: false, mode: "cabler", pos: 0, dir: 0, cible: 0, arret: null, att: null, pause: 0, inv: 0, pre: 0, preDir: 0, lamT: 0, corT: 0, sc: 0, t: 0,
      prec: {}, etat: {}, pannes: {}, f3: true, hs: false, test: false, sel: null, selFil: null, selAcc: null, couleur: "#e5484d", msg: [], mm: null, mmMode: "V", radio: {}, tentatives: 0, oroLatch: false, mission: null };
  }

  /* ---------- calcul électrique ---------- */
  /* Réseaux : union des bornes reliées par des fils ou des contacts fermés. Sources : +24 V, LAM, +SC quand la carte
     les commande, COM (0 V), arrivée 230 V~ (L / N). Une charge est alimentée si ses deux bornes sont sur une source et sa référence. */
  function uf() { const p = {}; const f = x => { if (p[x] === undefined) p[x] = x; while (p[x] !== x) { p[x] = p[p[x]]; x = p[x]; } return x; }; return { f, u: (a, b) => { const A = f(a), B = f(b); if (A !== B) p[A] = B; } }; }
  function contacts(a) { /* contacts fermés internes à un accessoire selon son état */
    const e = S.etat[a.id] || {}, k = a.id + ":";
    switch (a.t) {
      case "pp": case "oro": return e.on ? [[k + "1", k + "2"]] : [];
      case "cle": return e.g ? [[k + "C", k + "1"]] : e.d ? [[k + "C", k + "2"]] : [];
      case "digi": return e.on && e.alim ? [[k + "C", k + "NO"]] : [];
      case "rx": return e.ok ? [[k + "C", k + "NF"]] : [[k + "C", k + "NO"]];
      case "rxc": return e.ok ? [[k + "C", k + "NF"]] : [];
      case "fdc": { const ps = S.posM && a.num ? (S.posM[a.num] || 0) : S.pos; return [].concat(ps < 100 ? [[k + "C", k + "O"]] : [], ps > 0 ? [[k + "C", k + "F"]] : []); }
      case "bnf": case "stop": return e.on ? [] : [[k + "1", k + "2"]];
      case "b8k": return e.on ? [[k + "1", k + "2"]] : [];
      default: return [];
    }
  }
  const resistances = a => a.t === "b8k" && !(S.etat[a.id] || {}).on ? [[a.id + ":1", a.id + ":2", 8200]] : [];
  /* sources de la carte Roger : +24 V, LAM, +SC (sorties) et contact sec COR */
  function sourcesRoger() {
    const on = S.secteur && !S.hs, tags = [], liens = [];
    if (on && S.f3) { tags.push([K.p24, "+24"]); if (lamSortie()) tags.push([K.lam, "LAM"]); if (S.sc) tags.push([K.sc, "SC"]); }
    if (on && corFerme()) liens.push([K.cor1, K.cor2]);
    if (on && F.deux && !S.pannes.fmot) ["1", "2"].forEach(m => ["X", "Y", "Z"].forEach(p => tags.push(["b:" + m + p, m + p]))); /* sorties moteur brushless (onduleur de la carte) */
    return { tags, liens };
  }
  const PHASES = ["1X", "1Y", "1Z", "2X", "2Y", "2Z"]; /* sorties moteur brushless de la B70/2ML */
  const DCP = ["+24", "LAM", "SC"]; /* sorties continues 24 V (pôle +) ; le pôle − est COM (0V) */
  const aDC = s => DCP.some(t => s.has(t));
  /* une charge est-elle alimentée ? renvoie les deux étiquettes de source [pôle de p, pôle de q] ou null */
  function alimCharge(d, p, q) {
    const tp = DCP.find(t => p.has(t)), tq = DCP.find(t => q.has(t));
    if (d.ac) return p.has("L") && q.has("N") ? ["L", "N"] : p.has("N") && q.has("L") ? ["N", "L"] : null;
    const dcOk = (tp && q.has("0V") && !tq) ? [tp, "0V"] : (d.dom !== "dc24p" && tq && p.has("0V") && !tp) ? ["0V", tq] : null;
    if (dcOk) return dcOk;
    if (d.dom === "a24d24") return p.has("A24") && q.has("A24b") ? ["A24", "A24b"] : p.has("A24b") && q.has("A24") ? ["A24b", "A24"] : null;
    return null;
  }
  function circuit() {
    let R, carteOn = M ? !!(S.R && S.R.carteOn) : (S.secteur && !S.hs);
    for (let tour = 0; tour < 6; tour++) {
      const src = M ? M.sources(api(), carteOn) : sourcesRoger();
      const U = uf(), aretes = [];
      I.fils.forEach(w => { U.u(w.a, w.b); aretes.push([w.a, w.b, w.id]); });
      COMS.forEach(b => { U.u("G", b); aretes.push(["G", b, null]); });
      src.liens.forEach(([x, y]) => { U.u(x, y); aretes.push([x, y, null]); });
      I.acc.forEach(a => contacts(a).forEach(([x, y]) => { U.u(x, y); aretes.push([x, y, null]); }));
      const tags = {}, ou = {}; const tag = (n, t) => { const r = U.f(n); (tags[r] = tags[r] || new Set()).add(t); (ou[t] = ou[t] || []).push(n); };
      tag("G", "0V");
      src.tags.forEach(([b, t]) => tag(b, t));
      if (S.secteur) I.acc.filter(a => a.t === "sec").forEach(a => { tag(a.id + ":L", "L"); tag(a.id + ":N", "N"); }); /* l'arrivée 230 V suit l'interrupteur « Secteur » */
      const T = n => tags[U.f(n)] || new Set();
      /* défauts */
      const def = { cc24: false, ccAC: false, d230: false, ccMot: false };
      Object.values(tags).forEach(s => { const ph = [...s].filter(t => PHASES.includes(t)); if (ph.length && (ph.length > 1 || aDC(s) || s.has("0V") || s.has("+12"))) def.ccMot = true; if (ph.length && (s.has("L") || s.has("N"))) def.d230 = true; if ((aDC(s) || s.has("+12")) && s.has("0V")) def.cc24 = true; if (s.has("A24") && s.has("A24b")) def.cc24 = true; if (s.has("L") && s.has("N")) def.ccAC = true; if ((s.has("L") || s.has("N")) && (aDC(s) || s.has("0V") || s.has("+12") || s.has("A24") || s.has("A24b"))) def.d230 = true; });
      const ok230 = M ? M.bornes230 : [K.cor1, K.cor2]; /* bornes de la carte qui acceptent le 230 V */
      Object.keys(BORNES).forEach(b => { if (!ok230.includes(b) && (T(b).has("L") || T(b).has("N"))) def.d230 = true; });
      /* charges alimentées */
      const alim = {}, poles = {};
      I.acc.forEach(a => {
        const d = ACC[a.t]; if (!d.charge) return;
        const p = T(a.id + ":" + d.charge[0]), q = T(a.id + ":" + d.charge[1]);
        const r = alimCharge(d, p, q); alim[a.id] = !!r; if (r) poles[a.id] = r;
        if (!d.ac && (p.has("L") || q.has("L") || p.has("N") || q.has("N"))) def.d230 = true;
      });
      /* moteurs 230 V : enroulement Ouvre ou Ferme alimenté entre Com et la phase */
      const moteurs = {};
      I.acc.filter(a => a.t === "mot").forEach(a => { const k = a.id + ":", c = T(k + "C"), o = T(k + "O"), f = T(k + "F"); const pr = (x, y) => (x.has("L") && y.has("N")) || (x.has("N") && y.has("L")); const O = pr(o, c), Fe = pr(f, c); moteurs[a.id] = { O, F: Fe, sens: O && !Fe ? 1 : Fe && !O ? -1 : 0, bloque: O && Fe }; if (aDC(c) || aDC(o) || aDC(f)) def.d230 = true; });
      /* moteurs brushless : chaque fil X Y Z sur une phase de la même sortie ; deux phases échangées = sens inversé */
      I.acc.filter(a => a.t === "mbl").forEach(a => { const ph = ["X", "Y", "Z"].map(p => [...T(a.id + ":" + p)].filter(t => PHASES.includes(t)));
        if (ph.some(l => l.length !== 1)) { moteurs[a.id] = { ok: false, err: ph.every(l => !l.length) ? "" : "phase manquante" }; return; }
        const t = ph.map(l => l[0]), n = t[0][0];
        if (t.some(x => x[0] !== n) || new Set(t).size < 3) { moteurs[a.id] = { ok: false, err: "fils mélangés" }; return; }
        const o = t.map(x => "XYZ".indexOf(x[1])), inv = (o[0] > o[1]) + (o[0] > o[2]) + (o[1] > o[2]);
        moteurs[a.id] = { ok: true, sortie: +n, sens: inv % 2 ? -1 : 1 }; });
      /* état dynamique des accessoires alimentés */
      let change = false;
      I.acc.forEach(a => {
        const e = S.etat[a.id] = S.etat[a.id] || {};
        if (a.t === "digi" && e.alim !== !!alim[a.id]) { e.alim = !!alim[a.id]; change = true; }
        if (a.t === "rx" || a.t === "rxc") { const tt = a.t === "rx" ? "tx" : "txc", tx = I.acc.find(x => x.t === tt && x.paire === a.paire); const ok = !!alim[a.id] && !!(tx && alim[tx.id]) && !(S.etat["p" + a.paire] || {}).coupe; if (e.ok !== ok) { e.ok = ok; change = true; } }
      });
      const on2 = M ? M.alimentee(T) && !S.hs : carteOn;
      if (on2 !== carteOn) { carteOn = on2; change = true; }
      R = { U, aretes, tags, ou, T, alim, poles, def, moteurs, carteOn };
      if (!change) break;
    }
    /* entrées : contact fermé vers COM, ou résistance (bords 8,2 kΩ) */
    R.ent = {}; R.ohm = {};
    Object.keys(ENTREES).forEach(b => { const ferme = R.T(b).has("0V"); R.ent[ENTREES[b]] = ferme; R.ohm[ENTREES[b]] = ferme ? 0 : resistance(R, b, "G"); });
    if (!M && F.isel) { const cosM = par("60") !== "00"; R.ent.COS1 = cosM ? R.ent.ISEL : true; R.ohm.COS1 = cosM ? R.ohm.ISEL : 0; R.ent.ORO = !cosM && R.ent.ISEL; } /* ISEL : bord sensible (60 01) ou horloge (60 00) */
    R.flux = fluxFils(R);
    return R;
  }
  /* résistance équivalente entre deux points (réseaux de résistances 8,2 kΩ) : méthode des nœuds */
  function resistance(R, a, b) {
    const res = []; I.acc.forEach(x => resistances(x).forEach(r => res.push(r)));
    if (!res.length) return Infinity;
    const A = R.U.f(a), B = R.U.f(b); if (A === B) return 0;
    const nodes = [...new Set(res.flatMap(([x, y]) => [R.U.f(x), R.U.f(y)]).concat([A, B]))];
    const idx = {}; nodes.forEach((n, i) => idx[n] = i); const N = nodes.length;
    const M = Array.from({ length: N }, () => new Array(N).fill(0));
    res.forEach(([x, y, r]) => { const i = idx[R.U.f(x)], j = idx[R.U.f(y)]; if (i === j) return; const g = 1 / r; M[i][i] += g; M[j][j] += g; M[i][j] -= g; M[j][i] -= g; });
    /* B à la masse, 1 A injecté en A : V(A) = R */
    const ib = idx[B], keep = nodes.map((_, i) => i).filter(i => i !== ib);
    const m = keep.map(i => keep.map(j => M[i][j]).concat([i === idx[A] ? 1 : 0]));
    const n = m.length;
    for (let c = 0; c < n; c++) {
      let p = c; for (let r = c + 1; r < n; r++) if (Math.abs(m[r][c]) > Math.abs(m[p][c])) p = r;
      if (Math.abs(m[p][c]) < 1e-12) continue; [m[c], m[p]] = [m[p], m[c]];
      for (let r = 0; r < n; r++) if (r !== c) { const f = m[r][c] / m[c][c]; for (let k = c; k <= n; k++) m[r][k] -= f * m[c][k]; }
    }
    const ia = keep.indexOf(idx[A]); if (ia < 0 || Math.abs(m[ia][ia]) < 1e-12) return Infinity;
    const v = m[ia][n] / m[ia][ia];
    /* si A n'est relié à B par aucun chemin, la matrice est singulière pour A → Infinity */
    return isFinite(v) && v > 0 && v < 1e9 && relies(res, R, A, B) ? v : Infinity;
  }
  function relies(res, R, A, B) { const adj = {}; res.forEach(([x, y]) => { const p = R.U.f(x), q = R.U.f(y); (adj[p] = adj[p] || []).push(q); (adj[q] = adj[q] || []).push(p); }); const vu = new Set([A]), f = [A]; while (f.length) { const n = f.shift(); if (n === B) return true; (adj[n] || []).forEach(m => { if (!vu.has(m)) { vu.add(m); f.push(m); } }); } return false; }
  /* fils parcourus par le courant : chemin de chaque charge alimentée vers sa source et sa référence, et de chaque entrée fermée vers COM */
  function fluxFils(R) {
    const adj = {}; const add = (a, b, w) => { (adj[a] = adj[a] || []).push([b, w]); (adj[b] = adj[b] || []).push([a, w]); };
    R.aretes.forEach(([a, b, w]) => add(a, b, w));
    I.acc.forEach(x => resistances(x).forEach(([a, b]) => add(a, b, null)));
    const flux = new Set();
    const chemin = (de, buts) => { const prev = { [de]: null }, f = [de]; while (f.length) { const n = f.shift(); if (buts.includes(n)) { let c = n; while (prev[c]) { if (prev[c][1]) flux.add(prev[c][1]); c = prev[c][0]; } return true; } (adj[n] || []).forEach(([m, w]) => { if (!(m in prev)) { prev[m] = [n, w]; f.push(m); } }); } return false; };
    const vers = t => t === "0V" ? ["G"] : (R.ou[t] || []);
    I.acc.forEach(a => {
      const d = ACC[a.t]; if (!d.charge || !R.alim[a.id]) return;
      const p = a.id + ":" + d.charge[0], q = a.id + ":" + d.charge[1], [tp, tq] = R.poles[a.id];
      chemin(p, vers(tp)); chemin(q, vers(tq));
    });
    I.acc.filter(a => a.t === "mot").forEach(a => { const m = R.moteurs[a.id]; if (!m || !(m.O || m.F)) return; const k = a.id + ":", w = m.O ? k + "O" : k + "F"; const pc = R.T(k + "C"); chemin(k + "C", vers(pc.has("L") ? "L" : "N")); chemin(w, vers(pc.has("L") ? "N" : "L")); });
    if (!M && F.deux && S.mv) I.acc.filter(a => a.t === "mbl").forEach(a => { const m = R.moteurs[a.id]; if (m && m.ok && S.mv[m.sortie]) ["X", "Y", "Z"].forEach(p => { const t = [...R.T(a.id + ":" + p)].find(x => PHASES.includes(x)); if (t) chemin(a.id + ":" + p, vers(t)); }); });
    if (R.carteOn) Object.keys(ENTREES).forEach(b => { if (R.ent[ENTREES[b]] || isFinite(R.ohm[ENTREES[b]])) chemin(b, ["G"]); });
    return flux;
  }

  /* ---------- logique de la carte (d'après la fiche) ---------- */
  const panneBloque = () => S.pannes.mot || S.pannes.enc || S.pannes.sec || S.pannes.fmot;
  function lamSortie() { /* 78 : 00 sortie fixe (le clignotant clignote lui-même), 01 lente, 02 lente ouverture / rapide fermeture */
    if (!(S.dir || S.pre)) return false;
    const m = par("78"), d = S.dir || S.preDir; if (m === "00") return true;
    const per = m === "02" && d < 0 ? 4 : 10; return Math.floor(S.t / (per / 2)) % 2 === 0;
  }
  function corFerme() {
    if (S.corRadio || S.corRadio5) return true; /* 76 / 77 = 05 ou 06 : 79 ignoré */
    const m = par(F.pCor || "20");
    if (m === "00") { const t = par("79"); if (t === "00") return false; if (t === "01") return S.corT > 0; if (t === "02") return !!S.dir; return !!S.dir || S.corT > 0; }
    if (m === "01") return !panneBloque(); if (m === "02" || m === "03") return true; /* sans batterie simulée : pas d'anomalie */
    if (m === "04") return S.pos < 100; if (m === "05") return S.pos > 0; return false;
  }
  const dit = (t, src, alerte) => { S.msg.unshift({ t, src: src || "", alerte: !!alerte }); S.msg = S.msg.slice(0, 4); };
  function cos(R, nom, code) { /* état d'un bord sensible : null = non installé, true = OK, false = alarme */
    const v = par(code); if (v === "00" || (F.isel && par("60") === "00")) return null; const r = R.ohm[nom];
    if (v === "01" || v === "03") return r === 0; if (v === "02" || v === "04") return r > 6500 && r < 10000; if (v === "12" || v === "14") return r > 3300 && r < 5000; return null;
  }
  function bouger(d, cible, raison) {
    if (d > 0 && atteint(cible)) return false; if (d < 0 && S.pos <= 0) return false;
    if ((S.pre && S.preDir === d) || S.dir === d) { S.cible = cible; return true; } /* déjà en route (ou en préclignotement) dans ce sens */
    if (d > 0 && S.pos === 0 && S.lu) { /* portail fermé, cellule occultée : 52 / 55 = 00 → ouverture impossible */
      const r = [["ft1", "FT1", "52", "50", "51"], ["ft2", "FT2", "55", "53", "54"]].find(([k, , p, a, b]) => !S.lu[k] && par(p) === "00" && !(par(a) === "00" && par(b) === "00"));
      if (r) { dit(r[1] + " occultée portail fermé : ouverture impossible (paramètre " + r[2] + " = 00).", "Paramètre " + r[2] + " : " + pdesc(r[2], "00")); return false; }
    }
    const pre = par("A5"), n = pre === "99" ? (d < 0 ? 5 : 0) : pn("A5");
    S.cible = cible; S.arret = null; S.att = null; S.pause = 0;
    if (n > 0 && !S.dir) { S.pre = n * 10; S.preDir = d; S.dir = 0; } else { S.dir = d; }
    S.corT = par(F.pCor || "20") === "00" && par("79") === "01" ? 10 : S.corT;
    if (F.deux && d > 0) S.ped = cible < 100; /* 2 vantaux : ouverture partielle = vantail 1 seul */
    if (raison) dit(raison);
    return true;
  }
  function stopper(raison, src) { if (S.dir || S.pre) { S.arret = S.dir || S.preDir; S.dir = 0; S.pre = 0; finManoeuvre(); if (raison) dit(raison, src); } }
  function finManoeuvre() { const t = par("79"); if (par(F.pCor || "20") === "00" && t !== "00" && t !== "01" && t !== "02") S.corT = duree("79") * 10; }
  const ouvrir = r => bouger(1, 100, r), fermer = r => bouger(-1, 0, r);
  /* 2 vantaux : l'ouverture partielle se mesure sur le vantail 1 */
  const atteint = cible => F.deux && cible < 100 ? ((S.v || {})[1] || 0) >= cible : S.pos >= cible;
  function pasAPas(mode, partiel) {
    const cible = partiel ? (F.deux ? p15() : pn("15")) : 100;
    const bougeant = S.dir || S.pre, sens = S.dir || S.preDir;
    if (mode === "03") { if (bougeant) { sens > 0 ? fermer() : ouvrir(); } else S.pos > 0 ? fermer() : bouger(1, cible); return; }
    if (mode === "04") { if (bougeant) { sens > 0 ? fermer() : stopper(); } else if (S.arret < 0 || S.pos === 0) bouger(1, cible); else fermer(); return; }
    if (mode === "01" || mode === "02") { if (bougeant && sens > 0) return; if (bougeant && sens < 0) { bouger(1, cible); return; } if (atteint(cible)) { if (mode === "01") S.pause = 0; return; } bouger(1, cible); return; }
    /* 00 : ouvre – stop – ferme – stop */
    if (bougeant) stopper(); else if (S.pos === 0 || S.arret < 0) bouger(1, cible); else fermer();
  }
  /* B70/2ML : moteur nécessaire non raccordé (codes Mot1 / Mot2 de la fiche) */
  const nbMot = () => par("70") === "01" ? 1 : 2;
  const p15 = () => I.params["15"] != null ? pn("15") : nbMot() === 1 ? 50 : pn("15"); /* notice : un seul vantail, ouverture partielle à 50 % d'usine */
  function motManque(R) {
    if (!F || !F.deux || !S.secteur || S.hs || S.pannes.fmot) return "";
    for (let n = 1; n <= nbMot(); n++) if (!I.acc.some(a => a.t === "mbl" && R.moteurs[a.id] && R.moteurs[a.id].ok && R.moteurs[a.id].sortie === n)) return "Mot" + n;
    return "";
  }
  /* B70/2ML : deux vantaux. Ouverture : MOTEUR 1, puis MOTEUR 2 après le retard 25 ; fermeture : MOTEUR 2, puis MOTEUR 1 après le retard 26 (s'il reste un vantail 2 à fermer) */
  function mouvement2(R) {
    const v = S.v = S.v || { 1: 0, 2: 0 }, n = nbMot(), d = S.dir;
    if (d !== S.dPrec) { S.tm = 0; S.dPrec = d; S.v2depart = v[2]; S.mauvais = {}; }
    S.mv = { 1: 0, 2: 0 };
    if (!d) { S.pos = posGlobale(); return; }
    S.tm++;
    const p15v = p15();
    const cible = { 1: S.ped ? p15v : 100, 2: n === 2 && !S.ped ? 100 : 0 };
    const attente = { 1: d < 0 && n === 2 && S.v2depart > 0 ? pn("26") * 10 : 0, 2: d > 0 ? pn("25") * 10 : 0 };
    const sensM = k => { const a = I.acc.find(x => x.t === "mbl" && R.moteurs[x.id] && R.moteurs[x.id].ok && R.moteurs[x.id].sortie === k); return a ? R.moteurs[a.id].sens : 0; };
    let fini = true;
    for (let k = 1; k <= n; k++) {
      const but = d > 0 ? cible[k] : 0, reste = d > 0 ? v[k] < but : v[k] > but;
      if (!reste) continue; fini = false;
      if (S.tm <= attente[k]) continue;
      const sm = sensM(k), pas = d * sm; S.mv[k] = 1;
      if (sm < 0) { /* fils échangés : le vantail part à l'envers jusqu'à sa butée */
        if ((pas < 0 && v[k] <= 0) || (pas > 0 && v[k] >= 100)) { stopper("Le vantail " + k + " part dans le mauvais sens et force sur sa butée : arrêt. Échangez deux fils du MOTEUR " + k + " (X-Y-Z). La réaction exacte de la carte n'est pas décrite par la notice.", "Fiche, symptôme « Mauvais sens » : échanger deux fils sur X-Y-Z"); S.pos = posGlobale(); return; }
        if (!S.mauvais[k]) { S.mauvais[k] = 1; dit("Vantail " + k + " : il part à l'envers (" + (pas > 0 ? "ouvre" : "ferme") + " au lieu de " + (d > 0 ? "ouvrir" : "fermer") + ").", "Fiche, symptôme « Mauvais sens »"); }
      }
      v[k] = Math.max(0, Math.min(100, v[k] + pas));
    }
    if (n === 1) v[2] = 0;
    S.pos = posGlobale();
    if (fini) { S.dir = 0; S.mv = { 1: 0, 2: 0 }; S.arret = null; finManoeuvre(); S.pause = 0; if (S.pos === 0) S.tentatives = 0; }
  }
  function posGlobale() { const v = S.v || { 1: 0, 2: 0 }, n = nbMot(); if (n === 1) return v[1]; if (v[1] === 0 && v[2] === 0) return 0; if (v[1] >= 100 && v[2] >= 100) return 100; return Math.max(1, Math.min(99, Math.round((v[1] + v[2]) / 2))); }
  function tick() {
    if (!S || !I) return;
    S.t++;
    const R = circuit(); S.R = R;
    /* défauts électriques */
    if (M && R.def.d230 && !S.hs && S.secteur) { S.hs = true; S.dir = 0; dit("230 V sur la très basse tension : carte et accessoires 24 V détruits. Le 230 V ne va que sur l'alimentation, le moteur et la lampe (" + M.texte230 + "). Corrigez le câblage, coupez le secteur puis « Remplacer la carte » (Missions).", M.source230, true); }
    if (M && R.def.cc24 && S.f3) { S.f3 = false; dit(M.texteCC, "", true); }
    if (!M && S.secteur && R.def.d230 && !S.hs) { S.hs = true; S.dir = 0; dit("230 V sur la très basse tension : carte et accessoires 24 V détruits. Le 230 V ne se raccorde qu'au contact sec COR (" + nB("cor1") + "-" + nB("cor2") + "), jamais sur les bornes 24 V. Corrigez le câblage, coupez le secteur puis « Remplacer la carte » (Missions).", "Bornier : COR = contact libre, 230 V~ 100 W", true); }
    if (!M && S.secteur && R.def.cc24 && S.f3) { S.f3 = false; dit("Court-circuit entre une sortie 24 V et COM : le fusible " + F.facc.court + " (alimentation des accessoires) a grillé. Coupez le secteur, corrigez le câblage et remplacez " + F.facc.court + " (touchez-le sur la carte).", "Fiche : " + F.facc.nom + " ; code FE : fusible " + F.facc.court + " grillé avec fins de course magnétiques", true); }
    if (S.secteur && R.def.ccAC && !S.ccAC) { S.ccAC = true; dit("Court-circuit sur l'arrivée 230 V~ : la protection de l'installation coupe (non dessinée).", ""); }
    if (!R.def.ccAC) S.ccAC = false;
    if (M) { M.tick(api(), R); I.acc.forEach(a => { const e = S.etat[a.id]; if (e && e.imp) { e.imp--; if (!e.imp) e.on = false; } }); maj(); return; }
    if (F.deux && S.secteur && !S.hs && R.def.ccMot && !S.prot) { S.prot = 1; S.protC = 0; S.protN = 0; S.dir = 0; S.pre = 0; dit("Court-circuit sur une sortie moteur (fils X Y Z entre eux ou sur la très basse tension) : surintensité dans l'onduleur, code PrOt (réaction déduite : la notice ne décrit pas ce câblage). Corrigez les fils, puis deux appuis sur TEST.", "Fiche : PrOt, surintensité dans l'onduleur (deux appuis sur TEST ou 3 commandes de suite)", true); }
    const mq = motManque(R);
    const actif = S.secteur && !S.hs && !panneBloque() && !S.prot && !mq;
    if (mq && S.secteur && !S.hs && (S.dir || S.pre)) { S.dir = 0; S.pre = 0; }
    const E = R.ent;
    /* entrées de sécurité (57 : NF ou 8,2 kΩ) */
    const v57 = ITEMS["57"] ? par("57") : "00", k8 = (nom, r8) => r8 ? R.ohm[nom] > 6500 && R.ohm[nom] < 10000 : E[nom];
    const st17 = k8("ST", v57[0] === "1"), sb = !S.pannes.sb;
    const ft1 = k8("FT1", v57[1] === "1" || v57[1] === "3"), ft2 = k8("FT2", v57[1] === "2" || v57[1] === "3"), c1 = cos(R, "COS1", "73"), c2 = cos(R, "COS2", "74");
    S.lu = { st17, sb, ft1, ft2, c1, c2 };
    /* commandes (fronts montants) */
    const radio = S.radio; const cmd = { AP: E.AP, CH: E.CH, PP: E.PP, PED: E.PED, ORO: E.ORO };
    [["PR1", "76"], ["PR2", "77"]].forEach(([k, p]) => { const v = par(p), f = radio[k] && !S.prec[k];
      if (radio[k]) { const m = { "00": "PP", "01": "PED", "02": "AP", "03": "CH" }[v]; if (m) cmd[m] = true; if (v === "04") cmd.STOPR = true; }
      if (v === "05") S.corRadio5 = !!radio[k];
      if (f && v === "06") { S.corRadio = !S.corRadio; dit("Télécommande : lumière de courtoisie " + (S.corRadio ? "allumée" : "éteinte") + " (paramètre " + p + " = 06).", "Paramètre " + p); }
      if (f && ["07", "08", "09", "10"].includes(v)) dit("Paramètre " + p + " = " + v + " (commande avec confirmation par une 2e touche) : non simulé.", "Paramètre " + p);
      cmd[k] = !!radio[k]; });
    const front = k => cmd[k] && !S.prec[k]; S.cmd = cmd;
    if (S.prot && R.def.ccMot) S.protC = 0;
    if (S.prot && !R.def.ccMot && ["AP", "CH", "PP", "PED"].some(front)) { S.protC = (S.protC || 0) + 1; if (S.protC >= 3 && !R.def.ccMot) { S.prot = 0; S.protC = 0; dit("PrOt effacé (trois commandes de suite).", "Fiche : PrOt"); } }
    if (actif) {
      if (S.pre) { S.pre--; if (!S.pre) S.dir = S.preDir; }
      const ignore = !st17 || !sb || (par("80") === "00" && cmd.ORO);
      if (!st17 && (S.dir || S.pre)) stopper("Contact STOP (" + nB("st") + "-" + nB("cosCom") + ") ouvert : arrêt, les commandes sont ignorées tant qu'il est ouvert.", "Bornier : ST, l'ouverture du contact arrête le mouvement");
      if (!sb && (S.dir || S.pre)) stopper("Poignée de déverrouillage ouverte : arrêt, les commandes sont ignorées.", "Fiche : connecteur SB");
      /* horloge */
      if (front("ORO") && st17 && sb && S.pos < 100 && !(S.dir > 0)) ouvrir("Contact horloge fermé : ouverture, le portail reste ouvert (paramètre 80 = " + par("80") + ").");
      if (!cmd.ORO && S.prec.ORO && par("80") === "00" && S.pos > 0) fermer("Fin d'horloge : fermeture (paramètre 80 = 00).");
      if (!ignore) {
        const hp = par("A7") === "01";
        if (hp) { /* homme présent : maintenir AP / CH */
          if (cmd.AP && !(S.dir > 0) && S.pos < 100) ouvrir(); else if (cmd.CH && !(S.dir < 0) && S.pos > 0) fermer(); else if (!cmd.AP && !cmd.CH && (S.dir || S.pre)) stopper();
        } else {
          if (front("AP")) { if (S.pos < 100 && !(S.dir > 0)) ouvrir("Commande AP (" + nB("ap") + ") : ouverture."); }
          if (front("CH")) { if (S.pos > 0 && !(S.dir < 0)) fermer("Commande CH (" + nB("ch") + ") : fermeture."); }
          if (front("PP")) { dit("Commande pas-à-pas : action selon le paramètre A4 = " + par("A4") + " (" + pdesc("A4") + ")", "Paramètre A4"); pasAPas(par("A4"), false); }
          if (front("PED")) { if (!(par("A6") === "01" && S.dir > 0)) { dit("Commande PED (" + nB("ped") + ") : pas-à-pas sur l'ouverture partielle, " + (F.deux ? (nbMot() === 2 ? "vantail 1 seul à " + p15() + " %" : p15() + " % de la course") + (I.params["15"] == null && nbMot() === 1 ? " (50 % d'usine pour un vantail, d'après la notice)" : "") : pn("15") + " % de la course") + ".", "Paramètres 15 et A6 = " + par("A6")); pasAPas("00", true); } }
          if (front("STOPR")) stopper("Télécommande : arrêt (paramètre 76 / 77 = 04).");
        }
      }
      /* FT1 / FT2 portail fermé = commande d'ouverture (52 / 55 = 02) */
      if (S.pos === 0 && !S.dir && !S.pre && st17 && sb) { if (!ft1 && S.prec.ft1 !== false && par("52") === "02") ouvrir("FT1 occultée portail fermé = commande d'ouverture (paramètre 52 = 02)."); if (!ft2 && S.prec.ft2 !== false && par("55") === "02") ouvrir("FT2 occultée portail fermé = commande d'ouverture (paramètre 55 = 02)."); }
      /* sécurités pendant le mouvement */
      const photo = (ok, nom, po, pf) => {
        if (ok) return;
        const v = par(S.dir > 0 ? po : pf); const pc = S.dir > 0 ? po : pf, sens = S.dir > 0 ? "l'ouverture" : "la fermeture";
        if (v === "00") return;
        const src = "Paramètre " + pc + " = " + v + " : " + pdesc(pc, v);
        if (v === "01") stopper(nom + " coupée pendant " + sens + " : ARRÊT jusqu'à la commande suivante.", src);
        else if (v === "02") { const d = -S.dir; S.dir = 0; d > 0 ? ouvrir() : fermer(); dit(nom + " coupée pendant " + sens + " : INVERSION IMMÉDIATE.", src); if (d > 0) S.tentatives++; }
        else if (v === "03") { S.att = { d: S.dir, nom }; S.dir = 0; dit(nom + " coupée pendant " + sens + " : STOP TEMPORAIRE, reprise une fois dégagée.", src); }
        else if (v === "04") { S.att = { d: -S.dir, nom }; S.dir = 0; dit(nom + " coupée pendant " + sens + " : arrêt, puis inversion une fois dégagée.", src); }
      };
      if (S.dir) { photo(ft1, "FT1", "50", "51"); if (S.dir) photo(ft2, "FT2", "53", "54"); }
      if (S.att) { const ok = S.att.nom === "FT1" ? ft1 : ft2; if (ok) { const d = S.att.d; S.att = null; d > 0 ? ouvrir("Cellule dégagée : ouverture.") : fermer("Cellule dégagée : fermeture."); } }
      /* bords sensibles */
      const bord = (ok, nom, code) => {
        if (ok !== false || !S.dir || S.inv) return;
        const v = par(code), d = S.dir;
        const invOuv = code === "73" ? ["01", "02", "03", "04", "12", "14"] : ["03", "04", "12", "14"], invFer = code === "73" ? ["03", "04", "14"] : ["01", "02", "03", "04", "14"];
        if (((d > 0 && invOuv.includes(v)) || (d < 0 && invFer.includes(v))) && duree("27") === 0) { stopper(nom + " actionné : inversion de 0 s (paramètre 27 = 00), le portail s'arrête.", "Paramètre " + code + " = " + v); return; }
        if ((d > 0 && invOuv.includes(v)) || (d < 0 && invFer.includes(v))) { S.dir = 0; S.inv = duree("27") * 10; d > 0 ? fermer() : ouvrir(); S.invDir = -d; dit(nom + " actionné pendant " + (d > 0 ? "l'ouverture" : "la fermeture") + " : inversion pendant " + duree("27") + " s (paramètre 27), puis arrêt.", "Paramètre " + code + " = " + v + " : " + pdesc(code, v)); }
        else if (!S["nd" + code]) { S["nd" + code] = 1; dit(nom + " actionné pendant " + (d > 0 ? "l'ouverture" : "la fermeture") + " : la notice ne décrit pas d'action dans ce sens avec " + code + " = " + v + ". Rien n'est simulé.", "Paramètre " + code); }
      };
      bord(c1, F.isel ? "Bord sensible (ISEL)" : "Bord sensible COS1", "73"); bord(c2, "Bord sensible COS2", "74");
      if (c1 !== false) S.nd73 = 0; if (c2 !== false) S.nd74 = 0;
      if (S.inv) { S.inv--; if (!S.inv) stopper(); }
      /* mouvement : course complète en 10 s environ (vitesse indicative) */
      if (F.deux) mouvement2(R);
      else if (S.dir > 0) { S.pos = Math.min(S.cible || 100, S.pos + 1); if (S.pos >= (S.cible || 100)) { S.dir = 0; S.arret = null; finManoeuvre(); S.pause = 0; S.tentatives = S.pos >= 100 ? S.tentatives : S.tentatives; } }
      else if (S.dir < 0) { S.pos = Math.max(0, S.pos - 1); if (S.pos === 0) { S.dir = 0; S.arret = null; finManoeuvre(); S.tentatives = 0; } }
      /* refermeture automatique (A2 différent de 00) : 21 depuis complètement ouvert, 16 depuis l'ouverture partielle */
      const a2 = par("A2"), copro = ["01", "02"].includes(par("A4"));
      if (!S.dir && !S.pre && !S.att && S.pos > 0 && (S.pos >= 100 || ITEMS["16"] || F.deux) && S.arret === null && (a2 !== "00" || copro) && !(cmd.ORO) && st17 && sb) {
        const lim = a2 === "99" ? 1e9 : Math.max(1, pn("A2"));
        if (S.tentatives < lim) {
          const tps = (S.pos >= 100 || F.deux ? duree("21") : duree("16")) * 10;
          if ((!ft1 && par("51") !== "00") || (!ft2 && par("54") !== "00")) S.pause = 0; /* les photocellules relancent le décompte */
          S.pause++; if (S.pause >= tps) fermer("Refermeture automatique après " + Math.round(tps / 10) + " s (paramètres A2 et " + (S.pos >= 100 || F.deux ? "21" : "16") + ").");
        }
      } else if (S.dir) S.pause = 0;
    }
    if (!actif && (S.dir || S.pre)) { S.dir = 0; S.pre = 0; }
    if (F.deux && !S.dir) S.mv = { 1: 0, 2: 0 };
    if (S.corT > 0) S.corT--;
    /* sortie +SC (A8) */
    const a8 = par("A8");
    const mi = S.t % 150; /* 01, arrêté à mi-course : s'éteint 2 fois toutes les 15 s */
    S.sc = !actif ? 0 : a8 === "00" ? (S.pos > 0 || S.dir ? 1 : 0) : a8 === "01" ? (S.dir > 0 ? Math.floor(S.t / 5) % 2 : S.dir < 0 ? Math.floor(S.t / 2) % 2 : S.pos >= 100 ? 1 : S.pos > 0 ? (mi < 3 || (mi >= 6 && mi < 9) ? 0 : 1) : 0) : 0; /* 02 à 04 : non simulé, sortie laissée coupée */
    S.prec = Object.assign({}, cmd, { ft1, ft2 });
    /* digicode : impulsion d'une seconde */
    I.acc.forEach(a => { const e = S.etat[a.id]; if (e && e.imp) { e.imp--; if (!e.imp) e.on = false; } });
    verifierMission(R);
    maj();
  }

  /* ---------- missions (vérifiées sur le câblage, carte sous tension) ---------- */
  const MOT2 = { id: "mot2", t: "Moteurs brushless", but: "Câblez les moteurs : MOTEUR 1 (vantail 1) sur le connecteur M1, MOTEUR 2 (vantail 2) sur M2. Chaque vantail doit partir dans le bon sens.", aide: () => "Fil X du moteur sur X, Y sur Y, Z sur Z (dans l'atelier, cet ordre donne le bon sens). Vantail à l'envers : échangez deux fils. Un seul moteur : paramètre 70 sur 01.", test: () => {
    const n = nbMot(), R = avec(() => {}, R => R); if (R.def.ccMot) return "Court-circuit sur une sortie moteur : deux phases reliées entre elles ou à la très basse tension."; if (R.def.d230) return "DANGER : du 230 V arrive sur la carte.";
    for (let k = 1; k <= n; k++) { const a = I.acc.find(x => x.t === "mbl" && x.num === k); if (!a) return "Posez le moteur brushless " + k + " (vantail " + k + ")."; const m = R.moteurs[a.id];
      if (!m || !m.ok) return "Moteur " + k + " : " + (m && m.err ? m.err + " (trois fils X, Y, Z sur le même connecteur)." : "non raccordé (code Mot" + k + ")."); if (m.sortie !== k) return "Le moteur " + k + " est câblé sur le connecteur M" + m.sortie + " : le vantail " + k + " doit être commandé par M" + k + "."; if (m.sens < 0) return "Le moteur " + k + " partirait à l'envers : échangez deux de ses fils."; }
    return ""; } };
  const missions = () => M ? M.missions(api()) : F.deux ? [MOT2].concat(MISSIONS.map(m => m.id === "cos" && F.isel ? Object.assign({}, m, { t: "Bord sensible 8,2 kΩ sur ISEL", but: "Câblez un bord sensible résistif 8,2 kΩ sur l'entrée ISEL et réglez les paramètres 60 et 73 en conséquence.", aide: () => "Bord entre ISEL (" + nB("cos1") + ") et COM (" + nB("cosCom") + "). Paramètre 60 sur 01 (ISEL = bord sensible), 73 sur 02 ou 04 (résistif 8k2).", test: () => par("60") === "00" ? "Le paramètre 60 est sur 00 : ISEL sert d'horloge. Réglez 60 sur 01." : essaiCos() }) : m)) : MISSIONS;
  const MISSIONS = [
    { id: "ap", t: "Bouton poussoir en ouverture", but: "Câblez un bouton poussoir qui commande l'OUVERTURE (AP).", aide: () => `Contact NO entre AP (${nB("ap")}) et le commun des commandes COM (${nB("cmdCom")}).`, test: m => essai(m, [["pp", "on"]], "AP") },
    { id: "cle", t: "Sélecteur à clé ouverture / fermeture", but: "Câblez un sélecteur à clé : à gauche OUVERTURE (AP), à droite FERMETURE (CH).", aide: () => `C du sélecteur sur COM (${nB("cmdCom")}), NO1 sur AP (${nB("ap")}), NO2 sur CH (${nB("ch")}).`, test: m => essai(m, [["cle", "g"]], "AP") || essai(m, [["cle", "d"]], "CH") },
    { id: "digi", t: "Digicode en pas-à-pas", but: "Câblez un digicode alimenté par la carte, qui commande le PAS-À-PAS (PP).", aide: () => `Alimentation : + sur +24V (${nB("p24")}), − sur COM (${nB("com")}). Contact : C sur COM (${nB("cmdCom")}), NO sur PP (${nB("pp")}).`, test: m => essai(m, [["digi", "imp"]], "PP", true) },
    { id: "ft1", t: "Cellules en FT1", but: "Câblez une paire de cellules sur FT1 : quand le faisceau est coupé, l'entrée FT1 s'ouvre.", aide: () => `TX et RX : + sur ${nB("p24")}, − sur ${nB("com")}. Contact du RX : C sur COM (${nB(K.ftCom ? "ftCom" : "com")}), NF sur FT1 (${nB("ft1")}). Pas de pont sur ${nB("ft1")}-${nB(K.ftCom ? "ftCom" : "com")}.`, test: m => essaiCell(m) },
    { id: "lam", t: "Clignotant", but: "Câblez le clignotant : il doit s'allumer quand le portail bouge.", aide: () => `Clignotant sur LAM (${nB("lam")}) et COM (${nB("com")}).`, test: m => essaiLam(m) },
    { id: "stop", t: "Bouton STOP", but: "Remplacez le pont d'usine de ST par un bouton STOP coup de poing.", aide: () => `Retirez le pont ${nB("cosCom")}-${nB("st")}, câblez le bouton NF entre ST (${nB("st")}) et COM (${nB("cosCom")}).`, test: m => essai(m, [["stop", "on"]], "ST", false, true) },
    { id: "cos", t: "Bord sensible 8,2 kΩ sur COS1", but: "Câblez un bord sensible résistif 8,2 kΩ sur COS1 et réglez le paramètre 73 en conséquence.", aide: () => `Bord entre COS1 (${nB("cos1")}) et COM (${nB("cosCom")}). Paramètre 73 sur 02 ou 04 (résistif 8k2).`, test: m => essaiCos(m) },
    { id: "cor", t: "Lumière de courtoisie 230 V~", but: "Câblez une lumière 230 V~ commandée par le contact COR.", aide: () => `L de l'arrivée 230 V~ sur COR (${nB("cor1")}), COR (${nB("cor2")}) vers L de la lumière, N de la lumière sur N de l'arrivée. Jamais de 230 V ailleurs.`, test: m => essaiCor(m) }
  ];
  /* essai : on simule l'action et on regarde l'entrée de la carte, sur une copie de l'état */
  function avec(etats, f) {
    const R0 = S.R, snap = JSON.parse(JSON.stringify(S, (k, v) => k === "R" ? undefined : v)); /* tout l'état est remis comme avant l'essai */
    S.secteur = true; S.hs = false; S.f3 = true; S.etat = {}; S.radio = {}; S.corRadio = S.corRadio5 = false; /* accessoires au repos pour l'essai */
    try { circuit(); etats(); return f(circuit()); } finally { Object.keys(S).forEach(k => { if (k !== "R" && !(k in snap)) delete S[k]; }); Object.assign(S, snap); S.R = R0; }
  }
  const actives = R => Object.keys(R.ent).filter(k => ["AP", "CH", "PP", "PED", "ORO"].includes(k) && R.ent[k]);
  function essai(m, acts, entree, alim, nf) {
    const des = acts.map(([t]) => I.acc.filter(a => a.t === t)).flat(); if (!des.length) return "Posez d'abord l'accessoire demandé.";
    let err1 = "";
    for (const a of des) { const e = essai1(a, acts, entree, alim, nf); if (!e) return ""; err1 = err1 || e; }
    return err1;
  }
  function essai1(a, acts, entree, alim, nf) {
    {
      const act = acts.find(([t]) => t === a.t)[1];
      const repos = avec(() => {}, R => ({ e: R.ent[entree], act: actives(R), alim: R.alim[a.id] }));
      const appui = avec(() => { const e = S.etat[a.id] = S.etat[a.id] || {}; if (act === "imp") { e.on = true; } else e[act] = true; }, R => ({ e: R.ent[entree], act: actives(R), alim: R.alim[a.id] }));
      if (alim && !repos.alim) return "Le digicode n'est pas alimenté : + sur +24V (" + nB("p24") + "), − sur un COM.";
      if (nf && avec57()) return avec57();
      if (nf) { if (!repos.e) return "Au repos, l'entrée " + entree + " doit être fermée sur COM (contact NF)."; if (appui.e) return "En actionnant l'accessoire, l'entrée " + entree + " reste fermée : il est peut-être court-circuité par un pont."; if (I.fils.some(w => w.usine && w.b === K.st)) return "Le pont d'usine " + nB("cosCom") + "-" + nB("st") + " est encore en place."; return ""; }
      if (repos.act.length) return "Au repos, une commande est déjà active (" + repos.act.join(", ") + ") : contact mal raccordé.";
      if (!appui.e) return "En actionnant l'accessoire, l'entrée " + entree + " ne se ferme pas sur COM : vérifiez le contact et le commun (" + nB("cmdCom") + ").";
      if (appui.act.length > 1) return "En actionnant l'accessoire, plusieurs commandes s'activent (" + appui.act.join(", ") + ").";
      return "";
    }
  }
  const avec57 = () => ITEMS["57"] && par("57") !== "00" ? "Paramètre 57 = " + par("57") + " (contacts 8,2 kΩ) : cette mission se fait avec des contacts NF, remettez 57 sur 00." : "";
  function essaiCell() {
    if (avec57()) return avec57();
    const rx = I.acc.find(a => a.t === "rx"); if (!rx) return "Posez d'abord une paire de cellules.";
    const tx = I.acc.find(a => a.t === "tx" && a.paire === rx.paire);
    const ok = avec(() => { S.etat["p" + rx.paire] = {}; }, R => ({ ft: R.ent.FT1, rx: R.alim[rx.id], tx: R.alim[tx.id] }));
    if (!ok.tx) return "L'émetteur TX n'est pas alimenté (+ sur " + nB("p24") + ", − sur COM).";
    if (!ok.rx) return "Le récepteur RX n'est pas alimenté (+ sur " + nB("p24") + ", − sur COM).";
    if (!ok.ft) return "Faisceau libre, l'entrée FT1 (" + nB("ft1") + ") devrait être fermée sur COM : C du RX sur COM, NF sur " + nB("ft1") + ".";
    const cut = avec(() => { S.etat["p" + rx.paire] = { coupe: true }; }, R => R.ent.FT1);
    if (cut) return "Faisceau coupé, FT1 reste fermée : un pont " + nB("ft1") + "-" + nB("com") + " est-il resté en place ? Ou le contact NO est utilisé à la place du NF.";
    return "";
  }
  function essaiLam() {
    const l = I.acc.find(a => a.t === "lam"); if (!l) return "Posez d'abord un clignotant.";
    const on = avec(() => { S.dir = 1; S.t = 0; }, R => R.alim[l.id]), off = avec(() => { S.dir = 0; S.pre = 0; }, R => R.alim[l.id]);
    if (!on) return "Pendant le mouvement, le clignotant n'est pas alimenté : LAM (" + nB("lam") + ") et COM (" + nB("com") + ")."; if (off) return "Le clignotant reste allumé à l'arrêt : il n'est pas sur la sortie LAM."; return "";
  }
  function essaiCos() {
    const b = I.acc.find(a => a.t === "b8k"); if (!b) return "Posez d'abord un bord sensible 8,2 kΩ.";
    if (!["02", "04", "12"].includes(par("73")) && !["14"].includes(par("73"))) return "Le paramètre 73 n'est pas réglé pour un bord résistif 8,2 kΩ (02 ou 04).";
    const r = avec(() => {}, R => R.ohm.COS1), p = avec(() => { S.etat[b.id] = { on: true }; }, R => R.ohm.COS1);
    const att = par("73") === "12" || par("73") === "14" ? 4100 : 8200;
    if (!(Math.abs(r - att) < att * 0.2)) return "Au repos, la carte ne voit pas " + (att === 8200 ? "8,2 kΩ" : "4,1 kΩ") + " entre " + (F.isel ? "ISEL" : "COS1") + " (" + nB("cos1") + ") et COM : " + (isFinite(r) ? Math.round(r) + " Ω" : "circuit ouvert") + ".";
    if (p !== 0) return "Bord écrasé, " + (F.isel ? "ISEL" : "COS1") + " devrait passer en court-circuit."; return "";
  }
  function essaiCor() {
    const l = I.acc.find(a => a.t === "lum"); if (!l) return "Posez une lumière 230 V~ et une arrivée 230 V~.";
    if (!I.acc.some(a => a.t === "sec")) return "Posez une arrivée 230 V~.";
    const sp = I.params; I.params = Object.assign({}, sp, { [F.pCor || "20"]: "00", "79": "02" }); /* contact COR fermé pendant la manœuvre, le temps de l'essai */
    try {
      const on = avec(() => { S.dir = 1; }, R => R), off = avec(() => { S.dir = 0; S.pre = 0; S.corT = 0; }, R => R);
      if (on.def.d230 || off.def.d230) return "DANGER : du 230 V arrive sur une borne 24 V de la carte (ou sur un accessoire 24 V) quand COR est fermé ou ouvert.";
      if (on.def.cc24 || off.def.cc24 || on.def.ccAC) return "Court-circuit dans l'installation.";
      if (!on.alim[l.id]) return "Quand le contact COR se ferme, la lumière ne s'allume pas : L → " + nB("cor1") + ", " + nB("cor2") + " → lumière, lumière → N.";
      if (off.alim[l.id]) return "La lumière reste allumée quand COR est ouvert : elle ne passe pas par le contact " + nB("cor1") + "-" + nB("cor2") + ".";
      return "";
    } finally { I.params = sp; }
  }
  function verifierMission() { /* rien en continu : la vérification se fait au bouton */ }

  /* ---------- dessin ---------- */
  const W = 390, H = 700;
  const posB = k => { if (k.startsWith("b:")) { const b = BORNES[k]; return b ? [b.x, b.y] : null; } const [id, n] = k.split(":"); const a = I.acc.find(x => x.id === id); if (!a) return null; const i = ACC[a.t].b.findIndex(b => b[0] === n); return [a.x + 14 + i * 24, a.y + 40]; };
  /* fil : part vers le haut depuis une borne de la carte, vers le bas depuis un accessoire */
  const chemin = (a, b, m) => { const p = posB(a), q = posB(b); if (!p || !q) return ""; const dy = Math.max(28, Math.abs(q[1] - p[1]) * 0.5), sp = a.startsWith("b:") ? -1 : 1, sq = b.startsWith("b:") ? -1 : 1;
    if (!m) return `M${p[0]} ${p[1]} C${p[0]} ${p[1] + sp * dy} ${q[0]} ${q[1] + sq * dy} ${q[0]} ${q[1]}`;
    /* fil écarté par l'utilisateur : il passe par le point m */
    const tx = (q[0] - p[0]) / 4, ty = (q[1] - p[1]) / 4, l1 = Math.max(20, Math.abs(m[1] - p[1]) * 0.5), l2 = Math.max(20, Math.abs(q[1] - m[1]) * 0.5);
    return `M${p[0]} ${p[1]} C${p[0]} ${p[1] + sp * l1} ${m[0] - tx} ${m[1] - ty} ${m[0]} ${m[1]} C${m[0] + tx} ${m[1] + ty} ${q[0]} ${q[1] + sq * l2} ${q[0]} ${q[1]}`; };
  function dessinCarte() {
    if (M) return M.dessin(api());
    if (F.blocs) return dessinCarte2();
    const g = [];
    const T = (x, y, t, o = "") => g.push(`<text x="${x}" y="${y}" ${o}>${esc(t)}</text>`);
    const GR = "#5b605d";
    g.push(`<rect x="10" y="${DY}" width="370" height="314" rx="10" fill="#0f3b2a" stroke="#1d6b4c"/>`);
    T(20, DY + 16, C.nom, 'class="cabt" fill="#8fd1b2" font-size="11"');
    g.push(`<rect x="20" y="${DY + 22}" width="9" height="9" rx="2" fill="${GR}"/>`); T(33, DY + 30, "câblé usine", 'class="cabt"');
    const u = (id, inner) => g.push(`<g class="cabu" data-u="${id}">${inner}</g>`);
    if (F.batt) u("batt", `<rect x="96" y="${DY + 10}" width="14" height="16" rx="2" fill="${GR}"/><rect x="112" y="${DY + 10}" width="14" height="16" rx="2" fill="${GR}"/><text x="112" y="${DY + 36}" class="cabt" text-anchor="middle">BATT − +</text>`);
    if (F.batt) u("cl", `<rect x="144" y="${DY + 8}" width="10" height="58" rx="2" fill="#bdbdbd" opacity=".55"/><text x="160" y="${DY + 40}" class="cabt" text-anchor="middle" transform="rotate(-90 160 ${DY + 40})">B72/CL</text>`);
    [["enc", "ENC", 182, 4], ["fc", "FC", 218, 3], ["sb", "SB", 248, 2], ["wifi", "WIFI", 284, 3]].forEach(([id, n, x, k]) => u(id, `<rect x="${x}" y="${DY + 10}" width="${k * 7 + 4}" height="10" rx="2" fill="${S.pannes[id] ? "#ff6b5e" : "#bdbdbd"}" opacity=".7"/><text x="${x + (k * 7 + 4) / 2}" y="${DY + 32}" class="cabt" text-anchor="middle">${n}</text>`));
    u("rec", `<rect x="358" y="${DY + 26}" width="12" height="66" rx="2" fill="#2a62c9"/>${I.acc.some(a => a.t === "radio") ? `<rect x="340" y="${DY + 22}" width="30" height="74" rx="4" fill="#e9eef7" stroke="#2a62c9"/><text x="355" y="${DY + 62}" class="cabt" fill="#1d3f86" text-anchor="middle" transform="rotate(-90 355 ${DY + 62})">RX2LP</text>` : `<text x="352" y="${DY + 60}" class="cabt" text-anchor="middle" transform="rotate(-90 352 ${DY + 60})">RÉCEPTEUR</text>`}`);
    u("mot", ["X", "Y", "Z"].map((n, i) => `<rect x="14" y="${DY + 54 + i * 18}" width="16" height="16" rx="2" fill="${S.pannes.mot ? "#ff6b5e" : GR}"/><text x="36" y="${DY + 65 + i * 18}" class="cabt" font-size="8">${n}</text>`).join("") + `<text x="22" y="${DY + 112}" class="cabt" text-anchor="middle">MOTEUR</text>` + (S.pannes.mot ? "" : ["#6b4a2b", "#222", "#9aa"].map((c, i) => `<path id="cabmot${i}" d="M14 ${DY + 62 + i * 18} H2" stroke="${c}" stroke-width="3"/>`).join("")));
    const al = F.alim, inv = S.pannes.sec && al.inv;
    u("sec", `<rect x="20" y="${DY + 140}" width="14" height="16" rx="2" fill="${S.pannes.sec ? "#ff6b5e" : GR}"/><rect x="36" y="${DY + 140}" width="14" height="16" rx="2" fill="${S.pannes.sec ? "#ff6b5e" : GR}"/><text x="36" y="${DY + 170}" class="cabt" text-anchor="middle">${(inv || al.lab).join(" ")}</text><text x="36" y="${DY + 180}" class="cabt" text-anchor="middle" fill="#8fd1b2">${al.code ? "← transfo" : "alim carte"}</text>`);
    u("facc", `<rect x="70" y="${DY + 142}" width="22" height="9" rx="2" fill="${S.f3 ? "#e8c33a" : "#5a1e1e"}"/><text x="81" y="${DY + 164}" class="cabt" text-anchor="middle">${esc(F.facc.lab)}</text>`);
    u("fmot", `<rect x="104" y="${DY + 142}" width="22" height="9" rx="2" fill="${S.pannes.fmot ? "#5a1e1e" : "#e8c33a"}"/><text x="115" y="${DY + 164}" class="cabt" text-anchor="middle">${esc(F.fmot.lab)}</text>`);
    /* afficheur et touches */
    g.push(`<g id="cabaff"></g>`);
    T(270, DY + 84, "COMMANDES", 'class="cabt" font-size="6" text-anchor="middle" fill="#8fd1b2"'); T(318, DY + 84, "SÉCURITÉS", 'class="cabt" font-size="6" text-anchor="middle" fill="#8fd1b2"');
    [["▲", 226, 53, "up"], ["▼", 226, 74, "dn"], ["+", 338, 53, "pl"], ["−", 338, 74, "mo"], ["PROG", 268, 100, "prog"], ["TEST", 312, 100, "test"]].forEach(([n, x, y, k]) => g.push(`<g class="cabk" data-k="${k}"><rect x="${x - 7}" y="${DY + y - 7}" width="14" height="14" rx="2" fill="#e9e9e9"/><circle cx="${x}" cy="${DY + y}" r="4.5" fill="#d23b3b"/><text x="${n.length > 1 ? x : x < 300 ? x - 13 : x + 13}" y="${n.length > 1 ? DY + y + 17 : DY + y + 3}" class="cabt" text-anchor="middle" font-size="${n.length > 1 ? 6.5 : 9}" fill="#e8f4ec">${n}</text></g>`));
    /* borniers */
    RANGEES.forEach(r => r.blocs.forEach(([x0, l]) => {
      g.push(`<rect x="${x0 - P / 2 + 1}" y="${r.y - 13}" width="${l.length * P - 2}" height="26" rx="3" fill="#3fae5a" stroke="#1f7a36"/>`);
      l.forEach(([n, lab], i) => { const x = x0 + i * P;
        g.push(`<rect x="${x - 8}" y="${r.y - 8}" width="16" height="16" rx="2" fill="#d9efe0" stroke="#1f7a36"/><circle class="cabb" data-b="b:${n}" cx="${x}" cy="${r.y}" r="4.5" fill="#8f9a95"/>`);
        T(x, r.dessus ? r.y - 30 : r.y + 24, n, 'class="cabt" text-anchor="middle" font-size="10" font-weight="800" fill="#fff"');
        T(x, r.dessus ? r.y - 19 : r.y + 35, lab, 'class="cabt" text-anchor="middle" font-size="7.2" fill="#bfe8cc"'); });
    }));
    T(44, RANGEES[0].y + 4, "courtoisie", 'class="cabt" text-anchor="middle" fill="#8fd1b2"');
    /* zones de toucher des bornes (plus larges que le dessin) */
    Object.entries(BORNES).forEach(([k, b]) => g.push(`<circle class="cabhit" data-b="${k}" cx="${b.x}" cy="${b.y}" r="11.5" fill="transparent"/>`));
    return g.join("");
  }
  /* carte dessinée par blocs de bornes (B70/2ML, fig. 1 et 2 de la notice) */
  function dessinCarte2() {
    const g = [], GR = "#5b605d", T = (x, y, t, o = "") => g.push(`<text x="${x}" y="${y}" ${o}>${esc(t)}</text>`), u = (id, inner) => g.push(`<g class="cabu" data-u="${id}">${inner}</g>`);
    const Q = Object.assign({ titre: [150, 70], sec: [96, 12], fmot: [96, 46], facc: [96, 130], rec: [150, 14, 120], wifi: [352, 112], batt: [160, 130] }, F.pos || {});
    g.push(`<rect x="10" y="${DY}" width="370" height="${F.hauteur || 300}" rx="10" fill="#0f3b2a" stroke="#1d6b4c"/>`);
    T(Q.titre[0], DY + Q.titre[1], C.nom, 'class="cabt" fill="#8fd1b2" font-size="11"');
    g.push(`<rect x="${Q.titre[0]}" y="${DY + Q.titre[1] + 6}" width="9" height="9" rx="2" fill="${GR}"/>`); T(Q.titre[0] + 13, DY + Q.titre[1] + 14, "câblé usine", 'class="cabt"');
    const inv = S.pannes.sec && F.alim.inv, [sx, sy] = Q.sec;
    u("sec", `<rect x="${sx}" y="${DY + sy}" width="14" height="16" rx="2" fill="${S.pannes.sec ? "#ff6b5e" : GR}"/><rect x="${sx + 16}" y="${DY + sy}" width="14" height="16" rx="2" fill="${S.pannes.sec ? "#ff6b5e" : GR}"/><text x="${sx + 15}" y="${DY + sy + 26}" class="cabt" text-anchor="middle">${(inv || F.alim.lab).join(" ")}</text>`);
    u("fmot", `<rect x="${Q.fmot[0]}" y="${DY + Q.fmot[1]}" width="30" height="9" rx="2" fill="${S.pannes.fmot ? "#5a1e1e" : "#e8c33a"}"/><text x="${Q.fmot[0] + 15}" y="${DY + Q.fmot[1] + 20}" class="cabt" text-anchor="middle">${esc(F.fmot.lab)}</text>`);
    u("facc", `<rect x="${Q.facc[0]}" y="${DY + Q.facc[1]}" width="30" height="9" rx="2" fill="${S.f3 ? "#e8c33a" : "#5a1e1e"}"/><text x="${Q.facc[0] + 15}" y="${DY + Q.facc[1] + 20}" class="cabt" text-anchor="middle">${esc(F.facc.lab)}</text>`);
    const [rx, ry, rw] = Q.rec, rc = rx + rw / 2;
    u("rec", `<rect x="${rx}" y="${DY + ry}" width="${rw}" height="12" rx="2" fill="#2a62c9"/>${I.acc.some(a => a.t === "radio") ? `<rect x="${rx}" y="${DY + ry - 6}" width="${rw}" height="24" rx="4" fill="#e9eef7" stroke="#2a62c9"/><text x="${rc}" y="${DY + ry + 10}" class="cabt" fill="#1d3f86" text-anchor="middle">H93/RX2LP/I</text>` : `<text x="${rc}" y="${DY + ry + 26}" class="cabt" text-anchor="middle">RÉCEPTEUR RADIO</text>`}`);
    u("wifi", `<rect x="${Q.wifi[0]}" y="${DY + Q.wifi[1]}" width="18" height="10" rx="2" fill="#bdbdbd" opacity=".7"/><text x="${Q.wifi[0] + 9}" y="${DY + Q.wifi[1] + 22}" class="cabt" text-anchor="middle">${Q.wifiLab || "WIFI"}</text>`);
    if (F.batt) u("batt", `<rect x="${Q.batt[0]}" y="${DY + Q.batt[1]}" width="14" height="16" rx="2" fill="${GR}"/><rect x="${Q.batt[0] + 16}" y="${DY + Q.batt[1]}" width="14" height="16" rx="2" fill="${GR}"/><text x="${Q.batt[0] + 15}" y="${DY + Q.batt[1] + 26}" class="cabt" text-anchor="middle">BATT − +</text>`);
    g.push(`<g id="cabaff"></g>`);
    const y = DY + (F.affY || 50), ax = F.affDX || 0;
    T(270 + ax, y + 34, "COMMANDES", 'class="cabt" font-size="6" text-anchor="middle" fill="#8fd1b2"'); T(318 + ax, y + 34, "SÉCURITÉS", 'class="cabt" font-size="6" text-anchor="middle" fill="#8fd1b2"');
    [["▲", 226 + ax, 3, "up"], ["▼", 226 + ax, 24, "dn"], ["+", 338 + ax, 3, "pl"], ["−", 338 + ax, 24, "mo"], ["PROG", 268 + ax, 50, "prog"], ["TEST", 312 + ax, 50, "test"]].forEach(([n, x, dy, k]) => g.push(`<g class="cabk" data-k="${k}"><rect x="${x - 7}" y="${y + dy - 7}" width="14" height="14" rx="2" fill="#e9e9e9"/><circle cx="${x}" cy="${y + dy}" r="4.5" fill="#d23b3b"/><text x="${n.length > 1 ? x : x < 300 + ax ? x - 13 : x + 13}" y="${n.length > 1 ? y + dy + 17 : y + dy + 3}" class="cabt" text-anchor="middle" font-size="${n.length > 1 ? 6.5 : 9}" fill="#e8f4ec">${n}</text></g>`));
    F.blocs.forEach(b => { const p = b.ns.map(([n]) => BORNES["b:" + n]); const x0 = Math.min(...p.map(q => q.x)) - 12, y0 = Math.min(...p.map(q => q.y)) - 12, x1 = Math.max(...p.map(q => q.x)) + 12, y1 = Math.max(...p.map(q => q.y)) + 12;
      g.push(`<rect x="${x0}" y="${y0}" width="${x1 - x0}" height="${y1 - y0}" rx="3" fill="#3fae5a" stroke="#1f7a36"/>`);
      if (b.titre) { if (b.vertical) T(x1 + 26, (y0 + y1) / 2 + 3, b.titre, 'class="cabt" font-size="7.5" fill="#e8f4ec"'); else T((x0 + x1) / 2, y1 + 12, b.titre, 'class="cabt" text-anchor="middle" font-size="7.5" fill="#e8f4ec"'); }
      b.ns.forEach(([n, lab]) => { const q = BORNES["b:" + n], mot = /^[12][XYZ]$/.test(n);
        g.push(`<rect x="${q.x - 8}" y="${q.y - 8}" width="16" height="16" rx="2" fill="#d9efe0" stroke="#1f7a36"/><circle class="cabb" data-b="b:${n}" cx="${q.x}" cy="${q.y}" r="4.5" fill="#8f9a95"/>`);
        if (b.lab === "droite") { T(q.x + 16, q.y + 4, mot ? lab : n, 'class="cabt" font-size="10" font-weight="800" fill="#fff"'); if (!mot) T(q.x + 34, q.y + 4, lab, 'class="cabt" font-size="7.2" fill="#bfe8cc"'); }
        else if (b.lab === "haut") { if (!mot) T(q.x, q.y - 30, n, 'class="cabt" text-anchor="middle" font-size="10" font-weight="800" fill="#fff"'); T(q.x, q.y - (mot ? 16 : 19), lab, 'class="cabt" text-anchor="middle" font-size="7.2" fill="#bfe8cc"'); }
        else { T(q.x, q.y + 24, n, 'class="cabt" text-anchor="middle" font-size="10" font-weight="800" fill="#fff"'); T(q.x, q.y + 34, lab, 'class="cabt" text-anchor="middle" font-size="7.2" fill="#bfe8cc"'); } }); });
    Object.entries(BORNES).forEach(([k, b]) => g.push(`<circle class="cabhit" data-b="${k}" cx="${b.x}" cy="${b.y}" r="11.5" fill="transparent"/>`));
    return g.join("");
  }
  function dessinPortail2() {
    return `<g id="cabportail"><rect x="20" y="58" width="350" height="5" rx="2" fill="#333"/><rect x="40" y="18" width="10" height="46" fill="#555"/><rect x="340" y="18" width="10" height="46" fill="#555"/>
      <rect id="cabv1" x="50" y="26" width="145" height="28" rx="2" fill="none" stroke="#bbb" stroke-width="2.5"/><rect id="cabv2" x="195" y="26" width="145" height="28" rx="2" fill="none" stroke="#bbb" stroke-width="2.5"/>
      <text id="cabetat" x="195" y="12" text-anchor="middle" class="cabn"></text><text id="cabv1t" x="52" y="12" class="cabs">vantail 1</text><text id="cabv2t" x="338" y="12" class="cabs" text-anchor="end">vantail 2</text></g>`;
  }
  function dessinAcc(a) {
    const d = ACC[a.t], w = largeur(a.t), sel = S.selAcc === a.id;
    let h = `<g class="caba" data-a="${a.id}" transform="translate(${a.x} ${a.y})"><rect class="cabbox" width="${w}" height="56" rx="10" fill="#262626" stroke="${sel ? "#f0b429" : "#3a3a3a"}" stroke-width="${sel ? 2 : 1}"/>`;
    h += `<text x="10" y="16" class="cabn">${esc(d.nom)}${a.paire ? " " + a.paire : a.num ? " " + a.num : ""}</text><text x="10" y="27" class="cabs">${esc(d.sous)}</text>`;
    if (d.charge && !["digi", "tx", "rx", "txc", "rxc"].includes(a.t)) h += `<circle id="cabl-${a.id}" cx="${w - 14}" cy="14" r="7" fill="#333"/>`;
    if (["pp", "stop", "oro", "bnf", "b8k", "cle", "digi", "mot", "mbl"].includes(a.t)) h += `<text id="cabe-${a.id}" x="${w - 8}" y="16" class="cabs" text-anchor="end" fill="#f0b429"></text>`;
    d.b.forEach(([k, lab], i) => { const x = 14 + i * 24; h += `<circle class="cabb" data-b="${a.id}:${k}" cx="${x}" cy="40" r="4.5" fill="#d7dde4"/><text x="${x}" y="53" class="cabs" text-anchor="middle">${esc(lab)}</text><circle class="cabhit" data-b="${a.id}:${k}" cx="${x}" cy="40" r="11" fill="transparent"/>`; });
    return h + `</g>`;
  }
  function dessinPortail() {
    return `<g id="cabportail"><rect x="20" y="58" width="350" height="7" rx="3" fill="#333"/><rect x="34" y="20" width="8" height="44" fill="#555"/><rect x="200" y="20" width="8" height="44" fill="#555"/>
      <g id="cabvantail"><rect x="42" y="24" width="158" height="32" rx="2" fill="none" stroke="#bbb" stroke-width="2.5"/>${[1, 2, 3, 4, 5, 6, 7].map(i => `<line x1="${42 + i * 20}" y1="26" x2="${42 + i * 20}" y2="54" stroke="#888" stroke-width="2"/>`).join("")}</g>
      <text id="cabetat" x="372" y="16" text-anchor="end" class="cabn"></text></g>`;
  }
  /* zones de toucher des bornes au-dessus des fils : un fil ne cache jamais une borne */
  const toutesBornes = () => Object.keys(BORNES).concat(I.acc.filter(a => ACC[a.t].b).flatMap(a => ACC[a.t].b.map(b => a.id + ":" + b[0])));
  const hits = () => toutesBornes().map(k => { const q = posB(k); return q ? `<circle class="cabhit" data-b="${k}" cx="${q[0]}" cy="${q[1]}" r="11" fill="transparent"/>` : ""; }).join("");
  function rendre() {
    const sv = $("#cabsvg"); if (!sv) return;
    const fils = I.fils.map(w => { const d = chemin(w.a, w.b, w.p); return `<path class="cabwh" data-w="${w.id}" id="cwh-${w.id}" d="${d}"/><path class="cabw${S.selFil === w.id ? " sel" : ""}${FONCE(w.c) ? " fonce" : ""}" id="cw-${w.id}" data-w="${w.id}" d="${d}" stroke="${TRAIT(w.c)}" />`; }).join("");
    const faisceaux = [...new Set(I.acc.filter(a => a.t === "tx" || a.t === "txc").map(a => a.paire))].map(p => { const t = I.acc.find(a => (a.t === "tx" || a.t === "txc") && a.paire === p), r = I.acc.find(a => (a.t === "rx" || a.t === "rxc") && a.paire === p); if (!t || !r) return ""; return `<line id="cabf-${p}" x1="${t.x + largeur("tx")}" y1="${t.y + 20}" x2="${r.x}" y2="${r.y + 20}" stroke-width="2"/>`; }).join("");
    sv.innerHTML = `<defs><pattern id="cabgr" width="13" height="13" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r=".9" fill="#2a2a2a"/></pattern></defs><rect width="${W}" height="${H}" fill="url(#cabgr)"/>` +
      (M && M.portail ? M.portail(api()) : F.deux ? dessinPortail2() : dessinPortail()) + dessinCarte() + faisceaux + I.acc.filter(a => !ACC[a.t].enfiche).map(dessinAcc).join("") + `<defs><pattern id="cabvj" width="10" height="10" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="10" height="10" fill="#2fbf71"/><rect width="5" height="10" fill="#f2d000"/></pattern></defs><g id="cabfils" class="${S.estompe ? "estompe" : ""}" fill="none" stroke-width="3" stroke-linecap="round">${fils}</g><g id="cabhits">${hits()}</g><g id="cabsel"></g><g id="cabmm"></g>`;
    maj(); panneau();
  }
  /* afficheur : état des commandes / sécurités (§ 9.2), mode TEST, codes */
  function affichage() {
    if (!S.secteur || S.hs) return { off: true };
    if (S.pannes.fmot && F.fmot.code) return { code: F.fmot.code }; if (S.pannes.sec && F.alim.code) return { code: F.alim.code }; if (S.pannes.mot) return { code: "Mot" }; if (S.pannes.enc) return { code: "EnE1" };
    if (!S.f3 && !F.deux && par("60") !== "00") return { code: "FE" };
    if (S.prot) return { code: "PrOt" };
    if (S.pannes.sb && !S.test) return { code: "StoP", cli: true };
    if (S.prog) { const P = S.prog, x = P.liste[P.i], L = SIM.valeursRoger(x), v = P.edit !== null ? P.edit : (L ? (pval(x.code) || "--") : "--"); const g = /^[0-9A-Za-z]{2}$/.test(x.code) ? x.code : x.code.slice(0, 2);
      if (P.flash > 0) { P.flash--; return { test: [g, P.flash % 2 ? v : ""] }; }
      return { test: [g, P.edit !== null && Math.floor(S.t / 4) % 2 ? "" : v] }; }
    const L = S.lu || {}, c = S.cmd || {};
    if (F.deux) { /* B70/2ML : fiche, onglet Écran */
      const cosM = !F.isel || par("60") !== "00", d2 = { FT1: par("50") === "00" && par("51") === "00", FT2: par("53") === "00" && par("54") === "00", COS: par("73") === "00", COS2: !K.cos2 || par("74") === "00" };
      if (S.test) { const g = c.AP ? "AP" : c.CH ? "CH" : c.PP ? "PP" : c.PED ? "PE" : c.ORO ? "Or" : ""; const al = !L.st17 ? nB("st") : (cosM && L.c1 === false && !d2.COS) ? nB("cos1") : (L.c2 === false && !d2.COS2) ? nB("cos2") : (!L.ft1 && !d2.FT1) ? nB("ft1") : (!L.ft2 && !d2.FT2) ? nB("ft2") : "00"; return { test: [g, al] }; }
      const mq = S.R && motManque(S.R); if (mq) return { code: mq };
      const on2 = (ok, k) => d2[k] ? "cli" : ok ? "on" : "";
      return { seg: [{ a: c.AP ? "on" : "", g: c.PP ? "on" : "", d: c.CH ? "on" : "", dp: S.f3 ? "on" : "" }, { a: c.PED ? "on" : "", d: (!F.isel || !cosM) && c.ORO ? "on" : "" },
        { a: on2(L.ft1, "FT1"), g: cosM ? on2(L.c1 !== false, "COS") : "", d: K.cos2 ? on2(L.c2 !== false, "COS2") : "" }, { a: on2(L.ft2, "FT2"), dp: L.st17 ? "on" : "" }] };
    }
    const desact = { FT1: par("50") === "00" && par("51") === "00", FT2: par("53") === "00" && par("54") === "00", COS1: par("73") === "00", COS2: par("74") === "00" };
    if (S.test) {
      const g = c.AP ? "AP" : c.CH ? "CH" : c.PP ? "PP" : c.PED ? "PE" : c.ORO ? "Or" : "";
      const al = !L.sb ? "Sb" : !L.st17 ? nB("st") : (L.c1 === false && !desact.COS1) ? nB("cos1") : (L.c2 === false && !desact.COS2) ? nB("cos2") : (!L.ft1 && !desact.FT1) ? nB("ft1") : (!L.ft2 && !desact.FT2) ? nB("ft2") : S.pos >= 100 ? "FA" : S.pos <= 0 ? "FC" : "00";
      return { test: [g, al] };
    }
    const cl = k => desact[k] ? "cli" : "";
    const on = (ok, k) => desact[k] ? "cli" : ok ? "on" : "";
    return { seg: [
      { a: c.AP ? "on" : "", g: c.PP ? "on" : "", d: c.CH ? "on" : "", dp: "on" },
      { a: c.PED ? "on" : "", d: c.ORO ? "on" : "" },
      { a: on(L.ft1, "FT1"), g: on(L.c1 !== false, "COS1"), d: on(L.c2 !== false, "COS2"), dp: L.sb ? "on" : "" },
      { a: on(L.ft2, "FT2"), e: S.pos >= 100 ? "" : "on", c: S.pos <= 0 ? "" : "on", dp: L.st17 ? "on" : "" }] };
  }
  function dessinAff() {
    if (M) return M.voyants(api());
    const A = affichage(), y0 = DY + (F.affY || 50), dx = F.affDX || 0; let h = "";
    const SEG = { a: [1, 0, 10, 0], b: [11, 1, 11, 9], c: [11, 11, 11, 19], d: [1, 20, 10, 20], e: [0, 11, 0, 19], f: [0, 1, 0, 9], g: [1, 10, 10, 10] };
    const X = [246, 263, 294, 311].map(x => x + dx);
    X.forEach(x => h += `<rect x="${x - 3}" y="${y0 - 4}" width="17" height="30" rx="2" fill="#1d1f1e"/>`);
    if (A.code || A.test) {
      const txt = A.code ? [A.code] : [A.test[0], A.test[1]];
      if (A.code) h += `<text x="${285 + dx}" y="${y0 + 19}" text-anchor="middle" class="cabcode${A.cli ? " cli2" : ""}">${esc(A.code)}</text>`;
      else { h += `<text x="${262 + dx}" y="${y0 + 19}" text-anchor="middle" class="cabcode">${esc(txt[0])}</text><text x="${310 + dx}" y="${y0 + 19}" text-anchor="middle" class="cabcode">${esc(txt[1])}</text>`; }
      return h;
    }
    X.forEach((x, i) => { const d = (A.seg || [])[i] || {}; for (const s in SEG) { const [a, b, c, e] = SEG[s]; const v = d[s]; h += `<line x1="${x + a}" y1="${y0 + b}" x2="${x + c}" y2="${y0 + e}" stroke="${v === "on" ? "#ff3b30" : "#3b2626"}" stroke-width="2.6" stroke-linecap="round" class="${v === "cli" ? "cli" : ""}"/>`; } h += `<circle cx="${x + 14}" cy="${y0 + 20}" r="2" fill="${d.dp === "on" ? "#ff3b30" : "#3b2626"}"/>`; });
    return h;
  }
  function maj() {
    const sv = $("#cabsvg"); if (!sv || !S.R) return;
    const R = S.R, aff = $("#cabaff"); if (S.mm && S.mm.a && S.mm.b) S.mm.r = mesure(S.mm.a, S.mm.b); /* mesure suivie en direct */ if (aff) aff.innerHTML = dessinAff();
    I.fils.forEach(w => { const p = document.getElementById("cw-" + w.id); if (p) p.classList.toggle("flux", S.secteur && R.flux.has(w.id)); });
    if (M && M.majPortail) M.majPortail(api()); else if (F.deux) { const p = S.v || { 1: 0, 2: 0 }, n = nbMot(); [1, 2].forEach(k => { const w = Math.max(6, 145 * Math.cos(p[k] / 100 * Math.PI / 2.2)), r = document.getElementById("cabv" + k), t = document.getElementById("cabv" + k + "t"); if (r) { r.setAttribute("width", w.toFixed(1)); if (k === 2) r.setAttribute("x", (340 - w).toFixed(1)); r.setAttribute("opacity", k === 2 && n === 1 ? .25 : 1); } if (t) t.textContent = k === 2 && n === 1 ? "pas de vantail 2 (70 01)" : "vantail " + k + " · " + p[k] + " %"; }); } else { const v = $("#cabvantail"); if (v) v.setAttribute("transform", `translate(${S.pos * 1.6} 0)`); }
    const e = $("#cabetat"); if (e) e.textContent = !S.secteur ? "hors tension" : S.hs ? "carte détruite" : S.pre ? "préclignotement" : S.dir > 0 ? "ouverture " + S.pos + " %" : S.dir < 0 ? "fermeture " + S.pos + " %" : S.att ? "arrêt temporaire" : S.pos >= 100 ? "ouvert" : S.pos <= 0 ? "fermé" : "arrêté à " + S.pos + " %";
    [0, 1, 2].forEach(i => { const m = document.getElementById("cabmot" + i); if (m) m.setAttribute("class", S.dir ? "flux" : ""); });
    I.acc.forEach(a => {
      const l = document.getElementById("cabl-" + a.id);
      if (l) { let on = !!R.alim[a.id]; if (a.t === "lam" && on && par("78") === "00") on = Math.floor(S.t / 5) % 2 === 0; /* le clignotant fait lui-même l'intermittence */ l.setAttribute("fill", on ? (a.t === "voy" ? "#4cc27a" : "#f0b429") : "#333"); }
      const t = document.getElementById("cabe-" + a.id), es = S.etat[a.id] || {};
      if (t) t.textContent = a.t === "stop" ? (es.on ? "enfoncé" : "") : a.t === "oro" ? (es.on ? "active" : "") : a.t === "cle" ? (es.g ? "◀ gauche" : es.d ? "droite ▶" : "") : a.t === "digi" ? (es.on ? "code OK" : R.alim[a.id] ? "allumé" : "") : es.on ? "actionné" : "";
      if (a.t === "mbl") { const t = document.getElementById("cabe-" + a.id), m = R.moteurs[a.id]; if (t) t.textContent = !m || !S.secteur ? "" : !m.ok ? m.err : "M" + m.sortie + (S.mv && S.mv[m.sortie] ? (S.dir * m.sens > 0 ? " ▶ ouvre" : " ◀ ferme") : ""); }
      if (a.t === "mot") { const t = document.getElementById("cabe-" + a.id), m = R.moteurs[a.id]; if (t) t.textContent = !m ? "" : m.bloque ? "2 enroulements !" : m.sens > 0 ? "tourne ▶ ouvre" : m.sens < 0 ? "◀ ferme" : ""; }
      if (a.t === "tx" || a.t === "txc") { const f = document.getElementById("cabf-" + a.paire); if (f) { const cut = (S.etat["p" + a.paire] || {}).coupe, on = R.alim[a.id]; f.setAttribute("stroke", !on ? "#444" : cut ? "#ff4d4d" : "#ff8a80"); f.setAttribute("stroke-dasharray", cut ? "3 3" : on ? "" : "2 5"); f.setAttribute("opacity", on ? 1 : .6); } }
    });
    const inf = $("#cabinfo"), h = infoHtml(); if (inf && inf._h !== h) { inf.innerHTML = h; inf._h = h; } /* ne pas recréer les boutons à chaque image */
  }
  function infoHtml() {
    if (S.mm) return mmHtml();
    if (S.mode === "cabler") {
      if (S.sel) return `<span class="k">Fil en cours :</span> depuis <b>${esc(nomB(S.sel))}</b>. Touchez la borne d'arrivée (ou glissez le doigt jusqu'à elle). <button class="mini" onclick="CAB.annuler()">Annuler</button>`;
      if (S.selFil) { const w = I.fils.find(x => x.id === S.selFil); return w ? `<b>Fil</b> ${esc(nomB(w.a))} → ${esc(nomB(w.b))}${w.usine ? " (pont d'usine)" : ""}. <button class="mini" onclick="CAB.supFil()">Supprimer le fil</button>${w.p ? ` <button class="mini" onclick="CAB.redresser()">Remettre en place</button>` : ""}<br><small>Glissez un fil pour l'écarter et dégager les touches ou l'écran.</small>` : ""; }
      if (S.selAcc) { const a = I.acc.find(x => x.id === S.selAcc); return a ? `<b>${esc(ACC[a.t].nom)}</b> : glissez pour déplacer. <button class="mini" onclick="CAB.supAcc()">Supprimer</button>` : ""; }
      const al = S.msg.find(m => m.alerte); if (al && (S.hs || !S.f3)) return `<b>⚠ ${esc(al.t)}</b>${al.src ? `<br><small>Source : ${esc(al.src)}</small>` : ""}`;
      if (S.msgU) return S.msgU;
      return "Pour poser un fil : touchez une borne puis l'autre, ou appuyez sur une borne et glissez jusqu'à l'autre avant de lâcher. Touchez un fil pour le supprimer, glissez-le pour l'écarter.";
    }
    const m = S.msg.slice(0, 3).map((x, i) => `<div class="${i ? "cabold" : ""}">${esc(x.t)}${x.src ? `<br><small>Source : ${esc(x.src)}</small>` : ""}</div>`).join("");
    return S.msgU ? S.msgU + (m ? "<hr>" + m : "") : (m || (S.secteur ? "Agissez sur les accessoires (touchez-les) ou avec les boutons ci-dessous." : "Mettez le secteur pour tester l'installation."));
  }
  const nomB = k => { if (k.startsWith("b:")) { const b = BORNES[k]; return "borne " + b.n + " (" + b.lab + ")"; } const [id, n] = k.split(":"); const a = I.acc.find(x => x.id === id); return a ? ACC[a.t].nom + (a.paire ? " " + a.paire : "") + " " + (ACC[a.t].b.find(b => b[0] === n) || [, n])[1] : k; };

  /* ---------- multimètre ---------- */
  function mesure(a, b) {
    const R = S.R; if (!R) return "";
    if (S.mmMode === "R") {
      if (S.secteur) return "Coupez le secteur avant de mesurer en ohms.";
      if (R.U.f(a) === R.U.f(b)) return "0 Ω : continuité (bip)."; const r = resistance(R, a, b); return isFinite(r) ? Math.round(r) + " Ω" : "OL : circuit ouvert.";
    }
    const ta = R.T(a), tb = R.T(b);
    const pot = t => aDC(t) ? 24 : t.has("+12") ? 12 : t.has("0V") ? 0 : t.has("L") ? "L" : t.has("N") ? "N" : t.has("A24") ? "A" : t.has("A24b") ? "B" : null;
    const pa = pot(ta), pb = pot(tb);
    if (!S.secteur) return "0 V : secteur coupé.";
    if (R.U.f(a) !== R.U.f(b) && ((ta.has("A24") && tb.has("A24b")) || (ta.has("A24b") && tb.has("A24")))) return "24 V~ (alternatif)."; /* le 0 du 24 V~ peut être le commun de la carte */
    if ((pa === "A" && pb === "B") || (pa === "B" && pb === "A")) return "24 V~ (alternatif).";
    if (pa === "A" || pa === "B" || pb === "A" || pb === "B") return pa === pb ? "0 V~ : même conducteur." : "Mesure entre le 24 V~ et un autre circuit : non significative.";
    if ((pa === "L" && pb === "N") || (pa === "N" && pb === "L")) return "230 V~ (alternatif).";
    if (pa === "L" || pa === "N" || pb === "L" || pb === "N") { if (pa === pb) return "0 V~ : même conducteur."; if (pa === null || pb === null) return "Une pointe au 230 V~, l'autre sur un conducteur en l'air : tension non déterminée. Prudence."; return "Mesure entre le 230 V~ et la très basse tension de la carte : non significative (circuits séparés)."; }
    if (R.U.f(a) === R.U.f(b)) return "0 V : les deux pointes sont sur le même conducteur.";
    if (pa !== null && pb !== null) return Math.abs(pa - pb) + " V" + (pa !== pb ? " continu" : "") + ".";
    const ent = [a, b].find(k => ENTREES[k] && R.T(k).size === 0 || (ENTREES[k] && !pot(R.T(k)) && pot(R.T(k)) !== 0));
    if (ent) return "Entrée " + ENTREES[ent] + " en l'air : la carte impose une tension sur l'entrée, la notice ne la donne pas.";
    return "Rien de mesurable : au moins une pointe est sur un conducteur en l'air.";
  }
  function mmHtml() { const m = S.mm; return `<b>Multimètre ${S.mmMode === "V" ? "(tension)" : "(résistance)"}</b> · ${m.a ? "pointe rouge : " + esc(nomB(m.a)) : "touchez la 1re borne"}${m.b ? " · pointe noire : " + esc(nomB(m.b)) : m.a ? " · touchez la 2e borne" : ""}${m.r ? `<div class="cabmm">${esc(m.r)}</div>` : ""} <button class="mini" onclick="CAB.mmMode()">${S.mmMode === "V" ? "Passer en Ω" : "Passer en V"}</button> <button class="mini" onclick="CAB.mm()">Ranger</button>`; }
  function dessinSondes() {
    const g = $("#cabmm"); if (!g) return; let h = "";
    if (S.mm) [["a", "#e5484d"], ["b", "#222"]].forEach(([k, c]) => { const p = S.mm[k] && posB(S.mm[k]); if (p) h += `<circle cx="${p[0]}" cy="${p[1]}" r="8" fill="none" stroke="${c}" stroke-width="3"/><circle cx="${p[0]}" cy="${p[1]}" r="3" fill="${c}"/>`; });
    if (S.sel) { const p = posB(S.sel); if (p) h += `<circle cx="${p[0]}" cy="${p[1]}" r="9" fill="none" stroke="#f0b429" stroke-width="2.5"/>`; }
    g.innerHTML = h;
  }

  /* ---------- panneau sous le dessin ---------- */
  function panneau() {
    const el = $("#cabpan"); if (!el) return;
    if (S && I) { I.acc.forEach(a => { const e = S.etat[a.id]; if (e && ["pp", "bnf", "b8k"].includes(a.t)) e.on = false; if (e && a.t === "cle") e.g = e.d = false; }); S.radio = {}; } /* un appui en cours ne reste pas coincé */
    const radio = !M && I.acc.some(a => a.t === "radio");
    if (S.mode === "cabler") {
      el.innerHTML = `<div class="cabcoul">${COULEURS.map(([c, n]) => `<button class="cabc${S.couleur === c ? " on" : ""}" style="--c:${c === "vj" ? "repeating-linear-gradient(45deg,#2fbf71 0 6px,#f2d000 6px 12px)" : c}" aria-label="Fil ${n}" title="${n}" onclick="CAB.couleur('${c}')"></button>`).join("")}</div>
        <h4 class="cabh">Bibliothèque d'accessoires</h4><div class="cablib">${BIBLIO.map(t => `<button class="cabchip" onclick="CAB.poser('${t}')"><span>${ACC[t].ic}</span>${esc(ACC[t].nom)}<small>${esc(ACC[t].sous)}</small></button>`).join("")}</div>
        <div class="sga"><button class="mini" onclick="CAB.missions()">🎯 Missions</button><button class="mini" onclick="CAB.parametres()">⚙ Paramètres</button></div>`;
    } else {
      const acts = [];
      I.acc.forEach(a => { const n = ACC[a.t].nom + (a.paire ? " " + a.paire : "");
        if (a.t === "pp") acts.push(`<button class="cabact" data-hold="${a.id}">⏺ ${esc(n)}<small>maintenir</small></button>`);
        if (a.t === "bnf" || a.t === "b8k") acts.push(`<button class="cabact" data-hold="${a.id}">▭ Écraser le bord<small>maintenir</small></button>`);
        if (a.t === "cle") acts.push(`<button class="cabact" data-hold="${a.id}" data-k="g">🔑 Clé à gauche<small>maintenir</small></button><button class="cabact" data-hold="${a.id}" data-k="d">🔑 Clé à droite<small>maintenir</small></button>`);
        if (a.t === "digi") acts.push(`<button class="cabact" onclick="CAB.code('${a.id}')">⌨ Taper le code</button>`);
        if (a.t === "stop") acts.push(`<button class="cabact" onclick="CAB.bascule('${a.id}')">⛔ ${(S.etat[a.id] || {}).on ? "Déverrouiller STOP" : "Appuyer STOP"}</button>`);
        if (a.t === "oro") acts.push(`<button class="cabact" onclick="CAB.bascule('${a.id}')">⏰ Horloge ${(S.etat[a.id] || {}).on ? "OFF" : "ON"}</button>`);
        if (a.t === "rx" || a.t === "rxc") acts.push(`<button class="cabact" onclick="CAB.faisceau(${a.paire})">✋ ${(S.etat["p" + a.paire] || {}).coupe ? "Dégager" : "Couper"} cellules ${a.paire}</button>`);
      });
      if (M && M.radio) acts.push(M.radio.map((l, i) => `<button class="cabact" data-radio="PR${i + 1}">📡 Télécommande touche ${i + 1}<small>${esc(l)}</small></button>`).join(""));
      if (radio) acts.push(`<button class="cabact" data-radio="PR1">📡 Télécommande touche 1<small>${esc(pdesc("76").slice(0, 26))}</small></button><button class="cabact" data-radio="PR2">📡 Touche 2<small>${esc(pdesc("77").slice(0, 26))}</small></button>`);
      el.innerHTML = `<div class="cabacts">${acts.join("") || `<p class="note">Aucun accessoire actionnable : posez-en en mode Câbler.</p>`}</div>
        <div class="sga"><button class="mini" onclick="CAB.mm()">🧪 Multimètre</button><button class="mini" onclick="CAB.parametres()">⚙ Paramètres</button><button class="mini" onclick="CAB.missions()">🎯 Missions</button></div>
        ${radio ? `<p class="hotn">Télécommande supposée déjà mémorisée dans le récepteur (l'apprentissage radio n'est pas simulé).</p>` : ""}`;
      el.querySelectorAll("[data-hold]").forEach(b => { const dn = e => { e.preventDefault(); const s = S.etat[b.dataset.hold] = S.etat[b.dataset.hold] || {}; if (b.dataset.k) s[b.dataset.k] = true; else s.on = true; b.classList.add("on"); }, up = () => { const s = S.etat[b.dataset.hold] || {}; if (b.dataset.k) s[b.dataset.k] = false; else s.on = false; b.classList.remove("on"); }; b.onpointerdown = dn; b.onpointerup = b.onpointerleave = b.onpointercancel = up; });
      el.querySelectorAll("[data-radio]").forEach(b => { b.onpointerdown = e => { e.preventDefault(); S.radio[b.dataset.radio] = true; b.classList.add("on"); }; b.onpointerup = b.onpointerleave = b.onpointercancel = () => { S.radio[b.dataset.radio] = false; b.classList.remove("on"); }; });
    }
  }

  /* ---------- interactions ---------- */
  let tirFil = null, tir = null, drag = null, Z = { x: 0, y: 0, w: W, h: H }, doigts = new Map(), pince = null, glis = null, rep = 0;
  function appliquerZ() { const sv = $("#cabsvg"); if (sv) sv.setAttribute("viewBox", `${Z.x} ${Z.y} ${Z.w} ${Z.h}`); const zo = $(".cabzone"); if (zo) zo.classList.toggle("zoome", Z.w < W - 1); /* vue entière : glisser sur le fond fait défiler la page */ const z = $("#cabzl"); if (z) z.textContent = Math.round(W / Z.w * 100) + " %"; }
  function borner() { Z.w = Math.max(W / 5, Math.min(W, Z.w)); Z.h = Z.w * H / W; Z.x = Math.max(0, Math.min(W - Z.w, Z.x)); Z.y = Math.max(0, Math.min(H - Z.h, Z.y)); }
  function zoomer(f, cx, cy) { if (cx === undefined) { cx = Z.x + Z.w / 2; cy = Z.y + Z.h / 2; } const nw = Math.max(W / 5, Math.min(W, Z.w / f)), k = nw / Z.w; Z.x = cx - (cx - Z.x) * k; Z.y = cy - (cy - Z.y) * k; Z.w = nw; borner(); appliquerZ(); }
  /* pendant qu'on tire un fil, la page défile toute seule quand le doigt approche du haut ou du bas de l'écran */
  let tDef = 0;
  function defilerBord() {
    clearInterval(tDef);
    tDef = setInterval(() => {
      if (!tir) { clearInterval(tDef); return; }
      if (!tir.bouge || tir.dy == null) return; 
      const w = document.querySelector("#cabwrap.cabplein"), h = innerHeight, y = tir.dy, v = y > h - 70 ? Math.min(24, (y - (h - 70)) / 2 + 6) : y < 70 ? -Math.min(24, (70 - y) / 2 + 6) : 0;
      if (!v) return;
      if (w) w.scrollTop += v; else window.scrollBy(0, v);
      const sv = $("#cabsvg"), g = $("#cabsel"), p0 = posB(tir.k); if (!sv || !g || !p0) return;
      const r = sv.getBoundingClientRect(), x = Z.x + (tir.dx - r.left) * Z.w / r.width, yy = Z.y + (tir.dy - r.top) * Z.h / r.height;
      g.innerHTML = `<path d="M${p0[0]} ${p0[1]} L${x} ${yy}" stroke="${TRAIT(S.couleur)}" stroke-width="3" stroke-dasharray="5 4" fill="none" stroke-linecap="round"${FONCE(S.couleur) ? ' class="fonce"' : ""}/><circle cx="${x}" cy="${yy}" r="6" fill="none" stroke="${TRAIT(S.couleur)}" stroke-width="2"/>`;
    }, 30);
  }
  function brancherSvg() {
    const sv = $("#cabsvg");
    const pt = e => { const r = sv.getBoundingClientRect(); return [Z.x + (e.clientX - r.left) * Z.w / r.width, Z.y + (e.clientY - r.top) * Z.h / r.height]; };
    sv.addEventListener("pointerdown", e => { doigts.set(e.pointerId, [e.clientX, e.clientY]); if (doigts.size === 2) { drag = null; glis = null; const [a, b] = [...doigts.values()]; pince = { d: Math.hypot(a[0] - b[0], a[1] - b[1]), w: Z.w }; } }, true);
    sv.addEventListener("pointermove", e => {
      if (!doigts.has(e.pointerId)) return; doigts.set(e.pointerId, [e.clientX, e.clientY]);
      if (pince && doigts.size >= 2) { const [a, b] = [...doigts.values()], d = Math.hypot(a[0] - b[0], a[1] - b[1]); if (d > 10) { const r = sv.getBoundingClientRect(), mx = (a[0] + b[0]) / 2, my = (a[1] + b[1]) / 2; const cx = Z.x + (mx - r.left) * Z.w / r.width, cy = Z.y + (my - r.top) * Z.h / r.height; zoomer(Z.w / (pince.w * pince.d / d), cx, cy); } return; }
      if (glis && Z.w >= W - 1) { /* vue entière : glisser sur le fond fait défiler la page */ const w = document.querySelector("#cabwrap.cabplein"), d = e.clientY - (glis.ly == null ? glis.cy : glis.ly); glis.ly = e.clientY; if (w) w.scrollTop -= d; else window.scrollBy(0, -d); if (Math.abs(e.clientY - glis.cy) > 6) glis.bouge = true; return; }
      if (glis) { const r = sv.getBoundingClientRect(); Z.x = glis.x - (e.clientX - glis.cx) * Z.w / r.width; Z.y = glis.y - (e.clientY - glis.cy) * Z.h / r.height; borner(); appliquerZ(); if (Math.abs(e.clientX - glis.cx) + Math.abs(e.clientY - glis.cy) > 6) glis.bouge = true; }
    }, true);
    const fin = e => { doigts.delete(e.pointerId); if (doigts.size < 2) pince = null; if (!doigts.size) { if (glis && !glis.bouge && (S.selFil || S.selAcc || S.sel)) { S.selFil = S.selAcc = S.sel = null; rendre(); } glis = null; } clearInterval(rep); };
    sv.addEventListener("pointerup", fin, true); sv.addEventListener("pointercancel", fin, true); sv.addEventListener("pointerleave", e => { if (e.pointerType === "mouse") fin(e); }, true);
    if (!window.__cabFin) { window.__cabFin = 1; addEventListener("pointerup", e => doigts.delete(e.pointerId), true); addEventListener("pointercancel", e => doigts.delete(e.pointerId), true); } /* doigt levé hors du schéma */
    sv.addEventListener("wheel", e => { e.preventDefault(); const [x, y] = pt(e); zoomer(e.deltaY < 0 ? 1.15 : 1 / 1.15, x, y); }, { passive: false });
    sv.onpointerdown = e => {
      if (doigts.size >= 2) return;
      const t = e.target, hit = t.closest("[data-b]"), acc = t.closest(".caba"), fil = t.closest(".cabw,.cabwh"), us = t.closest(".cabu"), k = t.closest(".cabk");
      if (hit) {
        e.preventDefault(); const k = hit.dataset.b;
        /* câbler en glissant : appui sur une borne, on glisse jusqu'à l'autre, on lâche (le toucher simple marche toujours) */
        if (S.mode === "cabler" && !S.mm && !S.sel) { borne(k); tir = { k, cx: e.clientX, cy: e.clientY, bouge: false }; try { sv.setPointerCapture(e.pointerId); } catch (er) {} defilerBord(); return; }
        return borne(k);
      }
      const mm = t.closest(".cabm"); if (mm && M) { S.msgU = M.clic(api(), mm.dataset.m); maj(); return; } /* dip-switch et cavaliers dessinés */
      if (k) { const kk = k.dataset.k; touche(kk); clearInterval(rep); if (kk === "pl" || kk === "mo") { const t0 = Date.now(); rep = setInterval(() => { if (Date.now() - t0 > 500) touche(kk); }, 140); } return; } /* + / − maintenus : défilement rapide */
      if (us) return usine(us.dataset.u);
      if (fil && !S.mm) { const w = I.fils.find(x => x.id === fil.dataset.w); if (w) { tirFil = { w, cx: e.clientX, cy: e.clientY, bouge: false, p0: w.p }; try { sv.setPointerCapture(e.pointerId); } catch (er) {} } return; }
      if (acc) {
        const a = I.acc.find(x => x.id === acc.dataset.a); if (!a) return;
        if (S.mode === "cabler") { const [x, y] = pt(e); drag = { a, dx: x - a.x, dy: y - a.y, bouge: false }; try { sv.setPointerCapture(e.pointerId); } catch (er) {} return; }
        actionAcc(a, true); const up = () => { actionAcc(a, false); removeEventListener("pointerup", up); }; addEventListener("pointerup", up); return;
      }
      glis = { cx: e.clientX, cy: e.clientY, x: Z.x, y: Z.y, bouge: false }; /* fond : faire glisser la vue zoomée */
    };
    sv.onpointermove = e => {
      if (tirFil) { if (pince) { tirFil.w.p = tirFil.p0; tirFil = null; rendre(); return; } if (Math.abs(e.clientX - tirFil.cx) + Math.abs(e.clientY - tirFil.cy) > 8) tirFil.bouge = true; if (tirFil.bouge) { const [x, y] = pt(e), w = tirFil.w; w.p = [Math.round(Math.max(0, Math.min(W, x))), Math.round(Math.max(0, Math.min(H, y)))]; const d = chemin(w.a, w.b, w.p); ["cw-", "cwh-"].forEach(k => { const p = document.getElementById(k + w.id); if (p) p.setAttribute("d", d); }); } return; }
      if (tir) { tir.dx = e.clientX; tir.dy = e.clientY; }
      if (tir) { if (pince) { tir = null; S.sel = null; const gs = $("#cabsel"); if (gs) gs.innerHTML = ""; dessinSondes(); return; } if (Math.abs(e.clientX - tir.cx) + Math.abs(e.clientY - tir.cy) > 8) tir.bouge = true; if (tir.bouge) { const p0 = posB(tir.k), [x, y] = pt(e), g = $("#cabsel"); if (p0 && g) { g.innerHTML = `<path d="M${p0[0]} ${p0[1]} L${x} ${y}" stroke="${TRAIT(S.couleur)}" stroke-width="3" stroke-dasharray="5 4" fill="none" stroke-linecap="round"${FONCE(S.couleur) ? ' class="fonce"' : ""}/><circle cx="${x}" cy="${y}" r="6" fill="none" stroke="${TRAIT(S.couleur)}" stroke-width="2"/>`; } } return; }
      if (!drag || pince) return; const [x, y] = pt(e); const nx = Math.max(0, Math.min(W - largeur(drag.a.t), x - drag.dx)), ny = Math.max(70, Math.min(DY - 58, y - drag.dy)); if (Math.abs(nx - drag.a.x) + Math.abs(ny - drag.a.y) > 2) drag.bouge = true; drag.a.x = Math.round(nx); drag.a.y = Math.round(ny); const g = sv.querySelector(`.caba[data-a="${drag.a.id}"]`); if (g) g.setAttribute("transform", `translate(${drag.a.x} ${drag.a.y})`); I.fils.forEach(w => { if (w.a.startsWith(drag.a.id + ":") || w.b.startsWith(drag.a.id + ":")) { const d = chemin(w.a, w.b, w.p); ["cw-", "cwh-"].forEach(k => { const p = document.getElementById(k + w.id); if (p) p.setAttribute("d", d); }); } }); sv.querySelectorAll(`#cabhits [data-b^="${drag.a.id}:"]`).forEach(c => { const q = posB(c.dataset.b); if (q) { c.setAttribute("cx", q[0]); c.setAttribute("cy", q[1]); } }); };
    sv.onpointerup = e => {
      if (tirFil) { const f = tirFil; tirFil = null; if (f.bouge) { sauver(); rendre(); } else if (S.mode === "cabler") { S.selFil = f.w.id; S.selAcc = null; S.sel = null; rendre(); } else { S.msgU = "Fil : " + esc(nomB(f.w.a)) + " → " + esc(nomB(f.w.b)) + ". Glissez-le pour l'écarter."; maj(); } return; }
      if (tir) { const t = tir; tir = null; const gs = $("#cabsel"); if (gs) gs.innerHTML = ""; if (t.bouge) { const el = document.elementFromPoint(t.dx != null ? t.dx : e.clientX, t.dy != null ? t.dy : e.clientY), /* dernière position du doigt */ cible = el && el.closest && el.closest("[data-b]"); if (cible && cible.dataset.b !== t.k) borne(cible.dataset.b); else { S.sel = null; S.msgU = "Fil non posé : lâchez le doigt sur une borne."; } dessinSondes(); maj(); } return; } /* sans glisser : la borne reste choisie (mode toucher) */
      if (!drag) return; const a = drag.a, b = drag.bouge; drag = null; if (b) { sauver(); rendre(); } else { S.selAcc = S.selAcc === a.id ? null : a.id; S.selFil = null; rendre(); } };
  }
  function actionAcc(a, bas) {
    const e = S.etat[a.id] = S.etat[a.id] || {};
    if (["pp", "bnf", "b8k"].includes(a.t)) e.on = bas;
    else if (bas && (a.t === "stop" || a.t === "oro")) { e.on = !e.on; panneau(); }
    else if (bas && a.t === "digi") codeDigi(a.id);
    else if (bas && ["tx", "rx", "txc", "rxc"].includes(a.t)) faisceau(a.paire);
    else if (a.t === "cle") e.g = bas;
  }
  function codeDigi(id) { const e = S.etat[id] = S.etat[id] || {}; if (!e.alim) { S.msgU = "Le digicode reste éteint : il n'est pas alimenté."; return; } e.on = true; e.imp = 10; S.msgU = ""; }
  function faisceau(p) { const k = "p" + p; S.etat[k] = S.etat[k] || {}; S.etat[k].coupe = !S.etat[k].coupe; panneau(); }
  function borne(k) {
    if (S.mm) { const m = S.mm; if (!m.a || m.b) { S.mm = { a: k }; } else { m.b = k; m.r = mesure(m.a, m.b); } dessinSondes(); maj(); return; }
    if (S.mode !== "cabler") { S.msgU = "Pour câbler, passez en mode « Câbler »." + (S.secteur ? " Coupez le secteur avant de toucher au câblage." : ""); maj(); return; }
    if (!S.sel) { S.sel = k; S.selFil = S.selAcc = null; dessinSondes(); maj(); return; }
    if (S.sel === k) { S.sel = null; dessinSondes(); maj(); return; }
    const a = S.sel; S.sel = null;
    if (I.fils.some(w => (w.a === a && w.b === k) || (w.a === k && w.b === a))) { S.msgU = "Ce fil existe déjà."; rendre(); return; }
    const n = [a, k].map(x => I.fils.filter(w => w.a === x || w.b === x).length);
    if (n.some(x => x >= 3)) { S.msgU = "Trois fils maximum par borne."; rendre(); return; }
    I.fils.push({ id: "w" + (I.n++), a, b: k, c: S.couleur }); S.msgU = ""; sauver(); rendre();
  }
  /* touches de la carte (notice § 7) : UP / DOWN affichent les paramètres, + / − changent la valeur qui clignote,
     enregistrement après quelques secondes ou en passant à un autre paramètre (l'écran clignote vite) ;
     modification seulement moteur à l'arrêt, consultation toujours possible. Ordre : index des paramètres de la notice. */
  let tEnr = 0;
  function enregistrerP() {
    clearTimeout(tEnr); const P = S.prog; if (!P || P.edit === null) return;
    const x = P.liste[P.i]; I.params[x.code] = P.edit; P.edit = null; P.flash = 8; sauver(); panneau(); maj();
  }
  function touche(k) {
    if (M) { S.msgU = M.touche(api(), k); maj(); return; }
    if (!S.secteur || S.hs) { S.msgU = "Carte hors tension : l'afficheur et les touches ne répondent pas."; maj(); return; }
    if (k === "test" && S.prot) { S.protN = (S.protN || 0) + 1; if (S.protN >= 2) { S.protN = 0; if (S.R && S.R.def.ccMot) { S.msgU = "PrOt : le court-circuit est toujours là. Corrigez les fils du moteur (secteur coupé), puis deux appuis sur TEST."; } else { S.prot = 0; S.msgU = "PrOt effacé (deux appuis sur TEST)."; } } else S.msgU = "PrOt : appuyez encore une fois sur TEST pour effacer l'alarme."; maj(); return; }
    if (k === "test") { if (S.dir) { stopper("Touche TEST pendant le mouvement : ARRÊT."); return; } enregistrerP(); S.prog = null; S.test = !S.test; S.msgU = S.test ? "Mode TEST (§ 9.3) : à gauche la commande active, à droite la première sécurité en alarme (00 = aucune). Touchez TEST à nouveau pour en sortir." : ""; maj(); return; }
    if (k === "prog") { S.msgU = "PROG lance l'apprentissage de la course" + (F.deux ? " (maintenir 4 s : APP-, puis Auto)" : " (§ 10)") + " : non simulé dans l'atelier."; maj(); return; }
    if (k === "up" || k === "dn") {
      S.test = false;
      if (!S.prog) { const liste = SIM.ordreRoger(C); S.prog = { liste, i: 0, edit: null, flash: 0 }; }
      else { enregistrerP(); const n = S.prog.liste.length; S.prog.i = (S.prog.i + (k === "up" ? 1 : -1) + n) % n; }
      S.msgU = progInfo(); maj(); return;
    }
    if (!S.prog) { S.msgU = "Affichez d'abord un paramètre avec ▲ (UP) ou ▼ (DOWN)."; maj(); return; }
    if (S.dir || S.pre) { S.msgU = "Modification possible seulement moteur à l'arrêt (consultation toujours possible)."; maj(); return; }
    const x = S.prog.liste[S.prog.i], L = SIM.valeursRoger(x);
    if (!L) { S.msgU = "<b>" + esc(x.code) + "</b> ne se règle pas avec + / − : procédure propre ou lecture seule (voir la fiche)."; maj(); return; }
    const cur = S.prog.edit !== null ? S.prog.edit : pval(x.code);
    let i = L.findIndex(o => o.v === cur); if (i < 0) i = k === "pl" ? -1 : L.length;
    i = Math.max(0, Math.min(L.length - 1, i + (k === "pl" ? 1 : -1)));
    S.prog.edit = L[i].v; clearTimeout(tEnr); tEnr = setTimeout(enregistrerP, 3000);
    S.msgU = progInfo(); maj();
  }
  function progInfo() {
    const P = S.prog; if (!P) return ""; const x = P.liste[P.i], L = SIM.valeursRoger(x), v = P.edit !== null ? P.edit : (L ? pval(x.code) : "");
    const o = L && L.find(o => o.v === v);
    return `<b>${esc(x.code)} · ${esc(x.titre)}</b><br>${P.edit !== null ? "Valeur en cours de modification (elle clignote, enregistrée dans 3 s) : " : "Valeur : "}<b>${esc(v || "—")}</b>${o && o.d ? " — " + esc(o.d) : ""}${!L ? "<br><i>Réglage à procédure propre ou en lecture : voir la fiche.</i>" : ""}<br><button class="mini" onclick="CAB.etatAff()">Revenir à l'état des entrées</button> <small>(la notice ne dit pas comment l'afficheur y revient)</small>`;
  }
  function usine(id) {
    if (M) { const h = M.usineInfo(api(), id); if (h != null) { S.msgU = h; S.mm = null; maj(); } return; }
    const u = USINE[id]; if (!u) return;
    const ent = C.bornier.groupes.flatMap(g => g.bornes);
    const map = { mot: "Moteur", enc: "Encodeur", fc: "Fins de course", sb: "Déverrouillage", sec: F.alim.carte, batt: "Batteries", wifi: "B74/BCONNECT", rec: "Récepteur" };
    const f = ent.find(b => b.label === map[id]);
    let h = `<b>${esc(u.nom)}</b> · câblé en usine.${f ? "<br>" + esc(f.desc) : ""}`;
    if (id === "facc") h += `<br>${S.f3 ? "" : "<b>" + F.facc.court + " grillé.</b> "}<button class="mini" onclick="CAB.f3()">${S.f3 ? "Griller " + F.facc.court : "Remplacer " + F.facc.court}</button>`;
    else if (id === "fmot" && !F.fmot.code) h += `<br><small>La notice ne donne pas de code d'erreur pour ce fusible : panne non simulée.</small>`;
    else if (u.panne) h += `<br><button class="mini" onclick="CAB.panne('${id}')">${S.pannes[id] ? "Réparer" : esc(u.panne)}</button>${u.code ? ` <small>→ code ${esc(u.code)}</small>` : ""}`;
    if (id === "rec") h += `<br>${I.acc.some(a => a.t === "radio") ? `<button class="mini" onclick="CAB.radio()">Retirer le récepteur</button>` : `<button class="mini" onclick="CAB.radio()">Enficher le récepteur</button>`}`;
    S.msgU = h; S.mm = null; maj();
  }

  /* ---------- pages ---------- */
  window.viewCab = function (sub) {
    if (sub && CARTES[sub] && cabDispo(sub)) return atelier(sub);
    setHead("Atelier de câblage", true);
    app.innerHTML = `<p class="note"><b>Formation.</b> Choisissez une carte, posez les accessoires, câblez-les vous-même puis testez l'installation sous tension : on voit le courant passer dans les fils et la carte réagir comme dans la notice.</p><div class="list">` +
      Object.keys(CARTES).filter(cabDispo).map(id => { const b = board(id); return `<button class="row" onclick="go('#/cab/${id}')"><span class="badge" style="--c:${esc(b.m.couleur)}">${esc(b.m.nom)}</span><b>${esc(b.c.nom)}</b><small>Borniers, accessoires, missions · ${esc(CFG[id].fig.replace(/ de la notice.*/, ""))}</small></button>`; }).join("") + `</div><p class="hotn">D'autres cartes viendront ensuite.</p>`;
  };
  let minuterie = 0;
  function atelier(id) {
    const b = board(id); C = b.c; ITEMS = {}; charger(id); C.parametres.groupes.forEach(g => g.items.forEach(x => ITEMS[x.code] = x));
    cleI = "cab-" + id; I = propre(st.get(cleI, null)) || neuf(); S = simNeuve(); hist = []; futur = []; dernier = JSON.stringify(I);
    setHead("Atelier · " + C.nom, true);
    Z = { x: 0, y: 0, w: W, h: H }; doigts.clear(); pince = glis = tir = tirFil = drag = null;
    app.innerHTML = `<div id="cabwrap"><div class="cabbar"><div class="cabseg" role="tablist"><button id="cabm1" class="on" onclick="CAB.mode('cabler')">✎ Câbler</button><button id="cabm2" onclick="CAB.mode('tester')">▶ Tester</button></div><label class="cabsw">Secteur <input type="checkbox" id="cabsect" onchange="CAB.secteur(this.checked)"><i></i></label></div>
      <div class="cabtools"><button id="cabund" onclick="CAB.annulerTout()" disabled>↶ Annuler</button><button id="cabred" onclick="CAB.retablir()" disabled>↷ Rétablir</button><button id="cabvid" onclick="CAB.vider()" aria-label="Tout retirer">🗑 Tout retirer</button><button id="cabest" onclick="CAB.estomper()" aria-label="Estomper les fils">◑ Fils</button></div>
      <div class="cabzone"><svg id="cabsvg" viewBox="0 0 ${W} ${H}" role="img" aria-label="Carte ${esc(C.nom)} et accessoires"></svg>
        <div class="cabzbt"><button onclick="CAB.zoom(1.4)" aria-label="Zoomer">＋</button><button onclick="CAB.zoom(1 / 1.4)" aria-label="Dézoomer">−</button><button onclick="CAB.zoomRaz()" aria-label="Vue entière" id="cabzl">100 %</button><button onclick="CAB.plein()" id="cabplb" aria-label="Plein écran">⛶</button></div></div>
      <div class="cabinfo" id="cabinfo" aria-live="polite"></div><div id="cabpan"></div><div id="cabsheet"></div></div>
      <p class="hotn">${M ? M.notes : `Simulateur de formation construit d'après la fiche (source : ${esc(C.source)}) : bornier, paramètres, afficheur${F.deux ? "" : " (§ 9.2)"}, mode TEST${F.deux ? "" : " (§ 9.3)"}, codes. Disposition des borniers : ${esc(F.fig)}. Accessoires génériques. Vitesse du portail indicative (environ 10 s pour la course). Non simulés : apprentissage de la course et des télécommandes, batteries, ${F.deux ? "" : "fonctionnement MASTER / SLAVE, "}veille low power, sortie SC en test des photocellules ou battery saving (A8 02 à 04, sortie laissée coupée), commandes radio avec confirmation (76 / 77 = 07 à 10). ${F.deux ? "" : "Refermeture après ouverture partielle (16) appliquée seulement quand A2 est actif. "}Les bornes COM (${F.coms.join(", ")}) sont traitées comme un 0 V commun.${F.notes ? " " + esc(F.notes) : ""}`}</p>`;
    rendre(); brancherSvg(); outils();
    clearInterval(minuterie); minuterie = setInterval(() => { if (location.hash !== "#/cab/" + id) { clearInterval(minuterie); clearTimeout(tEnr); document.body.classList.remove("cabnoscroll"); return; } tick(); }, 100);
  }
  const libre = t => { const w = largeur(t); for (let y = 76; y <= DY - 62; y += 62) for (let x = 6; x + w <= W - 4; x += 8) { if (!I.acc.some(a => !ACC[a.t].enfiche && x < a.x + largeur(a.t) + 6 && a.x < x + w + 6 && y < a.y + 60 && a.y < y + 60)) return [x, y]; } return [6 + Math.random() * 200, 80 + Math.random() * 100]; };
  window.CAB = {
    mode(m) { S.mode = m; S.sel = S.selFil = S.selAcc = null; S.mm = null; S.msgU = ""; $("#cabm1").classList.toggle("on", m === "cabler"); $("#cabm2").classList.toggle("on", m === "tester"); if (m === "tester" && !S.secteur) { S.msgU = "Mettez le secteur (en haut à droite) pour tester."; } rendre(); },
    secteur(on) { S.secteur = on; if (!on) { S.dir = 0; S.pre = 0; S.test = false; clearTimeout(tEnr); S.prog = null; } else if (S.mode === "cabler") { S.msgU = "Sous tension : passez en mode « Tester » pour actionner les accessoires. Coupez le secteur avant de modifier le câblage."; } S.msg = []; maj(); },
    couleur(c) { S.couleur = c; panneau(); },
    poser(t) {
      if (ACC[t].fil) { S.couleur = "#f5f5f5"; S.msgU = "Fil de pont : touchez la première borne de la carte, puis la seconde" + (M ? " (exemple : une entrée NF non utilisée vers son commun)." : " (exemple : " + nB("ft1") + " et " + nB("com") + " pour ponter FT1 absente)."); panneau(); maj(); return; }
      if (ACC[t].enfiche) { this.radio(); return; }
      if (I.acc.length >= 14) { S.msgU = "Quatorze accessoires maximum."; maj(); return; }
      if (ACC[t].paire) { const p = 1 + Math.max(0, ...I.acc.filter(a => a.paire).map(a => a.paire)); (ACC[t].paire === "c" ? [["txc"], ["rxc"]] : [["tx"], ["rx"]]).forEach(([u]) => { const [x, y] = libre(u); I.acc.push({ id: "a" + (I.n++), t: u, x, y, paire: p }); }); }
      else { const [x, y] = libre(t), o = { id: "a" + (I.n++), t, x, y }; if (t === "mot" || t === "fdc" || t === "mbl") { let k = 1; while (I.acc.some(a => a.t === t && a.num === k)) k++; o.num = k; } I.acc.push(o); } /* moteurs et fins de course numérotés : 1 = vantail 1 */
      sauver(); rendre();
    },
    radio() { const r = I.acc.find(a => a.t === "radio"); if (r) I.acc = I.acc.filter(a => a !== r); else { if (S.secteur) { S.msgU = "Enfichez le récepteur hors tension (coupez le secteur)."; maj(); return; } I.acc.push({ id: "a" + (I.n++), t: "radio", x: 0, y: 0 }); } S.msgU = ""; sauver(); rendre(); },
    supFil() { I.fils = I.fils.filter(w => w.id !== S.selFil); S.selFil = null; sauver(); rendre(); },
    supAcc() { const id = S.selAcc; const a = I.acc.find(x => x.id === id); const ids = a && a.paire ? I.acc.filter(x => x.paire === a.paire).map(x => x.id) : [id]; I.acc = I.acc.filter(x => !ids.includes(x.id)); I.fils = I.fils.filter(w => !ids.some(i => w.a.startsWith(i + ":") || w.b.startsWith(i + ":"))); S.selAcc = null; sauver(); rendre(); },
    annuler() { S.sel = null; dessinSondes(); maj(); },
    vider() { const prm = I.params; I = neuf(); I.params = prm; S.sel = S.selFil = S.selAcc = null; S.mm = null; S.etat = {}; S.msgU = (M ? "Tout est retiré." : "Tout est retiré (pont d'usine " + nB("cosCom") + "-" + nB("st") + " remis).") + " « Annuler » pour revenir en arrière."; sauver(); rendre(); },
    redresser() { const w = I.fils.find(x => x.id === S.selFil); if (w) { delete w.p; sauver(); rendre(); } },
    estomper() { S.estompe = !S.estompe; const g = $("#cabfils"); if (g) g.classList.toggle("estompe", S.estompe); const b = $("#cabest"); if (b) b.classList.toggle("on", S.estompe); },
    annulerTout() { revenir(hist, futur); }, retablir() { revenir(futur, hist); },
    code(id) { codeDigi(id); maj(); },
    bascule(id) { const e = S.etat[id] = S.etat[id] || {}; e.on = !e.on; panneau(); },
    faisceau(p) { faisceau(p); },
    mm() { S.mm = S.mm ? null : {}; dessinSondes(); maj(); },
    mmMode() { S.mmMode = S.mmMode === "V" ? "R" : "V"; if (S.mm && S.mm.a && S.mm.b) S.mm.r = mesure(S.mm.a, S.mm.b); maj(); },
    panne(id) { S.pannes[id] = !S.pannes[id]; S.dir = 0; S.msgU = ""; rendre(); usine(id); },
    f3() { if (!S.f3 && S.secteur) { S.msgU = "Coupez le secteur avant de remplacer le fusible."; maj(); return; } S.f3 = !S.f3; rendre(); if (M) { S.msgU = S.f3 ? "Fusible remplacé : sorties basse tension rétablies." : "Fusible grillé : sorties basse tension coupées."; maj(); } else usine("facc"); },
    parametres() { feuille("params"); }, missions() { feuille("missions"); },
    param(code, v) { if (!ITEMS[code]) return; if (v === "") delete I.params[code]; else I.params[code] = v; sauver(); panneau(); },
    usineParams() { I.params = {}; sauver(); feuille("params"); },
    fermer() { const s = $("#cabsheet"); if (s) s.innerHTML = ""; },
    mission(id) { S.mission = { id, t0: Date.now(), aide: false }; feuille("missions"); },
    aide() { if (S.mission) S.mission.aide = true; feuille("missions"); },
    verifier() {
      const m = missions().find(x => x.id === (S.mission || {}).id); if (!m) return;
      if (S.hs) { S.mission.res = "La carte est détruite (230 V) : effacez le câblage fautif puis « Remplacer la carte » en coupant le secteur."; feuille("missions"); return; }
      const err = m.test(m); S.mission.res = err ? "✗ " + err : "✓ Réussi : câblage correct."; S.mission.ok = !err;
      if (window.SIM && SIM.noter) SIM.noter(C.id, "Câblage : " + m.t, !err, S.mission.aide, (Date.now() - S.mission.t0) / 1000);
      feuille("missions");
    },
    etatAff() { enregistrerP(); S.prog = null; S.msgU = ""; maj(); },
    zoom(f) { zoomer(f); }, zoomRaz() { Z = { x: 0, y: 0, w: W, h: H }; appliquerZ(); },
    plein() { const w = $("#cabwrap"); if (!w) return; const on = !w.classList.contains("cabplein"); w.classList.toggle("cabplein", on); document.body.classList.toggle("cabnoscroll", on); const b = $("#cabplb"); if (b) { b.textContent = on ? "✕" : "⛶"; b.setAttribute("aria-label", on ? "Quitter le plein écran" : "Plein écran"); } },
    clic(k) { if (M) { S.msgU = M.clic(api(), k); maj(); } },
    carte() { if (S.secteur) { S.msgU = "Coupez le secteur avant de remplacer la carte."; maj(); return; } S.hs = false; S.f3 = true; S.pannes = {}; S.msg = []; rendre(); }
  };
  function feuille(k) {
    const s = $("#cabsheet"); if (!s) return;
    let h = "";
    if (k === "params" && M) { h = M.feuille(api()); }
    else if (k === "params") {
      const tous = SIM.ordreRoger(C), ligne = x => { const c = x.code, L = SIM.valeursRoger(x);
        if (!L) return `<label><b>${esc(c)}</b> ${esc(x.titre)}<span class="hotn">Réglage à procédure propre ou en lecture : voir la fiche.</span></label>`;
        const v = pval(c), d = pdef(c);
        return `<label><b>${esc(c)}</b> ${esc(x.titre)}<select onchange="CAB.param('${esc(c)}', this.value)">${v == null ? `<option value="" selected>— réglage usine non indiqué (${esc(String(x.def || "").slice(0, 30))})</option>` : ""}${L.map(o => `<option value="${esc(o.v)}"${o.v === v ? " selected" : ""}>${esc(o.v)}${o.v === d ? " (usine)" : ""} · ${esc((o.d || "").slice(0, 42))}${(o.d || "").length > 42 ? "…" : ""}</option>`).join("")}</select></label>`; };
      const PA = F.params || PARAMS, actifs = tous.filter(x => PA.includes(x.code)), autres = tous.filter(x => !PA.includes(x.code));
      h = `<h3>Paramètres de la carte</h3><p class="note">Tous les paramètres de la notice, dans son ordre. Valeurs et réglages usine d'après la fiche. Ils se règlent aussi avec les touches de la carte (▲ ▼ puis + −), sous tension et moteur à l'arrêt.</p><h4 class="cabh">Paramètres qui agissent dans l'atelier</h4><div class="cabpar">${actifs.map(ligne).join("")}</div><h4 class="cabh">Autres paramètres</h4><p class="hotn">Enregistrés, mais sans effet simulé dans l'atelier (vitesses, couple, ralentissements, batterie, MASTER / SLAVE…).</p><div class="cabpar">${autres.map(ligne).join("")}</div><div class="sga"><button class="mini" onclick="CAB.usineParams()">Réglages usine</button><button class="mini" onclick="CAB.fermer()">Fermer</button></div>`;
    } else {
      const m = S.mission && missions().find(x => x.id === S.mission.id);
      h = `<h3>Missions</h3>` + (m ? `<p><b>${esc(m.t)}</b><br>${esc(m.but)}</p>${S.mission.aide ? `<p class="note">${esc(m.aide())}</p>` : ""}${S.mission.res ? `<p class="${S.mission.ok ? "simok" : "note"}">${esc(S.mission.res)}</p>` : ""}<div class="sga"><button class="mini" onclick="CAB.verifier()">Vérifier mon câblage</button>${S.mission.aide ? "" : `<button class="mini" onclick="CAB.aide()">Indice</button>`}<button class="mini" onclick="CAB.mission('')">Autre mission</button></div>` :
        `<div class="list">${missions().map(x => `<button class="row" onclick="CAB.mission('${x.id}')"><b>${esc(x.t)}</b><small>${esc(x.but)}</small></button>`).join("")}</div>`) + `<div class="sga"><button class="mini" onclick="CAB.fermer()">Fermer</button>${S.hs ? `<button class="mini" onclick="CAB.carte()">Remplacer la carte</button>` : ""}</div>`;
    }
    s.innerHTML = `<div class="cabfeuille">${h}</div>`; s.scrollIntoView({ block: "nearest", behavior: "smooth" });
  }
  /* interface donnée aux modèles de cartes (cablage-*.js) */
  function api() { return { S, I, R: S && S.R, K, BORNES, DY, W, H, C, F, ACC, esc, dit, avec, essai, nB, largeur, posB, panneau, maj, rendre, sauver, feuille, actives, resistance,
    par: k => I.params[k], regler(k, v) { I.params[k] = v; sauver(); panneau(); }, cut: p => !!(S.etat["p" + p] || {}).coupe }; }
  window.CABT = { circuit: () => circuit(), etat: () => S, inst: () => I, K: () => K, bornes: () => BORNES, essai: id => missions().find(m => m.id === id).test(), api: () => api() }; /* pour les tests */
})();
