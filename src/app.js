// Do your logic here
const loadTimeEl = document.querySelector('#loadingTime')
const goToHttp1El = document.querySelector('#goToHttp1')
const goToHttp2El = document.querySelector('#goToHttp2')
const initDate = Date.now()

goToHttp1El.addEventListener('click', () => {
  const href = window.location.href
  window.location.href = 'http' + href.substring(href.indexOf(':'))
})

goToHttp2El.addEventListener('click', () => {
  const href = window.location.href
  window.location.href = 'https' + href.substring(href.indexOf(':'))
})

window.addEventListener('load', () => {
  const milliseconds = Date.now() - initDate
  loadTimeEl.innerHTML = milliseconds / 1000 + 's'
})
