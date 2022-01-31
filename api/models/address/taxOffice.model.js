/*
 * Copyright (c) 2021-2021/12/24 Burak ERGEN
 */

/**
 * Create tax office model
 * @protected
 */
module.exports = (sequelize, Sequelize) => sequelize.define('taxOffice', {
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
    plaka: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    il: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    ilce: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    daire: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    active: {
        type: Sequelize.STRING,
        defaultValue: '0',
    },
}, {});
