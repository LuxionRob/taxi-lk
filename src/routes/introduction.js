const express = require('express')
const router = express.Router()
const introductionController = require('../app/controllers/introductionController')

router.use('/', introductionController.index)

module.exports = router
