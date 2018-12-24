const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PW,
  post: process.env.DB_PORT
});

module.exports = {
  query: (text, params, cb) => pool.query(text, params, cb)
};
