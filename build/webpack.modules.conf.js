var path = require('path')
var fs = require('fs')
var config = require('../config')
var utils = require('./utils')
var webpack = require('webpack')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

//  ww:只考虑我的module
var regName = new RegExp(/button|recycle-list|index-list|background|act-wheel|act-rule|act-prize|general-text/, "gi")


var modules = {}
var cPath = path.join(__dirname, '../src/modules')
var files = fs.readdirSync(cPath)
//  ww:改造
// if (files) {
//   files.forEach(function (name) {
//     var p = path.join(cPath, name)
//     if (fs.statSync(p).isDirectory()) {
//       modules[name] = p
//     }
//   })
// }
// console.log('ww============================')
// console.log(files)
if (files) {
  files.forEach(function (name) {
    if(/button|recycle-list|index-list|background|act-wheel|act-rule|act-prize|general-text/gi.test(name)){
      // console.log('ww============================')
      // console.log(name)
      var p = path.join(cPath, name)
      if (fs.statSync(p).isDirectory()) {
        modules[name] = p
      }
    }
  })
}

// console.log('------------ww:--------------')
/*console.log(JSON.stringify(utils.styleLoaders({
  sourceMap: config.build.productionSourceMap,
  extract: {
    publicPath: '../'
  }
})))*/
var webpackConfig = merge(baseWebpackConfig, {
  entry: modules,
  module: {
    rules: utils.styleLoaders({
      sourceMap: config.build.productionSourceMap,
      extract: {
        publicPath: '../'
      }
    })
  },
  devtool: config.build.productionSourceMap ? '#source-map' : false,
  output: {
    path: config.build.assetsRoot,
    filename: utils.assetsPath('[name]/index.js'),
    library: ['cube', '[name]'],
    libraryTarget: 'umd'
  },
  plugins: [
    // extract css into its own file
    new ExtractTextPlugin(utils.assetsPath('[name]/style.css'))
  ]
})
// console.log('------------ww:--------------')
// console.log(webpackConfig.module.rules)

module.exports = webpackConfig
