import { DataTypes } from 'sequelize'
import { sequelize } from '../database/connection.js'
import { Enroll } from './enroll.model.js'
import { Course } from './course.model.js'

export const EnrollCourse = sequelize.define('EnrollCourse', {
  approved: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
})

EnrollCourse.belongsTo(Enroll, {
  foreignKey: 'enrollID',
  targetKey: 'enrollID'
})

EnrollCourse.belongsTo(Course, {
  foreignKey: 'courseId',
  targetKey: 'courseId'
})

Enroll.hasMany(EnrollCourse, {
  foreignKey: 'enrollID',
  sourceKey: 'enrollID'
})

Course.hasMany(EnrollCourse, {
  foreignKey: 'courseId',
  sourceKey: 'courseId'
})
