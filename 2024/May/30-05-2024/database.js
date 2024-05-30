const express = require("express");
const mysql = require("mysql2");


const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "world"
});

connection.connect((err) => {
    if (err) {
        console.error("Error connecting to MySQL database:", err);
        return;
    }
    console.log("Connected to MySQL database");
});
