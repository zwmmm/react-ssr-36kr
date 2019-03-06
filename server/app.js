import Koa from 'koa';
import templating from './templating';
import router from './router';

const app = new Koa();

app.use(templating);
app.use(router.routes(), router.allowedMethods());

app.listen('80', () => {
    console.log('node服务已启动，服务地址为：locahost');
});