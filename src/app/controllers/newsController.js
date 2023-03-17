const path = require('path')
class NewsController {
  index(req, res) {
    if (process.env.MODE === 'production') {
      res.sendFile(path.join(__dirname, 'html/tin-tuc.html'))
    } else if (process.env.MODE === 'development') {
      res.render('tin-tuc.hbs')
    }
  }
}

module.exports = new NewsController()
