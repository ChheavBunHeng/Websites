const mysql = require("mysql2/promise");

const pool = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"1234",
    database:"duck"
});

async function fetchDataFromMySQL()
{
    const connection = await pool.getConnection();

    const [row, field] = await connection.query("SELECT * FROM persons");

    connection.release();

    console.log("fetch data from mysql");
    console.log(row);
    return row;
}
fetchDataFromMySQL()
    .then((result) =>{
        console.log("Result",result);
    });