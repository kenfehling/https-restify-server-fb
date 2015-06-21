'use strict';

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _get = require('babel-runtime/helpers/get')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _Signal2 = require('./Signal');

var _Signal3 = _interopRequireDefault(_Signal2);

var LocationUpdatedSignal = (function (_Signal) {
  function LocationUpdatedSignal() {
    _classCallCheck(this, LocationUpdatedSignal);

    _get(Object.getPrototypeOf(LocationUpdatedSignal.prototype), 'constructor', this).apply(this, arguments);
  }

  _inherits(LocationUpdatedSignal, _Signal);

  return LocationUpdatedSignal;
})(_Signal3['default']);

exports['default'] = LocationUpdatedSignal;
module.exports = exports['default'];