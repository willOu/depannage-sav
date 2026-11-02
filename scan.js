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

  /* ---------- afficheur : lecture du code affiché ---------- */
  /* caractères souvent confondus sur un afficheur 7 segments ou une photo floue */
  const CONF = { o: "0", d: "0", q: "0", i: "1", l: "1", t: "1", "|": "1", z: "2", s: "5", g: "6", b: "8", a: "a" };
  const nc = s => norm(s).replace(/ /g, "");
  const flou = s => nc(s).split("").map(c => CONF[c] || c).join("");
  /* codes connus qui ressemblent au texte lu ; carte choisie en premier */
  window.codeMatch = function (text, carteId) {
    const toks = [...new Set(String(text).split(/[\s\n]+/).concat([String(text).replace(/\s+/g, "")]).map(nc).filter(t => t.length >= 1 && t.length <= 8))];
    if (!toks.length) return [];
    const tf = toks.map(flou), res = [];
    BOARDS.forEach(({ m, c }) => c.codes.forEach(x => {
      if (!/^(afficheur|erreur|test|diag|flash)$/.test(x.type)) return;
      const k = nc(x.code); if (!k || k.length > 8) return;
      let sc = 0;
      if (toks.includes(k)) sc = 3;
      else if (tf.includes(flou(k))) sc = 2;
      else if (k.length >= 3 && toks.some(t => t.length >= 3 && e1(t, k))) sc = 1;
      if (!sc) return;
      if (carteId && c.id === carteId) sc += 10;
      res.push({ sc, m, c, x });
    }));
    res.sort((a, b) => b.sc - a.sc);
    return res.slice(0, 40);
  };
  /* ---------- lecture directe des afficheurs 7 segments (sans moteur de lecture) ----------
     binarisation (seuil d'Otsu, segments allumés = couleur minoritaire), bande de texte, découpe en caractères,
     puis test des 7 segments de chaque caractère ; plusieurs inclinaisons sont essayées (afficheurs penchés). */
  const T7 = { abcdef: "0", bc: "1", abdeg: "2", abcdg: "3", bcfg: "4", acdfg: "5", acdefg: "6", abc: "7", abcdefg: "8", abcdfg: "9", abcefg: "A", cdefg: "b", adef: "C", cdeg: "c", bcdeg: "d",
    adefg: "E", aefg: "F", acdef: "G", bcefg: "H", cefg: "h", ef: "I", cdeg: "o", bcde: "J", def: "L", ceg: "n", abefg: "P", abcfg: "q", eg: "r", defg: "t", bcdef: "U", cde: "u", bcdfg: "y", g: "-", d: "_", a: "‾" };
  function charger(file, maxw) {
    return new Promise((ok, ko) => { const img = new Image(); img.onload = () => { const k = Math.min(1, maxw / Math.max(img.width, img.height)), c = document.createElement("canvas"); c.width = Math.round(img.width * k); c.height = Math.round(img.height * k); c.getContext("2d").drawImage(img, 0, 0, c.width, c.height); URL.revokeObjectURL(img.src); ok(c); }; img.onerror = () => ko(new Error("image")); img.src = URL.createObjectURL(file); });
  }
  window.lire7seg = function (canvas) {
    const W = canvas.width, H = canvas.height, px = canvas.getContext("2d").getImageData(0, 0, W, H).data, N = W * H;
    const hi = new Uint8Array(N), lo = new Uint8Array(N);
    for (let i = 0, j = 0; i < px.length; i += 4, j++) { hi[j] = Math.max(px[i], px[i + 1], px[i + 2]); lo[j] = .3 * px[i] + .59 * px[i + 1] + .11 * px[i + 2]; }
    const pct = (a, q) => { const h = new Array(256).fill(0); for (let j = 0; j < N; j++) h[a[j] | 0]++; let c = 0; for (let t = 255; t >= 0; t--) { c += h[t]; if (c >= q * N) return t; } return 0; };
    const pctBas = (a, q) => { const h = new Array(256).fill(0); for (let j = 0; j < N; j++) h[a[j] | 0]++; let c = 0; for (let t = 0; t < 256; t++) { c += h[t]; if (c >= q * N) return t; } return 255; };
    const res = [];
    /* segments clairs (LED, VFD) : les x % de pixels les plus lumineux ; segments sombres (LCD) : les plus sombres */
    for (const q of [0.03, 0.06, 0.1, 0.16, 0.24]) {
      const tH = pct(hi, q), tL = pctBas(lo, q);
      const a = new Uint8Array(N), b = new Uint8Array(N);
      for (let j = 0; j < N; j++) { a[j] = hi[j] >= tH ? 1 : 0; b[j] = lo[j] <= tL ? 1 : 0; }
      for (const on of [a, b]) for (const sh of [0, 0.1, 0.2, -0.1]) { const r = decoder(on, W, H, sh); if (r) { r.score -= q * 0.4; res.push(r); } } /* à lecture égale, le seuil le plus strict gagne */
    }
    /* segments fantômes (segments éteints visibles) ou cadre autour de l'écran : seuil d'Otsu sur le quart le plus
       sombre (LCD) ou le plus lumineux (LED, VFD) de l'image, pour ne garder que les segments vraiment allumés */
    for (const clair of [false, true]) {
      const src = clair ? hi : lo, lim = clair ? pct(hi, 0.25) : pctBas(lo, 0.25), dedans = v => clair ? v >= lim : v <= lim;
      const h = new Array(256).fill(0); let n = 0, som = 0;
      for (let j = 0; j < N; j++) if (dedans(src[j])) { h[src[j] | 0]++; n++; som += src[j] | 0; }
      let best = -1, t = -1, w0 = 0, s0 = 0;
      for (let v = 0; v < 255; v++) { w0 += h[v]; s0 += v * h[v]; if (!w0 || w0 === n) continue; const m0 = s0 / w0, m1 = (som - s0) / (n - w0), bc = w0 * (n - w0) * (m0 - m1) * (m0 - m1); if (bc > best) { best = bc; t = v; } }
      if (t < 0) continue;
      const on = new Uint8Array(N); let nb = 0; for (let j = 0; j < N; j++) { on[j] = (clair ? src[j] > t : src[j] <= t) ? 1 : 0; nb += on[j]; }
      if (nb > N * 0.003 && nb < N * 0.15) for (const sh of [0, 0.1, 0.2, -0.1]) { const r = decoder(on, W, H, sh); if (r) { r.score -= 0.03 * 0.4; res.push(r); } }
    }
    res.sort((x, y) => y.score - x.score);
    return res[0] || { texte: "", score: 0 };
  };
  function decoder(on0, W, H, sh) {
    /* cisaillement horizontal pour redresser les chiffres penchés */
    const on = new Uint8Array(W * H);
    for (let y = 0; y < H; y++) { const dx = Math.round((y - H / 2) * sh); for (let x = 0; x < W; x++) { const xs = x - dx; if (xs >= 0 && xs < W && on0[y * W + xs]) on[y * W + x] = 1; } }
    const rows = new Array(H).fill(0); for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) rows[y] += on[y * W + x];
    /* bande principale : lignes assez remplies, trous courts tolérés */
    const mr = Math.max(...rows); if (mr < 3) return null;
    let bands = [], st = -1, trou = 0;
    for (let y = 0; y <= H; y++) { const pl = y < H && rows[y] > mr * 0.08; if (pl) { if (st < 0) st = y; trou = 0; } else if (st >= 0) { trou++; if (trou > H * 0.04 || y === H) { bands.push([st, y - trou]); st = -1; trou = 0; } } }
    bands = bands.filter(b => b[1] - b[0] > H * 0.08); if (!bands.length) return null;
    bands.sort((a, b) => (b[1] - b[0]) - (a[1] - a[0]));
    const [y0, y1] = bands[0], bh = y1 - y0 + 1;
    const cols = new Array(W).fill(0); for (let x = 0; x < W; x++) for (let y = y0; y <= y1; y++) cols[x] += on[y * W + x];
    const chars = []; let cs = -1, gap = 0;
    for (let x = 0; x <= W; x++) { const pl = x < W && cols[x] > bh * 0.04; if (pl) { if (cs < 0) cs = x; gap = 0; } else if (cs >= 0) { gap++; if (gap > bh * 0.06 || x === W) { chars.push([cs, x - gap]); cs = -1; gap = 0; } } }
    /* hauteur de référence : médiane des caractères larges (les bords du cadre, fins et plus hauts, sont écartés) */
    const mes = chars.map(([x0, x1]) => { let a = y1, b = y0; for (let y = y0; y <= y1; y++) for (let x = x0; x <= x1; x++) if (on[y * W + x]) { if (y < a) a = y; if (y > b) b = y; } return { w: x1 - x0 + 1, h: b - a + 1 }; });
    const larges = mes.filter(m => m.w >= m.h * 0.3).map(m => m.h).sort((a, b) => a - b);
    const href = larges.length ? larges[larges.length >> 1] : 0;
    let txt = "", ok = 0, tot = 0; const pos = [];
    for (const [x0, x1] of chars) {
      const cw = x1 - x0 + 1;
      /* hauteur réelle du caractère */
      let cy0 = y1, cy1 = y0; for (let y = y0; y <= y1; y++) for (let x = x0; x <= x1; x++) if (on[y * W + x]) { if (y < cy0) cy0 = y; if (y > cy1) cy1 = y; }
      const ch0 = cy1 - cy0 + 1;
      if (ch0 < bh * 0.3) { if (cw < bh * 0.2 && cy0 > y0 + bh * 0.6) txt += "."; continue; } /* point ou bruit */
      tot++;
      if (cw < ch0 * 0.3) {
        const ligne = y => { for (let x = x0; x <= x1; x++) if (on[y * W + x]) return true; return false; };
        let ya = cy0, yb = cy1; while (ya > 0 && ligne(ya - 1)) ya--; while (yb < H - 1 && ligne(yb + 1)) yb++;
        const hx = yb - ya + 1; /* hauteur réelle du trait, au-delà de la bande */
        if (href && (hx > href * 1.2 || ch0 < href * 0.6)) { tot--; continue; } /* trait du cadre, pas un chiffre */
        txt += !href || ch0 > href * 0.75 ? "1" : "i"; ok++; pos.push([txt.length - 1, x0, x1, 1]); continue;
      }
      /* minuscules en demi-hauteur (r, o, c, n, u…) : segments repérés sur la hauteur des autres caractères */
      let ch = ch0; if (href && ch < href * 0.75 && cy1 > y0 + bh * 0.6) { cy0 = Math.max(0, cy1 - href + 1); ch = cy1 - cy0 + 1; }
      const z = (fx0, fx1, fy0, fy1) => { let n = 0, t = 0; for (let y = Math.round(cy0 + fy0 * ch); y < cy0 + fy1 * ch; y++) for (let x = Math.round(x0 + fx0 * cw); x < x0 + fx1 * cw; x++) { t++; n += on[y * W + x]; } return t ? n / t : 0; };
      const seg = { a: z(.3, .7, 0, .14), b: z(.75, 1, .15, .42), c: z(.75, 1, .58, .85), d: z(.3, .7, .86, 1), e: z(0, .25, .58, .85), f: z(0, .25, .15, .42), g: z(.3, .7, .43, .57) };
      let rempl = 0; for (let y = cy0; y <= cy1; y++) for (let x = x0; x <= x1; x++) rempl += on[y * W + x];
      rempl /= (cw * ch);
      if (rempl > 0.72 || cw > ch * 1.1) { txt += "?"; continue; } /* bloc plein ou trop large : pas un caractère à segments */
      const cle = Object.keys(seg).filter(k => seg[k] > 0.28).sort().join("");
      const c = T7[cle];
      if (c) { txt += c; ok++; pos.push([txt.length - 1, x0, x1, 0]); } else txt += "?";
    }
    if (!tot) return null;
    if (tot <= 0) return null;
    return { texte: txt.replace(/^\.+|\.+$/g, ""), score: ok / tot + Math.min(tot, 4) * 0.01 };
  }

  function prepAff(file, inverse) { /* afficheur : agrandi, niveaux de gris, seuil (texte sombre sur fond clair pour la lecture) */
    return new Promise((ok, ko) => {
      const img = new Image(); img.onload = () => {
        const k = Math.min(2, 1400 / Math.max(img.width, img.height)), c = document.createElement("canvas");
        c.width = Math.round(img.width * k); c.height = Math.round(img.height * k);
        const x = c.getContext("2d"); x.filter = "blur(1.2px)"; x.drawImage(img, 0, 0, c.width, c.height); x.filter = "none";
        const d = x.getImageData(0, 0, c.width, c.height), p = d.data;
        let som = 0; for (let i = 0; i < p.length; i += 4) som += Math.max(p[i], p[i + 1], p[i + 2]);
        const moy = som / (p.length / 4), seuil = moy + (255 - moy) * .35;
        for (let i = 0; i < p.length; i += 4) { const v = Math.max(p[i], p[i + 1], p[i + 2]) > seuil; const g = (v !== !!inverse) ? 0 : 255; p[i] = p[i + 1] = p[i + 2] = g; }
        x.putImageData(d, 0, 0); URL.revokeObjectURL(img.src); ok(c);
      }; img.onerror = () => ko(new Error("image")); img.src = URL.createObjectURL(file);
    });
  }
  function viewAfficheur() {
    const rec = (typeof store !== "undefined" ? store.get("recents", []) : []).map(id => BOARDS.find(b => b.c.id === id)).filter(Boolean);
    const opts = `<option value="">Toutes les cartes</option>` + (rec.length ? `<optgroup label="Consultées récemment">${rec.map(b => `<option value="${b.c.id}">${esc(b.m.nom)} · ${esc(b.c.nom)}</option>`).join("")}</optgroup>` : "") +
      MARQUES.map(m => `<optgroup label="${esc(m.nom)}">${m.cartes.map(c => `<option value="${c.id}">${esc(c.nom)}</option>`).join("")}</optgroup>`).join("");
    return `<p class="note"><b>BÊTA.</b> Photographiez l'afficheur de la carte (de face, sans reflet, le code bien net au centre). L'appli lit le code et ouvre sa fiche. La lecture des afficheurs à segments est imparfaite : corrigez le code si besoin, ou tapez-le directement.</p>
      <label style="display:block;margin:12px 0 10px;font-weight:600">Carte (les codes de cette carte passent en premier)<select id="afc" style="display:block;width:100%;margin-top:6px;height:46px;padding:0 10px;border-radius:12px;border:1px solid var(--line);background:var(--card);color:var(--ink);font:inherit">${opts}</select></label>
      <label class="dbtn" style="display:block;text-align:center;cursor:pointer">📷 Photographier l'afficheur<input id="aff" type="file" accept="image/*" capture="environment" style="display:none"></label>
      <p class="note" id="afs"></p>
      <h2>Code lu (modifiable)</h2>
      <input id="aft" style="width:100%;box-sizing:border-box;height:52px;padding:0 14px;border-radius:12px;border:1px solid var(--line);background:var(--card);color:var(--ink);font:700 22px ui-monospace,Menlo,monospace;letter-spacing:2px" placeholder="ex. E3, 17, ER04" autocomplete="off" autocapitalize="characters">
      <div id="afr"></div>`;
  }
  function brancheAfficheur() {
    const st = m => { $("#afs").textContent = m; };
    const sel = $("#afc"), inp = $("#aft");
    try { const v = sessionStorage.getItem("aff-carte"); if (v) sel.value = v; else if (store.get("recents", [])[0]) sel.value = store.get("recents", [])[0]; } catch (e) {}
    const show = () => {
      const t = inp.value.trim(), carte = sel.value, r = t ? codeMatch(t, carte) : [];
      try { sessionStorage.setItem("aff-carte", carte); } catch (e) {}
      const lien = x => "#/c/" + x.c.id + "/codes/" + encodeURIComponent(x.x.code).replace(/'/g, "%27");
      $("#afr").innerHTML = !t ? "" : r.length ? `<h2>Codes correspondants</h2><div class="list">` + r.map(x => `<button class="row" onclick="go('${lien(x)}')"><span class="badge" style="--c:${x.m.couleur}">${esc(x.m.nom)}</span><b>${esc(x.x.code)} · ${esc(x.x.titre)}</b><small>${esc(x.c.nom)}${x.sc % 10 < 3 ? " · lecture approchée" : ""}</small></button>`).join("") + `</div>`
        : `<p class="empty">Aucun code connu ne correspond à « ${esc(t)} »${carte ? " sur cette carte" : ""}.<br>Vérifiez le code ou <a href="#/s/${encodeURIComponent(t)}">lancez la recherche normale</a> (elle cherche aussi dans les notices PDF).</p>`;
    };
    inp.oninput = show; sel.onchange = show;
    $("#aff").onchange = async e => {
      const f = e.target.files[0]; if (!f) return;
      const lus = [];
      try {
        st("Lecture de l'afficheur…");
        /* 1. afficheur à segments : lecture directe (marche sans réseau) */
        const carte0 = sel.value;
        const connu = x => codeMatch(x, carte0).some(r => r.sc >= 2 && (!carte0 || r.c.id === carte0));
        /* variantes : un « 1 » en trop au bord vient souvent du cadre de l'afficheur */
        const variantes = t => { const v = [t]; let a = t; while (/^[1i]/.test(a) && a.length > 1) { a = a.slice(1); v.push(a); } v.slice().forEach(x => { let b = x; while (/[1i]$/.test(b) && b.length > 1) { b = b.slice(0, -1); v.push(b); } }); return [...new Set(v)]; };
        try { const c0 = await charger(f, 700), r7 = lire7seg(c0); if (r7.texte && r7.score >= 0.75) { const v = variantes(r7.texte.replace(/\?/g, "")); const bon = v.find(connu); lus.push(bon || v[0]); } } catch (e) {}
        if (lus.length && connu(lus[0])) { inp.value = lus[0].toUpperCase(); st("Lecture terminée : vérifiez le code ci-dessous (vous pouvez le corriger)."); show(); return; }
        /* 2. afficheur à texte (LCD, matrice) : moteur de lecture */
        st("Chargement du moteur de lecture (première fois : quelques secondes)…");
        const w = await loadOcr(m => st("Lecture : " + m));
        await w.setParameters({ tessedit_char_whitelist: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-.", tessedit_pageseg_mode: "7" });
        try {
          for (const inv of [false, true]) {
            const c = await prepAff(f, inv); const { data } = await w.recognize(c);
            (data.text || "").split(/\s+/).map(x => x.replace(/[^A-Za-z0-9.-]/g, "")).filter(x => x.length >= 1 && x.length <= 8).forEach(x => lus.push(x));
          }
        } finally { await w.setParameters({ tessedit_char_whitelist: "", tessedit_pageseg_mode: "6" }).catch(() => {}); } /* retour aux réglages par défaut (scan d'étiquette), même en cas d'échec */
        const carte = sel.value;
        /* garde la lecture qui correspond à un code connu, sinon la plus longue */
        const conn = lus.find(x => codeMatch(x, carte).some(r => r.sc >= 2 && (!carte || r.c.id === carte))) || lus.sort((a, b) => b.length - a.length)[0] || "";
        inp.value = conn.toUpperCase();
        st(conn ? "Lecture terminée : vérifiez le code ci-dessous (vous pouvez le corriger)." : "Aucun code lu. Recommencez de plus près, ou tapez le code.");
        show();
      } catch (err) {
        if (lus.length) { inp.value = lus[0].toUpperCase(); st("Lecture approchée : vérifiez le code ci-dessous (le moteur de lecture complet n'est pas disponible sans réseau)."); show(); return; }
        st(err && err.message === "réseau" ? "Moteur de lecture indisponible : connectez-vous une fois au réseau, ou tapez le code ci-dessous." : "Lecture impossible : tapez le code ci-dessous.");
      }
    };
    show();
  }

  window.viewScan = function (mode) {
    if (mode === "afficheur") {
      setHead("Photo de l'afficheur", true);
      app.innerHTML = `<div class="seg2 stseg"><button aria-pressed="false" onclick="go('#/scan')">Étiquette / carte</button><button aria-pressed="true">Afficheur / code</button></div>` + viewAfficheur();
      brancheAfficheur(); return;
    }
    setHead("Scanner une étiquette", true);
    app.innerHTML = `<div class="seg2 stseg"><button aria-pressed="true">Étiquette / carte</button><button aria-pressed="false" onclick="go('#/scan/afficheur')">Afficheur / code</button></div><p class="note"><b>BÊTA.</b> Photographiez la plaque de l'armoire (bien à plat, sans reflet). L'appli lit le texte et propose les fiches qui ressemblent. Le moteur de lecture se télécharge au premier scan : il faut du réseau ce jour-là. La lecture peut se tromper : vérifiez toujours le modèle sur la fiche.</p>
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
        st(err && err.message === "réseau" ? "Moteur de lecture indisponible : connectez-vous une fois au réseau, ou tapez le code ci-dessous." : "Lecture impossible : tapez le code ci-dessous.");
      }
    };
  };
})();
