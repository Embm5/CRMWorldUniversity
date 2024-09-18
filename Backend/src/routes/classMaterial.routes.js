import { Router } from 'express'
import { ClassMaterialController } from '../controllers/classMaterial.controller.js'
const classMaterialController = new ClassMaterialController()
export const classMaterialRouters = Router()

classMaterialRouters.get('/api/classMaterial', classMaterialController.getAllCm)
classMaterialRouters.post('/api/classMaterial', classMaterialController.createCm)
classMaterialRouters.get('/api/classMaterial/:cmId', classMaterialController.getCm)
classMaterialRouters.put('/api/classMaterial/:cmId', classMaterialController.updateCm)
classMaterialRouters.delete('/api/classMaterial/:cmId', classMaterialController.deleteCm)
