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
  window.viewPdf = async function (id, k) {
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
    const agrandir = i => plein(pdf, i, jeton);
  };

  /* Plein écran : toutes les pages à la suite, défilement vertical, zoom − / + ou double-touche, ‹ › page précédente / suivante */
  async function plein(pdf, depart, jeton) {
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
})();
