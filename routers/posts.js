const router = require('koa-router')();
const ctrlPosts = require('./../controllers/c-posts');
// 重定向
router.get('/',ctrlPosts.getRedirectPosts);
router.get('/posts',ctrlPosts.getPosts);

module.exports=router;
