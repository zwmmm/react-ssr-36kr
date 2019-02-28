const merge = require('webpack-merge');
const webpack = require('webpack');
const baseConfig = require('./webpack.base.config');

module.exports = merge(baseConfig, {
    plugins: [
        // TODO JSON.stringify (https://www.webpackjs.com/plugins/define-plugin/)
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        })
    ],
})