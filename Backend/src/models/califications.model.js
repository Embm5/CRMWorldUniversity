import { DataTypes } from 'sequelize'
import { sequelize } from '../database/connection.js'
import { Student } from './student.model.js'
import { Course } from './course.model.js'

export const Calification = sequelize.define('Calification', {
  calificationId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  studentId: {
    type: DataTypes.BIGINT
  },
  courseId: {
    type: DataTypes.INTEGER
  },
  calificationNumber: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  porcentageNumber: {
    type: DataTypes.FLOAT,
    allowNull: false
  }

})
Course.hasMany(Calification, {
  foreignKey: 'courseId',
  sourceKey: 'courseId'
})

Calification.belongsTo(Course, {
  foreignKey: 'courseId',
  targetKey: 'courseId'
})

Student.hasMany(Calification, {
  foreignKey: 'studentId',
  sourceKey: 'personId'
})

Calification.belongsTo(Student, {
  foreignKey: 'studentId',
  targetKey: 'personId'
})
