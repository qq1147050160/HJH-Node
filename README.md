##项目结构
├── node_modules
├── controllers 控制器
├── models 模型
├── public 静态资源
├── views 视图
├── app.js 应用程序启动入口
├── config.js 应用配置文件
├── .gitignore Git忽略文件
├── package.json 项目包说明文件，用来存储项目名称，第三方包依赖等信息
├── package-lock.json
└── README.md 项目说明文件

##模块加载(引入)
--require 这个方法可以引入模块

##俩个文件之间传值
--module.exports 这个对象可以用来接收 传递

##实用NPM包
--http-server 快速创建一个服务器并启动 hs -o
--browser-sync 同步刷新浏览器 browser-sync start --server --files "*"
--nodemon 自动重启服务器 nodemon app.js

##模版引擎
--art-template
--express-art-template

app.engine('html', require('express-art-template')) 配置

--引入公共头尾部方法
    + {{ include "./header.html" }}

##请求处理
res.render 方法会自动 查找指定文件替换字符
res.redirect 重定向

##框架
express

##框架插件
body-parser 解析post请求