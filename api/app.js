/*
 * Copyright (c) 2021/12/24 Burak ERGEN
 */
const express = require('express');

const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

require('dotenv').config({ path: path.join(__dirname, '.env') });

/**
 * Import a middleware for the api
 * @private
 */
const createError = require('./middleware/error');
const requests = require('./middleware/request');

/**
 * Import a third party middleware for the api
 * @private
 */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extended: true,
}));
app.use(cookieParser(process.env.CSRF_KEY));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
// app.use(redis);

app.use(requests);
/**
 * Import routes for the api
 * @public
 */
require('./routes')(app);

app.use(createError);

module.exports = app;
