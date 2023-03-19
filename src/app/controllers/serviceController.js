const path = require('path')
class ServiceController {
  index(req, res) {
    res.render('dich-vu.hbs')
  }
}

module.exports = new ServiceController()
