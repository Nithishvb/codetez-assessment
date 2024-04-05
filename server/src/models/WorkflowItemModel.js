const { DataTypes } = require('sequelize');
const sequelize = require('../../config/dbconfig');
const Workflow = require('./WorkflowMode');

const WorkflowItem = sequelize.define('WorkflowItem', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true, 
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pointer: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  workflowid: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

WorkflowItem.sync();

module.exports = WorkflowItem;