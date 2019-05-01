import path from 'path'

import Koa from 'koa'
import serve from 'koa-static'
import body from 'koa-body'
import session from 'koa-session2'
import passport from 'koa-passport'

import config from './config'
import { connect as dbConnect } from './helpers/dbConnector'
import { getResponse } from './helpers/response'
import { init as strategiesInit } from './helpers/strategies'
import { setApiContentType } from './helpers/middlewares'
import * as router from './routes'

const { sessionKey } = config
export const app = new Koa()

export async function start() {
  try {
    app.on('error', (err, ctx) => {
      console.error(err)
      ctx.status = err.status || 500
      ctx.body = getResponse({ message: err.message || 'IternalServerError' }, err.status)
    })

    strategiesInit()
    app.use(setApiContentType(app))
    app.use(body())

    app.use(session({ key: sessionKey }))
    app.use(passport.initialize())
    app.use(passport.session())

    app.use(serve(path.join(__dirname, '/../../dist/public')))
    app.use(router.auth.routes())
    app.use(router.app.routes())
    
    await dbConnect(config.db, { useNewUrlParser: true, useCreateIndex: true })
    return app
  } catch (err) {
    console.error('App running error: ', err)
    process.exit(1)
  }
}
