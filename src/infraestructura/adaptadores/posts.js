const express = require("express");
const IEscultorService = require('../../puertos/IEscultorService');

function createPostRouter(escultorService) {
    const router = express.Router();

    router.post('/api/voting/*', async (req, res) => {
        const id = String(req.url).replace("/api/voting/", "");
        console.log('ID recibido:', id);
        try {
            await escultorService.votarPorEscultor(id);
            res.send('Voto registrado');
        } catch (error) {
            res.status(500).send('Error al registrar el voto');
        }
    });

    return router;
}

module.exports = createPostRouter;