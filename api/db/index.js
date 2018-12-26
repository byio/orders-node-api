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
  query: (text, params, cb) => {
    const start = Date.now();
    return pool.query(text, params, (err, res) => {
      const duration = Date.now() - start;
      console.log('executed query', {
        text,
        duration,
        rows: res.rowCount
      });
      cb(err, res);
    });
  }
};
