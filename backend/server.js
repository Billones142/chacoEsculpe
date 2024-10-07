const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require("dotenv").config()
const Escultor = require('./modelos/Escultor'); 
const app = express();
const PORT = Number(process.env.PORT) | 3000;
const DBURI= process.env.MONGODBURI
const fs = require('fs');
const https = require('https');
const options = {
  key: fs.readFileSync('backend/localhost-key.pem'),
  cert: fs.readFileSync('backend/localhost.pem')    
};
// Middleware
app.use(cors({
  origin: function (origin, callback) {
    // Lista de orígenes permitidos
    const allowedOrigins = ['http://localhost:3001', 'https://localhost:3000'];
    
    // Si no hay origen o el origen está en la lista permitida
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Origen no permitido por CORS'));
    }
  },
  credentials: true  // Permitir envío de credenciales (como cookies) en la solicitud
}));
app.use(express.json()); // Para poder recibir JSON en las solicitudes
// Cargar los certificados


// Conectar a MongoDB
console.log(process.env.MONGODB);
mongoose.connect(DBURI)
    .then(() => console.log('Conexión a MongoDB exitosa'))
    .catch(err => console.error('Error de conexión a MongoDB:', err));
const escultores = [
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
// Llamada a la función
insertarEscultores();
// Ruta básica
app.get('/', (req, res) => {
    res.send('¡Hola, mundo!'); // Respuesta básica al GET /
});

// Rutas para escultores y votación (agrega tus rutas aquí)
app.post('/api/votar/:id', async (req, res) => {
    const { id } = req.params;
    console.log('ID recibido:', id);  // Esto te ayudará a verificar el ID que llega
    try {
      const escultor = await Escultor.findById(id);
      if (!escultor) {
        return res.status(404).send('Escultor no encontrado');
      }
      escultor.votos += 1;
      await escultor.save();
      res.send('Voto registrado');
    } catch (error) {
      res.status(500).send('Error al registrar el voto');
    }
  });
  

// Iniciar el servidor
https.createServer(options, app).listen(PORT, () => {
  console.log(`Servidor HTTPS corriendo en https://localhost:${PORT}`);
});
