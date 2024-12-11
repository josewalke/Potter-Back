const express = require('express');
const cors = require('cors'); // Importa CORS
const dotenv = require('dotenv'); // Variables de entorno
const chalk = require('chalk'); // Para mensajes estilizados en la consola
const sequelize = require('./config/database'); // Conexión a la base de datos
const moviesRouter = require('./routes/movies.routes'); // Rutas de películas
const Movie = require('./models/Movie'); // Modelo de películas

dotenv.config();

const app = express();

// Configura CORS para permitir solicitudes desde el frontend
app.use(cors({
  origin: 'http://localhost:5173', // Permite solicitudes solo desde este origen
}));

app.use(express.json()); // Middleware para parsear JSON
app.use('/movies', moviesRouter); // Rutas principales

(async () => {
  try {
    await sequelize.authenticate();
    console.log(chalk.green.bold('✨ Conexión a la base de datos establecida.'));
    await sequelize.sync();
    console.log(chalk.blue.bold('📊 Base de datos sincronizada.'));
  } catch (error) {
    console.error(chalk.red.bold('💥 Error al conectar a la base de datos:'), error);
  }
})();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(chalk.magenta.bold(`🚀 Servidor corriendo en el puerto ${PORT}`));
  console.log(chalk.cyan(`🌐 Accede en: http://localhost:${PORT}`));
});
