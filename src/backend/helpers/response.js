export function getStatus(code) {
  switch (code) {
    case 500:
    case 400:
    case 406:
      return 'ERROR'
    case 404:
      return 'NOT FOUND'
    default:
      return 'OK'
  }
}

export function getResponse(response, code = 500) {
  const status = getStatus(code)
  return JSON.stringify({ status, response, code })
}
