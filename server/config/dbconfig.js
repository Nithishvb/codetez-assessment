const mysql = require("mysql");
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
    port: process.env.DB_PORT
  }
);

sequelize.authenticate()
 .then(() => {
  console.log("DATABASE CONNECTED");
 }).catch((err) => {
    console.log(err);
 });

 module.exports = sequelize;
