import demo from '../mock/36kr';

export default {
    flash: async (ctx, next) => {
        const { id, page } = ctx.query;
        const homeData = await demo.fetchFlash(id, page || 10);
        ctx.body = homeData.data;
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