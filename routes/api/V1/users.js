import express from 'express'
import { list as listUsers } from '../../../controllers/api/V1/userController.js'

const router = express.Router()

/* GET users listing. */
router.get('/', listUsers)

export default router
