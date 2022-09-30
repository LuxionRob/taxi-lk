const fs = require('fs')
const path = require('path')
class NewsController {
  index(req, res) {
    res.sendFile(path.join(__dirname, 'html/tin-tuc.html'))
  }
}

module.exports = new NewsController()
