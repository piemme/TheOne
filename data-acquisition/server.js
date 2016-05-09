'use strict'
var debug = require('debug')('server-data-acq')
var dataAcquisition = require('./')()
debug('starting!')
dataAcquisition.start()
