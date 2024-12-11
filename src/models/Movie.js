const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Movie = sequelize.define('Movie', {
  imdbId: { type: DataTypes.STRING, allowNull: false, unique: true },
  title: { type: DataTypes.STRING, allowNull: false },
  year: { type: DataTypes.STRING },
  image: { type: DataTypes.STRING },
  personalRating: { type: DataTypes.FLOAT },
});

module.exports = Movie;
