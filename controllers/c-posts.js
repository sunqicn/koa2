const postsModel = require('./../models/postsModels');
const moment = require('moment');
const checkNotLogin = require('../middlewares/check.js').checkNotLogin;
const checkLogin = require('../middlewares/check.js').checkLogin;

// 网站重定向
exports.getRedirectPosts = async ctx => {
    ctx.redirect('/posts')
}

exports.getPosts = async ctx => {
    // console.log(decodeURIComponent(ctx.request.querystring.split('=')[1]))
    // await ctx.render('posts', {
    //     session: ctx.session,
    // })
    // ---
    let res,
        postsLength,
        name = decodeURIComponent(ctx.request.querystring.split('=')[1])
    // 如果登录，跳转到个人文章页面
    if (ctx.request.querystring) {
        await postsModel.findDataByUser(name)
            .then(result => {
                postsLength = result.length;
            })

        await postsModel.findPostByUserPage(name, 1)
            .then(result => {
                res = result;
            })

        await ctx.render('selPosts', {
            session: ctx.session,
            posts: res,
            postsPageLength: Math.ceil(postsLength / 10)
        })
        // 没有登录，跳转到文章列表
    } else {
        await postsModel.findAllPost()
            .then(result => {
                postsLength = result.length;
            })
        await postsModel.findPostByPage(1)
            .then(result => {
                res = result;
            })

        await ctx.render('posts', {
            session: ctx.session,
            posts: res,
            postsLength: postsLength,
            postsPageLength: Math.ceil(postsLength / 10),
        })
    }
}

// 首页分页，每次输出10条
exports.postPostsPage = async ctx => {
    let page = ctx.request.body.page;
    await postsModel.findPostByPage(page)
        .then(result => {
            ctx.body = result;
        }).catch(() => {
            ctx.body = 'error'
        })
}

/**
 * 个人文章分页， 每次输出10条
 */
exports.postSelfPage = async ctx => {
    let data = ctx.request.body
    await userModel.findPostByUserPage(decodeURIComponent(data.name), data.page)
        .then(result => {
            ctx.body = result
        }).catch(() => {
            ctx.body = 'error'
        })
}