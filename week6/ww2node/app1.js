const http = require('http');
const { parse } = require('querystring');


const server = http.createServer((req, res) => {
    let url = req.url;
    let method = req.method;

    if (url === "/" ) {
        res.setHeader('Content-Type', 'text/html; charset=utf-8');

        res.write('<html><form method="POST" action="/loggedIn">');
        res.write('<body>UserId: <input id ="userID" type="text" name="userid" placeholder="user id"/>');
        res.write('<br/> Password: <input id="password" type="text" name="password" placeholder="password"/>');
        res.write('<button type="submit">Send it</button>');
        res.write('</body></html>');

        res.end();
    }


    if (url === "/loggedIn" && method === "POST" ){
        let body =[];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        req.on('end', () => {
            const parsed = parse(Buffer.concat(body).toString());
            const userID = parsed.userid;

            const userPass = parsed.password;

            res.setHeader('Content-Type', 'text/html; charset=utf-8');
            if(userID === "Jack" && userPass === "BeQuick") {
                res.write('<html><body>');
                res.write("<p style='color:blue'> Password OK</p>");
                res.write('</body></html>');
            }
            else{
                res.write('<html><body>');
                res.write("<p style='color:blue'> You shall not pass</p>");
                res.write('</body></html>');

            }
            res.end()
        });
    }

});


const PORT = 3004;
console.log('server started on port', PORT);
server.listen(PORT);