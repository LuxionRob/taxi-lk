const path = require('path')
class ServiceController {
  index(req, res) {
    res.sendFile(path.join(__dirname, 'html/dich-vu.html'))
  }
}

module.exports = new ServiceController()
