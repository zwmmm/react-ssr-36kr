import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import routerConfig from './router';
import { Provider } from 'react-redux';
import createStore from './redux/store/createStore';
import 'normalize.css';
import './styles/index.less';
import { renderRoutes } from 'react-router-config';

const store = createStore(window.__STORE__);

ReactDom.hydrate(
    <Provider store={store}>
        <BrowserRouter>
            { renderRoutes(routerConfig) }
        </BrowserRouter>
    </Provider>,
    document.getElementById('app')
)