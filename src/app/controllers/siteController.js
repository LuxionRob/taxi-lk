const fs = require('fs')
const path = require('path')
class SiteController {
  index(req, res) {
    res.sendFile(path.join(__dirname, 'html/home.html'))
  }
}

module.exports = new SiteController()
