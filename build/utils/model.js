"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.mutateField = mutateField;

function mutateField(object, field, value, callback) {
    if (value) {
        if (object[field] === value) {
            // ignore if already this value
            callback ? callback({ success: false, error: null }) : null;
        } else {
            object[field] = value;
            callback ? callback({ success: true }) : null;
        }
    } else {
        var error = field + " mustn't be " + value;
        callback ? callback({ success: false, error: error }) : null;
    }
}