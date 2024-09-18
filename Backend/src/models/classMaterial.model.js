import { DataTypes } from 'sequelize'
import { sequelize } from '../database/connection.js'
import { Course } from './course.model.js'

export const ClassMaterial = sequelize.define('ClassMaterial', {
  cmId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  courseId: {
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
  foreignKey: 'courseId',
  sourceKey: 'courseId'
})

ClassMaterial.belongsTo(Course, {
  foreignKey: 'courseId',
  targetKey: 'courseId'
})
