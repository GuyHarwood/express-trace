var express = require('express')
var router = express.Router()
var userController = require('../controllers/userController')
const winston = require('winston')
const stackTrace = require('stack-trace')

const countAppLogicCalls = () => {
  const stack = stackTrace.get()
  // TODO filter out calls from services and data-access folders
  return stack.length
}

router.use((req, res, next) => {
  const appCallCount = countAppLogicCalls()
  res.set('X-App-Call-Count', appCallCount)
  next()
})

/* GET users listing. */
router.get('/', (req, res, next) => {
  userController.get(req, res, next)
})

/* POST empty */
router.post('/', (req, res, next) => {
  winston.info('POST to users')
  res.send('yo')
})

module.exports = router
