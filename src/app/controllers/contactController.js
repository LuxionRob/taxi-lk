const path = require('path')

class ServiceController {
  index(req, res) {
    res.render('lien-he.hbs')
  }
}

module.exports = new ServiceController()
