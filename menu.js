/* « Y aller » : chemin dans les menus de la carte pour atteindre un paramètre (onglet Paramètres).
   Les étapes reprennent les procédures relevées dans les notices (champ parametres.navigation et onglet Écran de chaque fiche) :
   rien n'est inventé. Pas de nombre d'appuis : « ▲ jusqu'à afficher 71 ». Quand la notice ne dit pas dans quel menu se trouve
   un réglage, l'appli le dit au lieu de deviner. Familles couvertes : Roger à 4 chiffres, Roger F70 (LCD), Came à 3 chiffres,
   BFT, Cardin à écran, Tousek, Nice à LED L1…L8, AFCA Startéco 4. */
(function () {
  const F = {};
  ["roger-b70-1dc", "roger-b70-1dchp", "roger-b70-2ml", "roger-edge1", "roger-ctrl", "roger-h70-104ac", "roger-h70-200ac", "roger-b70-2b", "roger-b70-1t"].forEach(i => F[i] = "roger");
  F["roger-f70-ipu36"] = "f70";
  ["came-bxv", "came-zlx24"].forEach(i => F[i] = "came");
  ["bft-merak", "bft-thalia-a80-a160", "bft-merak-deimos-ultra"].forEach(i => F[i] = "bft");
  F["bft-leo-b-cbb"] = "bftleo";
  ["cardin-ecu-sl", "cardin-ecu-el", "cardin-ecu-bl", "cardin-slx1524"].forEach(i => F[i] = "cardin");
  ["tousek-pull-t", "tousek-pull-t24"].forEach(i => F[i] = "tousek");
  ["nice-run", "nice-robus-r10"].forEach(i => F[i] = "nice");
  ["afca-starteco4-contacteurs", "afca-starteco4-2m-revers"].forEach(i => F[i] = "afca4");

  const carte = id => { const b = (typeof BOARDS !== "undefined" ? BOARDS : []).find(x => x.c.id === id); return b ? b.c : null; };
  window.menuDispo = id => !!(F[id] && carte(id) && carte(id).parametres);

  /* ---------- dessins ---------- */
  const K = s => `<kbd>${esc(s)}</kbd>`;
  const court = (v, n) => (v && String(v).length <= n && !/[–-]\s*\d|…/.test(v)) ? String(v) : "";
  const seg = (gauche, droite, cl) => `<div class="mne seg"><span>${esc(gauche)}</span>${droite !== undefined ? `<span class="${cl || ""}">${esc(droite)}</span>` : ""}</div>`;
  const lcd = (l1, l2, cl) => `<div class="mne lcd"><span>${esc(l1)}</span>${l2 !== undefined ? `<span class="${cl || ""}">${esc(l2)}</span>` : ""}</div>`;
  const leds = (etat, lab) => `<div class="mne led">${[1, 2, 3, 4, 5, 6, 7, 8].map(i => `<i class="${etat[i] || ""}"><b></b>L${i}</i>`).join("")}${lab ? `<small>${esc(lab)}</small>` : ""}</div>`;

  /* réglages rangés par la fiche dans un groupe « Entrées / Sorties / Réseau » : menu vérifié dans les tableaux A (PARAM) / B (LOGIC) de la notice */
  const BFT_LOGIC = {
    "bft-merak-deimos-ultra": ["SAFE 1", "SAFE 2", "IC 1", "IC 2", "AUX 0", "AUX 3", "CODE FIXE", "Niveau de protection", "MODE SERIE", "ADRESSE", "EXPI1", "EXPI2", "EXPO1", "EXPO2"], /* tableau B, p. 10 à 12 */
    "bft-thalia-a80-a160": ["1 SAFE", "2 SAFE", "10 SAFE · 11 SAFE · 12 SAFE · 13 SAFE", "1 ic", "2 ic", "10 ic · 11 ic", "1AUX", "2AUX", "10AUX · 11AUX"] /* tableau B, p. 47 à 49 */
  };
  /* menu d'un réglage, d'après le nom de son groupe sur la fiche */
  const menuBft = (g, x, id) => {
    if ((BFT_LOGIC[id] || []).includes(x.code)) return { m: "LOGIC" };
    if (/^Menu simplifié/i.test(g)) return { simple: true };
    if (/^Tableau A/i.test(g)) return { m: "PARAM" };
    if (/^Tableau B/i.test(g)) return { m: "LOGIC" };
    if (/^Tableau C/i.test(g)) return /^(d[eE][fF][aA][uU][lL][tT]|L[aA][nN][gG][uU][eE]|A[uU][tT][oO]S[eE][tT])$/i.test(x.code.replace(/\s/g, "")) ? { top: x.code } : { m: "RADIO" };
    if (/^Logiques?\b/i.test(g)) return { m: "LOGIC" };
    if (/^(Temps|Course|Forces)\b/i.test(g)) return { m: "PARAM" };
    if (/radio, retour usine, langue/i.test(g)) return /^r[aA][dD]\s?i[oO]$/i.test(x.code.replace(/\s/g, "")) ? { top: "RADIO" } : { top: x.code };
    return { m: null };
  };
  const menusDe = (g, re) => { const m = g.match(re); return m ? m[0] : null; };

  /* ---------- étapes par famille ---------- */
  function etapes(fam, c, g, x, v) {
    const S = [], code = x.code, vv = v || "";
    const P = c.parametres, nav = (P.navigation || []).join(" ");
    const add = (k, t, d) => S.push({ k, t, d });
    if (fam === "roger") {
      const val = court(vv, 2) || "··";
      add([], "Moteur à l'arrêt : les paramètres se lisent à tout moment mais ne se modifient que moteur arrêté.", "");
      add(["UP ▲", "DOWN ▼"], `Faire défiler les paramètres jusqu'à ce que les 2 chiffres de gauche indiquent « ${code} ». Les 2 de droite montrent la valeur actuelle.`, seg(court(code, 2) || code, "··"));
      add(["+", "−"], `Changer la valeur${vv ? ` jusqu'à « ${vv} »` : ""} : elle clignote. Maintenir la touche pour défiler vite.`, seg(court(code, 2) || code, val, "cli"));
      add([], "Attendre quelques secondes (ou passer à un autre paramètre avec UP / DOWN) : l'afficheur clignote vite = valeur enregistrée.", seg(court(code, 2) || code, val, "vite"));
      if (/mot de passe/i.test(nav)) S.unshift({ k: [], t: "Si un mot de passe est actif (CP 01), les valeurs sont visibles mais pas modifiables : saisir d'abord le mot de passe (P1 à P4).", d: "", info: true });
    } else if (fam === "f70") {
      add(["ENTER"], "Depuis la page d'accueil : entrer dans la page des paramètres.", lcd("PARAMÈTRES"));
      add(["+", "−"], `Faire défiler la liste jusqu'au paramètre « ${code} ».`, lcd(code, "··"));
      add(["ENTER"], "Entrer dans le paramètre.", lcd(code, "··", "cli"));
      add(["+", "−"], `Changer la valeur${vv ? ` jusqu'à « ${vv} »` : ""}.`, lcd(code, vv || "··", "cli"));
      add(["ESC"], "Enregistrer et revenir à la liste.", lcd(code, vv || "··"));
      S.unshift({ k: [], t: "Si un mot de passe est actif : le saisir d'abord (menu MOT DE PASSE > DÉBLOQUER).", d: "", info: true });
    } else if (fam === "came") {
      const v3 = court(vv, 3);
      add(["ENTER"], "Entrer dans les menus.", "");
      add(["<", ">"], `Naviguer jusqu'à « ${code} ».`, seg(code));
      add(["ENTER"], "Confirmer le choix.", seg(v3 || "···"));
      add(["<", ">"], `Changer la valeur${vv ? ` jusqu'à « ${vv} »` : ""}.`, seg(v3 || "···", undefined));
      add(["ENTER"], "Confirmer.", "");
      add(["ESC"], "Sortir du menu (ESC annule aussi une modification pas encore confirmée).", "");
      if (/\bH3\b/.test(JSON.stringify(c.afficheur || {}))) S.unshift({ k: [], t: "Si un mot de passe a été défini (H3), il est demandé pour entrer dans le menu.", d: "", info: true });
    } else if (fam === "bft" || fam === "bftleo") {
      const mn = menuBft(g.nom, x, c.id);
      if (mn.simple) {
        add(["OK"], "Afficheur éteint : un appui sur OK donne le menu simplifié.", lcd("menu simplifié"));
        add(["+", "−"], `Aller sur « ${code} ».`, lcd(code));
        add(["OK"], "Entrer.", "");
        add(["+", "−"], `Changer la valeur${vv ? ` (« ${vv} »)` : ""}.`, lcd(code, vv || "··", "cli"));
        add(["OK"], "Confirmer.", "");
      } else {
        if (fam === "bftleo") add(["OK"], "Entrer dans les menus de l'afficheur (PARAM, LOGIC, RADIO, DEFAULT, LANGUE…).", "");
        else add(["OK", "OK"], "OK deux fois : menu avancé (PARAM, LOGIC, RADIO, DEFAULT, LANGUE, AUTOSET, STAT, PASSWORD). OK une seule fois donne le menu simplifié.", "");
        if (mn.top) { add(["+", "−"], `Aller sur « ${mn.top} ».`, lcd(mn.top)); add(["OK"], "Entrer, puis suivre les indications de l'afficheur.", ""); }
        else {
          if (mn.m) add(["+", "−"], `Aller sur le menu « ${mn.m} ».`, lcd(mn.m));
          else add(["+", "−"], `Aller sur le menu qui contient « ${code} » : la notice range les valeurs chiffrées dans PARAM et les réglages à choix dans LOGIC, sans préciser pour celui-ci.`, lcd("PARAM / LOGIC"));
          add(["OK"], "Entrer dans le menu.", "");
          add(["+", "−"], `Aller sur « ${code} ».`, lcd(code));
          add(["OK"], "Entrer dans le réglage.", "");
          add(["+", "−"], `Changer la valeur${vv ? ` jusqu'à « ${vv} »` : ""}.`, lcd(code, vv || "··", "cli"));
          add(["OK"], "Confirmer.", "");
        }
      }
      add(["+ et −"], "Les deux touches ensemble : sortir (ESC).", "");
      S.unshift({ k: [], t: "Si la logique « niveau de protection » est à 1, 2, 3 ou 4, un mot de passe est demandé (usine 1234). Après 10 essais faux : BLOC pendant 3 min.", d: "", info: true });
    } else if (fam === "cardin") {
      const sous = /·/.test(g.nom) ? g.nom.split("·").map(s => s.trim()).join(" ou ") : g.nom;
      add(["◀", "▶"], "Depuis l'écran d'accueil, une flèche : menu principal (OPTIONS, SÉCURITÉ, MOUVEMENT, AFFICHEUR, CALENDRIER, CODES RADIO).", lcd("MENU PRINCIPAL"));
      add(["◀", "▶"], `Aller sur « ${sous} »${/ ou /.test(sous) ? " (la fiche regroupe ces deux menus)" : ""}.`, lcd(sous));
      add(["PROG/OK"], "Confirmer le choix.", "");
      add(["◀", "▶"], `Aller sur « ${code} ».`, lcd(code));
      add(["PROG/OK"], "Modifier.", lcd(code, "··", "cli"));
      add(["◀", "▶"], `Choisir la valeur${vv ? ` « ${vv} »` : ""}.`, lcd(code, vv || "··", "cli"));
      add(["PROG/OK"], "Confirmer.", lcd(code, vv || "··"));
      add(["SORTIE"], /SORTIE puis PROG\/OK/.test(nav) ? "Revenir : SORTIE puis PROG/OK." : "Revenir.", "");
      S.unshift({ k: [], t: "Programmation impossible sur batterie : il faut le secteur.", d: "", info: true });
    } else if (fam === "tousek") {
      const m = g.nom.includes("/") ? g.nom.split("/").map(s => s.trim()).join(" ou ") : g.nom;
      add(["+", "−"], "Depuis les réglages de base, aller sur « Menu » (accès au menu complet).", lcd("Menu"));
      add(["ENTRÉE"], "Entrer.", "");
      add(["+", "−"], `Aller sur « ${m} »${/ ou /.test(m) ? " (la fiche regroupe ces deux menus)" : ""}.`, lcd(m));
      add(["ENTRÉE"], "Entrer.", "");
      add(["+", "−"], `Aller sur « ${code} ».`, lcd(code));
      add(["ENTRÉE"], "Entrer dans le réglage.", "");
      add(["+", "−"], `Changer la valeur${vv ? ` (« ${vv} »)` : ""}.`, lcd(code, vv || "··", "cli"));
      add(["ENTRÉE"], "Valider. ESC remonte d'un niveau en annulant la modification en cours.", "");
      S.unshift({ k: [], t: "Certains réglages (direction, fins de course, ouverture partielle) ne se modifient que portail FERMÉ. Sans toucher de touche pendant 1 min, l'afficheur sort sans rien modifier.", d: "", info: true });
    } else if (fam === "nice") {
      const deux = /^2\s*·/.test(code) || /2e niveau/i.test(g.nom), L = +(code.match(/L(\d)/) || [])[1];
      add(["Stop/Set"], "Maintenir environ 3 s, relâcher quand L1 clignote.", leds({ 1: "cli" }, "L1 clignote"));
      add(["▲", "▼"], `Amener le clignotement sur L${L}.`, leds({ [L]: "cli" }, `L${L} clignote`));
      if (!deux) {
        add(["Stop/Set"], `Un appui : change l'état${vv ? ` (« ${vv} »)` : ""}. Clignotement bref = OFF, long = ON.`, leds({ [L]: vv === "ON" ? "lon" : vv === "OFF" ? "cli" : "cli" }, vv ? (vv === "ON" ? "clignotement long = ON" : "clignotement bref = OFF") : ""));
      } else {
        const vL = +((vv || "").match(/^L(\d)$/) || [])[1];
        add(["Stop/Set"], "Maintenir Stop/Set pendant toute la suite. Après environ 3 s, la LED du niveau actuel s'allume.", "");
        add(["▲", "▼"], `Aller sur la LED de la nouvelle valeur${vL ? ` : L${vL}` : ""}, puis relâcher Stop/Set.`, vL ? leds({ [vL]: "on" }, `valeur ${vv}`) : "");
      }
      add([], "Attendre 10 s sans toucher : sortie, avec mémorisation.", leds({}, ""));
      S.unshift({ k: [], t: "Pas plus de 10 s entre deux appuis, sinon la procédure se termine en mémorisant ce qui a été fait.", d: "", info: true });
    } else if (fam === "afca4") {
      const mn = menusDe(g.nom, /^(MENU USINE|FDC [ÉE]LECTRONIQUE|HORLOGE|INPUTS)/i) || "PARAMETRAGE";
      add(["VALID"], "Carte au repos : accès aux menus.", lcd("UTILISATION"));
      add(["+", "−"], `Aller sur « ${mn} ».`, lcd(mn));
      add(["VALID"], "Entrer.", "");
      if (/PARAMETRAGE|MENU USINE|INPUTS/.test(mn)) add(["+", "−", "VALID"], "Mot de passe (0000 d'usine) : + / − pour le chiffre, VALID pour passer au suivant.", lcd("Mot de passe", "0000"));
      add(["+", "−"], `Aller sur le paramètre « ${code} ».`, lcd(code));
      add(["VALID"], "Choisir ce paramètre.", "");
      add(["+", "−"], `Changer la valeur${vv ? ` (« ${vv} »)` : ""}.`, lcd(code, vv || "··", "cli"));
      add(["VALID"], "Valider.", "");
      add(["VALID 3 s"], "Maintenir VALID 3 s : sortir en mémorisant.", "");
    }
    return S;
  }

  /* lignes de navigation de la fiche qui ne sont pas reprises dans les étapes (« À savoir ») : précautions et contradictions de la notice */
  const aSavoir = (c, code) => (c.parametres.navigation || []).filter(n => {
    if (!/contradiction|attention|couper|refaire|autoset|suivent le|ne se modifient|seulement|uniquement/i.test(n) || /^Menus de l'afficheur/i.test(n)) return false;
    if (/^Après modification/i.test(n)) return new RegExp("(^|[^0-9A-Za-z])" + code.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "([^0-9A-Za-z]|$)").test(n);
    return true;
  });

  /* ---------- fenêtre ---------- */
  let ouvert = null;
  window.menuChemin = (id, gi, ii) => {
    const c = carte(id), fam = F[id]; if (!c || !fam) return;
    const g = c.parametres.groupes[gi], x = g && g.items[ii]; if (!x) return;
    fermer(false);
    const ov = document.createElement("div"); ov.className = "mnov"; ov.setAttribute("role", "dialog"); ov.setAttribute("aria-modal", "true");
    const vals = (x.valeurs || []).map(v => v[0]).filter(v => v && v.length <= 24 && !/\d\s*[–-]\s*\d|…|\/|\bà\b/.test(v)); /* pas les plages (« 1-180 ») ni les choix groupés */
    let choix = "";
    const rendu = () => {
      const S = etapes(fam, c, g, x, choix), info = S.filter(s => s.info), et = S.filter(s => !s.info), sv = aSavoir(c, x.code);
      ov.innerHTML = `<div class="mnsh"><div class="mnhd"><b>Y aller : <span class="pc">${esc(x.code)}</span> ${esc(x.titre)}</b><button class="mnx" aria-label="Fermer">✕</button></div>
        ${vals.length > 1 ? `<p class="mnl">Valeur voulue (facultatif) :</p><div class="mnv">${vals.map(v => `<button class="mini${v === choix ? " on" : ""}" data-v="${esc(v)}">${esc(v)}</button>`).join("")}</div>` : ""}
        ${info.map(s => `<p class="mni">ⓘ ${esc(s.t)}</p>`).join("")}
        <ol class="mns">${et.map(s => `<li><div class="mnk">${s.k.map(K).join(" ")}</div><p>${esc(s.t)}</p>${s.d || ""}</li>`).join("")}</ol>
        ${sv.length ? `<h4>À savoir</h4><ul class="plain mnsv">${sv.map(n => `<li>${esc(n)}</li>`).join("")}</ul>` : ""}
        <p class="hotn">Procédure reprise de la fiche (onglet Paramètres, « Comment modifier un paramètre ») : ${esc(c.source)}. L'afficheur dessiné est indicatif. En cas de doute, la notice livrée avec la carte fait foi.</p></div>`;
      ov.querySelector(".mnx").onclick = () => fermer();
      ov.querySelectorAll(".mnv button").forEach(b => b.onclick = () => { choix = choix === b.dataset.v ? "" : b.dataset.v; const y = ov.querySelector(".mnsh").scrollTop; rendu(); ov.querySelector(".mnsh").scrollTop = y; });
    };
    rendu();
    ov.onclick = e => { if (e.target === ov) fermer(); };
    document.body.appendChild(ov); ouvert = ov;
    document.addEventListener("keydown", echap);
    try { history.pushState({ mn: 1 }, ""); } catch (e) {}
  };
  const echap = e => { if (e.key === "Escape") fermer(); };
  function fermer(retour) {
    if (!ouvert) return;
    ouvert.remove(); ouvert = null; document.removeEventListener("keydown", echap);
    if (retour !== false) try { if (history.state && history.state.mn) history.back(); } catch (e) {} /* retire l'étape ajoutée à l'ouverture */
  }
  /* bouton retour du téléphone : ferme la fenêtre au lieu de quitter la fiche */
  addEventListener("popstate", () => fermer(false));
  addEventListener("hashchange", () => fermer(false));
  window.MENU = { familles: F, etapes: (id, gi, ii, v) => { const c = carte(id); const g = c.parametres.groupes[gi]; return etapes(F[id], c, g, g.items[ii], v || ""); } };
})();
