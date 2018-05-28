const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

console.log(process.env.NODE_ENV)

module.exports = {
  entry: "./js/index.js",
  output: {
    path: path.resolve(__dirname, "/build"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["env"],
          },
        },
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader", // creates style nodes from JS strings
          },
          {
            loader: "css-loader", // translates CSS into CommonJS
          },
          {
            loader: "sass-loader", // compiles Sass to CSS
          },
        ],
      },
      {
        test: /\.svg$/,
        loader: "svg-url-loader",
      },
    ],
  },
  devtool: (process.env.NODE_ENV === "production"
    ? "cheap-module-source-map"
    : "inline-sourcemap"),
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname),
    watchOptions: {
      ignored: /node_modules/,
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Default",
      template: "index.html",
    })
  ],
};
