const path = require('path')
class ServiceController {
  index(req, res) {
    if (process.env.MODE === 'production') {
      res.sendFile(path.join(__dirname, 'html/dich-vu.html'))
    } else if (process.env.MODE === 'development') {
      res.render('dich-vu.hbs')
    }
  }
}

module.exports = new ServiceController()
