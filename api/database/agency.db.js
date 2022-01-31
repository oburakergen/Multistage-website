
const Sequelize = require('sequelize');
const dbConfig = require('../config/db.config');

const sequelize = new Sequelize(dbConfig.agency.DB, dbConfig.agency.USER, dbConfig.agency.PASSWORD, {
    host: dbConfig.agency.HOST,
    dialect: dbConfig.agency.dialect,
    operatorsAliases: 0,

    pool: {
        max: dbConfig.agency.pool.max,
        min: dbConfig.agency.pool.min,
        acquire: dbConfig.agency.pool.acquire,
        idle: dbConfig.agency.pool.idle,
    },
});

module.exports = {
    Sequelize,
    sequelize,
};
