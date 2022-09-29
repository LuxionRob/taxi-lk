const path = require('path')
const fs = require('fs')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const WorkboxWebpackPlugin = require('workbox-webpack-plugin')
const nodeExternals = require('webpack-node-externals')
const express = require('express')
const { create } = require('express-handlebars')
const app = express()
require('dotenv').config()

const isProduction = process.env.NODE_ENV == 'production'
const hostname = process.env.HOST_ENV

const stylesHandler = isProduction ? MiniCssExtractPlugin.loader : 'style-loader'

const hbs = create({
  extname: '.hbs',
  layoutsDir: path.join(__dirname, 'src/resources/views/layouts'),
  partialsDir: [path.join(__dirname, 'src/resources/views/partials')],
})
app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'src/resources/views/pages'))

const basePath = path.join(__dirname, 'src/resources/views/pages')

function generateHtmlPlugins(templateDir) {
  const itemList = fs.readdirSync(templateDir)
  return itemList.flatMap((item) => {
    const [name, extension] = item.split('.')
    if (extension == 'hbs') {
      const templatePath = path.resolve(templateDir, item)
      const outputPath = path.resolve(templateDir, 'html', name + '.html')
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

const config = {
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  devServer: {
    open: true,
    host: hostname,
  },
  resolveLoader: {
    modules: ['node_modules', path.resolve(__dirname, 'loaders')],
  },
  target: 'node', // in order to ignore built-in modules like path, fs, etc.
  externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: 'src/public/css', to: 'assets/css' },
        { from: 'src/public/img', to: 'assets/images' },
        { from: 'src/public/icons', to: 'assets/icons' },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.hbs$/i,
        loader: 'express-handlebar-loader',
        options: {
          app: app,
          basePath: basePath,
          contextCallback: contextCallback,
        },
      },
      {
        test: /\.(js|jsx)$/i,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/i,
        use: [stylesHandler, 'postcss-loader', 'css-loader'],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: 'asset',
      },
    ],
  },
}

module.exports = () => {
  config.plugins = config.plugins.concat(siteHtmlPlugins)
  if (isProduction) {
    config.mode = 'production'

    config.plugins.push(
      new MiniCssExtractPlugin({
        filename: isProduction ? '[name].[contenthash].css' : '[name].css',
        chunkFilename: '[id].[hash].css',
      }),
    )

    config.plugins.push(new WorkboxWebpackPlugin.GenerateSW())
  } else {
    config.mode = 'development'
  }
  return config
}
