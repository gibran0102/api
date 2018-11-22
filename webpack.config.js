const server = require('./webpack/webpack.config.server')
const client = require('./webpack/webpack.config.client')

module.exports = [
    server,
    client
]