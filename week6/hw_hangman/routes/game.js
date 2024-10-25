const path = require("path");
const express = require("express");
const router = express.Router();
const App = require("/models/Words");

const gameController = require("/controllers/Game");
router.get('/game',gameController);

exports.routes = router;
module.exports = router;