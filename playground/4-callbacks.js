setTimeout(() => {
  console.log('2 seconds are up')
}, 2000)

const names = ['Dan', 'Narges', 'Mike', 'Harvey']

const shortNames = names.filter((name) => name.length <= 4)

console.log(shortNames)

const geocode = (address, callback) => {
  setTimeout(() => {
    const data = {
      latitude: 0,
      longitude: 0,
    }
  
    callback(data)
  }, 2000)
}

geocode('London', (data) => {
  console.log(data)
})

const add = (a, b, callback) => {
  setTimeout(() => {
    const sum = a + b
    callback(sum)
  }, 2000)
}

add(1, 4, (sum) => {
  console.log(sum) // Should print: 5
})
