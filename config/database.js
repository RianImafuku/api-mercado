require("dotenv").config("../.env");
const mysql = require("mysql");

const conn = mysql.createConnection({
    host: process.env.MYSQL_HOST, 
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
});

conn.connect(error=>{
    if (error) throw error;
    console.log({ success:"mysql conectado" })
});

module.exports=conn;