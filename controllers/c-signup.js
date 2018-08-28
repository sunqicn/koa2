const UserModel = require('./../models/userModels');
const md5 = require('md5');
const moment = require('moment');
const fs = require('fs');
const checkNotLogin = require('../middlewares/check.js').checkNotLogin;
const checkLogin = require('../middlewares/check.js').checkLogin;

exports.getSignup = async ctx =>{
    await checkNotLogin(ctx);
    await ctx.render('signup',{
        session:ctx.session,
    })
}
exports.postSignup = async ctx =>{
    let {name,password,repeatpass,avator}= ctx.request.body;
    await UserModel.findDataByName(name)
    .then(async result=>{
        console.log(result)
        if(result.length){
            try{
                throw('用户存在');
            }catch(error){
                // 处理error
                console.log(error);
            }
            // 用户存在
            ctx.body = {
                code:500,
                message:'用户存在'
            }
        }else if(password !== repeatpass || password === ""){
            ctx.body={
                code:500,
                message:'密码不一致'
            }
        }else {
            // 注册成功
            await UserModel.inserData([name,md5(password),'1.png',moment().format('YYYY-MM-DD HH:mm:ss')])
            .then(res=>{
                console.log(res);
                ctx.body = {
                    code:200,
                    message:'注册成功'
                }
            },err=>{
                console.log(err)
            })
        }
    })
}