const login = require('../models/login')
const md5 = require('blueimp-md5')

module.exports.showLogin = (req, res) => {
    res.render('login.html')
}

module.exports.login = (req, res) => {
    
    const body = req.body// 用户的数据

    login.userVerification(body, (err, login) => {
        if (err) {
            return res.status(500).json({
                'error': err.message
            })
        }
        if (login) {
            res.status(200).json({
                'code': 1,
                'message': '成功'
            })   
        }
    })  
}