'use strict'

var debug = require('debug')('all-one')
var superSimpleService = require('../super-simple-service')

function consumeWs () {
  return {
    consumeOne: consumeOne
  }

  function consumeOne () {
    debug('*consumeOne*')
    debug('consume service result: ' + superSimpleService().doOne())
  }
}
module.exports = consumeWs
