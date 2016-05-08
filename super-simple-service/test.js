'use strict'

var test = require('tape-catch')
var superSimpleService = require('./')()

test('doOne() is 1', function (t) {
  t.equal(superSimpleService.doOne(), 1)
  t.end()
})
