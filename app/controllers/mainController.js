const data = require("../data/films.json");

const mainController = {
  /**
   * showHomePage Function
   * to display the home page
   */
  showHomePage: (req, res) => {
    res.status(200).render("index", { films: data });
  },

  /**
   * showFilmsPage Function
   * to display all the films
   */
  showFilmsPage: (req, res) => {
    res.status(200).render("films", { films: data });
  },

  /**
   * showFilmPage Function
   * to display the required film
   */
  showFilmPage: (req, res) => {
    const filmQuery = req.params.title;
    const thisFilm = data.find((film) => film.title === filmQuery);

    if (thisFilm) {
      res
        .status(200)
        .render("film", { film: thisFilm});
    } else {
      res.status(404).render("404", { films: data });
    }
  },
};

module.exports = mainController;
