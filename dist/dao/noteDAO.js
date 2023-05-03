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
var _noteSchema = _interopRequireDefault(require("../schema/noteSchema"));
var NoteDAO = /*#__PURE__*/function () {
  function NoteDAO() {
    (0, _classCallCheck2.default)(this, NoteDAO);
  }
  (0, _createClass2.default)(NoteDAO, null, [{
    key: "getNotes",
    value: // static notes
    // static async injectDB(conn) {
    //   if (noteSchema) {
    //     return
    //   }
    //   try {
    //     noteSchema = await conn.db(process.env.DB_NS).collection("notes", {
    //       writeConcern: { w: "majority" }
    //     })
    //   } catch (err) {
    //     console.error(`Failed to connect to DB in NoteDAO: ${err}`)
    //   }
    // }
    function () {
      var _getNotes = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(_ref) {
        var _ref$filter, filter, _ref$page, page, _ref$limit, limit, _ref$reverse, reverse, cursor;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _ref$filter = _ref.filter, filter = _ref$filter === void 0 ? {} : _ref$filter, _ref$page = _ref.page, page = _ref$page === void 0 ? 0 : _ref$page, _ref$limit = _ref.limit, limit = _ref$limit === void 0 ? 10 : _ref$limit, _ref$reverse = _ref.reverse, reverse = _ref$reverse === void 0 ? false : _ref$reverse;
              _context.prev = 1;
              _context.next = 4;
              return _noteSchema.default.find(filter).sort({
                _id: reverse ? -1 : 1
              }).skip(page * limit).limit(limit);
            case 4:
              cursor = _context.sent;
              return _context.abrupt("return", cursor);
            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](1);
              return _context.abrupt("return", []);
            case 11:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[1, 8]]);
      }));
      function getNotes(_x) {
        return _getNotes.apply(this, arguments);
      }
      return getNotes;
    }()
  }, {
    key: "getNote",
    value: function () {
      var _getNote = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(id) {
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _noteSchema.default.findOne({
                _id: (0, _mongodb.ObjectId)(id)
              });
            case 2:
              return _context2.abrupt("return", _context2.sent);
            case 3:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
      function getNote(_x2) {
        return _getNote.apply(this, arguments);
      }
      return getNote;
    }()
  }, {
    key: "addNote",
    value: function () {
      var _addNote = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(_ref2) {
        var fromUsername, appointmentId, title, content, date, response;
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              fromUsername = _ref2.fromUsername, appointmentId = _ref2.appointmentId, title = _ref2.title, content = _ref2.content, date = _ref2.date;
              _context3.prev = 1;
              _context3.next = 4;
              return _noteSchema.default.create({
                fromUsername: fromUsername,
                appointmentId: (0, _mongodb.ObjectId)(appointmentId),
                title: title,
                content: content,
                date: new Date(date)
              });
            case 4:
              response = _context3.sent;
              return _context3.abrupt("return", {
                success: true,
                id: response._id
              });
            case 8:
              _context3.prev = 8;
              _context3.t0 = _context3["catch"](1);
              console.error("Failed to add a new degree to DB. ".concat(_context3.t0));
              return _context3.abrupt("return", {
                error: _context3.t0
              });
            case 12:
            case "end":
              return _context3.stop();
          }
        }, _callee3, null, [[1, 8]]);
      }));
      function addNote(_x3) {
        return _addNote.apply(this, arguments);
      }
      return addNote;
    }()
  }, {
    key: "deleteNotes",
    value: function () {
      var _deleteNotes = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(filter) {
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
              return _noteSchema.default.deleteMany(filter);
            case 5:
              return _context4.abrupt("return", {
                success: true
              });
            case 8:
              _context4.prev = 8;
              _context4.t0 = _context4["catch"](0);
              console.error("Failed to delete notes from DB. ".concat(_context4.t0));
              return _context4.abrupt("return", {
                error: _context4.t0
              });
            case 12:
            case "end":
              return _context4.stop();
          }
        }, _callee4, null, [[0, 8]]);
      }));
      function deleteNotes(_x4) {
        return _deleteNotes.apply(this, arguments);
      }
      return deleteNotes;
    }()
  }, {
    key: "deleteNote",
    value: function () {
      var _deleteNote = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5(id) {
        var response;
        return _regenerator.default.wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              _context5.next = 3;
              return _noteSchema.default.deleteOne({
                _id: (0, _mongodb.ObjectId)(id)
              });
            case 3:
              response = _context5.sent;
              return _context5.abrupt("return", {
                success: true
              });
            case 7:
              _context5.prev = 7;
              _context5.t0 = _context5["catch"](0);
              console.error("Failed to delete note from DB. ".concat(_context5.t0));
              return _context5.abrupt("return", {
                error: _context5.t0
              });
            case 11:
            case "end":
              return _context5.stop();
          }
        }, _callee5, null, [[0, 7]]);
      }));
      function deleteNote(_x5) {
        return _deleteNote.apply(this, arguments);
      }
      return deleteNote;
    }()
  }]);
  return NoteDAO;
}();
exports.default = NoteDAO;