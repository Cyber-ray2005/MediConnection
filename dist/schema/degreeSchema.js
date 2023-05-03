"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
var degreeSchema = new _mongoose.default.Schema({
  username: {
    type: String,
    required: true
  },
  degree: {
    type: String,
    required: true
  },
  fromDate: {
    type: Date,
    required: true
  },
  toDate: {
    type: Date,
    required: true
  },
  university: {
    type: String,
    required: true
  }
});
var _default = _mongoose.default.model("Degree", degreeSchema);
exports.default = _default;