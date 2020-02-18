// const localServer = {
//   path: "localhost/",
//   port: 10000
// };

const path = require("path");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
  entry: {
    app: "./src/assets/js/app.js"
  },
  output: {
    filename: "assets/js/[name].js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader"]
      }
    ]
  },
  plugins: [
    // new BrowserSyncPlugin({
    //   proxy: localServer.path,
    //   port: localServer.port,
    //   files: [],
    //   ghostMode: {
    //     clicks: false,
    //     location: false,
    //     forms: false,
    //     scroll: false
    //   },
    //   injectChanges: true,
    //   logFileChanges: true,
    //   logLevel: "debug",
    //   logPrefix: "wepback",
    //   notify: true,
    //   reloadDelay: 0
    // }),
    new HtmlWebpackPlugin({
      inject: true,
      hash: false,
      filename: "index.html",
      template: path.resolve(__dirname, "src", "index.html")
    }),
    new MiniCssExtractPlugin({
      filename: "assets/css/[name].css"
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, "src/assets/", "images"),
        to: path.resolve(__dirname, "dist/assets/", "images"),
        toType: "dir"
      }
    ])
  ],

  devServer: {
    contentBase: "dist",
    open: true,
    disableHostCheck: true
  }
};

module.exports = config;
