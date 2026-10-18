/* Service worker — tout est mis en cache à l'installation.
   Après modification de data.js ou index.html, augmenter VERSION. */
const VERSION = "sav-2026-10-18-22";
const FILES = ["./", "index.html", "data.js", "diag.js", "ask.js", "acc.js", "img.js", "manifest.webmanifest",
  "icons/icon-192.png", "icons/icon-512.png", "icons/icon-maskable-512.png", "icons/apple-touch-icon.png",
  "icons/marques/came.png", "icons/marques/nice.png", "icons/marques/faac.png", "icons/marques/bft.png", "icons/marques/roger.png", "icons/marques/afca.png",
  "schemas/afca-c3-p03.webp", "schemas/afca-c3-p04.webp", "schemas/afca-c3-p06.webp", "schemas/afca-c3-p07.webp", "schemas/afca-c3-p08.webp", "schemas/afca-c3m-p03.webp", "schemas/afca-c3m-p04.webp", "schemas/afca-c3m-p06.webp", "schemas/afca-c4-p03.webp", "schemas/afca-c4-p05.webp", "schemas/afca-c4-p07.webp", "schemas/afca-c4-p09.webp", "schemas/afca-c4-p11.webp", "schemas/came-88003-0184-p09.webp", "schemas/came-za3-p11.webp", "schemas/came-za3p-p13.webp", "schemas/came-za4-p11.webp", "schemas/came-za5-p11.webp", "schemas/came-zbx10-p11.webp", "schemas/came-zbx241-p09.webp", "schemas/came-zbx241-p11.webp", "schemas/came-zl90-p15.webp", "schemas/came-zl92-p11.webp", "schemas/came-zl92-p12.webp", "schemas/nice-run-p61.webp", "schemas/v2-lumos-p03.webp",
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
