// CRUD operations

import { MongoClient, ObjectId } from 'mongodb'

const connectionUrl = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(
  connectionUrl,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log('Unable to connect to database')
    }

    const db = client.db(databaseName)
    const userCollection = db.collection('users')
    const taskCollection = db.collection('tasks')

    const completeAllTasks = taskCollection.updateMany(
      {
        completed: false
      },
      {
        $set: {
          completed: true
        }
      }
    )

    taskCollection.deleteOne({
      description: 'Water the plant'
    }).then((result) => {
      console.log(result)
    }).catch((error) => {
      console.log(error)
    })

    // completeAllTasks.then((result) => {
    //   console.log(`Completed ${result.modifiedCount} tasks`)
    // }).catch((error) => {
    //   console.log('Something went wrong completing tasks')
    // })

    // userCollection.updateOne(
    //     { _id: new ObjectId('615ee9d87a6d2ffeae1982cb') },
    //     {
    //       $inc: {
    //         age: -1,
    //       },
    //     }
    //   )
    //   .then((result) => {
    //     console.log(result)
    //   })
    //   .catch((error) => {
    //     console.log(error)
    //   })
  }
)
