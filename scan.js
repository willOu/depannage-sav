/* Scan d'étiquette (BÊTA) : photo de la plaque -> lecture du texte (OCR) -> fiches qui correspondent.
   Le moteur de lecture (tesseract.js) est téléchargé au premier scan : il faut du réseau ce jour-là.
   Le texte lu reste modifiable : on peut le corriger puis relancer la recherche, même hors ligne. */
(function () {
  const OCR_JS = "https://cdn.jsdelivr.net/npm/tesseract.js@5.1.1/dist/tesseract.min.js";
  const OCR_OPT = {
    workerPath: "https://cdn.jsdelivr.net/npm/tesseract.js@5.1.1/dist/worker.min.js",
    corePath: "https://cdn.jsdelivr.net/npm/tesseract.js-core@5.1.1",
    langPath: "https://cdn.jsdelivr.net/npm/@tesseract.js-data/eng@1.0.0/4.0.0_best_int"
  };
  const norm = s => String(s).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]+/g, " ").trim();
  const IGN = new Set(("carte armoire platine centrale commande portail coulissant battant barriere levante automatisme moteur motoreducteur pour les des avec sans type serie version modele").split(" "));
  const e1 = (a, b) => { /* distance de Levenshtein <= 1 */
    if (a === b) return true; const la = a.length, lb = b.length; if (Math.abs(la - lb) > 1) return false;
    let i = 0, j = 0, d = 0;
    while (i < la && j < lb) { if (a[i] === b[j]) { i++; j++; continue; } if (++d > 1) return false; if (la > lb) i++; else if (lb > la) j++; else { i++; j++; } }
    return d + (la - i) + (lb - j) <= 1;
  };
  const idTokens = s => [...new Set(norm(s).split(" ").filter(w => w.length >= 3 && !IGN.has(w) && !/^\d+(v|hz|w|a|ma|va|vac|vdc|kg|mm|ip\d*)$/.test(w)))];
  const wt = w => (/\d/.test(w) ? 2.2 : 1) * (w.length >= 5 ? 1.3 : 1);

  /* cartes et accessoires candidats pour un texte lu */
  window.scanMatch = function (text) {
    const ocr = idTokens(text), ocrAll = norm(text).replace(/ /g, "");
    if (!ocr.length) return [];
    const res = [];
    const score = (ids, joined) => {
      let s = 0, tot = 0;
      ids.forEach(w => {
        tot += wt(w);
        if (ocr.includes(w) || (w.length >= 5 && joined.includes(w))) s += wt(w);
        else if (w.length >= 5 && ocr.some(o => o.length >= 5 && e1(o, w))) s += wt(w) * .6;
      });
      return s >= 2 ? s + s / tot : 0; /* il faut au moins un repère distinctif (modèle avec chiffre ou mot long) */
    };
    BOARDS.forEach(({ m, c }) => {
      const s = score(idTokens(`${m.nom} ${m.alias || ""} ${c.nom} ${c.modeles} ${c.alias || ""}`), ocrAll);
      if (s > 0) res.push({ s, hash: "#/c/" + c.id, nom: c.nom, marque: m.nom, couleur: m.couleur, sous: c.modeles });
    });
    try {
      (window.ACCESSOIRES || []).forEach(a => {
        const s = score(idTokens(`${a.marque} ${a.nom} ${a.modeles || ""}`), ocrAll);
        if (s > 0) res.push({ s, hash: "#/a/" + a.id, nom: a.nom, marque: a.marque, couleur: a.couleur || "#6b6461", sous: "Accessoire" });
      });
    } catch (e) {}
    res.sort((a, b) => b.s - a.s);
    return res.slice(0, 6);
  };

  let ocrP = null;
  function loadOcr(onMsg) {
    if (ocrP) return ocrP;
    ocrP = new Promise((ok, ko) => {
      if (window.Tesseract) return ok();
      const s = document.createElement("script"); s.src = OCR_JS; s.onload = () => ok(); s.onerror = () => ko(new Error("réseau")); document.head.appendChild(s);
    }).then(() => window.Tesseract.createWorker("eng", 1, { ...OCR_OPT, logger: m => { if (m.status && onMsg) onMsg(m.status + (m.progress ? " " + Math.round(m.progress * 100) + " %" : "")); } }))
      .catch(e => { ocrP = null; throw e; });
    return ocrP;
  }
  function prep(file) { /* réduit et passe en niveaux de gris contrastés */
    return new Promise((ok, ko) => {
      const img = new Image(); img.onload = () => {
        const k = Math.min(1, 1800 / Math.max(img.width, img.height)), c = document.createElement("canvas");
        c.width = Math.round(img.width * k); c.height = Math.round(img.height * k);
        const x = c.getContext("2d"); x.drawImage(img, 0, 0, c.width, c.height);
        const d = x.getImageData(0, 0, c.width, c.height), p = d.data;
        for (let i = 0; i < p.length; i += 4) { let g = .3 * p[i] + .59 * p[i + 1] + .11 * p[i + 2]; g = Math.max(0, Math.min(255, (g - 128) * 1.5 + 128)); p[i] = p[i + 1] = p[i + 2] = g; }
        x.putImageData(d, 0, 0); URL.revokeObjectURL(img.src); ok(c);
      }; img.onerror = () => ko(new Error("image")); img.src = URL.createObjectURL(file);
    });
  }

  window.viewScan = function () {
    setHead("Scanner une étiquette", true);
    app.innerHTML = `<p class="note"><b>BÊTA.</b> Photographiez la plaque de l'armoire (bien à plat, sans reflet). L'appli lit le texte et propose les fiches qui ressemblent. Le moteur de lecture se télécharge au premier scan : il faut du réseau ce jour-là. La lecture peut se tromper : vérifiez toujours le modèle sur la fiche.</p>
      <label class="dbtn" style="display:block;text-align:center;cursor:pointer">📷 Prendre / choisir une photo<input id="scf" type="file" accept="image/*" capture="environment" style="display:none"></label>
      <p class="note" id="scs"></p>
      <h2>Texte lu (modifiable)</h2>
      <textarea id="sct" rows="4" style="width:100%;box-sizing:border-box;padding:10px;border-radius:10px;border:1px solid var(--line);background:var(--card);color:var(--ink);font:inherit" placeholder="ex. AYROS 1200 PD19"></textarea>
      <button class="dbtn" id="scg">Chercher avec ce texte</button><div id="scr"></div>`;
    const st = m => { $("#scs").textContent = m; };
    const show = () => {
      const t = $("#sct").value.trim(), r = t ? scanMatch(t) : [];
      $("#scr").innerHTML = (r.length ? `<h2>Fiches possibles</h2><div class="list">` + r.map(x => `<button class="row" onclick="go('${x.hash}')"><span class="badge" style="--c:${x.couleur}">${esc(x.marque)}</span><b>${esc(x.nom)}</b><small>${esc(x.sous)}</small></button>`).join("") + `</div>`
        : t ? `<p class="empty">Aucune fiche reconnue dans ce texte.<br>Corrigez-le ou <a href="#/s/${encodeURIComponent(t)}">lancez la recherche normale</a>.</p>` : "") +
        (t ? `<button class="dbtn" onclick="go('#/s/${encodeURIComponent(t)}')">Recherche normale avec ce texte</button>` : "");
    };
    $("#scg").onclick = show;
    $("#scf").onchange = async e => {
      const f = e.target.files[0]; if (!f) return;
      try {
        st("Préparation de la photo…"); const c = await prep(f);
        st("Chargement du moteur de lecture (première fois : quelques secondes)…");
        const w = await loadOcr(m => st("Lecture : " + m));
        const { data } = await w.recognize(c);
        $("#sct").value = (data.text || "").split("\n").map(l => l.trim()).filter(Boolean).join("\n");
        st($("#sct").value ? "Lecture terminée. Corrigez le texte si besoin." : "Aucun texte lu. Recommencez avec une photo plus nette.");
        show();
      } catch (err) {
        st(err && err.message === "réseau" ? "Moteur de lecture indisponible : connectez-vous une fois au réseau, ou tapez le texte de la plaque ci-dessous." : "Lecture impossible : tapez le texte de la plaque ci-dessous.");
      }
    };
  };
})();
