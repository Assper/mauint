/* eslint-env node, jest */

import { getStatus, getResponse } from '../../../src/backend/helpers/response'

describe('Response helper', () => {
  it('getStatus', () => {
    const codes = {
      errors: [500, 400, 406],
      notFound: [404]
    }

    let set = new Set(codes.errors.map((code) => getStatus(code)))
    let status = [...set]
    expect(status).toHaveLength(1)
    expect(status).toContain('ERROR')

    set = new Set(codes.notFound.map((code) => getStatus(code)))
    status = [...set]
    expect(status).toHaveLength(1)
    expect(status).toContain('NOT FOUND')

    const codesList = Object.keys(codes).reduce((acc, key) => acc.concat(codes[key]), [])
    for (let i = 0; i < 100; i++) {
      const code = Math.floor(Math.random() * 1000)
      status = getStatus(code)

      if (!codesList.includes(code)) {
        expect(status).toBe('OK')
      }
    }
  })

  it('getResponse', () => {
    let response = getResponse('')
    let expected = {
      status: 'ERROR',
      response: '',
      code: 500
    }
    expect(JSON.parse(response)).toEqual(expected)

    response = getResponse('Error')
    expected = {
      status: 'ERROR',
      response: 'Error',
      code: 500
    }
    expect(JSON.parse(response)).toEqual(expected)

    response = getResponse('Not Found', 404)
    expected = {
      status: 'NOT FOUND',
      response: 'Not Found',
      code: 404
    }
    expect(JSON.parse(response)).toEqual(expected)

    response = getResponse('OK', 200)
    expected = {
      status: 'OK',
      response: 'OK',
      code: 200
    }
    expect(JSON.parse(response)).toEqual(expected)
  })
})

