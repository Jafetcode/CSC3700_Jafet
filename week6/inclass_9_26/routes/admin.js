const express = require('express');
const router = express.Router();
const path = require('path');
router.use(express.static(path.join(__dirname, '../public')));
router.get( '/add-product', ( req, res, next ) => {
    // res.sendFile( path.join( __dirname, '../public/productForm.html' ) );
    // res.sendFile(path.join(__dirname, "../views/productForm.html"));
    res.render('productForm',{
        pageTitle: 'Add new product',
        message:'You need to get a life'
    });
})
router.post( '/product', ( req, res, next ) => {
    console.log( req.body );
    //gets the body of the requests, methods by express
    // res.redirect( "/");
    res.send( `Selection:${req.body.title} author:${req.body.author}`)
    //req get the method="POST", body parses, title get from name="title"
})
module.exports = router;