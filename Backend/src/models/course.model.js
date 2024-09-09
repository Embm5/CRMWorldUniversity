import { DataTypes } from 'sequelize'
import { sequelize } from '../database/connection.js'
import { Teacher } from './teacher.model.js'

export const Course = sequelize.define('Course', {
  courseId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  teacherId: {
    type: DataTypes.BIGINT
  },
  courseName: {
    type: DataTypes.STRING
  },
  Assistance: {
    type: DataTypes.BOOLEAN
  }
})

Teacher.hasMany(Course, {
  foreignKey: 'teacherId',
  sourceKey: 'personId'
})

Course.belongsTo(Teacher, {
  foreignKey: 'teacherId',
  targetKey: 'personId'
})
