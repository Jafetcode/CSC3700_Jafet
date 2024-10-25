const express = require('express');
const router = express.Router();
const path = require('path');
//adding on modules
router.get('/shop', (req, res) => {
    res.sendFile( path.join( __dirname, '../public/shopProducts.html' ) );

})
router.get('/home', (req, res) => {
    res.sendFile( path.join( __dirname, '../public/shopHome.html' ) );

})
module.exports = router;
