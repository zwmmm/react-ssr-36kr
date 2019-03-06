const merge = require('webpack-merge');
const webpack = require('webpack');
const baseConfig = require('./webpack.base.config');
const { resolve } = require('./utils');
const config = require('./config');

const mode = config.development;

module.exports = merge(baseConfig(mode), {
    devtool: mode.devtool,
    mode: mode.env,
    devServer: {
        port: mode.port,
        publicPath: mode.publicPath,
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(mode.env),
            }
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ],
})
