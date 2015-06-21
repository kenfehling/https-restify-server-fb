'use strict';

var mongoose = require('mongoose');
var Location = require('../mongoose/location');
var Favorite = require('../mongoose/favorite');

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