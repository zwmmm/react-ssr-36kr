/**
 * 服务端的webpack需要处理那些问题？
 * 1. 不需要打包，所以无需处理node_modules
 * 2. 需要将模块化修改成commonJS
 * 3. 需要支持jsx
 */
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const prodConfig = require('./webpack.prod.config');

const serverConfig = {
    entry: path.join(__dirname, '../server/app.js'),
    output: {
        path: path.join(__dirname, '../dist'),
        filename: 'server.js',
        libraryTarget: 'commonjs2'
    },
    target: 'node',
    externals: [nodeExternals()], // 不把node_modules中的文件打包
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react'],
                        plugins: [
                            '@babel/plugin-transform-modules-commonjs',
                            ["@babel/plugin-proposal-decorators", { "legacy": true }], // 必须设置legacy为true
                        ]
                    }
                }
            }
        ]
    },
}
module.exports = [prodConfig, serverConfig];