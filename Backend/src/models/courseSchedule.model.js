import { DataTypes } from 'sequelize'
import { sequelize } from '../database/connection.js'
import { Course } from './course.model.js'
export const CourseSchedule = sequelize.define('CourseSchedule', {
  courseId: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  DayOfWeek: {
    type: DataTypes.STRING,
    primaryKey: true
  },
  startHour: {
    type: DataTypes.TIME
  },
  endHour: {
    type: DataTypes.TIME
  }
})
Course.hasMany(CourseSchedule, {
  foreignKey: 'courseId',
  sourceKey: 'courseId'

})

CourseSchedule.belongsTo(Course, {
  foreignKey: 'courseId',
  targetKey: 'courseId'
})
