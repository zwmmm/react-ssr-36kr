require('@babel/register')({
    presets: [
        '@babel/preset-react',
        '@babel/preset-env'
    ],
    plugins: [
        // class 中箭头函数的写法
        [ "@babel/plugin-proposal-class-properties", { "loose": false } ],
    ]
});
require('@babel/polyfill');
require('./app.js');