// NOTE: DON'T USE THIS FOR ACTUAL SERVERS WITH BACKEND!
// HAVE ACTUAL PATHS!
const express = require("express");
const app = express();
const minify = require('express-minify');
const uglify = require('uglify-js');
const chatRoutes = require('/opt/render/project/src/routes/built/chatRoutes.js');
const hammyRoutes = require('/opt/render/project/src/routes/built/hammyRoutes.js');
const helloRoutes = require('/opt/render/project/src/routes/built/helloRoutes.js');
const homeRoutes = require('/opt/render/project/src/routes/built/homeRoutes.js');
const loginRoutes = require('/opt/render/project/src/routes/built/loginRoutes.js');
const logoutRoutes = require('/opt/render/project/src/routes/built/logoutRoutes.js');
const offlineRoutes = require('/opt/render/project/src/routes/built/offlineRoutes.js');
const policiesRoutes = require('/opt/render/project/src/routes/built/policiesRoutes.js');
const productsRoutes = require('/opt/render/project/src/routes/built/productsRoutes.js');
const scriptManagersRoutes = require('/opt/render/project/src/routes/built/scriptManagersRoutes.js');
const searchleRoutes = require('/opt/render/project/src/routes/built/searchleRoutes.js');
const serviceWorkersRoutes = require('/opt/render/project/src/routes/built/serviceWorkersRoutes.js');
const setCookieRoutes = require('/opt/render/project/src/routes/built/setCookieRoutes.js');
const signupRoutes = require('/opt/render/project/src/routes/built/signupRoutes.js');
const apiRoutes = require('/opt/render/project/src/routes/built/apiRoutes.js');
const authRoutes = require('/opt/render/project/src/routes/built/authRoutes.js');
const { rateLimit } = require('express-rate-limit');
const requestIP = require('request-ip');
const cookie = require('cookie');
const fetch = require('@replit/node-fetch');
var uuidGenerator = require('uuid').v4;
var server = require('http').createServer(app);
var io = require('socket.io')(server);
const cors = require('express-cors');
var minifyHTML = require('express-minify-html')
const helmet = require('helmet')

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

const limiter = rateLimit({
	windowMs: 1 * 60 * 1000, // 15 minutes
	max: 500, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
	message: "Oops, too many requests",
})

// Apply the rate limiting middleware to all requests
app.use(limiter)

app.use(helmet())

app.use((req, res, next) => {
 //  let ipAddress = requestIP.getClientIp(req);
	// console.log(ipAddress)
	// console.dir(req.hostname)
	next();
})
	
var myErrorHandler = function (errorInfo, callback) {
  console.log(errorInfo);
  // below is the default implementation (minify.Minifier.defaultErrorHandler)
  if (errorInfo.stage === 'compile') {
	 callback(errorInfo.error, JSON.stringify(errorInfo.error));
	 return;
  }
  callback(errorInfo.error, errorInfo.body);
};

app.use(minify({
  cache: '/opt/render/project/src/.minification-cache',
  uglifyJsModule: uglify,
  errorHandler: myErrorHandler,
  jsMatch: /javascript/,
  cssMatch: /css/,
  jsonMatch: /json/,
  sassMatch: /scss/,
  lessMatch: /less/,
  stylusMatch: /stylus/,
  coffeeScriptMatch: /coffeescript/,
}));

app.use(minifyHTML({
    override:      true,
    exception_url: false,
    htmlMinifier: {
        removeComments:            true,
        collapseWhitespace:        true,
        collapseBooleanAttributes: true,
        removeAttributeQuotes:     true,
        removeEmptyAttributes:     true,
        minifyJS:                  true
    }
}));

// app.use('/', firstLevelRoutes)
// Old Code
// Keep the old code running in case the server restarts
// try {
// 	/*app.use(express.static(__dirname + "/public"), (_, res, next) => {
//		res.status(404)
//		res.sendFile(__dirname + "/errors/404/404.html");
// 	});*//*
// 	app.get('*', function routeHandler(req, res) {
// 		res.status(501).sendFile(__dirname + '/errors/maintenence/index.html')
// 	});*/
// 	app.get('*', function routeHandler(req, res) {
// 		res.status(501).sendFile(__dirname + '/errors/newDomain/index.html')
// 	});
// 	app.listen(443);
// // }
// catch (err) {
// 	console.log(err)
// }

const adminNamespace = io.of('/test/admin');

adminNamespace.on('connection', (socket) => {
  console.log('[H&C Server #1] [Socket Connection] New Admin Socket Connection On Path /admin');

  // Handle admin-specific events
  socket.on('adminEvent', (data) => {
    // Handle admin event logic
  });

	socket.on('broadcastReload', function(){
		io.emit('reload')
	})
	
  socket.on('disconnect', () => {
    console.log('[H&C Server #1] [Socket Connection] Admin Socket Disconnected On Path /admin');
  });
});


io.on('connection', function(socket){
	console.log('[H&C Server #1] [Socket Connection] New Socket Connection');

	// Emit a message to the sender
  socket.emit('connected', 'Successfully Connected to socket!');
	
  var cookies = cookie.parse(socket.handshake.headers.cookie);   

	fetch('https://login-finished.wumpus-dev.repl.co/addSession', {
		method: "POST",
		headers: {
			authorization: "Bearer " + cookies.connectionToken + ""
		}
	});
	
	// Listen to custom event
	socket.on('customEvent', function(data){
		console.log('Custom event triggered with data:', data);
	});
	
	// Disconnect event
	socket.on('disconnect', function(){
		console.log("[H&C Server #1] [Socket Connection] Socket Disconnected")
		fetch('https://login-finished.wumpus-dev.repl.co/revokeSession', {
			method: "POST",
			headers: {
				authorization: "Bearer " + cookies.connectionToken + ""
			}
		});
	});
});
app.use('/socket.io/', cors({ allowedOrigins: [ 'github.com', 'google.com' ] }));
app.use('/test', express.static('/opt/render/project/src/public'))
app.use('/api', apiRoutes)
// app.use('/auth', authRoutes)
app.use('/chat', chatRoutes)
app.use('/hammy', hammyRoutes)
app.use('/hello', helloRoutes)
app.use('/', homeRoutes)
// app.use('/login', loginRoutes)
// app.use('/logout', logoutRoutes)
app.use('/offline', offlineRoutes)
app.use('/policies', policiesRoutes)
app.use('/products', productsRoutes)
app.use('/scriptManagers', scriptManagersRoutes)
app.use('/searchle', searchleRoutes)
app.use('/serviceWorkers', serviceWorkersRoutes)
app.use('/setCookie', setCookieRoutes)
app.use('/signup', signupRoutes)
app.get('*', function routeHandler(req, res) {
	res.status(404).sendFile('/opt/render/project/src/build/errors/404/404.html')
});
app.listen(443)
server.listen(3000, function(){
	// console.clear()
	console.log('[H&C Server #1] [Message] Server Started At', Date.now(), '!')
});