const express = require("express");
const router = express.Router();
const mainController = require("./controllers/mainController");

router.get("/", mainController.homePage);

router.get("/films", mainController.filmListPage);

router.get("/films/:title", mainController.filmPage);

router.get("/search", mainController.searchPage);

router.get("/search/result?:title", mainController.resultPage);

module.exports = router;
