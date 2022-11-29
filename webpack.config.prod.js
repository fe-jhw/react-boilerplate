const path = require("path");
const { merge } = require('webpack-merge');
const common = require('./webpack.config.common.js');
const Dotenv = require("dotenv-webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = merge(common, {
    mode: 'production',

    module: {
      rules: [
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader'],
        },
      ]
    },

    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
        publicPath: './',
    },

    plugins: [
        new Dotenv({
            path: path.resolve(__dirname, "./.env.prod"),
        }),
        new MiniCssExtractPlugin({ filename: "[name].css" })
    ],
});