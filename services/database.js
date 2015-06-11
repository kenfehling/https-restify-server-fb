"use strict";

var mongoose = require('mongoose');
var Location = require('../models/location');
var Favorite = require('../models/favorite');

function connect(url) {
    var connection = mongoose.connect(url);
}

function close() {
    mongoose.disconnect();
}

module.exports = {
    connect: connect,
    close: close,
    models: {
        Location: Location,
        Favorite: Favorite
    }
};