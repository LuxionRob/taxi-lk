const newsDetail = require('../db/newsDetail')
const convertToSlug = require('../../utils/slug')
class NewsDetailController {
  index(req, res) {
    newsDetail.some((news, index) => {
      if (convertToSlug(news.title) == req.originalUrl.split('/tin-tuc/')[1]) {
        res.render('tin-tuc-chi-tiet.hbs', { newsDetail: newsDetail[index] })
        return true
      }
    })
  }
}

module.exports = new NewsDetailController()
