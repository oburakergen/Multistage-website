/*
 * Copyright (c) Burak ERGEN 2022.
 */

const redis = require('redis');

const client = redis.createClient({
    host: process.env.REDIS_HOST || '127.0.0.1',
    port: process.env.REDIS_PORT || '6379',
});

client.on('error', (error) => {
    console.log(error);
});

client.on('connect', () => {
    console.log('Redis client bağlandı');
});

module.exports = { redis };
