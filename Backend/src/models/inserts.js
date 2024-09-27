import bcrypt from 'bcrypt'

import { Administrator } from './administrator.model.js'
import { Person } from './person.model.js'
import { Staff } from './staff.model.js'
import { Teacher } from './teacher.model.js'
import { Student } from './student.model.js'
import { Credential } from './credential.model.js'

export async function inserts () {
  const newAdmin = {
    id: 12345,
    firstName: 'Admin',
    lastName1: '1'
  }
  const newStudent = {
    id: 4422,
    firstName: 'David',
    lastName1: 'Correa'
  }
  const newStaff = {
    id: 3312,
    firstName: 'Maria',
    secondName: 'Jose',
    lastName1: 'Arcila'
  }
  const newTeacher = {
    id: 9988,
    firstName: 'Manuela',
    lastName1: 'Diaz'
  }
  const password = await bcrypt.hash('P@ssw0rd', 12)
  const newCredentials = [{
    personId: newAdmin.id,
    email: 'admin@worlduniversity.com',
    password
  }, {
    personId: newStudent.id,
    email: 'david@worlduniversity.com',
    password
  }, {
    personId: newStaff.id,
    email: 'mariajose@worlduniversity.com',
    password
  }, {
    personId: newTeacher.id,
    email: 'manueladiaz@worlduniversity.com',
    password
  }]
  const newPeople = []
  newPeople.push(newTeacher, newAdmin, newStaff, newStudent)
  await Person.bulkCreate(newPeople)
  await Credential.bulkCreate(newCredentials)
  await Administrator.create({ personId: newAdmin.id })
  await Student.create({ personId: newStudent.id })
  await Staff.create({ personId: newStaff.id })
  await Teacher.create({ personId: newTeacher.id })
  console.log('Data inserted successfully')
}
