const path = require("path")
const { merge } = require('webpack-merge')
const common = require('./webpack.config.common.js')
const Dotenv = require('dotenv-webpack')

module.exports = merge(common, {
  mode: 'development',
  
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ]
  },

  devServer: {
    historyApiFallback: true,
    overlay: true,
    inline: true,
    port: 3000,
    hot: true,
    publicPath: '/',
  },

  plugins: [
    new Dotenv({
      path: path.resolve(__dirname, "./.env.dev"),
    }),
  ]
})