const { sequelize, Sequelize } = require('../../database/agency_management.db');

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.manager = require('./manager.model')(sequelize, Sequelize);
db.city = require('./managerFeature.model')(sequelize, Sequelize);
db.district = require('./managerLog.model')(sequelize, Sequelize);
db.neighborhood = require('./managerRole.model')(sequelize, Sequelize);
db.town = require('./managerRolePermission.model')(sequelize, Sequelize);

module.exports = db;
