const Sequelize = require("sequelize");

const sequelize = require("../utils/database");

const Reponse = sequelize.define("reponse", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  text: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  score: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  info: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  type: {
    type: Sequelize.BOOLEAN,
    allowNull: true,
  }
},
{ timestamps: false });

module.exports = Reponse;
