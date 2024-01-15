import bcrypt from 'bcrypt'
import {
  generateAccessToken,
  generateRefreshToken
} from '../utils/generateTokens.js'
import User from '../models/user/user.js'

export const login = async (req, res) => {
  try {
    const { username, password } = req.body
    const user = await User.findOne({ username: username })
    if (!username || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: 'Invalid username or password' })
    }

    const accessToken = generateAccessToken(user)
    const refreshToken = generateRefreshToken(user)

    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      maxAge: 30 * 24 * 60 * 60 * 1000,
      secure: true,
      sameSite: 'None'
    })
    res.status(200).json({ message: 'Login successful', token: accessToken })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const register = async (req, res) => {
  try {
    const { username, password, email } = req.body
    const userExist = await User.findOne({ username: username, email: email })
    if (userExist) {
      return res.status(409).json({ message: 'User Already Exist' })
    }

    const hashPassword = await bcrypt.hash(password, 10)
    const newUser = new User({
      ...req.body,
      password: hashPassword
    })
    await newUser.save()

    const accessToken = generateAccessToken(newUser)
    const refreshToken = generateRefreshToken(newUser)

    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      maxAge: 30 * 24 * 60 * 60 * 1000,
      secure: true,
      sameSite: 'None'
    })
    console.log(refreshToken)
    res.json({ token: accessToken })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const refreshToken = async (req, res) => {
  try {
    const refreshToken = req.cookies.refreshToken
    if (!refreshToken)
      return res.status(401).json({ message: 'Refresh Token is MISSING' })
    const decoded = jwt.verify(refreshToken, process.env.REFRESH_KEY)

    const findUser = await User.findById(decoded.userId)
    if (!findUser) return res.status(404).json({ message: 'User Not Found' })

    const newToken = generateAccessToken(findUser)
    console.log('New', newToken)
    res.status(200).json({ token: newToken })
  } catch (error) {
    res.status(401).json({ message: error.message })
  }
}

export const logout = async (req, res) => {
  try {
    res.clearCookie('refreshToken')
    res.json({ message: 'Logout successful' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
