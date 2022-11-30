const path = require("path")
const { merge } = require('webpack-merge')
const common = require('./webpack.config.common.js')

const Dotenv = require('dotenv-webpack')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

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
    port: 3000,
    hot: true,
  },

  plugins: [
    new Dotenv({
      path: path.resolve(__dirname, "./.env.dev"),
    }),
    new ReactRefreshWebpackPlugin(),
  ]
})