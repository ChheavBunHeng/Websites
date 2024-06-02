const mysql = require("mysql2");
const express =require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "cito_computer",
    port: 3307
});

db.connect((err) => {
    if(err) throw err;
    console.log("Database connected");
});

app.use(bodyParser.urlencoded({ extended: false }));