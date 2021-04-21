// http://api.weatherstack.com/current?access_key=81e5dffe097972a0bbce5e1f72abe8d1&query=sw11

import { geocode } from './utils/geocode.js'

geocode('Clove Hitch Quay', (error, data) => {
  console.log('Error', error)
  console.log('Data', data)
})

