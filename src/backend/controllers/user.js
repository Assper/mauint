import Token from '../models/Token'
import User from '../models/User'
import { getResponse } from '../helpers/response'

export async function getUserData(ctx) {
  try {
    const { token } = ctx.cookies.get('token')
    const { user: userId } = await Token.findOne({ token })
      .select('user')
      .lean()

    const user = await User.findOne({ _id: userId })
      .select('uuid name email')
      .lean()

    if (!user) {
      ctx.throw(400, 'UserNotFound')
    }

    delete user._id
    user.token = token

    ctx.status = 200
    ctx.body = getResponse({ user }, ctx.status)
  } catch (err) {
    console.error('SIGNIN ERROR', err, ctx.status)
    ctx.app.emit('error', err, ctx)
  }
}
