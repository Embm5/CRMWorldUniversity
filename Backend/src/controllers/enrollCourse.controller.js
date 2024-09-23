import { EnrollCourse } from '../models/enrollCourse.model.js'
import { Enroll } from '../models/enroll.model.js'
import { Course } from '../models/course.model.js'
import { CourseSchedule } from '../models/courseSchedule.model.js'
import { Student } from '../models/student.model.js'
import { Person } from '../models/person.model.js'

export class EnrollCourseController {
  getAllEnrollCourses = async (req, res) => {
    try {
      const enrollCourses = await EnrollCourse.findAll({
        include: [
          {
            model: Enroll,
            include: [
              {
                model: Student,
                include: [{ model: Person }]
              }
            ]
          },
          {
            model: Course,
            include: [
              { model: CourseSchedule }
            ]
          }
        ]
      })
      res.status(200).json(enrollCourses)
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  }

  getEnrollCourse = async (req, res) => {
    try {
      const { enrollCourseId } = req.params
      const enrollCourse = await EnrollCourse.findByPk(enrollCourseId, {
        include: [
          {
            model: Enroll,
            include: [
              {
                model: Student,
                include: [{ model: Person }]
              }
            ]
          },
          {
            model: Course,
            include: [
              { model: CourseSchedule }
            ]
          }
        ]
      })
      if (enrollCourse) {
        res.status(200).json(enrollCourse)
      } else {
        res.status(404).json({ message: 'EnrollCourse not found' })
      }
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  }

  createEnrollCourse = async (req, res) => {
    try {
      const newEnrollCourse = await EnrollCourse.create(req.body)
      res.status(201).json(newEnrollCourse)
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  }

  updateEnrollCourse = async (req, res) => {
    try {
      const { enrollCourseId } = req.params
      const enrollCourse = await EnrollCourse.findByPk(enrollCourseId)
      if (enrollCourse) {
        await enrollCourse.update(req.body)
        res.status(202).json(enrollCourse)
      } else {
        res.status(404).json({ message: 'EnrollCourse not found' })
      }
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  }

  deleteEnrollCourse = async (req, res) => {
    try {
      const { enrollCourseId } = req.params
      const rowsDeleted = await EnrollCourse.destroy({ where: { id: enrollCourseId } })
      if (rowsDeleted) {
        res.json({ message: 'EnrollCourse deleted successfully' })
      } else {
        res.status(404).json({ message: 'EnrollCourse not found' })
      }
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  }

  getStudentActiveCoursesWithSchedule = async (req, res) => {
    try {
      const { studentId } = req.params
      const activeEnrollments = await Enroll.findAll({
        where: { studentId, status: 'ACTIVE' },
        include: [
          {
            model: Course,
            include: [
              { model: CourseSchedule }
            ]
          }
        ]
      })

      if (activeEnrollments.length > 0) {
        res.status(200).json(activeEnrollments)
      } else {
        res.status(404).json({ message: 'No active enrollments found for this student' })
      }
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  }
}
