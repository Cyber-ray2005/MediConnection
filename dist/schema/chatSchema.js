"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
var Schema = _mongoose.default.Schema;
var userSchema = new Schema({
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
var chatSchema = new Schema({
  title: {
    type: String,
    required: true,
    minLength: 1,
    description: "Title of chat."
  },
  host: {
    type: userSchema,
    required: true,
    description: "host of chat."
  },
  startTime: {
    type: Date,
    required: true,
    description: "Start time of chat."
  },
  members: {
    type: [String],
    required: true,
    minLength: 1,
    description: "List of usernames of members within chat."
  },
  activeMembers: {
    type: [String],
    required: true,
    minLength: 1,
    description: "List of usernames of members active within chat."
  },
  appointmentId: {
    type: Schema.Types.ObjectId,
    description: "Associated appointment Id for chat."
  }
}, {
  strict: "throw",
  collection: "chats"
});
var _default = _mongoose.default.model("Chat", chatSchema); // export default async function createChatSchema(conn) {
//   await Chat.init();
//   // console.log(`Chats collection using schema was created.`);
// }
// export default async function createChatSchema(conn) {
//   await conn.db("medicus").createCollection("chats", {
//     validator: {
//       $jsonSchema: {
//         bsonType: "object",
//         title: "chats",
//         additionalProperties: false,
//         properties: {
//           _id: {
//             bsonType: "objectId"
//           },
//           title: {
//             bsonType: ["string"],
//             minLength: 1,
//             description: "Title of chat."
//           },
//           host: {
//             bsonType: ["string"],
//             minLength: 1,
//             description: "Username of host of chat."
//           },
//           startTime: {
//             bsonType: ["date"],
//             description: "Start time of chat."
//           },
//           members: {
//             bsonType: ["array"],
//             minLength: 1,
//             description: "List of usernames of members within chat."
//           },
//           activeMembers: {
//             bsonType: ["array"],
//             minLength: 1,
//             description: "List of usernames of members active within chat."
//           },
//           appointmentId: {
//             bsonType: ["objectId", null],
//             description: "Associated appointment Id for chat."
//           }
//         },
//         required: ["title", "members", "host", "startTime"]
//       }
//     },
//     validationLevel: "strict",
//     validationAction: "error"
//   })
//   // console.log(`Chats collection using schema was created.`)
// }
exports.default = _default;