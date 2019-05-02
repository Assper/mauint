import Router from 'koa-router'
import { login, signup, restore } from '../controllers/auth'
import { validator, required } from '../helpers/middlewares'
import {
  userNameValidator,
  emailValidator,
  passwordValidator
} from '../helpers/validators'

export const auth = new Router({ prefix: '/api/auth' })

auth.post('/login',
  required(['email', 'password']),
  validator({
    email: emailValidator,
    password: passwordValidator
  }),
  login
)

auth.post('/signup',
  required(['email', 'name', 'password']),
  validator({
    name: userNameValidator,
    email: emailValidator,
    password: passwordValidator
  }),
  signup
)

auth.post('/restore',
  required(['email']),
  validator({
    email: emailValidator
  }),
  restore
)
