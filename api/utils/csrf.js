/*
 * Copyright (c) Burak ERGEN 2022.
 */

const bcrypt = require('bcryptjs');

/**
 * Create csrf class
 * @protected
 */
const csrf = new class {
    createCsrf() {
        return bcrypt.genSaltSync(10);
    }

    verifyCsrf(token, cookies) {
        return token.split('.').filter(Boolean)[0] !== cookies;
    }
}();

module.exports = { csrf };
