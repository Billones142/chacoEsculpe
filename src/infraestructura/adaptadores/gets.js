const express = require("express");
const IEscultorService = require('../../puertos/IEscultorService');

function createGetRouter(escultorService) {
    const router = express.Router();

    router.get("/", (req, res) => {
        res.redirect("/public/index.html");
    });

    router.get("/api/voting", async (req, res) => {
        try {
            let escultores = await escultorService.obtenerEscultores();
            res.json(escultores);
        } catch (error) {
            res.status(500).send('Error al obtener escultores');
        }
    });

    router.use("/public", express.static("./public"));

    return router;
}

module.exports = createGetRouter;