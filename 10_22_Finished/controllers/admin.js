const Product = require( "../models/product");

exports.getAddProduct = ( req, res, next ) => {
    res.render('admin/add-product', {
        pageTitle: 'Add Product',
        pageHeader: 'Add New Product',
        addProductActive: true,
        addProductCSS: true });
    }
exports.postAddProduct = (req, res, next) => {
    let product = new Product(req.body.title, req.body.price, req.body.description);
    product.save();

    let products = Product.fetchAll()
        .then(([products, fields]) => {
            let hasProducts = false;
            if (products.length > 0) hasProducts = true;
            res.render('admin/adminProducts', {
                pageTitle: 'Our Product',
                hasProducts: hasProducts, adminProductsActive: true,
                pageHeader: 'Admin Products', prods: products
            });
        });
}
exports.adminProducts = ( req, res, next ) => {
    Product.fetchAll()
        .then(( [products, fields]) => {
            console.log( `leng:${products.length}`)
            let hasProducts = false;
            if ( products.length > 0) hasProducts = true;
            res.render('admin/adminProducts', {
                pageTitle: 'Admin Product',
                pageHeader: 'Admin Products',
                adminProductsActive: true,
                hasProducts: true,
                prods : products,
                addProductCSS: true });
        });
}
exports.deleteProduct = ( req, res, next ) => {
    let id = req.params.id;
    console.log( "made it to delete id:" +id);
    Product.delete(id)
        .then((products, fields) => {
            res.redirect('/admin/adminProducts');
        })
}
exports.editProduct = ( req, res, next ) => {
    let id = req.params.id;
    console.log( "made it to Update  id:" +id);
    let product = Product.getItem(id)
        .then((product) => {
            let gotUpdate = false;
            if ( product ) gotUpdate = true;
            console.log("FLAG1 ----"); console.log( product[0][0] );
            res.render('admin/editProducts',
                {pageTitle: `Edit Product id=${id}`,
                    gotUpdate: gotUpdate,
                    product : product[0][0],
                    pageHeader: 'Edit Product'
                })
        })

}
exports.editProductPost = ( req, res, next ) => {
    let id = req.body.id;
    let product = new Product(req.body.title, req.body.price, req.body.description);
    product.update( id )
        .then(([product]) => {
            console.log("Updating project=");
            console.log(product);
            res.redirect('/admin/adminProducts');
        });
}
