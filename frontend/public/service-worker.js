// Nombre de la caché
const CACHE_NAME = 'v1';

// Archivos a cachear
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/static/js/bundle.js', // Archivos estáticos importantes
  '/static/css/main.css',
  '/favicon.ico',  // Agrega otros archivos que necesites
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

