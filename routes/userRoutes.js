var express = require('express')
var router = express.Router()
var userController = require('../controllers/userController')

/* GET users listing. */
router.get('/', (req, res, next) => {
  userController.get(req, res, next)
})

module.exports = router
