import { Router } from 'express'
import { TeacherController } from '../controllers/teacher.controller.js'

const teacherController = new TeacherController()
export const teacherRouters = Router()

teacherRouters.get('/api/teacher', teacherController.getaAllTeachers)
teacherRouters.post('/api/teacher', teacherController.createTeacher)
teacherRouters.get('/api/teacher/:id', teacherController.getTeacher)
teacherRouters.put('/api/teacher/:id', teacherController.updateTeacher)
teacherRouters.delete('/api/teacher/:id', teacherController.deleteTeacher)
