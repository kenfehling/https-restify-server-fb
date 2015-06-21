'use strict';

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var instance = null;

// TODO: Memory-backed locations store.
// TODO: Could this be swapped out with a database implementation?
// TODO: On the client this would be fine to represent the model,
// TODO: but with 100,000 users on the server it wouldn't be.

// TODO: On the other hand, this could be populated with data from the database
// TODO: when a particular request asking for this object is being serviced.

var Locations = (function () {
    function Locations() {
        _classCallCheck(this, Locations);

        this.all = [];
    }

    _createClass(Locations, [{
        key: 'add',
        value: function add(location) {
            this.all.push(location);
        }
    }, {
        key: 'getById',
        value: function getById(id) {
            return _lodash2['default'].find(this.all, function (location) {
                console.log(location.id, id);
                return location.id === id;
            });
        }
    }], [{
        key: 'instance',
        get: function get() {
            if (!this[instance]) {
                this[instance] = new Locations();
            }
            return this[instance];
        }
    }]);

    return Locations;
})();

exports['default'] = Locations;
module.exports = exports['default'];