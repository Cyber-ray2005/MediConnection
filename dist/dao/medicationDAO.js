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
var _medication = _interopRequireDefault(require("../schema/medication"));
var MedicationDAO = /*#__PURE__*/function () {
  function MedicationDAO() {
    (0, _classCallCheck2.default)(this, MedicationDAO);
  }
  (0, _createClass2.default)(MedicationDAO, null, [{
    key: "getMedications",
    value: // static medications
    // static async injectDB(conn) {
    //   if (medication) {
    //     return
    //   }
    //   try {
    //     medication = await conn.db(process.env.DB_NS).collection("medications", {
    //       writeConcern: { w: "majority" }
    //     })
    //   } catch (err) {
    //     console.error(`Failed to connect to DB in MedicationDAO: ${err}`)
    //   }
    // }
    function () {
      var _getMedications = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(_ref) {
        var _ref$filter, filter, _ref$page, page, _ref$limit, limit, _ref$reverse, reverse, cursor;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _ref$filter = _ref.filter, filter = _ref$filter === void 0 ? {} : _ref$filter, _ref$page = _ref.page, page = _ref$page === void 0 ? 0 : _ref$page, _ref$limit = _ref.limit, limit = _ref$limit === void 0 ? 10 : _ref$limit, _ref$reverse = _ref.reverse, reverse = _ref$reverse === void 0 ? false : _ref$reverse;
              console.log("Medication service", filter);
              _context.prev = 2;
              _context.next = 5;
              return _medication.default.find(filter).sort({
                _id: reverse ? -1 : 1
              }).skip(page * limit).limit(limit);
            case 5:
              cursor = _context.sent;
              return _context.abrupt("return", cursor);
            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](2);
              return _context.abrupt("return", []);
            case 12:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[2, 9]]);
      }));
      function getMedications(_x) {
        return _getMedications.apply(this, arguments);
      }
      return getMedications;
    }()
  }, {
    key: "getMedication",
    value: function () {
      var _getMedication = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(id) {
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              console.log("getting a med");
              _context2.next = 3;
              return _medication.default.findOne({
                _id: (0, _mongodb.ObjectId)(id)
              });
            case 3:
              return _context2.abrupt("return", _context2.sent);
            case 4:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
      function getMedication(_x2) {
        return _getMedication.apply(this, arguments);
      }
      return getMedication;
    }()
  }, {
    key: "addMedication",
    value: function () {
      var _addMedication = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(_ref2) {
        var fromUsername, toUsername, appointmentId, name, dosage, response;
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              fromUsername = _ref2.fromUsername, toUsername = _ref2.toUsername, appointmentId = _ref2.appointmentId, name = _ref2.name, dosage = _ref2.dosage;
              _context3.prev = 1;
              console.log("adding a med");
              _context3.next = 5;
              return _medication.default.create({
                fromUsername: fromUsername,
                toUsername: toUsername,
                appointmentId: appointmentId,
                name: name,
                dosage: dosage
              });
            case 5:
              response = _context3.sent;
              console.log(response);
              return _context3.abrupt("return", {
                success: true,
                id: response._id
              });
            case 10:
              _context3.prev = 10;
              _context3.t0 = _context3["catch"](1);
              console.error("Failed to add a new medication to DB. ".concat(_context3.t0));
              return _context3.abrupt("return", {
                error: _context3.t0
              });
            case 14:
            case "end":
              return _context3.stop();
          }
        }, _callee3, null, [[1, 10]]);
      }));
      function addMedication(_x3) {
        return _addMedication.apply(this, arguments);
      }
      return addMedication;
    }()
  }, {
    key: "deleteMedications",
    value: function () {
      var _deleteMedications = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(filter) {
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
              return _medication.default.deleteMany(filter);
            case 5:
              return _context4.abrupt("return", {
                success: true
              });
            case 8:
              _context4.prev = 8;
              _context4.t0 = _context4["catch"](0);
              console.error("Failed to delete medications from DB. ".concat(_context4.t0));
              return _context4.abrupt("return", {
                error: _context4.t0
              });
            case 12:
            case "end":
              return _context4.stop();
          }
        }, _callee4, null, [[0, 8]]);
      }));
      function deleteMedications(_x4) {
        return _deleteMedications.apply(this, arguments);
      }
      return deleteMedications;
    }()
  }, {
    key: "deleteMedication",
    value: function () {
      var _deleteMedication = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5(id) {
        var response;
        return _regenerator.default.wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              _context5.next = 3;
              return _medication.default.deleteOne({
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
              console.error("Failed to delete medication from DB. ".concat(_context5.t0));
              return _context5.abrupt("return", {
                error: _context5.t0
              });
            case 11:
            case "end":
              return _context5.stop();
          }
        }, _callee5, null, [[0, 7]]);
      }));
      function deleteMedication(_x5) {
        return _deleteMedication.apply(this, arguments);
      }
      return deleteMedication;
    }()
  }]);
  return MedicationDAO;
}();
exports.default = MedicationDAO;