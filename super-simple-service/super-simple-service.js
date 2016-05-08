'use strict'

var debug = require('debug')('ssservice')

// SYNC init (like read conf file)

function superSimpleService () {
  var result
  return {
    writeTheOne: writeTheOne,
    doOne: doOne
  }

  function theOne () {
    debug('*theOne*')
    return 1
  }

  function readTheOne () {
    debug('*readTheOne*')
    return theOne()
  }

  function writeTheOne () {
    debug('*writeTheOne*')
    result = readTheOne()
  }

  function doOne () {
    debug('*doOne*')
    writeTheOne()
    return result
  }
}
module.exports = superSimpleService
