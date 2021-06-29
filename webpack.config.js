const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { VueLoaderPlugin } = require('vue-loader');
const MiniCssExtractPugin = require('mini-css-extract-plugin');
module.exports = {
  mode: process.env.NODE_ENV,
  entry: './src/main.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js',
    publicPath: '/'
  },
  devServer: {
    open: true,
    port: 8081,
    contentBase: path.resolve(__dirname, 'dist'),
    hot: true
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '/src')
    }
  },
  // 配置loaders的
  module: {
    rules: [
      {
        test: /\.vue/,
        use: [
          { loader: 'vue-loader' }
        ]
      },
      {
        test: /\.css/,
        use:[MiniCssExtractPugin.loader, 'css-loader']
      },
      {
        test: /\.less/,
        use:[MiniCssExtractPugin.loader, 'css-loader','less-loader']
      },
      { //字体文件
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader',
        options: {
          name: "[name].[ext]",
          outputPath: './fonts',
          limit: false
        }
      },
      {
        test: /\.js$/,
        exclude: '/node_modules/',
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      title: '项目模板',
      template: './public/index.html',
      chunks: ['main'], // 引入js的name
      hash: true,
      minify:{
				collapseWhitespace:true,
				removeAttributeQuotes:true
			}
    }),
    new MiniCssExtractPugin({
      filename: 'css/[name].css'
    })
  ]
}