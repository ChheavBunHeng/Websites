const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

const connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "1234",
  database: 'user'
});

// Middleware to parse JSON from requests
app.use(bodyParser.json());

// Endpoint to handle POST requests for inserting data
app.post('/insert', (req, res) => {
  const { username, password } = req.body;

  // SQL query to insert data into 'users' table (replace with your actual table name)
  const sql = 'INSERT INTO users (username, password) VALUES (?, ?)';
  const values = [username, password];

  connection.query(sql, values, (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    } else {
      console.log('Data inserted:', results);

      // Send a success message as the response
      res.status(200).send('Data inserted successfully');
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Close the MySQL connection when the server is terminated
process.on('SIGINT', () => {
  connection.end();
  process.exit();
});
