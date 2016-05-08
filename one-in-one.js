'use strict'

var result

function theOne() {
  console.log('*theOne*')
  return 1
}

function readTheOne() {
  console.log('*readTheOne*')
  return theOne()
}

function writeTheOne() {
  console.log('*writeTheOne*')
  result = readTheOne()
}

function doOne() {
  console.log('*doOne*')
  return result
}

function showOne() {
  console.log('*showOne*')
  console.log('OUTPUT: ' + doOne())
}

function consumeOne() {
  console.log('*consumeOne*')
  doOne()
}

writeTheOne()
consumeOne()
showOne()