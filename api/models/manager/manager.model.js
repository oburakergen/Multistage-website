/*
 * Copyright (c) Burak ERGEN 2022.
 */

/**
 * Create manager model
 * @protected
 */
module.exports = (sequelize, Sequelize) => sequelize.define('manager', {
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
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            len: {
                args: [1, 50],
                msg: 'Kullanıcı isimler 1-50 arasında olabilir',
            },
        },
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            len: {
                args: [1, 250],
                msg: 'Kullanıcı şifresi 1-250 arasında olabilir.',
            },
        },
    },
    slug: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            len: {
                args: [1, 100],
                msg: 'Slug hatası',
            },
        },
    },
    rememberToken: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            len: {
                args: [1, 150],
                msg: 'RememberToken error',
            },
        },
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            len: {
                args: [1, 100],
                msg: 'Kullanıcı emaili 1-100 arasında olabilir.',
            },
        },
    },
    roleId: {
        type: Sequelize.UUID,
        get() {
            return (this.getDataValue('uuid')).toString('utf8');
        },
        defaultValue: Sequelize.UUIDV1,
    },
    active: {
        type: Sequelize.STRING,
        defaultValue: '0',
    },
}, {});
