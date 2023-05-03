"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _mongodb = require("mongodb");
var _messageSchema = _interopRequireDefault(require("../schema/messageSchema"));
var MessageDAO = /*#__PURE__*/function () {
  function MessageDAO() {
    (0, _classCallCheck2.default)(this, MessageDAO);
  }
  (0, _createClass2.default)(MessageDAO, null, [{
    key: "getMessages",
    value: // static chats
    // static messages
    // static async injectDB(conn) {
    //   if (this.chats && messageSchema) {
    //     return
    //   }
    //   try {
    //     this.chats = await conn.db(process.env.DB_NS).collection("chats", {
    //       writeConcern: { w: "majority" }
    //     })
    //     messageSchema = await conn.db(process.env.DB_NS).collection("messages", {
    //       writeConcern: { w: "majority" }
    //     })
    //   } catch (err) {
    //     console.error(`Failed to connect to DB in MessageDAO: ${err}`)
    //   }
    // }
    function () {
      var _getMessages = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        var _ref,
          _ref$filter,
          filter,
          _ref$page,
          page,
          _ref$limit,
          limit,
          cursor,
          _args = arguments;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _ref = _args.length > 0 && _args[0] !== undefined ? _args[0] : {}, _ref$filter = _ref.filter, filter = _ref$filter === void 0 ? {} : _ref$filter, _ref$page = _ref.page, page = _ref$page === void 0 ? 0 : _ref$page, _ref$limit = _ref.limit, limit = _ref$limit === void 0 ? 10 : _ref$limit;
              _context.prev = 1;
              _context.next = 4;
              return _messageSchema.default.find(filter).sort({
                "timestamp": -1
              }).skip(page * limit).limit(limit);
            case 4:
              cursor = _context.sent;
              return _context.abrupt("return", cursor);
            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](1);
              console.error("Failed to retrieve chat messages from DB. ".concat(_context.t0));
              return _context.abrupt("return", []);
            case 12:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[1, 8]]);
      }));
      function getMessages() {
        return _getMessages.apply(this, arguments);
      }
      return getMessages;
    }()
  }, {
    key: "getMessage",
    value: function () {
      var _getMessage = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(id) {
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return _messageSchema.default.findOne({
                _id: (0, _mongodb.ObjectId)(id)
              });
            case 3:
              return _context2.abrupt("return", _context2.sent);
            case 6:
              _context2.prev = 6;
              _context2.t0 = _context2["catch"](0);
              console.error("Failed to retrieve chat message from DB: ".concat(_context2.t0));
              return _context2.abrupt("return", {});
            case 10:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[0, 6]]);
      }));
      function getMessage(_x) {
        return _getMessage.apply(this, arguments);
      }
      return getMessage;
    }()
  }, {
    key: "addMessage",
    value: function () {
      var _addMessage = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(_ref2) {
        var chatId, type, sender, timestamp, content, result;
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              chatId = _ref2.chatId, type = _ref2.type, sender = _ref2.sender, timestamp = _ref2.timestamp, content = _ref2.content;
              _context3.prev = 1;
              _context3.next = 4;
              return _messageSchema.default.create({
                chatId: (0, _mongodb.ObjectId)(chatId),
                type: type,
                sender: sender,
                timestamp: new Date(timestamp),
                content: content
              });
            case 4:
              result = _context3.sent;
              return _context3.abrupt("return", {
                success: true,
                id: result._id
              });
            case 8:
              _context3.prev = 8;
              _context3.t0 = _context3["catch"](1);
              console.error("Failed to add chat message to DB: ".concat(chatId, ". ").concat(_context3.t0));
              return _context3.abrupt("return", {
                error: _context3.t0
              });
            case 12:
            case "end":
              return _context3.stop();
          }
        }, _callee3, null, [[1, 8]]);
      }));
      function addMessage(_x2) {
        return _addMessage.apply(this, arguments);
      }
      return addMessage;
    }()
  }, {
    key: "deleteMessages",
    value: function () {
      var _deleteMessages = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(filter) {
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              if (!(!filter || filter && !Object.keys(filter).length)) {
                _context4.next = 3;
                break;
              }
              throw Error("No filter provided. Cannot delete all documents.");
            case 3:
              _context4.next = 5;
              return _messageSchema.default.deleteMany(filter);
            case 5:
              return _context4.abrupt("return", {
                success: true
              });
            case 8:
              _context4.prev = 8;
              _context4.t0 = _context4["catch"](0);
              console.error("Failed to delete chat messages from DB. ".concat(_context4.t0));
              return _context4.abrupt("return", {
                error: _context4.t0
              });
            case 12:
            case "end":
              return _context4.stop();
          }
        }, _callee4, null, [[0, 8]]);
      }));
      function deleteMessages(_x3) {
        return _deleteMessages.apply(this, arguments);
      }
      return deleteMessages;
    }()
  }, {
    key: "deleteMessage",
    value: function () {
      var _deleteMessage = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5(id) {
        return _regenerator.default.wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              _context5.next = 3;
              return _messageSchema.default.deleteOne({
                _id: (0, _mongodb.ObjectId)(id)
              });
            case 3:
              return _context5.abrupt("return", {
                success: true
              });
            case 6:
              _context5.prev = 6;
              _context5.t0 = _context5["catch"](0);
              console.error("Failed to delete chat message from DB. ".concat(_context5.t0));
              return _context5.abrupt("return", {
                error: _context5.t0
              });
            case 10:
            case "end":
              return _context5.stop();
          }
        }, _callee5, null, [[0, 6]]);
      }));
      function deleteMessage(_x4) {
        return _deleteMessage.apply(this, arguments);
      }
      return deleteMessage;
    }()
  }]);
  return MessageDAO;
}();
exports.default = MessageDAO;