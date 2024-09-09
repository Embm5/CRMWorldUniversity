import { sequelize } from '../database/connection.js'
import { Enroll } from './enroll.mode.js'
import { Course } from './course.model.js'

export const EnrollCourse = sequelize.define('EnrollCourse', {
})

Course.belongsToMany(Enroll, {
  through: EnrollCourse
})
Enroll.belongsToMany(Course, {
  through: EnrollCourse
})
