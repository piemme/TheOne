'use strict'
var mongojs = require('mongojs')
var dataAcquisition = require('../data-acquisition')
var connectionData = require('./config.js')
var debug = require('debug')('ssservice')

function superSimpleService () {
  debug(connectionData)
  var db = mongojs(connectionData.connection, [connectionData.collection])
  var mycollection = db.collection(connectionData.collection)

  return {
    doOne: doOne
  }

  function doOne (callback) {
    debug('*doOne*')
    dataAcquisition().writeTheOne(function (err, doc) {
      if (err) {
        callback(err)
      }
      debug('one is written')
      mycollection.findOne({
        _id: mongojs.ObjectId(doc._id)
      }, function (err, doc) {
        if (err) {
          callback(err)
        }
        debug(doc)
        db.close()
        callback(null, doc)
      })
    })
  }
}
module.exports = superSimpleService
