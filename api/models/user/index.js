const { sequelize, Sequelize } = require('../../database/agency_management.db');

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.manager = require('../manager/manager.model')(sequelize, Sequelize);

module.exports = db;
