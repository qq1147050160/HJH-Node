//包引入
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const router = require('./router')
const server = require('http').createServer(app)
const io = require('socket.io')(server)
const responseTime = require('response-time')
const compression = require('compression')
const session = require('express-session')
const config = require('./config')

const MySQLStore = require('express-mysql-session')(session)
const sessionStore = new MySQLStore(config.dbConfig)


// 响应时间中间键
app.use(responseTime())
// 压缩传输
app.use(compression())
// 开放配置目录
app.use('/node_modules', express.static('./node_modules/'))
app.use('/public', express.static('./public/'))
app.use('/views', express.static('./views/'))
// 配置POST请求
app.use(bodyParser.urlencoded({ extended:false }))
app.use(bodyParser.json())


// 配置模版引擎(定义html结尾解析)
app.engine('html', require('express-art-template'))


// 配置session
app.use(session({
    key: 'session_cookie_name',
    secret: 'session_cookie_seret',
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 3
    },
    store: sessionStore,
    resave: false,
    saveUninitialized: false
}))


// 中间键
app.use((seq,res,next) => {
    console.log('监控');
    next()
})
// 错误处理中间键
app.use((err, req, res, next) => {
    next()
})


// 挂载路由
app.use(router)


//socket部分
io.on('connection', function(socket) {
    //接收并处理客户端的hi事件
    
    socket.on('server', function(data) {
        console.log(data);

        //触发客户端事件c_hi
        socket.emit('connected','服务器:你连我干嘛!')
    })

    //断开事件
    // socket.on('disconnect', function(data) {
    //     console.log('断开',data)
    //     socket.emit('c_leave','离开');
    //     //socket.broadcast用于向整个网络广播(除自己之外)
    //     //socket.broadcast.emit('c_leave','某某人离开了')
    // })

});




// 处理404请求
app.use((req, res, next) => {
    res.status(404).render('404.html')
})

// 端口
app.listen(3000, function () {
    console.log('运行中...')
})