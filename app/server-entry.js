import ReactDom from 'react-dom';
import { StaticRouter } from 'react-router-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { matchRoutes } from 'react-router-config';
import createApp from './createApp';

export default ctx => {
    return new Promise((resolve, reject) => {
        const { router, store, routerConfig } = createApp();

        const routes = matchRoutes(routerConfig, ctx.url);

        // 如果没有匹配上路由则返回404
        if (routes.length <= 0) {
            return reject({ code: 404, message: 'Not Page' });
        }

        // 等所有数据请求回来之后在render, 注意这里不能用ctx上的路由信息，要使用前端的路由信息
        const promises = routes
        .filter(item => item.route.component.asyncData)
        .map(item => item.route.component.asyncData(store, item.match));

        Promise.all(promises).then(() => {
            ctx.store = store; // 挂载到ctx上，方便渲染到页面上
            resolve(
                <Provider store={store}>
                    <StaticRouter location={ctx.url} context={ctx}>
                        { router }
                    </StaticRouter>
                </Provider>
            )
        }).catch(reject);
    })
}
