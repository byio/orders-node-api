const express = require('express');
const morgan = require('morgan');

const app = express();

// morgan logger middleware
app.use(
  morgan(
    app.get('env') === 'production'
      ? 'combined'
      : 'dev'
  )
);

module.exports = app;
