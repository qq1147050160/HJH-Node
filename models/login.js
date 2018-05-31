const {query} = require('../utilities/db')

module.exports.email = (email, callback) => {
    const sql = 'SELECT `email` FROM t_user WHERE `email` = ?'
    query(sql, [email], (err, res) => {
        if (err) {
            return callback(err)
        }
        callback(null, res[0])
    })
}

module.exports.username = (username, callback) => {
    const sql = 'SELECT `userName` FROM t_user WHERE `userName` = ?'
    query(sql, [username], (err, res) => {
        if (err) {
            return callback(err)
        }
        callback(null, res[0])
    })
}