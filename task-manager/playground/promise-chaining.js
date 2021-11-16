import '../src/db/mongoose.js'
import User from '../src/models/user.js'

// User.findByIdAndUpdate('616592c663d565b5c7c5ebac', { age: 17 }).then(user => {
//   console.log(user)
//   return User.countDocuments({ age: 17 })
// }).then(result => {
//   console.log(result)
// }).catch(e => {
//   console.log(e)
// })

const updateAgeAndCount = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, { age })
  const count = await User.countDocuments({ age })
  return count
}

updateAgeAndCount('616592c663d565b5c7c5ebac', 2).then((count) => {
  console.log(count)
}).catch((e) => {
  console.log(e)
})