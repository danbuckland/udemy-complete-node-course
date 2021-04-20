// http://api.weatherstack.com/current?access_key=81e5dffe097972a0bbce5e1f72abe8d1&query=sw11

import request from 'postman-request'

const url =
  'http://api.weatherstack.com/current?access_key=81e5dffe097972a0bbce5e1f72abe8d1&query=sw11'

// request({ url: url, json: true }, (error, response) => {
//   if (error) {
//     console.log('Unable to connect to weather service')
//   } else if (response.body.error) {
//     console.log('Something has gone wrong')
//   } else {
//     const current = response.body.current
//     console.log(`It's ${current.weather_descriptions[0].toLowerCase()} and ${current.temperature}°c outside. It feels like ${current.feelslike}°c.`)
//   }
// })

const mapboxToken =
  'pk.eyJ1IjoiZGFuYnVja2xhbmQiLCJhIjoiY2tuaXEwMmw5MjJtdDJxb2FhOWg2a20zNyJ9.WzxHqhVMBF3jLnkVjeoaMQ'
const location = 'battersea%20park'
const mapboxEndpoint = `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?access_token=${mapboxToken}&limit=1`

request({ url: mapboxEndpoint, json: true }, (error, response) => {
  if (error) {
    console.log('Unable to connect to mapping service')
  } else if (response.body.features.length === 0) {
    console.log('Unable to find location')
  } else {
    const latlong = response.body.features[0].center
    console.log(latlong)
  }
})
