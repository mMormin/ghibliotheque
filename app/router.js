const express = require("express");
const router = express.Router();
const mainController = require("./controllers/mainController");

router.get("/", mainController.showHomePage);

router.get("/films", mainController.showFilmsPage);

router.get("/film/:title", mainController.showFilmPage);

module.exports = router;
