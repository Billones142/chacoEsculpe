const mongoose = require('mongoose');

const EscultorSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    votos: { type: Number, default: 0 }
});

module.exports = mongoose.model('Escultor', EscultorSchema);
