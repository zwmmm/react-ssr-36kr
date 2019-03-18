import mock from '../mock/36kr'

export default {
    home: async (ctx, next) => {
        const res = await mock.fetchFlash();
        ctx.render({ home: { news: res.data.items } });
        next();
    },
    list: async (ctx, next) => {
        const data = await mock.fetchList();
        ctx.render({ list: data });
        next();
    }
}