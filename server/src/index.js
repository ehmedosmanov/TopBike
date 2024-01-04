import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser'
const app = express()

dotenv.config()
app.use(express.json())
app.use(cookieParser())
app.use(
  cors({
    credentials: true,
    origin: 'http://localhost:5173'
  })
)

const port = process.env.PORT || 8000
const URL = process.env.CONNECTION_URL.replace(
  '<password>',
  process.env.PASSWORD
)

mongoose.connect(URL).catch(err => {
  console.log('ERROR TO CONNECT DATABASE', err)
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
