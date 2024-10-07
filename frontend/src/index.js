import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration'; // Asegúrate de tener este archivo

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// Registrar el service worker
serviceWorkerRegistration.register(); // Cambia esto para registrar el service worker
