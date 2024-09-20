import { DataTypes } from 'sequelize'
import { sequelize } from '../database/connection.js'
import { Course } from './course.model.js'
export const CourseSchedule = sequelize.define('CourseSchedule', {
  scheduleId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  day: { //dia o dias en que se va a ver
    type: DataTypes.STRING,
    allowNull: false
  },
  startTime: { //hora en que empieza la clase
    type: DataTypes.TIME,
    allowNull: false
  },
  endTime: { //hor aen que termina la clase
    type: DataTypes.TIME,
    allowNull: false
  },
  courseId: { //
    type: DataTypes.INTEGER
  },
  room: { //salon en que se va a ver
    type: DataTypes.STRING,
    allowNull: false
  }
})
// }, {

//   indexes: [
//     {
//       unique: true,
//       fields: ['day', 'startTime', 'endTime', 'salon']
//     }
//   ]
// })

Course.hasMany(CourseSchedule, {
  foreignKey: 'courseId',
  sourceKey: 'courseId'

})

CourseSchedule.belongsTo(Course, {
  foreignKey: 'courseId',
  targetKey: 'courseId'
})
