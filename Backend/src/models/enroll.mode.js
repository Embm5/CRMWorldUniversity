import { DataTypes } from 'sequelize'
import { sequelize } from '../database/connection.js'
import { Student } from './student.model.js'

export const Enroll = sequelize.define('Enroll', {
  enrollID: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  studentId: {
    type: DataTypes.BIGINT
  }
})

Student.hasMany(Enroll, {
  foreignKey: 'studentId',
  sourceKey: 'personId'
})

Enroll.belongsTo(Student, {
  foreignKey: 'studentId',
  targetKey: 'personId'
})
