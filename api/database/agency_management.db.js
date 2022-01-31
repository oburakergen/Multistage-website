
/*
 * Copyright (c) 2021/12/24 Burak ERGEN
 */

const Sequelize = require('sequelize');
const dbConfig = require('../config/db.config');

const sequelize = new Sequelize(
    dbConfig.agency_management.DB,
    dbConfig.agency_management.USER,
    dbConfig.agency_management.PASSWORD,
    {
        host: dbConfig.agency_management.HOST,
        dialect: dbConfig.agency_management.dialect,
        operatorsAliases: 0,

        pool: {
            max: dbConfig.agency_management.pool.max,
            min: dbConfig.agency_management.pool.min,
            acquire: dbConfig.agency_management.pool.acquire,
            idle: dbConfig.agency_management.pool.idle,
        },
    },
);

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch((err) => {
        console.error(err);
    });

module.exports = {
    Sequelize,
    sequelize,
};
