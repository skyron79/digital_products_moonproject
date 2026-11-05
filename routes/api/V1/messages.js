import express from 'express'
import { list, create, remove, update } from '../../../controllers/api/V1/messagesController.js'


const router = express.Router()

/* GET home page. */
router.get('/', list)
router.post('/', create)
router.delete('/:id', remove)
router.put('/:id', update)



export default router
