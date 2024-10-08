const EscultorRepository = require('../repositorios/EscultorRepository');

class EscultorService {
    static async votarPorEscultor(id) {
        const escultor = await EscultorRepository.obtenerPorId(id);
        if (!escultor) throw new Error('Escultor no encontrado');
        escultor.votos += 1;
        await EscultorRepository.actualizarEscultor(escultor);
    }
}

module.exports = EscultorService;
