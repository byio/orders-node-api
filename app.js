const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();

// morgan logger middleware
app.use(
  morgan(
    app.get('env') === 'production'
      ? 'combined'
      : 'dev'
  )
);

// body parser middleware
const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({ extended: false });

// allow CORS (before routes middleware)
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.methods === 'OPTIONS') {
    res.header(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, PATCH, DELETE"
    );
    return res.status(200).json({});
  }
  next();
});

module.exports = app;
