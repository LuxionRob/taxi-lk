class NewsDetailController {
  index(req, res) {
    res.render('tin-tuc-chi-tiet.hbs')
  }
}

module.exports = new NewsDetailController()
