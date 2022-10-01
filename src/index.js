const express = require('express')
const morgan = require('morgan')
const { create } = require('express-handlebars')
const helmet = require('helmet')
const path = require('path')
const cors = require('cors')
const app = express()
const route = require('./routes')
const http = require('http')
const fs = require('fs')
require('dotenv').config()
const port = process.env.PORT || 3000
const hostname = process.env.HOST_ENV || 'localhost'

app.use(express.static(path.join(process.cwd(), 'dist')))
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
app.set('views', path.join(__dirname, 'resources/views/pages'))

// Route init
route(app)

app.listen(3000, hostname, () => {
  console.log(`Server is listening at http://${hostname}:${port}`)
})
