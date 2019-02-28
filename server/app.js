import Koa from 'koa';
import React from 'react'; // jsx 编译后的代码会用到 React，所以在这里需要先引入React
import { renderToString } from 'react-dom/server';

const app = new Koa();
const Index = () => <div>music heheh</div>
app.use(async ctx => {
    const html = renderToString(<Index/>);
    ctx.body = html;
})

app.listen('8001', () => {
    console.log('服务正常启动，请访问：localhost:8001');
});