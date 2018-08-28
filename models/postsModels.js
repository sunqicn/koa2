const query = require('./../lib/mysql');

// 发表文章
exports.insertPost = (value) => {
    let _sql = "insert into posts set name=?,title=?,content=?,md=?,uid=?,moment=?,avator=?;"
    return query(_sql, value)
}