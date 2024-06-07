import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'world'
});

if(db){
    console.log('db connected');
}

app.listen(3001, () => {
    console.log('server is running on port 3001');
});
