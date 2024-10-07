import React from 'react';

const Escultor = ({ id, nombre, votar }) => {
    const handleVote = async () => {
        try {
            await votar(id);
            alert(`Voto registrado para ${nombre}`);
        } catch (error) {
            alert(`Error al registrar voto: ${error.message || error}`);
        }
    };

    return (
        <div>
            <h3>{nombre}</h3>
            <button onClick={handleVote}>Votar</button>
        </div>
    );
};

export default Escultor;
