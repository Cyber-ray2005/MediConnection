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
var _jobSchema = _interopRequireDefault(require("../schema/jobSchema"));
var JobDAO = /*#__PURE__*/function () {
  function JobDAO() {
    (0, _classCallCheck2.default)(this, JobDAO);
  }
  (0, _createClass2.default)(JobDAO, null, [{
    key: "getJobs",
    value: // static jobs
    // static async injectDB(conn) {
    //   if (jobSchema) {
    //     return
    //   }
    //   try {
    //     jobSchema = await conn.db(process.env.DB_NS).collection("jobs", {
    //       writeConcern: { w: "majority" }
    //     })
    //   } catch (err) {
    //     console.error(`Failed to connect to DB in JobDAO: ${err}`)
    //   }
    // }
    function () {
      var _getJobs = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(_ref) {
        var _ref$filter, filter, _ref$page, page, _ref$limit, limit, cursor;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _ref$filter = _ref.filter, filter = _ref$filter === void 0 ? {} : _ref$filter, _ref$page = _ref.page, page = _ref$page === void 0 ? 0 : _ref$page, _ref$limit = _ref.limit, limit = _ref$limit === void 0 ? 10 : _ref$limit;
              _context.prev = 1;
              _context.next = 4;
              return _jobSchema.default.find(filter).skip(page * limit).limit(limit);
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
      function getJobs(_x) {
        return _getJobs.apply(this, arguments);
      }
      return getJobs;
    }()
  }, {
    key: "getJob",
    value: function () {
      var _getJob = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(id) {
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _jobSchema.default.findOne({
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
      function getJob(_x2) {
        return _getJob.apply(this, arguments);
      }
      return getJob;
    }()
  }, {
    key: "addJob",
    value: function () {
      var _addJob = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(_ref2) {
        var username, title, fromDate, toDate, company, response;
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              username = _ref2.username, title = _ref2.title, fromDate = _ref2.fromDate, toDate = _ref2.toDate, company = _ref2.company;
              _context3.prev = 1;
              _context3.next = 4;
              return _jobSchema.default.create({
                username: username,
                title: title,
                fromDate: new Date(fromDate),
                toDate: new Date(toDate),
                company: company
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
              console.error("Failed to add a new job to DB. ".concat(_context3.t0));
              return _context3.abrupt("return", {
                error: _context3.t0
              });
            case 12:
            case "end":
              return _context3.stop();
          }
        }, _callee3, null, [[1, 8]]);
      }));
      function addJob(_x3) {
        return _addJob.apply(this, arguments);
      }
      return addJob;
    }()
  }, {
    key: "deleteJobs",
    value: function () {
      var _deleteJobs = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(filter) {
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
              return _jobSchema.default.deleteMany(filter);
            case 5:
              return _context4.abrupt("return", {
                success: true
              });
            case 8:
              _context4.prev = 8;
              _context4.t0 = _context4["catch"](0);
              console.error("Failed to delete jobs from DB. ".concat(_context4.t0));
              return _context4.abrupt("return", {
                error: _context4.t0
              });
            case 12:
            case "end":
              return _context4.stop();
          }
        }, _callee4, null, [[0, 8]]);
      }));
      function deleteJobs(_x4) {
        return _deleteJobs.apply(this, arguments);
      }
      return deleteJobs;
    }()
  }, {
    key: "deleteJob",
    value: function () {
      var _deleteJob = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5(id) {
        var response;
        return _regenerator.default.wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              _context5.next = 3;
              return _jobSchema.default.deleteOne({
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
              console.error("Failed to delete job from DB. ".concat(_context5.t0));
              return _context5.abrupt("return", {
                error: _context5.t0
              });
            case 11:
            case "end":
              return _context5.stop();
          }
        }, _callee5, null, [[0, 7]]);
      }));
      function deleteJob(_x5) {
        return _deleteJob.apply(this, arguments);
      }
      return deleteJob;
    }()
  }]);
  return JobDAO;
}();
exports.default = JobDAO;