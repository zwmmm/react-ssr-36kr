import apiRouter from './api';
import htmlRouter from './html';
import Router from 'koa-router';

let router = Router();
router.use(apiRouter.routes());
router.use(htmlRouter.routes());

export default router;