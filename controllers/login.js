const login = require('../models/login')

module.exports.showLogin = (req, res) => {
    res.render('login.html')
}

module.exports.login = (req, res) => {
    
    const body = req.body

    login.email(body.email, (err, user) => {
        if (err) {
            return res.status(500).json({
                'error': err.message
            })
        }
        res.status(200).json({
        'code': 1,
        'message': '成功'
        })
    })
    
}