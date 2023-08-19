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
      res.status(200).render("film", { film: thisFilm });
    } else {
      res.status(404).render("404", { films: data });
    }
  },

  /**
   * searchPage Function
   * to display the search page
   */
  searchPage: (req, res) => {
    res.status(200).render("search");
  },

  /**
   * resultPage Function
   * to display the result page
   */
  resultPage: (req, res) => {
    const searchQuery = req.query.title;
    const filmsArray = JSON.parse(JSON.stringify(data));
    const matchArray = [];

    for (const film of filmsArray) {
      if (film.title.toLowerCase().includes(searchQuery)) {
        matchArray.push(film);
      }
    }

    res.status(200).render("result", { searchTxt: searchQuery, films: matchArray });
  },
};

module.exports = mainController;
