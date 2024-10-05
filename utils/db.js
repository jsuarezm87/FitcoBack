const mysql = require('mysql');

const db = mysql.createConnection({
  host: process.env.MYSQL_HOST || 'localhost',
  user: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || 'password',
  database: process.env.MYSQL_DATABASE || 'fitcoDB'
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL: ', err);
    return;
  }
  console.log('Connected to MySQL!');
});

module.exports = db;
