import fetch from 'isomorphic-fetch';
import config from '../../build/config';

const base = config[process.env.NODE_ENV].api || '/api'

const stringfly = body => {
    if (!body) return '';
    return Object.entries(body).map(item => `${item[0]}=${item[1]}`).join('&')
};

export default async (url = '', body = {}, method = 'GET') => {
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