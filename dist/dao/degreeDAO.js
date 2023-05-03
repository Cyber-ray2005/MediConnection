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
var _degreeSchema = _interopRequireDefault(require("../schema/degreeSchema"));
var DegreeDAO = /*#__PURE__*/function () {
  function DegreeDAO() {
    (0, _classCallCheck2.default)(this, DegreeDAO);
  }
  (0, _createClass2.default)(DegreeDAO, null, [{
    key: "getDegree",
    value: // static degrees
    // static async injectDB(conn) {
    //   if (degreeSchema) {
    //     return
    //   }
    //   try {
    //     degreeSchema = await conn.db(process.env.DB_NS).collection("degrees", {
    //       writeConcern: { w: "majority" }
    //     })
    //   } catch (err) {
    //     console.error(`Failed to connect to DB in DegreeDAO: ${err}`)
    //   }
    // }
    // static async getDegrees({filter={}, page=0, limit=10}) {
    //   try {
    //     const cursor = await degreeSchema.find(filter).skip(page*limit).limit(limit)
    //     return cursor
    //   } catch (err) {
    //     return []
    //   }
    // }
    function () {
      var _getDegree = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(id) {
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _degreeSchema.default.findOne({
                _id: (0, _mongodb.ObjectId)(id)
              });
            case 2:
              return _context.abrupt("return", _context.sent);
            case 3:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      function getDegree(_x) {
        return _getDegree.apply(this, arguments);
      }
      return getDegree;
    }()
  }, {
    key: "addDegree",
    value: function () {
      var _addDegree = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(_ref) {
        var username, degree, fromDate, toDate, university, response;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              username = _ref.username, degree = _ref.degree, fromDate = _ref.fromDate, toDate = _ref.toDate, university = _ref.university;
              _context2.prev = 1;
              _context2.next = 4;
              return _degreeSchema.default.create({
                username: username,
                degree: degree,
                fromDate: new Date(fromDate),
                toDate: new Date(toDate),
                university: university
              });
            case 4:
              response = _context2.sent;
              return _context2.abrupt("return", {
                success: true,
                id: response._id
              });
            case 8:
              _context2.prev = 8;
              _context2.t0 = _context2["catch"](1);
              console.error("Failed to add a new degree to DB. ".concat(_context2.t0));
              return _context2.abrupt("return", {
                error: _context2.t0
              });
            case 12:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[1, 8]]);
      }));
      function addDegree(_x2) {
        return _addDegree.apply(this, arguments);
      }
      return addDegree;
    }()
  }, {
    key: "deleteDegrees",
    value: function () {
      var _deleteDegrees = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(filter) {
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              if (!(!filter || filter && !Object.keys(filter).length)) {
                _context3.next = 3;
                break;
              }
              throw Error("No filter provided. Cannot delete all documents.");
            case 3:
              _context3.next = 5;
              return _degreeSchema.default.deleteMany(filter);
            case 5:
              return _context3.abrupt("return", {
                success: true
              });
            case 8:
              _context3.prev = 8;
              _context3.t0 = _context3["catch"](0);
              console.error("Failed to delete degrees from DB. ".concat(_context3.t0));
              return _context3.abrupt("return", {
                error: _context3.t0
              });
            case 12:
            case "end":
              return _context3.stop();
          }
        }, _callee3, null, [[0, 8]]);
      }));
      function deleteDegrees(_x3) {
        return _deleteDegrees.apply(this, arguments);
      }
      return deleteDegrees;
    }()
  }, {
    key: "deleteDegree",
    value: function () {
      var _deleteDegree = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(id) {
        var response;
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _context4.next = 3;
              return _degreeSchema.default.deleteOne({
                _id: (0, _mongodb.ObjectId)(id)
              });
            case 3:
              response = _context4.sent;
              return _context4.abrupt("return", {
                success: true
              });
            case 7:
              _context4.prev = 7;
              _context4.t0 = _context4["catch"](0);
              console.error("Failed to delete degree from DB. ".concat(_context4.t0));
              return _context4.abrupt("return", {
                error: _context4.t0
              });
            case 11:
            case "end":
              return _context4.stop();
          }
        }, _callee4, null, [[0, 7]]);
      }));
      function deleteDegree(_x4) {
        return _deleteDegree.apply(this, arguments);
      }
      return deleteDegree;
    }()
  }]);
  return DegreeDAO;
}();
exports.default = DegreeDAO;