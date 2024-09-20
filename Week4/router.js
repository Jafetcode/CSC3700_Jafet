const http = require('http');
const fs = require('fs');
const requestHandler = (req, res) => {

    const url = req.url; //the path the user user to come to the page
    const method = req.method;

    if (url === "/") {//only when u enter / will u do this code //routing
        res.setHeader('content-type', 'text/html; charset=utf-8');
        res.write(`<html><body><h2> URL:${url}</h2>`)
        res.write("<form method='POST' action='/message'>")//action, where u want to the send the post //How to send data, post means you post data to the server
        res.write("<br /> Message <input type ='text' name = 'msg' placeholder ='message is here' />") //name
        res.write("<br /> <button type = 'submit'>Submit it</button>")
        res.write(`</body></html>`);
        res.end();
    } else if (url === "/message" && method === "POST") {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        })
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log("--->>")
            console.log(parsedBody); //prints the array
            res.setHeader('content-type', 'text/html; charset=utf-8');

            res.write(`<html><body><h2> Message Received</h2>`);
            res.write(`body:${parsedBody}`);
            res.write("</body></html>");
            res.end();
        })
        console.log("Hellp There")
    } else if (url === "/message" && method === "GET") {
        res.write(`<html><body><h2> GET THE MESSAGE</h2>`);
        res.write("Still dont know how to get the message");
        res.write("</body></html>");
        res.end();
    } else {
        res.setHeader('content-type', 'text/html; charset=utf-8');
        res.write(`<html><body><h2> Unknown Path:${url}</h2>`)
        res.write(`</body></html>`);
        res.end();
    }
}
module.exports = requestHandler
module.exports = {
    handler : requestHandler,
    someText : "Hello World",
}
