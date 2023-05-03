"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
var labReportSchema = new _mongoose.default.Schema({
  fromUsername: {
    type: String,
    required: true
  },
  appointmentId: {
    type: _mongoose.default.Schema.Types.ObjectId,
    ref: 'Appointment',
    required: true
  },
  name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  }
});
var _default = _mongoose.default.model('LabReport', labReportSchema);
exports.default = _default;