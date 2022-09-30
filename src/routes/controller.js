const express = require('express')
const router = express.Router()
const controller = require('../app/controllers')

router.use('/', controller.index)

module.exports = router
