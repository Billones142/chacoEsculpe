import React from 'react';
import Escultor from './Escultor';

const votarPorEscultor = async (id) => {
  console.log('ID enviado al backend:', id);
  try {
    const response = await fetch(origin + `/api/votar/${id}`, { method: 'POST' });
    if (response.ok) {
        const message = await response.text();
        alert(message); // Muestra el mensaje de éxito
    } else {
        alert('Error al registrar el voto');
    }
} catch (error) {
    console.error('Error en la solicitud:', error);
    
}
};
function App() {
    return (
        <div>
            <h1>Votación de Escultores</h1>
            <Escultor id="67034b6bae46d9c747c93890" nombre="Escultor 1" votar={votarPorEscultor} />
            <Escultor id="67034b6bae46d9c747c93891" nombre="Escultor 2" votar={votarPorEscultor} />
            {/* Agrega más escultores según sea necesario */}
        </div>
    );
}

export default App;
