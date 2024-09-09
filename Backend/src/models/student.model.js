import { DataTypes } from 'sequelize'
import { sequelize } from '../database/connection.js'
import { Person } from './person.model.js'

export const Student = sequelize.define('Student', {
  personId: {
    type: DataTypes.BIGINT,
    primaryKey: true
  }
})

Person.hasOne(Student, {
  foreignKey: 'personId',
  sourceKey: 'id'
})

Student.belongsTo(Person, {
  foreignKey: 'personId',
  targetKey: 'id'
})
