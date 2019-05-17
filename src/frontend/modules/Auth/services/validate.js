import validator from 'validator'

export const errorMessages = {
  invalidEmail: 'Email should be valid',
  passwordTypeMismatched: 'Password should be a string',
  passwordInvalidLength: 'Password length should be 8-30',
  invalidPassword: 'Password have invalid characters'
}

export function validatePassword(password) {
  const pattern = /^[a-z0-9!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]+$/i

  if (typeof password !== 'string') {
    return errorMessages.passwordTypeMismatched
  }

  if (password.length < 8 || password.length > 30) {
    return errorMessages.passwordInvalidLength
  }

  if (!pattern.test(password)) {
    return errorMessages.invalidPassword
  }

  return ''
}

export function validateEmail(email) {
  return !email || !validator.isEmail(email) ? errorMessages.invalidEmail : ''
}

export function validateLogin({ email, password }) {
  return {
    email: validateEmail(email),
    password: validatePassword(password)
  }
}
