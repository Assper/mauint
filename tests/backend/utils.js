import mongoose from 'mongoose'
import enableDestroy from 'server-destroy'
import config from '../../src/backend/config'
import Token from '../../src/backend/models/Token'
import User from '../../src/backend/models/User'

export async function databaseDisconnect() {
  if (mongoose.connection.db) {
    await mongoose.connection.close()
  }
}

export async function databaseConnect() {
  const { name, host, port } = config
  await databaseDisconnect()
  mongoose.Promise = global.Promise
  await mongoose.connect(`mongodb://${host}:${port}/${name}`, { useNewUrlParser: true })
}

export async function databaseCleanup() {
  await Token.remove()
  await User.remove()
}

export function testAsync(fn) {
  return async () => {
    try {
      await fn()
    } catch (err) {
      throw `TEST ASYNC ERROR: ${err}`
    }
  }
}

export function destroyServer(server) {
  enableDestroy(server)
  server.destroy()
}

export async function deleteTestUsers(pattern = /@testmail/) {
  const users = await User.find({ email: pattern }).lean()
  await Token.deleteMany({ user: { $in: users.map((user) => user._id) } })
  await User.deleteMany({ email: pattern })
}
