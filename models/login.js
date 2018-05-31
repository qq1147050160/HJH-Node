const {query} = require('../utilities/db')

module.exports.email = (email, callback) => {
    const sql = 'SELECT `email` FROM `users WHERE `email`=?'
    query(sql, [email], (err, res) => {
        if (err) {
            return callback(err)
        }
        callback(null, res[0])
    })
}