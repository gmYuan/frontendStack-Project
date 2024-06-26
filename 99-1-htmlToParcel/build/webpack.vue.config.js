const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const { CleanWebpackPlugin }  = require('clean-webpack-plugin')
const { VueLoaderPlugin  } = require('vue-loader')

module.exports = {
  mode: "development",
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    port: 3005,
    hot: true,
  },
  // 配置JS和CSS压缩 + JS分包构建
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin(),
      new CssMinimizerPlugin()
    ],
    splitChunks: {
      chunks: 'all',
      minSize: 30 * 1024,
      name: 'commons',
      cacheGroups: {
        jquery: {
          test: /jquery\.js/,
          name: 'jquery',
          chunks: 'all',
        },
        lodash: {
          test: /lodash-es/,
          name: 'lodash-es',
          chunks: 'all',
        },
      },
    }
  },

  // entry可支持配置多入口
  entry: {
    main: path.resolve(__dirname, "../src/main.js"),
  },
  output: {
    path: path.resolve(__dirname, "../dist"),
    // [name]对应entry里定义的 输出文件名
    filename: "js/[name].js",
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
      // 识别ejs文件
      {
        test: /\.ejs/,
        loader: 'ejs-loader',
        options: {
          esModule: false,
        }
      },
        // 识别vue文件
        {
          test: /\.vue$/,
          loader: 'vue-loader',
        },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      // 定义打包后的 dist里的入口html文件
      filename: "index.html",
      // 定义打包参照的 模板文件
      template: path.resolve(__dirname, "../public/index.html"),
      //  "./src/index.html",
      chunks: ["main"],
    }),
    new webpack.ProvidePlugin({
      // 定义全局变量，如第三方库的别名
      $: "jquery",
      jQuery: "jquery",
    }),
    new CopyWebpackPlugin({
      patterns: [{
        from: path.resolve(__dirname, '../src/img'),
        to: path.resolve(__dirname, '../dist/img')
      }]
    }),
    new MiniCssExtractPlugin({
      filename: 'style/[name].css',
      chunkFilename: 'style/[name].chunk.css'
    }),
    
    new CleanWebpackPlugin(),
    new VueLoaderPlugin()
  ],
};
