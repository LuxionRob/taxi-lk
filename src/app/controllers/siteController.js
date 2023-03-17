const path = require('path')
class SiteController {
  index(req, res) {
    if (process.env.MODE === 'production') {
      res.sendFile(path.join(__dirname, 'html/home.html'))
    } else if (process.env.MODE === 'development') {
      res.render('home.hbs')
    }
  }
}

module.exports = new SiteController()
