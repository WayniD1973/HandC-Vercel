const express = require('express')
const router = express.Router()

router.use((req, res, next) => {
  console.log("[H&C Server #1] [Request] Request At ", Date.now());
  next()
})

var options = {}
router.get('/', (req, res) => {
  res.render('/home/runner/HandC/build/public/offline/index.html')
})

module.exports = router