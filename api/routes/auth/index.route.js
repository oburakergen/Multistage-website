/*
 * Copyright (c) Burak ERGEN 2022.
 */

const router = require('express').Router();
const csrf = require('../../controller/auth/csrf.controller');

router.get('/csrf', csrf.create);

module.exports = router;

// const express = require('express');
// const auth = require('../middleware/auth');
// const jwtHelper = require('../utils/jwt');
//
// const router = express.Router();
//
// router.get('/image/create', auth, (req, res) => {
//     res.json({ type: 'success', userData: req.user });
// });
//
// router.post('/login', (req, res) => {
//     console.log('REQ BODY', req.body);
//     const { username, password } = req.body;
//
//     // veritabanından sorgulatıp eğer bu credentiallara ait bir kayıt var ise
//     // token oluşturup döndür
//     /*
//             * Token içinde olabilecek parametreler
//             *   user_id
//             *   first_name, last_name
//             *   role var ise rol, is_admin gibi bişey var ise o
//             *   email
//             *
//          */
//
//     if (username === 'bubiş' && password === '3131') {
//         const jwtParams = {
//             user_id: 31,
//             email: 'bkuleas@gmail.com',
//             first_name: 'BUBİ',
//             last_name: 'DİDOO',
//             roles: { admin: false, user: true, manager: true },
//             permissions: { 'posts.create': true, 'users.delete': true, 'users.edit': false },
//         };
//
//         const token = jwtHelper.createJwt(jwtParams);
//
//         return res.json({
//             status: true, token,
//         });
//     }
//
//     return res.json({ status: false, message: 'Nah', test: 'testing' });
// });
//
// module.exports = router;
