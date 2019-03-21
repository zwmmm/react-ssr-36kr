import Router from 'koa-router';
import ApiControl from '../controllers/api';

let router = new Router({
    prefix: '/api'
});
router.get('/flash', ApiControl.flash);
router.get('/list', ApiControl.list);
router.get('/column', ApiControl.column);
router.get('/detail', ApiControl.detail);

export default router;