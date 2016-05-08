'use strict'

var test = require('tape-catch')
var superSimpleService = require('./')

test('doOne() is 1', function (t) {
  superSimpleService().doOne(function (err, result) {
    t.error(err, 'no error')
    t.equal(result.value, 1)
    t.end()
  })
})
