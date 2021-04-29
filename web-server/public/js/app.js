// Client-side JavaScript which is different from Node
const weatherForm = document.querySelector('form')
const searchEl = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

const fetchWeather = (location) => {
  messageOne.textContent = 'fetching results...'
  messageTwo.textContent = ''
  fetch(`/weather?address=${location}`).then((response) => {
  response.json().then((data) => {
    if (data.error) {
      messageOne.textContent = data.error
      messageTwo.textContent = ''
    } else {
      messageOne.textContent = data.location
      messageTwo.textContent = data.forecast
    }
    })
  })
}


weatherForm.addEventListener('submit', (e) => {
  e.preventDefault()
  fetchWeather(searchEl.value)
})