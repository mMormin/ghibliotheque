const data = require("../data/films.json");

/**
 * notFound Function
 * to display the error 404 page
 */
function notFound(req, res) {
  res.status(404).render("404", { films: data });
}

module.exports = notFound;
