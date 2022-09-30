const newsRouter = require('./news')
const siteRouter = require('./site')
const introductionRouter = require('./introduction')
const serviceRouter = require('./service')
const controller = require('./controller')

function route(app) {
  controller
  app.get('/gioi-thieu', introductionRouter)
  app.get('/dich-vu', serviceRouter)
  app.get('/tin-tuc', newsRouter)
  app.get('/', siteRouter)
}

module.exports = route
