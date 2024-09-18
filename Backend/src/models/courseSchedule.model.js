import { DataTypes } from 'sequelize'
import { sequelize } from '../database/connection.js'
import { Course } from './course.model.js'
export const CourseSchedule = sequelize.define('CourseSchedule', {
  scheduleId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  day: {
    type: DataTypes.STRING,
    allowNull: false
  },
  startTime: {
    type: DataTypes.TIME,
    allowNull: false
  },
  endTime: {
    type: DataTypes.TIME,
    allowNull: false
  },
  courseId: {
    type: DataTypes.INTEGER
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
