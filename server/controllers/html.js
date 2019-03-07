import mock from '../mock/demo'

export default {
    home: async (ctx, next) => {
        const data = await mock.fetchHome();
        ctx.render({ home: data });
        next();
    },
    list: async (ctx, next) => {
        ctx.render();
        next();
    }
}