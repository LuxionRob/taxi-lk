const express = require('express')
const router = express.Router()
const newsDetailController = require('../app/controllers/newsDetailController')

router.use('/', newsDetailController.index)

module.exports = router
