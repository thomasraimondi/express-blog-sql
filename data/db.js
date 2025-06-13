const dotenv = require("dotenv");
const config = dotenv.config();
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: config.parsed.DB_HOST || "localhost",
  user: config.parsed.DB_USER,
  password: config.parsed.DB_PASSWORD,
  database: "blog",
});

connection.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err.stack);
    return;
  }
  console.log("Connected to the database.");
});

module.exports = connection;
