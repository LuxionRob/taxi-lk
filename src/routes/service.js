const express = require('express')
const router = express.Router()
const serviceController = require('../app/controllers/serviceController')

router.use('/', serviceController.index)

module.exports = router
