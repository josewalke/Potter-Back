const express = require('express');
const { fetchMoviesFromAPI, fetchMoviesFromDatabase, getAllMovies} = require('../controllers/movies.controller');
const router = express.Router();

// Endpoint para obtener y guardar películas desde OMDb
router.get('/fetch', fetchMoviesFromAPI);

// Endpoint para obtener películas desde la base de datos con filtros
router.get('/', fetchMoviesFromDatabase);

// Endpoint para listar todas las películas
router.get('/all', getAllMovies);

module.exports = router;
