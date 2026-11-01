/* Onglet « Notice PDF » : notices du fabricant (pages françaises) lues dans l'appli.
   Le PDF est téléchargé à la première ouverture puis gardé hors ligne (cache « sav-notices » du service worker).
   Lecteur : pdf.js (Mozilla, build « legacy » 6.2.108) hébergé avec l'appli dans vendor/pdfjs, gardé en cache après le premier usage. */
(function () {
  const BASE = new URL("vendor/pdfjs/", location.href).href;
  const CACHE = "sav-notices-2";
  const esc = s => String(s == null ? "" : s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const list = id => (window.NOTICES_PDF && NOTICES_PDF[id]) || [];
  const mo = ko => ko < 1024 ? Math.max(1, Math.round(ko)) + " Ko" : (ko / 1024).toFixed(1).replace(".", ",") + " Mo";
  window.hasPdf = id => list(id).length > 0;

  async function enCache(f) {
    try { if (!("caches" in window)) return false; const c = await caches.open(CACHE); return !!(await c.match(new URL(f, location.href).href)); } catch (e) { return false; }
  }

  window.pdfPane = function (id) {
    const l = list(id);
    setTimeout(() => l.forEach(async (n, k) => {
      const el = document.getElementById("pdfst" + k); if (!el) return;
      const ok = await enCache(n.f);
      el.textContent = ok ? "✓ Disponible hors ligne sur cet appareil" : "À télécharger : il faut du réseau à la première ouverture";
      el.className = "pdfst" + (ok ? " ok" : "");
    }), 0);
    return `<p class="note">Notice du fabricant, <b>pages en français seulement</b> (plus les pages de schémas communes à toutes les langues). Elle se télécharge à la première ouverture, puis reste disponible sans réseau sur ce téléphone.</p>` +
      l.map((n, k) => `<div class="pdfc"><div class="pdft"><b>${esc(n.t)}</b><small>${n.p} page${n.p > 1 ? "s" : ""}${n.pt > n.p ? ` (sur ${n.pt} dans l'original)` : ""} · ${mo(n.ko)}</small>${n.m ? `<small class="pdfm">Notice multilingue : le français y est mélangé aux autres langues, elle est gardée en entier.</small>` : ""}<small id="pdfst${k}" class="pdfst">…</small></div>
        <div class="pdfb"><button class="btn" onclick="go('#/pdf/${esc(id)}/${k}')">Lire</button><a class="btn sec" href="${esc(n.f)}" download>Enregistrer</a></div></div>`).join("") +
      `<p class="note">En cas de doute, la notice livrée avec le matériel fait foi.</p>`;
  };

  let lib = null;
  function chargeLib() {
    if (!lib) lib = import(BASE + "pdf.min.mjs").then(L => { L.GlobalWorkerOptions.workerSrc = BASE + "pdf.worker.min.mjs"; return L; }).catch(e => { lib = null; throw e; });
    return lib;
  }

  let courant = 0;
  window.viewPdf = async function (id, k, pageVoulue, cherche) {
    const n = list(id)[+k || 0];
    const app = document.getElementById("app");
    if (!n) { go("#/"); return; }
    const jeton = ++courant;
    setHead(n.t, true);
    app.innerHTML = `<div class="pdfbar"><button class="btn sec" id="pzm" aria-label="Réduire">−</button><span id="pzv">100 %</span><button class="btn sec" id="pzp" aria-label="Agrandir">+</button><a class="btn sec" href="${esc(n.f)}" download>Enregistrer</a></div>
      <p class="note" id="pmsg">Chargement de la notice (${mo(n.ko)})…</p><div id="ppages" class="ppages"></div>
      <p class="note">Touchez une page pour l'ouvrir en plein écran : faites défiler les pages de haut en bas, zoom avec + / − ou double-touche.</p>`;
    let pdf;
    try {
      const [L, buf] = await Promise.all([chargeLib(), fetch(n.f).then(r => { if (!r.ok) throw new Error("http"); return r.arrayBuffer(); }, () => { throw new Error("reseau"); })]);
      if (jeton !== courant) return;
      pdf = await L.getDocument({ data: new Uint8Array(buf), wasmUrl: BASE + "wasm/", standardFontDataUrl: BASE + "standard_fonts/", iccUrl: BASE + "iccs/" }).promise;
    } catch (e) {
      if (jeton !== courant) return;
      const m = document.getElementById("pmsg");
      if (m) m.innerHTML = navigator.onLine === false || e.message === "reseau" || /fetch|import|module/i.test(e.message)
        ? "Pas de réseau, et cette notice n'a pas encore été ouverte sur ce téléphone. Ouvrez-la une fois avec du réseau pour la garder hors ligne."
        : "Impossible d'ouvrir la notice dans l'appli. Essayez « Enregistrer » pour l'ouvrir avec le lecteur PDF du téléphone.";
      return;
    }
    if (jeton !== courant) return;
    document.getElementById("pmsg").textContent = `${pdf.numPages} page${pdf.numPages > 1 ? "s" : ""} · disponible hors ligne sur ce téléphone.`;
    const box = document.getElementById("ppages");
    let zoom = 1;
    const ZS = [1, 1.5, 2, 3, 4];
    const largeur = () => Math.max(280, box.clientWidth) * zoom;
    const rendus = new Map();
    for (let i = 1; i <= pdf.numPages; i++) {
      const d = document.createElement("div"); d.className = "ppage"; d.dataset.n = i; d.style.minHeight = Math.round(largeur() * 1.41) + "px";
      d.innerHTML = `<span class="pnum">${i} / ${pdf.numPages}</span>`;
      box.appendChild(d);
    }
    async function rendre(d) {
      const i = +d.dataset.n; const w = largeur();
      if (rendus.get(i) === w) return; rendus.set(i, w);
      const page = await pdf.getPage(i);
      const v1 = page.getViewport({ scale: 1 });
      const dpr = Math.min(window.devicePixelRatio || 1, 3);
      const v = page.getViewport({ scale: (w / v1.width) * dpr });
      const c = document.createElement("canvas"); c.width = Math.floor(v.width); c.height = Math.floor(v.height);
      c.style.width = w + "px"; c.style.height = Math.floor(v.height / dpr) + "px";
      await page.render({ canvasContext: c.getContext("2d"), viewport: v }).promise;
      if (jeton !== courant || rendus.get(i) !== w) return;
      const old = d.querySelector("canvas"); if (old) old.remove();
      d.style.minHeight = ""; d.prepend(c);
      c.onclick = () => agrandir(i);
    }
    /* pages loin de l'écran : on libère le dessin (mémoire limitée sur iPhone) en gardant la hauteur */
    const liberer = d => { rendus.delete(+d.dataset.n); const c = d.querySelector("canvas"); if (!c) return; d.style.minHeight = c.style.height; c.width = 0; c.height = 0; c.remove(); };
    const io = "IntersectionObserver" in window ? new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) rendre(e.target); else liberer(e.target); }), { rootMargin: "1500px 0px" }) : null;
    [...box.children].forEach(d => io ? io.observe(d) : rendre(d));
    const majZoom = () => {
      document.getElementById("pzv").textContent = Math.round(zoom * 100) + " %";
      [...box.children].forEach(d => { const c = d.querySelector("canvas"); if (c) { const r = largeur() / parseFloat(c.style.width); c.style.width = largeur() + "px"; c.style.height = parseFloat(c.style.height) * r + "px"; } });
      [...box.children].forEach(d => { const r = d.getBoundingClientRect(); if (r.bottom > -800 && r.top < innerHeight + 800) rendre(d); });
    };
    document.getElementById("pzp").onclick = () => { const i = ZS.indexOf(zoom); if (i < ZS.length - 1) { zoom = ZS[i + 1]; majZoom(); } };
    document.getElementById("pzm").onclick = () => { const i = ZS.indexOf(zoom); if (i > 0) { zoom = ZS[i - 1]; majZoom(); } };
    const agrandir = i => plein(pdf, i, jeton, "");
    /* ouverte depuis la recherche : directement en plein écran à la page trouvée */
    const pv = parseInt(pageVoulue, 10);
    if (pv >= 1 && pv <= pdf.numPages) { const d = box.children[pv - 1]; if (d) d.scrollIntoView(); plein(pdf, pv, jeton, cherche || ""); }
  };

  /* Plein écran : toutes les pages à la suite, défilement vertical, zoom − / + ou double-touche, ‹ › page précédente / suivante */
  async function plein(pdf, depart, jeton, cherche) {
    const N = pdf.numPages;
    const o = document.createElement("div"); o.className = "schv"; o.id = "pdfv";
    o.innerHTML = `<div class="schb"><button id="pvp" aria-label="Page précédente">‹</button><span id="pvt">${depart} / ${N}</span><button id="pvn" aria-label="Page suivante">›</button><button id="pvm" aria-label="Zoom moins">−</button><button id="pvz" aria-label="Zoom plus">+</button><button id="pvx" aria-label="Fermer">✕</button></div><div class="schc" id="pvc"></div>`;
    document.body.appendChild(o); document.body.style.overflow = "hidden";
    const box = o.querySelector("#pvc");
    let zoom = 1, ferme = false;
    const p1 = (await pdf.getPage(1)).getViewport({ scale: 1 });
    const ratios = new Map();
    const larg = () => box.clientWidth * zoom;
    const haut = k => Math.round(larg() * (ratios.get(k) || p1.height / p1.width));
    const pages = [];
    for (let k = 1; k <= N; k++) {
      const d = document.createElement("div"); d.className = "pvp"; d.dataset.n = k;
      d.style.width = larg() + "px"; d.style.height = haut(k) + "px";
      box.appendChild(d); pages.push(d);
    }
    const rendus = new Map();
    async function rendre(d) {
      const k = +d.dataset.n, w = larg();
      if (rendus.get(k) === w) return; rendus.set(k, w);
      const page = await pdf.getPage(k);
      const v1 = page.getViewport({ scale: 1 });
      ratios.set(k, v1.height / v1.width);
      const dpr = Math.min(window.devicePixelRatio || 1, 3);
      const cible = Math.max(w * dpr, Math.min(1600, w * 3));
      const sc = Math.min(cible / v1.width, Math.sqrt(8e6 / (v1.width * v1.height)));
      const v = page.getViewport({ scale: sc });
      const c = document.createElement("canvas"); c.width = Math.floor(v.width); c.height = Math.floor(v.height);
      c.style.width = w + "px"; c.style.height = Math.round(w * v1.height / v1.width) + "px";
      await page.render({ canvasContext: c.getContext("2d"), viewport: v }).promise;
      if (ferme || rendus.get(k) !== w) { c.width = 0; c.height = 0; return; }
      const old = d.querySelector("canvas"); if (old) { old.width = 0; old.height = 0; old.remove(); }
      d.style.width = c.style.width; d.style.height = c.style.height; d.appendChild(c);
      surligner(k, page, v1, d);
    }
    /* surlignage jaune des mots cherchés, à partir du texte de la page PDF (pas possible sur les pages scannées sans texte) */
    const faits = new Set();
    let premier = false;
    const VIDES = new Set(["de", "du", "la", "le", "les", "des", "et", "en", "un", "une", "au", "aux", "a", "l", "d"]);
    async function surligner(k, page, v1, d) {
      if (!cherche || faits.has(k)) return; faits.add(k);
      let tc; try { tc = await page.getTextContent(); } catch (e) { return; }
      if (ferme) return;
      const mots0 = normL(cherche).split(/\s+/).map(w => w.replace(/^[^a-z0-9°ω]+|[^a-z0-9°ω]+$/g, "")).filter(Boolean);
      const phrase = mots0.join(" ");
      const mots = mots0.length > 1 ? mots0.filter(w => !VIDES.has(w)) : mots0;
      const items = tc.items.filter(it => it.str && it.str.trim());
      const nItems = items.map(it => normL(it.str));
      const avecPhrase = mots0.length > 1 && nItems.some(t => t.includes(phrase));
      const termes = avecPhrase ? [phrase] : mots;
      const bord = (t, j, l) => !/[a-z0-9]/.test(t[j - 1] || " ") && !/[a-z0-9]/.test(t[j + l] || " ");
      const rects = [];
      items.forEach((it, n) => {
        const t = nItems[n], tr = it.transform, L = t.length; if (!L) return;
        const h = Math.hypot(tr[2], tr[3]) || it.height || 8, w = it.width || 0;
        const lu = Math.hypot(tr[0], tr[1]) || 1, ux = tr[0] / lu, uy = tr[1] / lu; /* direction de la ligne (texte tourné compris) */
        const lv = Math.hypot(tr[2], tr[3]) || 1, vx = tr[2] / lv, vy = tr[3] / lv;
        const pt = (a, b) => v1.convertToViewportPoint(tr[4] + ux * a + vx * b, tr[5] + uy * a + vy * b);
        termes.forEach(m => {
          let j = -1;
          while ((j = t.indexOf(m, j + 1)) >= 0) {
            if (m.length <= 3 && !bord(t, j, m.length)) continue;
            const a0 = w * j / L, a1 = w * (j + m.length) / L;
            const P = [pt(a0, -h * 0.25), pt(a1, -h * 0.25), pt(a0, h * 0.95), pt(a1, h * 0.95)];
            const xs = P.map(q => q[0]), ys = P.map(q => q[1]);
            rects.push([Math.min(...xs), Math.min(...ys), Math.max(...xs) - Math.min(...xs), Math.max(...ys) - Math.min(...ys)]);
          }
        });
      });
      rects.forEach(([x, y, w, h]) => {
        const e = document.createElement("i"); e.className = "pvh";
        e.style.left = (x / v1.width * 100) + "%"; e.style.top = (y / v1.height * 100) + "%";
        e.style.width = (w / v1.width * 100) + "%"; e.style.height = (h / v1.height * 100) + "%";
        d.appendChild(e);
      });
      /* page d'arrivée : on centre le premier mot surligné */
      if (k === depart && rects.length && !premier) {
        premier = true;
        const y = Math.min(...rects.map(r => r[1]));
        box.scrollTop = d.offsetTop + (y / v1.height) * d.offsetHeight - box.clientHeight / 3;
      }
      if (k === depart && !rects.length) {
        const n = document.createElement("div"); n.className = "pvn";
        n.textContent = "Mot non repéré sur cette page (page scannée ou texte découpé) : cherchez-le à l'œil.";
        d.appendChild(n); setTimeout(() => n.remove(), 5000);
      }
    }
    const liberer = d => { rendus.delete(+d.dataset.n); const c = d.querySelector("canvas"); if (c) { c.width = 0; c.height = 0; c.remove(); } };
    const io = new IntersectionObserver(es => es.forEach(e => e.isIntersecting ? rendre(e.target) : liberer(e.target)), { root: box, rootMargin: "1200px 0px" });
    pages.forEach(d => io.observe(d));
    const actuelle = () => { const t = box.scrollTop + box.clientHeight / 3; let k = 1; for (const d of pages) { if (d.offsetTop <= t) k = +d.dataset.n; else break; } return k; };
    const aller = k => { k = Math.max(1, Math.min(N, k)); box.scrollTop = pages[k - 1].offsetTop; };
    box.addEventListener("scroll", () => { o.querySelector("#pvt").textContent = `${actuelle()} / ${N}`; }, { passive: true });
    let tRendu = 0;
    const rendreVisibles = () => pages.forEach(d => { const r = d.getBoundingClientRect(); if (r.bottom > -1200 && r.top < innerHeight + 1200) rendre(d); });
    const setZ = (z, cx, cy) => {
      z = Math.max(1, Math.min(6, z)); if (Math.abs(z - zoom) < 0.01) return;
      cx = cx == null ? box.clientWidth / 2 : cx; cy = cy == null ? box.clientHeight / 2 : cy;
      const ax = (box.scrollLeft + cx) / zoom, ay = (box.scrollTop + cy) / zoom;
      zoom = z;
      pages.forEach(d => { const c = d.querySelector("canvas"); d.style.width = larg() + "px"; d.style.height = haut(+d.dataset.n) + "px"; if (c) { c.style.width = d.style.width; c.style.height = d.style.height; } });
      box.scrollLeft = ax * zoom - cx; box.scrollTop = ay * zoom - cy;
      o.querySelector("#pvt").textContent = `${actuelle()} / ${N}`;
      clearTimeout(tRendu); tRendu = setTimeout(rendreVisibles, 250);
    };
    /* pincement à deux doigts : le zoom est recalculé et la page redessinée nette (pas un simple agrandissement flou) */
    let pince = null;
    const dist = t => Math.hypot(t[0].clientX - t[1].clientX, t[0].clientY - t[1].clientY);
    box.addEventListener("touchstart", e => { if (e.touches.length === 2) { const r = box.getBoundingClientRect(); pince = { d: dist(e.touches), z: zoom, cx: (e.touches[0].clientX + e.touches[1].clientX) / 2 - r.left, cy: (e.touches[0].clientY + e.touches[1].clientY) / 2 - r.top }; } }, { passive: true });
    box.addEventListener("touchmove", e => { if (pince && e.touches.length === 2) { e.preventDefault(); setZ(pince.z * dist(e.touches) / pince.d, pince.cx, pince.cy); } }, { passive: false });
    box.addEventListener("touchend", e => { if (e.touches.length < 2) pince = null; }, { passive: true });
    o.querySelector("#pvz").onclick = () => setZ(zoom + 0.5);
    o.querySelector("#pvm").onclick = () => setZ(zoom - 0.5);
    o.querySelector("#pvp").onclick = () => aller(actuelle() - 1);
    o.querySelector("#pvn").onclick = () => aller(actuelle() + 1);
    box.ondblclick = e => { const r = box.getBoundingClientRect(); setZ(zoom >= 2 ? 1 : 2.5, e.clientX - r.left, e.clientY - r.top); };
    const fermer = () => {
      if (ferme) return; ferme = true; io.disconnect();
      pages.forEach(liberer); o.remove(); document.body.style.overflow = "";
      removeEventListener("popstate", fermer); removeEventListener("keydown", esc_); removeEventListener("hashchange", fermer);
    };
    const esc_ = e => { if (e.key === "Escape") o.querySelector("#pvx").click(); };
    o.querySelector("#pvx").onclick = () => { if (history.state && history.state.pdfv) history.back(); else fermer(); };
    try { history.pushState({ pdfv: 1 }, "", location.href); } catch (e) {}
    addEventListener("popstate", fermer); addEventListener("keydown", esc_); addEventListener("hashchange", fermer);
    requestAnimationFrame(() => aller(depart));
  }

  /* ---------- recherche dans le texte des notices ----------
     Texte de chaque page extrait à l'avance (notices-texte-1.json, lecture optique pour les pages scannées),
     gardé en cache sur le téléphone : la recherche marche sans réseau. */
  const TEXTE = "notices-texte-1.json";
  let texte = null;
  const nchar = c => { const r = c.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase(); return r.length === 1 ? r : (r[0] || " "); };
  const normL = t => { let o = ""; for (const c of t) o += c.length === 1 ? nchar(c) : "  ".slice(0, c.length); return o; };
  function chargeTexte() {
    if (!texte) texte = fetch(TEXTE).then(r => { if (!r.ok) throw new Error("http"); return r.json(); }).then(T => {
      const idx = [];
      const parFichier = {};
      Object.entries(window.NOTICES_PDF || {}).forEach(([id, l]) => l.forEach((n, k) => { (parFichier[n.f] = parFichier[n.f] || []).push({ id, k, n }); }));
      Object.entries(T).forEach(([f, pages]) => { if (parFichier[f]) idx.push({ f, items: parFichier[f], pages: pages.map(t => ({ t, n: normL(t) })) }); });
      return idx;
    }).catch(e => { texte = null; throw e; });
    return texte;
  }
  const nomItem = id => {
    try { const b = typeof BOARDS !== "undefined" && BOARDS.find(x => x.c.id === id); if (b) return { m: b.m.nom, c: b.m.couleur, nom: b.c.nom }; } catch (e) {}
    const a = (window.ACCESSOIRES || []).find(x => x.id === id); return a ? { m: a.marque, c: a.couleur, nom: a.nom } : { m: "", c: "#888", nom: id };
  };
  function chercher(idx, q) {
    /* mots séparés par les espaces ; « 8,2 », « 24v », « e3 » restent entiers ; ponctuation retirée aux bords */
    let mots = normL(q).split(/\s+/).map(w => w.replace(/^[^a-z0-9°ω]+|[^a-z0-9°ω]+$/g, "")).filter(Boolean);
    if (mots.length > 1) mots = mots.filter(w => w.length >= 2 || /\d/.test(w));
    if (!mots.length) return [];
    const exprs = mots.map(w => w.length <= 3 ? new RegExp("(^|[^a-z0-9,.])" + w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "(?![a-z0-9]|[,.][0-9])") : null);
    const phrase = mots.join(" ");
    const res = [];
    idx.forEach(doc => {
      const pages = [];
      doc.pages.forEach((p, i) => {
        if (!p.n) return;
        if (!mots.every((w, j) => exprs[j] ? exprs[j].test(p.n) : p.n.includes(w))) return;
        let sc = mots.length > 1 && p.n.includes(phrase) ? 20 : 0;
        mots.forEach(w => { let k = -1, c = 0; while ((k = p.n.indexOf(w, k + 1)) >= 0 && c < 10) c++; sc += c; });
        pages.push({ i, sc });
      });
      if (pages.length) { pages.sort((a, b) => b.sc - a.sc); res.push({ doc, pages, best: pages[0].sc }); }
    });
    res.sort((a, b) => b.best - a.best || b.pages.length - a.pages.length);
    return res.map(r => Object.assign(r, { mots, phrase }));
  }
  function extrait(p, mots, phrase) {
    let k = mots.length > 1 ? p.n.indexOf(phrase) : -1;
    if (k < 0) k = p.n.indexOf(mots[0]);
    if (k < 0) k = 0;
    const a = Math.max(0, k - 70), b = Math.min(p.t.length, k + 150);
    let h = esc(p.t.slice(a, b)), seg = p.n.slice(a, b);
    /* surligne chaque mot (positions identiques entre texte normalisé et original) */
    const marks = [];
    const bord = (j, l) => !/[a-z0-9]/.test(seg[j - 1] || " ") && !/[a-z0-9]/.test(seg[j + l] || " ");
    if (mots.length > 1) { let j = -1; while ((j = seg.indexOf(phrase, j + 1)) >= 0) marks.push([j, j + phrase.length]); }
    mots.forEach(w => { let j = -1; while ((j = seg.indexOf(w, j + 1)) >= 0) if (w.length > 3 || bord(j, w.length)) marks.push([j, j + w.length]); });
    if (marks.length) {
      marks.sort((x, y) => x[0] - y[0]);
      const t = p.t.slice(a, b); let o = "", last = 0;
      marks.forEach(([x, y]) => { if (x < last) return; o += esc(t.slice(last, x)) + "<mark>" + esc(t.slice(x, y)) + "</mark>"; last = y; });
      h = o + esc(t.slice(last));
    }
    return (a > 0 ? "… " : "") + h + (b < p.t.length ? " …" : "");
  }
  let rechercheN = 0;
  window.noticeSearch = async function (q, el) {
    const moi = ++rechercheN;
    if (!el) return 0;
    el.innerHTML = `<h2>Dans les notices PDF</h2><p class="note">Recherche dans le texte des notices…</p>`;
    let idx;
    try { idx = await chargeTexte(); } catch (e) {
      if (moi === rechercheN) el.innerHTML = `<h2>Dans les notices PDF</h2><p class="note">Le texte des notices n'est pas encore sur ce téléphone : ouvrez l'appli une fois avec du réseau.</p>`;
      return -1;
    }
    if (moi !== rechercheN) return -1;
    const res = chercher(idx, q);
    if (!res.length) { el.innerHTML = ""; return 0; }
    const nbP = res.reduce((s, r) => s + r.pages.length, 0);
    const bloc = r => {
      const it = r.doc.items[0], ni = nomItem(it.id), autres = r.doc.items.length - 1;
      return `<div class="nsr"><div class="nsrh"><span class="badge" style="--c:${esc(ni.c)}">${esc(ni.m)}</span><b>${esc(it.n.t)}</b><small>${esc(ni.nom)}${autres > 0 ? ` (+ ${autres} autre${autres > 1 ? "s" : ""} fiche${autres > 1 ? "s" : ""})` : ""} · ${r.pages.length} page${r.pages.length > 1 ? "s" : ""}</small></div>` +
        r.pages.slice(0, 3).map(pg => `<button class="nsrp" onclick="go('#/pdf/${esc(it.id)}/${it.k}/${pg.i + 1}/${qh}')"><span class="pill">p. ${pg.i + 1}</span><span>${extrait(r.doc.pages[pg.i], r.mots, r.phrase)}</span></button>`).join("") +
        (r.pages.length > 3 ? `<small class="nsrm">Autres pages : ${r.pages.slice(3, 15).map(pg => `<a href="#/pdf/${esc(it.id)}/${it.k}/${pg.i + 1}/${qh}">${pg.i + 1}</a>`).join(" · ")}${r.pages.length > 15 ? " …" : ""}</small>` : "") + `</div>`;
    };
    const qh = esc(encodeURIComponent(q).replace(/'/g, "%27"));
    const N0 = 8;
    el.innerHTML = `<h2>Dans les notices PDF (${nbP} page${nbP > 1 ? "s" : ""}, ${res.length} notice${res.length > 1 ? "s" : ""})</h2><p class="note">Touchez un extrait pour ouvrir la notice à cette page. Le texte des pages scannées a été lu automatiquement : il peut manquer des mots.</p>` +
      res.slice(0, N0).map(bloc).join("") + (res.length > N0 ? `<button class="dbtn" id="nsrplus">Voir les ${res.length - N0} autres notices</button>` : "");
    /* raccourci en haut des résultats quand la section des notices est loin en bas */
    const app = el.parentNode;
    if (app && el.offsetTop > innerHeight * 0.8) { const old = app.querySelector("#nsjump"); if (old) old.remove();
      app.insertAdjacentHTML("afterbegin", `<button class="mini" id="nsjump" style="margin-top:12px">📄 ${nbP} page${nbP > 1 ? "s" : ""} trouvée${nbP > 1 ? "s" : ""} dans les notices PDF ↓</button>`);
      app.querySelector("#nsjump").onclick = () => el.scrollIntoView({ behavior: "smooth" }); }
    const b = el.querySelector("#nsrplus");
    if (b) b.onclick = () => { b.insertAdjacentHTML("beforebegin", res.slice(N0).map(bloc).join("")); b.remove(); };
    return res.length;
  };
  /* depuis un code de la fiche : ouvre la notice à la page où ce code apparaît (pages qui reprennent aussi les mots du titre en premier) */
  window.noticeGoto = async function (id, code, btn) {
    const lab = btn ? btn.textContent : "";
    if (btn) { btn.disabled = true; btn.textContent = "Recherche dans la notice…"; }
    try {
      const idx = await chargeTexte();
      const docs = idx.filter(d => d.items.some(x => x.id === id));
      const res = chercher(docs, code);
      let titre = "";
      try { const b = typeof BOARDS !== "undefined" && BOARDS.find(x => x.c.id === id); const c = b && b.c.codes.find(x => x.code === code); titre = c ? c.titre : ""; } catch (e) {}
      const mt = normL(titre).split(/[^a-z0-9]+/).filter(w => w.length >= 4);
      let best = null;
      res.forEach(r => r.pages.forEach(pg => {
        const t = r.doc.pages[pg.i].n; const sc = pg.sc + 5 * mt.filter(w => t.includes(w)).length;
        if (!best || sc > best.sc) best = { sc, r, i: pg.i };
      }));
      if (best) { const it = best.r.doc.items.find(x => x.id === id); go(`#/pdf/${id}/${it.k}/${best.i + 1}/${encodeURIComponent(code)}`); return; }
      if (btn) { btn.textContent = `« ${code} » n'apparaît pas dans le texte de la notice`; }
    } catch (e) {
      if (btn) { btn.disabled = false; btn.textContent = "Texte de la notice indisponible sans réseau (ouvrez l'appli une fois avec du réseau)"; }
    }
  };
  /* charge le texte en arrière-plan quand l'appli démarre avec du réseau, pour que la recherche marche ensuite hors ligne */
  addEventListener("load", () => setTimeout(() => { if (navigator.onLine !== false) chargeTexte().catch(() => {}); }, 8000));

})();
