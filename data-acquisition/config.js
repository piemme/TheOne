'use strict'

var user, password
var host = 'localhost'
var port = '27017'
var db = 'theone'
var connection = 'mongodb://' + host + ':' + port + '/' + db
var collection = 'numbers'

module.exports = {
  user: process.env.NODE_MONGODB_USER || user,
  password: process.env.NODE_MONGODB_PASSWORD || password,
  connection: process.env.NODE_MONGODB_CONNECTIONSTRING || connection,
  collection: process.env.NODE_MONGODB_COLLECTION || collection
}
