const isProd = process.env.NODE_ENV === "production";
const isPage = process.env.VUE_APP_ENV === "page";
console.log('isProd=>', isProd)
console.log('isPage=>', isPage)

module.exports = {
  publicPath: isPage ? "./udesk-link-demo/" : "./",
  // 线上代码 不让看源码
  productionSourceMap: isProd ? false : true,

  configureWebpack: {
    output: {
      filename: `js/[name].[chunkhash].js`,
      chunkFilename: `js/[name].[chunkhash].js`
    },
  }
}