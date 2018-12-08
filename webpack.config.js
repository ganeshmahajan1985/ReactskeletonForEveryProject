var path = require('path');

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "assets/bundle.js"
  },
  mode: "development",
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        query: {
          presets: ["env", "react"]
        }
      }
    ]
  }
}
