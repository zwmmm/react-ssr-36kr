const demo = require('../mock/36kr');

module.exports = {
    flash: async (ctx, next) => {
        const { id, page } = ctx.query;
        const homeData = await demo.fetchFlash(id, page || 10);
        ctx.body = homeData.data;
        ctx.type = 'json';
    },
    column: async (ctx, next) => {
        const { page } = ctx.query;
        const data = await demo.fetchColumn(page || 1);
        ctx.body = data.data;
        ctx.type = 'json';
    },
    detail: async (ctx, next) => {
        const { id } = ctx.query;
        const data = await demo.fetchDetail(id);
        ctx.body = { data };
        ctx.type = 'json';
    }
}