const CACHE_NAME = 'cuentas-futbol-v3';
const ASSETS = [
  './',
  './index.html',
  './icon.svg',
  './manifest.json'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)));
});

self.addEventListener('fetch', e => {
  // Ignorar las peticiones que vengan de extensiones de Chrome
  if (!e.request.url.startsWith('http')) return;

  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request).then(fetchRes => {
        return caches.open(CACHE_NAME).then(cache => {
          cache.put(e.request.url, fetchRes.clone());
          return fetchRes;
        });
      });
    }).catch(() => {
        // Fallback si no hay internet
        return caches.match('./index.html');
    })
  );
});
