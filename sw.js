/* Service worker — tout est mis en cache à l'installation.
   Après modification de data.js ou index.html, augmenter VERSION. */
const VERSION = "sav-2026-10-18-12";
const FILES = ["./", "index.html", "data.js", "diag.js", "manifest.webmanifest",
  "icons/icon-192.png", "icons/icon-512.png", "icons/icon-maskable-512.png", "icons/apple-touch-icon.png",
  "icons/marques/came.png", "icons/marques/nice.png", "icons/marques/faac.png", "icons/marques/bft.png", "icons/marques/roger.png"];

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
