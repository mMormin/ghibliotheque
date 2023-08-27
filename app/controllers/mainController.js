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
  filmPage: async (req, res) => {
    const { title: filmQuery } = req.params;
    try {
      const film = await data.findIndex((film) => film.title === filmQuery);

      res.status(200).render("film", { film });
    } catch (error) {
      console.log(error);
      res.status(404).render("404", { films });
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
  resultPage: async (req, res) => {
    const { title: filmTitleQuery } = req.query;

    try {
      const filmsArray = await JSON.parse(JSON.stringify(data));

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

    } catch (error) {
      console.log(error);

      res.status(404).render("404", { films });
    }
  },
};

module.exports = mainController;
