const router = require('koa-router')();
const signupCtrl = require('./../controllers/c-signup');

// 注册页面
router.get('/signup',signupCtrl.getSignup);

// Post注册请求
router.post('/signup',signupCtrl.postSignup)

module.exports=router;