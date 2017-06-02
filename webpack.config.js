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
                test: /\.ts$/,
                loaders: ['ts', 'angular2-template-loader?keepUrl=true'],
                exclude: [/node_modules/, /\.(spec|e2e)\.ts$/]
            }, {
                test: /\.(html|css)$/,
                loader: 'raw-loader',
                exclude: /\.async\.(html|css)$/
            }, {
                test: /\.async\.(html|css)$/,
                loaders: ['file?name=[name].[hash].[ext]', 'extract']
            }, {
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
            }, {
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
        new extractTextPlugin('[name].css'),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
            "Tether": 'tether'
        })
    ],
    tslint: {
        tsConfigFile: 'tsconfig.json',
        emitErrors: false,
        typeCheck: true,
    }
};