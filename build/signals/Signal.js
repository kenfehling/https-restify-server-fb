"use strict";

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

var _Symbol = require("babel-runtime/core-js/symbol")["default"];

Object.defineProperty(exports, "__esModule", {
    value: true
});
var singleton = _Symbol();

var Signal = (function () {
    function Signal() {
        _classCallCheck(this, Signal);

        this.listeners = [];
    }

    _createClass(Signal, [{
        key: "dispatch",
        value: function dispatch(data) {
            this.listeners.forEach(function (f) {
                return f(data);
            });
        }
    }, {
        key: "add",
        value: function add(f) {
            this.listeners.push(f);
        }
    }, {
        key: "remove",
        value: function remove(f) {}
    }], [{
        key: "instance",

        /**
         * @returns Singleton
         */
        get: function get() {
            if (!this[singleton]) {
                this[singleton] = new Signal();
            }
            return this[singleton];
        }
    }]);

    return Signal;
})();

exports["default"] = Signal;
module.exports = exports["default"];

// TODO: Implement