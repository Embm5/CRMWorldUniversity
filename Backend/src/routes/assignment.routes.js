import { Router } from 'express'
import { AssignmentController } from '../controllers/assignment.model.js'

const assignmentController = new AssignmentController()
export const assignmentRouters = Router()

assignmentRouters.get('/api/assignment', assignmentController.getAllAssignment)
assignmentRouters.post('/api/assignment', assignmentController.createAssignment)
assignmentRouters.get('/api/assignment/:asId', assignmentController.getAssignment)
assignmentRouters.put('/api/assignment/:asId', assignmentController.updateAssignment)
assignmentRouters.delete('/api/assignment/:asId', assignmentController.deleteAssignment)
