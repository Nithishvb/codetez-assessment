const mysql = require("mysql");
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  "sys",
  "root",
  "nithishvijay6",
  {
    host: "127.0.0.1",
    dialect: "mysql",
    port: "3307"
  }
);

sequelize.authenticate()
 .then(() => {
  console.log("DATABASE CONNECTED");
 }).catch((err) => {
    console.log(err);
 });

 module.exports = sequelize;
