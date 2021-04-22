import request from 'postman-request'

const url =
  'http://api.weatherstack.com/current?access_key=81e5dffe097972a0bbce5e1f72abe8d1&query='

export const forecast = (latitude, longitude, callback) => {
  request({ url: `${url}${latitude},${longitude}`, json: true }, (error, response) => {
    if (error) {
      callback('Unable to connect to weather service', undefined)
    } else if (response.body.error) {
      callback('Something has gone wrong', undefined)
    } else {
      const current = response.body.current
      callback(undefined, `It's ${current.weather_descriptions[0].toLowerCase()} and ${current.temperature}°c outside. It feels like ${current.feelslike}°c.`)
    }
  })
}