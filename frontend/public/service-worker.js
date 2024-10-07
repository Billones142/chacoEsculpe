self.addEventListener('install', event => {
    event.waitUntil(
      caches.open('v1').then(cache => {
        return cache.addAll([
          '/',
          '/index.html',
          '/manifest.json',
          '/static/js/bundle.js', // Asegúrate de incluir todos los archivos estáticos que necesitas
          '/static/css/main.css'
        ]);
      })
    );
  });
  
 
  