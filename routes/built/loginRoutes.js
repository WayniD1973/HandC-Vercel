const express = require('express')
const router = express.Router()

// middleware that is specific to this router
router.use((req, res, next) => {
	console.log("[H&C Server #1] [Request] Request At ", Date.now());
	next()
})
// define the login page route
var options = {}
router.get('/', (req, res) => {
	res.render('/home/runner/HandC/build/public/login/index.html')
})
// define the about route
router.get('/:file.js', (req, res) => {
		res.sendFile('/home/runner/HandC/build/public/login/' + req.params.file + '.js', options, function (err) {
    if (err) {
      res.render('/home/runner/HandC/build/errors/404/404.html')
    } else {}
  })
})

router.get('/:file.css', (req, res) => {
		res.sendFile('/home/runner/HandC/build/public/login/' + req.params.file + '.css', options, function (err) {
    if (err) {
      res.sendFile('/home/runner/HandC/build/errors/404/404.html')
    } else {}
  })
})

router.get('/:file.png', (req, res) => {
		res.sendFile('/home/runner/HandC/build/public/login/' + req.params.file + '.png', options, function (err) {
    if (err) {
      res.sendFile('/home/runner/HandC/build/errors/404/404.html')
    } else {}
  })
})

router.get('/:file.svg', (req, res) => {
		res.sendFile('/home/runner/HandC/build/public/login/' + req.params.file + '.svg', options, function (err) {
    if (err) {
      res.sendFile('/home/runner/HandC/build/errors/404/404.html')
    } else {}
  })
})

router.get('/:file.txt', (req, res) => {
		res.sendFile('/home/runner/HandC/build/public/login/' + req.params.file + '.txt', options, function (err) {
    if (err) {
      res.sendFile('/home/runner/HandC/build/errors/404/404.html')
    } else {}
  })
})

router.get('/:file.html', (req, res) => {
		res.sendFile('/home/runner/HandC/build/public/login/' + req.params.file + '.html', options, function (err) {
    if (err) {
      res.sendFile('/home/runner/HandC/build/errors/404/404.html')
    } else {}
  })
})
module.exports = router