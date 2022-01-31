/*
 * Copyright (c) Burak ERGEN 2022.
 */

const createError = require('http-errors');
const asyncHandler = require('../../middleware/asyncHandler');

exports.leftbar = asyncHandler((req, res) => {
    const data = require('../../helper/leftbar.json');

    return res.status(200).setHeader('Content-Type', 'application/json').json({
        status: false,
        errorCode: 200,
        data,
        message: '',
    });
});
