import mock from '../mock/36kr'

export default {
    home: async (ctx, next) => {
        const promises = [mock.fetchFlash(), mock.fetchColumn()]
        const [res, column] = await Promise.all(promises);
        ctx.render({
            home: {
                news: res.data.items,
                column: column.data.items
            }
        });
        next();
    },
    detail: async (ctx, next) => {
        const { id } = ctx.params;
        const data = await mock.fetchDetail(id);
        ctx.render({
            detail: { data, ssr: true }
        });
        next();
    }
}