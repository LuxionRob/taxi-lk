const fs = require('fs')
const path = require('path')

class Controller {
  index(req, res) {
    // res.writeHead(200, { 'Content-type': 'text/css' })
    // var fileContents = fs.readFileSync(path.join(process.cwd(), '/css/app.css'), {
    //   encoding: 'utf8',
    // })
    // res.write(fileContents)
    // res.end()
  }
}

module.exports = new Controller()
