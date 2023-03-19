const path = require('path')
require('dotenv').config()

class ServiceController {
  index(req, res) {
    if (process.env.MODE === 'production') {
      res.sendFile(path.join(__dirname, 'html/404.html'))
    } else if (process.env.MODE === 'development') {
      res.render('404.hbs')
    }
  }
}

module.exports = new ServiceController()
