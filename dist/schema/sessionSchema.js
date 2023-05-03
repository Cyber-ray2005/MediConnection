"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
var sessionSchema = new _mongoose.default.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    description: "Username of current user."
  },
  startTime: {
    type: Date,
    required: true,
    description: "Start time"
  }
}, {
  collection: 'sessions',
  strict: true,
  validateBeforeSave: true
});
var _default = _mongoose.default.model('Session', sessionSchema); // export default async function createSessionSchema(conn) {
//   await conn.db("medicus").createCollection("sessions", {
//     validator: {
//       $jsonSchema: {
//         bsonType: "object",
//         title: "sessions",
//         additionalProperties: false,
//         properties: {
//           _id: {
//             bsonType: "objectId"
//           },
//           username: {
//             bsonType: "string",
//             description: "Username of current user."
//           },
//           authToken: {
//             bsonType: "string",
//             description: "Authentication token for current user."
//           }
//         },
//         required: ["username", "authToken"]
//       }
//     },
//     validationLevel: "strict",
//     validationAction: "error"
//   })
//   // console.log(`Sessions collection using schema was created.`)
// }
exports.default = _default;