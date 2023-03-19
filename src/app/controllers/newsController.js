const path = require('path')
class NewsController {
  index(req, res) {
    res.render('tin-tuc.hbs')
  }
}

module.exports = new NewsController()
