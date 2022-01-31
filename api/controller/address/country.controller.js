/*
 * Copyright (c) 2021-2021/12/24 Burak ERGEN
 */

const createError = require('http-errors');
const db = require('../../models/address');

const { Sequelize } = db;
const { Op } = db.Sequelize;
const Country = db.country;
const pdfService = require('../../utils/pdfkit');
const {
    stripTags, paginations, getPagingData, parseForm, getCondition, getOrder,
} = require('../../helper');

/**
 * Create controller for the country page
 * @public
 */
exports.create = async (req, res, next) => {
    const countryName = (stripTags(req.body.countryName || '')).trim();
    const phoneCode = (stripTags(req.body.phoneCode || '')).trim();
    const active = (parseForm(req.body.active)).toString();
    const request = { countryName, phoneCode, active };

    try {
        return await Country.create(request).then(() => {
            this.findAll(req, res, next, 201);
        }).catch((e) => {
            next(createError(400, e));
        });
    } catch (e) {
        next(createError(500, e));
    }
};

/**
 * Return controller for the country's list
 * @public
 */
exports.findAll = async (req, res, next, code = 200) => {
    try {
        const { offset, limit, page } = paginations(req.query);
        const { where } = getCondition(req.query, 'countryName');
        const { order } = getOrder(req.query.order, (req.query.orderName || 'countryName'));

        await Country.findAndCountAll({
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
                _token: req.signedCookies.csrf,
            });
        }).catch((e) => {
            next(createError(400, e));
        });
    } catch (e) {
        next(createError(500, e));
    }
};

/**
 * Return controller for the country's search
 * @public
 */
exports.findOne = async (req, res, next) => {
    const id = (stripTags(req.params.id || '')).trim();

    await Country.findByPk(id, { attributes: { exclude: ['id', 'createdAt'] } }).then((data) => {
        if (data) {
            return res.status(200).setHeader('Content-Type', 'application/json').json({
                status: true,
                code: 200,
                data,
                message: '',
                _token: req.signedCookies.csrf,
            });
        }

        next(createError(400, 'Veri Hatası'));
    }).catch((e) => {
        next(createError(500, e));
    });
};

/**
 * Update controller for the country's product
 * @public
 */
exports.update = async (req, res, next) => {
    const uuid = (stripTags(req.params.id || '')).trim();
    const data = {};

    data.active = req.body.active !== '1' || req.body.active !== '0' ? delete data.active : null;
    data.countryName = data.countryName === '' ? delete data.countryName : (stripTags(req.body.countryName || '')).trim();
    data.phoneCode = data.phoneCode === '' ? delete data.phoneCode : (stripTags(req.body.phoneCode || '')).trim();

    await Country.update(data, {
        where: { uuid },
    }).then((num) => {
        if ((typeof num === 'object' && num[0] === 1) || num === 1) {
            return this.findAll(req, res, next, 202);
        }

        next(createError(400, 'e'));
    }).catch((e) => {
        next(createError(500, e));
    });
};

/**
 * Update controller for the country's all of products
 * @public
 */
exports.updateAll = async (req, res, next) => {
    const uuid = (stripTags(req.body.id || '')).trim().split(',').filter(Boolean);
    const active = req.body.active !== '1' || req.body.active !== '0' ? (parseForm(req.body.active)).toString() : '-1';

    if (active === '-1' || uuid.length === 0) {
        next(createError(400, `Cannot update Country with id=$. 
                    Maybe Country was not found or req.body is empty!`));
    }
    await Country.update({ active: '0' }, {
        where: { uuid },
    }).then((num) => {
        if (typeof num === 'object' || num === 1) {
            return this.findAll(req, res, next, 202);
        }

        next(createError(400, `Cannot update Country with id=$. 
                    Maybe Country was not found or req.body is empty!`));
    }).catch((e) => {
        next(createError(500, e));
    });
};

/**
 * Remove controller for the country's product
 * @public
 */
exports.delete = async (req, res, next) => {
    const firstDate = (stripTags(req.body.firstDate || '')).trim();
    const lastDate = (stripTags(req.body.lastDate || '')).trim();
    const conditions = {
        id: (stripTags(req.body.id || '')).trim(),
        createdAt: {
            [Op.between]: [firstDate, lastDate],
        },
    };

    await Country.destroy({
        where: conditions,
    }).then((nums) => {
        console.log(nums);

        if ((parseInt(nums, 10) || 0) === 1) {
            return this.findAll(req, res, next, 202);
        }

        next(createError(400, `Cannot update Country with id=$. 
                    Maybe Country was not found or req.body is empty!`));
    }).catch((e) => {
        next(createError(500, e));
    });
};

/**
 * Remove all controller for the country's product
 * @public
 */
exports.deleteAll = async (req, res, next) => {
    try {
        return await Country.destroy({
            where: {},
            truncate: { cascade: true },
        }).then(() => {
            return this.findAll(req, res, next, 202);
        }).catch((e) => {
            next(createError(500, e));
        });
    } catch (e) {
        next(createError(500, e));
    }
};

/**
 * Find child for the country
 * @public
 */
exports.child = async (req, res, next) => {
    const uuid = (stripTags(req.body.id || '')).trim();
    const { offset, limit, page } = paginations(req, 'countryName');
    const { where } = getCondition(req, 'countryName');
    const { order } = getOrder(req, 'countryName');

    await Country.findAll({
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
                _token: req.signedCookies.csrf,
            });
        }

        next(createError(500, 'e'));
    }).catch((e) => {
        next(createError(500, e));
    });
};

exports.pdf = async (req, res) => {
    const stream = res.writeHead(200, {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment;filename=invoice.pdf',
    });

    pdfService.pdfTable(
        (chunk) => stream.write(chunk),
        () => stream.end(),
        {
            heading: 'asdasd',
            text: 'aasdasd',
        },
    );
};
