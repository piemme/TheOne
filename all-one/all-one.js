'use strict'

var debug = require('debug')('all-one')

// SYNC init (like read conf file)
var superSimpleService = require('../super-simple-service')

function allOne () {
  return {
    showOne: showOne,
    consumeOne: consumeOne
  }

  function showOne () {
    debug('*showOne*')
    console.log(superSimpleService().doOne())
  }

  function consumeOne () {
    debug('*consumeOne*')
    debug('consume service result: ' + superSimpleService().doOne())
  }
}
module.exports = allOne
