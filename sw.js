/* Service worker — tout est mis en cache à l'installation.
   Après modification de data.js ou index.html, augmenter VERSION. */
const VERSION = "sav-2026-10-24-66";
const OCR = "sav-ocr-1";
const FILES = ["./", "index.html", "data.js", "diag.js", "ask.js", "acc.js", "img.js", "auth.js", "sympt.js", "scan.js", "manifest.webmanifest",
  "icons/icon-192.png", "icons/icon-512.png", "icons/icon-maskable-512.png", "icons/apple-touch-icon.png",
  "icons/marques/came.png", "icons/marques/nice.png", "icons/marques/faac.png", "icons/marques/bft.png", "icons/marques/roger.png", "icons/marques/afca.png", "icons/marques/casit.png", "icons/marques/optex.png", "icons/marques/cardin.png", "icons/marques/doitrand.png", "icons/marques/intratone.png", "icons/marques/locinox.png", "icons/marques/lba.png", "icons/marques/prastel.png", "icons/marques/dea.png", "icons/marques/theben.png", "icons/marques/elka.png", "icons/marques/opera.png", "icons/marques/bbc-bircher.png", "icons/marques/sewosy.png", "icons/marques/jcm-technologies.png",
  "schemas/elka-p-p41.webp","schemas/elka-mo24-p05.webp","schemas/elka-p-p43.webp","schemas/elka-p-p44.webp","schemas/elka-p-p45.webp","schemas/elka-p-p46.webp","schemas/elka-p-p47.webp","schemas/elka-p-p48.webp","schemas/elka-t-p33.webp","schemas/elka-t-p36.webp","schemas/elka-t-p37.webp","schemas/elka-t-p38.webp","schemas/elka-t-p39.webp","schemas/elka-t-p40.webp","schemas/lba67-p24.webp","schemas/lba67-p61.webp","schemas/lba67-p62.webp","schemas/lba67-p60.webp","schemas/lba67-p63.webp","schemas/lba67-p64.webp","schemas/lba67-p65.webp","schemas/lba4-p41.webp","schemas/lba4-p59.webp","schemas/thalia-p03.webp","schemas/thalia-p04.webp","schemas/thalia-p10.webp","schemas/thalia-p11.webp","schemas/deimos-p03.webp","schemas/deimos-p04.webp","schemas/deimos-p09.webp","schemas/doitrand-lf82-p1.webp","schemas/doitrand-lf82-p5.webp","schemas/doitrand-lf82-p6.webp","schemas/faac-455d-p24.webp","schemas/faac-455d-p25.webp","schemas/faac-780d-p40.webp","schemas/faac-e024s-p04.webp","schemas/faac-e024s-p06.webp","schemas/nice-robus-r10-p10.webp","schemas/nice-robus-r10-p11.webp","schemas/dea-net230n-p72.webp","schemas/dea-net230n-p73.webp","schemas/dea-net230n-p74.webp","schemas/dea-net230n-p75.webp","schemas/dea-net230n-p76.webp","schemas/dea-net230n-p77.webp","schemas/dea-net230n-p78.webp","schemas/dea-net24n-p08.webp","schemas/dea-net24n-p09.webp","schemas/dea-net24n-p10.webp","schemas/dea-net24n-p11.webp","schemas/dea-net24n-p12.webp","schemas/casit-eq2000-p6.webp","schemas/casit-eq2006-p2.webp","schemas/casit-eq2009-p2.webp","schemas/casit-eq212-p2.webp","schemas/casit-keq013-p17.webp","schemas/casit-keq013-p18.webp","schemas/casit-keq013-p4.webp","schemas/casit-keq405-p1.webp","schemas/casit-keqs08-p1.webp","schemas/casit-keqs08-p4.webp","schemas/casit-keqs08-p8.webp", "schemas/bircher-rfgate-p2.webp","schemas/bircher-rfgate-p3.webp","schemas/bircher-xrf1-p2.webp","schemas/bircher-xrf1-p3.webp","schemas/optex-ovs02-p37.webp","schemas/optex-ovs02-p5.webp", "schemas/sewosy-k1000-p02.webp", "schemas/prastel-easyka-p02.webp", "schemas/prastel-easybk-s1.webp", "schemas/prastel-easybk-s2.webp", "schemas/prastel-febo-p1.webp", "schemas/casit-cs2-p8.webp", "schemas/theben-top3-p1.webp", "schemas/theben-top2-p4.webp", "schemas/opera-28800-p6.webp", "schemas/opera-28800-p7.webp", "schemas/locinox-electradrop-p2.webp", "schemas/cardin-s504-p14.webp", "schemas/cardin-s504-p15.webp", "schemas/cardin-s504-p16.webp", "schemas/cardin-s449-p49.webp", "schemas/cardin-s449-p50.webp", "schemas/cardin-s449-p51.webp", "schemas/intratone-c1-p05.webp", "schemas/intratone-c1-p06.webp", "schemas/intratone-c2-p03.webp", "schemas/intratone-c2-p06.webp", "schemas/intratone-c2-p07.webp", "schemas/intratone-onlyone-p06.webp", "schemas/intratone-relais-p3.webp", "schemas/intratone-relais-p6.webp", "schemas/intratone-mini-kp-p4.webp", "schemas/intratone-mini-kp-p5.webp", "schemas/intratone-minihf-p06.webp", "schemas/intratone-minihf-p07.webp", "schemas/afca-c3-p03.webp", "schemas/afca-c3-p04.webp", "schemas/afca-c3-p06.webp", "schemas/afca-c3-p07.webp", "schemas/afca-c3-p08.webp", "schemas/afca-c3m-p03.webp", "schemas/afca-c3m-p04.webp", "schemas/afca-c3m-p06.webp", "schemas/afca-c4-p03.webp", "schemas/afca-c4-p05.webp", "schemas/afca-c4-p07.webp", "schemas/afca-c4-p09.webp", "schemas/afca-c4-p11.webp", "schemas/bft-leo-b-cbb-p032.webp", "schemas/bft-leo-b-cbb-p033.webp", "schemas/bft-merak-p052.webp", "schemas/bft-merak-p053.webp", "schemas/came-88003-0184-p09.webp", "schemas/came-za3-p11.webp", "schemas/came-za3p-fa01883-p05.webp", "schemas/came-za3p-fa01883-p07.webp", "schemas/came-za3p-fa01883-p08.webp", "schemas/came-za3p-fa01883-p09.webp", "schemas/came-za3p-p13.webp", "schemas/came-za4-p11.webp", "schemas/came-za5-p11.webp", "schemas/came-zbx10-p11.webp", "schemas/came-zbx241-p09.webp", "schemas/came-zbx241-p11.webp", "schemas/came-zl90-p15.webp", "schemas/came-zl92-p11.webp", "schemas/came-zl92-p12.webp", "schemas/nice-run-p61.webp", "schemas/roger-b70-1dc-p126.webp", "schemas/roger-b70-1dc-p127.webp", "schemas/roger-b70-1dc-p128.webp", "schemas/roger-b70-1dc-p129.webp", "schemas/roger-b70-1dc-p130.webp", "schemas/roger-b70-1dchp-p119.webp", "schemas/roger-b70-1dchp-p120.webp", "schemas/roger-b70-1dchp-p121.webp", "schemas/roger-b70-1dchp-p122.webp", "schemas/roger-b70-2ml-p102.webp", "schemas/roger-b70-2ml-p103.webp", "schemas/roger-b70-2ml-p104.webp", "schemas/roger-b70-2ml-p105.webp", "schemas/roger-ctrl-p132.webp", "schemas/roger-ctrl-p133.webp", "schemas/roger-ctrl-p134.webp", "schemas/roger-ctrl-p135.webp", "schemas/roger-ctrl-p136.webp", "schemas/roger-edge1-p115.webp", "schemas/roger-edge1-p116.webp", "schemas/roger-edge1-p117.webp", "schemas/roger-edge1-p118.webp", "schemas/roger-edge1-p119.webp", "schemas/v2-lumos-p03.webp", "schemas/v2-forteco-p66.webp", "schemas/v2-forteco-p68.webp","schemas/v2-pd19-p66.webp","schemas/v2-pd14-p72.webp","schemas/v2-pd14-p73.webp","schemas/v2-heavy1-p58.webp","schemas/v2-heavy1-p59.webp","schemas/afca-fpass-p10.webp","schemas/afca-fpass-p21.webp","schemas/afca-si-p03.webp","schemas/afca-si-p04.webp","schemas/afca-si-p13.webp","schemas/afca-srm-p04.webp","schemas/v2-city1-p67.webp","schemas/v2-city1-p66.webp","schemas/v2-city1-p72.webp","schemas/v2-city1-p75.webp","schemas/v2-city1-p80.webp","schemas/v2-city4-p63.webp","schemas/v2-city4-p62.webp","schemas/v2-city4-p69.webp","schemas/v2-city4-p72.webp","schemas/v2-city4-p71.webp","schemas/v2-city11-p18.webp","schemas/v2-city11-p19.webp","schemas/v2-city11-p20.webp","schemas/v2-city11-p15.webp","schemas/afca-city5-p03.webp","schemas/afca-city5-p05.webp","schemas/afca-flexy2-p03.webp","schemas/afca-flexy2-p05.webp","schemas/jcm-rb3-p05.webp","schemas/jcm-rb3-p06.webp","schemas/jcm-rb3-p09.webp","schemas/jcm-rb3-p13.webp","schemas/jcm-radioband-p1.webp","schemas/jcm-radioband-p3.webp","schemas/afca-st1-p03.webp","schemas/afca-st1-p04.webp","schemas/afca-st1-p05.webp","schemas/afca-st1-p07.webp","schemas/afca-st1-p08.webp","schemas/v2-ev-forteco-1.webp","schemas/v2-ev-forteco-2.webp","schemas/v2-ev-ayros24-1.webp","schemas/v2-ev-ayros24-2.webp","schemas/v2-ev-ayros230-1.webp","schemas/v2-ev-ayros230-2.webp", "schemas/afca-c4r-p03.webp", "schemas/afca-c4r-p05.webp", "schemas/afca-c4r-p06.webp", "schemas/afca-c4r-p07.webp",
  ];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(FILES.map(f => new Request(f, { cache: "reload" })))).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== VERSION && k !== OCR).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
/* Réseau d'abord (3 s max) pour avoir toujours la dernière version ; cache si pas de réseau. */
/* Vérification / réparation du téléchargement hors ligne (demandée par la page) */
self.addEventListener("message", e => {
  const port = e.ports && e.ports[0]; if (!port) return;
  e.waitUntil((async () => {
    const c = await caches.open(VERSION);
    const missing = async () => { const m = []; for (const f of FILES) if (!(await c.match(f))) m.push(f); return m; };
    let m = await missing();
    if (e.data === "repair" && m.length){ await Promise.allSettled(m.map(f => c.add(new Request(f, { cache: "reload" })))); m = await missing(); }
    port.postMessage({ version: VERSION, total: FILES.length, missing: m.length });
  })());
});
/* Moteur de lecture d'étiquette (cdn.jsdelivr.net, versions figées) : mis en cache après le premier usage */
self.addEventListener("fetch", e => {
  const u = new URL(e.request.url);
  if (e.request.method === "GET" && u.hostname === "cdn.jsdelivr.net" && /tesseract/.test(u.pathname)){
    e.respondWith(caches.open(OCR).then(async c => (await c.match(e.request)) || fetch(e.request).then(r => { if (r.ok) c.put(e.request, r.clone()); return r; })));
    return;
  }
  if (e.request.method !== "GET" || u.origin !== location.origin) return;
  e.respondWith((async () => {
    const cache = await caches.open(VERSION);
    const net = fetch(e.request, { cache: "no-cache" }).then(res => {
      if (res.ok) cache.put(e.request, res.clone());
      return res;
    });
    const timeout = new Promise(r => setTimeout(r, 3000));
    try {
      const res = await Promise.race([net, timeout]);
      if (res) return res;
    } catch (_) {}
    const hit = await cache.match(e.request, { ignoreSearch: true }) || (e.request.mode === "navigate" && await cache.match("index.html"));
    return hit || net;
  })());
});
