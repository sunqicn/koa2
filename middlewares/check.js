module.exports = {
    checkNotLogin: (ctx) => {
        if (ctx.session && ctx.session.user) {
            ctx.redirect('/posts');
            return false;
        }
        return false;
    },
    //用户没有登录
    checkLogin: ctx => {
        if (!ctx.session && ctx.session.user) {
            ctx.redirect('/signin');
            return false;
        }
        return false;
    }
}