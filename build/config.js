/**
 * 配置文件
 * 生产环境 production
 * 开发环境 development
 */

module.exports = {
    // 生产环境
    production: {
        env: 'production',                      // 环境
        api: 'http://localhost/api',            // api 接口地址
        publicPath: '/',                        // 静态资源地址
        imagePath: '',                          // 图片资源地址
        devtool: 'false',                       // devtool
        noHash: true,
        template: 'template/build.html',
        port: 80,
        templateName: 'server.tpl.html',
        output: 'dist',
    },
    // 开发环境
    development: {
        env: 'development',                     // 环境
        api: 'http://localhost:8001/api',       // api 接口地址
        publicPath: 'http://localhost:8000',    // 静态资源地址
        imagePath: '',                          // 图片资源地址
        port: 8000,                             // 开发端口
        devtool: 'source-map',                  // devtool
        noHash: true,
        template: 'template/app.html',
        renderTpl: 'template/server.html',
    }
};
