import { Review } from '../models/review/reviewModel.js'

export const creatReview = async (req, res) => {
  try {
    const { userId, productId } = req.body
    const newReview = new Review({
      ...req.body,
      user: userId,
      product: productId
    })
    await newReview.save()
    res.status(200).json(newReview)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const getAllReviews = async (req, res) => {
  try {
    const getAllReviews = await Review.find({}).populate('user product')
    res.status(200).json(getAllReviews)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const deleteReview = async (req, res) => {
  try {
    const deleteReview = await Review.findByIdAndDelete(req.params.id)
    if (!deleteReview) return res.status(404).json({ message: 'Not Found' })
    res.status(200).json(deleteReview)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
