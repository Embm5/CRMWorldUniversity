import { Router } from 'express'
import { CourseController } from '../controllers/course.controller.js'

const courseController = new CourseController()
export const courseRouters = Router()

courseRouters.get('/api/course', courseController.getAllCourses)
courseRouters.post('/api/course', courseController.createCourse)
courseRouters.get('/api/course/:courseId', courseController.getCourse)
courseRouters.put('/api/course/:courseId', courseController.updateCourse)
courseRouters.delete('/api/course/:courseId', courseController.deleteCourse)
