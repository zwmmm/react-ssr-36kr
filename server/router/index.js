const apiRouter = require('./api');
const Router = require('koa-router');
const htmlControl = require('../controllers/html');

let router = Router();
router.use(apiRouter.routes());
router.get('*', htmlControl);

module.exports = router;