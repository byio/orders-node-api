const db = require('../db');

exports.user_get_all = (req, res) => {
  db.query(
    'SELECT * FROM users',
    null,
    (err, result) => {
      if (err) res.status(500).json(err);
      res.status(200).json(result.rows);
    }
  )
};
