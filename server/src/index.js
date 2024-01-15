import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser'
import navbarRouter from './router/Navbar/navbarRouter.js'
import { categoryRouter } from './router/Category/categoryRouter.js'
import { authRouter } from './router/Auth/auth.router.js'
import { userRouter } from './router/User/user.router.js'
import productRouter from './router/Product/product.router.js'
import reviewRouter from './router/Review/review.router.js'
import cloudinary from './utils/cloudinary.js'
import discountRouter from './router/Discount/discount.router.js'
const app = express()

dotenv.config()
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
})
app.use(express.json())
app.use(cookieParser())
app.use(
  cors({
    credentials: true,
    origin: 'http://localhost:5173'
  })
)

console.log('Cloudinary Config:', cloudinary.config())
console.log('Cloudinary API Key:', process.env.CLOUDINARY_API_KEY)

app.use(
  '/src/uploads',
  express.static(
    `https://res.cloudinary.com/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload/`
  )
)

app.use('/api', navbarRouter)
app.use('/api', categoryRouter)
app.use('/api', authRouter)
app.use('/api', userRouter)
app.use('/api', productRouter)
app.use('/api', reviewRouter)
app.use('/api', discountRouter)

const port = process.env.PORT || 8000
const URL = process.env.CONNECTION_URL.replace(
  '<password>',
  process.env.PASSWORD
)

mongoose
  .connect(URL)
  .then(console.log('Conntect to db'))
  .catch(err => {
    console.log('ERROR TO CONNECT DATABASE', err)
  })

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
