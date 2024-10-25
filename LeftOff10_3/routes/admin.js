const express = require('express');
const router = express.Router();
const path = require('path');

router.use(express.static(path.join(__dirname, '../public')));
//dont want admin file to be too big, moves all the work to controller file
const productsController = require('../controllers/products');
router.get('/add-product', productsController.getAddProducts);
router.post( '/product', ( productsController.postAddProducts));

// exports.product = product;
exports.routes = router;
