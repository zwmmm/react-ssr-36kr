import Router from 'koa-router';
import htmlControl from '../controllers/html';

let router = new Router();

router.get('/', htmlControl.home);
router.get('/list', htmlControl.list);

export default router;