const Sequelize = require("sequelize");

const sequelize = require("../utils/database");

const Score = sequelize.define("score", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  score: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  date_time: {
    type: Sequelize.DATE,
    allowNull: false,
  },
},
{ timestamps: false });

module.exports = Score;
