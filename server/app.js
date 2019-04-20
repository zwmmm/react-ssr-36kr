const Koa = require('koa');
const router = require('./router');
const path = require('path');
const render = require('./render');

const app = new Koa();
const env = process.env.NODE_ENV
const config = require('../build/config')[env];

app.use(require('koa-static')(path.join(__dirname, '../dist')));
app.use(router.routes(), router.allowedMethods());
app.use(async (ctx, next) => {
    await render(app, ctx);
    next();
});


app.listen(config.port, () => {
    console.log(`node服务已启动，服务地址为：locahost:${config.port}`);
});