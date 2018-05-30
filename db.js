const mysql = require('mysql')

// 创建连接池
const pool = mysql.createPool({
    host: '',
    user: '',
    password: '',
    database: '',
    connectionLimit: 20
})

// 自定义查询方法
module.exports.query = (...args) => {
    // 3个参数:sql语句, [查询参数], 回调方法
    const callback = args.pop()
    pool.getConnection((error, connection) => {
        if (error) {
            return callback(error)
        }
        connection.query(...args, (...res) => {
            connection.release()
            callback(...res)
        })
    })
}