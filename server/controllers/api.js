import demo from '../mock/demo';

export default {
    home: async (ctx, next) => {
        const homeData = await demo.fetchHome();
        ctx.body = homeData;
        ctx.type = 'json';
        next();
    },
    list: async (ctx, next) => {
        const listData = await demo.fetchList();
        ctx.body = listData;
        ctx.type = 'json';
        next();
    }
}