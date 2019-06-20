const movie = require("../models/Movies");

function createDb(arr) {
  movie
    .insertMany(arr)
    .then(res => {
      console.log("yeah");
    })
    .catch(err => {
      console.log("nay");
    });
}

module.exports = createDb;
