/*
 * Copyright (c) Burak ERGEN 2022.
 */

exports.index = async (req, res, next) => {
    return res.status(200).render('index', {
        title: 'Laraplay API v0.1',
    });
};
