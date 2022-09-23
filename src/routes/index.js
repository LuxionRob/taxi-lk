const newsRouter = require('./news')
const siteRouter = require('./site')
const introductionRouter  = require('./introduction')
const serviceRouter  = require('./service')

function route(app) {
    app.get('/gioi-thieu',introductionRouter)
    app.get('/dich-vu', serviceRouter)
    app.get('/tin-tuc', newsRouter)
    app.get('/', siteRouter)
}

module.exports = route
