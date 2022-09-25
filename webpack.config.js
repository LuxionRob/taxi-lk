const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const WorkboxWebpackPlugin = require('workbox-webpack-plugin')
const nodeExternals = require('webpack-node-externals')

const isProduction = process.env.NODE_ENV == 'production'
const hostname = process.env.HOST_ENV

const stylesHandler = isProduction ? MiniCssExtractPlugin.loader : 'style-loader'

const config = {
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    open: true,
    host: hostname,
  },
  target: 'node', // in order to ignore built-in modules like path, fs, etc.
  externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/resources/views/layouts/main.hbs',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.hbs$/,
        loader: 'handlebars-loader',
        options: {
          helperDirs: path.resolve(__dirname, '/src/resources/views'),
        },
      },
      {
        test: /\.(js|jsx)$/i,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/i,
        use: [stylesHandler, 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: 'asset',
      },
    ],
  },
}

module.exports = () => {
  if (isProduction) {
    config.mode = 'production'

    config.plugins.push(new MiniCssExtractPlugin())

    config.plugins.push(new WorkboxWebpackPlugin.GenerateSW())
  } else {
    config.mode = 'development'
  }
  return config
}
