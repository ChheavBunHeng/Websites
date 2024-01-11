const mysql = require('mysql');

const dbconnection = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'123',
    database:'PythonSQL'
});

dbConnection.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL database!');
  });
  

// const Name = document.getElementById('Name')
// const Password = document.getElementById('Password')
// const BTN = document.getElementById('Submit')

// BTN.addEventListener('click',function(){
//     console.log(Name.value);
//     console.log(Password.value);
// });
