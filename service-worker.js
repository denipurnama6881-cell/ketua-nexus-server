const CACHE_NAME = "ketua-nexus-quantum-1000000000-v57";
const FILES = ["./", "./index.html", "./foto.jpg", "./logo-192.png", "./logo-512.png", "./manifest.json"];
self.addEventListener("install", e => { e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(FILES))); self.skipWaiting(); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(keys => Promise.all(keys.map(k => { if(k!==CACHE_NAME) return caches.delete(k); })))); self.clients.claim(); });
self.addEventListener("fetch", e => { e.respondWith(caches.match(e.request).then(r => r || fetch(e.request).catch(() => caches.match("./index.html")))); });
