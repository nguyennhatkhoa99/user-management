const Sequelize = require('sequelize');
const config = require('../config/index')

const db = {}
const sequelize = new Sequelize(
    config.postgreSQL.database, 
    config.postgreSQL.user, 
    config.postgreSQL.password, {
    host: config.postgreSQL.host,
    dialect: 'postgres', 
  });

  db.sequelize = sequelize;
  db.Sequelize = Sequelize;
  
  module.exports = db;
