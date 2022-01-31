/*
 * Copyright (c) 2021-2021/12/24 Burak ERGEN
 */

const { Op } = require('../models/address').Sequelize;

exports.unique = (value, index, self) => self.indexOf(value) === index;

exports.dateHelper = {
    _ONE_SECOND_AS_MILLISECOND: 1000,
    _ONE_DAY_AS_SECONDS: 86400,
    _ONE_WEEK_AS_SECONDS: 7 * this._ONE_DAY_AS_SECONDS,

    /**
     * get date now
     * @method now
     * @return Number
     */

    now: () => Math.round(Date.now() / this.dateHelper._ONE_SECOND_AS_MILLISECOND),

    /**
     * Check whether user is on main page of website
     * @method nowFormat
     * @return Object
     */
    nowFormat: (time) => {
        const date = time || this.now();

        return new Date(date * 1000);
    },

    /**
     * Check whether user is on main page of website
     * @method beginningOfToday
     * @return Number
     */
    beginningOfToday: () => (new Date()).setUTCHours(0, 0, 0, 0) / this.dateHelper._ONE_SECOND_AS_MILLISECOND,

    /**
     * Check whether user is on main page of website
     * @method getTime
     * @return Number
     */
    getTime: (time) => (time ? new Date(time).getTime() : (new Date()).getTime()),

    /**
     * Check whether user is on main page of website
     * @method getUTCDate
     * @return Number
     */
    getUTCDate: (time) => {
        const e = new Date();

        return e.setTime(this.dateHelper.getTime() + (time || 0)) || e;
    },

    /**
     * Check whether user is on main page of website
     * @method addDay
     * @return Object
     */
    addDay: (time) => {
        const add = parseInt(time, 10) || 1;

        return new Date(1000 * (this.dateHelper.now() + add * this._ONE_DAY_AS_SECONDS));
    },

    /**
     * Check whether user is on main page of website
     * @method isValidDate
     * @return Boolean
     */
    isValidDate: (time) => new Date(time).toString() !== 'Invalid Date',

    getISODateWithoutUTC: (time) => (new Date(time || this.dateHelper.now())).toISOString(),

    getDateAndTime: (time) => {
        const t = this.dateHelper.getISODateWithoutUTC(time).match(/(\d{4}\-\d{2}\-\d{2})T(\d{2}:\d{2}:\d{2})/);

        return `${t[1]} ${t[2]}`;
    },

    /**
     * Check whether user is on main page of website
     * @method remainingTimeUntil
     * @return Number
     */
    remainingTimeUntil: (time) => {
        const add = parseInt(time, 10) || 1;

        return this.getTime(add) - this.getTime();
    },
};

exports.stripTags = (input = '') => {
    let inside = false;
    const array = [];

    for (let i = 0; i < input.length; i += 1) {
        const chars = input.charAt(i);

        if (chars === '<') {
            inside = true;
        } else if (chars === '>') {
            inside = false;
        } else if (!inside) {
            array.push(chars);
        }
    }

    return array.join('').trim();
};

exports.parseForm = (str = '', floats = false) => {
    let value = 0;

    value = str.replace(/[^0-9.,]/g, '');

    if (value.slice(-3).indexOf(',') !== -1) {
        value = parseFloat(str.replace(/[^0-9,]/g, '').replace(',', '.')) || 0;
    } else if (value.slice(-3).indexOf('.') !== -1) {
        value = parseFloat(str.replace(/[^0-9.]/g, '')) || 0;
    } else {
        value = parseFloat(str.replace(/[^0-9]/g, '')) || 0;
    }

    if (floats) {
        value = parseInt(value.toFixed(0), 10) || 0;
    }

    return value;
};

exports.paginations = (query) => {
    const { page, size } = query;
    const { limit, offset } = this.getPagination(page, size);

    return {
        limit,
        offset,
        page,
    };
};

exports.getPagination = (page, size) => {
    let newSize = this.parseForm(size) || 30;

    const newPage = this.parseForm(page);

    newSize = newSize > 31 ? 30 : newSize;

    const limit = newSize ? +newSize : 30;
    const offset = newPage ? newPage * limit : 0;

    return { limit, offset };
};

exports.getPagingData = (data, page, limit, newData) => {
    const newPage = this.parseForm(page);
    const nData = newData;

    let control = false;

    if (typeof data.count === 'undefined') {
        nData[0].count = ((data[0] || {}).dataValues || {}).count
            || (data.rows || {}).length || 0;
        data = newData[0];
        control = true;
    }

    let { rows: items } = data;
    const { count: totalItems } = data;
    const currentPage = newPage ? +newPage : 0;
    const totalPages = Math.ceil(totalItems / limit);

    if (control) {
        data.items = items;

        delete data.rows;

        items = data;
    }

    return {
        totalItems, items, totalPages, currentPage,
    };
};

exports.getCondition = (query, modal) => {
    const searchData = this.stripTags(query.search);
    const where = searchData !== '' ? { [modal]: { [Op.like]: `%${searchData}%` } } : {};

    let startDate = parseInt(query.startDate, 10);

    let endDate = parseInt(query.endDate, 10);

    if (query.published) {
        where['active'] = (this.parseForm(query.published)).toString();
    }

    if (this.dateHelper.isValidDate(startDate) && this.dateHelper.isValidDate(endDate)) {
        startDate = this.dateHelper.getTime(parseInt(query.startDate, 10));
        endDate = this.dateHelper.getTime(parseInt(query.endDate, 10));
        where['updatedAt'] = {
            [Op.between]: [this.dateHelper.getISODateWithoutUTC(startDate),
                this.dateHelper.getISODateWithoutUTC(endDate)],
        };
    }

    return { where };
};

exports.getOrder = (query, modal) => {
    const type = query === 'ASC' ? 'ASC' : 'DESC';
    const order =  [[
        modal, type,
    ]];

    return { order };
};
