import { Router } from 'express'
import { EnrollController } from '../controllers/enroll.controller.js'

const enrollController = new EnrollController()
export const enrollRouters = Router()

enrollRouters.get('/api/enroll', enrollController.getAllEnrrols)
enrollRouters.post('/api/enroll', enrollController.createEnroll)

enrollRouters.get('/api/enroll/:enrollId', enrollController.getEnroll)
enrollRouters.get('/api/enroll/active', enrollController.getActiveEnrolls)
enrollRouters.get('/api/enroll/inactive', enrollController.getInactiveEnrolls)

enrollRouters.put('/api/enroll/:enrollId', enrollController.updateEnroll)
enrollRouters.put('/api/enroll/inactive', enrollController.setAllEnrollsInactive)

enrollRouters.delete('/api/enroll/:enrollId', enrollController.deleteEnroll)
