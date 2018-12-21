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

module.exports = app;
