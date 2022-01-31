/*
 * Copyright (c) 2021/12/24 Burak ERGEN
 */
const createError = require('http-errors');
const { csrf } = require('../utils/csrf');

/**
 * Create csrf function
 * @protected
 */
const verifyCsrf = async (req, res, next) => {
    function createFunc(_code) {
        res.cookie('lap_token', _code, { maxAge: 1000 * 60 * 60, signed: true, httpOnly: true });
        res.cookie('_token', _code, { maxAge: 1000 * 60 * 60, signed: false, httpOnly: false });
    }

    const token = req.body._csrf || req.query._csrf || req.headers['csrf-token']
        || req.headers['x-csrf-token'];

    if (req.method !== 'GET') {
        if (!token) {
            next(createError(400, {
                message: 'A csrf token is required',
                type: 'warning',
                status: '400',
            }));
        }

        try {
            if ((req.signedCookies.csrf || '').indexOf(req.cookies.csrf) === 2) {
                const code = await csrf.createCsrf();

                createFunc(code);
            }

            csrf.verifyCsrf(token, req.cookies.csrf);
            req.csrf = token;
        } catch (e) {
            next(createError(400, {
                message: e.message || 'Token invalid',
                type: 'warning',
                status: '400',
            }));
        }
    } else if (typeof req.signedCookies.csrf === 'undefined') {
        const code = await csrf.createCsrf();

        if ((req.signedCookies.csrf || '').indexOf(req.cookies.csrf) === 2) {
            createFunc(code);
        }

        res.cookie('lap_token', code, { maxAge: 1000 * 60 * 60, signed: true, httpOnly: true });
        res.cookie('_token', code, { maxAge: 1000 * 60 * 60, signed: false, httpOnly: false });
    }

    return next();
};

module.exports = verifyCsrf;
