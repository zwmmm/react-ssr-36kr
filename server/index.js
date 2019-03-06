require('@babel/register')({
    presets: [
        '@babel/preset-react',
        '@babel/preset-env'
    ],
});
require('@babel/polyfill');
require('./app.js');