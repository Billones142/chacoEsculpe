const Escultor = require('../modelos/Escultor');

class EscultorRepository {
    static async obtenerPorId(id) {
        return await Escultor.findById(id);
    }

    static async actualizarEscultor(escultor) {
        return await escultor.save();
    }
}

module.exports = EscultorRepository;
