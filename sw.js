const CACHE_NAME = 'cuentas-futbol-v5';
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
  // Bloqueo estricto: si no es http o https (como las extensiones), lo ignoramos
  if (!e.request.url.startsWith('http')) {
    return;
  }

  e.respondWith(
    caches.match(e.request).then(response => {
      if (response) return response;
      
      return fetch(e.request).then(fetchRes => {
        // Doble comprobación antes de guardar en caché
        if (!fetchRes || fetchRes.status !== 200 || fetchRes.type !== 'basic' || !e.request.url.startsWith('http')) {
            return fetchRes;
        }
        return caches.open(CACHE_NAME).then(cache => {
          try {
            cache.put(e.request, fetchRes.clone());
          } catch (err) {
            // Si hay un error raro al guardar, lo ignoramos en silencio
          }
          return fetchRes;
        });
      }).catch(() => {
        return caches.match('./index.html');
      });
    })
  );
});
