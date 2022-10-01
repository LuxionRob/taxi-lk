const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')
const path = require('path')
const cors = require('cors')
const app = express()
const route = require('./routes')
const http = require('http')
const fs = require('fs')
const port = process.env.PORT || 3000
const hostname = process.env.HOST_ENV || 'localhost'

app.use(express.static(path.join(process.cwd(), 'dist')))
app.use(helmet())
app.use(cors())
app.use(morgan('combined'))

// Route init
route(app)

app.listen(port, hostname, () => {
  console.log(`Server is listening at http://${hostname}:${port}`)
})
