const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')
const path = require('path')
const cors = require('cors')
const { create } = require('express-handlebars')
const app = express()
require('dotenv').config()
const route = require('./routes')
const port = process.env.PORT || 8080

app.use(express.static(path.join(__dirname, 'static')))
app.use(helmet())
app.use(cors())
app.use(morgan('combined'))
const hbs = create({
  partialsDir: path.join(__dirname, 'static/resources/views/partials'),
  extname: '.hbs',
  layoutsDir: path.join(__dirname, 'static/resources/views/layouts'),
})
app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'static/resources/views/pages'))
// Route init
route(app)

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})
