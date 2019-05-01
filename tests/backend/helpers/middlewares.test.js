/* eslint-env node, jest */

import request from 'supertest'
import Koa from 'koa'
import Router from 'koa-router'
import body from 'koa-body'
import { destroyServer } from '../utils'
import { setApiContentType, required, validator } from '../../../src/backend/helpers/middlewares'
import { userNameValidator, emailValidator } from '../../../src/backend/helpers/validators'

describe('/', () => {
  let app = null
  let router = null
  let server = null

  beforeEach(async () => {
    app = new Koa()
    router = new Router()
  })

  afterEach(async () => {
    destroyServer(server)
  })

  it('setApiContentType', async () => {
    router.get('/', async (ctx) => {
      const { header } = ctx.response
      expect(app.context.isApi).toBeFalsy()
      expect(header['content-type']).not.toBe('application/json')
    })

    router.get('/api/test', async (ctx) => {
      const { header } = ctx.response
      expect(app.context.isApi).toBeTruthy()
      expect(header['content-type']).toBe('application/json')
    })

    app.use(setApiContentType(app))
    app.use(router.routes())
    server = await app.listen()

    await request(server).get('/api/test')
    await request(server).get('/')
  })

  it('required', async () => {
    const params = ['name', 'email']

    router.post('/',
      required(params),
      async (ctx) => {
        ctx.status = 200
        expect(ctx.status).toBe(200)
      }
    )

    app.on('error', (err, ctx) => {
      ctx.status = err.status || 500
    })

    app.use(body())
    app.use(router.routes())
    server = await app.listen()

    let response = await request(server)
      .post('/')
      .send({})
      .set('Accept', 'application/json')
    expect(response.status).toBe(400)

    response = await request(server)
      .post('/')
      .send({ name: 'test', email: 'test@mail.com' })
      .set('Accept', 'application/json')
    expect(response.status).toBe(200)
  })

  it('validator', async () => {
    const params = {
      name: userNameValidator,
      email: emailValidator
    }

    router.post('/',
      validator(params),
      async (ctx) => {
        ctx.status = 200
        expect(ctx.status).toBe(200)
      }
    )

    app.on('error', (err, ctx) => {
      ctx.status = err.status || 500
    })

    app.use(body())
    app.use(router.routes())
    server = await app.listen()

    let response = await request(server)
      .post('/')
      .send({ name: 'test', email: 'wrongemailaddres' })
      .set('Accept', 'application/json')
    expect(response.status).toBe(400)

    response = await request(server)
      .post('/')
      .send({ name: 'test', email: 'test@mail.com' })
      .set('Accept', 'application/json')
    expect(response.status).toBe(200)
  })
})
