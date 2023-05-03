"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
var insuranceSchema = new _mongoose.default.Schema({
  username: {
    type: String,
    required: true
  },
  insuranceId: {
    type: String,
    required: true
  },
  providerName: {
    type: String,
    required: true
  },
  expiryDate: {
    type: Date,
    required: true
  }
});
var _default = _mongoose.default.model('Insurance', insuranceSchema);
exports.default = _default;