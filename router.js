const express = require('express')
const router = express.Router()// 创建路由容器
const userController = require('./controllers/user')
const indexController = require('./controllers/index')
const loginController = require('./controllers/login')


// 配置请求路由
router.get('/', indexController.showIndex)
router.get('/user', userController.showUser)
router.get('/login', loginController.showLogin)
router.post('/login', loginController.login)
// 导出路由
module.exports = router