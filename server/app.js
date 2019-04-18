const Koa = require('koa');
const router = require('./router');
const path = require('path');
const config = require('./config');

const app = new Koa();

config.static(app);

app.use(router.routes(), router.allowedMethods());

app.listen(config.port, () => {
    console.log('node服务已启动，服务地址为：locahost:8001');
});