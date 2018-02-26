'use strict'

const userDataService = require('./data-access/userDataService')

const svc = {
  getUsers: () => {
    return userDataService.get()
  }
}

module.exports = svc
