import fs from 'fs';
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import routerConfig from '../app/router'
import React from 'react';
import path from 'path';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import config from './config';

function templating(path) {
    const template = fs.readFileSync(path, 'utf-8');
    return props => template.replace(/{{([\s\S]*?)}}/g, (_, key) => props[key.trim()]);
}

export default async (ctx, next) => {
    const render = templating(config.templatePath);
    try {
        const html = renderToString();
        const body = render({
            html,
            data: JSON.stringify(ctx.store.getState(), null, 4),
        });
        ctx.body = body;
        ctx.type = 'text/html';
    } catch(err) {
        ctx.body = err.message;
        ctx.type = err.code;
    }
}