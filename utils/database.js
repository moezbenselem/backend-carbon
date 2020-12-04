const Sequelize = require('sequelize');
const sequelize = new Sequelize('6FR4NyzO5t', '6FR4NyzO5t', '4GobD4aduX', {
  dialect: 'mysql',
  host: 'remotemysql.com',
  omitNull :true
});

module.exports = sequelize;
