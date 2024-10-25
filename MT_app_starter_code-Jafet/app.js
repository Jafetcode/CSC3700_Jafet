const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const menuRoutes = require('./routes/menu');
const expressHbs = require('express-handlebars');
app.engine('hbs', expressHbs.engine(
    {
            extname: 'hbs',
            defaultLayout: 'main-layout',
            layoutsDir: 'views/layouts/',
    }
))
app.set( 'view engine', 'hbs');
app.set( 'views', 'views');

app.use(express.static(path.join(__dirname, 'public')));
app.use( bodyParser.urlencoded( { extended: true }) );

app.use( menuRoutes )
app.use( '/', ( req, res, next ) => {
        // res.send("<h1> Page not found </h1>")
    // res.sendFile(path.join(__dirname, '/public/shopHome.html'));
    res.render('shopForm');
})
app.use( '/shop', ( req, res, next ) => {
    // res.send("<h1> Page not found </h1>")
    res.render('shop');
})
app.use( '/showResults', ( req, res, next ) => {
    // res.send("<h1> Page not found </h1>")
    res.render('shopResults');
})


const server = http.createServer(app);
const port = 3111;
server.listen(port );
console.log(`Listening on port ${port}`);