import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import RouterConfig from './router';
import { Provider } from 'react-redux';
import createStore from './redux/store/createStore';
import 'normalize.css';
import './styles/index.less'

const store = createStore(window.__STORE__);

ReactDom.hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <RouterConfig/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('app')
)