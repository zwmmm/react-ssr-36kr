const merge = require('webpack-merge');
const webpack = require('webpack');
const cleanWebpackPlugin = require('clean-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const baseConfig = require('./webpack.base.config');
const config = require('./config');
const { resolve } = require('./utils');

const mode = config.production;

module.exports = merge(baseConfig(mode), {
    devtool: mode.devtool,
    mode: mode.env,
    optimization: {
        splitChunks: {
            chunks: 'initial',
            minSize: 0,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: '~',
            name: true,
            cacheGroups: {
                common: {
                    test: /[\\/]src\/common[\\/]/,
                    chunks: 'all',
                    name: 'common',
                    minChunks: 1,
                    priority: 10
                },
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
        }
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(mode.env),
            }
        }),

        // 清空构建目录
        new cleanWebpackPlugin([resolve('dist')]),

        // 抽离css，命名采用contenthash
        new miniCssExtractPlugin({
            filename: 'css/[name].css'
        }),
    ],
})