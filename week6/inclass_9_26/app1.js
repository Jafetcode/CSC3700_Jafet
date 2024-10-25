const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(express.static(path.join(__dirname, 'public')));
app.use( bodyParser.urlencoded( { extended: true }) );
app.use('/admin', adminRoutes );
app.use( shopRoutes );

app.use( '/', ( req, res, next ) => {
    res.send("<h1> Page not found </h1>")
})

const server = http.createServer(app);
const port = 3032;
server.listen(port );
console.log(`Listening on port ${port}`);