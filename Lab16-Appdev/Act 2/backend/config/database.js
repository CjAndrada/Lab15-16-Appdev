const mysql = require("mysql");
const dotenv = require("dotenv");

require('dotenv').config();

const db = mysql.createConnection({
    
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'student_db'
});

db.connect(err => {
    if (err) {
        console.error("Database connection failed: " + err.message, process.env.DB_HOST);
        return;
    }
    console.log("✅ MySQL Connected...");
});

module.exports = db;
    