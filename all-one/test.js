'use strict'

var test = require('tape-catch')
var allOne = require('./')()

test('consumeOne() do something', function (t) {
  allOne.consumeOne()
  t.end()
})
