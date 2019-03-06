/**
 * 服务开启之后自动生成模版，用于ssr
 */
const fs = require('fs');
const http = require('http');
const path = require('path');

let file = fs.createWriteStream(path.join(__dirname, './index.html'));

http.get({
    host: 'localhost',
    port: 8000
}, function (res) {
    res.on('data', function (data) {
        file.write(data);
    });
    res.on('end', function () {
        file.end();
    })
})