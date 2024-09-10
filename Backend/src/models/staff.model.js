import { DataTypes } from 'sequelize'
import { sequelize } from '../database/connection.js'
import { Person } from './person.model.js'

export const Staff = sequelize.define('Staff', {
  personId: {
    type: DataTypes.BIGINT,
    primaryKey: true
  }
})

Person.hasOne(Staff, {
  foreignKey: 'personId',
  sourceKey: 'id'
})

Staff.belongsTo(Person, {
  foreignKey: 'personId',
  targetKey: 'id'
})
