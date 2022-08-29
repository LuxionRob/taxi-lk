const express = require('express')  
const morgan = require('morgan')
const { create  } = require('express-handlebars')
const path = require('path')
const app = express()

const port = 3000
const hostname = '127.0.0.1'

app.use(express.static(path.join(__dirname, 'public')))
app.use(morgan('combined'))

const hbs = create({
  partialsDir   : path.join(__dirname, 'resources/views/partials'),
  extname       : '.hbs',
  layoutsDir    : path.join(__dirname, 'resources/views/layouts'),
})
app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources/views'))

app.get('/', (req, res) => {res.render('home')})
app.get('/news', (req, res) => {res.render('news')})


app.listen(3000, hostname, () => {
  console.log(`Server is listening at http://${hostname}:${port}`)
})