import Router from 'koa-router'
import template from '../template'

export const app = new Router()

app.get('*', (ctx) => {
  ctx.body = template
})
