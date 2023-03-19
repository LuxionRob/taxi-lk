const path = require('path')
require('dotenv').config()

class ServiceController {
  index(req, res) {
    res.render('404.hbs', { layout: 'no-footer' })
  }
}

module.exports = new ServiceController()
