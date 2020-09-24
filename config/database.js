const { Sequelize } = require('sequelize');

module.exports = new Sequelize('codegig', 'postgres', '16021986', {
  host: 'localhost',
  dialect: 'postgres',
});
