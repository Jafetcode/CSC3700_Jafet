const express = require('express');
const feedController = require("../controllers/feed");

const router = express.Router();

router.post("/products", feedController.createProduct);
router.get("/products", feedController.getProducts);

module.exports = router;