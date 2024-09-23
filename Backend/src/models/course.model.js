import { DataTypes } from 'sequelize'
import { sequelize } from '../database/connection.js'
import { Teacher } from './teacher.model.js'
import { Assignment } from './assignment.model.js'

export const Course = sequelize.define('Course', {
  courseId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  teacherId: { 
    type: DataTypes.BIGINT
  },
  asId: { 
    type: DataTypes.INTEGER
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

Assignment.hasMany(Course, {
  foreignKey: 'asId',
  sourceKey: 'asId'
})

Course.belongsTo(Assignment, {
  foreignKey: 'asId',
  targetKey: 'asId'
})
