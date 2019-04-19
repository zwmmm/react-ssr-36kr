/**
 * 配置文件
 * 生产环境 production
 * 开发环境 development
 * 注意了,api路径必须是全称，因为在服务端渲染的时候也会按照这里的路径请求。
 */

module.exports = {
    // 生产环境
    production: {
        port: 80,                               // 服务器启动的端口号
        env: 'production',                      // 环境
        api: 'http://localhost/api',            // api 接口地址
        publicPath: '/',                        // 静态资源地址
        devtool: '#source-map',                 // devtool
        noHash: false,                          // 生产的静态资源是否需要hash值
        template: 'template/build.html',        // htmlPlugin 插件用的模版
        templateName: 'server.tpl.html',        // 生产的html模板信息
        output: 'dist',                         // 打包的静态资源路径
    },
    // 开发环境
    development: {

    }
};
