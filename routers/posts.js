const router = require('koa-router')();
const ctrlPosts = require('./../controllers/c-posts');
// 重定向
router.get('/',ctrlPosts.getRedirectPosts);
router.get('/posts',ctrlPosts.getPosts);
// 首页分页，每次输出前十条
router.get('/posts/page',ctrlPosts.postPostsPage);
// 个人分页，每次输出前十条
router.get('/post/self/page',ctrlPosts.postSelfPage);

module.exports=router;
