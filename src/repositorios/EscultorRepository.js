const IEscultorRepository = require('../puertos/IEscultorRepository');
const Escultor = require('../modelos/Escultor');

class EscultorRepository extends IEscultorRepository {
    async obtenerPorId(id) {
        return await Escultor.findById(id);
    }

    async actualizarEscultor(escultor) {
        return await escultor.save();
    }

    async obtenerTodos() {
        return await Escultor.find({});
    }
}

module.exports = EscultorRepository;
