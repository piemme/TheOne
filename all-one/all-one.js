'use strict'

var debug = require('debug')('main')

// SYNC init (like read conf file)

function allOne() {
  var result
  return {
    writeTheOne: writeTheOne
    , doOne: doOne
    , showOne: showOne
    , consumeOne: consumeOne
  }

  function theOne() {
    debug('*theOne*')
    return 1
  }

  function readTheOne() {
    debug('*readTheOne*')
    return theOne()
  }

  function writeTheOne() {
    debug('*writeTheOne*')
    result = readTheOne()
  }

  function doOne() {
    debug('*doOne*')
    writeTheOne()
    return result
  }

  function showOne() {
    debug('*showOne*')
    console.log(doOne())
  }

  function consumeOne() {
    debug('*consumeOne*')
    debug('consume service result: ' + doOne())
  }
}
module.exports = allOne