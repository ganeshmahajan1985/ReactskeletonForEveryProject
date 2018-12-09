var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var package = require('./package.json');

module.exports = {
    entry: {
        app: "./src/index.js",
        vendor: Object.keys(package.dependencies)
    },
    output: {
        filename: "assets/[name].bundle.js"
    },
    mode: "development",
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            title: 'My Awesome application',
            template: './src/index.html',
            filename: './index.html' //relative to root of the application
        })
    ],
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
