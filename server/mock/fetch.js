const fetch = require('isomorphic-fetch');
const base = 'https://36kr.com/api';

const stringfly = body => {
    if (!body) return '';
    return Object.entries(body).map(item => `${item[0]}=${item[1]}`).join('&')
};

module.exports = async (url = '', body = {}, method = 'GET') => {
    if (method === 'GET') {
        url += `?${ stringfly(body) }`;
        body = null;
    }
    const res = await fetch(base + url, {
        credentials: 'include',
        method,
        ...(body ? { body } : {}),
    });
    return await res.json();
}