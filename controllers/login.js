const login = require('../models/login')

module.exports.showLogin = (req, res) => {
    res.render('login.html')
}

module.exports.login = (req, res) => {
    
    const body = req.body// 用户的数据

    login.username(body.username, (err, login) => {
        if (err) {
            console.log('1');
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