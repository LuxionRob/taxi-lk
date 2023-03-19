const path = require('path')
class SiteController {
  index(req, res) {
    res.render('home.hbs')
  }
}

module.exports = new SiteController()
