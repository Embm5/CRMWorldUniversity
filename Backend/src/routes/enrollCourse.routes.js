import { Router } from 'express'
import { EnrollCourseController } from '../controllers/enrollCourse.controller.js'

const enrollCourseController = new EnrollCourseController()
export const enrollCourseRouters = Router()

enrollCourseRouters.get('/api/enrollCourses', enrollCourseController.getAllEnrollCourses)
enrollCourseRouters.post('/api/enrollCourses', enrollCourseController.createEnrollCourses)
enrollCourseRouters.get('/api/enrollCourses/:studentId', enrollCourseController.getEnrolledCoursesWithSchedule)
enrollCourseRouters.patch('/api/enrollCourses/:studentId/:courseId', enrollCourseController.updateEnrollCourse)
enrollCourseRouters.delete('/api/enrollCourses/:studentId/:courseId', enrollCourseController.deleteEnrollCourse)
