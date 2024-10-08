import { Router } from 'express'
import { CourseScheduleController } from '../controllers/courseSchedule.controller.js'

const courseScheduleController = new CourseScheduleController()
export const courseScheduleRouters = Router()

courseScheduleRouters.get('/api/courseSchedule', courseScheduleController.getAllCourses)
courseScheduleRouters.post('/api/courseSchedule', courseScheduleController.createCourse)
courseScheduleRouters.get('/api/courseSchedule/:courseId', courseScheduleController.getCourse)
courseScheduleRouters.get('/api/courseSchedule/assignment/:assignmentId', courseScheduleController.getCoursesByAssignment)
courseScheduleRouters.put('/api/courseSchedule/:courseId', courseScheduleController.updateCourse)
courseScheduleRouters.delete('/api/courseSchedule/:courseId', courseScheduleController.deleteCourse)
courseScheduleRouters.get('/api/courseSchedule/teacher/:teacherId', courseScheduleController.getCoursesByTeacher)
