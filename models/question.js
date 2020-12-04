const Sequelize = require("sequelize");

const sequelize = require("../utils/database");

const Question = sequelize.define(
  "question",
  {
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
  },
  { timestamps: false }
);

module.exports = Question;
