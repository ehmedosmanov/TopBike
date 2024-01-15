import express from 'express'
import { getAllUsers } from '../../controllers/userController.js'

export const userRouter = express.Router()

userRouter.get('/user', getAllUsers)
