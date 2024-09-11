import { Staff } from '../models/staff.model.js'
import { Person } from '../models/person.model.js'

export class StaffController {
  getAllStaff = async (req, res) => {
    try {
      const staffs = await Staff.findAll({
        include: Person
      })
      res.json(staffs)
    } catch (error) {
      console.error(error)
      res.status(500).json({ message: 'Error getting Administrative Staff' })
    }
  }

  createStaff = async (req, res) => {
    try {
      const { id, firstName, secondName, lastName1, lastName2 } = req.body

      const person = await Person.findByPk(id)
      if (!person) {
        const newPerson = await Person.create({
          id,
          firstName,
          secondName,
          lastName1,
          lastName2
        })
        await Staff.create({ personId: id })
        return res.status(201).json({ newPerson })
      }
      return res.status(400).json({ message: 'Account already exists' })
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  }

  getStaff = async (req, res) => {
    try {
      const { id } = req.params
      const staff = await Person.findByPk(id)
      if (staff) {
        res.json(staff)
      } else {
        res.status(404).json({ err: 'Administrative staff  not found' })
      }
    } catch (error) {
      return res.status(500).json({ mesaage: error.message })
    }
  }

  deleteStaff = async (req, res) => {
    try {
      const { id } = req.params
      await Person.destroy({
        where: {
          id
        }
      })
      res.json({ msg: 'Staff deleted' })
    } catch (error) {
      return res.status(500).json({ mesaage: error.message })
    }
  }

  updateStaff = async (req, res) => {
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
