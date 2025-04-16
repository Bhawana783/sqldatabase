require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');
const app = express();

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});


db.connect((err) => {
  if (err) {
    console.error(' MySQL connection failed:', err.message);
  } else {
    console.log(' Connected to MySQL database');
  }
});

app.get('/', (req, res) => {
  res.send('Express server is running with MySQL connection!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(` Server is listening on port ${PORT}`);
});
