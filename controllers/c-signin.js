const UserModel = require('./../models/userModels');
const md5 = require('md5');
const checkNotLogin = require('../middlewares/check.js').checkNotLogin
const checkLogin = require('../middlewares/check.js').checkLogin

exports.getSignin = async ctx =>{
    await checkNotLogin(ctx,{
        session:ctx.session,
    })
}
exports.postSignin = async ctx =>{
    let {name ,password} = ctx.request.body;
    await UserModel.findDataByName(name)
    .then(result=>{
        if(result.length&&name===result[0]['name']&&md5(password)===res[0]['pass']){
            ctx.session = {
                user: res[0]['name'],
                id: res[0]['id']
            }
            ctx.body = {
                code: 200,
                message: '登录成功'
            }
        }else {
            ctx.body={
                code:500,
                message:'登录失败，用户名或者密码错误'
            }
        }
    }).catch(err=>{
        console.log(err)
    })
}