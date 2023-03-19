const newsRouter = require('./news')
const siteRouter = require('./site')
const introductionRouter = require('./introduction')
const serviceRouter = require('./service')
const popularRouteRouter = require('./popularRoute')
const contactRouter = require('./contact')
const controller = require('./controller')
const path = require('path')

function route(app) {
  controller
  app.get('/gioi-thieu', introductionRouter)
  app.get('/dich-vu', serviceRouter)
  app.get('/lien-he', contactRouter)
  app.get('/tin-tuc', newsRouter)
  app.get('/tuyen-duong-pho-bien', popularRouteRouter)
  app.get('/', siteRouter)
  app.get('/sitemap.xml', function (req, res) {
    res.sendFile(path.join(__dirname, 'sitemap.xml'))
  })
}

module.exports = route
