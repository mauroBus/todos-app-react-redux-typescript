const merge = require('webpack-merge')
const configDev = require('./config-dev')
const path = require('path')
const { HOST } = require('./environment')

module.exports = (env = {}) => {
  return merge(configDev, {
    devServer: {
      contentBase: path.join(__dirname, '/dist'),
      port: 3000,
      host: HOST || 'localhost',
      watchOptions: {
        ignored: ['node_modules'],
        aggregateTimeout: 300,
      },
    },
  })
}
