const CACHE_NAME = 'cuentas-futbol-v4';
const ASSETS = [
  './',
  './index.html',
  './icon.svg',
  './manifest.json'
];

self.addEventListener('install', e => {
  // Obliga al navegador a instalar esta nueva versión inmediatamente
  self.skipWaiting(); 
  e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)));
});

self.addEventListener('activate', e => {
  // Borra la caché vieja para que no queden restos
  e.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      );
    })
  );
  // Toma el control de la página al instante
  self.clients.claim(); 
});

self.addEventListener('fetch', e => {
  // Ignorar las peticiones de extensiones de Chrome para evitar el error
  if (!e.request.url.startsWith('http')) {
    return;
  }

  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request).then(fetchRes => {
        return caches.open(CACHE_NAME).then(cache => {
          cache.put(e.request.url, fetchRes.clone());
          return fetchRes;
        });
      });
    }).catch(() => {
        return caches.match('./index.html');
    })
  );
});
