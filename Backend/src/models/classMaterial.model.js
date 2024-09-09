import { DataTypes } from 'sequelize'
import { sequelize } from '../database/connection.js'
import { Course } from './course.model.js'

export const ClassMaterial = sequelize.define('ClassMaterial', {
  CMId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  CourseId: {
    type: DataTypes.INTEGER
  },
  tittle: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  }
})
Course.hasMany(ClassMaterial, {
  foreignKey: 'CourseId',
  sourceKey: 'CourseId'
})

ClassMaterial.belongsTo(Course, {
  foreignKey: 'CourseId',
  targetKey: 'CourseId'
})
