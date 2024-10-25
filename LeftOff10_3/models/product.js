import {products} from "../controllers/products";

const product = [];

module.products = class Product {
    //
    constructor(title,author,description){
        this.title = title;
        this.author = author;
        this.desc = description;
    }
    save(){
        products.push({
            'title' : this.title,
            'author' : this.author,
            'desc' : this.desc,
        });
    }
    //skip constructor
    static fetchAll(){
        return product;
    }
}