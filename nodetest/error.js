var express = require("express");
var app = express();


app.get("/index",function(req,res,next){
	console.log("必经路由");
	consol0e.log(111);
});
app.use(function (err,req,res,next) {
	console.error(err.stack);
	res.status(500).send("一些错误");
});
app.listen(8081,function(){
	console.log("服务器启动成功");
});