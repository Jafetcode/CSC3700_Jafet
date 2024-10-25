const path = require("path");
const express = require('express');
const router = express.Router();
const productsController = require("../controllers/admin");
router.get('/add-product', productsController.getAddProduct )
router.post( '/add-product', productsController.postAddProduct );
router.get( '/adminProducts', productsController.adminProducts );
//added delete route to products controller
router.get( '/deleteItem/:id', productsController.deleteProduct );
//added edit route that will call the edit controller method
router.get( '/deleteItem/:id', productsController.editProduct );

exports.routes = router;
