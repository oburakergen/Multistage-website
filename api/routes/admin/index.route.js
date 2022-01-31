/*
 * Copyright (c) Burak ERGEN 2022.
 */

const router = require('express').Router();
const theme = require('../../controller/admin/theme.controller');

router.get('/theme/leftbar.js', theme.leftbar);

module.exports = router;
