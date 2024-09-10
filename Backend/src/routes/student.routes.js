import { Router } from 'express'
import { StudentController } from '../controllers/student.controller.js'

const studentController = new StudentController()
export const studentRouters = Router()

studentRouters.get('/api/student', studentController.getAllStudents)
studentRouters.post('/api/student', studentController.createStudent)
studentRouters.get('/api/student/:id', studentController.getStudent)
studentRouters.put('/api/student/:id', studentController.updateStudent)
studentRouters.delete('/api/Student/:id', studentController.deleteStudent)
