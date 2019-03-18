const HtmlWebpackPlugin = require('html-webpack-plugin');
const { resolve } = require('./utils');

module.exports = config => {
    return {
        // 打包的入口文件
        entry: resolve('app/main.js'),
        // 打包的出口
        output: {
            path: resolve('dist'),
            publicPath: config.publicPath,
            filename: config.noHash ? '[name].js' : '[name].[chunkhash].js',
            chunkFilename: config.noHash ? '[name].js' : '[name].[chunkhash].js'
        },
        // 配置各种loader
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    include: resolve('app'),
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/preset-env',
                                '@babel/preset-react',
                            ],
                            plugins: [
                                "@babel/plugin-transform-runtime",
                                // Stage 0
                                "@babel/plugin-proposal-function-bind",

                                // Stage 1
                                "@babel/plugin-proposal-export-default-from",
                                "@babel/plugin-proposal-logical-assignment-operators",
                                [ "@babel/plugin-proposal-optional-chaining", { "loose": false } ],
                                [ "@babel/plugin-proposal-pipeline-operator", { "proposal": "minimal" } ],
                                [ "@babel/plugin-proposal-nullish-coalescing-operator", { "loose": false } ],
                                "@babel/plugin-proposal-do-expressions",

                                // Stage 2
                                [ "@babel/plugin-proposal-decorators", { "legacy": true } ],
                                "@babel/plugin-proposal-function-sent",
                                "@babel/plugin-proposal-export-namespace-from",
                                "@babel/plugin-proposal-numeric-separator",
                                "@babel/plugin-proposal-throw-expressions",

                                // Stage 3
                                "@babel/plugin-syntax-dynamic-import",
                                "@babel/plugin-syntax-import-meta",
                                [ "@babel/plugin-proposal-class-properties", { "loose": false } ],
                                "@babel/plugin-proposal-json-strings"
                            ]
                        }
                    }
                },
                {
                    test: /\.html$/,
                    include: resolve('app'),
                    loader: 'html-loader'
                },
                {
                    test: /\.css/,
                    use: [
                        'style-loader',
                        'css-loader',
                    ]
                },
                {
                    test: /\.less/,
                    include: [resolve('app')],
                    use: [
                        'style-loader',
                        {
                            loader: 'css-loader',
                        },
                        'less-loader'
                    ]
                },
                {
                    test: /\.(png|jpg|gif|svg)$/,
                    loader: `url-loader?limit=1000&name=${config.imagePath}${config.noHash ? '[name].[ext]' : '[name].[hash:8]'}.[ext]`
                },
                {
                    test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                    loader: `file-loader?name=${config.publicPath}fonts/${config.noHash ? '[name].[ext]' : '[name].[hash:8]'}.[ext]`
                },
            ]
        },
        resolve: {
            // 设置路径别名
            alias: {
                '@': resolve('app'),
            },
            // 文件后缀自动补全
            extensions: [ '.js', '.jsx' ],
        },
        // 第三方依赖，可以写在这里，不打包
        externals: {},
        // 插件
        plugins: [
            new HtmlWebpackPlugin({
                filename: 'index.html',
                template: resolve('template/app.html')
            })
        ]
    }
}