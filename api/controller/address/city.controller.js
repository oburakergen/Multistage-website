/*
 * Copyright (c) 2021-2021/12/24 Burak ERGEN
 */

const db = require('../../models/address');

const { Sequelize } = db;
const { Op } = db.Sequelize;
const {
    stripTags, paginations, getPagingData, parseForm, getCondition, getOrder,
} = require('../../helper');

const City = db.city;

exports.create = async (req, res, next) => {
    const cityName = (stripTags(req.body.cityName || '')).trim();
    const phoneCode = (stripTags(req.body.phoneCode || '')).trim();
    const active = (parseForm(req.body.active)).toString();
    const request = { cityName, phoneCode, active };

    try {
        return await City.create(request).then(() => {
            this.findAll(req, res, next, 201);
        }).catch((err) => {
            return res.status(503).setHeader('Content-Type', 'application/json').json({
                status: false,
                errorCode: 503,
                data: [],
                message: err.message || 'Some error occurred while creating the Country.',
            });
        });
    } catch (err) {
        return res.status(500).setHeader('Content-Type', 'application/json').json({
            status: false,
            errorCode: 500,
            data: [],
            message: err.message || 'Some error occurred while creating the Country.',
        });
    }
};

exports.findAll = async (req, res, next, code = 200) => {
    const { offset, limit, page } = paginations(req.query);
    const { where } = getCondition(req.query, 'cityName');
    const { order } = getOrder(req.query.order, (req.query.orderName || 'cityName'));

    await City.findAndCountAll({
        where,
        limit,
        offset,
        order,
        attributes: { exclude: ['id', 'createdAt'] },
    }).then((data) => {
        return res.status(code).setHeader('Content-Type', 'application/json').json({
            status: true,
            code,
            data: getPagingData(data, page, limit),
            message: '',
        });
    }).catch((err) => {
        return res.status(503).setHeader('Content-Type', 'application/json').json({
            status: false,
            code: 503,
            data: [],
            message: err.message || 'Some error occurred while retrieving tutorials.',
        });
    });
};

exports.findOne = async (req, res) => {
    const id = (stripTags(req.params.id || '')).trim();

    await City.findByPk(id, { attributes: { exclude: ['id', 'createdAt'] } }).then((data) => {
        if (data) {
            return res.status(200).setHeader('Content-Type', 'application/json').json({
                status: true,
                code: 200,
                data,
                message: '',
            });
        }

        return res.status(401).setHeader('Content-Type', 'application/json').json({
            status: false,
            code: 401,
            data: [],
            message: `Cannot find Country with id=${id}.`,
        });
    }).catch((err) => {
        return res.status(503).setHeader('Content-Type', 'application/json').json({
            status: false,
            code: 503,
            data: [],
            message: err.message || `Error retrieving Country with id=${id}.`,
        });
    });
};

exports.update = async (req, res, next) => {
    const uuid = (stripTags(req.params.id || '')).trim();
    const data = {};

    data.active = req.body.active !== '1' || req.body.active !== '0' ? delete data.active : null;
    data.cityName = data.cityName === '' ? delete data.cityName : (stripTags(req.body.cityName || '')).trim();
    data.phoneCode = data.phoneCode === '' ? delete data.phoneCode : (stripTags(req.body.phoneCode || '')).trim();

    await City.update(data, {
        where: { uuid },
    }).then((num) => {
        if ((typeof num === 'object' && num[0] === 1) || num === 1) {
            return this.findAll(req, res, next, 202);
        }

        return res.status(503).setHeader('Content-Type', 'application/json').json({
            status: true,
            code: 503,
            data: [],
            message: `Cannot update Country with id=${uuid}. 
                    Maybe Country was not found or req.body is empty!`,
        });
    }).catch((err) => {
        return res.status(500).setHeader('Content-Type', 'application/json').json({
            status: false,
            code: 500,
            data: [],
            message: err.message || 'Cannot update Country',
        });
    });
};

exports.updateAll = async (req, res, next) => {
    const uuid = (stripTags(req.body.id || '')).trim().split(',').filter(Boolean);
    const active = req.body.active !== '1' || req.body.active !== '0' ? (parseForm(req.body.active)).toString() : '-1';

    if (active === '-1' || uuid.length === 0) {
        return res.status(503).setHeader('Content-Type', 'application/json').json({
            status: true,
            code: 503,
            data: [],
            message: `Cannot update City with id=$. 
                    Maybe Country was not found or req.body is empty!`,
        });
    }
    await City.update({ active: '0' }, {
        where: { uuid },
    }).then((num) => {
        if (typeof num === 'object' || num === 1) {
            return this.findAll(req, res, next, 202);
        }

        return res.status(503).setHeader('Content-Type', 'application/json').json({
            status: true,
            code: 503,
            data: [],
            message: `Cannot update City with id=$. 
                    Maybe Country was not found or req.body is empty!`,
        });
    }).catch((err) => {
        return res.status(500).setHeader('Content-Type', 'application/json').json({
            status: false,
            code: 500,
            data: [],
            message: err.message || 'Cannot update City',
        });
    });
};

exports.delete = async (req, res, next) => {
    const firstDate = (stripTags(req.body.firstDate || '')).trim();
    const lastDate = (stripTags(req.body.lastDate || '')).trim();
    const conditions = {
        id: (stripTags(req.body.id || '')).trim(),
        createdAt: {
            [Op.between]: [firstDate, lastDate],
        },
    };

    await City.destroy({
        where: conditions,
    }).then((nums) => {
        if ((parseInt(nums, 10) || 0) === 1) {
            return this.findAll(req, res, next, 202);
        }

        return res.status(503).setHeader('Content-Type', 'application/json').json({
            status: false,
            code: 503,
            data: [],
            message: `Cannot delete City with id=.
                    Maybe Country was not found!`,
        });
    }).catch((err) => {
        return res.status(500).setHeader('Content-Type', 'application/json').json({
            status: false,
            code: 500,
            data: [],
            message: err.message || 'Could not delete City with id=',
        });
    });
};

exports.deleteAll = async (req, res, next) => {
    try {
        return await City.destroy({
            where: {},
            truncate: { cascade: true },
        }).then(() => {
            return this.findAll(req, res, next, 202);
        }).catch((err) => {
            return res.status(503)
                .setHeader('Content-Type', 'application/json').json({
                    status: false,
                    code: 503,
                    data: [],
                    message: err.message || 'Some error occurred while removing all Country.',
                });
        });
    } catch (err) {
        return res.status(500).setHeader('Content-Type', 'application/json').json({
            status: false,
            code: 500,
            data: [],
            message: err.message || 'Some error occurred while removing all Country.',
        });
    }
};

exports.child = async (req, res) => {
    const uuid = (stripTags(req.body.id || '')).trim();
    const { offset, limit, page } = paginations(req, 'cityName');
    const { where } = getCondition(req, 'cityName');
    const { order } = getOrder(req, 'cityName');

    await City.findAll({
        where: { uuid },
        attributes: {
            exclude: ['active', 'createdAt', 'id'],
        },
        include: {
            model: db.city,
            as: 'rows',
            where,
            limit,
            offset,
            order,
            attributes: [[Sequelize.literal(' count(*) over ()'), 'count'], 'uuid', 'cityName', 'active', 'updatedAt'],
        },
    }).then((data) => {
        if (data) {
            return res.status(200).setHeader('Content-Type', 'application/json').json({
                status: true,
                code: 200,
                data: getPagingData(data[0].rows, page, limit, data),
                message: '',
            });
        }

        return res.status(401).setHeader('Content-Type', 'application/json').json({
            status: false,
            code: 401,
            data: [],
            message: 'Cannot find City id.',
        });
    }).catch((err) => {
        return res.status(503).setHeader('Content-Type', 'application/json').json({
            status: false,
            code: 503,
            data: [],
            message: err.message || 'Error retrieving Country with id=.',
        });
    });
};
