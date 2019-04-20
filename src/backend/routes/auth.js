import Router from 'koa-router'

export const auth = new Router({ prefix: '/api/auth' })

auth.post('/signup', () => 'hello')
