const path = require('path')
class IntroductionController {
  index(req, res) {
    res.sendFile(path.join(__dirname, 'html/gioi-thieu.html'))
  }
}

module.exports = new IntroductionController()
