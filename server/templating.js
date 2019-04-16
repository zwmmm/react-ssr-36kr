import fs from 'fs';
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import routerConfig from '../app/router'
import React from 'react';
import path from 'path';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import config from './config'

function templating(path) {
    const template = fs.readFileSync(path, 'utf-8');
    return props => template.replace(/{{([\s\S]*?)}}/g, (_, key) => props[key.trim()]);
}

export default (ctx, store, context) => {
    const render = templating(config.templatePath);
    try {
        const html = renderToString(
            <Provider store={store}>
                <StaticRouter location={ctx.url} context={context}>
                    { renderRoutes(routerConfig) }
                </StaticRouter>
            </Provider>
        );
        const body = render({
            html,
            data: JSON.stringify(store.getState(), null, 4),
        });
        ctx.body = body;
    } catch(err) {
        ctx.body = render({ html: err.message });
    } finally {
        ctx.type = 'text/html';
    }
}