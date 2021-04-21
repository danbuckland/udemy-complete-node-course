import request from 'postman-request'

const mapboxToken = 'pk.eyJ1IjoiZGFuYnVja2xhbmQiLCJhIjoiY2tuaXEwMmw5MjJtdDJxb2FhOWg2a20zNyJ9.WzxHqhVMBF3jLnkVjeoaMQ'

export const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=${mapboxToken}&limit=1`

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback('Unable to connect to location services', undefined)
    } else if (response.body.features.length === 0) {
      callback('Unable to find location', undefined)
    } else {
      callback(undefined, {
        longitude: response.body.features[0].center[0],
        latitude: response.body.features[0].center[1],
        name: response.body.features[0].place_name
      })
    }
  })
}