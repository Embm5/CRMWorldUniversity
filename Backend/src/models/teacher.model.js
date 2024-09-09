import { DataTypes } from 'sequelize'
import { sequelize } from '../database/connection.js'
import { Person } from './person.model.js'

export const Teacher = sequelize.define('Teacher', {
  personId: {
    type: DataTypes.BIGINT,
    primaryKey: true
  }
})

Person.hasOne(Teacher, {
  foreignKey: 'personId',
  sourceKey: 'id'
})

Teacher.belongsTo(Person, {
  foreignKey: 'personId',
  targetKey: 'id'
})
