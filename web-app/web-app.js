'use strict'

var debug = require('debug')('webapp')
var superSimpleService = require('../super-simple-service')
var Hapi = require('hapi')
var PORT = 8080

function webApp () {
  var server = new Hapi.Server()
  server.connection({
    port: PORT
  })
  server.route({
    method: 'GET',
    path: '/showOne',
    handler: handler
  })
  server.on('response', function (request) {
    debug('stop!')
    server.stop()
  })

  function handler (request, reply) {
    debug('*showOne*')
    superSimpleService().doOne(function(err, result){
      debug('result from one is: ' + result.value)
      reply(result.value)
    })
  }

  return {
    showOne: showOne,
    start: start
  }

  function start () {
    debug('*start*')
    server.start(function (err) {
      if (err) {
        throw err
      }
      server.connections.forEach(function (conn) {
        debug('server started on port', conn.settings.port)
      })
    })
    return server
  }

  function showOne () {
    var options = {
      method: 'GET',
      url: '/showOne'
    }
    server.inject(options, function (response) {
      var result = response.result
      return result
    })
  }
}
module.exports = webApp
