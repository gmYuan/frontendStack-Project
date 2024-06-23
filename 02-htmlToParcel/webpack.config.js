const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: "development",
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    port: 9000,
    hot: true,
  },

  // entry可支持配置多入口
  entry: {
    index: "./src/index.js",
    login: "./src/login.js",
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    // [name]对应entry里定义的 输出文件名
    filename: "[name].js",
  },
  module: {
    rules: [
      // 识别打包css文件
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      // 识别打包图片文件
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: "asset",
        parser: {
          // 小于8k则转换为base64，否则则单独输出为图片文件
          dataUrlCondition: {
            maxSize: 8 * 1024,
          },
        },
        generator: {
          // 输出文件路径和名称；加上hash是为了防止src不同文件夹下的同名图片，在打包到dist/images后同名覆盖
          filename: "images/[name].[hash:6][ext]",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      // 定义打包后的 dist里的入口html文件
      filename: "index.html",
      // 定义打包参照的 模板文件
      template: "./src/index.html",
      chunks: ["index"],
    }),
    new HtmlWebpackPlugin({
      // 定义打包后的 dist里的入口html文件，可以配置多个
      filename: "login.html",
      // 定义打包参照的 模板文件
      template: "./src/login.html",
      chunks: ["login"],
    }),
    new webpack.ProvidePlugin({
      // 定义全局变量，如第三方库的别名
      $: "jquery",
      jQuery: "jquery",
    }),
    new CopyWebpackPlugin({
      patterns: [{
        from: path.resolve(__dirname, './src/img'),
        to: path.resolve(__dirname, 'dist/img')
      }]
    }),
    new MiniCssExtractPlugin({
      filename: 'style/[name].css',
      chunkFilename: 'style/[name].chunk.css'
    })
  ],
};
