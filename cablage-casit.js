/* Atelier de câblage : carte CASIT KEQS08 (1 moteur 230 V, coulissant ou un vantail).
   Tout vient de la notice CASIT KEQS08-R (réf. 250319 VXX03) et de la fiche de l'appli : bornier (§ 2.2), branchements (§ 2.3 à 2.14),
   voyants (§ 2.15), dip-switch B (§ 3.1) et A (§ 3.2), JP1 homme mort (§ 3.3), télécommandes (§ 4.3).
   Disposition des borniers : schéma § 2.1 p. 4. Ce que la notice ne donne pas est soit non simulé, soit fixé pour l'atelier et dit à l'écran :
   temps de travail, temps de pause et ouverture piétonne (appris sur la carte avec TEMPI, sans valeur d'usine),
   position du cavalier AC/DC et des dip-switch à l'achat (non indiquées : tout sur OFF, cavalier sur AC). */
(function () {
  const PAS = 22;
  const TRAVAIL = 13, PAUSE = 10, PIETON = 35; /* valeurs d'atelier (non données par la notice) : s, s, % de la course */
  const LAB = { 1: "230V", 2: "230V", 3: "Lampe", 4: "Lampe", 5: "Com", 6: "Ferme", 7: "Ouvre", 8: "Ant", 9: "Com", 10: "Com", 11: "+12V", 12: "Stop", 13: "Photo1", 14: "FCO", 15: "FCF", 16: "Start", 17: "Piéton", 18: "24V~", 19: "+24", 20: "−24", 21: "Photo2", 22: "0V~", 23: "12V~", 24: "Sec", 25: "Sec", 26: "+5V", 27: "Sgn", 28: "−5V" };
  const COURT = { 1: "230", 2: "230", 3: "Lamp", 4: "Lamp", 5: "Com", 6: "Ferm", 7: "Ouvr", 8: "Ant", 9: "Com", 10: "Com", 11: "+12", 12: "Stop", 13: "Ph1", 14: "FCO", 15: "FCF", 16: "Start", 17: "Piét", 18: "24~", 19: "+24", 20: "−24", 21: "Ph2", 22: "0V~", 23: "12V~", 24: "Sec", 25: "Sec", 26: "+5V", 27: "Sgn", 28: "−5V" }; /* étiquettes courtes du dessin */
  const pos = DY => {
    const b = {}, put = (n, x, y, dessus) => b["b:" + n] = { x, y, lab: LAB[n], n: String(n), dessus };
    for (let n = 8; n <= 21; n++) put(n, 46 + (n - 8) * PAS, DY + 32, true);
    put(1, 40, DY + 300); for (let n = 2; n <= 7; n++) put(n, 104 + (n - 2) * PAS, DY + 300);
    [26, 27, 28].forEach((n, i) => put(n, 356, DY + 96 + i * PAS)); [24, 25].forEach((n, i) => put(n, 356, DY + 178 + i * PAS)); [22, 23].forEach((n, i) => put(n, 356, DY + 240 + i * PAS));
    return b;
  };
  const LEDS = [["STOP", "STOP", "r"], ["PHOTO1", "FOTO", "r"], ["FCF", "FCF", "r"], ["FCO", "FCO", "r"], ["START", "START", "v"], ["PIETON", "PIET.", "v"]];
  const dipOn = (A, k) => A.par(k) === "ON";
  const mode = A => { const a1 = dipOn(A, "A1"), a2 = dipOn(A, "A2"); return a1 && a2 ? "auto2" : a1 ? "copro" : a2 ? "semi" : "auto1"; };
  const NOM_MODE = { auto1: "Automatique 1", copro: "Copropriété", semi: "Semi-automatique", auto2: "Automatique 2" };
  const SRC = "Notice CASIT KEQS08-R";

  const M = {
    nom: "KEQS08", fig: "schéma § 2.1 p. 4 de la notice KEQS08-R",
    notes: "Simulateur de formation construit d'après la fiche et la notice CASIT KEQS08-R : bornier (§ 2.2), branchements (§ 2.3 à 2.14), voyants (§ 2.15), dip-switch (§ 3.1, 3.2), JP1 (§ 3.3). Disposition des borniers : schéma § 2.1 p. 4. Accessoires génériques. Vitesse du portail indicative (environ 10 s pour la course). Fixés pour l'atelier car appris sur la carte (TEMPI) : temps de travail, temps de pause, ouverture piétonne. Non simulés : apprentissage des temps et des télécommandes, test des entrées (8A), détection d'obstacle ampèremétrique (9A), encoder, serrure 22-23. Les bornes 9, 10 et 20 sont traitées comme le commun (0 V) des entrées et du −24 V.",
    K: { com: "9", com2: "10", p24: "19", m24: "20", a24: "18", p12: "11", stop: "12", ph1: "13", fco: "14", fcf: "15", start: "16", pieton: "17", ph2: "21", l1: "1", l2: "2", lamp1: "3", lamp2: "4", mc: "5", mf: "6", mo: "7", sec1: "24", sec2: "25" },
    coms: ["9", "10", "20"],
    entrees: { 12: "STOP", 13: "PHOTO1", 14: "FCO", 15: "FCF", 16: "START", 17: "PIETON", 21: "PHOTO2" },
    bornes230: ["b:1", "b:2", "b:3", "b:4", "b:5", "b:6", "b:7", "b:24", "b:25"],
    texte230: "bornes 1 à 7, et le contact sec 24-25", source230: SRC + " § 2.2",
    texteCC: "Court-circuit sur une sortie basse tension (24 V ou 12 V) : la sortie est coupée. La notice ne dit pas quel fusible (F1 160 mA ou F2 4 A) la protège. Coupez le secteur et corrigez le câblage.",
    biblio: ["mot", "fdc", "cellc", "pp", "stop", "oro", "fla", "lum", "voy24", "sec", "pont"],
    radio: ["START (1er bouton mémorisé)", "PIÉTON (2e bouton mémorisé)"],
    usine: { transfo: { nom: "Transformateur" }, f1: { nom: "Fusible F1 160 mA" }, f2: { nom: "Fusible F2 4 A" } },
    bornes: pos,
    alimentee: T => (T("b:1").has("L") && T("b:2").has("N")) || (T("b:1").has("N") && T("b:2").has("L")),
    sources(A, on) {
      const S = A.S, tags = [], liens = [];
      if (!on) return { tags, liens };
      if (S.f3) { if (A.par("ACDC") === "DC") tags.push(["b:19", "+24"]); else { tags.push(["b:18", "A24"]); tags.push(["b:19", "A24b"]); } tags.push(["b:11", "+12"]); }
      if (S.rel) { liens.push(["b:5", "b:1"]); liens.push([S.rel > 0 ? "b:7" : "b:6", "b:2"]); } /* relais moteur : commun 5, phase sur 7 (ouvre) ou 6 (ferme) */
      if (S.lampe) { liens.push(["b:3", "b:2"]); liens.push(["b:4", "b:1"]); }
      if (S.sec) liens.push(["b:24", "b:25"]);
      return { tags, liens };
    },
    /* ---------- logique (§ 3) ---------- */
    tick(A, R) {
      const S = A.S, E = R.ent, on = R.carteOn;
      const ex = k => dipOn(A, k); /* exclusions DIP B */
      const ok = { stop: ex("B1") || E.STOP, ph1: ex("B2") || E.PHOTO1, fco: ex("B3") || E.FCO, fcf: ex("B4") || E.FCF, ph2: ex("B5") || E.PHOTO2 };
      S.lu = { ok, E };
      /* portail : il suit le moteur réellement alimenté (course complète en 10 s environ) */
      let sens = 0; Object.values(R.moteurs).forEach(m => { if (m.sens) sens = m.sens; });
      if (sens > 0) S.pos = Math.min(100, S.pos + 1); else if (sens < 0) S.pos = Math.max(0, S.pos - 1);
      S.dir = sens;
      if (!on) { S.rel = 0; S.lampe = 0; S.sec = 0; S.cmd = 0; S.pre = 0; S.prec = {}; return; }
      const radio = S.radio || {};
      const hm = A.par("JP1") === "ON", ind = ex("B7");
      const START = E.START || !!radio.PR1, PIET = E.PIETON || !!radio.PR2;
      const front = (k, v) => v && !S.prec[k];
      const m = mode(A);
      const lancer = (d, cible, txt) => { const pre = (ex("A5") ? 4 : 1) * 10; S.cmd = d; S.cible = cible; S.tw = 0; S.att = null; S.pre = pre; S.rel = 0; S.pause = 0; S.arret = 0; if (txt) A.dit(txt, SRC + " § 3.2 (préclignotement " + (ex("A5") ? "4" : "1") + " s, DIP 5A)"); };
      const arreter = (txt, src) => { S.cmd = 0; S.rel = 0; S.pre = 0; S.arret = 1; if (txt) A.dit(txt, src || SRC); };
      const ouvert = () => S.etatP === "ouvert", ferme = () => S.etatP === "ferme";
      /* STOP (§ 2.7) */
      if (!ok.stop) { if (S.cmd || S.rel) arreter("STOP ouvert : arrêt, aucun mouvement tant que l'ordre n'est pas redonné (poussoir) ou que le contact n'est pas refermé (interrupteur).", SRC + " § 2.7"); }
      /* commandes */
      else if (hm) { /* JP1 fermé : homme mort, START ouvre et PIÉTON ferme tant qu'on maintient */
        const d = START ? 1 : PIET ? -1 : 0;
        if (d !== S.cmd) { S.cmd = d; S.tw = 0; S.pre = 0; S.rel = 0; if (d) A.dit("Homme mort (JP1 fermé) : " + (d > 0 ? "START maintenu, ouverture" : "PIÉTON maintenu, fermeture") + ". Le moteur s'arrête au relâchement.", SRC + " § 3.3"); }
      } else {
        const cmdS = front("S", START), cmdP = front("P", PIET);
        if (ind && (cmdS || cmdP)) { /* fonctionnement industriel (DIP 7B) */
          if (cmdS && S.cmd <= 0 && !ouvert()) lancer(1, 100, "Fonctionnement industriel (DIP 7B) : START = OUVRE.");
          if (cmdP && S.cmd >= 0 && !ferme()) lancer(-1, 0, "Fonctionnement industriel (DIP 7B) : PIÉTON = FERME.");
        } else if (cmdS || cmdP) {
          const cible = cmdS ? 100 : PIETON, nom = cmdS ? "START" : "PIÉTON";
          if (m === "auto1") { /* chaque impulsion inverse ouvre - ferme */
            if (S.cmd > 0) lancer(-1, 0, nom + " : inversion, fermeture (Automatique 1)."); else if (S.cmd < 0) lancer(1, cible, nom + " : inversion, ouverture (Automatique 1)."); else if (ferme() || S.pos === 0) lancer(1, cible, nom + " : ouverture (Automatique 1)."); else lancer(-1, 0, nom + " : fermeture (Automatique 1).");
          } else if (m === "copro") {
            if (!S.cmd && (ferme() || S.pos === 0)) lancer(1, cible, nom + " : ouverture (Copropriété)."); else A.dit(nom + " ignoré : en Copropriété, aucune commande acceptée en fermeture et en pause" + (S.cmd > 0 ? " (pendant l'ouverture : non décrit par la notice, ignoré ici)" : "") + ".", SRC + " § 3.2");
          } else { /* semi-automatique et automatique 2 : ouvre - stop - ferme - stop */
            if (S.cmd) arreter(nom + " : stop (" + NOM_MODE[m] + ").", SRC + " § 3.2"); else if (ferme() || S.pos === 0 || S.dernier < 0) lancer(1, cible, nom + " : ouverture (" + NOM_MODE[m] + ")."); else lancer(-1, 0, nom + " : fermeture (" + NOM_MODE[m] + ").");
          }
        }
      }
      /* cellule PHOTO 1 : seulement en fermeture (§ 2.2) ; occultée en fermeture, le portail rouvre (§ 2.1 : « interrompre les cellules : si le portail ferme, le branchement n'est pas correct ») */
      if (!ok.ph1 && S.cmd < 0 && !hm) lancer(1, 100, "PHOTO 1 occultée pendant la fermeture : réouverture.");
      /* PHOTO 2 (DIP 6A) */
      if (!ok.ph2 && S.cmd && !hm && !S.att) {
        if (ex("A6")) { const d = -S.cmd; S.att = { t: "inv", n: 20, d }; S.cmd = d; S.tw = 0; S.pre = 0; A.dit("PHOTO 2 occultée : arrêt et inversion pendant 2 s, refermeture après 1 minute (DIP 6A ON).", SRC + " § 3.2"); }
        else { S.att = { t: "attente" }; S.cmd = 0; S.rel = 0; S.pre = 0; A.dit("PHOTO 2 occultée : arrêt, réouverture dès que l'obstacle est dégagé, refermeture après 1 minute (DIP 6A OFF).", SRC + " § 3.2"); }
      }
      if (S.att && S.att.t === "inv") { S.att.n--; if (S.att.n <= 0) { S.att = { t: "minute", n: 600 }; S.cmd = 0; S.rel = 0; } }
      if (S.att && S.att.t === "attente" && ok.ph2) { S.att = { t: "minute", n: 600, ouvrir: true }; lancer(1, 100, "PHOTO 2 dégagée : réouverture."); }
      if (S.att && S.att.t === "minute" && !S.cmd) { S.att.n--; if (S.att.n <= 0) { S.att = null; lancer(-1, 0, "1 minute écoulée après PHOTO 2 : refermeture."); } }
      /* préclignotement puis moteur */
      if (S.cmd && S.pre > 0) { S.pre--; S.rel = 0; } else if (S.cmd) { S.rel = S.cmd; S.tw++; }
      /* fins de course et temps de travail */
      if (S.rel > 0 && (!ex("B3") && !E.FCO)) { arreter(""); S.etatP = S.cible < 100 ? "partiel" : "ouvert"; S.dernier = 1; S.pause = 0; A.dit("Fin de course OUVRE atteint : arrêt.", SRC + " § 2.8"); }
      else if (S.rel < 0 && (!ex("B4") && !E.FCF)) { if (ex("A7")) { S.encore = 30; } arreter(""); S.etatP = "ferme"; S.dernier = -1; A.dit("Fin de course FERME atteint : arrêt" + (ex("A7") ? " ; le moteur force encore 3 s (DIP 7A ON)." : " (DIP 7A OFF)."), SRC + " § 2.8 et 3.2"); }
      else if (S.rel && S.cmd > 0 && S.cible < 100 && S.tw >= TRAVAIL * 10 * S.cible / 100) { arreter(""); S.etatP = "partiel"; S.dernier = 1; S.pause = 0; A.dit("Ouverture piétonne terminée (temps appris).", "Temps piéton : valeur d'atelier"); }
      else if (S.rel && S.tw >= TRAVAIL * 10) { const d = S.rel; arreter(""); S.etatP = d > 0 ? "ouvert" : "ferme"; S.dernier = d; S.pause = 0; A.dit("Temps de travail écoulé : arrêt du moteur" + ((d > 0 ? !ex("B3") : !ex("B4")) ? " (le fin de course n'a pas été vu)." : "."), "Temps de travail : valeur d'atelier, appris sur la carte avec TEMPI (§ 6)"); }
      if (S.encore > 0) { S.encore--; S.rel = -1; if (!S.encore) S.rel = 0; }
      if (S.cmd > 0) S.etatP = "ouverture"; else if (S.cmd < 0) S.etatP = "fermeture";
      /* refermeture automatique après la pause (Automatique 1, Copropriété, Automatique 2 ; industriel avec 1A et 2A ON) */
      const auto = ind ? (ex("A1") && ex("A2")) : m !== "semi";
      if (!hm && auto && !S.cmd && !S.att && (S.etatP === "ouvert" || S.etatP === "partiel") && ok.stop) {
        if (!ok.ph1 || !ok.ph2) S.pause = 0; S.pause++;
        if (S.pause >= PAUSE * 10) lancer(-1, 0, "Fin du temps de pause : refermeture automatique (" + (ind ? "industriel" : NOM_MODE[m]) + ").");
      }
      /* sorties : lampe 3-4 (clignotant ou lumière de courtoisie, DIP 4A) et contact sec 24-25 (voyant portail ouvert et en marche) */
      if (ex("A4")) { if (S.cmd > 0 || S.rel > 0) S.court = 1200; else if (S.etatP !== "ferme") S.court = Math.max(S.court || 0, 1); else if (S.court > 0) S.court--; S.lampe = S.court > 0 ? 1 : 0; }
      else S.lampe = S.cmd || S.rel ? 1 : 0;
      S.sec = (S.cmd || S.rel || S.pos > 0) ? 1 : 0;
      S.prec = { S: START, P: PIET, PR1: radio.PR1, PR2: radio.PR2 };
    },
    /* ---------- dessin ---------- */
    dessin(A) {
      const { DY, esc, S, I } = A, g = [], GR = "#5b605d";
      const T = (x, y, t, o = "") => g.push(`<text x="${x}" y="${y}" ${o}>${esc(t)}</text>`);
      g.push(`<rect x="10" y="${DY}" width="370" height="340" rx="10" fill="#0f3b2a" stroke="#1d6b4c"/>`);
      T(22, DY + 66, "KEQS08", 'class="cabt" fill="#8fd1b2" font-size="11"');
      const bloc = (ns, vertical) => { const b = A.BORNES; const p = ns.map(n => b["b:" + n]); const x0 = Math.min(...p.map(q => q.x)) - 10, y0 = Math.min(...p.map(q => q.y)) - 10, x1 = Math.max(...p.map(q => q.x)) + 10, y1 = Math.max(...p.map(q => q.y)) + 10;
        g.push(`<rect x="${x0}" y="${y0}" width="${x1 - x0}" height="${y1 - y0}" rx="3" fill="#3fae5a" stroke="#1f7a36"/>`);
        p.forEach(q => { g.push(`<rect x="${q.x - 7}" y="${q.y - 7}" width="14" height="14" rx="2" fill="#d9efe0" stroke="#1f7a36"/><circle class="cabb" data-b="b:${q.n}" cx="${q.x}" cy="${q.y}" r="4" fill="#8f9a95"/>`);
          if (vertical) { T(q.x - 14, q.y + 3, q.n, 'class="cabt" text-anchor="end" font-size="9" font-weight="800" fill="#fff"'); T(q.x - 30, q.y + 3, COURT[q.n], 'class="cabt" text-anchor="end" font-size="6.5" fill="#bfe8cc"'); }
          else if (q.dessus) { T(q.x, q.y - 22, q.n, 'class="cabt" text-anchor="middle" font-size="9" font-weight="800" fill="#fff"'); T(q.x, q.y - 13, COURT[q.n], 'class="cabt" text-anchor="middle" font-size="6" fill="#bfe8cc"'); }
          else { T(q.x, q.y + 21, q.n, 'class="cabt" text-anchor="middle" font-size="9" font-weight="800" fill="#fff"'); T(q.x, q.y + 30, COURT[q.n], 'class="cabt" text-anchor="middle" font-size="6" fill="#bfe8cc"'); } }); };
      bloc([8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]); bloc([1]); bloc([2, 3, 4, 5, 6, 7]); bloc([26, 27, 28], true); bloc([24, 25], true); bloc([22, 23], true);
      /* voyants (§ 2.15) */
      g.push(`<g id="cabaff"></g>`);
      /* cavalier AC/DC, boutons */
      const ac = A.par("ACDC") === "DC" ? "DC" : "AC";
      g.push(`<g class="cabm" data-m="ACDC"><rect x="250" y="${DY + 56}" width="44" height="18" rx="3" fill="#222"/><rect x="${ac === "AC" ? 252 : 272}" y="${DY + 58}" width="20" height="14" rx="2" fill="#f0b429"/><text x="262" y="${DY + 84}" class="cabt" text-anchor="middle">AC</text><text x="284" y="${DY + 84}" class="cabt" text-anchor="middle">DC</text></g>`);
      [["TEMPI", 250, 232], ["CODICI", 290, 232]].forEach(([n, x, y]) => g.push(`<g class="cabk" data-k="${n}"><rect x="${x - 8}" y="${DY + y - 8}" width="16" height="16" rx="2" fill="#e9e9e9"/><circle cx="${x}" cy="${DY + y}" r="5" fill="#d23b3b"/><text x="${x}" y="${DY + y + 18}" class="cabt" text-anchor="middle" font-size="6.5">${n}</text></g>`));
      /* dip-switch A (10) et B (8) */
      const dip = (bk, n, x0, y0) => { g.push(`<rect x="${x0 - 4}" y="${y0 - 14}" width="${n * 13 + 6}" height="40" rx="3" fill="#1d4ed8"/><text x="${x0}" y="${y0 - 17}" class="cabt">DIP ${bk}</text><text x="${x0 + n * 13}" y="${y0 - 17}" class="cabt" text-anchor="end">ON ↑</text>`);
        for (let i = 1; i <= n; i++) { const k = bk + i, on = A.par(k) === "ON", x = x0 + (i - 1) * 13; g.push(`<g class="cabm" data-m="${k}"><rect x="${x}" y="${y0 - 10}" width="10" height="26" rx="1.5" fill="#f2f2f2"/><rect x="${x + 1.5}" y="${on ? y0 - 8 : y0 + 3}" width="7" height="11" rx="1" fill="#111"/><text x="${x + 5}" y="${y0 + 30}" class="cabt" text-anchor="middle" font-size="6.5">${i}</text></g>`); } };
      dip("A", 10, 40, DY + 116); dip("B", 8, 200, DY + 116);
      /* trimmers, JP1, transformateur, fusibles */
      [["FORZA", 210], ["V.RALL", 250], ["BLOCK", 290]].forEach(([n, x]) => g.push(`<g class="cabu" data-u="trim"><circle cx="${x}" cy="${DY + 180}" r="11" fill="#e9e9e9"/><line x1="${x}" y1="${DY + 180}" x2="${x + 6}" y2="${DY + 172}" stroke="#333" stroke-width="2"/><text x="${x}" y="${DY + 202}" class="cabt" text-anchor="middle" font-size="6.5">${n}</text></g>`));
      const jp = A.par("JP1") === "ON";
      g.push(`<g class="cabm" data-m="JP1"><rect x="150" y="${DY + 172}" width="26" height="14" rx="2" fill="#222"/>${jp ? `<rect x="152" y="${DY + 174}" width="22" height="10" rx="2" fill="#f0b429"/>` : `<rect x="152" y="${DY + 174}" width="10" height="10" rx="2" fill="#f0b429"/>`}<text x="163" y="${DY + 198}" class="cabt" text-anchor="middle">JP1 ${jp ? "fermé" : "ouvert"}</text></g>`);
      g.push(`<g class="cabu" data-u="transfo"><rect x="24" y="${DY + 168}" width="100" height="74" rx="4" fill="${GR}"/><rect x="44" y="${DY + 180}" width="60" height="50" rx="3" fill="#c7b67a" opacity=".8"/><text x="74" y="${DY + 254}" class="cabt" text-anchor="middle">transformateur</text></g>`);
      g.push(`<g class="cabu" data-u="f1"><rect x="150" y="${DY + 222}" width="10" height="34" rx="2" fill="#7ee08a"/><text x="155" y="${DY + 268}" class="cabt" text-anchor="middle" font-size="6.5">F1 160mA</text></g><g class="cabu" data-u="f2"><rect x="192" y="${DY + 222}" width="10" height="34" rx="2" fill="#7ee08a"/><text x="197" y="${DY + 268}" class="cabt" text-anchor="middle" font-size="6.5">F2 4A</text></g>`);
      return g.join("");
    },
    voyants(A) {
      const { S, DY } = A, R = S.R || {}, E = R.ent || {}, on = R.carteOn;
      let h = "";
      LEDS.forEach(([k, n, c], i) => { const x = 100 + i * 21, lit = on && E[k]; h += `<circle cx="${x}" cy="${DY + 62}" r="4.5" fill="${lit ? (c === "r" ? "#ff3b30" : "#34d058") : (c === "r" ? "#4a1a1a" : "#173d22")}"/><text x="${x}" y="${DY + 78}" class="cabt" text-anchor="middle" font-size="6">${n}</text>`; });
      const l1 = on ? (Math.floor(S.t / 5) % 2 ? 1 : (E.PHOTO2 === false ? .35 : 0)) : 0; /* L1 clignote chaque seconde ; ne s'éteint pas complètement si PHOTO 2 est occultée */
      h += `<circle cx="${100 + 6 * 21 + 4}" cy="${DY + 62}" r="4.5" fill="#ff3b30" opacity="${.15 + .85 * l1}"/><text x="${100 + 6 * 21 + 4}" y="${DY + 78}" class="cabt" text-anchor="middle" font-size="5.2">L1</text>`;
      return h;
    },
    clic(A, k) { const v = A.par(k); A.regler(k, k === "ACDC" ? (v === "DC" ? "AC" : "DC") : (v === "ON" ? "OFF" : "ON")); A.rendre(); return M.reglageTexte(A, k); },
    reglageTexte(A, k) {
      if (k === "ACDC") return `<b>Cavalier AC/DC sur ${A.par("ACDC") === "DC" ? "DC" : "AC"}</b> : sortie 24 V ${A.par("ACDC") === "DC" ? "continu entre 19 (+) et 20 (−)" : "alternatif entre 18 et 19"} (§ 2.6).`;
      if (k === "JP1") return `<b>JP1 ${A.par("JP1") === "ON" ? "fermé" : "ouvert"}</b> : ${A.par("JP1") === "ON" ? "homme mort, START ouvre et PIÉTON ferme, arrêt au relâchement (§ 3.3)" : "fonctionnement normal"}.`;
      const bk = k[0], n = +k.slice(1), it = A.C.parametres.groupes.flatMap(g => g.items).find(x => { const d = window.SIM && SIM.dipsDe(x.code); return d && d.banc === bk && d.n.includes(n); });
      if (!it) return `DIP ${n}${bk} : ${A.par(k) === "ON" ? "ON" : "OFF"}.`;
      const d = SIM.dipsDe(it.code), et = {}; d.n.forEach(i => et[bk + i] = A.par(bk + i) === "ON"); const [v, desc] = SIM.etiquette(it, d, et);
      return `<b>DIP ${n}${bk} sur ${A.par(k) === "ON" ? "ON" : "OFF"}</b> · ${A.esc(it.titre)} : ${v ? A.esc(desc || v) : "<i>combinaison non décrite par la notice</i>"}`;
    },
    touche(A, k) { return k === "TEMPI" ? "TEMPI : apprentissage des temps de travail (§ 6). Non simulé : l'atelier utilise un temps de travail fixe." : "CODICI : mémorisation des télécommandes (§ 4). Non simulé : la télécommande est supposée mémorisée (1er bouton START, 2e PIÉTON)."; },
    usineInfo(A, id) {
      if (id === "trim") return "<b>Trimmers FORZA, V.RALL, BLOCK</b> : force, vitesse de ralentissement, niveau ampèremétrique (§ 8). Non simulés dans l'atelier.";
      if (id === "transfo") return "<b>Transformateur</b> de la carte : il est alimenté par les bornes 1-2 (230 V~). La carte ne s'allume que si l'arrivée 230 V~ y est raccordée.";
      return "<b>" + A.esc(M.usine[id].nom) + "</b> sur la carte. La notice ne précise pas ce que protège ce fusible : panne non simulée.";
    },
    feuille(A) {
      const it = A.C.parametres.groupes.filter(g => /DIP/.test(g.nom));
      const ligne = (x, d) => { const et = {}; d.n.forEach(i => et[d.banc + i] = A.par(d.banc + i) === "ON"); const [v, desc] = SIM.etiquette(x, d, et); return `<li><b>${A.esc(x.code)}</b> ${A.esc(x.titre)} : ${v ? A.esc(desc || v) : "<i>combinaison non décrite</i>"}</li>`; };
      const bancs = it.map(g => { const items = g.items.map(x => [x, SIM.dipsDe(x.code)]).filter(([, d]) => d); const bk = items[0] && items[0][1].banc; const nb = Math.max(...items.flatMap(([, d]) => d.n));
        return `<h4 class="cabh">${A.esc(g.nom)}</h4><div class="cabdips">${Array.from({ length: nb }, (_, i) => i + 1).map(i => `<button class="cabdipb${A.par(bk + i) === "ON" ? " on" : ""}" onclick="CAB.clic('${bk}${i}');CAB.parametres()">${i}<small>${A.par(bk + i) === "ON" ? "ON" : "OFF"}</small></button>`).join("")}</div><ul class="plain cabdipl">${items.map(([x, d]) => ligne(x, d)).join("")}</ul>`; }).join("");
      return `<h3>Réglages de la carte</h3><p class="note">D'après la fiche (notice KEQS08-R § 3). Les positions à l'achat ne sont pas indiquées : l'atelier part de tous les dip-switch sur OFF. Vous pouvez aussi toucher les dip-switch, JP1 et le cavalier AC/DC directement sur la carte.</p>${bancs}
        <h4 class="cabh">Cavaliers</h4><div class="sga"><button class="mini" onclick="CAB.clic('ACDC');CAB.parametres()">Cavalier AC/DC : ${A.par("ACDC") === "DC" ? "DC" : "AC"}</button><button class="mini" onclick="CAB.clic('JP1');CAB.parametres()">JP1 : ${A.par("JP1") === "ON" ? "fermé (homme mort)" : "ouvert"}</button></div>
        <p class="hotn">Valeurs fixées pour l'atelier, que la notice ne donne pas (elles s'apprennent sur la carte avec TEMPI) : temps de travail ${TRAVAIL} s, temps de pause ${PAUSE} s, ouverture piétonne ${PIETON} % de la course. Non simulés : test des entrées (8A), détection d'obstacle ampèremétrique (9A), temps personnalisés (10A), coup de bélier (3A), soft-start (6B), encoder, serrure 22-23.</p>
        <div class="sga"><button class="mini" onclick="CAB.usineParams()">Tout remettre sur OFF</button><button class="mini" onclick="CAB.fermer()">Fermer</button></div>`;
    },
    /* ---------- missions ---------- */
    missions(A) {
      const acc = t => A.I.acc.filter(a => a.t === t);
      const pasAlim = R => R.carteOn ? "" : "La carte n'est pas alimentée : arrivée 230 V~ sur 1 et 2.";
      const avecPos = (pos, f) => { const p = A.S.pos; try { return A.avec(() => { A.S.pos = pos; }, f); } finally { A.S.pos = p; } };
      return [
        { id: "k230", t: "Alimentation 230 V~", but: "Raccordez l'arrivée 230 V~ à la carte.", aide: () => "Phase et neutre de l'arrivée sur les bornes 1 et 2 (§ 2.2).", test: () => { if (!acc("sec").length) return "Posez une arrivée 230 V~."; return A.avec(() => {}, R => R.def.d230 ? "DANGER : du 230 V arrive sur une borne basse tension." : pasAlim(R)); } },
        { id: "kmot", t: "Moteur", but: "Câblez le moteur 230 V~ : il doit ouvrir quand la carte commande OUVRE et fermer quand elle commande FERME.", aide: () => "Commun du moteur sur 5, FERME sur 6, OUVRE sur 7 (§ 2.2). Si le portail part à l'envers, inversez les fils OUVRE et FERME (§ 2.1).", test: () => {
          if (!acc("mot").length) return "Posez un moteur 230 V~."; const o = A.avec(() => { A.S.rel = 1; }, R => [R, Object.values(R.moteurs)[0]]), f = A.avec(() => { A.S.rel = -1; }, R => Object.values(R.moteurs)[0]);
          if (pasAlim(o[0])) return pasAlim(o[0]); if (o[0].def.d230) return "DANGER : du 230 V arrive sur une borne basse tension.";
          if (!o[1] || !f) return "Moteur non raccordé."; if (o[1].sens === -1 && f.sens === 1) return "Le moteur tourne à l'envers : inversez les fils OUVRE et FERME (§ 2.1).";
          if (o[1].sens !== 1) return "Quand la carte commande OUVRE (relais 5-7), l'enroulement OUVRE du moteur n'est pas alimenté."; if (f.sens !== -1) return "Quand la carte commande FERME (relais 5-6), l'enroulement FERME du moteur n'est pas alimenté."; return ""; } },
        { id: "kfdc", t: "Fins de course", but: "Câblez les fins de course du moteur et laissez les entrées FCO et FCF actives.", aide: () => "Commun des fins de course sur 9 ou 10, FCO sur 14, FCF sur 15 ; DIP 3B et 4B sur OFF (§ 2.8, 3.1).", test: () => {
          if (!acc("fdc").length) return "Posez les fins de course."; if (dipOn(A, "B3") || dipOn(A, "B4")) return "DIP 3B ou 4B sur ON : un fin de course est exclu.";
          const r0 = avecPos(0, R => R), r100 = avecPos(100, R => R), r50 = avecPos(50, R => R); if (pasAlim(r50)) return pasAlim(r50);
          if (!r50.ent.FCO || !r50.ent.FCF) return "Portail à mi-course, FCO et FCF doivent être fermés sur le commun (contacts NF).";
          if (r0.ent.FCF || !r0.ent.FCO) return r0.ent.FCO === false && r0.ent.FCF ? "FCO et FCF sont inversés : portail fermé, c'est FCF (15) qui doit s'ouvrir." : "Portail fermé, l'entrée FCF (15) devrait s'ouvrir.";
          if (r100.ent.FCO || !r100.ent.FCF) return "Portail ouvert, l'entrée FCO (14) devrait s'ouvrir."; return ""; } },
        { id: "kph", t: "Cellules sur PHOTO 1", but: "Câblez une paire de cellules 24 V sur l'entrée PHOTO 1 : faisceau coupé, l'entrée s'ouvre.", aide: () => "Alimentation : 18-19 en 24 V~ (cavalier AC) ou 19 (+) / 20 (−) en 24 V continu (cavalier DC). Contact du récepteur : C sur 9 ou 10, NF sur 13. DIP 2B sur OFF (§ 2.10, 2.11).", test: () => {
          const rx = acc("rxc")[0]; if (!rx) return "Posez une paire de cellules."; if (dipOn(A, "B2")) return "DIP 2B sur ON : l'entrée PHOTO est exclue.";
          const tx = A.I.acc.find(x => x.t === "txc" && x.paire === rx.paire); const r = A.avec(() => {}, R => R); if (pasAlim(r)) return pasAlim(r);
          if (!r.alim[tx.id]) return "L'émetteur TX n'est pas alimenté en 24 V (AC : 18-19 ; DC : 19 et 20, selon le cavalier)."; if (!r.alim[rx.id]) return "Le récepteur RX n'est pas alimenté en 24 V.";
          if (!r.ent.PHOTO1) return "Faisceau libre, PHOTO 1 (13) devrait être fermée sur le commun : C du RX sur 9 ou 10, NF sur 13.";
          if (A.avec(() => { A.S.etat["p" + rx.paire] = { coupe: true }; }, R => R.ent.PHOTO1)) return "Faisceau coupé, PHOTO 1 reste fermée : un pont 13-9 est-il resté en place ?"; return ""; } },
        { id: "kstart", t: "Bouton START", but: "Câblez un bouton poussoir sur START.", aide: () => "Contact NO entre 16 et le commun 9 ou 10 (§ 2.14).", test: () => {
          const b = acc("pp"); if (!b.length) return "Posez un bouton poussoir."; let e = "";
          for (const a of b) { const r = A.avec(() => {}, R => R), p = A.avec(() => { A.S.etat[a.id] = { on: true }; }, R => R); if (pasAlim(r)) return pasAlim(r); if (r.ent.START) { e = e || "Au repos, START est déjà fermé : contact mal raccordé."; continue; } if (!p.ent.START) { e = e || "Bouton appuyé, START (16) ne se ferme pas sur le commun (9 ou 10)."; continue; } return ""; } return e; } },
        { id: "kstop", t: "Bouton STOP", but: "Câblez un bouton STOP (contact NF) et laissez l'entrée STOP active.", aide: () => "Contact NF entre 12 et le commun 9 ou 10, DIP 1B sur OFF (§ 2.7).", test: () => {
          const b = acc("stop")[0]; if (!b) return "Posez un bouton STOP."; if (dipOn(A, "B1")) return "DIP 1B sur ON : l'entrée STOP est exclue.";
          const r = A.avec(() => {}, R => R), p = A.avec(() => { A.S.etat[b.id] = { on: true }; }, R => R); if (pasAlim(r)) return pasAlim(r);
          if (!r.ent.STOP) return "Au repos, STOP (12) doit être fermé sur le commun."; if (p.ent.STOP) return "STOP enfoncé, l'entrée reste fermée : un pont 12-9 est-il resté ?"; return ""; } },
        { id: "kfla", t: "Clignotant 230 V~", but: "Câblez un clignotant 230 V~ (avec carte électronique) : il s'allume pendant les manœuvres.", aide: () => "Clignotant sur 3 et 4, DIP 4A sur OFF (sinon 3-4 sert à la lumière de courtoisie) (§ 2.3).", test: () => {
          const l = acc("fla")[0]; if (!l) return "Posez un clignotant 230 V~."; if (dipOn(A, "A4")) return "DIP 4A sur ON : la sortie 3-4 sert à la lumière de courtoisie.";
          const on = A.avec(() => { A.S.lampe = 1; }, R => R), off = A.avec(() => { A.S.lampe = 0; }, R => R); if (pasAlim(on)) return pasAlim(on); if (on.def.d230) return "DANGER : 230 V sur une borne basse tension.";
          if (!on.alim[l.id]) return "Sortie lampe active, le clignotant n'est pas alimenté : il va sur 3 et 4."; if (off.alim[l.id]) return "Le clignotant reste allumé à l'arrêt : il n'est pas sur la sortie 3-4."; return ""; } },
        { id: "kvoy", t: "Voyant portail ouvert", but: "Câblez un voyant 24 V qui s'allume quand le portail est ouvert ou en marche.", aide: () => "Le contact sec 24-25 coupe un fil du voyant, alimenté par la sortie 24 V (18-19 en AC, 19-20 en DC) (§ 2.4).", test: () => {
          const v = acc("voy24")[0]; if (!v) return "Posez un voyant 24 V."; const on = avecPos(50, R => (A.S.sec = 1, R)), r1 = A.avec(() => { A.S.sec = 1; }, R => R), r0 = A.avec(() => { A.S.sec = 0; }, R => R); if (pasAlim(r1)) return pasAlim(r1);
          if (!r1.alim[v.id]) return "Contact sec 24-25 fermé, le voyant ne s'allume pas."; if (r0.alim[v.id]) return "Le voyant reste allumé portail fermé : il ne passe pas par le contact 24-25."; return ""; } }
      ];
    }
  };
  (window.CABMOD = window.CABMOD || {}).keqs08 = M;
})();

/* Atelier de câblage : carte CASIT EQ2009 (2 moteurs 230 V, battants), sans encoder (S4 sur OFF · OFF).
   Notice CASIT EQ2009 R1.0 (Rev. 00 du 03/02/2010) : schéma et LED p. 2, branchements p. 3 (§ 1), dip-switch S1 à S4 p. 4-5 (§ 4),
   temps par défaut § 5 (travail 50 s, piéton 10 s, décalage 3 s en ouverture et 5 s en fermeture, pause 8 s, pause piéton 8 s). */
(function () {
  const TRAVAIL = 50, PIET = 10, DEC_O = 3, DEC_F = 5, PAUSE = 8, PAUSE_P = 8; /* § 5 « temps de défaut » */
  const LAB = { 1: "N", 2: "L", 3: "Lampe", 4: "Lampe", 5: "M1 ouvre", 6: "M1 com", 7: "M1 ferme", 8: "M2 ouvre", 9: "M2 com", 10: "M2 ferme", 11: "Courtoisie", 12: "Courtoisie", 13: "+12V", 14: "−12V / com", 15: "Palpeuse 1", 16: "Palpeuse 2", 17: "Com cellules", 18: "Cellule 1", 19: "Cellule 2", 20: "FCO 1", 21: "FCF 1", 22: "Com FC", 23: "FCO 2", 24: "FCF 2", 25: "STOP", 26: "START / OUVRE", 27: "PIÉTON / FERME", 28: "Com commandes", 29: "Témoin 24V~", 30: "Témoin / serrure", 31: "Serrure 12V~", 32: "24V~ test", 33: "0 (24V~)", 34: "24V~", 35: "GND", 36: "Antenne", 37: "Sécurité NF", 38: "Sécurité NF", 39: "Canal 2", 40: "Canal 2", 41: "RX1", 42: "Urgence" };
  const CT = { 1: "N", 2: "L", 3: "Lamp", 4: "Lamp", 5: "Ouv", 6: "Com", 7: "Fer", 8: "Ouv", 9: "Com", 10: "Fer", 11: "Court", 12: "Court", 13: "+12", 14: "−", 15: "Cos1", 16: "Cos2", 17: "Com", 18: "Fot1", 19: "Fot2", 20: "FCA1", 21: "FCC1", 22: "Com", 23: "FCA2", 24: "FCC2", 25: "Stop", 26: "Start", 27: "Pied", 28: "Com", 29: "Spia", 30: "~", 31: "Elet", 32: "24/T", 33: "0", 34: "24V", 35: "GND", 36: "Ant", 37: "NC", 38: "Sic", 39: "RX2", 40: "RX2", 41: "RX1", 42: "Em." };
  const SRC = "Notice CASIT EQ2009 R1.0";
  const pos = DY => {
    const b = {}, put = (n, x, y, dessus, cote) => b["b:" + n] = { x, y, lab: LAB[n], n: String(n), dessus, cote };
    [[1, 30], [2, 52], [3, 140], [4, 162], [5, 190], [6, 212], [7, 234], [8, 262], [9, 284], [10, 306]].forEach(([n, x]) => put(n, x, DY + 318));
    for (let n = 13; n <= 28; n++) put(n, 26 + (n - 13) * 22, DY + 266);
    [[29, 200], [30, 222], [31, 244], [37, 272], [38, 294], [39, 320], [40, 342]].forEach(([n, x]) => put(n, x, DY + 32, true));
    [[36, 120], [35, 142], [41, 164], [34, 192], [33, 214], [32, 236]].forEach(([n, y]) => put(n, 360, DY + y, false, true));
    put(42, 336, DY + 236, false, true);
    put(11, 36, DY + 130); put(12, 58, DY + 130);
    return b;
  };
  const LEDS = [["COS1", "COS1"], ["COS2", "COS2"], ["FOT1", "FOT1"], ["FOT2", "FOT2"], ["FCO1", "FCA1"], ["FCF1", "FCC1"], ["FCO2", "FCA2"], ["FCF2", "FCC2"], ["STOP", "STOP"], ["RX1", "RX1"], ["START", "START"], ["PIETON", "PED"]];
  const on = (A, k) => A.par(k) === "ON";
  const M = {
    nom: "EQ2009", fig: "schéma p. 2 de la notice EQ2009 R1.0",
    notes: "Simulateur de formation construit d'après la fiche et la notice CASIT EQ2009 R1.0 : schéma et LED (p. 2), branchements (§ 1), dip-switch S1 à S3 (§ 4), temps par défaut (§ 5 : travail 50 s, piéton 10 s, décalage des vantaux 3 s en ouverture et 5 s en fermeture, pause 8 s). Moteurs sans encoder (S4 sur OFF · OFF). Les borniers du bas sont dessinés sur deux lignes (puissance, puis entrées) ; sur la carte ils sont sur une seule ligne. Accessoires génériques. Vitesse des vantaux indicative (environ 10 s pour la course). Non simulés : menu de programmation (S2 DIP 10) et apprentissage des temps, test cellules (S3 DIP 1-2), fonctionnement type B et fiche LAMP (S3 DIP 3), détection d'obstacle (S3 DIP 4-5), coup de bélier, ralentissements, encoder, manœuvre d'urgence (42-33), RX1 en homme mort, électroserrure. Les bornes 14, 17, 22, 28, 33 et 35 sont traitées comme le commun (0 V) des entrées.",
    K: {}, coms: ["14", "17", "22", "28", "33", "35"],
    entrees: { 15: "COS1", 16: "COS2", 18: "FOT1", 19: "FOT2", 20: "FCO1", 21: "FCF1", 23: "FCO2", 24: "FCF2", 25: "STOP", 26: "START", 27: "PIETON", 41: "RX1", 42: "URG" },
    bornes230: ["b:1", "b:2", "b:3", "b:4", "b:5", "b:6", "b:7", "b:8", "b:9", "b:10", "b:11", "b:12", "b:39", "b:40"],
    texte230: "bornes 1 à 10, et les contacts propres 11-12 et 39-40", source230: SRC + " § 1",
    texteCC: "Court-circuit sur une sortie basse tension (24 V~ ou 12 V) : la sortie est coupée. La notice ne dit pas quel fusible (F1 5 A ou F2 1 A) la protège. Coupez le secteur et corrigez le câblage.",
    biblio: ["mot", "fdc", "cellc", "pp", "stop", "oro", "fla", "lum", "voy24", "sec", "pont"],
    radio: ["RX1 (canal 1, J1)", "canal 2 : contact 39-40"],
    usine: { transfo: { nom: "Transformateur" }, f1: { nom: "Fusible F1 5 A" }, f2: { nom: "Fusible F2 1 A" } },
    bornes: pos,
    alimentee: T => (T("b:1").has("L") && T("b:2").has("N")) || (T("b:1").has("N") && T("b:2").has("L")),
    sources(A, allume) {
      const S = A.S, tags = [], liens = [];
      if (!allume) return { tags, liens };
      if (S.f3) { tags.push(["b:34", "A24"], ["G", "A24b"], ["b:13", "+12"]); if (S.temoin) tags.push(["b:29", "A24"], ["b:30", "A24b"]); }
      const relais = S.secu !== false;
      if (relais && S.rel1) liens.push(["b:6", "b:1"], [S.rel1 > 0 ? "b:5" : "b:7", "b:2"]); /* commun moteur au neutre (1), phase (2) sur ouvre ou ferme */
      if (relais && S.rel2) liens.push(["b:9", "b:1"], [S.rel2 > 0 ? "b:8" : "b:10", "b:2"]);
      if (relais && S.lampe) liens.push(["b:3", "b:2"], ["b:4", "b:1"]);
      if (S.court) liens.push(["b:11", "b:12"]);
      if ((S.radio || {}).PR2) liens.push(["b:39", "b:40"]);
      return { tags, liens };
    },
    tick(A, R) {
      const S = A.S, E = R.ent, allume = R.carteOn;
      S.posM = S.posM || { 1: 0, 2: 0 };
      /* vantaux : chacun suit son moteur (moteur n° 1 = vantail 1) */
      A.I.acc.filter(a => a.t === "mot").forEach(a => { const m = R.moteurs[a.id], v = a.num === 2 ? 2 : 1; if (!m) return; if (m.sens > 0) S.posM[v] = Math.min(100, S.posM[v] + 1); else if (m.sens < 0) S.posM[v] = Math.max(0, S.posM[v] - 1); });
      S.pos = Math.max(S.posM[1], S.posM[2]); S.dir = S.rel1 || S.rel2 || 0;
      if (!allume) { S.rel1 = S.rel2 = 0; S.lampe = 0; S.court = 0; S.temoin = 0; S.cmd = 0; S.pre = 0; S.prec = {}; return; }
      S.secu = R.U.f("b:37") === R.U.f("b:38"); /* contact NF 37-38 : ouvert, plus d'alimentation des bobines de relais */
      const deux = on(A, "S29"), unif = on(A, "S15"), radio = S.radio || {};
      const ok = { cos1: E.COS1, cos2: E.COS2, fot1: E.FOT1, fot2: E.FOT2, stop: E.STOP };
      S.lu = { ok, E };
      const START = E.START, PIET = E.PIETON, RX1 = E.RX1 || !!radio.PR1;
      const front = (k, v) => v && !S.prec[k];
      const lancer = (d, pieton, txt, src) => { S.cmd = d; S.pieton = !!pieton; S.pre = (on(A, "S27") ? 1 : 4) * 10; S.t0 = 0; S.m = { 1: { t: 0, fin: false }, 2: { t: 0, fin: !deux || unif || pieton } }; S.pause = 0; S.att = null; S.etatP = d > 0 ? "ouverture" : "fermeture"; S.court = 1; if (txt) A.dit(txt, src || SRC + " p. 1 et § 4 (pré-alarme " + (on(A, "S27") ? "1" : "4") + " s, S2 DIP 7)"); };
      const arreter = (txt, src) => { S.cmd = 0; S.rel1 = S.rel2 = 0; S.pre = 0; S.etatP = "arrete"; S.dernier = S.dernier || 0; if (txt) A.dit(txt, src || SRC); };
      const ferme = () => S.posM[1] === 0 && S.posM[2] === 0 && S.etatP !== "ouverture";
      const ouvert = () => S.etatP === "ouvert" || S.etatP === "pieton";
      /* STOP et contact de sécurité */
      if (!ok.stop) { if (S.cmd) arreter("STOP (25) ouvert : le portail s'arrête.", SRC + " § 1"); }
      else if (!S.secu) { if (S.cmd) arreter("Contact de sécurité 37-38 ouvert : les relais ne sont plus alimentés, sorties désactivées.", SRC + " § 1"); }
      else if (on(A, "S21")) { /* homme mort : OUVRE / FERME séparés, on maintient */
        const d = START ? 1 : PIET ? -1 : 0;
        if (d && S.cmd !== d) { S.cmd = d; S.pieton = false; S.pre = 0; S.m = { 1: { t: 0, fin: false }, 2: { t: 0, fin: !deux || unif } }; S.etatP = d > 0 ? "ouverture" : "fermeture"; A.dit("Homme mort (S2 DIP 1 ON) : " + (d > 0 ? "OUVRE" : "FERME") + " maintenu, les moteurs tournent ; au relâchement ils s'arrêtent.", SRC + " p. 1"); }
        if (!d && S.cmd) arreter("");
      } else {
        const sep = !on(A, "S13"); /* S1 DIP 3 OFF : OUVRE et FERME séparés */
        const cS = front("S", START), cP = front("P", PIET), cR = front("R", RX1) && on(A, "S14");
        if (cR && !on(A, "S14")) A.dit("RX1 en homme mort (S1 DIP 4 OFF) : non simulé.", SRC + " § 4");
        if (sep && (cS || cP)) { if (cS && S.cmd <= 0) { if (ferme() && !ok.fot1 && !on(A, "S25")) A.dit("Cellule 1 occultée portail fermé : le portail ne s'ouvre pas (S2 DIP 5 OFF).", SRC + " § 4.1"); else lancer(1, false, "OUVRE (26) : ouverture."); } if (cP && S.cmd >= 0 && !ferme()) lancer(-1, false, "FERME (27) : fermeture."); }
        else if (cS || cP || cR) {
          const pied = cP && !cS && !cR, nom = cS ? "START" : cR ? "RX1" : "PIÉTON";
          S.origine = cR ? "R" : pied ? "P" : "S";
          const peutOuvrir = () => { if (!ferme()) return true; if (!ok.fot1 && !on(A, "S25")) { A.dit("Cellule 1 occultée portail fermé : le portail ne s'ouvre pas (S2 DIP 5 OFF).", SRC + " § 4.1"); return false; } if (!ok.fot2 && !on(A, "S26")) { A.dit("Cellule 2 obstruée portail fermé : le START n'ouvre pas (S2 DIP 6 OFF).", SRC + " § 4.1"); return false; } return true; };
          if (on(A, "S22")) { /* semi-automatique : en ouverture, START refusé */
            if (S.cmd > 0) A.dit(nom + " ignoré : en semi-automatique, pas de START pendant l'ouverture (S2 DIP 2 ON).", SRC + " § 4.1");
            else if (S.cmd < 0) A.dit(nom + " pendant la fermeture en semi-automatique : non décrit par la notice, ignoré.", SRC);
            else if (ferme()) { if (peutOuvrir()) lancer(1, pied, nom + " : ouverture" + (pied ? " piétonne (moteur 1, 10 s)" : "") + "."); }
            else lancer(-1, pied, nom + " : fermeture (semi-automatique).");
          } else { /* pas-à-pas : OUVRE – STOP – FERME – OUVRE */
            if (S.cmd > 0) arreter(nom + " : stop (pas-à-pas, S2 DIP 2 OFF).", SRC + " p. 1");
            else if (S.cmd < 0) lancer(1, pied, nom + " : réouverture (pas-à-pas).");
            else if (ferme()) { if (peutOuvrir()) lancer(1, pied, nom + " : ouverture" + (pied ? " piétonne (moteur 1, 10 s)" : "") + " (pas-à-pas)."); }
            else lancer(-1, pied, nom + " : fermeture (pas-à-pas).");
          }
        }
      }
      /* cellules */
      if (S.cmd < 0 && !S.att && (!ok.fot1 || !ok.fot2)) { S.att = { t: "cell", k: !ok.fot1 ? "fot1" : "fot2" }; S.rel1 = S.rel2 = 0; S.cmd = 0; S.pre = 0; A.dit("Cellule " + (!ok.fot1 ? "1" : "2") + " occultée en fermeture : arrêt, réouverture dès qu'elle est libérée.", SRC + " § 1 et 4.1"); }
      if (S.cmd > 0 && !ok.fot1 && !S.att) {
        if (on(A, "S25")) { S.att = { t: "ref", n: 20 }; A.dit("Cellule 1 en ouverture (S2 DIP 5 ON) : le portail referme 2 s après.", SRC + " § 4.1"); }
        else { S.att = { t: "cellO" }; S.rel1 = S.rel2 = 0; S.cmd = 0; A.dit("Cellule 1 occultée en ouverture : arrêt, reprise de l'ouverture dès qu'elle est libérée (S2 DIP 5 OFF).", SRC + " § 4.1"); }
      }
      if (S.att && S.att.t === "cell" && ok[S.att.k]) { S.att = null; lancer(1, S.pieton, "Cellule libérée : réouverture."); }
      if (S.att && S.att.t === "cellO" && ok.fot1) { S.att = null; lancer(1, S.pieton, "Cellule 1 libérée : reprise de l'ouverture."); }
      if (S.att && S.att.t === "ref") { S.att.n--; if (S.att.n <= 0) { S.att = null; lancer(-1, S.pieton, "Refermeture 2 s après l'intervention de la cellule 1."); } }
      /* barres palpeuses (type A) : en ouverture arrêt, en fermeture inversion 2 s */
      ["cos1", "cos2"].forEach((k, i) => { if (ok[k] || !S.cmd || (S.att && S.att.t === "inv")) return; if (S.cmd > 0) arreter("Barre palpeuse " + (i + 1) + " en ouverture : arrêt (type A).", SRC + " § 1"); else { S.att = { t: "inv", n: 20 }; S.cmd = 1; S.pre = 0; S.m = { 1: { t: 0, fin: false }, 2: { t: 0, fin: !deux || unif } }; A.dit("Barre palpeuse " + (i + 1) + " en fermeture : inversion pendant 2 s (type A).", SRC + " § 1"); } });
      if (S.att && S.att.t === "inv") { S.att.n--; if (S.att.n <= 0) { S.att = null; arreter(""); } }
      /* manœuvre : pré-alarme, puis moteurs avec décalage (M2 retardé en ouverture, M1 retardé en fermeture) */
      if (S.cmd && S.pre > 0) { S.pre--; S.rel1 = S.rel2 = 0; }
      else if (S.cmd) {
        S.t0++;
        const d = S.cmd, retard = v => unif || !deux || S.pieton ? 0 : (d > 0 ? (v === 2 ? DEC_O : 0) : (v === 1 ? DEC_F : 0)) * 10;
        const tMax = v => (d > 0 && S.pieton ? PIET : TRAVAIL) * 10;
        [1, 2].forEach(v => { const m = S.m[v]; if (m.fin) { S["rel" + v] = 0; return; } if (S.t0 < retard(v)) { S["rel" + v] = 0; return; }
          const fc = d > 0 ? E["FCO" + v] : E["FCF" + v]; m.t++;
          if (!fc) { m.fin = true; S["rel" + v] = 0; if (d < 0 && on(A, "S16")) m.encore = 30; return; } /* fin de course atteint (contact NF ouvert) */
          if (m.t >= tMax(v)) { m.fin = true; S["rel" + v] = 0; return; }
          S["rel" + v] = d; });
        [1, 2].forEach(v => { const m = S.m[v]; if (m.encore > 0) { m.encore--; S["rel" + v] = -1; } });
        if (S.m[1].fin && S.m[2].fin && !(S.m[1].encore > 0) && !(S.m[2].encore > 0)) { S.dernier = d; S.cmd = 0; S.rel1 = S.rel2 = 0; S.etatP = d > 0 ? (S.pieton ? "pieton" : "ouvert") : "ferme"; S.pause = 0; A.dit(d > 0 ? (S.pieton ? "Ouverture piétonne terminée." : "Ouverture terminée.") : "Fermeture terminée" + (on(A, "S16") ? " (moteurs encore 3 s après le fin de course FERME, S1 DIP 6 ON)." : "."), SRC + " § 1, 4, 5"); }
      }
      /* refermeture automatique (S1 DIP 1 START, DIP 2 piéton, DIP 7 RX1) */
      const auto = S.origine === "P" ? on(A, "S12") : S.origine === "R" ? on(A, "S17") : on(A, "S11");
      if (!on(A, "S21") && auto && !S.cmd && !S.att && ouvert() && ok.stop) { if (!ok.fot1 || !ok.fot2) S.pause = 0; S.pause++; if (S.pause >= (S.etatP === "pieton" ? PAUSE_P : PAUSE) * 10) lancer(-1, S.etatP === "pieton", "Fin du temps de pause (" + (S.etatP === "pieton" ? PAUSE_P : PAUSE) + " s) : fermeture automatique.", SRC + " § 4 et 5"); }
      /* sorties */
      const mouv = S.cmd || S.pre; const inter = on(A, "S28");
      S.lampe = !mouv && !(inter && ouvert()) ? 0 : !inter ? 1 : S.cmd < 0 ? (Math.floor(S.t / 2) % 2 ? 0 : 1) : S.cmd > 0 ? (Math.floor(S.t / 5) % 2 ? 0 : 1) : 1;
      if (S.etatP === "ferme" && !S.cmd) { if (on(A, "S38")) S.court = 0; else { S.courtT = S.courtT == null ? 1800 : S.courtT - 1; if (S.courtT <= 0) S.court = 0; } } else { S.courtT = null; if (mouv) S.court = 1; }
      S.temoin = (S.posM[1] > 0 || S.posM[2] > 0) ? 1 : 0;
      S.prec = { S: START, P: PIET, R: RX1 };
    },
    portail(A) { return `<g id="cabportail"><rect x="20" y="58" width="350" height="5" rx="2" fill="#333"/><rect x="40" y="18" width="10" height="46" fill="#555"/><rect x="340" y="18" width="10" height="46" fill="#555"/>
      <rect id="cabv1" x="50" y="26" width="145" height="28" rx="2" fill="none" stroke="#bbb" stroke-width="2.5"/><rect id="cabv2" x="195" y="26" width="145" height="28" rx="2" fill="none" stroke="#bbb" stroke-width="2.5"/>
      <text id="cabetat" x="195" y="12" text-anchor="middle" class="cabn"></text><text id="cabv1t" x="52" y="12" class="cabs">vantail 1</text><text id="cabv2t" x="338" y="12" class="cabs" text-anchor="end">vantail 2</text></g>`; },
    majPortail(A) { const S = A.S, p = S.posM || { 1: 0, 2: 0 }, w1 = 145 * Math.cos(p[1] / 100 * Math.PI / 2.2), w2 = 145 * Math.cos(p[2] / 100 * Math.PI / 2.2);
      const v1 = document.getElementById("cabv1"), v2 = document.getElementById("cabv2"); if (v1) v1.setAttribute("width", Math.max(6, w1).toFixed(1)); if (v2) { v2.setAttribute("width", Math.max(6, w2).toFixed(1)); v2.setAttribute("x", (340 - Math.max(6, w2)).toFixed(1)); }
      const t1 = document.getElementById("cabv1t"), t2 = document.getElementById("cabv2t"); if (t1) t1.textContent = "vantail 1 · " + p[1] + " %"; if (t2) t2.textContent = "vantail 2 · " + p[2] + " %"; },
    dessin(A) {
      const { DY, esc } = A, g = [], GR = "#5b605d", B = A.BORNES;
      const T = (x, y, t, o = "") => g.push(`<text x="${x}" y="${y}" ${o}>${esc(t)}</text>`);
      g.push(`<rect x="10" y="${DY}" width="370" height="360" rx="10" fill="#0f3b2a" stroke="#1d6b4c"/>`);
      T(20, DY + 16, "EQ2009", 'class="cabt" fill="#8fd1b2" font-size="11"');
      const bloc = (ns, mode) => { const p = ns.map(n => B["b:" + n]); const x0 = Math.min(...p.map(q => q.x)) - 10, y0 = Math.min(...p.map(q => q.y)) - 10, x1 = Math.max(...p.map(q => q.x)) + 10, y1 = Math.max(...p.map(q => q.y)) + 10;
        g.push(`<rect x="${x0}" y="${y0}" width="${x1 - x0}" height="${y1 - y0}" rx="3" fill="#3fae5a" stroke="#1f7a36"/>`);
        p.forEach(q => { g.push(`<rect x="${q.x - 7}" y="${q.y - 7}" width="14" height="14" rx="2" fill="#d9efe0" stroke="#1f7a36"/><circle class="cabb" data-b="b:${q.n}" cx="${q.x}" cy="${q.y}" r="4" fill="#8f9a95"/>`);
          if (mode === "cote") { T(q.x - 14, q.y + 3, q.n, 'class="cabt" text-anchor="end" font-size="9" font-weight="800" fill="#fff"'); T(q.x - 30, q.y + 3, CT[q.n], 'class="cabt" text-anchor="end" font-size="6.5" fill="#bfe8cc"'); }
          else if (mode === "haut") { T(q.x, q.y - 22, q.n, 'class="cabt" text-anchor="middle" font-size="9" font-weight="800" fill="#fff"'); T(q.x, q.y - 13, CT[q.n], 'class="cabt" text-anchor="middle" font-size="6" fill="#bfe8cc"'); }
          else { T(q.x, q.y + 20, q.n, 'class="cabt" text-anchor="middle" font-size="9" font-weight="800" fill="#fff"'); T(q.x, q.y + 29, CT[q.n], 'class="cabt" text-anchor="middle" font-size="6" fill="#bfe8cc"'); } }); };
      bloc([1, 2]); bloc([3, 4]); bloc([5, 6, 7]); bloc([8, 9, 10]); bloc([13, 14, 15, 16]); bloc([17, 18, 19]); bloc([20, 21, 22, 23, 24]); bloc([25, 26, 27, 28]);
      bloc([29, 30, 31], "haut"); bloc([37, 38], "haut"); bloc([39, 40], "haut"); bloc([36, 35, 41], "cote"); bloc([34, 33, 32], "cote"); bloc([11, 12]);
      const b42 = B["b:42"]; g.push(`<rect x="${b42.x - 10}" y="${b42.y - 10}" width="20" height="20" rx="3" fill="#3fae5a" stroke="#1f7a36"/><rect x="${b42.x - 7}" y="${b42.y - 7}" width="14" height="14" rx="2" fill="#d9efe0"/><circle class="cabb" data-b="b:42" cx="${b42.x}" cy="${b42.y}" r="4" fill="#8f9a95"/>`); T(b42.x - 14, b42.y + 3, "42 Em.", 'class="cabt" text-anchor="end" font-size="7"');
      [78, 96, 114].forEach(x => { g.push(`<rect x="${x - 8}" y="${DY + 308}" width="16" height="20" rx="2" fill="#3fae5a"/><text x="${x}" y="${DY + 322}" class="cabt" text-anchor="middle" font-size="9" fill="#fff">⏚</text>`); }); T(96, DY + 345, "G (terre)", 'class="cabt" text-anchor="middle" font-size="6"');
      T(47, DY + 116, "COURTOISIE", 'class="cabt" text-anchor="middle" font-size="6"');
      g.push(`<g id="cabaff"></g>`);
      /* dip-switch S1, S2, S3, S4 */
      const dip = (bk, nom, n, x0, y0) => { g.push(`<rect x="${x0 - 3}" y="${y0 - 12}" width="${n * 11 + 4}" height="34" rx="3" fill="#1d4ed8"/><text x="${x0}" y="${y0 - 15}" class="cabt">${nom}</text><text x="${x0 + n * 11}" y="${y0 - 15}" class="cabt" text-anchor="end">ON ↑</text>`);
        for (let i = 1; i <= n; i++) { const k = bk + i, o = A.par(k) === "ON", x = x0 + (i - 1) * 11; g.push(`<g class="cabm" data-m="${k}"><rect x="${x}" y="${y0 - 9}" width="9" height="22" rx="1.5" fill="#f2f2f2"/><rect x="${x + 1.5}" y="${o ? y0 - 7 : y0 + 2}" width="6" height="9" rx="1" fill="#111"/><text x="${x + 4.5}" y="${y0 + 27}" class="cabt" text-anchor="middle" font-size="6">${i}</text></g>`); } };
      dip("S1", "S1", 10, 100, DY + 110); dip("S2", "S2", 10, 218, DY + 110); dip("S4", "S4", 3, 100, DY + 168); dip("S3", "S3", 10, 150, DY + 168);
      /* trimmers, poussoirs, transformateur, fusibles */
      ["P1", "P2", "P3", "P4", "P5", "P6"].forEach((n, i) => g.push(`<g class="cabu" data-u="trim"><circle cx="${100 + i * 20}" cy="${DY + 62}" r="7" fill="#e9e9e9"/><line x1="${100 + i * 20}" y1="${DY + 62}" x2="${104 + i * 20}" y2="${DY + 57}" stroke="#333" stroke-width="1.6"/><text x="${100 + i * 20}" y="${DY + 79}" class="cabt" text-anchor="middle" font-size="6">${n}</text></g>`));
      ["PS1", "PS2", "PS3"].forEach((n, i) => g.push(`<g class="cabk" data-k="${n}"><rect x="${236 + i * 22}" y="${DY + 55}" width="14" height="14" rx="2" fill="#e9e9e9"/><circle cx="${243 + i * 22}" cy="${DY + 62}" r="4" fill="#555"/><text x="${243 + i * 22}" y="${DY + 79}" class="cabt" text-anchor="middle" font-size="6">${n}</text></g>`));
      g.push(`<g class="cabu" data-u="transfo"><rect x="20" y="${DY + 26}" width="66" height="74" rx="4" fill="${GR}"/><rect x="32" y="${DY + 38}" width="42" height="50" rx="3" fill="#c7b67a" opacity=".8"/><text x="53" y="${DY + 112}" class="cabt" text-anchor="middle" font-size="6.5">transformateur</text></g>`);
      g.push(`<g class="cabu" data-u="f1"><circle cx="30" cy="${DY + 200}" r="10" fill="#7ee08a"/><text x="46" y="${DY + 203}" class="cabt" font-size="6.5">F1 5A</text></g><g class="cabu" data-u="f2"><circle cx="30" cy="${DY + 230}" r="10" fill="#7ee08a"/><text x="46" y="${DY + 233}" class="cabt" font-size="6.5">F2 1A</text></g>`);
      return g.join("");
    },
    voyants(A) {
      const { S, DY } = A, R = S.R || {}, E = R.ent || {}, allume = R.carteOn; let h = "";
      /* « s'allume à l'intervention » : contact NF ouvert, ou commande active */
      const lit = { COS1: !E.COS1, COS2: !E.COS2, FOT1: !E.FOT1, FOT2: !E.FOT2, FCO1: !E.FCO1, FCF1: !E.FCF1, FCO2: !E.FCO2, FCF2: !E.FCF2, STOP: !E.STOP, RX1: false, START: E.START, PIETON: E.PIETON };
      LEDS.forEach(([k, n], i) => { const x = 112 + i * 20, l = allume && lit[k]; h += `<rect x="${x - 4}" y="${DY + 220}" width="8" height="12" rx="1.5" fill="${l ? "#ff3b30" : "#4a1a1a"}"/><text x="${x}" y="${DY + 242}" class="cabt" text-anchor="middle" font-size="5.2">${n}</text>`; });
      h += `<rect x="60" y="${DY + 186}" width="8" height="12" rx="1.5" fill="${allume ? "#ff3b30" : "#4a1a1a"}"/><text x="64" y="${DY + 182}" class="cabt" text-anchor="middle" font-size="5.5">LINEA</text>`;
      const rev = v => !allume ? "#333" : S["rel" + v] && S.att && S.att.t === "inv" ? "#ff3b30" : "#333";
      const set = allume && (S.cmd || S.pre) && Math.floor(S.t / 5) % 2 ? "#34d058" : "#173d22";
      [["REV1", rev(1)], ["REV2", rev(2)], ["SET", set]].forEach(([n, c], i) => { h += `<rect x="${306 + i * 22 - 5}" y="${DY + 56}" width="10" height="12" rx="1.5" fill="${c}"/><text x="${306 + i * 22}" y="${DY + 79}" class="cabt" text-anchor="middle" font-size="5.5">${n}</text>`; });
      return h;
    },
    clic(A, k) { const v = A.par(k); A.regler(k, v === "ON" ? "OFF" : "ON"); A.rendre(); return M.reglageTexte(A, k); },
    reglageTexte(A, k) {
      const bk = k.slice(0, 2), n = +k.slice(2), it = A.C.parametres.groupes.flatMap(g => g.items).find(x => { const d = window.SIM && SIM.dipsDe(x.code); return d && d.banc === bk && d.n.includes(n); });
      if (!it) return `${bk} DIP ${n} : ${A.par(k) === "ON" ? "ON" : "OFF"}.`;
      const d = SIM.dipsDe(it.code), et = {}; d.n.forEach(i => et[bk + i] = A.par(bk + i) === "ON"); const [v, desc] = SIM.etiquette(it, d, et);
      return `<b>${bk} DIP ${n} sur ${A.par(k) === "ON" ? "ON" : "OFF"}</b> · ${A.esc(it.titre)} : ${v ? A.esc(desc || v) : "<i>combinaison non décrite par la notice</i>"}`;
    },
    touche(A, k) { return k + " : poussoir du menu de PROGRAMMATION (§ 7, 8 : apprentissage des temps, S2 DIP 10 ON). Non simulé : l'atelier utilise les temps par défaut du § 5."; },
    usineInfo(A, id) {
      if (id === "trim") return "<b>Trimmers P1 à P6</b> : force des moteurs 1 et 2, sensibilité à l'obstacle, vitesse de ralentissement (§ 4). Non simulés dans l'atelier.";
      if (id === "transfo") return "<b>Transformateur</b> de la carte : alimenté par 1 (neutre) et 2 (phase), obligatoirement dans cet ordre (§ 1). La LED LINEA s'allume quand la carte est alimentée.";
      return "<b>" + A.esc(M.usine[id].nom) + "</b> sur la carte. La notice ne précise pas ce que protège ce fusible : panne non simulée.";
    },
    feuille(A) {
      const gs = A.C.parametres.groupes.filter(g => /S[1-4]/.test(g.nom));
      const ligne = (x, d) => { const et = {}; d.n.forEach(i => et[d.banc + i] = A.par(d.banc + i) === "ON"); const [v, desc] = SIM.etiquette(x, d, et); return `<li><b>${A.esc(x.code)}</b> ${A.esc(x.titre)} : ${v ? A.esc(desc || v) : "<i>combinaison non décrite</i>"}</li>`; };
      const bancs = gs.map(g => { const items = g.items.map(x => [x, SIM.dipsDe(x.code)]).filter(([, d]) => d); if (!items.length) return ""; const bk = items[0][1].banc; const nb = Math.max(...items.flatMap(([, d]) => d.n));
        return `<h4 class="cabh">${A.esc(g.nom)}</h4><div class="cabdips">${Array.from({ length: nb }, (_, i) => i + 1).map(i => `<button class="cabdipb${A.par(bk + i) === "ON" ? " on" : ""}" onclick="CAB.clic('${bk}${i}');CAB.parametres()">${i}<small>${A.par(bk + i) === "ON" ? "ON" : "OFF"}</small></button>`).join("")}</div><ul class="plain cabdipl">${items.map(([x, d]) => ligne(x, d)).join("")}</ul>`; }).join("");
      return `<h3>Réglages de la carte</h3><p class="note">D'après la fiche (notice EQ2009 R1.0 § 4). Les positions à l'achat ne sont pas indiquées : l'atelier part de tous les dip-switch sur OFF. Pensez à S2 DIP 9 sur ON pour deux moteurs. Vous pouvez aussi toucher les dip-switch directement sur la carte.</p>${bancs}
        <p class="hotn">Temps utilisés : les temps par défaut de la notice (§ 5) : travail ${TRAVAIL} s par moteur, ouverture piéton ${PIET} s, décalage des vantaux ${DEC_O} s en ouverture et ${DEC_F} s en fermeture, pause ${PAUSE} s, pause piéton ${PAUSE_P} s. Seuls les moteurs sans encoder (S4 sur OFF · OFF) sont simulés.</p>
        <div class="sga"><button class="mini" onclick="CAB.usineParams()">Tout remettre sur OFF</button><button class="mini" onclick="CAB.fermer()">Fermer</button></div>`;
    },
    missions(A) {
      const acc = t => A.I.acc.filter(a => a.t === t);
      const pasAlim = R => R.carteOn ? "" : "La carte n'est pas alimentée : neutre sur 1, phase sur 2.";
      const ess = (pre, f) => A.avec(() => { A.S.secu = true; pre && pre(); }, f);
      const tousNF = R => { const manque = [["COS1", 15], ["COS2", 16], ["FOT1", 18], ["FOT2", 19], ["STOP", 25]].filter(([k]) => !R.ent[k]).map(([k, n]) => k + " (" + n + ")"); return manque; };
      return [
        { id: "e230", t: "Alimentation 230 V~", but: "Raccordez l'arrivée 230 V~ en respectant l'ordre imposé par la notice.", aide: () => "Neutre sur la borne 1, phase sur la borne 2 : c'est obligatoire (§ 1).", test: () => { const s = acc("sec")[0]; if (!s) return "Posez une arrivée 230 V~."; return ess(null, R => { if (R.def.d230) return "DANGER : du 230 V arrive sur une borne basse tension."; if (pasAlim(R)) return pasAlim(R); if (!R.T("b:1").has("N") || !R.T("b:2").has("L")) return "La carte est alimentée mais à l'envers : la notice impose le neutre sur 1 et la phase sur 2."; return ""; }); } },
        { id: "emot", t: "Deux moteurs", but: "Câblez les deux moteurs 230 V~ et réglez la carte pour deux vantaux.", aide: () => "Moteur 1 : ouvre 5, commun 6, ferme 7. Moteur 2 : ouvre 8, commun 9, ferme 10. S2 DIP 9 sur ON (§ 1, 4.1).", test: () => {
          const ms = acc("mot"); if (ms.length < 2) return "Posez deux moteurs (moteur 1 et moteur 2)."; if (!on(A, "S29")) return "S2 DIP 9 sur OFF : la carte ne commande qu'un moteur.";
          const o = ess(() => { A.S.rel1 = 1; A.S.rel2 = 1; }, R => R), f = ess(() => { A.S.rel1 = -1; A.S.rel2 = -1; }, R => R); if (pasAlim(o)) return pasAlim(o); if (o.def.d230) return "DANGER : du 230 V arrive sur une borne basse tension.";
          for (const m of ms) { const a = o.moteurs[m.id], b = f.moteurs[m.id]; if (a.sens === -1 && b.sens === 1) return "Le moteur " + m.num + " tourne à l'envers : inversez ses fils ouvre et ferme."; if (a.sens !== 1 || b.sens !== -1) return "Le moteur " + m.num + " n'est pas commandé correctement (ouvre / commun / ferme)."; }
          const o1 = ess(() => { A.S.rel1 = 1; A.S.rel2 = 0; }, R => R); const m1 = ms.find(m => m.num === 1); if (o1.moteurs[m1.id].sens !== 1) return "Le moteur 1 n'est pas sur les bornes 5-6-7 : la sortie moteur 1 commande un autre moteur."; return ""; } },
        { id: "efdc", t: "Fins de course", but: "Câblez les fins de course des deux moteurs sur la carte (pas sur la phase du moteur).", aide: () => "Commun sur 22. Moteur 1 : FCO 20, FCF 21. Moteur 2 : FCO 23, FCF 24 (§ 1).", test: () => {
          const fs = acc("fdc"); if (fs.length < 2) return "Posez les fins de course des moteurs 1 et 2."; const sv = JSON.stringify(A.S.posM || {});
          try { const t = (p1, p2) => ess(() => { A.S.posM = { 1: p1, 2: p2 }; }, R => R); const mi = t(50, 50), z = t(0, 0), c = t(100, 100); if (pasAlim(mi)) return pasAlim(mi);
            if (!mi.ent.FCO1 || !mi.ent.FCF1 || !mi.ent.FCO2 || !mi.ent.FCF2) return "Vantaux à mi-course, les quatre fins de course doivent être fermés sur le commun 22.";
            if (z.ent.FCF1 || z.ent.FCF2) return "Portail fermé, FCF 1 (21) et FCF 2 (24) devraient s'ouvrir : fins de course inversés ou mal raccordés."; if (c.ent.FCO1 || c.ent.FCO2) return "Portail ouvert, FCO 1 (20) et FCO 2 (23) devraient s'ouvrir.";
            const a = t(0, 50); if (a.ent.FCF1 || !a.ent.FCF2) return "Les fins de course du moteur 1 et du moteur 2 sont croisés."; return ""; } finally { A.S.posM = JSON.parse(sv); } } },
        { id: "eph", t: "Cellule 1", but: "Câblez une paire de cellules alimentée en 24 V~ sur l'entrée CELLULE 1.", aide: () => "Alimentation 24 V~ : 33 (0) et 34 (24 V). Contact du récepteur : C sur 17, NF sur 18 (§ 1).", test: () => {
          const rx = acc("rxc")[0]; if (!rx) return "Posez une paire de cellules."; const tx = A.I.acc.find(x => x.t === "txc" && x.paire === rx.paire); const r = ess(null, R => R); if (pasAlim(r)) return pasAlim(r);
          if (!r.alim[tx.id] || !r.alim[rx.id]) return "Les cellules ne sont pas alimentées en 24 V~ (33-34)."; if (!r.ent.FOT1) return "Faisceau libre, CELLULE 1 (18) devrait être fermée sur 17.";
          if (ess(() => { A.S.etat["p" + rx.paire] = { coupe: true }; }, R => R.ent.FOT1)) return "Faisceau coupé, CELLULE 1 reste fermée : un pont 17-18 est-il resté ?"; return ""; } },
        { id: "estart", t: "Bouton START", but: "Câblez un bouton START et réglez les entrées de commande en START / PIÉTON.", aide: () => "Contact NO entre 26 et 28, S1 DIP 3 sur ON (§ 1, 4).", test: () => {
          const b = acc("pp"); if (!b.length) return "Posez un bouton poussoir."; if (!on(A, "S13")) return "S1 DIP 3 sur OFF : 26 est l'entrée OUVRE, pas START."; let e = "";
          for (const a of b) { const r = ess(null, R => R), p = ess(() => { A.S.etat[a.id] = { on: true }; }, R => R); if (pasAlim(r)) return pasAlim(r); if (r.ent.START) { e = e || "START déjà fermé au repos."; continue; } if (!p.ent.START) { e = e || "Bouton appuyé, START (26) ne se ferme pas sur 28."; continue; } return ""; } return e; } },
        { id: "enf", t: "Entrées de sécurité", but: "Toutes les entrées NF doivent être fermées : un STOP sur 25, et les entrées non utilisées pontées sur leur commun, avec le contact de sécurité 37-38.", aide: () => "STOP NF entre 25 et 28. Pontez les entrées NF non utilisées : palpeuses 15 et 16 sur 14, cellule 2 (19) sur 17… et 37 avec 38 (§ 1 : « toute entrée N.F. non utilisée doit être court-circuitée »).", test: () => {
          const r = ess(null, R => R); if (pasAlim(r)) return pasAlim(r); const m = tousNF(r); if (m.length) return "Entrées NF encore ouvertes : " + m.join(", ") + "."; if (r.U.f("b:37") !== r.U.f("b:38")) return "Le contact de sécurité 37-38 est ouvert : les relais ne sont plus alimentés.";
          const sp = acc("stop")[0]; if (!sp) return "Posez un bouton STOP sur 25-28."; if (ess(() => { A.S.etat[sp.id] = { on: true }; }, R => R.ent.STOP)) return "STOP enfoncé, l'entrée 25 reste fermée : le bouton n'est pas sur 25-28 ou un pont est resté."; return ""; } },
        { id: "efla", t: "Clignotant 230 V~", but: "Câblez un clignotant 230 V~ : il s'allume pendant les manœuvres.", aide: () => "Clignotant sur 3 et 4 (§ 1). S2 DIP 8 : OFF sortie fixe, ON intermittente.", test: () => {
          const l = acc("fla")[0]; if (!l) return "Posez un clignotant 230 V~."; const o = ess(() => { A.S.lampe = 1; }, R => R), f = ess(() => { A.S.lampe = 0; }, R => R); if (pasAlim(o)) return pasAlim(o); if (o.def.d230) return "DANGER : 230 V sur une borne basse tension.";
          if (!o.alim[l.id]) return "Sortie clignotant active, la lampe n'est pas alimentée : elle va sur 3 et 4."; if (f.alim[l.id]) return "La lampe reste allumée à l'arrêt : elle n'est pas sur 3-4."; return ""; } },
        { id: "ecourt", t: "Lumière de courtoisie", but: "Câblez une lumière 230 V~ commandée par le contact propre 11-12.", aide: () => "L de l'arrivée 230 V~ sur 11, 12 vers la lumière, retour au neutre de l'arrivée (§ 1 ; extinction : S3 DIP 8).", test: () => {
          const l = acc("lum")[0]; if (!l) return "Posez une lumière 230 V~."; const o = ess(() => { A.S.court = 1; }, R => R), f = ess(() => { A.S.court = 0; }, R => R); if (pasAlim(o)) return pasAlim(o); if (o.def.d230 || f.def.d230) return "DANGER : 230 V sur une borne basse tension.";
          if (!o.alim[l.id]) return "Contact 11-12 fermé, la lumière ne s'allume pas."; if (f.alim[l.id]) return "La lumière reste allumée contact ouvert : elle ne passe pas par 11-12."; return ""; } },
        { id: "evoy", t: "Témoin portail ouvert", but: "Câblez un voyant 24 V sur la sortie témoin : éteint portail fermé, allumé portail ouvert.", aide: () => "Voyant 24 V~ entre 29 et 30 (§ 1).", test: () => {
          const v = acc("voy24")[0]; if (!v) return "Posez un voyant 24 V."; const o = ess(() => { A.S.temoin = 1; }, R => R), f = ess(() => { A.S.temoin = 0; }, R => R); if (pasAlim(o)) return pasAlim(o);
          if (!o.alim[v.id]) return "Portail ouvert, le voyant ne s'allume pas : il va sur 29 et 30."; if (f.alim[v.id]) return "Le voyant reste allumé portail fermé : il est sur une autre sortie 24 V."; return ""; } }
      ];
    }
  };
  (window.CABMOD = window.CABMOD || {}).eq2009 = M;
})();
