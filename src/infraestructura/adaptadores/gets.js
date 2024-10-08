const express = require("express")
const Escultor = require('./../../modelos/Escultor'); 

router= express.Router()

router.get("/",(req, res)=>{
    res.redirect("/public/index.html")
})

router.get("/api/voting", async (req, res) => {
    let escultores= await Escultor.find({});
    res.setHeader('Content-Type', 'application/json');
    res.status(200).send(JSON.stringify(escultores))
})

router.use("/public", express.static("./public"))

module.exports= router