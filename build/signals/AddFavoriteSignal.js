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

var AddFavoriteSignal = (function (_Signal) {
  function AddFavoriteSignal() {
    _classCallCheck(this, AddFavoriteSignal);

    _get(Object.getPrototypeOf(AddFavoriteSignal.prototype), 'constructor', this).apply(this, arguments);
  }

  _inherits(AddFavoriteSignal, _Signal);

  return AddFavoriteSignal;
})(_Signal3['default']);

exports['default'] = AddFavoriteSignal;
module.exports = exports['default'];