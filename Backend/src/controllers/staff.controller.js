import { Staff } from '../models/staff.model.js'
import { Person } from '../models/person.model.js'
import { Credential } from '../models/credential.model.js'
import { Credentialcontroller } from './credential.controller.js'
export class StaffController {
  getAllStaff = async (req, res) => {
    try {
      const staffs = await Staff.findAll({
        include: [{
          model: Person,
          include: [{ model: Credential }]
        }]
      })
      res.json(staffs)
    } catch (error) {
      console.error(error)
      res.status(500).json({ message: 'Error getting Administrative Staff' })
    }
  }

  createStaff = async (req, res) => {
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
        await Staff.create({ personId: doc })
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

      await client.save()
      res.status(202).json(client)
    } catch (error) {
      return res.status(500).json({ mesaage: error.message })
    }
  }
}
