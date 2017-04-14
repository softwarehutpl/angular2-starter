var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var extractTextPlugin = require("extract-text-webpack-plugin");
var precss = require('precss');
var autoprefixer = require('autoprefixer');

module.exports = {
    entry: './src/main.ts',
    output: {
        path: 'dist',
        filename: 'app.bundle.js'
    },
    postcss: function() {
        return [
            precss,
            autoprefixer({ browsers: ['> 1%', 'IE 7'] })
        ];
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
            }, {
                test: /\.css$/,
                loader: extractTextPlugin.extract('css!postcss')
            }, {
                test: /\.(png|jpg|gif)$/,
                loader: 'file-loader?name=[path][name].[ext]'
            }
        ],
        rules: [
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "sass-loader"
                }]
            },
            {
                test: require.resolve('jquery'),
                use: [{
                    loader: 'expose-loader',
                    options: 'jQuery'
                },{
                    loader: 'expose-loader',
                    options: '$'
                }]
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.ts']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new extractTextPlugin('[name].css')
    ],
    tslint: {
        tsConfigFile: 'tsconfig.json',
        emitErrors: false,
        typeCheck: true,
    }
};