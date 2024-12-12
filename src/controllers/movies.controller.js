const { fetchAndSaveMovies, getMovies } = require('../services/movies.service');
const Movie = require('../models/Movie');

const fetchMoviesFromAPI = async (req, res) => {
  try {
    const movies = await fetchAndSaveMovies();
    res.json(movies);
  } catch (error) {
    console.error('Error al obtener películas desde OMDb:', error.message);
    res.status(500).json({ error: 'No se pudieron obtener las películas.' });
  }
};

const fetchMoviesFromDatabase = async (req, res) => {
  try {
    const filters = req.query; // Obtener filtros de los parámetros de la URL
    const movies = await getMovies(filters); // Pasar filtros al servicio
    res.json(movies);
  } catch (error) {
    console.error('Error al obtener películas desde la base de datos:', error.message);
    res.status(500).json({ error: 'No se pudieron obtener las películas.' });
  }
};

const getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.findAll(); // Obtiene todos los registros de la tabla Movies
    res.json(movies); // Devuelve los datos en formato JSON
  } catch (error) {
    console.error('Error al obtener películas:', error.message);
    res.status(500).json({ error: 'Error al obtener películas de la base de datos.' });
  }
};

module.exports = { fetchMoviesFromAPI, fetchMoviesFromDatabase, getAllMovies};
