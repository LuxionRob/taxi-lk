const fs = require('fs')

class Controller {
  index(req, res) {
    res.writeHead(200, { 'Content-type': 'text/css' })
    var fileContents = fs.readFileSync('.assets/css/app.css', { encoding: 'utf8' })
    res.write(fileContents)
    res.end()
  }
}

module.exports = new Controller()
