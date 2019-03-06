import apiRouter from './api';
import htmlRouter from './html';
import Router from 'koa-router';

let router = Router();
router.use(apiRouter.routes(), apiRouter.allowedMethods());
router.use(htmlRouter.routes(), htmlRouter.allowedMethods());

export default router;