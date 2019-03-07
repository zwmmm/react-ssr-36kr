import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers';
import sync from '../middlewares/sync';

export default data => createStore(reducers, data, applyMiddleware(sync));