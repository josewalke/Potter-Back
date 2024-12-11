const express = require('express');
const { fetchMovies, getMovies } = require('../controllers/movies.controller'); // Importa los controladores
const router = express.Router();

router.get('/fetch', fetchMovies); // Endpoint para obtener películas desde OMDb
router.get('/', getMovies); // Endpoint para obtener películas desde la base de datos

module.exports = router;
