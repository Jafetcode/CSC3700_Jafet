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
router.use(express.static(path.join(__dirname, '../public')));
router.get('/home', function (req, res) {
    // res.sendFile( path.join( __dirname, '../public/shopHome.html' ) );
    res.render('shopForm');
});
router.get('/shop', function (req, res) {
    // res.sendFile( path.join( __dirname, '../public/shopHome.html' ) );
    res.render('shop');
});
router.post('/showResults', function (req, res) {

    res.render('shopResults', {
        item : menu[1].item,
        cost : menu[1].cost,
        extras : menu[1].extra
    });
})
module.exports = router;