import fetch from '../../fetch';
import config from '../../build/config';

const base = config[process.env.NODE_ENV].api || '/api'

export default fetch(base);