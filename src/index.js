const express = require('express')
const morgan = require('morgan')
const { create } = require('express-handlebars')
const helmet = require('helmet')
const path = require('path')
const cosr = require('cosr')
const app = express()
const route = require('./routes')

const port = 3000
const hostname = '127.0.0.1'

app.use(express.static(path.join(__dirname, 'public')))
app.use(helmet())
app.use(cors())
app.use(morgan('combined'))

const hbs = create({
  extname: '.hbs',
  layoutsDir: path.join(__dirname, 'resources/views/layouts'),
  partialsDir: [path.join(__dirname, 'resources/views/partials')],
})
app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources/views'))

// Route init
route(app)

app.listen(3000, hostname, () => {
  console.log(`Server is listening at http://${hostname}:${port}`)
})
