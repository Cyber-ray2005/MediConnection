"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
var userSchema = new _mongoose.default.Schema({
  username: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  isPhysician: {
    type: Boolean,
    required: true
  },
  profilePhotoId: {
    type: _mongoose.default.Schema.Types.ObjectId
  }
});
var appointmentSchema = new _mongoose.default.Schema({
  title: {
    type: String,
    required: true,
    minLength: 1
  },
  patient: {
    type: userSchema,
    required: true
  },
  physician: {
    type: userSchema,
    required: true
  },
  status: {
    type: String,
    enum: ['Pending', 'Accepted', 'Rejected', 'Completed'],
    required: true
  },
  startTime: {
    type: Date,
    required: true
  },
  endTime: {
    type: Date,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  chatId: {
    type: _mongoose.default.Schema.Types.ObjectId,
    ref: 'Chat'
  },
  serviceName: {
    type: "String"
  },
  serviceCharge: {
    type: "String"
  },
  paymentBalance: {
    type: "String"
  }
});
var _default = _mongoose.default.model("Appointment", appointmentSchema); // export default async function createAppointmentSchema(conn) {
//   await conn.model('Appointment', appointmentSchema);
//   // console.log('Appointments collection using schema was created.');
// }
// export default async function createAppointmentSchema(conn) {
//   await conn.db("medicus").createCollection("appointments", {
//     validator: {
//       $jsonSchema: {
//         bsonType: "object",
//         title: "appointments",
//         additionalProperties: false,
//         properties: {
//           _id: {
//             bsonType: "objectId"
//           },
//           title: {
//             bsonType: ["string"],
//             minLength: 1,
//             description: "Title of appointment."
//           },
//           patient: {
//             bsonType: ["object"],
//             description: "Username of patient."
//           },
//           physician: {
//             bsonType: ["object"],
//             minLength: 1,
//             description: "Username of physician."
//           },
//           status: {
//             enum: ["Pending", "Accepted", "Rejected", "Completed"],
//             description: "Status of appointment."
//           },
//           startTime: {
//             bsonType: ["date"],
//             description: "Start time of appointment."
//           },
//           endTime: {
//             bsonType: ["date"],
//             description: "End Time of appointment."
//           },
//           description: {
//             bsonType: ["string"],
//             description: "Description of appointment."
//           },
//           chatId: {
//             bsonType: ["objectId", null],
//             description: "Associated Chat Id for the appointment."
//           }
//         },
//         required: ["title", "patient", "physician", "status", "startTime", "endTime", "description"]
//       }
//     },
//     validationLevel: "strict",
//     validationAction: "error"
//   })
//   // console.log(`Appointments collection using schema was created.`)
// }
exports.default = _default;