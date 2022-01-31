/*
 * Copyright (c) Burak ERGEN 2022.
 */

const router = require('express').Router();
const main = require('../../controller/main/main.controller');

router.get('/', main.index);

module.exports = router;
