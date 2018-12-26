const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();

// import routes
const userRoutes = require('./api/routes/user');

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
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  if (req.methods === 'OPTIONS') {
    res.header(
      'Access-Control-Allow-Methods',
      'GET, POST, PUT, PATCH, DELETE'
    );
    return res.status(200).json({});
  }
  next();
});

// routes middleware
app.use('/api/users', userRoutes);

// general error handling
app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});
app.use((error, req, res, next) => {
  res.status(error.status || 500).json({
    error: {
      message: error.message
    }
  });
  next();
});

module.exports = app;
