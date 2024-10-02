import { Teacher } from '../models/teacher.model.js'
import { Person } from '../models/person.model.js'
import { Credential } from '../models/credential.model.js'
import { Credentialcontroller } from './credential.controller.js'

export class TeacherController {
  getaAllTeachers = async (req, res) => {
    try {
      const teachers = await Teacher.findAll({
        include: [{
          model: Person,
          include: [{ model: Credential }]
        }]
      })
      res.json(teachers)
    } catch (error) {
      console.error(error)
      res.status(500).json({ message: 'Error getting teachers' })
    }
  }

  createTeacher = async (req, res) => {
    try {
      const { id, firstName, secondName, lastName1, lastName2, email, password } = req.body
      const doc = id
      const person = await Person.findByPk(doc)
      const cred = await Credential.findOne({ where: { email } })
      if (!person && !cred) {
        const newPerson = await Person.create({
          id: doc,
          firstName,
          secondName,
          lastName1,
          lastName2
        })
        const credentialcontroller = new Credentialcontroller()
        await credentialcontroller.createCredential({ personId: doc, email, password })
        await Teacher.create({ personId: doc })
        return res.status(201).json({ newPerson })
      }
      return res.status(400).json({ message: 'Account already exists' })
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  }

  getTeacher = async (req, res) => {
    try {
      const { id } = req.params
      const teacher = await Person.findByPk(id)
      if (teacher) {
        res.json(teacher)
      } else {
        res.status(404).json({ err: 'client not found' })
      }
    } catch (error) {
      return res.status(500).json({ mesaage: error.message })
    }
  }

  deleteTeacher = async (req, res) => {
    try {
      const { id } = req.params
      await Person.destroy({
        where: {
          id
        }
      })
      res.json({ msg: 'Teacher deleted' })
    } catch (error) {
      return res.status(500).json({ mesaage: error.message })
    }
  }

  updateTeacher = async (req, res) => {
    try {
      const { id } = req.params
      const client = await Person.findByPk(id)
      client.set(req.body)
      await client.save()
      res.status(202).json(client)
    } catch (error) {
      return res.status(500).json({ mesaage: error.message })
    }
  }
}
