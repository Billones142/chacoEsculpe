const express = require("express")
const Escultor = require('./../modelos/Escultor'); 
const { default: mongoose } = require("mongoose");

router= express.Router()



// Rutas para escultores y votación (agrega tus rutas aquí)
router.post('/api/votar/*', async (req, res) => {
    const id  = req.url.slice("/api/votar/");
    console.log('ID recibido:', id);  // Esto te ayudará a verificar el ID que llega
    try {
        const escultor = await Escultor.findById(id);
        if (!escultor) {
            return res.status(404).send('Escultor no encontrado');
        }
        escultor.votos += 1;
        await escultor.save();
        res.send('Voto registrado');
    } catch (error) {
        res.status(500).send('Error al registrar el voto');
    }
});

module.exports= router