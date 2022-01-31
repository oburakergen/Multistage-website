const webToken = require('jsonwebtoken');

const JWT_SECRET = process.env.TOKEN_KEY;

/**
 * Create jwt class
 * @protected
 */
const jwt = new class {
    createJwt(params) {
        return webToken.sign(params, JWT_SECRET, {
            expiresIn: '2h',
        });
    }

    verifyJwt(token) {
        return webToken.verify(token, JWT_SECRET);
    }
}();

module.exports = { jwt };
