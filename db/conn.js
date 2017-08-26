var Sequelize = require('sequelize');

var db = new Sequelize(process.env.DATABASE_URL);

module.exports = db;
