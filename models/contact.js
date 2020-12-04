const Sequelize = require("sequelize");

const sequelize = require("../utils/database");

const Contact = sequelize.define("contact", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  content: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  date_time: {
    type: Sequelize.DATE,
    allowNull: false,
  },
},
{ timestamps: false });

module.exports = Contact;
