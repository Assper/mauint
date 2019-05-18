import validator from 'validator'

export const errorMessages = {
  invalidEmail: 'Email should be valid',
  passwordTypeMismatched: 'Password should be a string',
  passwordInvalidLength: 'Password length should be 8-30',
  invalidPassword: 'Password have invalid characters',
  invalidRepassword: 'Passwords should be the same',
  invalidName: 'Name should contain alphanumeric only',
  invalidNameLength: 'Name length should be 3-32'
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

export function validateName(name) {
  if (name && (name.length < 2 || name.length > 20)) {
    return errorMessages.invalidNameLength
  }

  return !name || !validator.isAlphanumeric(name) ? errorMessages.invalidName : ''
}

export function validateRepassword(password, repassword) {
  return password !== repassword ? errorMessages.invalidRepassword : ''
}

export function validateLogin({ email, password }) {
  return {
    email: validateEmail(email),
    password: validatePassword(password)
  }
}

export function validateSignup({ email, name, password, repassword }) {
  return {
    email: validateEmail(email),
    name: validateName(name),
    password: validatePassword(password),
    repassword: validateRepassword(password, repassword)
  }
}
