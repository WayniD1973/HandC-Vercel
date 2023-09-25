const express = require("express")
const router = express.Router()

router.use((req, res, next) => {
  console.log("[H&C Server #1] [Request] Request At ", Date.now());
  next()
})

var options = {}

router.get('/:file.js', (req, res) => {
		res.sendFile('/home/runner/HandC/build/public/serviceWorkers/' + req.params.file + '.js', options, function (err) {
    if (err) {
      res.sendFile('/home/runner/HandC/build/errors/404/404.html')
    } else {}
  })
})

module.exports = router