"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _dotenv = _interopRequireDefault(require("dotenv"));
var _express = _interopRequireDefault(require("express"));
var _http = _interopRequireDefault(require("http"));
var _cors = _interopRequireDefault(require("cors"));
var _helmet = _interopRequireDefault(require("helmet"));
var _socket = require("socket.io");
var _mongoose = _interopRequireDefault(require("mongoose"));
var _morgan = _interopRequireDefault(require("morgan"));
var _middlewares = require("./middlewares");
var _appRouter = _interopRequireDefault(require("./api/appRouter"));
var _chatInterface = _interopRequireDefault(require("./api/chatApp/chatInterface"));
_dotenv.default.config();

// Setting up express & must use middleware
var app = (0, _express.default)();
app.use((0, _cors.default)());
app.use((0, _morgan.default)("tiny"));
app.use(_express.default.json());
app.use(_express.default.urlencoded({
  extended: true
}));
app.set('trust proxy', 1); // When using something like nginx or apache as a proxy
app.use((0, _helmet.default)({
  contentSecurityPolicy: {
    directives: {
      "default-src": ["'self'", "ws:", "*.bootstrapcdn.com", "*.googleapis.com", "*.gstatic.com"],
      "script-src": ["'self'", "*.bootstrapcdn.com", "*.cloudflare.com", "*.jquery.com", "*.googleapis.com"],
      "img-src": ["'self'", "data:", "blob:", "*.w3.org"]
    }
  }
})); // Adds extra security

// Custom Middleware
// app.use(notFound)
app.use(_middlewares.errorHandler);
app.use('/static', _express.default.static(__dirname + '/../build/static'));
app.use('/public', _express.default.static(__dirname + '/../build/'));
app.use('/api', _appRouter.default);

// Basic Routing
app.get('/robots.txt', function (req, res) {
  return res.sendFile('robots.txt', {
    root: __dirname
  });
});
app.get('*', function (req, res) {
  return res.sendFile('index.html', {
    root: __dirname + '/../build/'
  });
});
_mongoose.default.set("strictQuery", false).connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(function () {
  console.log("Connected to DB");
}).catch(function (err) {
  return console.log(err);
});

// Setting up node js server
var port = process.env.PORT || 3003;
var httpServer = _http.default.createServer(app);
var io = new _socket.Server(httpServer, {
  transports: ["polling"],
  cors: {
    origin: "*"
  }
});
io.on('connection', function (socket) {
  console.log("A user is connected");
  console.log(socket.id);
  _chatInterface.default.register(io, socket);
});
httpServer.listen(port, function () {
  console.log("Server running on port ".concat(port, "..."));
});