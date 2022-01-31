/*
 * Copyright (c) 2021/12/24 Burak ERGEN
 */
const csrf = require('../middleware/csrf');

/**
 * Create a interface for routes
 * @public
 */
module.exports = (app) => {
    app.use('/', csrf, require('./main/index.route'));
    app.use('/admin', csrf, require('./admin/index.route'));
    app.use('/address', csrf, require('./address/index.route'));
    app.use('/auth', require('./auth/index.route'));
};
