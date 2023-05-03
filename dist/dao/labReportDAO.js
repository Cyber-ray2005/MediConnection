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
var _labReport = _interopRequireDefault(require("../schema/labReport"));
var LabReportDAO = /*#__PURE__*/function () {
  function LabReportDAO() {
    (0, _classCallCheck2.default)(this, LabReportDAO);
  }
  (0, _createClass2.default)(LabReportDAO, null, [{
    key: "getLabReports",
    value: // static labReports
    // static async injectDB(conn) {
    //   if (labReport) {
    //     return
    //   }
    //   try {
    //     labReport = await conn.db(process.env.DB_NS).collection("lab_reports", {
    //       writeConcern: { w: "majority" }
    //     })
    //   } catch (err) {
    //     console.error(`Failed to connect to DB in LabReportDAO: ${err}`)
    //   }
    // }
    function () {
      var _getLabReports = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(_ref) {
        var _ref$filter, filter, _ref$page, page, _ref$limit, limit, _ref$reverse, reverse, cursor;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _ref$filter = _ref.filter, filter = _ref$filter === void 0 ? {} : _ref$filter, _ref$page = _ref.page, page = _ref$page === void 0 ? 0 : _ref$page, _ref$limit = _ref.limit, limit = _ref$limit === void 0 ? 10 : _ref$limit, _ref$reverse = _ref.reverse, reverse = _ref$reverse === void 0 ? false : _ref$reverse;
              _context.prev = 1;
              _context.next = 4;
              return _labReport.default.find(filter).sort({
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
      function getLabReports(_x) {
        return _getLabReports.apply(this, arguments);
      }
      return getLabReports;
    }()
  }, {
    key: "getLabReport",
    value: function () {
      var _getLabReport = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(id) {
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _labReport.default.findOne({
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
      function getLabReport(_x2) {
        return _getLabReport.apply(this, arguments);
      }
      return getLabReport;
    }()
  }, {
    key: "addLabReport",
    value: function () {
      var _addLabReport = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(_ref2) {
        var fromUsername, appointmentId, name, date, response;
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              fromUsername = _ref2.fromUsername, appointmentId = _ref2.appointmentId, name = _ref2.name, date = _ref2.date;
              _context3.prev = 1;
              _context3.next = 4;
              return _labReport.default.create({
                fromUsername: fromUsername,
                appointmentId: (0, _mongodb.ObjectId)(appointmentId),
                name: name,
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
              console.error("Failed to add a new lab report to DB. ".concat(_context3.t0));
              return _context3.abrupt("return", {
                error: _context3.t0
              });
            case 12:
            case "end":
              return _context3.stop();
          }
        }, _callee3, null, [[1, 8]]);
      }));
      function addLabReport(_x3) {
        return _addLabReport.apply(this, arguments);
      }
      return addLabReport;
    }()
  }, {
    key: "deleteLabReports",
    value: function () {
      var _deleteLabReports = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(filter) {
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
              return _labReport.default.deleteMany(filter);
            case 5:
              return _context4.abrupt("return", {
                success: true
              });
            case 8:
              _context4.prev = 8;
              _context4.t0 = _context4["catch"](0);
              console.error("Failed to delete lab reports from DB. ".concat(_context4.t0));
              return _context4.abrupt("return", {
                error: _context4.t0
              });
            case 12:
            case "end":
              return _context4.stop();
          }
        }, _callee4, null, [[0, 8]]);
      }));
      function deleteLabReports(_x4) {
        return _deleteLabReports.apply(this, arguments);
      }
      return deleteLabReports;
    }()
  }, {
    key: "deleteLabReport",
    value: function () {
      var _deleteLabReport = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5(id) {
        var response;
        return _regenerator.default.wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              _context5.next = 3;
              return _labReport.default.deleteOne({
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
              console.error("Failed to delete lab report from DB. ".concat(_context5.t0));
              return _context5.abrupt("return", {
                error: _context5.t0
              });
            case 11:
            case "end":
              return _context5.stop();
          }
        }, _callee5, null, [[0, 7]]);
      }));
      function deleteLabReport(_x5) {
        return _deleteLabReport.apply(this, arguments);
      }
      return deleteLabReport;
    }()
  }]);
  return LabReportDAO;
}();
exports.default = LabReportDAO;