/* v2.80 : schéma de câblage personnalisé (#/plan), guide de remplacement de carte (#/rempl), mode atelier (écran partagé).
   Tout est tiré des fiches (borniers, paramètres, apprentissage) : rien n'est ajouté à la main.
   Le rapprochement des bornes réutilise le classement par fonction du comparateur (cmp.js). Aide indicative : la notice fait foi. */
(function () {
  const C = () => window.CMP;
  const slug = s => String(s || "").replace(/[^a-z0-9-]/gi, "");
  const sget = (k, d) => { try { return store.get(k, d); } catch (e) { return d; } };
  const sset = (k, v) => { try { store.set(k, v); } catch (e) {} };
  const NOM_F = {}; /* clé de fonction → titre */
  const nomF = k => { if (!NOM_F[k]) { const f = C().F.find(x => x[0] === k); NOM_F[k] = f ? f[1] : "Autres bornes"; } return NOM_F[k]; };
  const ORDRE = ["secteur", "terre", "moteur", "fdc", "enc", "batt", "acc", "com", "test", "stop", "pap", "ouv", "ferm", "pieton", "photo", "barre", "cli", "ecl", "voy", "serr", "ant", "radio", "ctrl", "barr", "opt", "bus", "autre"];
  const APPAREIL = { photo: "Photocellules", barre: "Bord sensible / barre palpeuse", stop: "Bouton STOP / arrêt d'urgence", pap: "Bouton ou contact sec (commande)", ouv: "Bouton ou contact sec (ouverture)", ferm: "Bouton ou contact sec (fermeture)", pieton: "Bouton ou contact sec (partielle)", cli: "Feu clignotant", voy: "Voyant", serr: "Électroserrure", ecl: "Éclairage", ant: "Antenne", fdc: "Fins de course", enc: "Encodeur", moteur: "Moteur", acc: "Alimentation des accessoires", batt: "Batteries", radio: "Récepteur radio", ctrl: "Contrôle d'accès", test: "Test des sécurités", opt: "Option / contact auxiliaire", barr: "Équipement de barrière", bus: "Liaison / module", secteur: "Secteur", terre: "Terre", com: "Commun" };
  const TYPE = { nf: "contact NF", no: "contact NO", sortie: "sortie", alim: "alimentation", moteur: "moteur", bus: "bus", autre: "autre" };
  const COUL = { nf: "var(--t-nf)", no: "var(--t-no)", sortie: "var(--t-sortie)", alim: "var(--t-alim)", moteur: "var(--t-moteur)", bus: "var(--t-bus)", autre: "var(--t-autre)" };

  /* bornes « n » d'une ligne : « 12 · 30 » → ["12","30"] ; commun cité dans le nom du groupe (« commun 23 ») ajouté si absent */
  function pins(b) {
    let l = String(b.n || "").split(/\s*[·\/]\s*/).map(x => x.trim()).filter(Boolean);
    const m = /commun\s+([0-9A-Za-z+\-]+)/i.exec(b.g || "");
    if (m && l.length === 1 && (b.t === "no" || b.t === "nf") && l[0] !== m[1]) l.push(m[1] + " (commun)");
    return l.length ? l : ["?"];
  }

  /* ---------- 1. Schéma de câblage personnalisé ---------- */
  function cle(b) { return b.g + "|" + b.n + "|" + b.label; }

  window.viewPlan = function (id) {
    setHead("Schéma de câblage", true);
    const B = id && C().find(id);
    let h = `<p class="note">Choisissez la carte, cochez ce que vous raccordez : le schéma est dessiné borne par borne à partir de la fiche, à imprimer ou à montrer sur site. <b>Aide indicative</b> : la notice livrée avec le matériel fait foi.</p>
      <label class="noprint">Carte de commande ${C().selectHtml("pc", id || "", "")}</label>`;
    if (!B) { app.innerHTML = h + `<p class="empty">Choisissez la carte.</p>`; bind(); return; }
    const toutes = C().bornes(B.c).filter(b => b.f !== "secteur" && b.f !== "terre");
    const k0 = "plan-" + B.c.id;
    let sel = sget(k0, null);
    const typique = () => {
      const pick = []; ["photo", "stop", "cli", "pap", "ant", "acc"].forEach(f => { const b = toutes.find(x => x.f === f); if (b) pick.push(cle(b)); });
      return pick;
    };
    if (!Array.isArray(sel)) sel = typique();
    const groupes = {};
    toutes.forEach(b => { (groupes[b.f] = groupes[b.f] || []).push(b); });
    h += `<h2 class="noprint">Que raccordez-vous ?</h2><div class="plsel noprint"><button class="mini" id="pt">Installation type</button> <button class="mini" id="p0">Tout décocher</button>` +
      ORDRE.filter(f => groupes[f]).map(f => `<div class="plg"><b>${esc(nomF(f))}</b>` + groupes[f].map(b => {
        const k = cle(b); return `<label class="plck"><input type="checkbox" data-k="${esc(k)}"${sel.includes(k) ? " checked" : ""}><span class="plt" style="--tc:${COUL[b.t] || COUL.autre}">${nw(pins(b).join(" · "))}</span><span>${esc(b.label)}<small>${esc(TYPE[b.t] || "")}</small></span></label>`;
      }).join("") + `</div>`).join("") + `</div>`;
    const choix = toutes.filter(b => sel.includes(cle(b)));
    h += `<div id="plan-out"><h2>Schéma · ${esc(B.m.nom)} ${esc(B.c.nom)}</h2>`;
    h += choix.length ? dessin(B, choix) : `<p class="empty">Cochez au moins un élément.</p>`;
    h += `<button class="dbtn noprint" id="pimp">Imprimer / enregistrer en PDF<small>le schéma et les notes de la fiche</small></button><p class="foot">Source : ${esc(B.c.source)}.<br>En cas de doute, la notice livrée avec le matériel fait foi.</p></div>`;
    app.innerHTML = h; bind();
    const maj = () => { sset(k0, [...app.querySelectorAll(".plck input:checked")].map(i => i.dataset.k)); viewPlan(id); };
    app.querySelectorAll(".plck input").forEach(i => i.onchange = maj);
    $("#pt").onclick = () => { sset(k0, typique()); viewPlan(id); };
    $("#p0").onclick = () => { sset(k0, []); viewPlan(id); };
    const pi = $("#pimp"); if (pi) pi.onclick = () => window.print();
  };
  function bind() { const s = document.getElementById("pc"); if (s) s.onchange = () => go("#/plan/" + (s.value ? encodeURIComponent(s.value) : "")); }

  function dessin(B, choix) {
    const W = 720, X1 = 150, X2 = 470, H0 = 46;
    let y = H0, svg = "", notes = "";
    choix.forEach((b, i) => {
      const p = pins(b), k = p.length, hh = Math.max(64, 26 * k + 22);
      const col = COUL[b.t] || COUL.autre;
      const ys = p.map((_, j) => y + hh / 2 + (j - (k - 1) / 2) * 26);
      p.forEach((t, j) => {
        svg += `<rect x="${X1 - 78}" y="${ys[j] - 11}" width="78" height="22" rx="5" class="plp"/><text x="${X1 - 39}" y="${ys[j] + 4}" text-anchor="middle" class="plpt">${esc(t.length > 12 ? t.slice(0, 11) + "…" : t)}</text>`;
        svg += `<path d="M${X1} ${ys[j]} C ${X1 + 120} ${ys[j]}, ${X2 - 120} ${y + hh / 2 + (j - (k - 1) / 2) * 16}, ${X2} ${y + hh / 2 + (j - (k - 1) / 2) * 16}" fill="none" stroke="${col}" stroke-width="3" stroke-linecap="round"/>`;
        svg += `<circle cx="${X2}" cy="${y + hh / 2 + (j - (k - 1) / 2) * 16}" r="4.5" fill="${col}"/>`;
      });
      const nm = /stop|^st$/i.test(b.label) ? "Bouton STOP / arrêt d'urgence" : (APPAREIL[b.f] || b.label);
      svg += `<rect x="${X2}" y="${y + 4}" width="${W - X2}" height="${hh - 8}" rx="10" class="pld" style="stroke:${col}"/><text x="${X2 + 12}" y="${y + hh / 2 - 4}" class="pln">${esc(nm.length > 34 ? nm.slice(0, 33) + "…" : nm)}</text><text x="${X2 + 12}" y="${y + hh / 2 + 13}" class="pls">${esc(b.label.length > 22 ? b.label.slice(0, 21) + "…" : b.label)} · ${esc(TYPE[b.t] || "")}</text>`;
      notes += `<tr><td><span class="plt" style="--tc:${col}">${nw(p.join(" · "))}</span></td><td><b>${esc(b.label)}</b> <small>(${esc(TYPE[b.t] || "")})</small><br>${esc(b.desc || "")}</td></tr>`;
      y += hh + 8;
    });
    const Hn = y + 6;
    return `<svg class="plsvg" viewBox="0 0 ${W} ${Hn}" role="img" aria-label="Schéma de câblage de la carte ${esc(B.c.nom)}">
      <rect x="2" y="2" width="${X1 - 2}" height="${Hn - 4}" rx="12" class="plc"/><text x="${X1 / 2 + 1}" y="26" text-anchor="middle" class="plct">${esc(B.c.nom.length > 14 ? B.c.nom.slice(0, 13) + "…" : B.c.nom)}</text>${svg}</svg>
      <div class="pllg"><span><i style="background:var(--t-nf)"></i>contact NF</span><span><i style="background:var(--t-no)"></i>contact NO</span><span><i style="background:var(--t-sortie)"></i>sortie</span><span><i style="background:var(--t-alim)"></i>alimentation</span><span><i style="background:var(--t-moteur)"></i>moteur</span><span><i style="background:var(--t-bus)"></i>bus</span></div>
      <p class="hotn">Un contact NF non utilisé doit être ponté ou son entrée désactivée : voir les notes de la fiche ci-dessous.</p>
      <table class="pltab"><tbody>${notes}</tbody></table>`;
  }

  /* ---------- 2. Guide de remplacement de carte ---------- */
  const STOP = new Set("de du des la le les un une et ou en au aux par sur avec sans pour dans que qui est pas mode valeur reglage reglages fonction activation temps apres avant entre cette".split(" "));
  const mots = t => C().norm(t).split(" ").filter(w => w.length >= 4 && !STOP.has(w)).map(w => w.replace(/s$/, ""));
  const items = c => ((c.parametres && c.parametres.groupes) || []).flatMap(g => g.items.map(it => ({ ...it, g: g.nom, w: new Set(mots(it.titre)) })));
  function apparier(A, Bn) {
    const cand = [];
    A.forEach((a, i) => Bn.forEach((b, j) => {
      if (!a.w.size || !b.w.size) return;
      let n = 0; a.w.forEach(w => { if (b.w.has(w)) n++; });
      if (!n) return;
      const sc = 2 * n / (a.w.size + b.w.size);
      if (sc >= 0.5) cand.push([sc, i, j]);
    }));
    cand.sort((x, y) => y[0] - x[0]);
    const ua = new Set(), ub = new Set(), paires = [];
    cand.forEach(([sc, i, j]) => { if (ua.has(i) || ub.has(j)) return; ua.add(i); ub.add(j); paires.push([A[i], Bn[j], sc]); });
    return { paires, seuls: A.filter((_, i) => !ua.has(i)) };
  }
  const liste = a => `<ul>${(a || []).map(x => `<li>${esc(x)}</li>`).join("")}</ul>`;

  window.viewRempl = function (a, b) {
    setHead("Remplacer une carte", true);
    const A = a && C().find(a), Bn = b && C().find(b);
    const kc = "rempl-" + (a || "") + "-" + (b || "");
    let h = `<p class="note">Choisissez la carte à remplacer et la nouvelle : le guide donne la correspondance des fils, les paramètres à reporter et les étapes de remise en service. <b>Aide indicative</b> : à vérifier sur les deux notices (type de contact, tensions, puissances).</p>
      <div class="cmpp noprint"><label>Carte en place ${C().selectHtml("ra", a || "", b || "")}</label><label>Nouvelle carte ${C().selectHtml("rb", b || "", a || "")}</label></div>`;
    if (!A || !Bn) { app.innerHTML = h + `<p class="empty">Choisissez les deux cartes.</p>`; liaison(); return; }
    const coche = sget(kc, {});
    const xa = C().bornes(A.c), xb = C().bornes(Bn.c);
    const pa = items(A.c), pb = items(Bn.c);
    const ap = apparier(pa, pb);
    h += `<div class="cmph"><div><span class="badge" style="--c:${A.m.couleur}">${esc(A.m.nom)}</span> ${esc(A.c.nom)}</div><button class="mini noprint" onclick="go('#/rempl/${esc(b)}/${esc(a)}')" aria-label="Inverser">⇄</button><div><span class="badge" style="--c:${Bn.m.couleur}">${esc(Bn.m.nom)}</span> ${esc(Bn.c.nom)}</div></div>`;
    /* étape 1 */
    h += `<h2>1. Avant de démonter</h2><div class="rst"><ul>
      <li>Couper le secteur et débrancher les batteries éventuelles.</li>
      <li>Photographier la carte en place, câblage visible, puis repérer chaque fil (étiquettes avec le numéro de borne).</li>
      <li>Relever les paramètres réglés sur la carte en place (colonne « Relevé » de l'étape 3) : les valeurs d'usine ne sont pas forcément celles de l'installation.</li>
      <li>Noter le sens d'ouverture et la position du moteur (gauche / droite) si la fiche de la nouvelle carte les demande.</li></ul></div>`;
    /* étape 2 */
    h += `<h2>2. Correspondance des fils</h2><p class="hotn">Cochez au fur et à mesure. Le rapprochement se fait sur les libellés des fiches.</p>`;
    let nbl = 0;
    ORDRE.forEach(f => {
      const la = xa.filter(x => x.f === f), lb = xb.filter(x => x.f === f);
      if (!la.length && !lb.length) return;
      const ok = la.length && lb.length;
      const t1 = new Set(la.map(x => x.t)), t2 = new Set(lb.map(x => x.t));
      const diff = ok && [...t1].some(t => (t === "nf" || t === "no") && !t2.has(t)) ? `<span class="warn">type de contact différent (${[...t1].map(t => TYPE[t]).join("/")} → ${[...t2].map(t => TYPE[t]).join("/")}) : vérifier</span>` : "";
      const k = "f-" + f; const on = !!coche[k]; nbl++;
      const cl = l => l.length ? l.map(x => `<div class="cb" style="--tc:var(--t-${esc(x.t)})"><span class="cn">${nw(x.n)}</span><b>${esc(x.label)}</b><small>${esc(x.desc)}</small></div>`).join("") : `<div class="cb vide">—</div>`;
      h += `<div class="cmpr"><h3><label class="rck"><input type="checkbox" data-k="${k}"${on ? " checked" : ""}><span>${esc(nomF(f))}</span></label>${!ok && f !== "autre" ? ` <span class="warn">${la.length ? "rien d'équivalent repéré sur la nouvelle carte" : "seulement sur la nouvelle carte"}</span>` : ""} ${diff}</h3>
        <div class="cmpc"><div>${cl(la)}</div><div>${cl(lb)}</div></div></div>`;
    });
    /* étape 3 */
    h += `<h2>3. Paramètres à reporter</h2>`;
    if (!pa.length || !pb.length) h += `<p class="hotn">Les fiches ne détaillent pas les paramètres ${!pa.length && !pb.length ? "des deux cartes" : (!pa.length ? "de la carte en place" : "de la nouvelle carte")} : se reporter aux notices.</p>`;
    else {
      const rel = coche.rel || {};
      h += `<p class="hotn">Paramètres rapprochés par leur intitulé (mêmes mots-clés). Les codes, les plages de valeur et les unités peuvent différer : vérifier chaque ligne dans l'onglet Paramètres de la nouvelle carte.</p>
        <div class="tw"><table class="rtab"><thead><tr><th>Ancienne carte</th><th>Relevé</th><th>Nouvelle carte</th></tr></thead><tbody>` +
        ap.paires.map(([x, y]) => `<tr><td><b class="mono">${esc(x.code)}</b> ${esc(x.titre)}<small>usine : ${esc(x.def)}</small></td><td><input class="relv" data-k="${esc(x.code)}" value="${esc(rel[x.code] || "")}" placeholder="valeur" inputmode="text" aria-label="Valeur relevée pour ${esc(x.code)}"></td><td><b class="mono">${esc(y.code)}</b> ${esc(y.titre)}<small>usine : ${esc(y.def)}</small></td></tr>`).join("") + `</tbody></table></div>` +
        (ap.seuls.length ? `<details class="grp"><summary>Sans équivalent trouvé sur la nouvelle carte <small>${ap.seuls.length}</small></summary><div class="secb">` + ap.seuls.map(x => `<div class="cb"><span class="cn">${esc(x.code)}</span><b>${esc(x.titre)}</b><small>usine : ${esc(x.def)}</small></div>`).join("") + `</div></details>` : "");
    }
    /* étape 4 */
    const ap2 = Bn.c.apprentissage || {};
    h += `<h2>4. Remise en service</h2><div class="rst"><p><b>Avant la mise sous tension</b> (fiche ${esc(Bn.c.nom)})</p>${liste(ap2.avant)}<p><b>Apprentissage</b></p><ol>${(ap2.etapes || []).map(x => `<li>${esc(x)}</li>`).join("")}</ol><p><b>Après</b></p>${liste(ap2.apres)}</div>
      <h2>5. Contrôles finaux</h2><div class="rst"><ul><li>Tester chaque commande (ouverture, fermeture, pas-à-pas, partielle) et la radio.</li><li>Tester les sécurités : photocellules, bords sensibles, STOP. Les entrées non utilisées doivent être pontées ou désactivées selon la notice.</li><li>Vérifier les fins de course, l'arrêt avant la butée et le déverrouillage.</li><li>Remettre les batteries, fermer le coffret.</li></ul></div>
      <button class="dbtn noprint" id="rimp">Imprimer / enregistrer en PDF<small>pour l'emporter sur le chantier</small></button>
      <p class="foot">Sources : ${esc(A.c.source)} · ${esc(Bn.c.source)}.<br>En cas de doute, la notice livrée avec le matériel fait foi.</p>`;
    app.innerHTML = h; liaison();
    app.querySelectorAll(".rck input").forEach(i => i.onchange = () => { const c = sget(kc, {}); c[i.dataset.k] = i.checked; sset(kc, c); });
    app.querySelectorAll(".relv").forEach(i => i.oninput = () => { const c = sget(kc, {}); c.rel = c.rel || {}; c.rel[i.dataset.k] = i.value; sset(kc, c); });
    const ri = $("#rimp"); if (ri) ri.onclick = () => { app.querySelectorAll(".relv").forEach(i => i.setAttribute("value", i.value)); window.print(); };
    function liaison() { const sa = document.getElementById("ra"), sb = document.getElementById("rb"); const upd = () => go("#/rempl/" + (sa.value ? encodeURIComponent(sa.value) : "-") + (sb.value ? "/" + encodeURIComponent(sb.value) : "")); if (sa) sa.onchange = upd; if (sb) sb.onchange = upd; }
  };

  /* ---------- 3. Mode atelier : fiche à gauche, notice PDF à droite (grand écran) ---------- */
  const ATELIER_MIN = 1000;
  window.atelierActif = () => !!sget("atelier", false) && innerWidth >= ATELIER_MIN;
  window.atelierBascule = function () { sset("atelier", !sget("atelier", false)); route(); };
  window.atelierAttache = function (id, tab) {
    document.body.classList.remove("atelier");
    if (!window.atelierActif() || tab === "pdf" || !window.hasPdf || !hasPdf(id) || !window.viewPdf) return;
    const L = window.NOTICES_PDF[id]; if (!L || !L.length) return;
    const gauche = document.createElement("div"); gauche.id = "atl";
    while (app.firstChild) gauche.appendChild(app.firstChild);
    const droite = document.createElement("aside"); droite.id = "atr";
    let k = Math.min(+sget("atelier-k-" + id, 0) || 0, L.length - 1);
    droite.innerHTML = (L.length > 1 ? `<div class="atsel">${L.map((n, i) => `<button class="mini" aria-pressed="${i === k}" data-i="${i}">${esc(n.t)}</button>`).join("")}</div>` : "") + `<div id="athost"></div>`;
    app.appendChild(gauche); app.appendChild(droite);
    document.body.classList.add("atelier");
    const ouvre = i => { sset("atelier-k-" + id, i); droite.querySelectorAll(".atsel button").forEach(b => b.setAttribute("aria-pressed", String(+b.dataset.i === i))); viewPdf(id, i, "", "", document.getElementById("athost")); };
    droite.querySelectorAll(".atsel button").forEach(b => b.onclick = () => ouvre(+b.dataset.i));
    ouvre(k);
  };
  let dernier = null;
  addEventListener("resize", () => { clearTimeout(window.__atr); window.__atr = setTimeout(() => { const on = window.atelierActif(); if (dernier !== null && on !== dernier && /^#\/c\//.test(location.hash)) route(); dernier = on; }, 250); });
  dernier = window.atelierActif();
})();
