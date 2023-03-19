const loaderUtils = require('loader-utils')
const validateOptions = require('schema-utils')
const path = require('path')
const express = require('express')
const exphbs = require('express-handlebars')

module.exports = function (content) {
  const options = loaderUtils.getOptions(this)
  const app = options.app
  const contextCallback = options.contextCallback
  const view = path.relative(options.basePath, this.resourcePath)
  const context = contextCallback(this.resourcePath, view)

  var loaderAsyncCallback = this.async()
  app.render(view, context, function (err, html) {
    if (err) {
      return loaderAsyncCallback(err)
    }

    const slug =
      '// Module\n' + 'var code = ' + JSON.stringify(html) + ';\n' + '// Exports\n' + 'module.exports = code;'

    loaderAsyncCallback(null, slug)
  })
}
