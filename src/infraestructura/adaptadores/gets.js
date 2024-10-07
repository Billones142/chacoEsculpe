const express = require("express")

router= express.Router()

router.get("/",(req, res)=>{
    res.redirect("/public/index.html")
})

router.use("/public", express.static("./public"))
module.exports= router