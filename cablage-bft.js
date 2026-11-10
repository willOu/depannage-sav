/* Atelier de câblage : cartes BFT MERAK (BT A, notice D814459), MERAK pour DEIMOS ULTRA (notice D811980) et THALIA BT A80 / A160 (notice D814283).
   Un seul moteur générique paramétré par carte. Tout vient des fiches de l'appli (bornier, paramètres, logiques, codes) et des notices :
   moteurs 24 V continu (+ / −), alimentation accessoires 50 (−), 51 (+), 52 (24 Vsafe +, seulement pendant la manœuvre),
   commandes IC 1 / IC 2 (commun 60), sécurités STOP / SAFE 1 / SAFE 2 (commun 70), sorties AUX.
   Ce que la notice ne décrit pas n'est pas simulé et l'écran le dit. */
(function () {
  const COURSE = 10; /* s : vitesse indicative du portail (non donnée par la notice) */
  const tiret = s => String(s).replace(/[–—]/g, "-");
  /* valeurs possibles d'un réglage : liste (0, 1, 2…) ou plage numérique (0-120) */
  function options(x, items, ref) {
    const out = [];
    (x.valeurs || []).forEach(([v, d]) => {
      const t = tiret(v).trim(), m = t.match(/^(\d+)\s*-\s*(\d+)$/), l = t.split(/\s*,\s*/).filter(u => /^\d+$/.test(u));
      if (m) { const a = +m[1], b = +m[2]; if (b - a > 20) { out.push({ plage: [a, b], d }); return; } for (let i = a; i <= b; i++) { const r = ref && items[ref] && options(items[ref], items).find(o => o.v === String(i)); out.push({ v: String(i), d: /^(Comme|Mêmes)/.test(d) && r ? r.d : d }); } }
      else if (l.length > 1) l.forEach(u => out.push({ v: u, d }));
      else if (/^\d+$/.test(t)) out.push({ v: t, d });
    });
    return out;
  }
  function fabrique(c) {
    const SRC = "Notice " + c.notice;
    const pos = DY => { const b = {}; c.blocs.forEach(k => k.ns.forEach(([n, lab], i) => { b["b:" + n] = { x: k.x + i * k.pas, y: DY + k.y, lab, n: String(n), dessus: k.haut }; })); return b; };
    let ITEMS = null, REF = {};
    const items = A => { if (!ITEMS || ITEMS._c !== A.C.id) { ITEMS = { _c: A.C.id }; A.C.parametres.groupes.forEach(g => g.items.forEach(x => ITEMS[x.code] = x)); } return ITEMS; };
    const pv = (A, key) => { const code = c.P[key]; if (!code) return null; const v = A.par(code); if (v != null) return v; const x = items(A)[code]; return x && /^\d+$/.test(String(x.def)) ? String(x.def) : null; };
    const pn = (A, key, d) => { const v = pv(A, key); return v == null ? d : +v; };
    const nbMot = A => c.deux ? (pn(A, "nmot", 2) === 1 ? 1 : 2) : 1;
    const M = {
      nom: c.nom, fig: c.fig, notes: c.notes,
      K: c.K, coms: c.coms, entrees: c.entrees, ponts: c.ponts,
      bornes230: ["b:L", "b:N"], texte230: "bornes L et N", texte230Long: "Le 230 V ne va que sur L et N ; le moteur et les sorties de la carte sont en 24 V.", source230: SRC,
      texteCC: "Court-circuit sur l'alimentation des accessoires (24 V) : la sortie est coupée (la notice cite ERF4 « surcharge sur la sortie d'alimentation des auxiliaires »). Coupez le secteur, corrigez le câblage, puis touchez le fusible F3 sur la carte pour rétablir.",
      biblio: ["mdc", "cell", "pp", "cle", "stop", "bnf", "b8k", "lam", "voy", "sec", "pont"],
      radio: c.radio, usine: c.usine,
      bornes: pos,
      paramOk: (k, v) => /^\d{1,3}$/.test(String(v)),
      alimentee: T => (T("b:L").has("L") && T("b:N").has("N")) || (T("b:L").has("N") && T("b:N").has("L")),
      sources(A, on) {
        const S = A.S, tags = [], liens = [];
        if (!on) return { tags, liens };
        if (S.f3 && !S.veille) tags.push(["b:" + c.T.p24, "+24"]);
        if (S.f3 && (S.cmd || S.pre)) tags.push(["b:" + c.T.safe, "+24"]); /* 24 Vsafe : seulement pendant la manœuvre */
        if (S.f3 && S.aux1) tags.push(["b:" + c.T.aux1, "LAM"]);
        if (S.aux2) liens.push(["b:" + c.T.aux2[0], "b:" + c.T.aux2[1]]);
        c.mot.forEach(([p, q], i) => { tags.push(["b:" + p, (i + 1) + "A"]); tags.push(["b:" + q, (i + 1) + "B"]); });
        return { tags, liens };
      },
      tick(A, R) {
        const S = A.S, E = R.ent, on = R.carteOn, n = nbMot(A);
        S.posM = S.posM || { 1: 0, 2: 0 }; S.mv = { 1: 0, 2: 0 }; S.mvDir = {};
        if (R.def.ccMot && on && !S.ccM) { S.ccM = 1; S.cmd = 0; S.pre = 0; A.dit("Court-circuit sur la sortie moteur : la notice ne décrit pas la réaction de la carte. L'atelier arrête le moteur.", SRC, true); }
        if (!R.def.ccMot) S.ccM = 0;
        if (!on) { S.cmd = 0; S.pre = 0; S.aux1 = 0; S.aux2 = 0; S.prec = {}; S.diag = ""; return; }
        const radio = S.radio || {};
        /* entrées : NF fermé = au repos ; bord 8k2 (SAFE = 8, 11, 14) lu en ohms */
        const safeT = k => pn(A, k, k === "safe1" ? 0 : 6);
        const ok8 = (nom, t) => [8, 11, 14].includes(t) ? R.ohm[nom] > 6500 && R.ohm[nom] < 10000 : E[nom];
        const s1 = safeT("safe1"), s2 = safeT("safe2"), ok = { STOP: E.STOP, SAFE1: ok8("SAFE1", s1), SAFE2: ok8("SAFE2", s2) };
        /* commandes : IC 1 / IC 2 et canaux radio selon leurs logiques */
        const fn = { 0: "STRE", 1: "STRI", 2: "OPEN", 3: "CLS", 4: "PED", 5: "TIME", 6: "TIMP" };
        const cmd = {}; [["IC1", "ic1", 0], ["IC2", "ic2", 4]].forEach(([e, k, d]) => { if (E[e]) cmd[fn[pn(A, k, d)]] = true; });
        const fr = { 0: "STRE", 1: "STRI", 2: "OPEN", 3: "CLS", 4: "PED", 5: "STOPR" };
        if (c.P.ch1) [["PR1", "ch1", 0], ["PR2", "ch2", c.ch2def]].forEach(([r, k, d]) => { if (radio[r]) { const f = fr[pn(A, k, d)]; if (f) cmd[f] = true; else if (!S.prec["n" + r]) A.dit("Canal radio réglé sur " + pv(A, k) + " (sortie AUX ou lumière) : non simulé.", "Paramètre " + c.P[k]); } });
        S.lu = { ok, E, cmd };
        const front = k => cmd[k] && !S.prec[k];
        const hm = pn(A, "hm", 0);
        const ferme = () => S.posM[1] === 0 && S.posM[2] === 0, ouvert = () => S.etat2 === "ouvert" || S.etat2 === "pieton";
        const lancer = (d, ped, txt, imm) => { if (c.P.type && d && ![3, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].includes(pn(A, "type", 0)) && !(pn(A, "type", 0) > 15)) { if (!S.typeNd) { S.typeNd = 1; A.dit("TYPE DE MOTEUR sur " + pn(A, "type", 0) + " : " + (pn(A, "type", 0) ? "type non géré" : "moteurs non actifs") + ", rien ne bouge. Réglez le type de moteur (Paramètres).", "Paramètre TYPE DE MOTEUR (usine 0)"); } return; } S.typeNd = 0; const pa = c.preal ? c.preal(pn(A, "preal", 0)) : pn(A, "preal", 0); S.cmd = d; S.ped = !!ped; S.pre = S.cmd && !hm && !imm ? pa * 10 : 0; S.t0 = 0; S.m = { 1: { fin: false }, 2: { fin: n < 2 || (ped && c.pedM1 && d > 0) } }; S.att = null; S.pause = 0; S.etat2 = d > 0 ? "ouverture" : "fermeture"; S.veille = 0; S.idle = 0; S.dem = 3; if (txt) A.dit(txt, SRC + (pa ? " (préalarme " + pa + " s)" : "")); };
        const arreter = (txt, src) => { if (S.cmd) S.dernier = S.cmd; S.cmd = 0; S.pre = 0; S.att = null; S.etat2 = "arrete"; if (txt) A.dit(txt, src || SRC); };
        /* STOP */
        if (!ok.STOP) { if (S.cmd || S.pre) arreter("STOP (71) ouvert : la manœuvre s'arrête.", SRC + ", bornier STOP"); }
        else if (hm === 1) { /* homme mort : 61 = OPEN UP, 62 = CLOSE UP, sécurités non actives */
          const d = E.IC1 ? 1 : E.IC2 ? -1 : 0;
          if (d && S.cmd !== d && !(d > 0 && S.etat2 === "ouvert") && !(d < 0 && ferme())) { lancer(d, false, "Homme mort : " + (d > 0 ? "OPEN UP (61) maintenu, ouverture" : "CLOSE UP (62) maintenu, fermeture") + ". Les sécurités ne sont pas actives (notice)."); S.pre = 0; }
          if (!d && S.cmd) arreter("");
        } else {
          if (hm >= 2 && !S.hmNd) { S.hmNd = 1; A.dit("Homme mort " + hm + " : non simulé, fonctionnement à impulsions.", "Paramètre " + c.P.hm); }
          const pas = pn(A, "pas", 0), blo = pn(A, "blo", 0), blt = pn(A, "blt", 0), blf = pn(A, "blf", 0);
          const impulsion = (ped, nom) => {
            if (S.cmd > 0 && blo) { A.dit(nom + " ignoré pendant l'ouverture (blocage des impulsions à l'ouverture).", "Paramètre " + c.P.blo); return; }
            if (S.cmd < 0 && blf) { A.dit(nom + " ignoré pendant la fermeture (blocage des impulsions à la fermeture).", "Paramètre " + c.P.blf); return; }
            if (!S.cmd && ouvert() && blt && pn(A, "tcal", 0)) { A.dit(nom + " ignoré pendant la pause TCA (blocage des impulsions en pause).", "Paramètre " + c.P.blt); return; }
            const L = pas === 2 ? "2 pas" : pas === 1 ? "3 pas" : "4 pas";
            if (S.cmd < 0) { if (pas === 0) arreter(nom + " pendant la fermeture : STOP (" + L + ")."); else lancer(1, ped, nom + " pendant la fermeture : réouverture (" + L + ")."); }
            else if (S.cmd > 0) { if (pas === 2) lancer(-1, ped, nom + " pendant l'ouverture : fermeture (" + L + ")."); else { arreter(nom + " pendant l'ouverture : STOP + TCA (" + L + ")."); S.etat2 = "stopTca"; } }
            else if (ferme()) lancer(1, ped, nom + " : ouverture" + (ped ? " piétonne" : "") + ".");
            else if (S.etat2 === "arrete") lancer(1, ped, nom + " après un stop : ouverture (" + L + ").");
            else lancer(-1, ped, nom + " : fermeture (" + L + ").");
          };
          if (front("STRE") || front("STRI")) impulsion(false, front("STRE") ? "START E" : "START I");
          if (front("PED")) impulsion(true, "PED");
          if (front("OPEN") && S.cmd <= 0 && !(ouvert() && !S.ped)) lancer(1, false, "OPEN : ouverture.");
          if (front("CLS") && S.cmd >= 0 && !ferme()) lancer(-1, false, "CLOSE : fermeture.");
          if (front("STOPR")) arreter("Télécommande : STOP.");
          if ((front("TIME") || front("TIMP")) && !S.timNd) { S.timNd = 1; A.dit("Entrée TIMER / TIMER PED : non simulée.", SRC); }
        }
        /* sécurités pendant le mouvement (pas en homme mort 1) */
        if (S.dem > 0) S.dem--; /* au départ, la carte alimente 51 et 52 avant de lire les sécurités */
        if (hm !== 1 && (S.cmd || S.pre) && !S.dem) {
          [["SAFE1", s1], ["SAFE2", s2]].forEach(([k, t]) => {
            if (ok[k] || !(S.cmd || S.pre) || (S.att && S.att.k === k)) return;
            const d = S.cmd, nom = k === "SAFE1" ? "SAFE 1" : "SAFE 2";
            const photoOuv = [0, 1, 2, 3].includes(t), photoFer = [0, 1, 4, 5].includes(t), bar = [6, 7, 8].includes(t), barO = [9, 10, 11].includes(t), barC = [12, 13, 14].includes(t);
            if (d > 0 && photoOuv) { S.att = { k, t: "bloque", d: 1 }; A.dit(nom + " (photocellule) occultée pendant l'ouverture : le mouvement est bloqué tant qu'elle est occultée." + (t < 2 ? " Pour PHOT, la notice dit seulement qu'elle est active aussi à l'ouverture : comportement repris de PHOT OP." : ""), SRC + ", logique SAFE = " + t); }
            else if (d < 0 && (t === 0 || t === 1)) { S.att = { k, t: "inverse", d: 1 }; A.dit(nom + " (PHOT) occultée pendant la fermeture : arrêt, puis réouverture quand elle est dégagée.", SRC + ", logique SAFE = " + t); }
            else if (d < 0 && (t === 4 || t === 5)) lancer(1, S.ped, nom + " (PHOT CL) occultée pendant la fermeture : inversion immédiate.", null, true);
            else if (bar || (barO && d > 0) || (barC && d < 0)) { S.att = { k, t: "bar", n: 20 }; S.cmd = -d; S.pre = 0; S.m = { 1: { fin: false }, 2: { fin: n < 2 } }; A.dit(nom + " (bord sensible) actionné : inversion du mouvement pendant 2 s.", SRC + ", logique SAFE = " + t); }
            else if (barO || barC) arreter(nom + " (bord sensible) actionné : arrêt (inversion seulement " + (barO ? "à l'ouverture" : "à la fermeture") + ").", SRC + ", logique SAFE = " + t);
          });
        }
        if (S.att && S.att.t === "bloque") { if (ok[S.att.k]) { S.att = null; A.dit("Photocellule dégagée : l'ouverture reprend."); } }
        if (S.att && S.att.t === "inverse") { if (ok[S.att.k]) { S.att = null; lancer(1, S.ped, "Photocellule dégagée : réouverture.", null, true); } }
        if (S.att && S.att.t === "bar") { S.att.n--; if (S.att.n <= 0) { S.att = null; arreter(""); } }
        /* manœuvre : préalarme, puis moteur(s) ; 2 moteurs : retard du 2 à l'ouverture, du 1 à la fermeture */
        const bloque = S.att && (S.att.t === "bloque" || S.att.t === "inverse");
        if (S.cmd && S.pre > 0) S.pre--;
        else if (S.cmd && !bloque) {
          S.t0++;
          const d = S.cmd, part = S.ped ? pn(A, "part", c.partDef) : 100;
          const retard = v => n < 2 ? 0 : (d > 0 ? (v === 2 ? pn(A, "rouv", 0) : 0) : (v === 1 ? pn(A, "rfer", 0) : 0)) * 10;
          const inv = c.P.dir && pn(A, "dir", 0) === 1 ? -1 : 1;
          for (let v = 1; v <= n; v++) {
            S.m = S.m || { 1: { fin: false }, 2: { fin: n < 2 } }; const m = S.m[v]; if (m.fin) continue;
            const but = d > 0 ? (v === 1 || !S.ped || !c.pedM1 ? part : 0) : 0;
            if (d > 0 ? S.posM[v] >= but : S.posM[v] <= 0) { m.fin = true; continue; }
            if (S.t0 <= retard(v)) continue;
            const a = A.I.acc.find(x => x.t === "mdc" && R.moteurs[x.id] && R.moteurs[x.id].ok && R.moteurs[x.id].sortie === v);
            if (!a) { if (!S.sansM) { S.sansM = 1; A.dit("Moteur " + v + " non raccordé (bornes " + c.mot[v - 1].join("-") + ") : le vantail ne bouge pas. La notice ne donne pas de code pour ce cas.", SRC); } m.fin = true; continue; }
            const sens = R.moteurs[a.id].sens * inv * d; S.mv[v] = 1; S.mvDir[v] = d * inv;
            if (sens !== d) { if ((sens < 0 && S.posM[v] <= 0) || (sens > 0 && S.posM[v] >= 100)) { arreter("Le vantail part dans le mauvais sens et bute : arrêt. " + c.sensTxt + " La réaction exacte de la carte n'est pas décrite par la notice.", SRC); break; } }
            S.posM[v] = Math.max(0, Math.min(100, S.posM[v] + sens));
          }
          if (S.cmd && S.m[1].fin && (n < 2 || S.m[2].fin)) { S.dernier = d; S.cmd = 0; S.etat2 = d > 0 ? (S.ped ? "pieton" : "ouvert") : "ferme"; S.pause = 0; S.sansM = 0; A.dit(d > 0 ? (S.ped ? "Ouverture piétonne terminée." : "Ouverture terminée.") : "Fermeture terminée.", SRC + " (fins de course non simulés : arrêt en fin de course théorique)"); }
        }
        S.pos = Math.max(S.posM[1], n > 1 ? S.posM[2] : 0);
        /* fermeture automatique (logique TCA) et fermeture rapide */
        const tcaOn = pn(A, "tcal", 0) === 1;
        if (hm !== 1 && !S.cmd && !S.att && ok.STOP && tcaOn && !cmd.OPEN && (ouvert() || S.etat2 === "stopTca")) {
          const pt = S.etat2 === "pieton" && c.P.pedtca && pn(A, "pedtca", 0) ? pn(A, "pedtca", 0) : pn(A, "tca", 10);
          S.pause++; if (S.pause >= pt * 10) lancer(-1, S.etat2 === "pieton", "Fin du TCA (" + pt + " s) : fermeture automatique.");
        }
        /* sorties AUX (logiques simulées : 1 SCA, 3 lumière de zone, 6 clignotant) */
        const fAux = (v, def) => { const f = pn(A, v, def), mouv = !!(S.cmd || S.pre); return f === 6 || f === 3 ? mouv : f === 1 ? (S.cmd > 0 || (S.cmd < 0 ? Math.floor(S.t / 3) % 2 : S.pos > 0)) : 0; };
        S.aux1 = fAux("aux1", 6) ? 1 : 0; S.aux2 = fAux("aux2", 0) ? 1 : 0;
        /* Power Down : accessoires (50-51) coupés 10 s après l'arrêt du moteur */
        S.idle = S.cmd || S.pre ? 0 : (S.idle || 0) + 1;
        const ps = c.P.psave ? pn(A, "psave", 1) : 0;
        if (ps && S.idle > 100 && !S.veille) S.veille = 1; if (!ps || S.cmd || S.pre) S.veille = 0;
        if (S.veille && Object.values(cmd).some(Boolean)) { S.veille = 0; S.idle = 0; }
        /* diagnostic de l'afficheur */
        const dg = !ok.STOP ? "STOP" : (S.cmd || S.pre) && !ok.SAFE1 ? M.nomSafe(s1) : (S.cmd || S.pre) && !ok.SAFE2 ? M.nomSafe(s2) : cmd.STRE ? "STRE" : cmd.STRI ? "STRI" : cmd.OPEN ? "OPEN" : cmd.CLS ? "CLS" : cmd.PED ? "PED" : cmd.TIME || cmd.TIMP ? "TIME" : "";
        S.diag = (c.codes || {})[dg] || dg; if (!S.f3) S.diag = c.codeF4 || "ERF4"; S.dir = S.cmd || 0; /* pour l'état affiché au-dessus du portail */
        S.prec = Object.assign({}, cmd, { nPR1: radio.PR1, nPR2: radio.PR2 });
      },
      nomSafe: t => [0, 1].includes(t) ? "PHOT" : [2, 3].includes(t) ? "PHOP" : [4, 5].includes(t) ? "PHCL" : [9, 10, 11].includes(t) ? "BARO" : [12, 13, 14].includes(t) ? "BARC" : "BAR",
      portail(A) {
        if (c.deux) return `<g id="cabportail"><rect x="20" y="58" width="350" height="5" rx="2" fill="#333"/><rect x="40" y="18" width="10" height="46" fill="#555"/><rect x="340" y="18" width="10" height="46" fill="#555"/>
          <rect id="cabv1" x="50" y="26" width="145" height="28" rx="2" fill="none" stroke="#bbb" stroke-width="2.5"/><rect id="cabv2" x="195" y="26" width="145" height="28" rx="2" fill="none" stroke="#bbb" stroke-width="2.5"/>
          <text id="cabetat" x="195" y="12" text-anchor="middle" class="cabn"></text><text id="cabv1t" x="52" y="12" class="cabs">vantail 1</text><text id="cabv2t" x="338" y="12" class="cabs" text-anchor="end">vantail 2</text></g>`;
        return `<g id="cabportail"><rect x="20" y="58" width="350" height="7" rx="3" fill="#333"/><rect x="34" y="20" width="8" height="44" fill="#555"/><rect x="200" y="20" width="8" height="44" fill="#555"/>
          <g id="cabvantail"><rect x="42" y="24" width="158" height="32" rx="2" fill="none" stroke="#bbb" stroke-width="2.5"/>${[1, 2, 3, 4, 5, 6, 7].map(i => `<line x1="${42 + i * 20}" y1="26" x2="${42 + i * 20}" y2="54" stroke="#888" stroke-width="2"/>`).join("")}</g>
          <text id="cabetat" x="372" y="16" text-anchor="end" class="cabn"></text></g>`;
      },
      majPortail(A) {
        const S = A.S, p = S.posM || { 1: 0, 2: 0 }, e = document.getElementById("cabetat");
        if (c.deux) { const n = nbMot(A); [1, 2].forEach(k => { const w = Math.max(6, 145 * Math.cos(p[k] / 100 * Math.PI / 2.2)), r = document.getElementById("cabv" + k), t = document.getElementById("cabv" + k + "t"); if (r) { r.setAttribute("width", w.toFixed(1)); if (k === 2) r.setAttribute("x", (340 - w).toFixed(1)); r.setAttribute("opacity", k === 2 && n === 1 ? .25 : 1); } if (t) t.textContent = k === 2 && n === 1 ? "pas de vantail 2" : "vantail " + k + " · " + p[k] + " %"; }); }
        else { const v = document.getElementById("cabvantail"); if (v) v.setAttribute("transform", `translate(${p[1] * 1.6} 0)`); }
        if (e) e.textContent = !S.secteur ? "hors tension" : S.hs ? "carte détruite" : S.pre ? "préalarme" : S.cmd > 0 ? "ouverture" : S.cmd < 0 ? "fermeture" : S.etat2 === "ferme" || (p[1] === 0 && p[2] === 0) ? "fermé" : S.etat2 === "ouvert" ? "ouvert" : S.etat2 === "pieton" ? "ouvert (piéton)" : "arrêté";
      },
      dessin(A) {
        const { DY, esc } = A, g = [], B = A.BORNES, GR = "#5b605d";
        const T = (x, y, t, o = "") => g.push(`<text x="${x}" y="${y}" ${o}>${esc(t)}</text>`);
        g.push(`<rect x="10" y="${DY}" width="370" height="${c.hauteur}" rx="10" fill="#1d3557" stroke="#3a5a86"/>`);
        T(20, DY + 16, c.nom, 'class="cabt" fill="#a8c8f0" font-size="11"');
        c.blocs.forEach(k => { const p = k.ns.map(([nn]) => B["b:" + nn]); const x0 = Math.min(...p.map(q => q.x)) - 10, y0 = Math.min(...p.map(q => q.y)) - 10, x1 = Math.max(...p.map(q => q.x)) + 10, y1 = Math.max(...p.map(q => q.y)) + 10;
          g.push(`<rect x="${x0}" y="${y0}" width="${x1 - x0}" height="${y1 - y0}" rx="3" fill="#3fae5a" stroke="#1f7a36"/>`);
          p.forEach(q => { g.push(`<rect x="${q.x - 7}" y="${q.y - 7}" width="14" height="14" rx="2" fill="#d9efe0" stroke="#1f7a36"/><circle class="cabb" data-b="b:${q.n}" cx="${q.x}" cy="${q.y}" r="4" fill="#8f9a95"/>`);
            if (k.haut) { T(q.x, q.y - 22, q.n, 'class="cabt" text-anchor="middle" font-size="9" font-weight="800" fill="#fff"'); T(q.x, q.y - 13, q.lab, 'class="cabt" text-anchor="middle" font-size="6" fill="#cfe3ff"'); }
            else { const i = k.ns.findIndex(u => String(u[0]) === q.n), dense = k.pas <= 22 && k.ns.length > 6; T(q.x, q.y + 20, q.n, 'class="cabt" text-anchor="middle" font-size="9" font-weight="800" fill="#fff"'); if (q.lab !== q.n) T(q.x, q.y + 29 + (dense && i % 2 ? 8 : 0), q.lab, 'class="cabt" text-anchor="middle" font-size="5" fill="#cfe3ff"'); } });
          if (k.titre) T((x0 + x1) / 2, k.haut ? y0 - 26 : y1 + 30, k.titre, 'class="cabt" text-anchor="middle" font-size="6.5" fill="#a8c8f0"'); });
        g.push(`<g id="cabaff"></g>`);
        const [ax, ay] = c.aff;
        g.push(`<rect x="${ax}" y="${DY + ay}" width="86" height="30" rx="3" fill="#111"/>`);
        [["+", "pl", 0], ["−", "mo", 1], ["OK", "ok", 2]].forEach(([nn, k, i]) => g.push(`<g class="cabk" data-k="${k}"><rect x="${ax + 100}" y="${DY + ay - 6 + i * 18}" width="14" height="14" rx="2" fill="#e9e9e9"/><circle cx="${ax + 107}" cy="${DY + ay + 1 + i * 18}" r="4" fill="#555"/><text x="${ax + 120}" y="${DY + ay + 4 + i * 18}" class="cabt" font-size="7">${nn}</text></g>`));
        c.us.forEach(([id, x, y, w, h, lab]) => g.push(`<g class="cabu" data-u="${id}"><rect x="${x}" y="${DY + y}" width="${w}" height="${h}" rx="2" fill="${id === "f3" && !A.S.f3 ? "#5a1e1e" : /^f\d$/.test(id) ? "#e8c33a" : GR}"/><text x="${lab.length * 3.4 / 2 > x + w / 2 - 12 ? 14 : x + w / 2}" y="${DY + y + h + 9}" class="cabt" text-anchor="${lab.length * 3.4 / 2 > x + w / 2 - 12 ? "start" : "middle"}" font-size="6.5">${lab}</text></g>`));
        return g.join("");
      },
      voyants(A) {
        const S = A.S, R = S.R || {}, on = R.carteOn, [ax, ay] = c.aff, y = A.DY + ay;
        const t = !on ? "" : S.diag || (S.veille ? "   ." : "");
        return `<text x="${ax + 43}" y="${y + 22}" text-anchor="middle" class="cabcode">${A.esc(t)}</text>`;
      },
      clic() { return ""; },
      touche(A, k) {
        const S = A.S; if (!S.R || !S.R.carteOn) return "Carte hors tension.";
        if (k === "ok") return "OK : menus de la carte (simplifié, avancé). Non simulés dans l'atelier : réglez les paramètres et logiques avec « ⚙ Paramètres ».";
        if (S.cmd || S.pre) { S.cmd = 0; S.pre = 0; S.etat2 = "arrete"; return "Touche " + (k === "pl" ? "+" : "−") + " pendant la manœuvre : STOP (afficheur éteint : + = OPEN / STOP, − = CLOSE / STOP)."; }
        S.prec = S.prec || {}; const d = k === "pl" ? 1 : -1;
        if (c.P.type && ![3, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].includes(pn(A, "type", 0))) return "TYPE DE MOTEUR non réglé (ou non géré) : les moteurs ne sont pas actifs.";
        S.cmd = d; S.ped = false; S.pre = 0; S.t0 = 0; S.m = { 1: { fin: false }, 2: { fin: nbMot(A) < 2 } }; S.etat2 = d > 0 ? "ouverture" : "fermeture"; S.veille = 0; S.idle = 0;
        return "Touche " + (k === "pl" ? "+ : OPEN" : "− : CLOSE") + " (afficheur éteint, appui de moins de 2 s, fiche).";
      },
      usineInfo(A, id) {
        const u = c.usine[id]; if (!u) return null;
        if (id === "f3") return "<b>" + A.esc(u.nom) + "</b>. " + (A.S.f3 ? "" : "Sortie accessoires coupée par un court-circuit : <button class=\"mini\" onclick=\"CAB.f3()\">Rétablir</button> (secteur coupé).");
        return "<b>" + A.esc(u.nom) + "</b> : câblé en usine." + (u.txt ? " " + A.esc(u.txt) : "");
      },
      feuille(A) {
        const IT = items(A), ligne = key => { const code = c.P[key]; const x = IT[code]; if (!x) return ""; const o = options(x, IT, c.ref[code]), v = pv(A, key) || "", def = String(x.def);
          const pl = o.find(z => z.plage), sel = pl ? `<input type="number" min="${pl.plage[0]}" max="${pl.plage[1]}" value="${A.esc(v)}" onchange="this.value=Math.min(${pl.plage[1]},Math.max(${pl.plage[0]},Math.round(+this.value)||${pl.plage[0]}));CAB.param('${A.esc(code)}', this.value);CAB.parametres()" style="width:90px">` : `<select onchange="CAB.param('${A.esc(code)}', this.value);CAB.parametres()">${o.map(z => `<option value="${A.esc(z.v)}"${z.v === v ? " selected" : ""}>${A.esc(z.v)}${z.v === def ? " (usine)" : ""} · ${A.esc((z.d || "").slice(0, 48))}</option>`).join("")}</select>`;
          return `<label><b>${A.esc(code)}</b> ${A.esc(x.titre)}${pl ? ` <small>(${pl.plage[0]} à ${pl.plage[1]}, usine ${A.esc(def)})</small>` : ""}${sel}</label>`; };
        const actifs = Object.keys(c.P).filter(k => IT[c.P[k]]).map(ligne).join("");
        return `<h3>Paramètres et logiques</h3><p class="note">D'après la fiche (${A.esc(SRC)}). Les menus de la carte (touches + − OK) ne sont pas simulés : réglez ici.</p><h4 class="cabh">Réglages qui agissent dans l'atelier</h4><div class="cabpar">${actifs}</div>
          <p class="hotn">${A.esc(c.nonSimules)}</p><div class="sga"><button class="mini" onclick="CAB.usineParams()">Réglages usine</button><button class="mini" onclick="CAB.fermer()">Fermer</button></div>`;
      },
      missions(A) {
        const acc = t => A.I.acc.filter(a => a.t === t), T = c.T;
        const pasAlim = R => R.carteOn ? "" : "La carte n'est pas alimentée : phase et neutre de l'arrivée 230 V~ sur L et N.";
        const ess = (pre, f) => A.avec(() => { A.S.veille = 0; pre && pre(); }, f);
        const L = [
          { id: "b230", t: "Alimentation 230 V~", but: "Raccordez l'arrivée 230 V~ à la carte.", aide: () => "Phase et neutre sur L et N (" + SRC + ").", test: () => { if (!acc("sec").length) return "Posez une arrivée 230 V~."; return ess(null, R => R.def.d230 ? "DANGER : du 230 V arrive sur une borne basse tension." : pasAlim(R)); } },
          { id: "bmot", t: c.deux ? "Moteurs 24 V" : "Moteur 24 V", but: "Câblez " + (c.deux ? "les moteurs : moteur 1 (vantail 1) sur " + c.mot[0].join("-") + ", moteur 2 sur " + c.mot[1].join("-") : "le moteur sur " + c.mot[0].join("-")) + " ; le portail doit s'ouvrir dans le bon sens.", aide: () => "Fil + du moteur sur " + c.mot.map(m => m[0]).join(" / ") + ", fil − sur " + c.mot.map(m => m[1]).join(" / ") + " (dans l'atelier, ce sens ouvre). " + c.sensTxt, test: () => {
            const n = nbMot(A), R = ess(null, R => R); if (pasAlim(R)) return pasAlim(R); if (R.def.ccMot) return "Court-circuit sur une sortie moteur.";
            if (c.P.type && ![3, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].includes(pn(A, "type", 0))) return "Câblage à vérifier, mais TYPE DE MOTEUR n'est pas réglé (0 = moteurs non actifs) : réglez-le dans Paramètres.";
            for (let v = 1; v <= n; v++) { const a = A.I.acc.find(x => x.t === "mdc" && x.num === v); if (!a) return "Posez le moteur " + v + "."; const m = R.moteurs[a.id]; if (!m || !m.ok) return "Moteur " + v + " : " + (m && m.err ? m.err : "non raccordé") + "."; if (m.sortie !== v) return "Le moteur " + v + " est sur la sortie du moteur " + m.sortie + "."; if (m.sens * (c.P.dir && pn(A, "dir", 0) === 1 ? -1 : 1) < 0) return "Le moteur " + v + " partirait à l'envers. " + c.sensTxt; }
            return ""; } },
          { id: "bph", t: "Photocellules sur SAFE 1", but: "Câblez une paire de cellules sur SAFE 1 (72), émetteur sur le 24 Vsafe.", aide: () => "Photocellule non vérifiée (SAFE 1 = 0, fig. C de la notice) : TX et RX + sur 51, − sur 50 ; contact du RX : C sur 70, NF sur 72. Retirez le pont 70-72. Le 24 Vsafe (" + T.safe + ") sert aux photocellules vérifiées (SAFE 1 = 1, 3, 5).", test: () => {
            const rx = acc("rx")[0]; if (!rx) return "Posez une paire de cellules."; const tx = A.I.acc.find(x => x.t === "tx" && x.paire === rx.paire); if (pn(A, "safe1", 0) > 5) return "SAFE 1 n'est pas réglée en photocellule.";
            const v1 = pn(A, "safe1", 0), r = ess(() => { A.S.cmd = 1; }, R => R), r0 = ess(null, R => R); if (pasAlim(r)) return pasAlim(r);
            if (!r.alim[tx.id]) return "L'émetteur TX n'est pas alimenté : + sur 51 (ou " + T.safe + " pour une photocellule vérifiée), − sur 50.";
            if (!r0.alim[tx.id] && [0, 2, 4].includes(v1)) return "TX sur le 24 Vsafe (" + T.safe + ") avec SAFE 1 = " + v1 + " (non vérifiée) : la notice met ce TX sur 51 (fig. C). Le 24 Vsafe est pour SAFE 1 = 1, 3 ou 5 (fig. D)."; if (!r.alim[rx.id]) return "Le récepteur RX n'est pas alimenté (+ 51, − 50).";
            if (!r.ent.SAFE1) return "Faisceau libre, SAFE 1 (72) devrait être fermée sur 70 : C du RX sur 70, NF sur 72.";
            if (ess(() => { A.S.cmd = 1; A.S.etat["p" + rx.paire] = { coupe: true }; }, R => R.ent.SAFE1)) return "Faisceau coupé, SAFE 1 reste fermée : le pont 70-72 est-il encore en place ?"; return ""; } },
          { id: "bstart", t: "Bouton START sur IC 1", but: "Câblez un bouton poussoir sur l'entrée IC 1 (START E d'usine).", aide: () => "Contact NO entre 61 et 60 (COM IC).", test: () => {
            const b = acc("pp"); if (!b.length) return "Posez un bouton poussoir."; let e = "";
            for (const a of b) { const r = ess(null, R => R), p = ess(() => { A.S.etat[a.id] = { on: true }; }, R => R); if (pasAlim(r)) return pasAlim(r); if (r.ent.IC1) { e = e || "IC 1 est déjà fermée au repos."; continue; } if (!p.ent.IC1) { e = e || "Bouton appuyé, IC 1 (61) ne se ferme pas sur 60."; continue; } return ""; } return e; } },
          { id: "bstop", t: "Bouton STOP", but: "Remplacez le pont d'usine 70-71 par un bouton STOP (NF).", aide: () => "Retirez le pont 70-71, bouton NF entre 71 et 70.", test: () => {
            const b = acc("stop")[0]; if (!b) return "Posez un bouton STOP."; const r = ess(null, R => R), p = ess(() => { A.S.etat[b.id] = { on: true }; }, R => R); if (pasAlim(r)) return pasAlim(r);
            if (!r.ent.STOP) return "Au repos, STOP (71) doit être fermé sur 70."; if (p.ent.STOP) return "STOP enfoncé, l'entrée reste fermée : le pont 70-71 est-il resté ?"; return ""; } },
          { id: "bbar", t: "Bord sensible sur SAFE 2", but: "Câblez un bord sensible NF sur SAFE 2 (" + T.safe2 + "), réglée en bord (BAR) d'usine.", aide: () => "Bord NF entre " + T.safe2 + " et 70, pont 70-" + T.safe2 + " retiré, SAFE 2 sur 6 (BAR).", test: () => {
            const b = acc("bnf")[0]; if (!b) return "Posez un bord sensible NF."; if (![6, 7, 9, 10, 12, 13].includes(pn(A, "safe2", 6))) return "SAFE 2 n'est pas réglée en bord sensible NF.";
            const r = ess(null, R => R), p = ess(() => { A.S.etat[b.id] = { on: true }; }, R => R); if (pasAlim(r)) return pasAlim(r);
            if (!r.ent.SAFE2) return "Au repos, SAFE 2 (" + T.safe2 + ") doit être fermée sur 70."; if (p.ent.SAFE2) return "Bord écrasé, SAFE 2 reste fermée : le pont 70-" + T.safe2 + " est-il resté ?"; return ""; } },
          { id: "blam", t: "Clignotant sur AUX", but: "Câblez un clignotant 24 V sur la sortie " + c.nomAux1 + " (clignotant d'usine).", aide: () => "Clignotant entre " + T.aux1 + " et " + T.aux1b + " ; logique " + c.P.aux1 + " sur 6 (clignotant).", test: () => {
            const l = acc("lam")[0]; if (!l) return "Posez un clignotant."; if (pn(A, "aux1", 6) !== 6) return "La sortie " + c.nomAux1 + " n'est pas réglée en clignotant (6).";
            const o = ess(() => { A.S.aux1 = 1; }, R => R), f = ess(() => { A.S.aux1 = 0; }, R => R); if (pasAlim(o)) return pasAlim(o);
            if (!o.alim[l.id]) return "Sortie active, le clignotant n'est pas alimenté : il va sur " + T.aux1 + " et " + T.aux1b + "."; if (f.alim[l.id]) return "Le clignotant reste allumé à l'arrêt : il n'est pas sur la sortie " + c.nomAux1 + "."; return ""; } }
        ];
        return L;
      }
    };
    return M;
  }

  const P_MERAK = { tca: "tcA", pedtca: "PEd tcA", part: "ouv PArtiELLE", tcal: "tcA (logique)", psave: "P SAuE", pas: "Mouvt PAS A PAS", preal: "PrEAL", hm: "HoMME Mort", blo: "bL imP ouv", blt: "bL imP tcA", blf: "bL imP FErM", safe1: "1 SAFE", safe2: "2 SAFE", ic1: "1 ic", ic2: "2 ic", ch1: "1ch", ch2: "2ch", aux1: "1AUX", aux2: "2AUX" };
  const rangLigne = (ns, x, y, pas, haut) => ({ ns, x, y, pas, haut });
  const NONSIM = "Non simulés : menus de la carte et autoset, apprentissage des forces et du couple (SET), vitesses, ralentissements, forces, ampérostop (ER3x), sécurités vérifiées (TEST, entrées FAULT), TIMER, fermeture rapide, carte d'extension, serrure électrique, réseau BFT (U-LINK), feux, sorties AUX autres que clignotant (6), lumière de zone (3) et voyant SCA (1).";
  window.CABMOD = window.CABMOD || {};
  window.CABMOD["bft-merak"] = fabrique({ nom: "MERAK BT A", notice: "BFT D814459", fig: "fig. B p. 3 de la notice D814459", hauteur: 300,
    blocs: [rangLigne([["L", "L"], ["N", "N"]], 30, 34, 22, false), rangLigne([["10", "M+"], ["11", "M−"]], 30, 250, 22, false),
      rangLigne([["20", "AUX1"], ["21", "AUX1"], ["26", "AUX2"], ["27", "AUX2"], ["50", "24V−"], ["51", "24V+"], ["52", "Safe+"], ["60", "COM IC"], ["61", "IC1"], ["62", "IC2"], ["70", "COM"], ["71", "STOP"], ["72", "SAFE1"], ["73", "SAFE2"]], 90, 250, 20, false),
      rangLigne([["Y", "ANT"]], 350, 150, 0, false)],
    K: {}, coms: ["21", "50", "60", "70"], entrees: { 71: "STOP", 72: "SAFE1", 73: "SAFE2", 61: "IC1", 62: "IC2" }, ponts: [["70", "71"], ["70", "72"], ["70", "73"]],
    T: { p24: "51", safe: "52", aux1: "20", aux1b: "21", aux2: ["26", "27"], safe2: "73" }, mot: [["10", "11"]], aff: [170, 90],
    us: [["fc", 60, 206, 30, 8, "fins de course"], ["jp32", 30, 70, 20, 30, "JP32"], ["f1", 70, 76, 8, 22, "F1"], ["f3", 90, 76, 8, 22, "F3"]],
    usine: { fc: { nom: "Connecteur des fins de course", txt: "Fins de course non simulés : l'atelier arrête le portail en fin de course théorique." }, jp32: { nom: "JP32 (connecteur de la carte, non décrit par la notice D814459)" }, f1: { nom: "Fusible F1 0,63 A T (valeur de l'ancienne notice D811980)" }, f3: { nom: "Fusible F3 1,25 A T (valeur de l'ancienne notice D811980)" } },
    radio: ["1er canal (1ch)", "2e canal (2ch)"], ch2def: 4, P: P_MERAK, partDef: 30, pedM1: false, deux: false,
    ref: { "2 SAFE": "1 SAFE", "2 ic": "1 ic", "2ch": "1ch", "2AUX": "1AUX" }, nomAux1: "AUX 1 (20-21)",
    sensTxt: "Changement de sens : la notice demande de ne pas intervertir les étriers de fin de course ; l'atelier simule l'échange des fils + et − du moteur.",
    notes: "Simulateur de formation d'après la fiche et la notice BFT D814459 (MERAK BT A) : bornier, logiques (TCA, pas-à-pas 4 / 3 / 2 pas, préalarme, homme mort, blocages d'impulsions, SAFE 1 / 2, IC 1 / 2, canaux radio, AUX), Power Down (bornes 50-51 coupées 10 s après l'arrêt, un point s'affiche), 24 Vsafe (52) alimenté seulement pendant la manœuvre. Disposition : fig. B p. 3. L'afficheur montre le diagnostic d'entrée (STRE, PED, STOP, PHOT, BAR…) ; à l'arrêt, les sécurités ne sont pas affichées. La notice demande de ne pas relier 60 (COM IC) à 70 (COM) : dans l'atelier, toutes les COM sont un même 0 V. Vitesse indicative (environ 10 s pour la course).",
    nonSimules: NONSIM });
  window.CABMOD["bft-deimos"] = fabrique({ nom: "MERAK (DEIMOS ULTRA)", notice: "BFT D811980", fig: "tableau des bornes p. 36 de la notice D811980", hauteur: 320,
    blocs: [rangLigne([["L", "L"], ["N", "N"]], 30, 34, 22, false), rangLigne([["10", "M+"], ["11", "M−"]], 30, 216, 22, false),
      rangLigne([["20", "AUX0"], ["21", "AUX0"], ["26", "AUX3"], ["27", "AUX3"], ["50", "24V−"], ["51", "24V+"], ["52", "Safe+"]], 110, 216, 22, false),
      rangLigne([["60", "COM"], ["61", "IC1"], ["62", "IC2"], ["70", "COM"], ["71", "STOP"], ["72", "SAFE1"], ["73", "FAULT1"], ["74", "SAFE2"], ["75", "FAULT2"]], 110, 270, 22, false),
      rangLigne([["Y", "ANT"]], 350, 150, 0, false)],
    K: {}, coms: ["21", "50", "60", "70"], entrees: { 71: "STOP", 72: "SAFE1", 74: "SAFE2", 61: "IC1", 62: "IC2" }, ponts: [["70", "71"], ["70", "72"], ["70", "74"]],
    T: { p24: "51", safe: "52", aux1: "20", aux1b: "21", aux2: ["26", "27"], safe2: "74" }, mot: [["10", "11"]], aff: [170, 90],
    us: [["jp10", 30, 186, 30, 8, "JP10 fins de course"], ["jp13", 30, 70, 20, 30, "JP13"], ["f1", 70, 76, 8, 22, "F1"], ["f3", 90, 76, 8, 22, "F3"]],
    usine: { jp10: { nom: "JP10 : groupe de fins de course", txt: "Fins de course non simulés : l'atelier arrête le portail en fin de course théorique." }, jp13: { nom: "JP13 : secondaire du transformateur (24 V~)" }, f1: { nom: "Fusible F1 0,63 A T" }, f3: { nom: "Fusible F3 1,25 A T" } },
    radio: [], P: { tca: "TCA", part: "ouv. partielle", tcal: "TCA (logique)", pas: "MOUVT PAS A PAS", preal: "PREAL", hm: "HOMME MORTE", dir: "INV.SENS.OUV", blo: "BL.IMP.OUV", blt: "BL.IMP.TCA", blf: "BLI.FE", safe1: "SAFE 1", safe2: "SAFE 2", ic1: "IC 1", ic2: "IC 2", aux1: "AUX 0", aux2: "AUX 3" },
    preal: v => v ? 3 : 0, partDef: 20, pedM1: false, deux: false,
    ref: { "SAFE 2": "SAFE 1", "IC 2": "IC 1", "AUX 3": "AUX 0" }, nomAux1: "AUX 0 (20-21)",
    sensTxt: "Changement de sens : ne pas intervertir les étriers de fin de course, utiliser la logique INV.SENS.OUV (ou, dans l'atelier, échanger les fils + et − du moteur).",
    notes: "Simulateur de formation d'après la fiche et la notice BFT D811980 (DEIMOS ULTRA BT A 400 / 600, carte MERAK) : bornier, logiques (TCA, pas-à-pas, préalarme d'environ 3 s, homme mort, inversion du sens INV.SENS.OUV, blocages d'impulsions, SAFE 1 / 2, IC 1 / 2, AUX 0 / 3). Sur cette carte, 73 et 75 sont les entrées FAULT (vérification) de SAFE 1 et SAFE 2 : non simulées. La notice ne montre pas la carte de près : les bornes sont dessinées dans l'ordre du tableau p. 36, sur deux lignes. Pas de Power Down ni de réglage des canaux radio dans la fiche : télécommande non simulée. Vitesse indicative (environ 10 s pour la course).",
    nonSimules: NONSIM });
  window.CABMOD["bft-thalia"] = fabrique({ nom: "THALIA BT A80 / A160", notice: "BFT D814283", fig: "fig. B p. 3 de la notice D814283", hauteur: 330,
    blocs: [rangLigne([["L", "L"], ["N", "N"]], 30, 34, 22, false),
      rangLigne([["10", "M1+"], ["11", "M1−"], ["14", "M2+"], ["15", "M2−"], ["20", "AUX1"], ["21", "AUX1"], ["26", "AUX2"], ["27", "AUX2"], ["28", "LOCK"], ["29", "LOCK"], ["40", "−REF"], ["41", "+REF"], ["42", "SW1"], ["43", "SW2"], ["44", "SW"], ["45", "SW"]], 32, 230, 21, false),
      rangLigne([["50", "24V−"], ["51", "24V+"], ["52", "Safe+"], ["60", "COM IC"], ["61", "IC1"], ["62", "IC2"], ["70", "COM"], ["71", "STOP"], ["72", "SAFE1"], ["73", "SAFE2"]], 120, 286, 22, false),
      rangLigne([["Y", "ANT"]], 350, 150, 0, false)],
    K: {}, coms: ["21", "50", "60", "70"], entrees: { 71: "STOP", 72: "SAFE1", 73: "SAFE2", 61: "IC1", 62: "IC2" }, ponts: [["70", "71"], ["70", "72"], ["70", "73"]],
    T: { p24: "51", safe: "52", aux1: "20", aux1b: "21", aux2: ["26", "27"], safe2: "73" }, mot: [["10", "11"], ["14", "15"]], aff: [170, 90],
    us: [["f3", 90, 76, 8, 22, "prot. 24 V"]],
    usine: { f3: { nom: "Protection de la sortie accessoires (la notice ne donne pas de fusible : code ErF4 en cas de surcharge)" } }, codes: { TIME: "TImE", BARO: "baro", BARC: "barc" }, codeF4: "ErF4",
    radio: ["1er canal (1ch)", "2e canal (2ch)"], ch2def: 9, deux: true, pedM1: true, partDef: 100,
    P: { tca: "tcA", pedtca: "ped.tca", part: "ouv PArtiELLE", rouv: "retard ouv", rfer: "retard fer", nmot: "mOT.ACTIF", tcal: "TCA (logique)", psave: "P save", pas: "mOUVT PAS A PAS", preal: "PREAL", hm: "HOmmE mORT", blo: "BL.ImP.OUV", blt: "BL.ImP.TCA", blf: "BLI.FE", safe1: "1 SAFE", safe2: "2 SAFE", ic1: "1 ic", ic2: "2 ic", ch1: "1ch", ch2: "2ch", aux1: "1AUX", aux2: "2AUX", type: "TYPE DE MOTEUR" },
    ref: { "2 SAFE": "1 SAFE", "2 ic": "1 ic", "2ch": "1ch", "2AUX": "1AUX" }, nomAux1: "AUX 1 (20-21)",
    sensTxt: "Vérifiez les branchements de la Fig. E de la notice ; dans l'atelier, échangez les fils + et − du moteur.",
    notes: "Simulateur de formation d'après la fiche et la notice BFT D814283 (THALIA BT A80 / A160) : bornier, logiques (moteurs actifs, retards à l'ouverture et à la fermeture, TCA, TCA piéton, pas-à-pas, préalarme, homme mort, blocages d'impulsions, SAFE 1 / 2, IC 1 / 2, canaux radio, AUX), Power Down, 24 Vsafe (52) seulement pendant la manœuvre. Les bornes sont sur une seule ligne sur la carte : dessinées ici sur deux lignes. Ouverture piétonne : l'atelier ouvre le vantail 1 au pourcentage réglé (la notice ne précise pas le rôle du moteur 2). TYPE DE MOTEUR est sur 0 (« moteurs non actifs ») d'usine : réglez-le, sinon rien ne bouge. Fins de course et codeur (40 à 45, selon le moteur, Fig. E) non simulés : arrêt en fin de course théorique. SAFE 2 : la notice annonce PHOT au bornier et BAR (6) au tableau des logiques ; l'atelier suit le tableau. Vitesse indicative (environ 10 s pour la course).",
    nonSimules: NONSIM });
})();
