var jsonServer = require('json-server')
var server = jsonServer.create()
var finalDb = {
  ...require('./db.json')
}
var router = jsonServer.router(finalDb)

var middlewares = jsonServer.defaults()

server.use(middlewares)

server.use(jsonServer.bodyParser)

server.use(router)

server.listen(3002, function() {
  console.log('json-server started on port ' + 3002)
})
