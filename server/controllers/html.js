const fs = require('fs');
const { renderToString } = require('react-dom/server');
const path = require('path');
const config = require('../config');
const serverBundle = require('../../dist/server-bundle');

function templating(path) {
    const template = fs.readFileSync(path, 'utf-8');
    return props => template.replace(/{{([\s\S]*?)}}/g, (_, key) => props[key.trim()]);
}

module.exports = async (ctx, next) => {
    const render = templating(config.templatePath);
    try {
        const jsx = await serverBundle.default(ctx);
        const html = renderToString(jsx);
        const body = render({
            html,
            data: JSON.stringify(ctx.store.getState(), null, 4),
        });
        ctx.body = body;
        ctx.type = 'text/html';
    } catch(err) {
        ctx.body = err.message;
        ctx.type = 'json';
        ctx.code = err.code;
    }
}