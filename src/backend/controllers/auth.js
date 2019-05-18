import uuid from 'uuid/v4'

import User from '../models/User'
import Token from '../models/Token'

import { hashPassword, verifyPassword, generatePassword } from '../helpers/crypt'
import { getResponse } from '../helpers/response'
import { sendRestoreMail } from '../helpers/mail'

export async function login(ctx) {
  const {
    email,
    password
  } = ctx.request.body

  try {
    const user = await User.findOne({ email })
      .select('uuid name password salt email rememberToken')
      .lean()

    if (!user || !Object.keys(user).length) {
      ctx.throw(400, 'UserNotFound')
    }

    const isTruthPassword = await verifyPassword(password, user.password, user.salt)
    if (!isTruthPassword) {
      ctx.throw(401, 'InvalidPassword')
    }

    const token = uuid()
    let newToken = await Token.findOne({ user: user._id })

    if (!newToken) {
      newToken = new Token({
        uuid: token,
        user: user._id
      })
    } else {
      newToken.uuid = token
      newToken.updatedAt = Date.now()
    }

    await newToken.save()

    delete user.password
    delete user.salt
    delete user._id
    user.token = token

    ctx.status = 200
    ctx.body = getResponse({ user }, ctx.status)
  } catch (err) {
    console.error('SIGNIN ERROR', err, ctx.status)
    ctx.app.emit('error', err, ctx)
  }
}

export async function signup(ctx) {
  const {
    name,
    email,
    password,
    isRememberMe
  } = ctx.request.body

  try {
    const user = await User.findOne({ email })
    if (user) {
      ctx.throw(406, 'UserAlreadyExist')
    }

    const { hash, salt } = await hashPassword(password)
    const userData = { name, email, salt, password: hash }

    if (isRememberMe) {
      userData.rememberToken = uuid()
    }

    const newUser = new User(userData)
    await newUser.save()
    
    ctx.status = 201
    ctx.body = getResponse({ message: 'done' }, ctx.status)
  } catch (err) {
    console.error('SIGNUP ERROR', err, ctx.status)
    ctx.app.emit('error', err, ctx)
  }
}

export async function restore(ctx) {
  const { email } = ctx.request.body

  try {
    const user = await User.findOne({ email })

    if (!user || !Object.keys(user).length) {
      ctx.throw(400, 'UserNotFound')
    }

    const password = generatePassword()
    const { hash, salt } = await hashPassword(password)
    user.password = hash
    user.salt = salt

    await user.save()
    await sendRestoreMail(email, password)

    ctx.status = 201
    ctx.body = getResponse({ message: 'done' }, ctx.status)
  } catch (err) {
    console.error('FORGOT PASSWORD ERROR', err, err.status)
    ctx.app.emit('error', err, ctx)
  }
}
