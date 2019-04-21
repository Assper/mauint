import crypto from 'crypto'
import config from '../config'

const passwordLength = 64
const saltLength = 64
const iterations = 10000
const digest = 'sha512'
const encoding = 'hex'
const { globalSalt } = config

async function pbkdf2Async(password, salt) {
  return new Promise((resolve, reject) => {
    crypto.pbkdf2(password, salt, iterations, passwordLength, digest, (err, hash) => {
      return err ? reject(hash) : resolve(hash)
    })
  })
}

export async function hashPassword(password) {
  const salt = crypto.randomBytes(saltLength).toString(encoding)
  const rawHash = await pbkdf2Async(password + globalSalt, salt)
  const hash = rawHash.toString(encoding)
  return { hash, salt }
}

export async function verifyPassword(password, hash, salt) {
  const passwordHash = await pbkdf2Async(password + globalSalt, salt)
  return hash === passwordHash.toString(encoding)
}

export function generatePassword(length = 10) {
  const ranges = [[48, 57], [65, 90], [97, 122]]
  const bytes = [...new Array(length)].map(() => {
    const [min, max] = ranges[Math.floor(Math.random() * 3)]
    return Math.floor(Math.random() * (max - min) + min)
  })
  return String.fromCharCode(...bytes)
}
