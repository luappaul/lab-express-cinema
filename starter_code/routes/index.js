const Movie = require("../models/Movies");
const importDb = require("../config/importdb");
const express = require("express");
const router = express.Router();
const movies = require("../bin/seeds");
module.exports = router;

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

// GET movie Page

router.get("/movies", (req, res) => {
  Movie.find()
    .then(dbRes => {
      console.log("yo");

      res.render("movies", { movies: dbRes });
    })
    .catch(err => {
      res.render("movies", { err: "error bro" });
    });
});

router.get("/movie/:id", (req, res) => {
  Movie.findById(req.params.id)
    .then(resu => {
      res.render("moviedetails", { resu });
    })
    .catch(err => {
      console.log("error", err);
    });
});

// Import DB
// importDb(movies);
