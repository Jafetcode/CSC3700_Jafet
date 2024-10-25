const Product = require( "../models/product");

exports.getAddProduct = ( req, res, next ) => {
    res.render('admin/add-product', {
        pageTitle: 'Add Product',
        pageHeader: 'Add New Product',
        addProductActive: true,
        addProductCSS: true });
    }
exports.postAddProduct = (req, res,next ) => {
    let product = new Product( req.body.title, req.body.price, req.body.description );
    product.save();

    let products = Product.fetchAll();
    let hasProducts = false;
    if ( products.length > 0) hasProducts = true;
    res.render('admin/adminProducts', {pageTitle: 'Our Product',
        hasProducts: hasProducts,
        adminProductsActive: true,
        pageHeader: 'Admin Products', prods : products});
};
exports.adminProducts = ( req, res, next ) => {
    let products = Product.fetchAll();
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
}
//added a new controller method that works on deleting a product
exports.deleteProduct = ( req, res, next ) => {
    //gonna req req.params.id
    //when sent with post, use req.body
    let id = req.params.id;
    console.log("made it to delete")
    Product.delete(id)
    //after method happens, redirect to another page
    res.redirect('/admin/adminProducts');
}
exports.editProduct = ( req, res, next ) => {
    //gonna req req.params.id
    //when sent with post, use req.body
    let id = req.params.id;
    console.log("made it to update id:")
    let products = Product.getItem(id);
    // Product.delete(id)
    //after method happens, redirect to another page
    res.redirect('/admin/adminProducts');
}
