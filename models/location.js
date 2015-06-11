/**
 * Mogoose location model
 * Author: Ken Fehling
 */

"use strict";

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
    }
});

module.exports = mongoose.model('Location', locationSchema).model('Location');