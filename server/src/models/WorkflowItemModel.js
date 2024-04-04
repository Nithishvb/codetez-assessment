const { DataTypes } = require('sequelize');
const sequelize = require('../../config/dbconfig');

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
    allowNull: false,
  }
});

WorkflowItem.sync();

module.exports = WorkflowItem;