import apiRouter from './api';
import Router from 'koa-router';
import htmlControl from '../controllers/html';

let router = Router();
router.use(apiRouter.routes());
router.get('*', htmlControl);

export default router;