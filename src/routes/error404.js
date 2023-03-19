const express = require('express')
const router = express.Router()
const errorController = require('../app/controllers/errorController')

router.use('/', errorController.index)

module.exports = router
