import express from 'express'
import usersRouter from '../routes/api/V1/users.js'
import messagesRouter from '../routes/api/V1/messages.js'

const router = express.Router()

router.use('/api/v1/users', usersRouter)
router.use('/api/v1/messages', messagesRouter)

export default router
