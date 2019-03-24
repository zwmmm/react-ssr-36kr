import Koa from 'koa';
import templating from './templating';
import router from './router';
import path from 'path';

const app = new Koa();
const IS_DEV = process.env.NODE_ENV === 'development';
let templatePath = path.join(__dirname, '../template/server.html');

if (!IS_DEV) {
    templatePath = path.join(__dirname, '../dist/index.html');
    app.use(require('koa-static')(path.join(__dirname, '../dist'), {
        defer: true,
    }));
}
app.use(templating(templatePath));
app.use(router.routes(), router.allowedMethods());

app.listen('8001', () => {
    console.log('node服务已启动，服务地址为：locahost:8001');
});