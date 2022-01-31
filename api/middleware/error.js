/*
 * Copyright (c) Burak ERGEN 2022.
 */

/**
 * Create error function
 * @protected
 */
const createError = (err, req, res, next) => {
    return res.status((err.status || 200)).setHeader('Content-Type', 'application/json').json({
        message: err.message,
        type: err.type,
        status: err.status,
        data: [],
        code: err.code,
    });
};

module.exports = createError;
