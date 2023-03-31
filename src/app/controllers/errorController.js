const path = require('path')

class ServiceController {
  index(req, res) {
    res.render('404.hbs', { layout: 'no-footer' })
  }
}

module.exports = new ServiceController()
