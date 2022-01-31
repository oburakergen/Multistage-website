/*
 * Copyright (c) 2022/1/2 Burak ERGEN
 */
const redis = require('redis');
const client = redis.createClient();

client.on('error', (error) => {
    console.log(error);
});
