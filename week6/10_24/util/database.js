const mysql = require('mysql2');

// Set up a connection pool
const pool = mysql.createPool({
    host: '45.55.136.114',
    user: 'dlash',
    database: 'dlash',
    password: 'time4DB!'
});
// Export the promise-based pool
module.exports = pool.promise(); // Use 'promise()', not 'promises()'
