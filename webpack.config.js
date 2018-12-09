var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var package = require('./package.json');
var CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
    entry: {
        app: "./src/index.js",
        vendor: Object.keys(package.dependencies)
    },
    output: {
        filename: "assets/[name].bundle.js"
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /node_modules/, // you may add "vendor.js" here if you want to
                    name: "vendor",
                    chunks: "initial",
                    enforce: true
                }
            }
        }
    },
    mode: "development",
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
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
