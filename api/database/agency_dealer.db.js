
const Sequelize = require('sequelize');
const dbConfig = require('../config/db.config');

const sequelize = new Sequelize(dbConfig.agency_dealer.DB, dbConfig.agency_dealer.USER, dbConfig.agency_dealer.PASSWORD, {
    host: dbConfig.agency_dealer.HOST,
    dialect: dbConfig.agency_dealer.dialect,
    operatorsAliases: 0,

    pool: {
        max: dbConfig.agency_dealer.pool.max,
        min: dbConfig.agency_dealer.pool.min,
        acquire: dbConfig.agency_dealer.pool.acquire,
        idle: dbConfig.agency_dealer.pool.idle,
    },
});

module.exports = {
    Sequelize,
    sequelize,
};
