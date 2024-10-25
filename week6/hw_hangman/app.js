const path = require("path");
const express = require("express");
const bodyParser = require('body-parser');
const expressHbs = require('express-handlebars');
const gameRoutes = require("./routes/game");

const app = express();

app.engine('hbs', expressHbs.engine({ extname: "hbs", defaultLayout: "main-layout", layoutsDir: "views/layouts" }));
app.set('view engine', 'hbs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Use the routes directly
app.use('/game', gameRoutes);

app.use((req, res, next) => {
    res.status(404).render('404', { pageTitle: 'Error Page Not Found' });
});

let port = 3011;
console.log(`listening on http://localhost:${port}`);
app.listen(port);
