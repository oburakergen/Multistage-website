/*
 * Copyright (c) 2021-2021/12/24 Burak ERGEN
 */

/**
 * Create town model
 * @protected
 */
module.exports = (sequelize, Sequelize) => sequelize.define('town', {
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
    cityId: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    townName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    active: {
        type: Sequelize.STRING,
        defaultValue: '0',
    },
}, {});
