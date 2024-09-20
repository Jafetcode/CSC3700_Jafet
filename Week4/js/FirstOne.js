const http = require('http');

// const server = http.createServer((req, res) => {
//     // console.log( "Made it so far");
//     let { url, method, body } = req;
//     console.log( "req URL=" + req.url);
//     console.log( "Req Method=" + req.method );
//     console.log( "METHOD=" + method );
//     console.log( body );
// })
const server = http.createServer((req, res) => {
    let url = req.url;
    if ( url === "/") {
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        let str = " <html> <body> <h2> Hello World</h2></body>";
        res.write(str);
        res.write("<p style='color:red'> Welcome home!</p>")
        res.write("</body></html>");
        res.end();
    } else if ( url === "/about" ) {
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.write("<p style='color:blue'> All About us!</p>")
        res.write("</body></html>");
        res.end();
    }
});

const PORT = 3000;
console.log( `listening on ${PORT}`);
server.listen(PORT);