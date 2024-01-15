import express from 'express'
import {
  creatReview,
  deleteReview,
  getAllReviews
} from '../../controllers/reviewController.js'

const reviewRouter = express.Router()

reviewRouter.post('/review', creatReview)
reviewRouter.get('/review', getAllReviews)
reviewRouter.delete('/review/:id', deleteReview)

export default reviewRouter
