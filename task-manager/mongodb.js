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
    db.collection('tasks')
      .findOne({ _id: new ObjectId('615d9aee3f082507597e7259') })
      .then((task) => console.log(task))
      .catch((err) => console.log(err))

    db.collection('tasks')
      .find({ completed: false })
      .toArray()
      .then((tasks) => {
        if (tasks.length === 0) {
          console.log('All tasks are completed!')
        } else {
          console.log(tasks)
        }
      })
      .catch((err) => console.log(err))
  }
)
