var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/main.ts',
    output: {
        path: 'dist',
        filename: 'app.bundle.js'
    },
    module: {
        preLoaders: [
            {
                exclude: /node_modules/,
                test: /\.ts$/,
                loader: 'tslint-loader'
            }
        ],
        loaders: [
            {
                exclude: /node_modules/,
                test: /\.ts$/,
                loader: 'ts'
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader'
            }

        ],
        rules: [{
            test: /\.scss$/,
            use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader"
            }, {
                loader: "sass-loader"
            }]
        }]
    },
    resolve: {
        extensions: ['', '.js', '.ts']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    tslint: {
        tsConfigFile: 'tsconfig.json',
        emitErrors: false,
        typeCheck: true,
    }
};