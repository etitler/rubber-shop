const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

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

module.exports = app;
