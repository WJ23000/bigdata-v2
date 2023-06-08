const CompressionWebpackPlugin = require("compression-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const productionGzipExtensions = ["js", "css"];

console.log("process.env", process.env);

module.exports = {
  publicPath: "./",
  lintOnSave: false, // 关闭语法检查
  chainWebpack: (config) => {
    new CompressionWebpackPlugin({
      algorithm: "gzip",
      test: new RegExp("\\.(" + productionGzipExtensions.join("|") + ")$"),
      threshold: 10240,
      minRatio: 0.8
    });

    config.plugin("CompressionPlugin").use(
      new CompressionPlugin({
        test: /\.js$|\.png$|\.jpg$|\.mp4$|\.css/,
        threshold: 10240, // 大于10k进行压缩
        minRatio: 0.8, // 压缩率小于0.8才会压缩
        deleteOriginalAssets: false // 压缩后保留原文件
      })
    );

    // config.plugin("bundleAnalyzerPlugin").use(new BundleAnalyzerPlugin());
  },
  devServer: {
    disableHostCheck: true,
    port: "8080", // 端口号
    host: "0.0.0.0", // 本地和局域网
    https: false,
    open: false // 自动打浏览器
  },
  productionSourceMap: false // 生产环境是否生成sourceMap文件
};
