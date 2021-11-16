import '../src/db/mongoose.js'
import Task from '../src/models/task.js'

// Task.findByIdAndDelete('616d94fd16fdcc00051b56e7').then(task => {
//   console.log(task)
//   return Task.countDocuments({ completed: false })
// }).then(result => {
//   console.log(result)
// }).catch(e => {
//   console.log(e)
// })

const deleteTaskAndCount = async (id) => {
  const task = await Task.findByIdAndDelete(id)
  const count = await Task.countDocuments({ completed: false })
  return count
}

deleteTaskAndCount('616d950516fdcc00051b56e9').then((result) => {
  console.log(result)
}).catch((e) => {
  console.log(e)
})