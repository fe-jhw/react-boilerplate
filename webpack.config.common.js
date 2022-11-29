const path = require("path")
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const childProcess = require("child_process")

module.exports = {
  entry: ['./src/index.js'],
  module: {
    rules: [
      {
        test: /\.(js|mjs|jsx)$/,
        use: ['babel-loader'],
      },
      {
        test: /\.(ico|png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
        },
      },
      {
        test: /\.png$/,
        loader: 'url-loader',
        options: {
          publicPath: './dist/',
          name: '[name].[ext]?[hash]',
          limit: 5000
        }
      }
    ]
  },

  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, "src/"),
    }
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'public/index.html',
    }),
    new webpack.BannerPlugin({
      banner: `
        Build Date :: ${new Date().toLocaleString()}
        Commit Version :: ${childProcess.execSync("git rev-parse --short HEAD")}
        Auth.name :: ${childProcess.execSync("git config user.name")}
        Auth.email :: ${childProcess.execSync("git config user.email")}
      `
    }),
    new CleanWebpackPlugin(),
  ],

  devtool: 'cheap-eval-source-map',
}