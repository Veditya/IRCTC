const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize("railway_db", "postgres", "aditya", {
  host: "localhost",
  dialect: "postgres",
});

module.exports = sequelize;
