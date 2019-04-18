const Router = require('koa-router');
const ApiControl = require('../controllers/api');

let router = new Router({
    prefix: '/api'
});
router.get('/flash', ApiControl.flash);
router.get('/column', ApiControl.column);
router.get('/detail', ApiControl.detail);

module.exports = router;