'use strict'
var debug = require('debug')('main')
var result

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

writeTheOne()
consumeOne()
showOne()