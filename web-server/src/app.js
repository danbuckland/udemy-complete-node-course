import path from 'path'
import { fileURLToPath } from 'url'
import express from 'express'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const publicDirectoryPath = path.join(__dirname, '../public')

const app = express()

app.set('view engine', 'hbs')
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather App',
    name: 'Dan Buckland'
  })
})

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About me',
    name: 'Dan Buckland'
  })
})

app.get('/help', (req, res) => {
  res.render('help', {
    title: 'Help',
    message: 'How can I help you?'
  })
})

app.get('/weather', (req, res) => {
  res.send([{
    forecast: 'It\'s sunny, what about it?',
    location: 'London'
  }])
})

app.listen(3000, () => {
  console.log('Server is up on port 3000')
})