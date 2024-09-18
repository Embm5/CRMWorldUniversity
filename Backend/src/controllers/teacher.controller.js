import { Teacher } from '../models/teacher.model.js'
import { Person } from '../models/person.model.js'

export class TeacherController {
  getaAllTeachers = async (req, res) => {
    try {
      const teachers = await Teacher.findAll({
        include: Person
      })
      res.json(teachers)
    } catch (error) {
      console.error(error)
      res.status(500).json({ message: 'Error getting teachers' })
    }
  }

  createTeacher = async (req, res) => {
    try {
      const { id, firstName, secondName, lastName1, lastName2 } = req.body
      const doc = id
      const person = await Person.findByPk(doc)
      if (!person) {
        const newPerson = await Person.create({
          id: doc,
          firstName,
          secondName,
          lastName1,
          lastName2
        })
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

      //   const { email } = req.body
      //   const cred = await Credential.findByPk(id)
      //   if (cred.email.toLowerCase() !== email.toLowerCase()) {
      //     const oldCred = await Credential.findOne({
      //       where: {
      //         email: { [Op.iLike]: email }
      //       }
      //     })
      //     if (oldCred) {
      //       return res.status(400).json({ message: 'Email is already in use' })
      //     }
      //   }
      //   cred.email = email
      await client.save()
      //   await cred.save()
      res.status(202).json(client)
    } catch (error) {
      return res.status(500).json({ mesaage: error.message })
    }
  }
}
