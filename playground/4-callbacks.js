const doWorkCallback = (callback) => {
  setTimeout(() => {
    // callback(undefined, [1, 4, 7])
    callback('Something went wrong!')
  }, 2000)
}

doWorkCallback((error, result) => {
  if (error) {
    return console.log(error)
  }
  
  console.log(result)
})