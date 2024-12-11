const movieService = require('../services/movies.service');

const fetchMovies = async (req, res) => {
  try {
    const movies = await movieService.fetchAndSaveMovies();
    res.status(200).json(movies);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getMovies = async (req, res) => {
  try {
    const movies = await movieService.getMovies(req.query);
    res.status(200).json(movies);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { fetchMovies, getMovies };
