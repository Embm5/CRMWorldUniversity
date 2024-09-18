import { Assignment } from '../models/assignment.model.js'
import { ClassMaterial } from '../models/classMaterial.model.js'
import { Course } from '../models/course.model.js'

export class ClassMaterialController {
  getAllCm = async (req, res) => {
    try {
      const classMaterial = await ClassMaterial.findAll({
        include: [{
          model: Course,
          include: [{ model: Assignment }]
        }]
      })
      res.status(200).json(classMaterial)
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  }

  createCm = async (req, res) => {
    try {
      const { cmId, courseId, tittle, description } = req.body
      const classMaterial = await ClassMaterial.findOne({ where: { cmId, courseId, tittle, description } })
      if (!classMaterial) {
        const newClassMaterial = await ClassMaterial.create(req.body, {
          include: [{
            model: Course,
            include: [{ model: Assignment }]
          }]
        })
        return res.status(201).json(newClassMaterial)
      }
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  }

  getCm = async (req, res) => {
    try {
      const { cmId } = req.params
      const classMaterial = await ClassMaterial.findByPk(cmId, {
        include: [{
          model: Course,
          include: [{ model: Assignment }]
        }]
      })
      if (classMaterial) {
        res.json(classMaterial)
      } else {
        res.status(404).json({ err: 'Class Material not found' })
      }
      res.status(200).json(classMaterial)
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  }

  deleteCm = async (req, res) => {
    try {
      const { cmId } = req.params
      await ClassMaterial.destroy({
        where: {
          cmId
        }
      })
      res.json({ msg: 'ClassMaterial  deleted' })
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  }

  updateCm = async (req, res) => {
    try {
      const { cmId } = req.params
      const classMaterial = await Course.findByPk(cmId)
      classMaterial.set(req.body)
      await classMaterial.save()
      res.status(202).json(classMaterial)
    } catch (error) {
      return res.status(500).json({ mesaage: error.message })
    }
  }
}
