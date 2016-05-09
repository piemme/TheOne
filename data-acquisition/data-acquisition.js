'use strict'
var mongojs = require('mongojs')
var connectionData = require('./config.js')
var debug = require('debug')('data-acq')
var FREQUENZA_LETTURA_MS = 5000

function dataAcquisition () {
  debug(connectionData)
  var db = mongojs(connectionData.connection, [connectionData.collection])
  var mycollection = db.collection(connectionData.collection)

  return {
    writeTheOne: writeTheOne,
    start: start,
    close: close
  }

  function theOne () {
    debug('*theOne*')
    return 1
  }

  function readTheOne () {
    debug('*readTheOne*')
    return theOne()
  }

  function writeTheOne (callback) {
    debug('*writeTheOne*')
    var toInsert = {
      'value': readTheOne()
    }
    mycollection.insert(toInsert, function (err, doc) {
      if (err) {
        return callback(err)
      }
      debug(doc)
      callback(err, doc)
    })
  }

  function start (freq, cnt) {
    debug('*start*')
    var frequenza = freq || FREQUENZA_LETTURA_MS
    var count = cnt || 1
    var timesRun = 0
    var interval = setInterval(function () {
      if (timesRun === count) {
        debug('stopping after ' + timesRun + ' executions')
        clearInterval(interval)
        process.exit(0)
      }
      timesRun += 1
      writeTheOne(function (err, result) {
        if (err) {
          debug(err)
        }
        debug('insert!')
        debug(result)
      })
    }, frequenza)
  }

  function close () {
    db.close()
  }

}
module.exports = dataAcquisition
