import Token from '../models/Token'

export function setApiContentType(app) {
  return async (ctx, next) => {
    const isApi = ctx.url.split('/').includes('api')
    app.context.isApi = isApi
    if (isApi) {
      ctx.set('Content-Type', 'application/json')
    }
    return next()
  }
}

export function validator(validations) {
  return async (ctx, next) => {
    try {
      Object.keys(validations).forEach((key) => {
        if (ctx.request.body.hasOwnProperty(key)) {
          validations[key].forEach((validatorStep) => {
            let validationResult = false

            try {
              validationResult = validatorStep.validator(ctx.request.body[key])
            } catch (err) {
              ctx.throw(400, err)
            }

            if (!validationResult) {
              ctx.throw(400, validatorStep.message)
            }

            return true
          })
        }
      })
      return next()
    } catch (err) {
      console.error('VALIDATOR ERROR', err)
      ctx.app.emit('error', err, ctx)
    }
  }
}

export function required(fields) {
  return async (ctx, next) => {
    try {
      fields.forEach((field) => {
        if (!ctx.request.body.hasOwnProperty(field)) {
          ctx.throw(400, `${field}IsRequired`)
        }
      })
      return next()
    } catch (err) {
      console.error('REQUIRED ERROR', err)
      ctx.app.emit('error', err, ctx)
    }
  }
}

export async function authGuard(ctx, next) {
  try {
    const userToken = ctx.cookies.get('token')
    const token = await Token.findOne({ uuid: userToken })

    if (!token) {
      ctx.throw(401, 'Unauthorized')
    }

    return next()
  } catch (err) {
    console.error('AUTH GUARD ERROR', err)
    ctx.app.emit('error', err, ctx)
  }
}
