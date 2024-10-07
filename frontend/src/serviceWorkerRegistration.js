// src/serviceWorkerRegistration.js

// Esto es opcional: si quieres usar el service worker en modo de desarrollo.
const isLocalhost = Boolean(
    window.location.hostname === 'localhost' ||
    // [::1] es la dirección IPv6 del localhost.
    window.location.hostname === '[::1]' ||
    // 127.0.0.1/8 es considerado localhost para IPv4.
    window.location.hostname.match(
      /^127(?:\.[0-9]+){0,2}\.[0-9]+$/
    )
  );
  
  export function register(config) {
    if ('serviceWorker' in navigator) {
      const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);
      if (publicUrl.origin !== window.location.origin) {
        // Nuestro service worker no funcionará si PUBLIC_URL está en un origen diferente.
        return;
      }
  
      window.addEventListener('load', () => {
        const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;
  
        if (isLocalhost) {
          // Esto es para localhost. Podemos verificar si el service worker existe.
          checkValidServiceWorker(swUrl, config);
          navigator.serviceWorker.ready.then(() => {
            console.log('Esta aplicación está siendo servida por un cache service worker.');
          });
        } else {
          // Para el resto de usuarios, simplemente registra el service worker.
          registerValidSW(swUrl, config);
        }
      });
    }
  }
  
  function registerValidSW(swUrl, config) {
    navigator.serviceWorker
      .register(swUrl)
      .then(registration => {
        registration.onupdatefound = () => {
          const installingWorker = registration.installing;
          if (installingWorker == null) {
            return;
          }
          installingWorker.onstatechange = () => {
            if (installingWorker.state === 'installed') {
              if (navigator.serviceWorker.controller) {
                console.log('Nuevo contenido está disponible; por favor, recarga la página.');
                if (config && config.onUpdate) {
                  config.onUpdate(registration);
                }
              } else {
                console.log('Contenido cacheado para uso offline.');
                if (config && config.onSuccess) {
                  config.onSuccess(registration);
                }
              }
            }
          };
        };
      })
      .catch(error => {
        console.error('Error durante el registro del service worker:', error);
      });
  }
  
  function checkValidServiceWorker(swUrl, config) {
    // Verifica si el service worker existe. Si no, recarga la página.
    fetch(swUrl)
      .then(response => {
        const contentType = response.headers.get('content-type');
        if (
          response.status === 404 ||
          (contentType != null && contentType.indexOf('javascript') === -1)
        ) {
          // Si no se encuentra el archivo del service worker, recarga.
          navigator.serviceWorker.ready.then(registration => {
            registration.unregister().then(() => {
              window.location.reload();
            });
          });
        } else {
          registerValidSW(swUrl, config);
        }
      })
      .catch(() => {
        console.log('No se pudo encontrar una conexión a internet. La aplicación está en modo offline.');
      });
  }
  
  export function unregister() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister();
      });
    }
  }
  