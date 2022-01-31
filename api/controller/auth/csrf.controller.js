/*
 * Copyright (c) 2021-2021/12/24 Burak ERGEN
 */
const createError = require('http-errors');
const { csrf } = require('../../utils/csrf');

exports.create = async (req, res, next) => {
    try {
        const code = await csrf.createCsrf();

        res.cookie('csrf', code, { maxAge: 1000 * 60 * 60, signed: false, httpOnly: false });

        return res.status(200).setHeader('Content-Type', 'application/json').json({
            data: code,
        });
    } catch (e) {
        next(createError(500, e));
    }
};
