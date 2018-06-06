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

module.exports.userVerification = (userdata, callback) => {
    const sql = 'SELECT `username`,`password` FROM t_user WHERE `username` ="' + userdata.username + '" AND `password` = "'+userdata.password+'"'
    query(sql, (err, res) => {
        if (err) {
            return callback(err)
        }
        callback(null, res[0])
    })
}