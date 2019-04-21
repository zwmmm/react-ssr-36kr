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
    },
    // 开发环境
    development: {
        port: 8000,                             // 服务器启动的端口号
        env: 'development',                     // 环境
        api: 'http://localhost:8000/api',       // api 接口地址
        publicPath: '/',                        // 静态资源地址
        devtool: 'eval',                        // devtool
        noHash: true,                           // 生产的静态资源是否需要hash值
    }
};
