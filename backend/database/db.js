const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "compnay_app",
  password: "sajeelisusingpostgres",
  port: 5432,
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
