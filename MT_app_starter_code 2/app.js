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
            defaultLayout: '',
            layoutsDir: '',
    }
))
app.set( 'view engine', 'hbs');
app.set( 'views', 'views');

app.use(express.static(path.join(__dirname, 'public')));
app.use( bodyParser.urlencoded( { extended: true }) );

app.use( menuRoutes )
app.use( '/form', ( req, res, next ) => {
        // res.send("<h1> Page not found </h1>")
    res.sendFile(path.join(__dirname, '/public/shopHome.html'));
})

const server = http.createServer(app);
const port = 3111;
server.listen(port );
console.log(`Listening on port ${port}`);