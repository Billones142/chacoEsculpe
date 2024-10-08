// Nombre de la caché
const CACHE_NAME = 'v1';

// Archivos a cachear
const urlsToCache = [
  '/',
  '/public/manifest.json',
  '/public/index.html',
  '/public/css/style.css',
  '/public/js/index.js',
  '/public/js/listaDeEscultores.js',
  '/public/images/icons/favicon.ico',
  '/public/images/icons/icon-128x128.png',
  '/public/images/icons/icon-256x256.png',
  '/public/images/icons/icon-512x512.png',
  '/public/images/WideScreenshot-1280x720',
  '/public/images/MobileScreenshot-720x1280',
];

// Evento de instalación
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Evento de activación (limpia el caché antiguo si hay nuevas versiones)
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Evento fetch para manejar las solicitudes de red
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;  // Si la solicitud coincide con algo en caché, devuélvelo.
        }
        return fetch(event.request);  // Si no, realiza la solicitud a la red.
      })
      .catch(() => {
        // Si todo falla, podrías servir un fallback, como una página de error o algo predeterminado
        return caches.match('/index.html');  // Por ejemplo, la página principal
      })
  );
});

