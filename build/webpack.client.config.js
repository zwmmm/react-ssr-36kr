const merge = require('webpack-merge');
const webpack = require('webpack');
const cleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const baseConfig = require('./webpack.base.config');
const config = require('./config').production;
const { resolve } = require('./utils');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(baseConfig(config), {
    entry: resolve('app/client-entry.js'),
    devtool: config.devtool,
    mode: config.env,
    optimization: {
        splitChunks: {
            chunks: 'initial',
            minSize: 0,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: '~',
            name: true,
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    chunks: 'all',
                    name: 'vendor',
                    minChunks: 1,
                    priority: 10
                }
            }
        },
        runtimeChunk: {
            name: 'manifest',
        },
        // 压缩css，由于配置css的压缩会覆盖默认的js压缩，所以js压缩也需要手动配置下
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true // set to true if you want JS source maps
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(config.env),
                VUE_ENV: '"client"'
            }
        }),

        // 清空构建目录
        new cleanWebpackPlugin([resolve('dist')]),

        // 抽离css，命名采用contenthash
        new MiniCssExtractPlugin({
            filename: config.noHash ? 'css/[name].css' : 'css/[name].[chunkhash].css',
        }),

        // cp 静态资源
        new CopyWebpackPlugin([
            {
                from: resolve('static'),
                to: resolve('dist/static')
            }
        ]),

        new HtmlWebpackPlugin({
            filename: config.templateName,
            template: resolve(config.template)
        })
    ],
})