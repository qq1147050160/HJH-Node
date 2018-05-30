const express = require('express')
const router = express.Router()// 创建路由容器
const userController = require('./controllers/user')
const indexContriller = require('./controllers/index')


// 配置请求路由
router.get('/', indexContriller.showIndex)

router.get('/user', userController.showUser)

// 导出路由
module.exports = router