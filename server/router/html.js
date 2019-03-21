import Router from 'koa-router';
import htmlControl from '../controllers/html';

let router = new Router();

router.get('/', htmlControl.home);
router.get('/detail/:id', htmlControl.detail);

export default router;