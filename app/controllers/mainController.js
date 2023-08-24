const films = require("../data/films.json");

const mainController = {
  /**
   * homePage Function
   * to display the home page
   */
  homePage: (req, res) => {
    res.status(200).render("index", { films });
  },

  /**
   * filmListPage Function
   * to display all the films
   */
  filmListPage: (req, res) => {
    res.status(200).render("films", { films });
  },

  /**
   * filmPage Function
   * to display the required film
   */
  filmPage: (req, res) => {
    const { title: filmQuery } = req.params;
    const film = data.findIndex((film) => film.title === filmQuery);

    if (!film) {
      res.status(404).render("404", { films });
    }
    
    res.status(200).render("film", { film });
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
    const { title: filmTitleQuery } = req.query;
    const filmsArray = JSON.parse(JSON.stringify(data));
    const matchArray = [];

    for (const film of filmsArray) {
      if (film.title.toLowerCase().includes(filmTitleQuery)) {
        matchArray.push(film);
      }
    }

    if (!matchArray.length) {
      res.status(404).render("404", { films });
    }

    res
      .status(200)
      .render("result", { searchTxt: filmTitleQuery, films: matchArray });
  },
};

module.exports = mainController;
