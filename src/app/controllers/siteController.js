const path = require('path')
class SiteController {
  index(req, res) {
    res.sendFile(path.join(__dirname, 'html/home.html'))
  }
  sendSitemap(req, res) {
    res.sendFile(path.join(__dirname, 'sitemap.xml'))
  }
}

module.exports = new SiteController()
