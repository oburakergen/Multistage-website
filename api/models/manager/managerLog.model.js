/*
 * Copyright (c) Burak ERGEN 2022.
 */

/**
 * Create manager model
 * @protected
 */
module.exports = (sequelize, Sequelize) => sequelize.define('managerLog', {
    id: {
        type: Sequelize.UUID,
        get() {
            return (this.getDataValue('uuid')).toString('utf8');
        },
        defaultValue: Sequelize.UUIDV1,
        unique: {
            args: true,
            msg: 'Bu id kullanılıyor',
        },
        primaryKey: true,
    },
    managerId: {
        type: Sequelize.UUID,
        get() {
            return (this.getDataValue('uuid')).toString('utf8');
        },
        unique: {
            args: true,
            msg: 'Bu id kullanılıyor2',
        },
        defaultValue: Sequelize.UUIDV1,
    },
    ipv4: {
        type: Sequelize.INTEGER,
    },
    log: {
        type: Sequelize.TEXT,
    },
    type: {
        type: Sequelize.TINYINT,
        defaultValue: 0,
    },
}, {});
