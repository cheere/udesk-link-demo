const isProd = process.env.NODE_ENV === "production";
module.exports = {
  publicPath: isProd ? "./" : "/",
  // 线上代码 不让看源码
  productionSourceMap: isProd ? false : true,
}