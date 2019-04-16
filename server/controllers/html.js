import mock from '../mock/36kr';
import { matchRoutes } from 'react-router-config';
import routerConfig from '../../app/router';
import createStore from '../../app/redux/store/createStore';
import templating from '../templating'

export default async (ctx, next) => {
    const store = createStore();
    const routes = matchRoutes(routerConfig, ctx.url);
    if (routes.length > 0) {
        // 等所有数据请求回来之后在render
        const promises = routes
        .filter(item => item.route.component.asyncData)
        .map(item => {
            return item.route.component.asyncData(store, {
                params: ctx.params,
                query: ctx.query
            })
        });
        await Promise.all(promises);
        templating(ctx, store, {});
        return next();
    }
    return next();
}