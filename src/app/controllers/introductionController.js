const path = require('path')
class IntroductionController {
  index(req, res) {
    res.render('gioi-thieu.hbs')
  }
}

module.exports = new IntroductionController()
