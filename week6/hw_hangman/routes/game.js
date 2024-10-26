const path = require("path");
const express = require("express");
const router = express.Router();
const gameController = require("../controllers/game");

// const App = require("/models/Words");
router.get('/',gameController.getGame);

router.get('/new-game',gameController.newGame);

router.post('/game',gameController.getLetter);
// router.post('/show-hint',gameController.getGame);


exports.routes = router;
module.exports = router;