module.exports = function () {
  const gritty = require('gritty')
  const server = require('http').createServer(this.nuxt.renderer.app)
  const socket = require('socket.io').listen(server)

  this.nuxt.renderer.app.use(gritty())
  gritty.listen(socket)

  // overwrite nuxt.listen()
  this.nuxt.listen = (port, host) => new Promise((resolve) => server.listen(port || 3000, host || 'localhost', resolve))
  // close this server on 'close' event
  this.nuxt.plugin('close', () => new Promise((resolve) => server.close(resolve)))

  // Add `socket.io-client` in vendor
  this.addVendor('socket.io-client')
 
}
