const axios = require('axios');
const { Op } = require('sequelize');
const Movie = require('../models/Movie');

const fetchAndSaveMovies = async () => {
  try {
    // Construir la URL usando las variables del .env
    const apiUrl = `${process.env.OMDB_API_URL}/?s=harry+potter&apikey=${process.env.OMDB_API_KEY}`;
    // Realizar la solicitud a la API de OMDb
    const response = await axios.get(apiUrl);

    // Mapea los datos para adaptarlos al modelo de la base de datos
    const movies = response.data.Search.map((movie) => ({
      imdbId: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      image: movie.Poster,
      personalRating: Math.floor(Math.random() * 5) + 1, // Valoración ficticia
    }));

    // Guardar las películas en la base de datos
    await Movie.bulkCreate(movies, { ignoreDuplicates: true });
    return movies;
  } catch (error) {
    console.error('Error al obtener datos de OMDb:', error.message);
    throw new Error('No se pudieron obtener las películas desde OMDb.');
  }
};

const getMovies = async (filters) => {
  const where = {};

  if (filters.title) {
    where.title = { [Op.like]: `%${filters.title}%` };
  }
  if (filters.year) {
    where.year = filters.year;
  }
  if (filters.personalRating) {
    console.log("Filtro recibido (personalRating):", filters.personalRating);
    where.personalRating = Number(filters.personalRating);
  }

  const movies = await Movie.findAll({ where });
  return movies;
};



module.exports = { fetchAndSaveMovies, getMovies };
