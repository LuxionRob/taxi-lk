const path = require('path')
require('dotenv').config()

class ServiceController {
  index(req, res) {
    res.render('lien-he.hbs')
  }
}

module.exports = new ServiceController()
