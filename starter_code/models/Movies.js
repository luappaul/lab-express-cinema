const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: String,
  director: String,
  stars: Array,
  image: String,
  description: String,
  showtimes: Array
});

const movieModel = mongoose.model("Movie", movieSchema);
module.exports = movieModel;

var movies = require("../bin/seeds");
