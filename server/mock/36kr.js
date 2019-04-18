const fetch = require('./fetch');
const https = require('https');
const cheerio = require('cheerio');

class Mock {
    fetchFlash(b_id, page = 10) {
        return fetch('/newsflash', { per_page: page, ...(b_id ? { b_id } : {}) })
    }

    fetchColumn(page = 1) {
        return fetch('/search-column/23', { per_page: 10, page })
    }

    fetchDetail(id = 5186022) {
        return new Promise(resolve => {
            https.get({
                hostname:'36kr.com',
                path: `/p/${id}`,
                headers: {
                    'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1'
                },
            }, res => {
                let htmlBuffer = [];
                res.on('data', chunk => {
                    htmlBuffer.push(chunk);
                });
                res.on('end', () => {
                    const chunkAll = Buffer.concat(htmlBuffer);
                    const $ = cheerio.load(chunkAll);
                    const content = $('.article-body').html();
                    resolve(content);
                })
            })
        })
    }
}

module.exports = new Mock();