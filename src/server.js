const express = require('express');
require("dotenv").config({path:".dev.env"});
const { default: mongoose } = require('mongoose');
const createGetRouter = require("./infraestructura/adaptadores/gets");
const createPostRouter = require("./infraestructura/adaptadores/posts");
const EscultorRepository = require('./repositorios/EscultorRepository');
const EscultorService = require('./servicios/EscultorService');

const app = express();
const PORT = Number(process.env.PORT) || 3000;
const DBURI = process.env.MONGODBURI;

app.use(express.json());
app.use(express.static('public')); // agregada en proceso de debuggin incluyendo `listaParaVotar.forEach`

// Dependency Injection
const escultorRepository = new EscultorRepository();
const escultorService = new EscultorService(escultorRepository);

app.use(createPostRouter(escultorService));
app.use(createGetRouter(escultorService));

// Conectar a MongoDB
mongoose.connect(DBURI)
    .then(() => console.log('Conexión a MongoDB exitosa'))
    .catch(err => console.error('Error de conexión a MongoDB:', err));

/*const escultores = [
    { _id: '67034b6bae46d9c747c93890', nombre: 'Escultor 1', votos: 0 },
    { _id: '67034b6bae46d9c747c93891', nombre: 'Escultor 2', votos: 0 },
    { _id: '67034b6bae46d9c747c93892', nombre: 'Escultor 3', votos: 0 },  
];
// Función para insertar escultores
const insertarEscultores = async () => {
    for (const escultorData of escultores) {
      const escultor = new Escultor(escultorData);
      try {
        await escultor.save();
        console.log(`Escultor ${escultor.nombre} insertado correctamente.`);
      } catch (err) {
        if (err.code === 11000) {  // Código de error para clave duplicada
          console.log(`Error: El ID ${escultor._id} ya existe en la base de datos.`);
        } else {
          console.error('Error al insertar el escultor:', err);
        }
      }
    }
  };

insertarEscultores();*/
// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor HTTP corriendo en http://localhost:${PORT}`);
});
