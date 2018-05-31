//包引入
const express = require('express')
const bodyParser = require('body-parser')
const router = require('./router')
//创建实例
const app = express()


// 开放配置目录
app.use('/node_modules', express.static('./node_modules/'))
app.use('/public', express.static('./public/'))
app.use('/views', express.static('./views/'))


// 配置POST请求
app.use(bodyParser.urlencoded({ extended:false }))
app.use(bodyParser.json())


// 配置模版引擎(定义html结尾解析)
app.engine('html', require('express-art-template'))


// 挂载路由
app.use(router)


// 端口
app.listen(3000, function () {
    console.log('运行中...')
})