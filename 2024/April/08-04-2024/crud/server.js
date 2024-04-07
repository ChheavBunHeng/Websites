const express = require('express');
const mysql = require('mysql2');

const app = express();

const pool = mysql.createPool({
    host: 'your_host',
    user: 'root',
    password: '1234',
    database: 'test',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

app.get('/users', (req, res) => {
    pool.query('SELECT * FROM users', (err, rows) => {
        if (err) {
            return res.status(500).json({ error: 'Error fetching users' });
        }
        res.json(rows);
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
