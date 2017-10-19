'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MovieSchema = new Schema({
    title: {type: String, require: true},
    year: {type: String, require: true},
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Movies', MovieSchema);