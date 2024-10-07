const express = require('express');
const router = express.Router();
const EscultorService = require('../servicios/EscultorService');

// Ruta para votar por un escultor
router.post('/votar/:id', async (req, res) => {
    try {
        await EscultorService.votarPorEscultor(req.params.id);
        res.status(200).send({ mensaje: 'Voto registrado' });
    } catch (error) {
        res.status(500).send({ error: 'Error al votar' });
    }
});

module.exports = router;
