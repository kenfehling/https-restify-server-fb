'use strict';

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _utilsModel = require('../utils/model');

var Location = (function () {
    function Location(id, name) {
        var hasFavorite = arguments[2] === undefined ? false : arguments[2];

        _classCallCheck(this, Location);

        this._id = id;
        this._name = name;
        this._hasFavorite = hasFavorite;
    }

    _createClass(Location, [{
        key: 'setId',
        value: function setId(id, callback) {
            (0, _utilsModel.mutateField)(this, '_id', id, callback);
        }
    }, {
        key: 'setName',
        value: function setName(name, callback) {
            (0, _utilsModel.mutateField)(this, '_name', name, callback);
        }
    }, {
        key: 'setHasFavorite',
        value: function setHasFavorite(hasFavorite, callback) {
            (0, _utilsModel.mutateField)(this, '_hasFavorite', hasFavorite, callback);
        }
    }, {
        key: 'id',
        get: function get() {
            return this._id;
        }
    }, {
        key: 'name',
        get: function get() {
            return this._name;
        }
    }, {
        key: 'hasFavorite',
        get: function get() {
            return this._hasFavorite;
        }
    }]);

    return Location;
})();

exports['default'] = Location;
module.exports = exports['default'];