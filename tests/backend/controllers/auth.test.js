/* eslint-env node, jest */

import request from 'supertest'
import { destroyServer, databaseDisconnect, deleteTestUsers } from '../utils'
import { start } from '../../../src/backend/app'

describe('/', () => {
  const email = 'test@testmail.com'
  const name = 'test'
  const password = 'testpassword'
  const baseRoute = '/api/auth'

  let app = null
  let server = null

  beforeAll(async () => {
    app = await start()
    server = await app.listen()
  })

  afterAll(async (done) => {
    await deleteTestUsers()
    await databaseDisconnect()
    destroyServer(server)
    done()
  })

  it('Signup', async () => {
    let response = await request(server)
      .post(`${baseRoute}/signup`)
      .send({})
      .set('Accept', 'application/json')
    
    let expected = {
      status: 'ERROR',
      response: { message: 'emailIsRequired' },
      code: 400
    }
    expect(response.status).toBe(400)
    expect(response.body).toEqual(expected)

    response = await request(server)
      .post(`${baseRoute}/signup`)
      .send({ email: 'wrongmailaddress', name, password })
      .set('Accept', 'application/json')
    
    expected = {
      status: 'ERROR',
      response: { message: 'EmailShouldBeValid' },
      code: 400
    }
    expect(response.status).toBe(400)
    expect(response.body).toEqual(expected)

    response = await request(server)
      .post(`${baseRoute}/signup`)
      .send({ email, name, password })
      .set('Accept', 'application/json')
    
    expected = {
      status: 'OK',
      response: { message: 'done' },
      code: 201
    }
    expect(response.status).toBe(201)
    expect(response.body).toEqual(expected)
  })

  it('Login', async () => {
    let response = await request(server)
      .post(`${baseRoute}/login`)
      .send({})
      .set('Accept', 'application/json')
    
    let expected = {
      status: 'ERROR',
      response: { message: 'emailIsRequired' },
      code: 400
    }
    expect(response.status).toBe(400)
    expect(response.body).toEqual(expected)

    response = await request(server)
      .post(`${baseRoute}/login`)
      .send({ email: 'wrongmailaddress', password })
      .set('Accept', 'application/json')
    
    expected = {
      status: 'ERROR',
      response: { message: 'EmailShouldBeValid' },
      code: 400
    }
    expect(response.status).toBe(400)
    expect(response.body).toEqual(expected)

    response = await request(server)
      .post(`${baseRoute}/login`)
      .send({ email, password })
      .set('Accept', 'application/json')

    expect(response.status).toBe(200)
    expect(response.body).toBeDefined()
    expect(response.body.response).toHaveProperty('user')
  })

  it('Restore', async () => {
    let response = await request(server)
      .post(`${baseRoute}/restore`)
      .send({ email })
      .set('Accept', 'application/json')
    
    let expected = {
      status: 'OK',
      response: { message: 'done' },
      code: 201
    }
    expect(response.status).toBe(201)
    expect(response.body).toEqual(expected)

    response = await request(server)
      .post(`${baseRoute}/login`)
      .send({ email, password })
      .set('Accept', 'application/json')
    
    expected = {
      status: 'ERROR',
      response: { message: 'InvalidPassword' },
      code: 401
    }
    expect(response.status).toBe(401)
    expect(response.body).toEqual(expected)
  })
})

