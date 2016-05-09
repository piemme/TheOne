'use strict'

var test = require('tape-catch')
var dataAcquisition = require('./')

test('writeOne() write 1', function (t) {
  dataAcquisition().writeTheOne(function (err, result) {
    t.error(err, 'no error')
    t.ok(result, 'result has a value')
    t.end()
  })
})
