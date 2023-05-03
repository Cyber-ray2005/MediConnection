"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
var paymentSchema = new _mongoose.default.Schema({
  fromUsername: {
    type: String,
    required: true
  },
  toUsername: {
    type: String,
    required: true
  },
  appointmentId: {
    type: _mongoose.default.Schema.Types.ObjectId,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    required: true
  }
});
var _default = _mongoose.default.model("Payment", paymentSchema);
exports.default = _default;