"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _mongodb = require("mongodb");
var _appointmentSchema = _interopRequireDefault(require("../schema/appointmentSchema"));
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; } // import ChatDAO from "./chatDAO"
var AppointmentDAO = /*#__PURE__*/function () {
  function AppointmentDAO() {
    (0, _classCallCheck2.default)(this, AppointmentDAO);
  }
  (0, _createClass2.default)(AppointmentDAO, null, [{
    key: "getAppointments",
    value: // static users
    // static appointments
    // static chats
    // static async injectDB(conn) {
    //   if (this.users && appointmentSchema && this.chats) {
    //     return
    //   }
    //   try {
    //     this.users = await conn.db(process.env.DB_NS).collection("users", {
    //       writeConcern: { w: "majority" }
    //     })
    //     appointmentSchema = await conn.db(process.env.DB_NS).collection("appointments", {
    //       writeConcern: { w: "majority" }
    //     })
    //     this.chats = await conn.db(process.env.DB_NS).collection("chats", {
    //       writeConcern: { w: "majority" }
    //     })
    //   } catch (err) {
    //     console.error(`Failed to connect to DB in AppointmentDAO: ${err}`)
    //   }
    // }
    function () {
      var _getAppointments = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
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
              _ref = _args.length > 0 && _args[0] !== undefined ? _args[0] : {}, _ref$filter = _ref.filter, filter = _ref$filter === void 0 ? null : _ref$filter, _ref$page = _ref.page, page = _ref$page === void 0 ? 0 : _ref$page, _ref$limit = _ref.limit, limit = _ref$limit === void 0 ? 10 : _ref$limit;
              _context.prev = 1;
              _context.next = 4;
              return _appointmentSchema.default.find(filter).sort({
                "startTime": -1
              }).skip(page * limit).limit(limit);
            case 4:
              cursor = _context.sent;
              return _context.abrupt("return", cursor);
            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](1);
              console.error("Failed to retrieve appointments from DB. ".concat(_context.t0));
              return _context.abrupt("return", []);
            case 12:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[1, 8]]);
      }));
      function getAppointments() {
        return _getAppointments.apply(this, arguments);
      }
      return getAppointments;
    }()
  }, {
    key: "searchAppointments",
    value: function () {
      var _searchAppointments = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
        var _ref2,
          _ref2$filter,
          filter,
          _ref2$searchQuery,
          searchQuery,
          _ref2$page,
          page,
          _ref2$limit,
          limit,
          cursor,
          _args2 = arguments;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _ref2 = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : {}, _ref2$filter = _ref2.filter, filter = _ref2$filter === void 0 ? null : _ref2$filter, _ref2$searchQuery = _ref2.searchQuery, searchQuery = _ref2$searchQuery === void 0 ? null : _ref2$searchQuery, _ref2$page = _ref2.page, page = _ref2$page === void 0 ? 0 : _ref2$page, _ref2$limit = _ref2.limit, limit = _ref2$limit === void 0 ? 10 : _ref2$limit;
              _context2.prev = 1;
              _context2.next = 4;
              return _appointmentSchema.default.aggregate([{
                $match: filter
              }, {
                $addFields: {
                  patientFullName: {
                    $concat: ["$patient.firstName", " ", "$patient.lastName"]
                  },
                  physicianFullName: {
                    $concat: ["$physician.firstName", " ", "$physician.lastName"]
                  }
                }
              }]).match(searchQuery).project({
                patientFullName: 0,
                physicianFullName: 0
              }).sort({
                "startTime": -1
              }).skip(page * limit).limit(limit);
            case 4:
              cursor = _context2.sent;
              return _context2.abrupt("return", cursor);
            case 8:
              _context2.prev = 8;
              _context2.t0 = _context2["catch"](1);
              console.error("Failed to search and retrieve appointments from DB. ".concat(_context2.t0));
              return _context2.abrupt("return", []);
            case 12:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[1, 8]]);
      }));
      function searchAppointments() {
        return _searchAppointments.apply(this, arguments);
      }
      return searchAppointments;
    }()
  }, {
    key: "getAppointment",
    value: function () {
      var _getAppointment = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(id) {
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return _appointmentSchema.default.findOne({
                _id: (0, _mongodb.ObjectId)(id)
              });
            case 3:
              return _context3.abrupt("return", _context3.sent);
            case 6:
              _context3.prev = 6;
              _context3.t0 = _context3["catch"](0);
              console.error("Failed to retrieve appointment in DB: ".concat(_context3.t0));
              return _context3.abrupt("return", {});
            case 10:
            case "end":
              return _context3.stop();
          }
        }, _callee3, null, [[0, 6]]);
      }));
      function getAppointment(_x) {
        return _getAppointment.apply(this, arguments);
      }
      return getAppointment;
    }()
  }, {
    key: "addAppointment",
    value: function () {
      var _addAppointment = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(_ref3) {
        var title, patient, physician, status, startTime, endTime, description, serviceName, serviceCharge, paymentBalance, response;
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              title = _ref3.title, patient = _ref3.patient, physician = _ref3.physician, status = _ref3.status, startTime = _ref3.startTime, endTime = _ref3.endTime, description = _ref3.description, serviceName = _ref3.serviceName, serviceCharge = _ref3.serviceCharge, paymentBalance = _ref3.paymentBalance;
              _context4.prev = 1;
              _context4.next = 4;
              return _appointmentSchema.default.create({
                title: title,
                patient: patient,
                physician: physician,
                status: status,
                startTime: new Date(startTime),
                endTime: new Date(endTime),
                description: description,
                serviceName: serviceName,
                serviceCharge: serviceCharge,
                paymentBalance: paymentBalance
              });
            case 4:
              response = _context4.sent;
              return _context4.abrupt("return", {
                success: true,
                id: response._id
              });
            case 8:
              _context4.prev = 8;
              _context4.t0 = _context4["catch"](1);
              console.error("Failed to add a new appointment to DB. ".concat(_context4.t0));
              return _context4.abrupt("return", {
                error: _context4.t0
              });
            case 12:
            case "end":
              return _context4.stop();
          }
        }, _callee4, null, [[1, 8]]);
      }));
      function addAppointment(_x2) {
        return _addAppointment.apply(this, arguments);
      }
      return addAppointment;
    }()
  }, {
    key: "deleteAppointment",
    value: function () {
      var _deleteAppointment = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5(id) {
        return _regenerator.default.wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              _context5.next = 3;
              return _appointmentSchema.default.deleteOne({
                _id: (0, _mongodb.ObjectId)(id)
              });
            case 3:
              return _context5.abrupt("return", {
                success: true
              });
            case 6:
              _context5.prev = 6;
              _context5.t0 = _context5["catch"](0);
              console.error("Failed to delete appointment from DB. ".concat(_context5.t0));
              return _context5.abrupt("return", {
                error: _context5.t0
              });
            case 10:
            case "end":
              return _context5.stop();
          }
        }, _callee5, null, [[0, 6]]);
      }));
      function deleteAppointment(_x3) {
        return _deleteAppointment.apply(this, arguments);
      }
      return deleteAppointment;
    }()
  }, {
    key: "updateAppointment",
    value: function () {
      var _updateAppointment = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee6(id, updateQuery) {
        var response;
        return _regenerator.default.wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              _context6.prev = 0;
              _context6.next = 3;
              return _appointmentSchema.default.updateOne({
                _id: (0, _mongodb.ObjectId)(id)
              }, {
                $set: _objectSpread({}, updateQuery)
              });
            case 3:
              response = _context6.sent;
              if (!(response.matchedCount === 0)) {
                _context6.next = 6;
                break;
              }
              throw new Error("No appointment found with that ID.");
            case 6:
              return _context6.abrupt("return", {
                success: true
              });
            case 9:
              _context6.prev = 9;
              _context6.t0 = _context6["catch"](0);
              console.error("Failed to update appointment in DB. ".concat(_context6.t0));
              return _context6.abrupt("return", {
                error: _context6.t0
              });
            case 13:
            case "end":
              return _context6.stop();
          }
        }, _callee6, null, [[0, 9]]);
      }));
      function updateAppointment(_x4, _x5) {
        return _updateAppointment.apply(this, arguments);
      }
      return updateAppointment;
    }()
  }]);
  return AppointmentDAO;
}();
exports.default = AppointmentDAO;