const express = require('express');
const router = express.Router();
const path = require('path');
const adminData = require("./admin");
// ToDo ---- Check this
// console.log("----");
// console.log( adminData.products);
router.use(express.static(path.join(__dirname, '../public')))
router.get('/shop', function (req, res) {
    // res.sendFile( path.join( __dirname, '../public/shopProducts.html' )
    // );
    let products = adminData.products;
    console.log(products);
    let gotProducts = false;
    if ( products.length > 0 ) gotProducts = true;
    res.render('productResults', {
        pageTitle: 'Here are the available product to shop',
        products: products,
        gotProducts: gotProducts,
        activeShop: true
    });
});
router.get('/home', function (req, res) {
    res.sendFile( path.join( __dirname, '../public/shopHome.html' ) );
});
module.exports = router;