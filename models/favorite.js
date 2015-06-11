/**
 * Mogoose favorite model
 * Author: Ken Fehling
 */

"use strict";

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var favoriteSchema = new Schema({
    location: {
        type: Number,
        ref: 'locations',
        index: true,
        required: true
    }
});

module.exports = mongoose.model('Favorite', favoriteSchema).model('Favorite');