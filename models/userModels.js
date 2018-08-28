const query = require('./../lib/mysql');
// 注册用户
exports.inserData = (value) => {
    let _sql = "insert into users set name=?,pass=?,avator=?,moment=?;"
    return query(_sql, value)
}
// 删除用户
exports.deleteUserData = (name) => {
    let _sql = `delete from user where name = ${name};`
    return query(_sql)
}
// 查找用户
exports.findUserData = (name) => {
    let _sql = `select * from users where name="${name}";`
    return query(_sql)
}

// 通过名字查找用户
exports.findDataByName = (name) => {
    let _sql = `select * from users where name="${name}";`
    return query(_sql)
}