import fs from 'fs'

const book = {
  title: '1984',
  author: 'George Orwell'
}

// const bookJson = JSON.stringify(book)
// fs.writeFileSync('1-json.json', bookJson)

const dataBuffer = fs.readFileSync('1-json.json')
const dataJson = dataBuffer.toString()
const data = JSON.parse(dataJson)

data.name = 'Dan'
data.age = 34

fs.writeFileSync('1-json.json', JSON.stringify(data))