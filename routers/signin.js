const router = require('koa-router')();
const ctrlSignin = require('./../controllers/c-signin');

router.get('/signin', ctrlSignin.getSignin)
router.post('/signin', ctrlSignin.postSignin)
module.exports = router;