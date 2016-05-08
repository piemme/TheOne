'use strict'

var test = require('tape-catch')
var consumeWs = require('./')()

test('consumeOne() do something', function (t) {
  consumeWs.consumeOne()
  t.end()
})
