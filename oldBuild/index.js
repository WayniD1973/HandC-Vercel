// NOTE: DON'T USE THIS FOR ACTUAL SERVERS WITH BACKEND!
// HAVE ACTUAL PATHS!
const express = require("express");
const app = express();
const minify = require('express-minify');
const uglify = require('uglify-js');
const chatRoutes = require('/home/runner/HandC/routes/built/chatRoutes.js');
const hammyRoutes = require('/home/runner/HandC/routes/built/hammyRoutes.js');
const helloRoutes = require('/home/runner/HandC/routes/built/helloRoutes.js');
const homeRoutes = require('/home/runner/HandC/routes/built/homeRoutes.js');
const loginRoutes = require('/home/runner/HandC/routes/built/loginRoutes.js');
const logoutRoutes = require('/home/runner/HandC/routes/built/logoutRoutes.js');
const policiesRoutes = require('/home/runner/HandC/routes/built/policiesRoutes.js');
const productsRoutes = require('/home/runner/HandC/routes/built/productsRoutes.js');
const scriptManagersRoutes = require('/home/runner/HandC/routes/built/scriptManagersRoutes.js');
const searchleRoutes = require('/home/runner/HandC/routes/built/searchleRoutes.js');
const setCookieRoutes = require('/home/runner/HandC/routes/built/setCookieRoutes.js');
const signupRoutes = require('/home/runner/HandC/routes/built/signupRoutes.js');
const apiRoutes = require('/home/runner/HandC/routes/built/apiRoutes.js');
const { rateLimit } = require('express-rate-limit');
const requestIP = require('request-ip');

const limiter = rateLimit({
	windowMs: 1 * 60 * 1000, // 15 minutes
	max: 500, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
	message: "Oops, too many requests",
})

// Apply the rate limiting middleware to all requests
app.use(limiter)

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
  cache: '/home/runner/HandC/.minification-cache',
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
// app.use('/', firstLevelRoutes)
// Old Code
// Keep the old code running in case the server restarts
// try {
// 	/*app.use(express.static(__dirname + "/public"), (_, res, next) => {
//   	res.status(404)
//   	res.sendFile(__dirname + "/errors/404/404.html");
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
app.use('/test', express.static('/home/runner/HandC/public'))
app.use('/api', apiRoutes)
app.use('/chat', chatRoutes)
app.use('/hammy', hammyRoutes)
app.use('/hello', helloRoutes)
app.use('/', homeRoutes)
app.use('/login', loginRoutes)
app.use('/logout', logoutRoutes)
app.use('/policies', policiesRoutes)
app.use('/products', productsRoutes)
app.use('/scriptManagers', scriptManagersRoutes)
app.use('/searchle', searchleRoutes)
app.use('/setCookie', setCookieRoutes)
app.use('/signup', signupRoutes)
app.get('*', function routeHandler(req, res) {
	res.status(404).sendFile(__dirname + '/errors/404/404.html')
});
app.listen(443)