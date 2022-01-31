/*
 * Copyright (c) Burak ERGEN 2022.
 */

/**
 * Create error function
 * @protected
 */
const createError = (err, req, res, next) => {
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
};

module.exports = createError;
