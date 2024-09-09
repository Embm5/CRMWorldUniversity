import { DataTypes } from 'sequelize'
import { sequelize } from '../database/connection.js'
import { Person } from './person.model.js'

export const AdministrativeSt = sequelize.define('AdministrativeSt', {
  personId: {
    type: DataTypes.BIGINT,
    primaryKey: true
  }
})

Person.hasOne(AdministrativeSt, {
  foreignKey: 'personId',
  sourceKey: 'id'
})

AdministrativeSt.belongsTo(Person, {
  foreignKey: 'personId',
  targetKey: 'id'
})
