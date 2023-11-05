const http = require('node:http');
const app = require('./src/app');

// Configuración .env
require('dotenv').config();

// Configuración BBDD
require('./src/config/db');

// Levantamos el servidor
const server = http.createServer(app);

// Establezco que busque en .env el puerto, en caso contrario se conecte en el puerto 3000
const PORT = process.env.PORT || 3000;
server.listen(PORT);

// Recojo info del levantamiento correcto como en caso de error.
server.on('listening', () => {
    console.log(`Servidor escuchando en puerto ${PORT}`)
});

server.on('error', (error) => {
    console.log(error);
});