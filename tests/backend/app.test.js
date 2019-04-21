/* eslint-env node, jest */

import request from 'supertest'
import { destroyServer, databaseDisconnect } from './helpers'
import { start } from '../../src/backend/app'

describe('/', () => {
  let app = null
  let server = null

  beforeAll(async () => {
    app = await start()
    server = await app.listen()
  })

  afterAll(async (done) => {
    await databaseDisconnect()
    destroyServer(server)
    done()
  })

  it('OK', async () => {
    const response = await request(server).get('/')
    expect(response.status).toBe(200)
  })
})
