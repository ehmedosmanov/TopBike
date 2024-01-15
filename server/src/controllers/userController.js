import User from '../models/user/user.js'

export const getAllUsers = async (req, res) => {
  try {
    const findUsers = await User.find({})
    res.status(200).json(findUsers)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
