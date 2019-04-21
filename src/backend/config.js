import { config } from 'dotenv'
config()

export default {
  env: process.env.NODE_ENV || 'development',
  url: process.env.NODE_URL || 'http://127.0.0.1',
  port: process.env.NODE_PORT || 5000,
  sessionKey: process.env.SESSION_KEY || '',
  globalSalt: process.env.SALT || '',
  db: {
    host: process.env.MONGO_SERVER || 'localhost',
    port: process.env.MONGO_PORT || 27017,
    name: process.env.DB_NAME || 'mauint',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || ''
  },
  mail: {
    service: process.env.MAIL_SERVICE || 'gmail',
    auth: {
      user: process.env.MAIL_USER || '',
      pass: process.env.MAIL_PASSWORD || ''
    }
  }
}
