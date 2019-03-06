export default {
    // 正式环境
    production: {
        api: 'http://mallapi.m.com/',
        host: 'mall.meitu.com',
        watch: false,
        noCache: false
    },
    // 开发环境
    development: {
        api: 'http://testmallapi.meitu.com/',
        host: 'localmall.meitu.com',
        watch: true,
        noCache: true
    }
}[process.env.NODE_ENV];