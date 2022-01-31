/*
 * Copyright (c) Burak ERGEN 2022.
 */

/**
 * Create manager model
 * @protected
 */
module.exports = (sequelize, Sequelize) => sequelize.define('managerFeature', {
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
    lastname: {
        type: Sequelize.INTEGER,
    },
    phone: {
        type: Sequelize.TEXT,
    },
    genre: {
        type: Sequelize.TINYINT,
        defaultValue: 0,
    },
    managerId: {
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
    filePathId: {
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
}, {});
