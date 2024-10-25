const db = require("../util/database");

module.exports = class Product {
    constructor( t,  price, description ) {
        this.title = t;
        this.description = description;
        this.price = price;
        // this.description = "It was good it was bad it was ugly";
    }
    save() {
        console.log( `title:${this.title} description:${this.description} price:${this.price}`)
        return db.execute( 'insert into products (title, price, description) ' +
            'values (?, ?, ?)',
            [this.title, this.price, this.description ]
        )
    }
    static delete( id ) {
        return db.execute( "delete from products where id = ?",
            [id]
        )
    }
    static fetchAll(){
        return db.execute( "select * from products");
    }
    static findById( id ){
        return db.execute( "select * from products where id = ?",
            [id] );
    }
    update ( id ){
        return db.execute( "UPDATE products SET title = ?, price = ?, description = ?  WHERE id = ?",
            [this.title, this.price, this.description, id ] );
    }
}