import Router from 'koa-router'
import template from '../template'
import { authGuard } from '../helpers/middlewares'
import { getUserData } from '../controllers/user'

export const app = new Router()

app.get('/api/user',
  authGuard,
  getUserData
)

app.get('*', (ctx) => {
  ctx.body = template
})
