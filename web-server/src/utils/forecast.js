import request from 'postman-request'


export const forecast = (latitude, longitude, callback) => {
  const url =
    'http://api.weatherstack.com/current?access_key=81e5dffe097972a0bbce5e1f72abe8d1&query=' +
    `${latitude},${longitude}`
  request({ url, json: true }, (error, { body } = {}) => {
    if (error) {
      callback('Unable to connect to weather service', undefined)
    } else if (body.error) {
      callback('Something has gone wrong', undefined)
    } else {
      const { temperature, weather_descriptions, feelslike } = body.current
      callback(undefined, `It's ${weather_descriptions[0].toLowerCase()} and ${temperature}°c outside. It feels like ${feelslike}°c.`)
    }
  })
}