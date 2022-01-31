/*
 * Copyright (c) 2021-2021/12/24 Burak ERGEN
 */

/**
 * Create neighborhood model
 * @protected
 */
module.exports = (sequelize, Sequelize) => sequelize.define('neighborhood', {
    uuid: {
        type: Sequelize.UUID,
        get() {
            return (this.getDataValue('uuid')).toString('utf8');
        },
        defaultValue: Sequelize.UUIDV1,
    },
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    neighborhoodName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    zipcode: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    districtId: Sequelize.INTEGER,
    active: {
        type: Sequelize.STRING,
        defaultValue: '0',
    },
}, {});
