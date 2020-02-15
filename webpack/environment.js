require('dotenv').config()
const { HOST, NODE_ENV } = process.env

const stringifiedEnv = Object.entries({
  NODE_ENV,
}).reduce((acc, [key, value]) => {
  acc[key] = JSON.stringify(value)
  return acc
}, {})

module.exports = {
  HOST,
  NODE_ENV,
  stringifiedEnv,
}
