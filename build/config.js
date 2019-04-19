/**
 * 配置文件
 * 生产环境 production
 * 开发环境 development
 */

module.exports = {
    // 生产环境
    production: {
        port: 80,                               // 服务器启动的端口号
        env: 'production',                      // 环境
        api: '/',                               // api 接口地址
        publicPath: '/',                        // 静态资源地址
        devtool: '#source-map',                 // devtool
        noHash: true,                           // 生产的静态资源是否需要hash值
        template: 'template/build.html',        // htmlPlugin 插件用的模版
        templateName: 'server.tpl.html',        // 生产的html模板信息
        output: 'dist',                         // 打包的静态资源路径
    },
    // 开发环境
    development: {
        port: 8000,                             // 开发端口
        env: 'development',                     // 环境
        devtool: '',                            // devtool
        noHash: true,
        api: 'http://localhost:8001/api',       // api 接口地址
        publicPath: 'http://localhost:8000',    // 静态资源地址
        imagePath: '',                          // 图片资源地址
        template: 'template/app.html',
        renderTpl: 'template/server.html',
    }
};
