const IEscultorService = require('../puertos/IEscultorService');
const EscultorRepository = require('../repositorios/EscultorRepository');

class EscultorService extends IEscultorService {
    constructor(escultorRepository) {
        super();
        this.escultorRepository = escultorRepository;
    }

    async votarPorEscultor(id) {
        const escultor = await this.escultorRepository.obtenerPorId(id);
        if (!escultor) throw new Error('Escultor no encontrado');
        escultor.votos += 1;
        await this.escultorRepository.actualizarEscultor(escultor);
    }

    async obtenerEscultores() {
        return await this.escultorRepository.obtenerTodos();
    }
}

module.exports = EscultorService;
