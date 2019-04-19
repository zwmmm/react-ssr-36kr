const fs = require('fs');
const { renderToString } = require('react-dom/server');
const path = require('path');

const env = process.env.NODE_ENV
const config = require('../../build/config')[env];
const serverBundle = require('../../dist/js/server-bundle');

function templating(path) {
    const template = fs.readFileSync(path, 'utf-8');
    return props => template.replace(/{{([\s\S]*?)}}/g, (_, key) => props[key.trim()]);
}

module.exports = async (ctx, next) => {
    const render = templating(path.resolve(config.output, config.templateName));
    try {
        const jsx = await serverBundle.default(ctx);
        const html = renderToString(jsx);
        const body = render({
            html,
            data: JSON.stringify(ctx.store.getState()),
        });
        ctx.body = body;
        ctx.type = 'text/html';
    } catch(err) {
        ctx.body = err.message;
        ctx.type = 'json';
        ctx.code = err.code;
    }
}