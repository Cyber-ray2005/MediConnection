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
var _sessionSchema = _interopRequireDefault(require("../schema/sessionSchema"));
var SessionDAO = /*#__PURE__*/function () {
  function SessionDAO() {
    (0, _classCallCheck2.default)(this, SessionDAO);
  }
  (0, _createClass2.default)(SessionDAO, null, [{
    key: "getSession",
    value: // static sessions
    // static async injectDB(conn) {
    //   if (sessionSchema) {
    //     return
    //   }
    //   try {
    //     sessionSchema = await conn.db(process.env.DB_NS).collection("sessions", {
    //       writeConcern: { w: "majority" }
    //     })
    //   } catch (err) {
    //     console.error(`Failed to connect to DB in SessionDAO: ${err}`)
    //   }
    // }
    function () {
      var _getSession = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(id) {
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _sessionSchema.default.findOne({
                _id: id
              });
            case 3:
              return _context.abrupt("return", _context.sent);
            case 6:
              _context.prev = 6;
              _context.t0 = _context["catch"](0);
              console.error("Failed to retrieve session from DB. ".concat(_context.t0));
              return _context.abrupt("return", {});
            case 10:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[0, 6]]);
      }));
      function getSession(_x) {
        return _getSession.apply(this, arguments);
      }
      return getSession;
    }()
  }, {
    key: "addSession",
    value: function () {
      var _addSession = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(username, startTime) {
        var response;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return _sessionSchema.default.create({
                username: username,
                startTime: new Date(startTime)
              });
            case 3:
              response = _context2.sent;
              return _context2.abrupt("return", {
                success: true,
                id: response._id
              });
            case 7:
              _context2.prev = 7;
              _context2.t0 = _context2["catch"](0);
              console.error("Failed to add a new session to DB. ".concat(_context2.t0));
              return _context2.abrupt("return", {
                error: _context2.t0
              });
            case 11:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[0, 7]]);
      }));
      function addSession(_x2, _x3) {
        return _addSession.apply(this, arguments);
      }
      return addSession;
    }()
  }, {
    key: "deleteSession",
    value: function () {
      var _deleteSession = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(id) {
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return _sessionSchema.default.deleteOne({
                _id: id
              });
            case 3:
              return _context3.abrupt("return", {
                success: true
              });
            case 6:
              _context3.prev = 6;
              _context3.t0 = _context3["catch"](0);
              console.error("Failed to delete session from DB. ".concat(_context3.t0));
              return _context3.abrupt("return", {
                error: _context3.t0
              });
            case 10:
            case "end":
              return _context3.stop();
          }
        }, _callee3, null, [[0, 6]]);
      }));
      function deleteSession(_x4) {
        return _deleteSession.apply(this, arguments);
      }
      return deleteSession;
    }()
  }]);
  return SessionDAO;
}();
exports.default = SessionDAO;