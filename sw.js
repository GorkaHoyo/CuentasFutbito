const CACHE_NAME = 'futbol-cache-v5';

self.addEventListener('install', (event) => {
  self.skipWaiting(); // Se instala al instante
});

self.addEventListener('activate', (event) => {
  // EL EXTERMINADOR: Al activarse, borra TODAS las cachés antiguas para desatascar la app
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          return caches.delete(cacheName);
        })
      );
    })
  );
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Pide siempre a internet primero.
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
