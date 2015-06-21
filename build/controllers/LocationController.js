'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.setLocationId = setLocationId;
exports.setLocationName = setLocationName;
exports.setLocationHasFavorite = setLocationHasFavorite;

var _modelsLocation = require('../models/Location');

var _modelsLocation2 = _interopRequireDefault(_modelsLocation);

var _signalsLocationUpdatedSignal = require('../signals/LocationUpdatedSignal');

var _signalsLocationUpdatedSignal2 = _interopRequireDefault(_signalsLocationUpdatedSignal);

var locationUpdatedSignal = _signalsLocationUpdatedSignal2['default'].instance;

function createCallback(location, callback) {
    return function (result) {
        if (result.success) {
            locationUpdatedSignal.dispatch(location);
        } else if (result.error) {
            console.error(result.error);
        }
        callback(result);
    };
}

function setLocationId(location, id, callback) {
    location.setId(id, createCallback(location, callback));
}

function setLocationName(location, name, callback) {
    location.setName(name, createCallback(location, callback));
}

function setLocationHasFavorite(location, hasFavorite, callback) {
    location.setHasFavorite(hasFavorite, createCallback(location, callback));
}