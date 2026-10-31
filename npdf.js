/* Onglet « Notice PDF » : notices du fabricant (pages françaises) lues dans l'appli.
   Le PDF est téléchargé à la première ouverture puis gardé hors ligne (cache « sav-notices » du service worker).
   Lecteur : pdf.js (Mozilla, build « legacy » 6.2.108) hébergé avec l'appli dans vendor/pdfjs, gardé en cache après le premier usage. */
(function () {
  const BASE = new URL("vendor/pdfjs/", location.href).href;
  const CACHE = "sav-notices-1";
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
      <p class="note">Touchez une page pour l'agrandir (pincement ou + / −).</p>`;
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
    const ZS = [1, 1.5, 2, 3];
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
      const dpr = Math.min(window.devicePixelRatio || 1, 2.5);
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
    async function agrandir(i) {
      if (!window.schemaOpen || !window.SCHEMAS) return;
      const page = await pdf.getPage(i);
      const v1 = page.getViewport({ scale: 1 });
      const v = page.getViewport({ scale: Math.min(4, 2400 / v1.width) });
      const c = document.createElement("canvas"); c.width = Math.floor(v.width); c.height = Math.floor(v.height);
      await page.render({ canvasContext: c.getContext("2d"), viewport: v }).promise;
      c.toBlob(b => {
        const old = SCHEMAS.__pdf && SCHEMAS.__pdf[0]; if (old) URL.revokeObjectURL(old.f);
        SCHEMAS.__pdf = [{ f: URL.createObjectURL(b), t: `${n.t} — page ${i}`, p: i, d: "" }];
        schemaOpen("__pdf", 0);
      }, "image/jpeg", 0.85);
    }
  };
})();
