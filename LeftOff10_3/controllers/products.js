const Product = require('../models/product');

//export anon func
//controller is supposed to call the view
exports.getAddProducts = (req, res) => {

    res.render('productForm', {
        pageTitle: 'Add New Product',
        message: "You need to get a life",
        activeAdmin: true
    });
}

exports.postAddProducts = (req, res) => {

    let product = new Product(req.body.title, req.body.author, req.body.desc);
    //instantiating new object/product
    product.save();
    //saving to the database
    let products = Product.fetchAll();
    let gotProducts = false;
    if (products.length > 0) {
        gotProducts = true;
    }

    res.render('productResults', {
        pageTitle: 'Here are the available product',
        products: products,
        gotProducts: gotProducts,
        activeAdmin: true

    });
}


