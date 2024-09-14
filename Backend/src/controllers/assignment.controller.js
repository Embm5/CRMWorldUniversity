import { Assignment } from '../models/assignment.model.js'

export class AssignmentController {
  getAllAssignment = async (req, res) => {
    try {
      const assignments = await Assignment.findAll({})
      res.json(assignments)
    } catch (error) {
      console.error(error)
      res.status(500).json({ message: 'Error getting Assignment' })
    }
  }

  createAssignment = async (req, res) => {
    try {
      const { asId, name } = req.body
      const assignment = await Assignment.findByPk(asId)
      if (!assignment) {
        const newAssignment = await Assignment.create({
          asId,
          name
        })

        return res.status(201).json({ newAssignment })
      }
      return res.status(400).json({ message: 'Account already exists' })
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  }

  getAssignment = async (req, res) => {
    try {
      const { asId } = req.params
      const assignment = await Assignment.findByPk(asId)
      if (assignment) {
        res.json(assignment)
      } else {
        res.status(404).json({ err: 'subject not found' })
      }
    } catch (error) {
      return res.status(500).json({ mesaage: error.message })
    }
  }

  deleteAssignment = async (req, res) => {
    try {
      const { asId } = req.params
      await Assignment.destroy({
        where: {
          asId
        }
      })
      res.json({ msg: 'Subject deleted' })
    } catch (error) {
      return res.status(500).json({ mesaage: error.message })
    }
  }

  updateAssignment = async (req, res) => {
    try {
      const { asId } = req.params
      const assignment = await Assignment.findByPk(asId)
      assignment.set(req.body)
      await assignment.save()
      res.status(202).json(assignment)
    } catch (error) {
      return res.status(500).json({ mesaage: error.message })
    }
  }
}
