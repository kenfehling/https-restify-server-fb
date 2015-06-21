/**
 * Mogoose location model
 * Author: Ken Fehling
 */

'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var locationSchema = new Schema({
    _id: {
        type: Number,
        index: true,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
        unique: true
    },
    has_favorite: {
        type: Boolean,
        required: true,
        'default': false
    }
});

module.exports = mongoose.model('Location', locationSchema).model('Location');