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
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _mongodb = require("mongodb");
var _userSchema = _interopRequireDefault(require("../schema/userSchema"));
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var UserDAO = /*#__PURE__*/function () {
  function UserDAO() {
    (0, _classCallCheck2.default)(this, UserDAO);
  }
  (0, _createClass2.default)(UserDAO, null, [{
    key: "getUsers",
    value: // static async injectDB(conn) {
    //   if (userSchema && this.gfs) {
    //     return
    //   }
    //   try {
    //     userSchema = await conn.db(process.env.DB_NS).collection("users", {
    //       writeConcern: { w: "majority" }
    //     })
    //     this.gfs = new GridFSBucket(conn.db(process.env.DB_NS), {
    //       bucketName: "photos",
    //       writeConcern: { w: "majority" }
    //     })
    //   } catch (err) {
    //     console.error(`Failed to connect to DB in UserDAO: ${err}`)
    //   }
    // }
    function () {
      var _getUsers = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(_ref) {
        var _ref$filter, filter, _ref$page, page, _ref$limit, limit, cursor;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _ref$filter = _ref.filter, filter = _ref$filter === void 0 ? {} : _ref$filter, _ref$page = _ref.page, page = _ref$page === void 0 ? 0 : _ref$page, _ref$limit = _ref.limit, limit = _ref$limit === void 0 ? 10 : _ref$limit;
              _context.prev = 1;
              _context.next = 4;
              return _userSchema.default.find(filter).skip(page * limit).limit(limit);
            case 4:
              cursor = _context.sent;
              return _context.abrupt("return", cursor);
            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](1);
              console.error("Failed to retrieve users from DB. ".concat(_context.t0));
              return _context.abrupt("return", []);
            case 12:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[1, 8]]);
      }));
      function getUsers(_x) {
        return _getUsers.apply(this, arguments);
      }
      return getUsers;
    }()
  }, {
    key: "searchUsers",
    value: function () {
      var _searchUsers = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(_ref2) {
        var _ref2$filter, filter, _ref2$searchQuery, searchQuery, _ref2$page, page, _ref2$limit, limit, cursor;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _ref2$filter = _ref2.filter, filter = _ref2$filter === void 0 ? {} : _ref2$filter, _ref2$searchQuery = _ref2.searchQuery, searchQuery = _ref2$searchQuery === void 0 ? {} : _ref2$searchQuery, _ref2$page = _ref2.page, page = _ref2$page === void 0 ? 0 : _ref2$page, _ref2$limit = _ref2.limit, limit = _ref2$limit === void 0 ? 10 : _ref2$limit;
              _context2.prev = 1;
              _context2.next = 4;
              return _userSchema.default.aggregate([{
                $match: filter
              }, {
                $addFields: {
                  fullName: {
                    $concat: ["$firstName", " ", "$lastName"]
                  }
                }
              }]).match(searchQuery).project({
                fullName: 0
              }).skip(page * limit).limit(limit);
            case 4:
              cursor = _context2.sent;
              return _context2.abrupt("return", cursor);
            case 8:
              _context2.prev = 8;
              _context2.t0 = _context2["catch"](1);
              console.error("Failed to search users based on query within DB. ".concat(_context2.t0));
              return _context2.abrupt("return", []);
            case 12:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[1, 8]]);
      }));
      function searchUsers(_x2) {
        return _searchUsers.apply(this, arguments);
      }
      return searchUsers;
    }()
  }, {
    key: "getUser",
    value: function () {
      var _getUser = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(username) {
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return _userSchema.default.findOne({
                username: username
              });
            case 3:
              return _context3.abrupt("return", _context3.sent);
            case 6:
              _context3.prev = 6;
              _context3.t0 = _context3["catch"](0);
              console.error("Failed to retrieve user from DB. ".concat(_context3.t0));
              return _context3.abrupt("return", {});
            case 10:
            case "end":
              return _context3.stop();
          }
        }, _callee3, null, [[0, 6]]);
      }));
      function getUser(_x3) {
        return _getUser.apply(this, arguments);
      }
      return getUser;
    }()
  }, {
    key: "addUser",
    value: function () {
      var _addUser = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(_ref3) {
        var username, password, firstName, lastName, isPhysician, profilePhotoId, dob, gender, _ref3$qualification, qualification, _ref3$specialization, specialization, _ref3$description, description, response;
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              username = _ref3.username, password = _ref3.password, firstName = _ref3.firstName, lastName = _ref3.lastName, isPhysician = _ref3.isPhysician, profilePhotoId = _ref3.profilePhotoId, dob = _ref3.dob, gender = _ref3.gender, _ref3$qualification = _ref3.qualification, qualification = _ref3$qualification === void 0 ? "" : _ref3$qualification, _ref3$specialization = _ref3.specialization, specialization = _ref3$specialization === void 0 ? "" : _ref3$specialization, _ref3$description = _ref3.description, description = _ref3$description === void 0 ? "" : _ref3$description;
              _context4.prev = 1;
              _context4.next = 4;
              return _userSchema.default.create({
                username: username,
                password: password,
                firstName: firstName,
                lastName: lastName,
                isPhysician: Boolean(isPhysician),
                profilePhotoId: profilePhotoId ? (0, _mongodb.ObjectId)(profilePhotoId) : null,
                dob: new Date(dob),
                gender: gender,
                emailId: "",
                phoneNumber: "",
                qualification: qualification,
                specialization: specialization,
                description: description
              });
            case 4:
              response = _context4.sent;
              return _context4.abrupt("return", {
                success: true,
                data: response
              });
            case 8:
              _context4.prev = 8;
              _context4.t0 = _context4["catch"](1);
              console.error("Failed to add a new user. ".concat(_context4.t0));
              return _context4.abrupt("return", {
                error: _context4.t0
              });
            case 12:
            case "end":
              return _context4.stop();
          }
        }, _callee4, null, [[1, 8]]);
      }));
      function addUser(_x4) {
        return _addUser.apply(this, arguments);
      }
      return addUser;
    }()
  }, {
    key: "deleteUser",
    value: function () {
      var _deleteUser = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5(username) {
        return _regenerator.default.wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              _context5.next = 3;
              return _userSchema.default.deleteOne({
                username: username
              });
            case 3:
              return _context5.abrupt("return", {
                success: true
              });
            case 6:
              _context5.prev = 6;
              _context5.t0 = _context5["catch"](0);
              console.error("Failed to delete user. ".concat(_context5.t0));
              return _context5.abrupt("return", {
                error: _context5.t0
              });
            case 10:
            case "end":
              return _context5.stop();
          }
        }, _callee5, null, [[0, 6]]);
      }));
      function deleteUser(_x5) {
        return _deleteUser.apply(this, arguments);
      }
      return deleteUser;
    }()
  }, {
    key: "updateUser",
    value: function () {
      var _updateUser = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee6(username, updateQuery) {
        var udpateResponse;
        return _regenerator.default.wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              _context6.prev = 0;
              _context6.next = 3;
              return _userSchema.default.updateOne({
                username: username
              }, {
                $set: _objectSpread({}, updateQuery)
              });
            case 3:
              udpateResponse = _context6.sent;
              if (!(udpateResponse.matchedCount === 0)) {
                _context6.next = 6;
                break;
              }
              throw new Error("No user found with that username.");
            case 6:
              return _context6.abrupt("return", {
                success: true
              });
            case 9:
              _context6.prev = 9;
              _context6.t0 = _context6["catch"](0);
              console.error("Failed to update user in DB. ".concat(_context6.t0));
              return _context6.abrupt("return", {
                error: _context6.t0
              });
            case 13:
            case "end":
              return _context6.stop();
          }
        }, _callee6, null, [[0, 9]]);
      }));
      function updateUser(_x6, _x7) {
        return _updateUser.apply(this, arguments);
      }
      return updateUser;
    }()
  }, {
    key: "getPhoto",
    value: function () {
      var _getPhoto = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee7(photoId) {
        var cursor, files;
        return _regenerator.default.wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              _context7.prev = 0;
              _context7.next = 3;
              return this.gfs.find({
                _id: (0, _mongodb.ObjectId)(photoId)
              });
            case 3:
              cursor = _context7.sent;
              files = cursor;
              if (!(!files || files.length === 0)) {
                _context7.next = 7;
                break;
              }
              return _context7.abrupt("return", null);
            case 7:
              _context7.next = 9;
              return this.gfs.openDownloadStream((0, _mongodb.ObjectId)(photoId));
            case 9:
              return _context7.abrupt("return", _context7.sent);
            case 12:
              _context7.prev = 12;
              _context7.t0 = _context7["catch"](0);
              return _context7.abrupt("return", null);
            case 15:
            case "end":
              return _context7.stop();
          }
        }, _callee7, this, [[0, 12]]);
      }));
      function getPhoto(_x8) {
        return _getPhoto.apply(this, arguments);
      }
      return getPhoto;
    }()
  }, {
    key: "deletePhoto",
    value: function () {
      var _deletePhoto = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee8(photoId) {
        return _regenerator.default.wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              _context8.prev = 0;
              _context8.next = 3;
              return this.gfs.delete((0, _mongodb.ObjectId)(photoId));
            case 3:
              return _context8.abrupt("return", {
                success: true
              });
            case 6:
              _context8.prev = 6;
              _context8.t0 = _context8["catch"](0);
              console.error("Failed to delete photo from DB. ".concat(_context8.t0));
              return _context8.abrupt("return", {
                error: _context8.t0
              });
            case 10:
            case "end":
              return _context8.stop();
          }
        }, _callee8, this, [[0, 6]]);
      }));
      function deletePhoto(_x9) {
        return _deletePhoto.apply(this, arguments);
      }
      return deletePhoto;
    }()
  }]);
  return UserDAO;
}();
exports.default = UserDAO;
(0, _defineProperty2.default)(UserDAO, "users", void 0);
(0, _defineProperty2.default)(UserDAO, "gfs", void 0);