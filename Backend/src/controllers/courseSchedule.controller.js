import { Person } from '../models/person.model.js'
import { Teacher } from '../models/teacher.model.js'
import { Assignment } from '../models/assignment.model.js'
import { Course } from '../models/course.model.js'
import { CourseSchedule } from '../models/courseSchedule.model.js'

export class CourseScheduleController {
  getAllCourses = async (req, res) => {
    try {
      const courses = await Course.findAll({
        include: [{
          model: Teacher,
          include: [{ model: Person }]
        }, { model: Assignment }, { model: CourseSchedule }]
      })
      res.status(200).json(courses)
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  }

  createCourse = async (req, res) => {
    try {
      const { courseData, scheduleData } = req.body

      const course = await Course.create(courseData, {
        include: [{
          model: Teacher,
          include: [{ model: Person }]
        }, { model: Assignment }]
      })

      const courseSchedules = await CourseSchedule.bulkCreate(scheduleData.map(schedule => ({
        ...schedule,
        courseId: course.courseId
      })))

      return res.status(201).json({ course, courseSchedules })
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  }

  getCourse = async (req, res) => {
    try {
      const { courseId } = req.params

      const course = await Course.findByPk(courseId, {
        include: [
          { model: Teacher, include: [{ model: Person }] },
          { model: Assignment },
          { model: CourseSchedule }
        ]
      })

      if (!course) {
        return res.status(404).json({ err: 'Course not found' })
      }

      res.status(200).json(course)
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  }

  getCoursesByAssignment = async (req, res) => {
    try {
      const { assignmentId } = req.params

      const courses = await CourseSchedule.findAll({
        where: { asId: assignmentId },
        include: [
          {
            model: Course,
            include: [{ model: Assignment }]
          }
        ]
      })

      if (courses.length > 0) {
        res.status(200).json(courses)
      } else {
        res.status(404).json({ message: 'No courses found for this assignment.' })
      }
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  }

  getCoursesByTeacher = async (req, res) => {
    try {
      const { teacherId } = req.params

      const courses = await Course.findAll({
        where: { teacherId },
        include: [
          {
            model: Teacher,
            attributes: ['personId'],
            include: [{ model: Person, attributes: ['firstName', 'lastName1', 'lastName2'] }]
          },
          {
            model: Assignment,
            attributes: ['name', 'semester']
          },
          {
            model: CourseSchedule,
            attributes: ['day', 'startTime', 'endTime', 'room']
          }
        ]
      })

      if (!courses || courses.length === 0) {
        return res.status(404).json({ message: 'No courses found for this teacher' })
      }
      return res.status(200).json(courses)
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  }

  deleteCourse = async (req, res) => {
    try {
      const { courseId } = req.params

      await CourseSchedule.destroy({ where: { courseId } })

      await Course.destroy({ where: { courseId } })

      res.json({ msg: 'Course and schedules deleted' })
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  }

  updateCourse = async (req, res) => {
    try {
      const { courseId } = req.params
      const { courseData, scheduleData } = req.body

      const course = await Course.findByPk(courseId)
      if (!course) {
        return res.status(404).json({ error: 'Course not found' })
      }

      await course.update(courseData)

      await CourseSchedule.destroy({ where: { courseId } })

      const newSchedules = await CourseSchedule.bulkCreate(scheduleData.map(schedule => ({
        ...schedule,
        courseId
      })))

      res.status(202).json({ course, newSchedules })
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  }
}
