import { Course } from '../models/course.model.js'
import { CourseSchedule } from '../models/courseSchedule.model.js'
import { Enroll } from '../models/enroll.model.js'
import { Student } from '../models/student.model.js'
import { Person } from '../models/person.model.js'
import { EnrollCourse } from '../models/enrollCourse.model.js'

export class EnrollCourseController {
  getAllEnrollCourses = async (req, res) => {
    try {
      const enrollCourses = await EnrollCourse.findAll({
        include: [
          {
            model: Course,
            attributes: ['courseId', 'teacherId', 'asId']
          },
          {
            model: Enroll,
            include: [
              {
                model: Student,
                include: [{ model: Person }]
              }
            ]
          }
        ]
      })

      res.status(200).json(enrollCourses)
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  }

  createEnrollCourses = async (req, res) => {
    try {
      const { studentId, courses } = req.body

      const studentEnroll = await Enroll.findOne({ where: { studentId, status: 'ACTIVE' } })
      if (studentEnroll) {
        return res.status(404).json({ message: 'Student has already enroll' })
      }
      const newEnroll = await Enroll.create({
        studentId
      })

      const enrollments = await Promise.all(
        courses.map(async (courseId) => {
          return await EnrollCourse.create({
            enrollID: newEnroll.enrollID,
            courseId,
            approved: false
          })
        })
      )

      res.status(201).json(enrollments)
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  }

  getEnrolledCoursesWithSchedule = async (req, res) => {
    try {
      const { studentId } = req.params

      const studentEnroll = await Enroll.findOne({
        where: { studentId, status: 'ACTIVE' }
      })

      if (!studentEnroll) {
        return res.status(404).json({ message: 'Student not found or inactive' })
      }

      const enrollments = await EnrollCourse.findAll({
        where: { enrollID: studentEnroll.enrollID },
        include: [
          {
            model: Course,
            include: [
              {
                model: CourseSchedule,
                attributes: ['day', 'startTime', 'endTime', 'room']
              }
            ]
          }
        ]
      })

      const response = enrollments.map(enrollment => ({
        courseId: enrollment.courseId,
        approved: enrollment.approved,
        schedules: enrollment.Course.CourseSchedules
      }))

      res.status(200).json(response)
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  }

  updateEnrollCourse = async (req, res) => {
    try {
      const { studentId, courseId } = req.params
      const { approved } = req.body

      const enrollCourse = await EnrollCourse.findOne({
        where: { studentId, courseId }
      })

      if (!enrollCourse) {
        return res.status(404).json({ message: 'EnrollCourse no encontrado' })
      }

      enrollCourse.approved = approved
      await enrollCourse.save()

      res.status(200).json(enrollCourse)
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  }

  deleteEnrollCourse = async (req, res) => {
    try {
      const { studentId, courseId } = req.params

      // Busca la inscripción activa del estudiante
      const studentEnroll = await Enroll.findOne({
        where: { studentId, status: 'ACTIVE' }
      })

      if (!studentEnroll) {
        return res.status(404).json({ message: 'Student not found or inactive' })
      }

      const enrollCourse = await EnrollCourse.findOne({
        where: { enrollID: studentEnroll.enrollID, courseId }
      })

      if (!enrollCourse) {
        return res.status(404).json({ message: 'EnrollCourse not found' })
      }

      await enrollCourse.destroy()
      res.status(204).send()
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  }
}
