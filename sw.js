const CACHE_NAME = 'futbol-cache-v3';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

// Estrategia: Network First (Primero busca en internet, si falla, usa caché)
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request)
      .then((networkResponse) => {
        // Si hay internet, guardamos una copia fresca en la caché
        const responseClone = networkResponse.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseClone);
        });
        return networkResponse;
      })
      .catch(() => {
        // Si no hay internet (estamos offline), devolvemos lo que tengamos en caché
        return caches.match(event.request);
      })
  );
});
