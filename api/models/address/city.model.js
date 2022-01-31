/*
 * Copyright (c) 2021-2021/12/24 Burak ERGEN
 */

/**
 * Create city model
 * @protected
 */
module.exports = (sequelize, Sequelize) => sequelize.define('city', {
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
    countryId: {
        type: Sequelize.INTEGER,
    },
    cityName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            len: {
                args: [1, 20],
                msg: 'Ülke isimleri 1-20 arasındaki karekteri alabilir.',
            },
        },
    },
    active: {
        type: Sequelize.STRING,
        defaultValue: '0',
    },
}, {});
