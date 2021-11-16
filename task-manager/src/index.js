import path from 'path'
import { fileURLToPath } from 'url'
import express from 'express'
import './db/mongoose.js'
import userRouter from './routers/user.js'
import taskRouter from './routers/task.js'
import jwt from 'jsonwebtoken'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const app = express()
const port = process.env.PORT || 3000

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')

// Setup static directory to serve
app.use(express.json())
app.use(userRouter, taskRouter)

app.listen(port, () => {
  console.log('Server is up on port ' + port)
})

const myFunction = async () => {
  const token = jwt.sign({_id: 'abc123'}, 'thisisasecretshh!', { expiresIn: '24 hours'})
  console.log(token)

  const data = jwt.verify(token, 'thisisasecretshh!')
  console.log(data)
}

myFunction()