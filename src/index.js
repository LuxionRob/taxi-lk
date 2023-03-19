const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')
const path = require('path')
const cors = require('cors')
const app = express()
const route = require('./routes')
const port = process.env.PORT || 8080

app.use(express.static(path.join(__dirname, 'static')))
app.use(helmet())
app.use(cors())
app.use(morgan('combined'))

// Route init
route(app)

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})
