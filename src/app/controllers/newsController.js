const newsData = require('../db/news')
class NewsController {
  index(req, res) {
    res.render('tin-tuc.hbs', { news: newsData })
  }
}

module.exports = new NewsController()
