'use strict'

const userService = require('../services/userService')

const controller = {
  get: (req, res, next) => {
    const users = userService.getUsers()
    res.render('users', { title: 'Users', data: users })
  }
}

module.exports = controller
