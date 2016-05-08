'use strict'

var code = require('code')
var Lab = require('lab')
var lab = exports.lab = Lab.script({ output: process.stdout })
var webApp = require('./')

lab.experiment('One', function () {
  lab.test('Testing for "One"', function (done) {
    var server = webApp().start()
    var options = { method: 'GET', url: '/showOne' }
    server.inject(options, function (response) {
      var result = response.result
      code.expect(result).to.equal(1)
      done()
    })
  })
})
