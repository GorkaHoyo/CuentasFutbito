const CACHE_NAME = 'cuentas-futbol-v6';
const ASSETS = [
  './',
  './index.html',
  './icon.svg',
  './manifest.json'
];

self.addEventListener('install', e => {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  // Bloqueo total a extensiones y scripts externos que no sean web normales
  if (!e.request.url.startsWith('http')) {
    return;
  }

  e.respondWith(
    caches.match(e.request).then(response => {
      if (response) return response;
      
      return fetch(e.request).then(fetchRes => {
        // Solo guardamos en caché si la respuesta es válida y limpia
        if (!fetchRes || fetchRes.status !== 200 || fetchRes.type !== 'basic') {
            return fetchRes;
        }
        return caches.open(CACHE_NAME).then(cache => {
          try {
            cache.put(e.request, fetchRes.clone());
          } catch (err) {} // Ignoramos errores de put en silencio
          return fetchRes;
        });
      }).catch(() => {
        return caches.match('./index.html');
      });
    })
  );
});
