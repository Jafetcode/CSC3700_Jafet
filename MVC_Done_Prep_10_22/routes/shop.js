const path = require("path");
const express = require("express");
const router = express.Router();
const Product = require( "../models/product");

const shopController = require("../controllers/shop");
router.get('/shop', shopController.showProducts )

exports.routes = router;
module.exports = router;