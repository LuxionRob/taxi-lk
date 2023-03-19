const path = require('path')
class PopularRouteController {
  index(req, res) {
    res.render('tuyen-duong-pho-bien.hbs')
  }
}

module.exports = new PopularRouteController()
