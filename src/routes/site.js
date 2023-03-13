const express = require('express')
const router = express.Router()
const siteController = require('../app/controllers/siteController')

router.use('/sitemap.xml', siteController.sendSitemap)
router.use('/', siteController.index)

module.exports = router
