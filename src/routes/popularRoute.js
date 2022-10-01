const express = require('express')
const router = express.Router()
const popularRouteController = require('../app/controllers/popularRouteController')

router.use('/', popularRouteController.index)

module.exports = router
