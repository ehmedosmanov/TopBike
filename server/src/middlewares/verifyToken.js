import jwt from 'jsonwebtoken'

export const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1]
    const decodeToken = jwt.verify(token, process.env.ACCESS_KEY)
    res.user = decodeToken
    next()
  } catch (error) {
    res.status(401).json({ message: error.message })
  }
}

export const verifyRoles = (roles, req, res, next) => {
  try {
    const userRole = res.user.roles
    if (roles.includes(userRole)) {
      next()
    } else {
      res.status(403).json({ message: 'Forbidden' })
    }
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
