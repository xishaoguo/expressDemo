var express = require("express");
var app = express();
var cookieParser = require("cookie-parser");

app.use(cookieParser());
app.get("/index",function(req,res,next){
	console.log(req.cookie);
});
app.listen(8081,function (argument) {
	console.log("服务器已经启动");
});