import fs from 'fs';
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import RouterConfig from '../app/router'
import React from 'react';
import path from 'path';

function templating(props) {
    const template = fs.readFileSync(path.join(__dirname, '../template/server.html'), 'utf-8');
    return template.replace(/{{([\s\S]*?)}}/g, (_, key) => props[key.trim()]);
}

export default function (ctx, next) {
    try {
        const context = {};
        const html = renderToString(
            <StaticRouter location={ctx.url} context={context}>
                <RouterConfig/>
            </StaticRouter>
        );
        ctx.render = (model = {}) => {
            const body = templating({
                html,
                model,
            });
            ctx.body = body;
        }
    } catch(err) {
        ctx.body = templating({ html: err.message });
    }
    ctx.type = 'text/html';
    next();
}