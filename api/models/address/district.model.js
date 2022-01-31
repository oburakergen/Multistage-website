/*
 * Copyright (c) 2021/12/24 Burak ERGEN
 */

/**
 * Create district model
 * @protected
 */
module.exports = (sequelize, Sequelize) => sequelize.define('district', {
    uuid: {
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
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
    },
    districtName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            len: {
                args: [1, 50],
                msg: 'Semt isimleri 1-20 arasındaki karekteri alabilir.',
            },
        },
    },
    townId: Sequelize.INTEGER,
    active: {
        type: Sequelize.STRING,
        defaultValue: '0',
    },
}, {});
