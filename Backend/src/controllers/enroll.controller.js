import { Person } from '../models/person.model.js'
import { Student } from '../models/student.model.js'
import { Enroll } from '../models/enroll.model.js'
export class EnrollController {
  getAllEnrrols = async (req, res) => {
    try {
      console.log('enter to the ger')
      const enrolls = await Enroll.findAll({
        include: [{
          model: Student,
          include: [{ model: Person }]
        }]
      })
      res.status(200).json(enrolls)
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  }

  createEnroll = async (req, res) => {
    try {
      const { studentId } = req.body
      const enroll = await Enroll.findOne({ where: { studentId } })
      if (!enroll) {
        const newEnroll = await Enroll.create(req.body, {
          include: [{
            model: Student,
            include: [{ model: Person }]
          }]
        })
        return res.status(201).json(newEnroll)
      }
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  }

  getEnroll = async (req, res) => {
    try {
      const { studentId } = req.params
      const enroll = await Enroll.findByPk(studentId, {
        include: [{
          model: Student,
          include: [{ model: Person }]
        }]
      })
      if (enroll) {
        res.json(enroll)
      } else {
        res.status(404).json({ err: 'enroll not found' })
      }
      res.status(200).json(enroll)
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  }

  deleteEnroll = async (req, res) => {
    try {
      const { enrollId } = req.params
      await Enroll.destroy({
        where: {
          enrollId
        }
      })
      res.json({ msg: 'enroll deleted' })
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  }

  updateEnroll = async (req, res) => {
    try {
      const { enrollId } = req.params
      const enroll = await Enroll.findByPk(enrollId)
      enroll.set(req.body)
      await enroll.save()
      res.status(202).json(enroll)
    } catch (error) {
      return res.status(500).json({ mesaage: error.message })
    }
  }

  setAllEnrollsInactive = async (req, res) => {
    try {
      await Enroll.update({ status: 'INACTIVE' }, { where: {} })
      res.json({ msg: 'All enrollments set to INACTIVE' })
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  }

  getActiveEnrolls = async (req, res) => {
    try {
      const activeEnrolls = await Enroll.findAll({
        where: { status: 'ACTIVE' },
        include: [{
          model: Student,
          include: [{ model: Person }]
        }]
      })
      res.status(200).json(activeEnrolls)
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  }

  // Obtener todas las matriculas INACTIVAS
  getInactiveEnrolls = async (req, res) => {
    try {
      const inactiveEnrolls = await Enroll.findAll({
        where: { status: 'INACTIVE' },
        include: [{
          model: Student,
          include: [{ model: Person }]
        }]
      })
      res.status(200).json(inactiveEnrolls)
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  }
}
