const Product = require("../models/product");

exports.createProduct = (req, res, next) => {
    console.log("Received request at createProduct");
    console.log("Headers:", req.headers);
    console.log("Request Method:", req.method);

    const data = req.body;
    console.log("req.body=", JSON.stringify(data));

    if (!data || Object.keys(data).length === 0) {
        console.error("No data received");
        return res.status(400).json({ message: 'No data received' });
    } else {
        let product = new Product(data.title, data.price, data.description);
        product.save();
    }

    console.log('Received Multipart Form Data:', data);
    res.json({ message: 'Multipart data received successfully', receivedData: data });
};


exports.getProducts = ( req, res, next ) => {
    // res.send("<h2> Made it to GetProducts </h2>");
    // Will send responds - dont need to render view
    // will return json reponse
    // let jsonResponse = {
    //     'title' : "I Robot",
    //     'author' : ["Asimov", "Some Other Author"],
    //     'price'  : 22.99,
    // }
    // res.status(200).json({
    //     jsonResponse
    // })
    Product.fetchAll()
        .then(( rows, fieldData ) => {
            console.log( "ROws="); console.log( rows );
            // let result = JSON.stringify(rows);
            let result = rows[0];
            // res.send( "Is seems ok ");
            res.status(200).json({
                result
            })
            // res.render( 'admin/showProductsAdmin', {
            //     title: "Show Products Available (DB)",
            //     from: 'showProducts',
            //     products: rows[0]
            // })
        })
}