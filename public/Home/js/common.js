// 初始化一个对象
var obj = obj || {};
(function () {
    obj.init = {
        eventOperation: function () {
            //页面内容加载完毕会自动触发
                this.autoScreenSize();
        },
        autoScreenSize: function () {
            //自动适应屏幕
            (function (doc, win) {
                var docEl = doc.documentElement,
                    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
                    recalc = function () {
                        var clientWidth = docEl.clientWidth;
                        if (!clientWidth) return;
                        docEl.style.fontSize = clientWidth / 12 + 'px';
                    };

                if (!doc.addEventListener) return;
                win.addEventListener(resizeEvt, recalc, false);
                doc.addEventListener('DOMContentLoaded', recalc, false);
            })(document, window);
        },
        imgUploadPreview: function (e) {
            // 得到上传对象
            let file = e.target.files[0];
            // 得到上传类型
            let type = file.type.split('/')[0];
            // 得到图片大小
            let size = Math.round(file.size / 1024 / 1024);
                // 判断类型
                if (type !== 'image') {
                    alert('您需要上传图片哦!');
                    return;
                }
                // 判断大小
                if (size > 2) {
                    alert('图片大小不能超过2M哦!');
                    return;
                }
            //新建FileReader对象
            let reader = new FileReader(); 
                //读取为base64
                reader.readAsDataURL(file);
                //以下代码可以删除
                reader.onloadstart = function(){
                    //开始读取
                };
                reader.onprogress = function(e){
                    //这个是定时触发的事件，文件较大的时候较明显
                    var p = '已完成：' + Math.round(e.loaded / e.total * 100) + '%' ;
                    document.querySelector('.file_upload').innerHTML = p;
                    //文件较大,就会出现多个uploading
                    console.log('uploading');
                };
                reader.onabort = function(){
                    //取消上传功能
                };
                reader.onerror = function(){
                    //文件读取出错的时候触发
                };
                reader.onload = function(){
                    //完成
                };
                reader.onloadend = function (e) {
                    //预览
                    var dataURL = reader.result,
                        image = '<img src="'+dataURL+'" alt="用户img"/>'; //预览图片
                    document.querySelector('.file_upload').innerHTML = image;      
                };
        }
    }
    // 初始化
    obj.init.eventOperation();
})();