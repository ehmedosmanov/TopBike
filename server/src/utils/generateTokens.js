import jwt from 'jsonwebtoken'

export const generateAccessToken = user => {
  return jwt.sign(
    {
      userId: user._id,
      username: user.username,
      email: user.email,
      isVerify: user.isVerify,
      role: user.role,
      basket: user?.basket,
      wishlist: user?.wishlist
    },
    process.env.ACCESS_KEY,
    { expiresIn: '2h' }
  )
}

export const generateRefreshToken = user => {
  return jwt.sign(
    {
      userId: user._id,
      username: user.username,
      email: user.email,
      isVerify: user.isVerify,
      role: user.role
    },
    process.env.REFRESH_KEY,
    { expiresIn: '30d' }
  )
}
