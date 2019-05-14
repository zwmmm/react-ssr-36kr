const merge = require('webpack-merge');
const webpack = require('webpack');
const baseConfig = require('./webpack.base.config');
const config = require('./config')[process.env.NODE_ENV];
const nodeExternals = require('webpack-node-externals');
const { resolve } = require('./utils');

module.exports = merge(baseConfig(config), {
    target: 'node',
    devtool: config.devtool,
    entry: resolve('app/server-entry.js'),
    output: {
        filename: 'js/server-bundle.js',
        libraryTarget: 'commonjs2'
    },
    // 服务端打包的时候忽略外部的npm包
    externals: nodeExternals({
        // 当然外部的css还是可以打进来的
        whitelist: /\.css$/
    }),
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(config.env),
            'process.env.VUE_ENV': '"server"'
        }),
    ]
})