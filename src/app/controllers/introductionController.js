const path = require('path')
class IntroductionController {
  index(req, res) {
    if (process.env.MODE === 'production') {
      res.sendFile(path.join(__dirname, 'html/gioi-thieu.html'))
    } else if (process.env.MODE === 'development') {
      res.render('gioi-thieu.hbs')
    }
  }
}

module.exports = new IntroductionController()
