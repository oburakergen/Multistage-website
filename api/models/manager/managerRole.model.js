/*
 * Copyright (c) Burak ERGEN 2022.
 */

/**
 * Create manager model
 * @protected
 */
module.exports = (sequelize, Sequelize) => sequelize.define('managerRole', {
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
    roleName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            len: {
                args: [1, 50],
                msg: 'Kullanıcı isimler 1-50 arasında olabilir',
            },
        },
    },
    roleType: {
        type: Sequelize.INTEGER,
        defaultValue: '1',
    },
}, {});
