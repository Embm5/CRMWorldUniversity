import { Person } from '../models/person.model.js'
import { Teacher } from '../models/teacher.model.js'
import { Assignment } from '../models/assignment.model.js'
import { Course } from '../models/course.model.js'
import { Op } from 'sequelize'

export class CourseController {
  getAllCourses = async (req, res) => {
    try {
      const courses = await Course.findAll({
        include: [{
          model: Teacher,
          include: [{ model: Person }]
        }, { model: Assignment }]
      })
      res.status(200).json(courses)
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  }

  createCourse = async (req, res) => {
    try {
      const { courseId, teacherId, asId } = req.body
      const course = await Course.findOne({ where: { courseId, teacherId, asId } })
      if (!course) {
        const newCourse = await Course.create(req.body, {
          include: [{
            model: Teacher,
            include: [{ model: Person }]
          }, { model: Assignment }]
        })
        return res.status(201).json(newCourse)
      }
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  }

  getCourse = async (req, res) => {
    try {
      const { courseId } = req.params
      const course = await Course.findByPk(courseId, {
        include: [{
          model: Teacher,
          include: [{ model: Person }]
        }, { model: Assignment }]
      })
      if (course) {
        res.json(course)
      } else {
        res.status(404).json({ err: 'Course not found' })
      }
      res.status(200).json(course)
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  }

  getCoursesBySemester = async (req, res) => {
    try {
      const { semester } = req.params

      const courses = await Course.findAll({
        include: [{
          model: Teacher,
          include: [{ model: Person }]
        }, {
          model: Assignment,
          where: {
            semester: {
              [Op.eq]: semester
            }
          }
        }]
      })
      if (courses.length > 0) {
        res.status(200).json(courses)
      } else {
        res.status(404).json({ message: 'No courses found for this semester' })
      }
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  }

  deleteCourse = async (req, res) => {
    try {
      const { courseId } = req.params
      await Course.destroy({
        where: {
          courseId
        }
      })
      res.json({ msg: 'Category deleted' })
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  }

  updateCourse = async (req, res) => {
    try {
      const { courseId } = req.params
      const course = await Course.findByPk(courseId)
      course.set(req.body)
      await course.save()
      res.status(202).json(course)
    } catch (error) {
      return res.status(500).json({ mesaage: error.message })
    }
  }
}
