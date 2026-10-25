/* Calculs rapides (#/calc) : chute de tension et section de câble, consommation des accessoires 24 V,
   puissance / courant. Les formules et hypothèses sont affichées ; les valeurs d'entrée viennent du technicien. */
(function () {
  const RHO = 0.0225; /* cuivre, Ω·mm²/m : résistivité conventionnelle NF C 15-100 pour le calcul des chutes de tension (ρ1 = 1,25 × 0,018) */
  const SECTIONS = [0.5, 0.75, 1, 1.5, 2.5, 4, 6, 10, 16];
  const num = id => { const v = parseFloat(String(document.getElementById(id).value).replace(",", ".")); return isFinite(v) ? v : NaN; };
  const f = (x, d) => isFinite(x) ? x.toLocaleString("fr-FR", { maximumFractionDigits: d == null ? 2 : d }) : "—";
  const st = { get(k, d) { try { const v = localStorage.getItem(k); return v === null ? d : JSON.parse(v); } catch (e) { return d; } }, set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} } };
  const champ = (id, lab, ph, val, unite) => `<label class="cf"><span>${lab}</span><span class="ci"><input id="${id}" inputmode="decimal" placeholder="${ph}" value="${val == null ? "" : esc(val)}"><i>${unite}</i></span></label>`;

  /* 1. chute de tension */
  function chute() {
    const U = num("cu"), I0 = num("ci"), P = num("cp"), L = num("cl"), S = num("cs"), lim = num("clim");
    const I = isFinite(I0) ? I0 : (isFinite(P) && U > 0 ? P / U : NaN);
    const out = document.getElementById("cr");
    if (!(U > 0) || !(I > 0) || !(L > 0)) { out.innerHTML = `<p class="hotn">Renseignez la tension, le courant (ou la puissance) et la longueur.</p>`; return; }
    const du = s => 2 * RHO * L * I / s;
    const d = du(S), pc = d / U * 100;
    const mini = SECTIONS.find(s => du(s) / U * 100 <= lim);
    if (d >= U) { out.innerHTML = `<div class="cres ko">⚠ Câble inadapté : la chute calculée (${f(d)} V) atteint ou dépasse la tension d'alimentation.</div><p class="hotn">${mini ? "Section minimale pour rester sous " + f(lim, 0) + " % : <b>" + f(mini) + " mm²</b>." : "Aucune section jusqu'à 16 mm² ne suffit : réduire la longueur ou le courant."}</p>`; return; }
    out.innerHTML = `<div class="cres${pc <= lim ? " ok" : " ko"}"><b>${f(d)} V</b> de chute, soit <b>${f(pc, 1)} %</b> (${f(U - d, 1)} V au bout du câble)${isFinite(I0) ? "" : `<br><small>courant calculé : ${f(I)} A</small>`}</div>
      <p class="hotn">${pc <= lim ? "✓ Sous la limite de " + f(lim, 0) + " %." : "⚠ Au-dessus de la limite de " + f(lim, 0) + " %."} ${mini ? "Section minimale pour rester sous la limite : <b>" + f(mini) + " mm²</b>." : "Aucune section jusqu'à 16 mm² ne suffit : réduire la longueur ou le courant."}</p>
      <table class="ctab"><tr><th>Section</th><th>Chute</th><th>%</th></tr>${SECTIONS.map(s => { const x = du(s), p = x / U * 100; return `<tr class="${s === S ? "sel " : ""}${p <= lim ? "ok" : "ko"}"><td>${f(s)} mm²</td><td>${x >= U ? "—" : f(x) + " V"}</td><td>${x >= U ? "> 100 %" : f(p, 1) + " %"}</td></tr>`; }).join("")}</table>`;
  }
  /* 2. consommation 24 V */
  let lignes = st.get("calc-acc", [{ n: "", q: 1, ma: "" }]);
  function conso() {
    const tot = lignes.reduce((a, l) => { const q = parseFloat(l.q), m = parseFloat(String(l.ma).replace(",", ".")); return a + (isFinite(q) && isFinite(m) ? q * m : 0); }, 0);
    const u = num("au") || 24, dispoW = num("aw"), dispoMa = num("am");
    const dispo = isFinite(dispoMa) ? dispoMa : (isFinite(dispoW) && u > 0 ? dispoW / u * 1000 : NaN);
    const out = document.getElementById("ar");
    out.innerHTML = `<div class="cres${isFinite(dispo) ? (tot <= dispo ? " ok" : " ko") : ""}">Total : <b>${f(tot, 0)} mA</b>, soit <b>${f(tot * u / 1000)} W</b> sous ${f(u, 0)} V${isFinite(dispo) ? `<br>Disponible : ${f(dispo, 0)} mA (${f(dispo * u / 1000)} W) → ${tot <= dispo ? "✓ marge de " + f(dispo - tot, 0) + " mA" : "⚠ dépassement de " + f(tot - dispo, 0) + " mA"}` : ""}</div>`;
    st.set("calc-acc", lignes);
  }
  function lignesHtml() {
    return lignes.map((l, i) => `<div class="al"><input data-i="${i}" data-k="n" placeholder="Accessoire" value="${esc(l.n)}"><input data-i="${i}" data-k="q" inputmode="numeric" class="aq" value="${esc(l.q)}" aria-label="Quantité"><span class="ci"><input data-i="${i}" data-k="ma" inputmode="decimal" class="am" placeholder="0" value="${esc(l.ma)}"><i>mA</i></span><button class="mini" data-x="${i}" aria-label="Retirer">✕</button></div>`).join("");
  }
  /* 3. puissance / courant */
  function pui() {
    const U = num("pu"), I = num("pi"), P = num("pp"), o = document.getElementById("pr");
    let t = "Renseignez deux des trois valeurs.";
    if (U > 0 && I > 0 && !isFinite(P)) t = `P = U × I = <b>${f(U * I)} W</b>`;
    else if (U > 0 && P > 0 && !isFinite(I)) t = `I = P ÷ U = <b>${f(P / U, 3)} A</b> (${f(P / U * 1000, 0)} mA)`;
    else if (I > 0 && P > 0 && !isFinite(U)) t = `U = P ÷ I = <b>${f(P / I)} V</b>`;
    else if (U > 0 && I > 0 && P > 0) t = "Laissez une des trois cases vide : elle sera calculée.";
    o.innerHTML = `<div class="cres">${t}</div><p class="hotn">En alternatif, c'est la puissance apparente (cos φ = 1).</p>`;
  }

  /* 4. aide au choix de la motorisation (données : moteurs.js, chaque ligne avec sa source) */
  function moteur() {
    const type = document.getElementById("mt_t").value, P = num("mt_p"), L = num("mt_l"), alim = document.getElementById("mt_a").value, out = document.getElementById("mr");
    document.getElementById("mt_pw").hidden = type === "barriere";
    document.getElementById("mt_ll").textContent = type === "coulissant" ? "Longueur du portail" : type === "battant" ? "Largeur d'un vantail" : "Longueur de lisse";
    document.getElementById("mt_pl").textContent = type === "battant" ? "Poids d'un vantail" : "Poids du portail";
    const besoinP = type !== "barriere";
    if ((besoinP && !(P > 0)) || (type !== "coulissant" && !(L > 0))) { out.innerHTML = `<p class="hotn">Renseignez ${type === "barriere" ? "la longueur de lisse" : type === "battant" ? "la largeur et le poids du vantail" : "le poids du portail (et sa longueur si vous la connaissez)"}.</p>`; return; }
    const ok = [], verif = [];
    (window.MOTEURS || []).filter(m => m.type === type && (!alim || m.alim === alim)).forEach(m => {
      if (type === "coulissant") {
        if (m.p === null || m.p < P) return;
        if (L > 0 && m.l !== null && m.l < L) return;
        (L > 0 && m.l === null ? verif : ok).push(m);
      } else if (type === "battant") {
        if (m.l === null || m.l < L) return;
        if (m.p !== null && m.p < P) return;
        (m.p === null ? verif : ok).push(m);
      } else { if (m.l !== null && m.l >= L) ok.push(m); }
    });
    const tri = (a, b) => type === "coulissant" ? a.p - b.p || (a.l || 99) - (b.l || 99) : a.l - b.l || (a.p || 9e9) - (b.p || 9e9);
    ok.sort(tri); verif.sort(tri);
    const lim = m => [m.p !== null ? "≤ " + f(m.p, 0) + " kg" : "poids non indiqué", m.l !== null ? "≤ " + f(m.l) + " m" : (type === "coulissant" ? "longueur non indiquée" : "")].filter(Boolean).join(" · ");
    const ligne = m => { const ch = besoinP && m.p ? Math.round(P / m.p * 100) : null;
      return `<div class="mot"><div class="mh"><span class="badge" style="--c:${m.marque === "Roger" ? "var(--brand)" : "var(--blue)"}">${esc(m.marque)}</span><b>${esc(m.modele)}</b>${m.alim ? `<span class="ma">${esc(m.alim)}</span>` : ""}</div>
        <div class="ml">${lim(m)}${ch !== null ? ` · <span class="${ch > 85 ? "hi" : ""}">charge ${ch} %</span>` : ""}</div>${m.note ? `<small>${esc(m.note)}</small>` : ""}<small class="src">Source : ${esc(m.src)}</small></div>`; };
    /* Roger Technology en premier : marque posée en priorité par l'entreprise */
    const PRIO = "Roger", estP = m => m.marque === PRIO;
    const okP = ok.filter(estP), vP = verif.filter(estP), okA = ok.filter(m => !estP(m)), vA = verif.filter(m => !estP(m));
    const pourquoi = type === "battant" ? "poids maxi non indiqué par la source" : "longueur maxi non indiquée par la source";
    const bloc = (l, v) => l.map(ligne).join("") + (v.length ? `<p class="hotn">À vérifier sur la notice (${pourquoi}) :</p>` + v.map(ligne).join("") : "");
    out.innerHTML = `<div class="cres${ok.length ? " ok" : " ko"}"><b>${ok.length}</b> motorisation${ok.length > 1 ? "s" : ""} dans les limites annoncées${verif.length ? `, <b>${verif.length}</b> à vérifier` : ""}.</div>` +
      `<h2 class="prio">★ Roger Technology</h2>` + (okP.length || vP.length ? bloc(okP, vP) : `<p class="hotn">Aucun moteur Roger de la liste ne convient (ou ses limites ne sont pas encore dans l'appli).</p>`) +
      (okA.length || vA.length ? `<h2>Autres marques</h2>` + bloc(okA, vA) : (ok.length ? "" : `<p class="hotn">Aucune motorisation de la liste ne couvre ces valeurs.</p>`));
  }

  window.viewCalc = function (onglet) {
    setHead("Calculs rapides", true);
    const sel = ["chute", "acc", "pui", "moteur"].includes(onglet) ? onglet : "chute";
    let h = `<div class="tabs" role="tablist">` + [["chute", "Chute de tension"], ["moteur", "Choix moteur"], ["acc", "Conso. 24 V"], ["pui", "P = U × I"]].map(t => `<button role="tab" aria-selected="${t[0] === sel}" onclick="go('#/calc/${t[0]}')">${t[1]}</button>`).join("") + `</div>`;
    if (sel === "chute") h += `<div class="cform">
        <label class="cf"><span>Tension</span><select id="cu"><option value="230">230 V monophasé</option><option value="24" selected>24 V</option><option value="12">12 V</option></select></label>
        ${champ("ci", "Courant", "ex. 2", "", "A")}${champ("cp", "ou puissance", "ex. 40", "", "W")}${champ("cl", "Longueur du câble (aller simple)", "ex. 25", "", "m")}
        <label class="cf"><span>Section</span><select id="cs">${SECTIONS.map(s => `<option value="${s}"${s === 1.5 ? " selected" : ""}>${f(s)} mm²</option>`).join("")}</select></label>
        <label class="cf"><span>Chute maximale admise</span><select id="clim"><option value="3">3 %</option><option value="5" selected>5 %</option><option value="10">10 %</option></select></label></div>
        <div id="cr"></div>
        <p class="note">Formule : ΔU = 2 × ρ × L × I ÷ S, avec ρ = 0,0225 Ω·mm²/m (cuivre, valeur de la NF C 15-100 pour le calcul des chutes de tension). Le 2 compte l'aller et le retour. Approximation : courant continu ou monophasé, cos φ = 1, réactance négligée ; ne convient pas au triphasé. La limite à respecter dépend de l'installation et de la notice du matériel.</p>`;
    if (sel === "acc") h += `<p class="note">Saisissez les consommations indiquées sur les notices des accessoires, et la puissance ou le courant que la carte peut fournir (onglet Bornier de la carte, sortie accessoires).</p>
        <div id="al">${lignesHtml()}</div><button class="mini" id="aadd">＋ Ajouter un accessoire</button>
        <div class="cform">${champ("au", "Tension de la sortie", "24", "24", "V")}${champ("aw", "Puissance disponible sur la carte", "ex. 20", st.get("calc-aw", ""), "W")}${champ("am", "ou courant disponible", "ex. 500", st.get("calc-am", ""), "mA")}</div>
        <div id="ar"></div>`;
    if (sel === "moteur") h += `<p class="note"><b>Aide indicative.</b> Liste des motorisations dont les limites annoncées par le fabricant couvrent votre portail. Pour un battant, le poids admissible baisse quand le vantail s'allonge : vérifiez toujours l'abaque de la notice. Prévoir de la marge si le portail est lourd à manœuvrer (pente, vent, rail ou gonds fatigués).</p>
        <div class="cform"><label class="cf"><span>Type</span><select id="mt_t"><option value="coulissant">Portail coulissant</option><option value="battant">Portail battant (par vantail)</option><option value="barriere">Barrière levante</option></select></label>
        <span id="mt_pw">${champ("mt_p", "<span id=\"mt_pl\">Poids du portail</span>", "ex. 450", "", "kg")}</span>
        <label class="cf"><span id="mt_ll">Longueur du portail</span><span class="ci"><input id="mt_l" inputmode="decimal" placeholder="ex. 5"><i>m</i></span></label>
        <label class="cf"><span>Alimentation du moteur</span><select id="mt_a"><option value="">Toutes</option><option value="24 V">24 V</option><option value="230 V">230 V</option><option value="36 V">36 V</option></select></label></div>
        <div id="mr"></div><p class="hotn">${(window.MOTEURS || []).length} motorisations, reprises des notices reçues et des sites des fabricants (CAME, Nice, FAAC, BFT, Roger, V2, AFCA, ELKA, La Barrière Automatique). Alimentation non précisée par la source : le modèle n'apparaît qu'avec « Toutes ».</p>`;
    if (sel === "pui") h += `<div class="cform">${champ("pu", "Tension U", "ex. 24", "", "V")}${champ("pi", "Courant I", "ex. 0,5", "", "A")}${champ("pp", "Puissance P", "ex. 12", "", "W")}</div><div id="pr"></div>`;
    app.innerHTML = h;
    if (sel === "chute") { app.querySelectorAll("input,select").forEach(e => e.oninput = e.onchange = chute); chute(); }
    if (sel === "pui") { app.querySelectorAll("input").forEach(e => e.oninput = pui); pui(); }
    if (sel === "moteur") { app.querySelectorAll("input,select").forEach(e => e.oninput = e.onchange = moteur); moteur(); }
    if (sel === "acc") {
      const bind = () => {
        app.querySelectorAll("#al input").forEach(e => e.oninput = () => { lignes[+e.dataset.i][e.dataset.k] = e.value; conso(); });
        app.querySelectorAll("#al button[data-x]").forEach(b => b.onclick = () => { lignes.splice(+b.dataset.x, 1); if (!lignes.length) lignes.push({ n: "", q: 1, ma: "" }); document.getElementById("al").innerHTML = lignesHtml(); bind(); conso(); });
      };
      bind();
      document.getElementById("aadd").onclick = () => { lignes.push({ n: "", q: 1, ma: "" }); document.getElementById("al").innerHTML = lignesHtml(); bind(); conso(); };
      ["au", "aw", "am"].forEach(id => document.getElementById(id).oninput = () => { st.set("calc-aw", document.getElementById("aw").value); st.set("calc-am", document.getElementById("am").value); conso(); });
      conso();
    }
  };
})();
