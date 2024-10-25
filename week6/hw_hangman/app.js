
const path = require("path");
const express = require("express");
const bodyParser = require('body-parser');

const gameRoutes = require("/routes/game");

const expressHbs = require('express-handlebars');
const app = express();

// app.engine('handlebars', expressHbs());
app.engine('hbs', expressHbs.engine({ extname: "hbs", defaultLayout: "main-layout", layoutsDir: "views/layouts", }));
app.set('view engine', 'hbs');
app.set('views', 'views');

app.use( bodyParser.urlencoded({extended:false}) ); // automatically calls next 4 us
app.use( express.static(path.join(__dirname, 'public')));
app.use( '/game', gameRoutes.routes );

app.use((req,res,next) => {
    res.status(404).render('404', {pageTitle: 'Error Page Not Found'});
})