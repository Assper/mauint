/* eslint-env node, jest */

import crypto from 'crypto'
import {
  pbkdf2Async,
  hashPassword,
  verifyPassword,
  generatePassword
} from '../../../src/backend/helpers/crypt'

describe('Crypt helper', () => {
  it('pbkdf2Async', async () => {
    const length = 128
    const encoding = 'hex'

    let salt = 'salt'
    let password = '12345678'
    let rawHash = await pbkdf2Async(password, salt)
    let hash = rawHash.toString(encoding)
    expect(hash.length).toBe(length)

    salt = ''
    password = ''
    rawHash = await pbkdf2Async(password, salt)
    hash = rawHash.toString(encoding)
    expect(hash.length).toBe(length)

    for (let i = 0; i < 10; i++) {
      const passLen = Math.floor(Math.random() * 16)
      const saltLen = Math.floor(Math.random() * 16)
      password = generatePassword(passLen)
      salt = crypto.randomBytes(saltLen).toString(encoding)
      rawHash = await pbkdf2Async(password, salt)
      hash = rawHash.toString(encoding)
      expect(hash.length).toBe(length)
    }
  })

  it('hashPassword', async () => {
    const hashLength = 128
    const saltLength = 128

    let password = '12345678'
    let hash = await hashPassword(password)
    expect(hash.hash.length).toBe(hashLength)
    expect(hash.salt.length).toBe(saltLength)

    password = ''
    hash = await hashPassword(password)
    expect(hash.hash.length).toBe(hashLength)
    expect(hash.salt.length).toBe(saltLength)

    for (let i = 0; i < 10; i++) {
      const passLen = Math.floor(Math.random() * 16)
      password = generatePassword(passLen)
      hash = await hashPassword(password)
      expect(hash.hash.length).toBe(hashLength)
      expect(hash.salt.length).toBe(saltLength)
    }
  })

  it('verifyPassword', async () => {
    for (let i = 0; i < 10; i++) {
      const passLen = Math.floor(Math.random() * 16)
      const password = generatePassword(passLen)
      const { hash, salt } = await hashPassword(password)
      expect(verifyPassword(password, hash, salt)).toBeTruthy()
    }
  })

  it('generatePassword', () => {
    const re = /[^a-z0-9]/gi
    for (let i = 0; i < 100; i++) {
      const passLen = Math.floor(Math.random() * 15 + 1)
      const password = generatePassword(passLen)
      expect(password.length).toBe(passLen)
      expect(!re.test(password)).toBeTruthy()
    }
  })
})

