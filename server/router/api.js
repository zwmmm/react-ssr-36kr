import Router from 'koa-router';
import ApiControl from '../controllers/api';

let router = new Router({
    prefix: '/api'
});
router.get('/home', ApiControl.home);
router.get('/list', ApiControl.list);

export default router;