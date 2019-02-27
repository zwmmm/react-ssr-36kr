const webpack = require('webpack');
const webpackDevMiddleware = require('koa-webpack-dev-middleware');
const webpackHotMiddleware = require('koa-webpack-hot-middleware');
const config = require('./webpack.dev.config');
const compiler = webpack(config);

const Koa = require('koa');
const app = new Koa();

app.use(webpackDevMiddleware(compiler), {
    hot: true,
    publicPath: config.output.publicPath
});

// TODO 并不难热更新
app.use(webpackHotMiddleware(compiler));

app.listen('8000', () => {
    console.log('服务正常启动，请访问：localhost:8000');
});
