const express = require('express');
const router = express.Router();
const path = require('path');
// ToDo: Use this data structure
let menu = [
    {'item' : 'Burger', 'cost' : 8.99, extra :
            [ 'cheese','onions']
    },
    {'item' : 'Pizza', 'cost' : 12.99, extra :
            ['cheese', 'onions', 'meat' ]
    },
    {'item' : 'Taco', 'cost' : 5.99, extra :
            ['chicken', 'fish', 'cilantro']
    },
    {'item' : 'Hot Dog', 'cost' : 6.99, extra :
            []
    },
];
function getItems () {
    let items = [];
    for( let i = 0; i < menu.length; i++ ) {
        items.push(menu[i].item);
    }
    return items;
}
function getExtraItems(theItem) {
    let result = "";
    result = theItem.extra.toString();
    return result;
}

function getMsg( inItem ) {
    // let userItem = document.getElementById("item1");
    let theItem = getThisItem( inItem );
     console.log( inItem ); console.log( theItem);
     console.log("----"); console.log( theItem);
    let results = {
        item : "",
        cost : 0,
        extra : ""
    };
    if ( theItem.cost ){
        results.item = theItem.item;
        results.cost = theItem.cost;
        results.extra   = theItem.extra.toString();
        let extras = getExtraItems( theItem);
    }
    return results;
    // document.getElementById("results").innerHTML = msg;
}
function getThisItem( item ){
    let gotResult = "";
    for( let i=0; i<menu.length; i++){
        console.log( `workLoop i=${i}`)
        if ( menu[i].item === item ){
            gotResult = menu[i];
            break;
        } else {
            // console.log(`\nitem:${item} is not menu:${menu[i].item}`)
            // console.log(`l:${length} i:${i}`)
        }
    }
    return gotResult;
}
router.post('/showResults', function (req, res) {
    // res.sendFile( path.join( __dirname, '../public/shopProducts.html' )
    // );
    let results = getMsg( req.body.item );
    console.log(menu);
    console.log(results);
    // res.send("Made it this far pick=" + req.body.item);
    // let gotProducts = false;
    // if ( products.length > 0 ) gotProducts = true;
    let gotResult = false;
    if ( results.item === req.body.item ) {
        gotResult = true;
        console.log("OK")
    }
    res.render('formResults', {
        results: results,
        gotResult: gotResult
    });
});
router.get('/shop', function (req, res) {
    // res.sendFile( path.join( __dirname, '../public/shopHome.html' ) );
    let items = getItems();
    gotResult = false;
    if ( items.length > 0 ) gotResult = true;
    res.render('shopHome', {
        items: items,
        gotResult: gotResult
    });
});
router.get('/home', function (req, res) {
    res.sendFile( path.join( __dirname, '../public/shopHome.html' ) );
});
module.exports = router;