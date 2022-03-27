/*
 * Copyright (c) 2021/8/20 Burak ERGEN
 */
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });


module.exports = {
    agency: {
        HOST: process.env.DB_HOST,
        USER: process.env.DB_USER,
        PASSWORD: process.env.DB_PASSWORD,
        DB: process.env.AGENCY_DB_NAME,
        dialect: 'mariadb',
        port: process.env.DB_PORT,
        pool: {
            max: 50,
            min: 0,
            acquire: 300000,
            idle: 100000,
        },
    },
    agency_dealer: {
        HOST: process.env.DB_HOST,
        USER: process.env.DB_USER,
        PASSWORD: process.env.DB_PASSWORD,
        DB: process.env.AGENCY_DEALER_DB_NAME,
        dialect: 'mariadb',
        port: process.env.DB_PORT,
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000,
        },
    },
    agency_management: {
        HOST: process.env.DB_HOST,
        USER: process.env.DB_USER,
        PASSWORD: process.env.DB_PASSWORD,
        DB: process.env.AGENCY_MANAGEMENT_DB_NAME,
        dialect: 'mariadb',
        port: process.env.DB_PORT,
        pool: {
            max: 50,
            min: 0,
            acquire: 300000,
            idle: 100000,
        },
    },
};
