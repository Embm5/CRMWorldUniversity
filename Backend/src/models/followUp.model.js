import { DataTypes } from 'sequelize'
import { sequelize } from '../database/connection.js'
import { Teacher } from './teacher.model.js'

export const FollowUp = sequelize.define('FollowUp', {
  followUpId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  calification: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 0,
      max: 5
    }
  },
  teacherId: {
    type: DataTypes.BIGINT
  }
})
Teacher.hasOne(FollowUp, {
  foreignKey: 'teacherId',
  sourceKey: 'personId'
})

FollowUp.belongsTo(Teacher, {
  foreignKey: 'teacherId',
  targetKey: 'personId'
})
