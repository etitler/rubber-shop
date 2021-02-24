const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const productsRouter = require('./routes/products');
const paymentsRouter = require('./routes/payment');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Supress 304s from express.static
app.use(function (req, res, next) {
  req.headers['if-none-match'] = 'no-match-for-this';
  next();
});
app.use(express.static(path.join(__dirname, 'public')));

// Serve routes from router
app.use('/products', productsRouter);
app.use('/pay', paymentsRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
});

module.exports = app;
