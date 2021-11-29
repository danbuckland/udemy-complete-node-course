import path from 'path'
import { fileURLToPath } from 'url'
import express from 'express'
import './db/mongoose.js'
import userRouter from './routers/user.js'
import taskRouter from './routers/task.js'
import Task from './models/task.js'
import User from './models/user.js'
import jwt from 'jsonwebtoken'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const app = express()
const port = process.env.PORT || 3000
const inMaintenance = false

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')

app.use((req, res, next) => {
  if (inMaintenance === true) {
    res.status(503).send('Ongoing maintenance')
  } else {
    next()
  }
})

// Setup static directory to serve
app.use(express.json())
app.use(userRouter, taskRouter)

app.listen(port, () => {
  console.log('Server is up on port ' + port)
})

const main = async () => {
  // const task = await Task.findById('61a0f7f1385b99d6305074c1')
  // await task.populate('owner')
  // console.log(task.owner)

  // const user = await User.findById('61a0f7e6385b99d6305074bb')
  // await user.populate('tasks')
  // console.log(user.tasks)
}

main()