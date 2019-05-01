import mongoose from 'mongoose'

export async function connect(config, options = {}) {
  try {
    mongoose.Promise = global.Promise
    const { name, host, port } = config
    await mongoose.connect(`mongodb://${host}:${port}/${name}`, options)
  } catch (err) {
    throw `Database Connection Error: ${err}`
  }
}
