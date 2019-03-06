export default {
    home: async (ctx, next) => {
        ctx.render();
        next();
    },
    list: async (ctx, next) => {
        ctx.render();
        next();
    }
}