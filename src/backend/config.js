import { config } from 'dotenv'
config()

export default {
  env: process.env.NODE_ENV || 'development',
  url: process.env.NODE_URL || 'http://127.0.0.1',
  port: process.env.NODE_PORT || 5000,
  sessionKey: '98ufUfdus8fs843HHfd',
  globalSalt: 'g0wd0ezwb8kfjiwl',
  db: {
    host: process.env.MONGO_SERVER || 'localhost',
    port: process.env.MONGO_PORT || 27017,
    name: process.env.DB_NAME || 'mauint',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || ''
  }
}
