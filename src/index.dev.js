const express = require('express')
const { create } = require('express-handlebars')
const morgan = require('morgan')
const helmet = require('helmet')
const path = require('path')
const cors = require('cors')
const app = express()
const route = require('./routes')
require('dotenv').config()
const port = process.env.PORT || 8080

const webpack = require('webpack')
const config = require(path.join(process.cwd(), 'webpack.config'))
const compiler = webpack(config())
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
app.use(express.static(path.join(__dirname, 'public')))
app.use(helmet())
app.use(cors())
app.use(morgan('combined'))

app.use(
  webpackDevMiddleware(compiler, {
    publicPath: 'auto',
  }),
)
app.use(
  webpackHotMiddleware(compiler, {
    timeout: 1000,
  }),
)

const hbs = create({
  partialsDir: path.join(__dirname, 'resources/views/partials'),
  extname: '.hbs',
  layoutsDir: path.join(__dirname, 'resources/views/layouts'),
})
app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources/views/pages'))

// Route init
route(app)

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})
