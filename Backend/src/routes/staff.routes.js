import { Router } from 'express'
import { StaffController } from '../controllers/staff.model.js'

const staffController = new StaffController()
export const staffRouters = Router()

staffRouters.get('/api/staff', staffController.getAllStaff)
staffRouters.post('/api/staff', staffController.createStaff)
staffRouters.get('/api/staff/:id', staffController.getStaff)
staffRouters.put('/api/staff/:id', staffController.updateStaff)
staffRouters.delete('/api/Staff/:id', staffController.deleteStaff)
