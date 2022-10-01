const path = require('path')
class PopularRouteController {
  index(req, res) {
    res.sendFile(path.join(__dirname, 'html/tuyen-duong-pho-bien.html'))
  }
}

module.exports = new PopularRouteController()
