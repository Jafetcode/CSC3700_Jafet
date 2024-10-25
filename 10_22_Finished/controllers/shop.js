const Product = require( "../models/product");


exports.showProducts = (req, res,next ) => {
    // let product = new Product( req.body.title, req.body.price, req.body.description );
    // product.save();

    Product.fetchAll()
        .then(([products, fields]) => {
            let hasProducts = false;
            if (products.length > 0) hasProducts = true;
            res.render('shop/shopProducts', {
                pageTitle: 'Our Product',
                hasProducts: hasProducts,
                shopActive: true,
                pageHeader: 'Available Products', prods: products
            });
        });
}