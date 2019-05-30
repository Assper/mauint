import Cookies from 'universal-cookie'

export function getBasePath() {
  return window ? window.location.origin : 'http://localhost:5000'
}

export function isAuthorized() {
  const cookies = new Cookies()
  return !!cookies.get('token')
}

export function logout() {
  const cookies = new Cookies()
  cookies.remove('token')
}
