//node搭建http服务器
//1.导入http模块
let http=require("http");

//2.使用http,建立我们的服务器
http.createServer(function(request,response){
    //respones 响应头 (状态码,响应头对象)
    //把编码设置成utf-8
    response.writeHead(200,{"Content-Type":"text/html;charset:utf-8"})
    //响应体
    response.write('<head><meta charset="utf-8"> </head>')
    response.write("<h1>第一个本地服务器</h1>");
    //结束响应
    response.end();
}).listen(9000,"127.0.0.1",function(){
    console.log("start:9000");
})