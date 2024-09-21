import { DataTypes } from 'sequelize'
import { sequelize } from '../database/connection.js'

export const Assignment = sequelize.define('Assignment', {
  asId: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING
  },
  semester: {
    type: DataTypes.STRING,
    allowNull: false
  }
})
