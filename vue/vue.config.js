const webpack = require('webpack')
const {configBanner} = require('./config/util.config')

const isProd = process.env.NODE_ENV === "production";
const isPage = process.env.VUE_APP_ENV === "page";
console.log('isProd=>', isProd)
console.log('isPage=>', isPage)

module.exports = {
  publicPath: "./",
  productionSourceMap: isProd ? false : true,

  configureWebpack: {
    output: {
      filename: `js/[name].[hash].js`,
      chunkFilename: `js/[name].[hash].js`
    },

    plugins: [
      new webpack.BannerPlugin({banner: configBanner}),
    ],
  }
}