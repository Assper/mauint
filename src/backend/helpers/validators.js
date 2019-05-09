import validate from 'mongoose-validator'

export const userNameValidator = [
  validate({
    validator: (val) => !!val.trim(),
    message: 'NameShouldBeValid'
  }),
  validate({
    validator: 'isLength',
    arguments: [2, 20],
    message: 'NameLengthShouldBe[2-20]'
  }),
  validate({
    validator: 'matches',
    arguments: /^[\w]+$/i,
    message: 'NameShouldBeValid'
  })
]

export const uuidValidator = [
  validate({
    validator: 'isUUID',
    message: 'UuidShouldBeValid'
  })
]

export const emailValidator = [
  validate({
    validator: 'isEmail',
    message: 'EmailShouldBeValid'
  })
]

export const passwordValidator = [
  validate({
    validator: 'isLength',
    arguments: [8, 30],
    message: 'PasswordLengthShouldBe[8-30]'
  }),
  validate({
    validator: 'matches',
    arguments: /^[a-z0-9!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]+$/i,
    message: 'PasswordShouldBeValid'
  })
]

export const integerValidator = [
  validate({
    validator: 'isInt',
    message: 'ArgumentShouldBeInteger'
  })
]

export const passwordHashValidator = [
  validate({
    validator: 'isHash',
    arguments: 'sha512',
    message: 'HashShouldBeValid'
  })
]
