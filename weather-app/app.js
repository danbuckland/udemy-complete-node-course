import { geocode } from './utils/geocode.js'
import { forecast } from './utils/forecast.js'

const location = process.argv[2]

if (!location) {
  console.log('Please provide a signle location name wrapped in quotes')
} else {
  geocode(location, (error, geocodeData) => {
    if (error) {
      return console.log(error)
    }
    forecast(geocodeData.latitude, geocodeData.longitude, (error, forecastData) => {
      if (error) {
        return console.log(error)
      }
      console.log(geocodeData.location)
      console.log(forecastData)
    })
  })
}
