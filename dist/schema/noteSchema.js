"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
var NoteSchema = new _mongoose.default.Schema({
  fromUsername: {
    type: String,
    required: true
  },
  appointmentId: {
    type: _mongoose.default.Schema.Types.ObjectId,
    required: true
  },
  title: {
    type: String,
    required: true,
    minLength: 1
  },
  content: {
    type: String,
    required: true,
    minLength: 1
  },
  date: {
    type: Date,
    required: true
  }
});
var _default = _mongoose.default.model('Note', NoteSchema);
exports.default = _default;