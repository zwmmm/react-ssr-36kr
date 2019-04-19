const { resolve } = require('./utils');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = config => {
    const styleLoader = process.env.NODE_ENV === 'development'
        ? 'style-loader'
        : MiniCssExtractPlugin.loader

    return {
        // 打包的入口文件
        entry: resolve('app/main.js'),
        // 打包的出口
        output: {
            path: resolve(config.output),
            publicPath: config.publicPath,
            // 入口文件生产的js
            filename: config.noHash ? 'js/[name].js' : 'js/[name].[chunkhash].js',
            // 非入口文件生产的js
            chunkFilename: config.noHash ? 'js/[name].js' : 'js/[name].[chunkhash].js'
        },
        // 配置各种loader
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: [resolve('node_modules')],
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/preset-env',
                                '@babel/preset-react',
                            ],
                            plugins: [
                                "@babel/plugin-transform-runtime",
                                ["@babel/plugin-proposal-class-properties", { "loose": false }],
                            ]
                        }
                    }
                },
                {
                    test: /\.html$/,
                    loader: 'html-loader'
                },
                {
                    test: /\.css/,
                    use: [
                        styleLoader,
                        'css-loader',
                    ]
                },
                {
                    test: /\.less/,
                    include: [resolve('app')],
                    use: [
                        styleLoader,
                        'css-loader',
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
            extensions: ['.js', '.jsx'],
        },
        // 第三方依赖，可以写在这里，不打包
        externals: {},
    }
}