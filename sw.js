/* Service worker — tout est mis en cache à l'installation.
   Après modification de data.js ou index.html, augmenter VERSION. */
const VERSION = "sav-2026-10-18-38";
const FILES = ["./", "index.html", "data.js", "diag.js", "ask.js", "acc.js", "img.js", "manifest.webmanifest",
  "icons/icon-192.png", "icons/icon-512.png", "icons/icon-maskable-512.png", "icons/apple-touch-icon.png",
  "icons/marques/came.png", "icons/marques/nice.png", "icons/marques/faac.png", "icons/marques/bft.png", "icons/marques/roger.png", "icons/marques/afca.png", "icons/marques/casit.png",
  "schemas/elka-p-p41.webp","schemas/elka-mo24-p05.webp","schemas/elka-p-p43.webp","schemas/elka-p-p44.webp","schemas/elka-p-p45.webp","schemas/elka-p-p46.webp","schemas/elka-p-p47.webp","schemas/elka-p-p48.webp","schemas/elka-t-p33.webp","schemas/elka-t-p36.webp","schemas/elka-t-p37.webp","schemas/elka-t-p38.webp","schemas/elka-t-p39.webp","schemas/elka-t-p40.webp","schemas/lba67-p24.webp","schemas/lba67-p61.webp","schemas/lba67-p62.webp","schemas/lba67-p60.webp","schemas/lba67-p63.webp","schemas/lba67-p64.webp","schemas/lba67-p65.webp","schemas/lba4-p41.webp","schemas/lba4-p59.webp","schemas/doitrand-lf82-p1.webp","schemas/doitrand-lf82-p5.webp","schemas/doitrand-lf82-p6.webp","schemas/faac-455d-p24.webp","schemas/faac-455d-p25.webp","schemas/faac-780d-p40.webp","schemas/faac-e024s-p04.webp","schemas/faac-e024s-p06.webp","schemas/nice-robus-r10-p10.webp","schemas/nice-robus-r10-p11.webp","schemas/dea-net230n-p72.webp","schemas/dea-net230n-p73.webp","schemas/dea-net230n-p74.webp","schemas/dea-net230n-p75.webp","schemas/dea-net230n-p76.webp","schemas/dea-net230n-p77.webp","schemas/dea-net230n-p78.webp","schemas/dea-net24n-p08.webp","schemas/dea-net24n-p09.webp","schemas/dea-net24n-p10.webp","schemas/dea-net24n-p11.webp","schemas/dea-net24n-p12.webp","schemas/casit-eq2000-p6.webp","schemas/casit-eq2006-p2.webp","schemas/casit-eq2009-p2.webp","schemas/casit-eq212-p2.webp","schemas/casit-keq013-p17.webp","schemas/casit-keq013-p18.webp","schemas/casit-keq013-p4.webp","schemas/casit-keq405-p1.webp","schemas/casit-keqs08-p1.webp","schemas/casit-keqs08-p4.webp","schemas/casit-keqs08-p8.webp", "schemas/bircher-rfgate-p2.webp","schemas/bircher-rfgate-p3.webp","schemas/bircher-xrf1-p2.webp","schemas/bircher-xrf1-p3.webp","schemas/optex-ovs02-p37.webp","schemas/optex-ovs02-p5.webp", "schemas/afca-c3-p03.webp", "schemas/afca-c3-p04.webp", "schemas/afca-c3-p06.webp", "schemas/afca-c3-p07.webp", "schemas/afca-c3-p08.webp", "schemas/afca-c3m-p03.webp", "schemas/afca-c3m-p04.webp", "schemas/afca-c3m-p06.webp", "schemas/afca-c4-p03.webp", "schemas/afca-c4-p05.webp", "schemas/afca-c4-p07.webp", "schemas/afca-c4-p09.webp", "schemas/afca-c4-p11.webp", "schemas/bft-leo-b-cbb-p032.webp", "schemas/bft-leo-b-cbb-p033.webp", "schemas/bft-merak-p052.webp", "schemas/bft-merak-p053.webp", "schemas/came-88003-0184-p09.webp", "schemas/came-za3-p11.webp", "schemas/came-za3p-fa01883-p05.webp", "schemas/came-za3p-fa01883-p07.webp", "schemas/came-za3p-fa01883-p08.webp", "schemas/came-za3p-fa01883-p09.webp", "schemas/came-za3p-p13.webp", "schemas/came-za4-p11.webp", "schemas/came-za5-p11.webp", "schemas/came-zbx10-p11.webp", "schemas/came-zbx241-p09.webp", "schemas/came-zbx241-p11.webp", "schemas/came-zl90-p15.webp", "schemas/came-zl92-p11.webp", "schemas/came-zl92-p12.webp", "schemas/nice-run-p61.webp", "schemas/roger-b70-1dc-p126.webp", "schemas/roger-b70-1dc-p127.webp", "schemas/roger-b70-1dc-p128.webp", "schemas/roger-b70-1dc-p129.webp", "schemas/roger-b70-1dc-p130.webp", "schemas/roger-b70-1dchp-p119.webp", "schemas/roger-b70-1dchp-p120.webp", "schemas/roger-b70-1dchp-p121.webp", "schemas/roger-b70-1dchp-p122.webp", "schemas/roger-b70-2ml-p102.webp", "schemas/roger-b70-2ml-p103.webp", "schemas/roger-b70-2ml-p104.webp", "schemas/roger-b70-2ml-p105.webp", "schemas/roger-ctrl-p132.webp", "schemas/roger-ctrl-p133.webp", "schemas/roger-ctrl-p134.webp", "schemas/roger-ctrl-p135.webp", "schemas/roger-ctrl-p136.webp", "schemas/roger-edge1-p115.webp", "schemas/roger-edge1-p116.webp", "schemas/roger-edge1-p117.webp", "schemas/roger-edge1-p118.webp", "schemas/roger-edge1-p119.webp", "schemas/v2-lumos-p03.webp", "schemas/v2-forteco-p66.webp", "schemas/v2-forteco-p68.webp", "schemas/afca-c4r-p03.webp", "schemas/afca-c4r-p05.webp", "schemas/afca-c4r-p06.webp", "schemas/afca-c4r-p07.webp",
  ];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(FILES.map(f => new Request(f, { cache: "reload" })))).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
/* Réseau d'abord (3 s max) pour avoir toujours la dernière version ; cache si pas de réseau. */
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET" || new URL(e.request.url).origin !== location.origin) return;
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
