const mysql = require("mysql2");

const pool = mysql.createPool({
    host: "45.55.136.114",
    user: "dlash",
    password: "time4DB!",
    database: "dlash"
});

module.exports = pool.promise();