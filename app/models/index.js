require('dotenv').config();
// const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(process.env.DATABASE_URL);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.drinks = require("./drink.model.js")(sequelize, Sequelize);

module.exports = db;
