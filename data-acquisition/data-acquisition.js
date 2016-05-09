'use strict'
var mongojs = require('mongojs')
var connectionData = require('./config.js')
var debug = require('debug')('data-acq')

function dataAcquisition () {
  debug(connectionData)
  var db = mongojs(connectionData.connection, [connectionData.collection])
  var mycollection = db.collection(connectionData.collection)

  return {
    writeTheOne: writeTheOne
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
        db.close()
        return callback(err)
      }
      debug(doc)
      db.close()
      callback(err, doc)
    })
  }
}
module.exports = dataAcquisition
