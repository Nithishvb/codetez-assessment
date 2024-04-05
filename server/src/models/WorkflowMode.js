const { DataTypes } = require('sequelize');
const sequelize = require('../../config/dbconfig');

const Workflow = sequelize.define('Workflow', {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Workflow.sync();

module.exports = Workflow;