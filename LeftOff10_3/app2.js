const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const expressHbs = require('express-handlebars');
app.engine('hbs', expressHbs.engine(
    {
            extname: 'hbs',
            defaultLayout: 'main-layout',
            layoutsDir: 'views/layouts',
    }
))
app.set( 'view engine', 'hbs');
app.set( 'views', 'views');

app.use(express.static(path.join(__dirname, 'public')));
app.use( bodyParser.urlencoded( { extended: true }) );

app.use( '/admin', adminRoutes.routes );

app.use( shopRoutes );

app.use( '/', ( req, res, next ) => {

    res.status(404).render('404', {
        pageTitle: 'Errorcfgsfg! Not Found',
        message : "You need to get a life"
    });
})

const server = http.createServer(app);
const port = 3002;
server.listen(port );
console.log(`Listening on port ${port}`);