const  http = require('http');
const router = require('./router');
const server = http.createServer((router.handler));
const PORT = 3000;
console.log(`Listening on port:${PORT} someText:${router.someText}`);
server.listen(PORT)