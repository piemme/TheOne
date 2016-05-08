'use strict'

var test = require('tape-catch')
var stdout = require('test-console').stdout
var allOne = require('./')()

test('showOne() show 1', function (t) {
  var inspect = stdout.inspect()
  allOne.showOne()
  inspect.restore()
  t.deepEqual(inspect.output, ['1\n'])
  t.end()
})

test('consumeOne() do something', function (t) {
  allOne.consumeOne()
  t.end()
})
