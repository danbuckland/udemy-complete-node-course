import { geocode } from './utils/geocode.js'
import { forecast } from './utils/forecast.js'

const location = process.argv[2]

if (!location) {
  console.log('Please provide a single location name wrapped in quotes')
} else {
  geocode(location, (error, { latitude, longitude, location } = {}) => {
    if (error) {
      return console.log(error)
    }
    forecast(latitude, longitude, (error, forecastData) => {
      if (error) {
        return console.log(error)
      }
      console.log(location)
      console.log(forecastData)
    })
  })
}
