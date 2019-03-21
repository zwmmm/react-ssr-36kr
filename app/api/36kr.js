import fetch from './fetch';

export const news = (query) => fetch('/flash', query);
export const list = () => fetch('/list');
export const column = (query) => fetch('/column', query);
export const detail = (query) => fetch('/detail', query);