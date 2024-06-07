const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database:"duck"
});

connection.connect(err =>{
    if(err)
    {
        console.error("Error connecting to mysql",err);
        return;
    }
    console.log("Connected to MySQL database");
});

module.exports = connections;
