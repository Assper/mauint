import config from './config'
import { start } from './app'

start().then(async (app) => {
  const { url, port } = config
  await app.listen(port)
  console.log(`App running on: ${url}:${port}`)
})
