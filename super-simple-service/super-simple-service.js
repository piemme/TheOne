'use strict'
var mongojs = require('mongojs')
var debug = require('debug')('ssservice')

function superSimpleService() {
  var connection = 'mongodb://localhost:27017/theone'
  var collection = 'numbers'
  var db = mongojs(connection, [collection])
  var mycollection = db.collection(collection)

  return {
    writeTheOne: writeTheOne
    , doOne: doOne
  }

  function theOne() {
    debug('*theOne*')
    return 1
  }

  function readTheOne() {
    debug('*readTheOne*')
    return theOne()
  }

  function writeTheOne(callback) {
    debug('*writeTheOne*')
    var toInsert = {
      "value": readTheOne()
    }
    mycollection.insert(toInsert, function (err, doc) {
      debug(doc)
      callback(err, doc)
    })
  }

  function doOne(callback) {
    debug('*doOne*')
    writeTheOne(function (err, doc) {
      mycollection.findOne({
        _id: mongojs.ObjectId(doc._id)
      }, function (err, doc) {
        debug(doc)
        db.close()
        callback(null, doc)
      })
    })
  }
}
module.exports = superSimpleService