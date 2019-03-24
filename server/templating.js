import fs from 'fs';
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import RouterConfig from '../app/router'
import React from 'react';
import path from 'path';
import { Provider } from 'react-redux';
import createStore from '../app/redux/store/createStore';

function templating(path) {
    const template = fs.readFileSync(path, 'utf-8');
    return props => template.replace(/{{([\s\S]*?)}}/g, (_, key) => props[key.trim()]);
}

export default path => (ctx, next) => {
    const __templating__ = templating(path);
    try {
        ctx.render = (data = {}) => {
            const store = createStore(data);
            const html = renderToString(
                <Provider store={store}>
                    <StaticRouter location={ctx.url} context={data}>
                        <RouterConfig/>
                    </StaticRouter>
                </Provider>
            );
            const body = __templating__({
                html,
                data: JSON.stringify(data, null, 4),
            });
            ctx.body = body;
            ctx.type = 'text/html';
        }
    } catch(err) {
        ctx.body = __templating__({ html: err.message });
        ctx.type = 'text/html';
    }
    // 这里必须是return next() 不然异步路由是404
    return next();
}