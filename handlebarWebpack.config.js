const CopyPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const fs = require('fs')
const url = require('url')
const express = require('express')
const exphbs = require('express-handlebars')
const app = express()

const handlebasInstance = exphbs.create({
  defaultLayout: 'mainLayout',
  // Specify helpers which are only registered on this instance.
  helpers,
})

app.engine('handlebars', handlebasInstance.engine)
app.set('view engine', 'handlebars')
app.use('/assets', express.static('assets'))

const basePath = path.resolve(__dirname, './views')

function generateHtmlPlugins(templateDir) {
  const itemList = fs.readdirSync(templateDir)
  return itemList.flatMap((item) => {
    const [name, extension] = item.split('.')
    if (extension == 'handlebars') {
      const templatePath = path.resolve(templateDir, item)
      const outputPath = path.resolve(templateDir, name + '.html')
      const outputName = path.relative(basePath, outputPath)
      return new HtmlWebpackPlugin({
        filename: outputName,
        inject: false,
        template: templatePath,
      })
    } else {
      return []
    }
  })
}

const siteHtmlPlugins = generateHtmlPlugins(basePath)

function contextCallback(resourcePath, view) {
  var context = {}
  if (view.includes('documentation/')) {
    context.layout = 'documentationLayout'
  }
  return context
}
