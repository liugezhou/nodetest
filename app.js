const http = require('http')

const homePage = `
<!DOCTYPE html>
<html>
    <head>
        <meta charset='utf-8'>
        <title>六个周</title>
        <style>
            *{
                padding:0;
                margin:0;
            }
            body{
                padding:30px 0;
                text-align:center;
                font-size:16px;
                margin-top:15%;
                background-color:#ababab;
            }
            h1,
            h2{
                color:#fff;
            }
            nav{
                margin-top:25px;
            }
            ul li{
                line-height:40px;
            }
            a {
                color:#1e7ddc;
                text-decoration:none;
                font-size:20px;
            }
        </style>
    </head>
    <body>
        <h1>六个周的个人网站测试</h1>
        <h2>2020-02-22 01:38:00</h2>
        <nav>
            <ul>
                <li>
                    <a target="_blank" href="https://www.liugezhou.online">个人博客</a>
                </li>
                <li>
                    <a target="_blank" href="https://juejin.im/user/5afcc0a66fb9a07aad17b79e">掘金主页</a>
                </li>
                <li>
                    <a target="_blank" href="https://www.jianshu.com/u/5842abb77bd1">简书主页</a>
                </li>
                <li>
                    <a target="_blank" href="https://github.com/liugezhou">Github</a>
                </li>
                <li>
                    <a target="_blank" href="https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzIxNDc0OTMxNA==&scene=124#wechat_redirect">Dangerous Wakaka</a>
                </li>
            </ul>
        </nav>
    </body>
`
http.createServer((req,res) => {
    res.statusCode = 200
    res.setHeader('Content-Type','text/html')
    res.end(homePage)
}).listen(3000, () => {
    console.log('Server Running At 3000')
})