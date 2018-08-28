const postsModel = require('./../models/postsModels');
const moment = require('moment');
const checkNotLogin = require('../middlewares/check.js').checkNotLogin;
const checkLogin = require('../middlewares/check.js').checkLogin;

// 网站重定向
exports.getRedirectPosts= async ctx=>{
    ctx.redirect('/posts')
}

exports.getPosts = async ctx=>{
    await ctx.render('posts',{
        session:ctx.session,
    })
}