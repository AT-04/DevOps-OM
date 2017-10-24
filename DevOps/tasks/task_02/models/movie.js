'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
        title: {type: String, require: true},
        year: {type: Number, require: true}
    },
    {
        versionKey: false
    });

module.exports = mongoose.model('movie', MovieSchema);
