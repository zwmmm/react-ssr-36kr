const merge = require('webpack-merge');
const webpack = require('webpack');
const baseConfig = require('./webpack.base.config');
const { resolve } = require('./utils');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = require('./config')[process.env.NODE_ENV];

const clientConfig = merge(baseConfig(config), {
    entry: resolve('app/client-entry.js'),
    devtool: config.devtool,
    mode: config.env,
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(config.env),
                VUE_ENV: '"client"'
            }
        }),

        // cp 静态资源
        new CopyWebpackPlugin([
            {
                from: resolve('static'),
                to: resolve('dist/static')
            }
        ]),

        new HtmlWebpackPlugin({
            filename: 'server.tpl.html',
            template: resolve('app/index.html')
        })
    ],
})

if (process.env.NODE_ENV === 'production') {
    clientConfig.optimization.splitChunks = {
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
    };

    clientConfig.optimization.runtimeChunk = {
        name: 'manifest',
    };
}

module.exports = clientConfig;