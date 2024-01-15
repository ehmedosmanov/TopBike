import express from 'express'
import {
  login,
  logout,
  refreshToken,
  register
} from '../../controllers/authController.js'

export const authRouter = express.Router()

authRouter.post('/auth/register', register)
authRouter.post('/auth/login', login)
authRouter.get('/auth/refresh', refreshToken)
authRouter.post('/auth/logout', logout)
