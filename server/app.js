import Koa from 'koa';
import React from 'react'; // jsx 编译后的代码会用到 React，所以在这里需要先引入React
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import RouterConfig from '../app/router';
import render from './render';

const app = new Koa();
const context = {};
app.use(async ctx => {
    const html = renderToString(
        <StaticRouter location={ctx.url} context={context}>
            <RouterConfig/>
        </StaticRouter>
    );
    ctx.body = render('server', { html });
})

app.listen('8001', () => {
    console.log('服务正常启动，请访问：localhost:8001');
});