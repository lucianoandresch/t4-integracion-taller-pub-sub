const KoaRouter = require('koa-router');
const transactions = require('./transactions');

const router = new KoaRouter({ prefix: '/api' });

router.use('/transactions', transactions.routes());

module.exports = router;
