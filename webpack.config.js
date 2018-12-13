const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
var package = require('./package.json');
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack');

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
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        }),
    ],
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-3']
                }
            }
        ]
    }
}
