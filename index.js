const express = require('express')
const app = express()
const port = 3000
const hostname = '127.0.0.1'
app.get('/home', (req, res) => {
  var a = 1
  var b = 2
  var c = a + b
  return res.send("Hello world!")
})

app.listen(port, hostname, () => {

  console.log(`Server is running at http://${hostname}:${port}`)
});