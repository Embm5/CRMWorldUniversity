import { Router } from 'express'
import { CourseController } from '../controllers/course.controller.js'

const assignmentController = new CourseController()
export const courseRouters = Router()

courseRouters.get('/api/course', assignmentController.getAllCourses)
courseRouters.post('/api/course', assignmentController.createCourse)
courseRouters.get('/api/course/:courseId', assignmentController.getCourse)
courseRouters.put('/api/course/:courseId', assignmentController.updateCourse)
courseRouters.delete('/api/course/:courseId', assignmentController.deleteCourse)
