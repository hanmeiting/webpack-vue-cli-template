const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { VueLoaderPlugin } = require('vue-loader');
module.exports = {
  entry: './src/main.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  devServer: {
    open: true,
    port: 8081,
    contentBase: path.resolve(__dirname, 'dist'),
    hot: true
  },
  mode: 'development',
  // 配置loaders的
  module: {
    rules: [
      {
        test: /\.vue/,
        use: [
          { loader: 'vue-loader' }
        ]
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
    })
  ]
}