const path = require("path");
const express = require("express");
const bodyParser = require('body-parser');

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const expressHbs = require('express-handlebars');
const app = express();

// app.engine('handlebars', expressHbs());
app.engine('hbs', expressHbs.engine({ extname: "hbs", defaultLayout: "main-layout", layoutsDir: "views/layouts", }));
app.set('view engine', 'hbs');
app.set('views', 'views');



app.use( bodyParser.urlencoded({extended:false}) ); // automatically calls next 4 us
app.use( express.static(path.join(__dirname, 'public')));
app.use( '/admin', adminRoutes.routes );
app.use( shopRoutes );

// app.use((req,res,next) => {
//   // res.status(404).send("<h2> Error Page Not Found");
//   res.status(404).sendFile(path.join(__dirname, "views/404.html"));
//   // res.setHeader().status().send();
// })
app.use((req,res,next) => {
  res.status(404).render('404', {pageTitle: 'Error Page Not Found'});
})

let port = 3001;
console.log( `listen on http://localhost:${port}`);

app.listen( port )