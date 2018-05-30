//包引入
const express = require('express')
const fs = require('fs')
const bodyParser = require('body-parser')

//创建实例
const app = express()

// 开放配置目录
app.use('/node_modules', express.static('./node_modules/'))
app.use('/public', express.static('./public/'))
app.use('/views', express.static('./views/'))

// 配置POST请求
app.use(bodyParser.urlencoded({ extended:false }))
app.use(bodyParser.json())

// 配置模版引擎
app.engine('html', require('express-art-template'))


// 配置请求路由
app.get('/',function (req,res) {
    fs.readFile('./views/index.html', function (err, data) {
        if (err) {
            throw err
        }
        res.end(data)
    })
})
app.get('/',function (req,res) {
    fs.readFile('./views/index.html', function (err, data) {
        if (err) {
            throw err
        }
        res.end(data)
    })
})


// 绑定端口
app.listen(3000, function () {
    console.log('运行中...')
})