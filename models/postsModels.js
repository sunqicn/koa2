const query = require('./../lib/mysql');

// 发表文章
exports.insertPost = (value) => {
    let _sql = "insert into posts set name=?,title=?,content=?,md=?,uid=?,moment=?,avator=?;"
    return query(_sql, value)
}
// 查询所有的文章
exports.findAllPost = () => {
    let _sql = "select * from posts;"
    return query(_sql)
}
// 查询分页文章
exports.findPostByPage = (page) => {
    let _sql = ` select * from posts limit ${(page-1)*10},10;`
    return query(_sql)
}
// 通过名字查找用户
exports.findDataByUser = (name) => {
    let _sql = `select * from posts where name = "${name}"`
    return query(_sql)
}
// 查询个人分页文章
exports.findPostByUserPage = (name, page) => {
    let _sql = `select * from posts where name = "${name}" order by desc limit ${(page-1)*10},10;`
    return query(_sql)
}