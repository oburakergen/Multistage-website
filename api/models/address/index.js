/*
 * Copyright (c) 2021-2021/12/29 Burak ERGEN
 */

const { sequelize, Sequelize } = require('../../database/agency_management.db');

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

/*
Address Section Start
 */
db.country = require('./country.model')(sequelize, Sequelize);
db.city = require('./city.model')(sequelize, Sequelize);
db.district = require('./district.model')(sequelize, Sequelize);
db.neighborhood = require('./neighborhood.model')(sequelize, Sequelize);
db.town = require('./town.model')(sequelize, Sequelize);
db.taxOffice = require('./taxOffice.model')(sequelize, Sequelize);

db.country.hasMany(db.city, {
    as: 'rows',
    foreignKey: 'countryId',
    sourceKey: 'id',
});

db.city.hasMany(db.town, {
    as: 'rows',
    foreignKey: 'cityId',
    sourceKey: 'id',
});

db.city.belongsTo(db.country, {
    foreignKey: 'countryId', as: 'items', targetKey: 'id',
});

db.town.hasMany(db.district, {
    as: 'rows',
    foreignKey: 'townId',
    sourceKey: 'id',
});

db.town.belongsTo(db.city, {
    foreignKey: 'cityId', as: 'items', targetKey: 'id',
});

db.district.hasMany(db.neighborhood, {
    as: 'rows',
    foreignKey: 'districtId',
    sourceKey: 'id',
});

db.neighborhood.belongsTo(db.district, {
    foreignKey: 'districtId', as: 'items', targetKey: 'id',
});

/*
Address Section End
 */

module.exports = db;
