var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var urlencodeParser = bodyParser.urlencoded({
	extended:false
})
app.use(express.static("public"));
app.get("/index",function(req,res){
	res.sendFile(__dirname+"/views/"+"index.html");
});
app.post("/index",urlencodeParser,function(req,res,next){
	console.log(req.body.username);
	res.redirect("https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=0&rsv_idx=1&tn=baidu&wd="+req.body.username+"&rsv_pq=b1fefbc100133cae&rsv_t=6e1aOmwrGTFlxyLhSvYR09lD3m%2BHH1lc5aY21XXWHjUZw%2FElwHy1ynWLCS4&rqlang=cn&rsv_enter=1&rsv_sug3=13&rsv_sug1=11&rsv_sug7=101");
	req.data = "你妹呀";
	next();
},function(req,res,next){
	console.log(req.data);
});
app.listen(8081,function () {
	console.log("接口已经启动");
});
