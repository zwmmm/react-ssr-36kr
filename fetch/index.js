import fetch from 'isomorphic-fetch';
const stringfly = body => Object.entries(body).map(item => `${item[0]}=${item[1]}`).join('&');

export default async (url = '', body = {}, method = 'GET') => {
    if (method === 'GET') {
        url += `?${ stringfly(body) }`;
        body = null;
    }
    const res = await fetch(url, {
        credentials: 'include',
        method,
        ...(body ? {body} : {}),
    });
    return res;
}