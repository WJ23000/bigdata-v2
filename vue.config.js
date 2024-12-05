const CompressionWebpackPlugin = require("compression-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const productionGzipExtensions = ["js", "css"];
const CopyWebpackPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");

console.log("process.env", process.env);

module.exports = {
  publicPath: "./",
  lintOnSave: false, // 关闭语法检查
  configureWebpack: {
    plugins: [
      // Copy Cesium Assets, Widgets, and Workers to a static directory
      new CopyWebpackPlugin({
        patterns: [
          {
            from: "node_modules/cesium/Build/Cesium/Workers",
            to: "Workers"
          },
          {
            from: "node_modules/cesium/Build/Cesium/ThirdParty",
            to: "ThirdParty"
          },
          {
            from: "node_modules/cesium/Build/Cesium/Assets",
            to: "Assets"
          },
          {
            from: "node_modules/cesium/Build/Cesium/Widgets",
            to: "Widgets"
          }
        ]
      }),
      new webpack.DefinePlugin({
        // Define relative base path in cesium for loading assets
        CESIUM_BASE_URL: JSON.stringify("")
      })
    ],
    module: {
      // Removes these errors: "Critical dependency: require function is used in a way in which dependencies cannot be statically extracted"
      // https://github.com/AnalyticalGraphicsInc/cesium-webpack-example/issues/6
      unknownContextCritical: false,
      unknownContextRegExp: /\/cesium\/cesium\/Source\/Core\/buildModuleUrl\.js/,
      rules: [
        {
          test: /\.mjs$/,
          include: /node_modules/,
          type: "javascript/auto"
        }
      ]
    }
  },
  chainWebpack: config => {
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

    // config.plugin("bundleAnalyzerPlugin").use(new BundleAnalyzerPlugin()); // 解开可查看项目打包分布情况
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
