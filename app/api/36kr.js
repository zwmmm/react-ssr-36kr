import fetch from './fetch';

export const news = (query) => fetch('/flash', query);
export const list = () => fetch('/list');