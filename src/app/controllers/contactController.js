const path = require('path')
require('dotenv').config()

class ServiceController {
  index(req, res) {
    if (process.env.MODE === 'production') {
      res.sendFile(path.join(__dirname, 'html/lien-he.html'))
    } else if (process.env.MODE === 'development') {
      res.render('lien-he.hbs')
    }
  }
}

module.exports = new ServiceController()
