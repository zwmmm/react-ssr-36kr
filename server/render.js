import fs from 'fs';
import path from 'path';

const BASE_DIR = path.join(__dirname, '../template');
export default function (name, props) {
    const template = fs.readFileSync(path.join(BASE_DIR, name + '.html'), 'utf-8');
    return template.replace(/<%=([\s\S]*?)%>/g, (_, key) => props[key.trim()]);
}